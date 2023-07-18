<template>
  <div>conditions</div>
</template>

<script lang="ts"> 
import { defineComponent } from "vue";
import { useMeta } from "vue-meta"; 

export default defineComponent({ 
  name: "PolicyConditionsPage",
  setup() {
    useMeta({
      title: "Conditions",
    });

    return {};
  },
});
</script>
