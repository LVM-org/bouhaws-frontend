<template>
  <div
    class="flex items-center justify-between space-x-3 p-2 bg-white border-b border-[#E3E3E3]"
  >
    <div class="flex items-center text-sm space-x-2 truncate">
      <span class="text-[#3392FF]">{{ index }}</span>

      <span class="h-8 w-8 rounded-full">
        <img
          src="/images/profile-picture.svg"
          :alt="user.title"
          class="w-full h-full"
        />
      </span>

      <h6 class="truncate">
        {{ user.name }}
      </h6>
    </div>

    <div class="text-sm space-x-2 text-bouhaws-light-gray-2">
      <!-- {{ formatNumber(user.reward) }} -->
      {{ user.reward > 1 ? "Points" : "Point" }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"; 

export default defineComponent({
  components: {   },
  props: { 
  user: {
    type: Object,
    default: () => { }
  },
  index: {
    type: Number, 
  }
  },
  
  name: "",

  setup() { 

    return { };
  },
});
</script> 