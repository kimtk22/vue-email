<template>
  <div id="UserComponent">
    <img
      @:click="openMenu = !openMenu"
      data-tooltip-target="tooltip-no-arrow-user"
      data-tooltip-placement="bottom"
      src="https://via.placeholder.com/40"
      class="rounded-full w-8 cursor-pointer"
    />
    <div
      v-show="!openMenu"
      id="tooltip-no-arrow-user"
      role="tooltip"
      class="inline-block absolute invisible text-xs z-10 py-1 px-2 font-medium text-white bg-gray-900 rounded-sm shadow-sm opacity-0 tooltip dark:bg-gray-600 delay-150"
    >
      <div>Google Account</div>
      <div class="text-gray-300">Kim TK</div>
      <div class="text-gray-300">vodjaos@gmail.com</div>
    </div>
    <div
      v-show="openMenu"
      class="bg-white absolute top-14 right-2 rounded-lg z-10 w-80"
    >
      <div class="w-full flex justify-center">
        <img
          src="https://via.placeholder.com/70"
          class="rounded-full w-20 mt-4"
        />
      </div>
      <div class="text-gray-700 w-full flex justify-center mt-2 text-lg">
        Kim TK
      </div>
      <div
        class="text-gray-700 w-full flex justify-center mt-2 text-sm pb-4 border-b"
      >
        vodjaos@gmail.com
      </div>
      <div class="flex justify-center my-5">
        <button
          class="bg-transparent text-xs hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-300 rounded"
        >
          Sign out fo Gmail
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openMenu: false,
    };
  },
};
</script>
