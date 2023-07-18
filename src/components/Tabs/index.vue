<template>
  <div
    :class="`flex items-center ${
      isSpaced ? 'space-x-3 bg-transparent' : '-space-x-2'
    }`"
  >
    <TypoNormalText
      v-for="(tab, index) in tabs"
      :key="index"
      :custom-class="`${
        activeTab == tab.title ? 'bg-bouhaws-semi-dark z-10' : 'bg-white'
      } ${isFullSpan && 'flex-1'} ${
        isBtnLarge ? 'py-3 px-6 font-medium' : 'py-2 px-5'
      } mx-auto shadow-custom  select-none rounded-[5px] capitalize cursor-pointer flex justify-center`"
      :color="`${
        activeTab == tab.title ? 'text-white' : 'text-bouhaws-text-black'
      }`"
      @click="selectTab(tab.title)"
    >
      {{ tab.title }}
    </TypoNormalText>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TypoNormalText from "@/components/Typo/NormalText.vue"

export default defineComponent({
  components: {
    TypoNormalText,
  },
  props: {
  tabs: {
    type: Object,
    required: true, 
  },
  activeTab: {
    type: String,
    default: "all",
  },
  isSpaced: {
    type: Boolean,
    default: true,
  },
  isFullSpan: {
    type: Boolean,
    default: false,
  },
  isBtnLarge: {
    type: Boolean,
    default: false,
  },
  },
  
  name: "Tabs",

  setup(_, { emit }) {    
    const selectTab = (active_tab: string) => {
      emit("selectTab", active_tab);
    };

    return {
      selectTab
    };
  },
});
</script> 
