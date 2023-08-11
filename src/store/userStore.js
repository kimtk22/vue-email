// stores/counter.js
import axios from "axios";
import { defineStore } from "pinia";

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
  actions: {
    async getUserDetailFromGoogle(data) {
      const {
        data: { sub, email, picture, firstName, lastName },
      } = await axios.post("api/google-login", {
        token: data.credential,
      });

      this.$state.sub = sub;
      this.$state.email = email;
      this.$state.picture = picture;
      this.$state.firstName = firstName;
      this.$state.lastName = lastName;
    },
  },
  persist: true,
});
