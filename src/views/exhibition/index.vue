<template> 
<dashboard-layout>
  <div class="w-full flex flex-col space-y-5 relative">
    <div class="w-full flex flex-col space-y-3">
      <div
        class="flex flex-col items-center h-[180px] justify-center p-6 space-y-5 bg-bouhaws-blue-main"
      >
        <TypoHeaderText
          :custom-class="'!font-normal !text-white'"
          :size="'3xl'"
        >
          Explore projects by students in the community
        </TypoHeaderText>

        <div
          class="w-2/5 max-w-lg mx-auto text-[#61656D] flex items-center space-x-4 px-5 bg-white rounded-[8px]"
        >
          <IconSearch />

          <input
            type="search"
            placeholder="Search"
            class="flex-1 w-full text-sm py-3.5 bg-transparent outline-none placeholder:font-light"
          />
        </div>
      </div>
    </div>

    <div
      class="w-full flex flex-col py-4 sticky lg:!top-[9%] mdlg:!top-[10%] items-center justify-center z-30"
    >
      <div
        class="mdlg:!w-[90%] lg:!w-[80%] w-full flex flex-row items-center justify-between space-x-4"
      >
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

    <div class="w-full flex flex-col items-center justify-center relative">
      <div
        class="mdlg:!w-[90%] lg:!w-[80%] w-full flex flex-col space-y-5 relative"
      >
        <div class="grid grid-cols-3 gap-4 mb-6 mt-2">
          <CardExhibition
            v-for="(exhibition, index) in topExhibitions"
            :key="index"
            :exhibition="exhibition"
            :custom-class="'col-span-1  !w-auto !h-[310px]'"
          />
        </div>

        <div class="w-full flex flex-col space-y-4">
          <TypoHeaderText :custom-class="'!font-normal'" :size="'3xl'">
            Trending in paintings
          </TypoHeaderText>

          <div class="grid grid-cols-4 gap-6">
            <CardExhibition
              v-for="(exhibition, index) in exhibitions"
              :key="index"
              :custom-class="'col-span-1 !w-auto !h-[270px]'"
              :exhibition="exhibition"
              :has-more-info="true"
            />
          </div>
        </div>

        <div class="w-full flex flex-col space-y-4">
          <TypoHeaderText :custom-class="'!font-normal'" :size="'3xl'">
            Trending in drawing
          </TypoHeaderText>

          <div class="grid grid-cols-4 gap-6">
            <CardExhibition
              v-for="(exhibition, index) in exhibitions"
              :key="index"
              :custom-class="'col-span-1 !w-auto !h-[270px]'"
              :exhibition="exhibition"
              :has-more-info="true"
            />
          </div>
        </div>

        <div class="w-full flex flex-col space-y-4">
          <TypoHeaderText :custom-class="'!font-normal'" :size="'3xl'">
            Trending in photography
          </TypoHeaderText>

          <div class="grid grid-cols-4 gap-6">
            <CardExhibition
              v-for="(exhibition, index) in exhibitions"
              :key="index"
              :custom-class="'col-span-1 !w-auto !h-[270px]'"
              :exhibition="exhibition"
              :has-more-info="true"
            />
          </div>
        </div>

        <div class="h-[100px]"></div>
      </div>
    </div>
  </div>
</dashboard-layout>
</template>

<script lang="ts"> 
import { defineComponent, onMounted, ref, watch } from "vue";
import { useMeta } from "vue-meta"; 
import CardExhibition from "@/components/Card/Exhibition.vue"
import Tabs from "@/components/Tabs/index.vue";
import IconLoader from "@/components/IconLoader/index.vue"
import ImageLoader from "@/components/ImageLoader/index.vue"
import TypoNormalText from "@/components/Typo/NormalText.vue"
import TypoHeaderText from "@/components/Typo/HeaderText.vue"
import Button from "@/components/Button/index.vue";

export default defineComponent({
  components: {
    IconLoader,
    TypoHeaderText,
    TypoNormalText, 
    Button,
    ImageLoader,
    CardExhibition,
    Tabs
  }, 
  middlewares: {
    fetchRules: [],
  },
  name: "ExhibitionPage",
  setup() {
    useMeta({
      title: "Exhibition",
    });

    const activeOption1 = ref("all");
    const activeOption2 = ref("popular");
    const filterOptions1 = ref([
      { title: "all" },
      { title: "class" },
      { title: "challenge" },
      { title: "active" },
      { title: "completed" },
    ]);
    const filterOptions2 = ref([{ title: "popular" }, { title: "recent" }]);

    const topExhibitions = ref([
      {
        id: "1",
        username: "Username",
        title: "The Starry Night",
        image_url: "/images/top-exhibition-1.png",
      },
      {
        id: "2",
        username: "Fredrick Leighton",
        title: "Desdemona From Othello",
        image_url: "/images/top-exhibition-2.png",
      },
      {
        id: "2",
        username: "Woman In White",
        title: "Pierre-Auguste Renoir",
        image_url: "/images/top-exhibition-3.png",
      },
    ]);

    const exhibitions = ref([
      {
        id: "1",
        username: "Username",
        title: "Heart over stained glass",
        image_url: "/images/gallery-project-1.png",
        stats: {
          likes: 200,
          shares: 30,
          comments: 34,
        },
      },
      {
        id: "2",
        username: "Username",
        title: "Cultural woman",
        image_url: "/images/gallery-project-2.png",
        stats: {
          likes: 200,
          shares: 30,
          comments: 34,
        },
      },
      {
        id: "3",
        username: "Username",
        title: "From the other side",
        image_url: "/images/gallery-project-3.png",
        stats: {
          likes: 200,
          shares: 30,
          comments: 34,
        },
      },
      {
        id: "4",
        username: "Username",
        title: "Mother and son connection",
        image_url: "/images/top-exhibition-2.png",
        stats: {
          likes: 200,
          shares: 30,
          comments: 34,
        },
      },
    ]);

    const selectTab1 = (activeTab: string) => {
      activeOption1.value = activeTab;
    };
    const selectTab2 = (activeTab: string) => {
      activeOption2.value = activeTab;
    };

    return {
      activeOption1, exhibitions, topExhibitions, filterOptions2, filterOptions1, activeOption2, selectTab1, selectTab2
    };
  },
}); 
</script>
