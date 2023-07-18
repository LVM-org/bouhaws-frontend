<template>
  <h3
    :class="`font-normal 
    ${size == 'lg' ? 'lg:text-lg mdlg:text-lg text-sm' : ''}
    ${size == 'xl' ? 'lg:text-lg mdlg:text-lg text-lg' : ''}
    ${size == 'base' ? 'lg:text-base mdlg:text-[13px] text-sm' : ''}
    ${size == 'xs' ? 'mdlg:!text-[12px] text-xs' : ''}
    ${size == '2xl' ? ' text-xl' : ''}
    ${size == '3xl' ? ' text-2xl' : ''} 
    ${customClass}
    ${color}`"
  >
    <slot />
  </h3>
</template>

<script lang="ts">
export default {
  props: {
    size: {
      type: String,
      default: "lg",
    },
    color: {
      type: String,
      default: "text-bouhaws-text-black",
    },
    customClass: {
      type: String,
      default: "",
    },
  },
  name: "HeaderText",
};
</script>
