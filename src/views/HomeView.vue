<template>
  <div id="HomeView" class="w-full bg-white ml-2 rounded-t-xl h-full shadow-sm">
    <div class="border-b">
      <div class="flex items-center justify-between px-4 my-3">
        <IconComponent
          @click="deleteEmails"
          class="-m-2 -ml-2.5"
          iconString="trash"
          iconColor="#636363"
          :iconSize="19"
          hoverColor="hover:bg-gray-200"
          text="Delete selected"
        />
        <div class="text-xs text-gray-500">1-50 of 153</div>
      </div>
    </div>
    <MessageRow
      v-for="email in userStore.emails"
      :id="email.id"
      :key="email"
      :from="`${email.firstName} ${email.lastName}`"
      :subject="email.subject"
      :body="email.body"
      :hasViewed="email.hasViewed"
      :time="email.createAt"
      @selectedId="selectedId"
    />
  </div>
</template>

<script setup>
import IconComponent from "@/components/IconComponent.vue";
import MessageRow from "@/components/MessageRow.vue";
import { useUserStore } from "@/store/userStore";
import { onMounted } from "vue";

const selectedEmailIds = new Set();
const userStore = useUserStore();

onMounted(() => {
  userStore.getEmailsByEmailAddress();
});

const selectedId = (event) => {
  if (event.bool) {
    selectedEmailIds.add(event.id);
  } else {
    selectedEmailIds.delete(event.id);
  }
};

const deleteEmails = () => {
  const result = confirm("선택된 메일을 삭제하시겠습니까?");
  if (result) {
    selectedEmailIds.forEach((id) => {
      userStore.deleteEmail(id);
    });
  }
};
</script>
