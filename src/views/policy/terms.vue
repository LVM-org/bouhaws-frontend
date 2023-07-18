<template>
  <div>terms</div>
</template>


<script lang="ts"> 
import { defineComponent } from "vue";
import { useMeta } from "vue-meta"; 

export default defineComponent({ 
  name: "PolicyTermsPage",
  setup() {
    useMeta({
      title: "Terms",
    });

    return {};
  },
});
</script>
