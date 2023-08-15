// stores/counter.js
import axios from "axios";
import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";
import {
  doc,
  setDoc,
  collection,
  query,
  where,
  onSnapshot,
  deleteDoc,
  getDoc,
  orderBy,
} from "firebase/firestore";
import { db } from "@/firebase-init";
import moment from "moment/moment";

axios.defaults.baseURL = "http://localhost:4001";

export const useUserStore = defineStore("user", {
  state: () => ({
    sub: "",
    email: "",
    picture: "",
    firstName: "",
    lastName: "",
    emails: [],
  }),
  getters: {
    newEmailsCount: (state) =>
      state.emails.filter((email) => !email.hasViewed).length,
  },
  actions: {
    getEmailsByEmailAddress() {
      const q = query(
        collection(db, "emails"),
        where("toEmail", "==", this.$state.email),
        orderBy("createAt", "desc")
      );
      onSnapshot(
        q,
        (querySnapshot) => {
          const resultArray = [];
          querySnapshot.forEach((doc) => {
            resultArray.push({
              id: doc.id,
              firstName: doc.data().firstName,
              lastName: doc.data().lastName,
              fromEmail: doc.data().fromEmail,
              toEmail: doc.data().toEmail,
              subject: doc.data().subject,
              body: doc.data().body,
              hasViewed: doc.data().hasViewed,
              createAt: moment(doc.data().createAt).format("MMM D HH:mm"),
            });
          });
          this.$state.emails = resultArray;
        },
        (error) => {
          console.log(error);
        }
      );
    },

    async sendEmail(data) {
      try {
        await setDoc(doc(db, `emails/${uuid()}`), {
          firstName: this.$state.firstName,
          lastName: this.$state.lastName,
          fromEmail: this.$state.email,
          toEmail: data.toEmail,
          subject: data.subject,
          body: data.body,
          hasViewed: false,
          createAt: Date.now(),
        });
      } catch (error) {
        console.log(error);
      }
    },

    async getEmailDetail(id) {
      const docSnap = await getDoc(doc(db, "emails", id));

      if (docSnap.exists()) {
        const data = docSnap.data();
        data.createAt = moment(data.createAt).format("MMM D HH:mm");
        return data;
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    },

    async emailHasBeenViewed(id) {
      try {
        setDoc(
          doc(db, `emails/${id}`),
          {
            hasViewed: true,
          },
          { merge: true }
        );
      } catch (error) {
        console.log(error);
      }
    },

    async deleteEmail(id) {
      try {
        await deleteDoc(doc(db, "emails", id));
      } catch (error) {
        console.log(error);
      }
    },

    async getUserDetailFromGoogle(data) {
      const {
        data: { sub, email, picture, given_name, family_name },
      } = await axios.post("api/google-login", {
        token: data.credential,
      });

      this.$state.sub = sub;
      this.$state.email = email;
      this.$state.picture = picture;
      this.$state.firstName = given_name;
      this.$state.lastName = family_name;
    },

    clearUser() {
      this.$state.sub = null;
      this.$state.email = null;
      this.$state.picture = null;
      this.$state.firstName = null;
      this.$state.lastName = null;
      this.$state.emails = [];
    },
  },
  persist: true,
});
