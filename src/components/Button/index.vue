<template>
  <button
    :class="`flex items-center space-x-4 text-white  text-sm font-semibold !d-flex !justify-center !w-full !items-center ${padding} ${customClass} rounded-[7px] focus:outline-none`"
    :disabled="disabled"
    @click="clickBtn"
  > 
    <template v-if="!useSlot">
      <IconSpinner
        v-if="loading" 
        name="arrow-back-blue"
        class="animate-spin" 
      />

      <span :style="{ fontSize: fontSize }">
        {{ loading ? "" : text }}
      </span>
    </template>

    <template v-else>
      <IconLoader
        v-if="loading" 
        name="spinner"
        class="animate-spin" 
      />

      <div v-else class="!flex !justify-center !items-center"> 
        <slot />
      </div>
    </template>
  </button>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue"; 
import IconLoader from '@/components/IconLoader/index.vue';

export default defineComponent({
  props: { 
    text: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "button",
    },
    hasIcon: {
      type: Boolean,
      default: true,
    },
    hasBorder: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isGray: {
      type: Boolean,
      default: false,
    },
    customClass: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    fontSize: {
      type: String,
      default: "0.875rem",
    },
    useSlot: {
      type: Boolean,
      default: false,
    },
    padding: {
      type: String,
      default: "py-4 px-6",
    },
  },
  components: {IconLoader},
  name: "ButtonComponent", 

  setup(_, { emit }) { 
    const clickBtn = () => {
      emit("click");
    };

    return {
      clickBtn
    }   
  } 
}) 
</script>


<style scoped>
button {
  /* @apply flex w-[inherit] items-center justify-center rounded-lg bg-bouhaws-blue-main text-base font-semibold text-white; */
  box-shadow: 0px 2px 4px rgba(23, 206, 137, 0.07);
  font-family: "Poppins", sans-serif;
}
/* button.hasBorder {
  @apply border bg-transparent font-medium;
}

button:disabled {
  @apply cursor-not-allowed;
}

button.isGray {
  @apply border border-solid border-[#7c8db5] text-[#7c8db5];
}

button.isGray.hasBorder {
  @apply border border-solid border-[#7c8db5] text-[#7c8db5];
}

button span {
  @apply block text-sm;
}  */
</style>
