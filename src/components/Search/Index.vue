<template>
  <div class="relative w-[18.75rem] ring-1 rounded-lg ring-primary-gray">
    <span class="absolute bottom-0 left-0 flex px-4 h-full w-auto items-center">
      <!-- <IconSearch /> -->
    </span>

    <input
      id="search-box"
      type="text"
      name="search-box"
      class="rounded-lg border-none bg-[#FCFCFE] p-3.5 pl-12 my-auto placeholder:text-[#7C8DB5] text-base outline-none w-full"
      :placeholder="placeholder"
    />
  </div>
</template> 
 
<script lang="ts">
import { defineComponent } from "vue"; 

export default defineComponent({
  components: {   },
  props: { 
  placeholder: {
    type: String,
    default: 'Search donors...',
  },
  },
  
  name: "",

  setup() { 

    return { };
  },
});
</script>

