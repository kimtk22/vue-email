<template>
  <div id="LoginView" class="grid h-screen place-items-center">
    <div>
      {{ userStore }}
      <img width="280" src="/img/GmailLogin.png" alt="" />
      <div class="flex justify-center">
        <GoogleLogin :callback="callback" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/userStore";

const userStore = useUserStore();

const callback = async (response) => {
  await userStore.getUserDetailFromGoogle(response);
};
</script>
