<template>
  <ImageLoader
    :photoUrl="project.image_url"
    :customClass="`w-full h-[240px] rounded-[10px] flex flex-col justify-between item-start`"
  >
    <div class="w-full flex flex-row px-4 py-4">
      <TypoNormalText
        v-if="project.type"
        :customClass="`px-4 py-1 capitalize rounded-[5px] ${
          project.type == 'challenge'
            ? 'bg-bouhaws-purple'
            : 'bg-bouhaws-orange'
        }`"
        :color="'text-white'"
      >
        {{ project.type }}
      </TypoNormalText>
    </div>

    <div
      class="w-full px-4 py-4 bg-gradient-to-t from-black rounded-b-[10px] flex flex-col space-y-1"
    >
      <TypoNormalText
        :color="'text-white'"
        :customClass="'!text-base !font-normal'"
      >
        {{ project.title }}
      </TypoNormalText>
      <div class="w-full flex flex-row items-center space-x-1">
        <TypoNormalText :color="'text-white'" :customClass="' !text-xs'">
          Deadline
        </TypoNormalText>
        <TypoNormalText
          :color="'text-white'"
          :customClass="'!font-normal !text-xs'"
        >
          {{ project.deadline }}
        </TypoNormalText>
      </div>
      
      <div class="w-full flex flex-row items-center space-x-1 pt-1">
        <template
          v-for="(milestone, index) in project.total_milestone"
          :key="index"
        >
          <IconLoader
            :name="`${
              index < project.current_milestone_index
                ? 'completed-milestone'
                : 'pending-milestone'
            }`"
            :customClass="'h-[14px]'"
          />
        </template>
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
  props: {  
  project: {
    type: Object as () => {
      title: string;
      deadline: string;
      total_milestone: number;
      current_milestone_index: number;
      image_url: string;
      type: string;
    },
    default: () => {},
  },
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