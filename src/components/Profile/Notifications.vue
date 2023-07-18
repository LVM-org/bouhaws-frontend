<template>
  <div class="bg-white w-full rounded-md space-y-4 box-shadow px-6 py-6">
    <TypoHeaderText :custom-class="'!font-normal'" :size="'2xl'">
      Notifications
    </TypoHeaderText>

    <div class="flex items-center justify-between space-x-3">
      <TypoNormalText customClass="!font-light leading-6">
        Push notifications
      </TypoNormalText>

      <!--  -->
      <IconLoader :name="'toggle-on'" :custom-class="'h-[24px]'" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"; 
import IconLoader from "@/components/IconLoader/index.vue"
import ImageLoader from "@/components/ImageLoader/index.vue"
import TypoNormalText from "@/components/Typo/NormalText.vue"
import TypoHeaderText from "@/components/Typo/HeaderText.vue"
import Button from "@/components/Button/index.vue";
import Avatar from "@/components/Avatar/index.vue";


export default defineComponent({
  components: {
    IconLoader,
    TypoHeaderText,
    TypoNormalText, 
    Button,
    Avatar,
    ImageLoader
  },
  props: { 
  },
  
  name: "",

  setup() { 
const isPushNotification = ref(false);

const togglePushNotification = (value: boolean) => {
  isPushNotification.value = value;
};

    return { isPushNotification, togglePushNotification};
  },
});
</script> 