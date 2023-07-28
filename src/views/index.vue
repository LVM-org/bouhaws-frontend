<template>
  <dashboard-layout>
    <div class="py-5 text-green-500"></div>
  </dashboard-layout>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from "vue";
import { useMeta } from "vue-meta";
import { useRouter } from "vue-router";

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

    const router = useRouter();

    onBeforeMount(() => {
      router.push("/home")
    })

    return {};
  },
});
</script>
