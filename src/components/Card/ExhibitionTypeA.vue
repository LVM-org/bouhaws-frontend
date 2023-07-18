<template>
  <nuxt-link
    :to="`exhibition/${exhibition.id}`"
    class="relative rounded-md box-shadow  border h-auto  w-full "
  > 
    <ImageLoader
      :photoUrl="exhibition.profilePicture"
      customClass="w-full h-[15rem] rounded-[10px] flex flex-col justify-between item-start"
    >
      <div class="h-full text-white bg-black bg-opacity-70 hover:bg-opacity-40 flex flex-col rounded-lg  justify-end p-4">
        <TypoHeaderText :custom-class="'!font-normal !text-white'" :size="'base'">
          {{exhibition.title}}
        </TypoHeaderText>

        <TypoNormalText :custom-class="'!font-extralight !text-white'" :size="'small'">
          {{exhibition.artist}}
        </TypoNormalText> 
      </div> 
    </ImageLoader>
 
    <div v-if="hasSection" class="w-full flex items-center justify-between space-x-2 p-3 bg-white">
      <IconLoader name="bookmark" customClass="h-[1rem]" /> 

      <div class="flex items-center justify-end text-xs font-light flex-1 text-[#61656D]  space-x-2.5">
        <span class="flex items-center space-x-1.5">
          <TypoNormalText :custom-class="'!font-extralight !text-[#61656D]'" :size="'xs'"> 
            {{exhibition.noOfComments}}
             </TypoNormalText> 
          <IconLoader name="message" customClass="h-[1rem]" /> 
        </span>

        <span class="flex items-center space-x-1.5">
          <TypoNormalText :custom-class="'!font-extralight !text-[#61656D]'" :size="'xs'"> 
            {{exhibition.noOfLikes}}
            </TypoNormalText> 
          <IconLoader name="heart" customClass="h-[1rem]" /> 
        </span>
      </div> 
    </div> 
  </nuxt-link>
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
    ImageLoader 
  },

  props: { 
  exhibition: {
    type: Object,
    default: {}
  },
  hasSection: {
    type: Boolean,
    default: false
  }
  },
  
  name: "",

  setup() { 

    return { };
  },
});
</script>
 