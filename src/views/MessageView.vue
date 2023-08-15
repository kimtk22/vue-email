<template>
  <div
    id="SingleMessageSection"
    class="w-full bg-white ml-2 rounded-t-xl h-full shadow-sm"
  >
    <div class="border-b">
      <div class="flex items-center justify-between px-1.5 py-0.5">
        <div class="flex">
          <router-link to="/email">
            <IconComponent
              iconString="back"
              iconColor="#636363"
              :iconSize="19"
              hoverColor="hover:bg-gray-200"
              text="Back to inbox"
            />
          </router-link>
          <IconComponent
            @click="deleteEmail"
            iconString="trash"
            iconColor="#636363"
            :iconSize="19"
            hoverColor="hover:bg-gray-200"
            text="Delete"
          />
        </div>
        <div class="text-xs text-gray-500">1-50 of 153</div>
      </div>
    </div>

    <div class="w-full text-xl ml-20 font-light pt-5">
      {{ email.subject }}
    </div>
    <div class="w-full flex">
      <img
        class="rounded-full mt-8 mx-5 w-[40px] h-[40px]"
        src="https://via.placeholder.com/45"
        alt=""
      />

      <div class="w-full my-4 mx-0.5">
        <div class="font-semibold text-sm mt-4 mb-4">
          <div class="w-full flex justify-between items-center">
            <div>{{ email.fromEmail }}</div>
            <div class="mr-5 text-xs font-normal">{{ email.createAt }}</div>
          </div>
          <span class="text-xs text-gray-500 font-normal">to me</span>
        </div>
        <div>
          {{ email.body }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconComponent from "@/components/IconComponent.vue";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/store/userStore";

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();

let email = ref({});

onMounted(async () => {
  const id = route.params.id;
  const res = await userStore.getEmailDetail(id);

  email.value.id = id;
  email.value.body = res.body;
  email.value.createAt = res.createAt;
  email.value.firstName = res.firstName;
  email.value.fromEmail = res.fromEmail;
  email.value.hasViewed = res.hasViewed;
  email.value.lastName = res.lastName;
  email.value.subject = res.subject;
  email.value.toEmail = res.toEmail;

  await userStore.emailHasBeenViewed(id);
});

const deleteEmail = async () => {
  await userStore.deleteEmail(email.value.id);
  router.push("/");
};
</script>

<style lang="scss">
#SingleMessageSection {
}
</style>
