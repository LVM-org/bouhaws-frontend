<template>
  <div
    class="h-full bg-white pb-4 flex rounded-[10px] flex-col w-full space-y-2"
  >
    <div class="w-full flex flex-col px-5 pt-5 pb-1 bg-white rounded-[10px]">
      <TypoHeaderText :custom-class="'!text-2xl !font-normal'">
        Leaderboard
      </TypoHeaderText>
    </div>

    <div
      class="overflow-scroll no-scrollbar space-y-2 px-4 w-full flex flex-col"
    >
      <div
        v-for="(user, index) in leaderboardUsers"
        :key="index"
        class="w-full flex flex-row items-center space-x-2 justify-between py-2 px-3"
      >
        <div class="flex flex-row items-center space-x-3">
          <TypoNormalText
            :custom-class="'!text-xs'"
            :color="`${
              index <= 2 ? 'text-[#3392FF]' : 'text-bouhaws-text-black'
            }`"
          >
            {{ index + 1 }}
          </TypoNormalText>
          <Avatar :photoUrl="user.photo_url" :size="'40'"></Avatar>
          <TypoNormalText :custom-class="'!line-clamp-1 !font-normal'">
            {{ user.name }}
          </TypoNormalText>
        </div>

        <TypoNormalText :color="'text-bouhaws-light-gray-2'">
          {{ user.points }} pts
        </TypoNormalText>
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
const leaderboardUsers = ref([
  {
    photo_url: "/images/avatar-1.png",
    name: "DanielaM",
    points: 2780,
  },
  {
    photo_url: "/images/avatar-2.png",
    name: "Robert Lewandowski",
    points: 2109,
  },
  {
    photo_url: "/images/avatar-3.png",
    name: "Sheva_111",
    points: 2100,
  },
  {
    photo_url: "/images/avatar-4.png",
    name: "DonatellaO",
    points: 2000,
  },
  {
    photo_url: "/images/avatar-5.png",
    name: "ILona_I",
    points: 1280,
  },
  {
    photo_url: "/images/avatar-2.png",
    name: "VitaliiVItalii",
    points: 1000,
  },
  {
    photo_url: "/images/avatar-3.png",
    name: "Alex22",
    points: 1280,
  }, 
]);

    return { leaderboardUsers };
  },
});
</script> 