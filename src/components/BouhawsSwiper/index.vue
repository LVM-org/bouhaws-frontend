<template>
  <div :class="`w-full col-span-full   ${customClass} `">
    <swiper
      :slides-per-view="slidePerView"
      :space-between="spaceBetween"
      @swiper="onSwiper"
      :freeMode="freeMode"
      :modules="modules"
      @slideChange="onSlideChange"
      :class="swiperClass"
      :direction="direction"
    >
      <slot />
    </swiper>
    <div
      v-if="showPagination"
      class="w-full pt-4 flex flex-row items-center space-x-2 justify-center"
    >
      <span
        :class="`rounded-full w-[14px] h-[14px] cursor-pointer ${
          activeSlide == index ? 'bg-[#0E1011]' : 'bg-white'
        }`"
        @click="swiperInstance.slideTo(index)"
        v-for="(slide, index) in slideCount"
        :key="index"
      >
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Import Swiper Vue.js components
import { Swiper } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode } from "swiper";
import { ref, toRef, watch } from "vue";

const props = defineProps({
  customClass: {
    type: String,
    default: "",
  },
  slideCount: {
    type: Number,
    default: 3,
  },
  showPagination: {
    type: Boolean,
    default: false,
  },
  slidePerView: {
    type: String,
    default: "auto",
  },
  spaceBetween: {
    type: Number,
    default: 15,
  },
  freeMode: {
    type: Boolean,
    default: true,
  },
  swiperClass: {
    type: String,
    default: "pr-6",
  },
  currentSlidePosition: {
    type: Number,
    default: 0,
  },
  direction: {
    type: String as () => "vertical" | "horizontal",
    default: "horizontal",
  },
});

const emit = defineEmits(["update:modelValue"]);

const activeSlide = ref(0);
// eslint-disable-next-line @typescript-eslint/no-empty-function

const swiperInstance = ref<any>();
const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper;
};
const onSlideChange = (swiper: any) => {
  activeSlide.value = swiper.activeIndex;
  emit("update:modelValue", activeSlide.value);
};

const currentSlidePositionRef = toRef(props, "currentSlidePosition");

watch(currentSlidePositionRef, () => {
  swiperInstance.value.slideTo(currentSlidePositionRef.value);
});

const modules = [FreeMode];
</script>
