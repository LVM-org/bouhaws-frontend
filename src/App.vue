<template>
  <metainfo>
    <template #title="{ content }">{{
      content ? `${content} | App Name` : `App Name`
    }}</template>
  </metainfo>
  <router-view />
</template>
<script lang="ts">
import { useMeta } from "vue-meta";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  components: {},
  setup() {
    useMeta({
      title: "Home",
      htmlAttrs: { lang: "en", amp: true },
    });

    return {};
  },
});
</script>
<style>
body,
html {
  -webkit-tap-highlight-color: transparent;
}
</style>
