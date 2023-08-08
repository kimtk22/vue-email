<template>
  <div id="EmailView" class="bg-gray-50 h-screen">
    <div class="flex items-center p-2">
      <div class="flex justify-start items-center min-w-[250px]">
        <IconComponent
          iconString="menu"
          iconColor="#636363"
          :iconSize="19"
          hoverColor="hover:bg-gray-200"
          text="Main menu"
          class="-ml-2 mr-2"
        />
        <img src="../../../public/img/GmailLogo.png" width="107" />
      </div>
      <div class="flex w-full justify-between">
        <div
          class="w-full bg-gray-200 flex items-center p-1 px-2 rounded-lg max-w-[700px] min-w-[250px]"
        >
          <IconComponent
            iconString="magnify"
            iconColor="#636363"
            :iconSize="19"
            hoverColor="hover:bg-gray-200"
            text="Search"
          />
          <input
            type="text"
            class="w-full h-10 bg-gray-200 border-none border-transparent focus:ring-0 outline-none placeholder-gray-900"
            placeholder="Search"
          />
          <IconComponent
            iconString="tune"
            iconColor="#636363"
            :iconSize="19"
            hoverColor="hover:bg-gray-200"
            text="Show search options"
          />
        </div>
        <div class="flex items-center justify-between w-32 ml-6">
          <IconComponent
            iconString="cog"
            iconColor="#636363"
            :iconSize="19"
            hoverColor="hover:bg-gray-200"
            text="Settings"
          />
          <IconComponent
            iconString="apps"
            iconColor="#636363"
            :iconSize="19"
            hoverColor="hover:bg-gray-200"
            text="Google Apps"
          />
          <UserComponent />
        </div>
      </div>
    </div>

    <div class="flex w-full">
      <div id="SideMenu" class="w-[300px]">
        <div
          class="flex items-center justify-center bg-sky-200 w-36 h-8 mt-2 rounded-2xl ml-2 p-7 cursor-pointer"
        >
          <PencilOutlineIcon size="25" class="mr-3" />
          <span class="text-sm">Compose</span>
        </div>
        <div class="my-5"></div>
        <div
          class="flex w-[250px] items-center justify-between bg-blue-100 px-6 py-1.5 rounded-r-full"
        >
          <div class="flex items-center">
            <InboxIcon size="17" />
            <div class="text-sm pl-4 font-semibold">Inbox</div>
          </div>
          <div class="text-xs pl-4 font-semibold">26</div>
        </div>
        <div class="flex w-[250px] items-center justify-between px-6 py-1.5">
          <div class="flex items-center">
            <StarOutlineIcon size="17" />
            <div class="text-sm pl-4">Starred</div>
          </div>
        </div>
        <div class="flex w-[250px] items-center justify-between px-6 py-1.5">
          <div class="flex items-center">
            <ClockOutlineIcon size="17" />
            <div class="text-sm pl-4">Snoozed</div>
          </div>
        </div>
        <div class="flex w-[250px] items-center justify-between px-6 py-1.5">
          <div class="flex items-center">
            <SendOutlineIcon size="17" />
            <div class="text-sm pl-4">Sent</div>
          </div>
        </div>
        <div class="flex w-[250px] items-center justify-between px-6 py-1.5">
          <div class="flex items-center">
            <FileOutlineIcon size="17" />
            <div class="text-sm pl-4">Draft</div>
          </div>
        </div>
      </div>
      <!-- this is where the page changes -->
      <router-view />
      <!-- this is where the page changes -->
    </div>
  </div>
</template>

<script setup>
import IconComponent from "@/components/IconComponent.vue";
import UserComponent from "@/components/UserComponent.vue";
import PencilOutlineIcon from "vue-material-design-icons/PencilOutline.vue";
import InboxIcon from "vue-material-design-icons/Inbox.vue";
import StarOutlineIcon from "vue-material-design-icons/StarOutline.vue";
import ClockOutlineIcon from "vue-material-design-icons/ClockOutline.vue";
import SendOutlineIcon from "vue-material-design-icons/SendOutline.vue";
import FileOutlineIcon from "vue-material-design-icons/FileOutline.vue";
</script>
