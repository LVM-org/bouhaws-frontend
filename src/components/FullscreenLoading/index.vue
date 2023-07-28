<template>
  <div v-if="loading" class="fixed !top-0 !left-0 !min-h-screen inset-0 flex items-center justify-center bg-black bg-opacity-50 !z-[99999999px]">
    <div class="sticky !top-0 left-0 !min-w-screen bg-red-600 !min-h-screen flex items-center justify-center !z-50">
      <div class=" animate-spin">
        <IconLoader
          name="spinner"
          :customClass="'h-[2rem] animate-spin'"
        />
      </div>  
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref , watch } from "vue";

export default defineComponent({
  name: "FullscreenLoading",
  props: {
    loading: {
      type: String,
      required: true,
    }, 
  },
  setup(props) {
    const loading = ref(props.loading);

    watch(() => props.loading, (newValue) => {
      loading.value = newValue;
    });

    return {
      loading,
    };
  },
});
</script>