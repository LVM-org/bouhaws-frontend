<template>
  <div class="flex items-center space-x-3 p-1 w-full truncate">
    <span class="rounded-full">
      <img
        src="/images/profile-picture.svg"
      src="/images/profile-picture.svg"
        alt=""
        class="!h-12 !w-12 rounded-full"
      />
    </span>

    <div class="flex flex-col w-full truncate space-y-0.5">
      <div class="space-x-3 flex justify-between items-center truncate w-full">
        <span class="text-sm flex-1 font-medium truncate"> Username </span>
        <span class="text-xs font-medium"> 09:20 am </span>
      </div>

      <div
        class="space-x-3 flex justify-between items-center font-light text-xs w-full truncate"
      >
        <span class="text-bouhaws-purple flex-1 truncate"> Typing ... </span>

        <span class="py-0.5 px-2 rounded-full bg-bouhaws-purple text-white">
          2
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"; 

export default defineComponent({
  components: {   },
  props: { 
  challenge: {
    type: Object,
    default: () => { }
  }
  },
  
  name: "",

  setup() { 

    return { };
  },
});
</script>
 