<template>
  <div :class="`rounded-2xl  box-shadow bg-white ${customClass}`">
    <slot/>
  </div>
</template>
 

<script lang="ts">
import { defineComponent } from "vue"; 

export default defineComponent({
  components: { 
  },
  props: { 
  height: {
    type: Number,
    default: "12.5rem"
  },
  customClass: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    default: ""
  }
  },
  
  name: "Container",

  setup() { 

    return { };
  },
});
</script>

