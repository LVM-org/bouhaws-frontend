<template>
  <div class="w-full max-h-[100%] flex flex-col px-0 py-0 flex-grow">
    <div
      class="w-full flex flex-col space-y-4 bg-bouhaws-semi-dark rounded-[10px] items-center justify-center px-5 py-5 border-b-[3px] border-[#EBEBE5]"
    >
      <div
        class="h-[75px] w-[75px] rounded-full relative bg-gradient-to-r -mt-[60px] from-bouhaws-light-green via-bouhaws-blue-main to-bouhaws-green bg-bouhaws-semi-dark items-center justify-center flex"
      >
        <div
          class="h-[85%] w-[85%] flex items-center rounded-full justify-center border-[6px] bg-bouhaws-semi-dark border-transparent"
        >
          <TypoHeaderText
            :color="'text-white'"
            :size="'3xl'"
            :custom-class="'!font-normal'"
          >
            3
          </TypoHeaderText>
        </div>
      </div>

      <div
        class="w-full flex flex-row h-[28px] rounded-[19px] bg-progress-bar-gray relative"
      >
        <div
          class="absolute h-full bg-bouhaws-green top-0 left-0 rounded-[19px]"
          style="width: 40%"
        ></div>
        <div
          class="w-full z-50 flex flex-row justify-between items-center px-4"
        >
          <TypoNormalText :color="'text-white'" :custom-class="'!text-xs z-50'">
            3,500
          </TypoNormalText>
          <TypoNormalText :color="'text-white'" :custom-class="'!text-xs z-50'">
            6,000
          </TypoNormalText>
        </div>
      </div>

      <div class="w-full flex flex-row items-center justify-center space-x-1">
        <TypoNormalText :color="'text-bouhaws-green'"
          > 2,500 points</TypoNormalText
        >
        <TypoNormalText :color="'text-white'">to reach LEVEL 4</TypoNormalText>
      </div>
    </div>

    <div
      class="flex flex-col w-full bg-bouhaws-semi-dark flex-grow h-full rounded-b-[10px] px-3 py-3"
    >
      <div class="h-full flex flex-col space-y-3 overflow-y-auto w-full">
        <div
          class="w-full flex flex-row space-x-3 items-center px-3 py-3 rounded-[10px] bg-[#0E1011]"
          v-for="(item, index) in activeItems"
          :key="index"
        >
          <ImageLoader
            :customClass="'w-[60px] h-[60px] rounded-[5px]'"
            :photoUrl="item.image_url"
          />

          <div class="flex flex-grow flex-col space-y-1">
            <TypoNormalText
              :color="'text-white'"
              :custom-class="'!font-normal'"
            >
              {{ item.title }}
            </TypoNormalText>
            <TypoNormalText
              :color="'text-white'"
              :custom-class="'!text-xs pb-1'"
            >
              {{ item.current_point }}/{{ item.total_point }} points
            </TypoNormalText>

            <div
              v-if="item.current_point < item.total_point"
              class="w-full h-[7px] rounded-[99px] bg-progress-bar-gray relative"
            >
              <div
                class="absolute top-0 left-0 rounded-[99px] h-full bg-bouhaws-green"
                :style="`width: ${
                  (item.current_point / item.total_point) * 100
                }%;`"
              ></div>
            </div>

            <div
              v-else
              class="w-full items-center flex flex-row justify-start space-x-2"
            >
              <IconLoader
                :name="'circle-check-green'"
                :customClass="'h-[14px]'"
              />
              <TypoNormalText :color="'text-white'" :custom-class="'!text-xs'"
                >Completed</TypoNormalText
              >
            </div>
          </div>
        </div>
      </div>
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

const activeItems = ref([
  {
    title: "Mother’s Day",
    total_point: 2000,
    current_point: 500,
    image_url: "/images/mothers-day.png",
  },
  {
    title: "International Women’s Day",
    total_point: 2500,
    current_point: 1500,
    image_url: "/images/international-womens-day.png",
  },
  {
    title: "Project Title",
    total_point: 2500,
    current_point: 1500,
    image_url: "/images/project-title.png",
  },
  {
    title: "Victory Day",
    total_point: 1000,
    current_point: 0,
    image_url: "/images/victory-day.png",
  }, 
]);

    return {  activeItems };
  },
});
</script>
 