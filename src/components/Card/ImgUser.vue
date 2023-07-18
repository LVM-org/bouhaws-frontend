<template>
  <ImageLoader
    :photoUrl="item.image_url"
    :customClass="`col-span-1 h-[240px] rounded-[10px] flex flex-col justify-between item-start`"
  >
    <div class="w-full flex flex-row px-4 py-4"></div>
    <div
      class="w-full px-4 py-4 bg-gradient-to-t from-black rounded-b-[10px] flex flex-col space-y-1"
    >
      <div class="flex items-center flex-row space-x-2 w-full">
        <Avatar :photoUrl="item.user.photo_url" :size="'24'"></Avatar>
        <TypoNormalText :customClass="'!font-normal'" :color="'text-white'">
          {{ item.user.name }}
        </TypoNormalText>
      </div>
    </div>
  </ImageLoader>
</template>

<script lang="ts">
import { defineComponent } from "vue"; 
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
    ImageLoader  },
    
  props: {
  item: {
    type: Object,
    default: () => {},
  }, 
  },
  
  name: "",

  setup() { 

    return { };
  },
});
</script>
 