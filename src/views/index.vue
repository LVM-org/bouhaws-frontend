<template>
  <dashboard-layout>
    <div class="py-5 text-green-500">Hello wewdfdfd ew world</div>
  </dashboard-layout>
</template>  

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import { useMeta } from "vue-meta";
import { scrollToTop } from "@/composables";

export default defineComponent({
  components: {},
  middlewares: {
    fetchRules: [],
  },
  name: "IndexPage",
  setup() {
    useMeta({
      title: "Home",
    });

    return {};
  },
});
</script>
