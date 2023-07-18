<template>
  <div
    class="fixed top-0 left-0 x !w-screen !h-screen overflow-auto flex flex-col py-28 items-center bg-bouhaws-light-gray-2 bg-opacity-50 "
    @click="closeModal"
  >
    <section
      class="sticky top-0 modal h-auto  w-full space-y-4  !z-50 bg-white p-6  rounded-lg  box-shadow"
      :style="`width: ${modalSizes} !important;`"
    >
      <div class="relative flex pb-4" :class="centered && 'justify-center'">
        <h3 v-show="hasHeader" class="text-2xl text-bouhaws-semi-dark">
          {{ title }}
        </h3>
 
        <IconLoader
          :name="'remove-image-dark'"
          class="absolute cursor-pointer top-0 right-0"
          :customClass="'h-8'"
          @click="close"
        /> 
      </div>

      <div class="overflow-auto font-light text-sm">
        <slot></slot>
      </div>
    </section>

    <div class="!h-[100px]"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"; 
import IconLoader from "@/components/IconLoader/index.vue"

export default defineComponent({
  components: { IconLoader  },
  props: { 
  id: {
    type: String,
    default: "",
    required: true,
  },
  title: {
    type: String,
    default: "",
    required: true,
  },
  size: {
    type: String,
    default: "md",
  },
  centered: {
    type: Boolean,
    default: false,
  },
  buttonModified: {
    type: Boolean,
    default: false,
  },
  hasHeader: {
    type: Boolean,
    default: true,
  },
  },
  
  name: "",

  setup(props, { emit }) { 
    const clickBtn = () => {
      emit("click");
    };
    const modalSizes = computed(() => {
      if (props.size == "xs") return "18.75rem";
      if (props.size == "sm") return "29.25rem";
      if (props.size == "md") return "31.25rem";
      if (props.size == "lg") return "44rem";
      if (props.size == "xl") return "71.25rem";
      else props.size;
    });

    window.addEventListener("keyup", (e) => {
      if (e.key == "Escape") return close();
    });

    const closeModal = () => {
      window.addEventListener(
        "click",
        (event: any) => {
          if (!event.target.closest(".modal")) {
            close();
          }
        },
        false
      );
    };
    const close = () => {
      emit("close", props.id);
    };

    return {
      close, modalSizes, closeModal
    }   
  } 
});
</script>
 

<style  scoped>
.box-shadow {
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.04); 
}
</style>
