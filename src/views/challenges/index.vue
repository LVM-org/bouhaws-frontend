<template>
  <div class="w-full flex flex-col space-y-5 relative">
    <div
      class="w-full flex flex-col py-4 sticky lg:!top-[9%] mdlg:!top-[10%] items-center justify-center z-30"
    >
      <div class="w-full flex flex-row items-center justify-between space-x-4">
        <Tabs
          :tabs="filterOptions1"
          :activeTab="activeOption1"
          @selectTab="selectTab1"
        />

        <Tabs
          :isSpaced="false"
          :tabs="filterOptions2"
          :activeTab="activeOption2"
          @selectTab="selectTab2"
        />
      </div>
    </div>

    <div class="flex flex-col space-y-5 container mx-auto">
      <CardChallenge
        v-for="challenge in challenges"
        :key="challenge.id"
        :challenge="challenge"
      />
    </div>  

    <div class="h-[100px]"></div>
  </div> 
</template> 

<script lang="ts"> 
import { defineComponent, onMounted, ref, watch } from "vue";
import { useMeta } from "vue-meta"; 
import CardChallenge from "@/components/Card/Challenge.vue"
import Button from "@/components/Button/index.vue";
import Tabs from "@/components/Tabs/index.vue";

export default defineComponent({
  components: {
    Button, 
    CardChallenge,
    Tabs
  }, 
  name: "ChallengesPage",
  setup() {
    useMeta({
      title: "Challenges",
    });

    const activeOption1 = ref("all");
    const activeOption2 = ref("popular");
    const filterOptions2 = ref([{ title: "popular" }, { title: "recent" }]);
    const filterOptions1 = ref([
      { title: "all" },
      { title: "painting" },
      { title: "drawing" },
      { title: "photography" },
      { title: "sculpture" },
    ]);

    const challenges = ref([
      {
        id: "1",
        title: `Project title`,
        type: "class",
        dataPosted: `Posted 2 hours ago`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        milestones: { current: 3 },
        deadline: `Deadline in 15 days`,
        user: {
          name: "Teacher",
          photo_url: "/images/icons/brandname.svg",
        },
        image_url: "/images/gallery-project-2.png",
        giftPrice: 100,
      },
      {
        id: "1",
        title: `Project title`,
        type: "class",
        dataPosted: `Posted 2 hours ago`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        milestones: { current: 3 },
        deadline: `Deadline in 15 days`,
        user: {
          name: "Brand",
          photo_url: "/images/icons/brandname.svg",
        },
        image_url: "/images/event-gallery.png",
        giftPrice: 100,
      },
      {
        id: "1",
        title: `Project title`,
        type: "class",
        dataPosted: `Posted 2 hours ago`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        milestones: { current: 3 },
        deadline: `Deadline in 15 days`,
        user: {
          name: "Teacher",
          photo_url: "/images/icons/brandname.svg",
        },
        image_url: "/images/gallery-project-3.png",
        giftPrice: 100,
      },
      {
        id: "1",
        title: `Project title`,
        type: "class",
        dataPosted: `Posted 2 hours ago`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        milestones: { current: 1 },
        deadline: `Deadline in 15 days`,
        user: {
          name: "Brand",
          photo_url: "/images/icons/brandname.svg",
        },
        image_url: "/images/event-gallery.png",
        giftPrice: 100,
      },
    ]);
    

const selectTab1 = (activeTab: string) => {
  activeOption1.value = activeTab;
};
const selectTab2 = (activeTab: string) => {
  activeOption2.value = activeTab;
};
 
    return { 
      challenges,
      selectTab2, activeOption1, activeOption2, filterOptions2, filterOptions1, selectTab1,
    };
  },
});

// definePageMeta({ layout: "sub-page" });

</script>
 
