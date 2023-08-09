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

    <div class="w-full text-xl ml-20 font-light pt-5">Subject</div>
    <div class="w-full flex">
      <img
        class="rounded-full mt-8 mx-5 w-[40px] h-[40px]"
        src="https://via.placeholder.com/45"
        alt=""
      />

      <div class="w-full my-4 mx-0.5">
        <div class="font-semibold text-sm mt-4 mb-4">
          <div class="w-full flex justify-between items-center">
            <div>vodjaos@gmail.com</div>
            <div class="mr-5 text-xs font-normal">Jun 20 15:15</div>
          </div>
          <span class="text-xs text-gray-500 font-normal">to me</span>
        </div>
        <div>
          al;skjfiealkfdsflkskjfiealkfdsflkskjfiealkfdsflkskjfiealkfdsflkskjfiealkfdsflkskjfiealkfdsflkskjfiealkfdsflkskjfiealkfdsflkskjfiealkfdsflk;asjdlfjasldjflaskjdflaksjdfl;askd
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { defineProps, toRefs } from "vue";
// import CheckboxBlankOutlineIcon from "vue-material-design-icons/CheckboxBlankOutline.vue";
// import StarOutlineIcon from "vue-material-design-icons/StarOutline.vue";
import IconComponent from "@/components/IconComponent.vue";

// const props = defineProps({
//   from: String,
//   subject: String,
//   body: String,
//   time: String,
// });

// const { from, subject, body, time } = toRefs(props);

// let icon = null;
// console.log(iconString);
// if (iconString.value === "menu") {
//   icon = MenuIcon;
// }
</script>

<style lang="scss">
#SingleMessageSection {
}
</style>
