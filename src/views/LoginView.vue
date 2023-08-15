<template>
  <div id="LoginView" class="grid h-screen place-items-center">
    <div>
      <img width="280" src="/img/GmailLogin.png" alt="" />
      <div class="flex justify-center">
        <GoogleLogin :callback="callback" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/userStore";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

const callback = async (response) => {
  await userStore.getUserDetailFromGoogle(response);
  setTimeout(() => {
    router.push("/email");
  }, 200);
};
</script>
