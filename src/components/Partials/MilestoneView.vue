<template>
  <section
    class="px-5 py-4 h-full rounded-[10px] bg-bouhaws-semi-dark flex flex-col space-y-4"
  >
    <TypoHeaderText :size="'3xl'" :color="'text-white !font-normal'">
      Milestones
    </TypoHeaderText>

    <div class="overflow-scroll no-scrollbar space-y-3">
      <div
        class="w-full flex flex-row space-x-3 items-center px-3 py-3 rounded-[10px] bg-[#0E1011]"
        v-for="(item, index) in milestones"
        :key="index"
      >
        <ImageLoader
          :customClass="'w-[60px] h-[60px] rounded-[5px]'"
          :photoUrl="item.image_url"
        />

        <div class="flex flex-grow flex-col space-y-1">
          <TypoNormalText :color="'text-white'" :custom-class="'!font-normal'">
            {{ item.title }}
          </TypoNormalText>
          <TypoNormalText :color="'text-white'" :custom-class="'!text-xs '">
            {{ item.sub_title }}
          </TypoNormalText>

          <TypoNormalText :color="'text-white'" :custom-class="'!text-xs '">
            {{ item.points }} points
          </TypoNormalText>
        </div>
      </div>
    </div>
  </section>
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

const milestones = ref([
  {
    title: "Milestone 1",
    sub_title: `Mother’s day`,
    points: 500,
    image_url: "/images/mothers-day.png",
  },
  {
    title: "Milestone 2",
    sub_title: `Mother’s day`,
    points: 500,
    image_url: "/images/mothers-day.png",
  },
  {
    title: "Milestone 3",
    sub_title: `Mother’s day`,
    points: 500,
    image_url: "/images/mothers-day.png",
  },
  {
    title: "Milestone 4",
    sub_title: `Mother’s day`,
    points: 500,
    image_url: "/images/mothers-day.png",
  },
]);
    return {  };
  },
});
</script>
 