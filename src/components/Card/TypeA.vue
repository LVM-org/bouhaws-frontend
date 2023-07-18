<template> 
    <div class="flex flex-col space-y-3">
        <ImageLoader
            :photoUrl="data?.imageUrl"
            customClass="w-[7rem] h-[8rem] rounded-[10px] flex flex-col justify-between item-start"
        />  

        <TypoHeaderText :custom-class="'!font-normal !text-sm text-center'">
            {{data?.title}}
        </TypoHeaderText>
    </div> 
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
  props: {  
    data: {
        type: Object,
        default: {}
    },
    isBagdes: {
        type: Boolean,
        default: false
    }
  },

  components: {
    IconLoader,
    TypoHeaderText,
    TypoNormalText, 
    Button,
    Avatar,
    ImageLoader
  }, 

  setup() {  
    return {     }   
  } 
}) 
</script>  