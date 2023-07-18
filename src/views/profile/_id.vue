<template>
  <subpage-layout>
  <section class="w-full flex flex-col space-y-5 relative"> 
    <div
      class="px-6 py-6 flex flex-col space-y-3 bg-white shadow-custom items-center justify-center rounded-[10px]"
    >
      <div>
        <Avatar :photoUrl="'/images/profile-info.png'" :size="'150'" />
      </div>

      <TypoHeaderText :size="'3xl'"> Herman Wayne </TypoHeaderText>
    </div>

    <div class="w-full flex flex-col items-center justify-center">
      <Tabs
        :tabs="filterOptions"
        :activeTab="activeOption"
        @selectTab="
          (option) => {
            activeOption = option;
          }
        "
      />
    </div>

    <template v-if="activeOption == 'about'">
      <div
        class="px-6 py-6 flex flex-col space-y-3 bg-white shadow-custom rounded-[10px]"
      >
        <TypoHeaderText :size="'xl'"> Bio </TypoHeaderText>

        <TypoNormalText :custom-class="'!text-left !leading-relaxed'">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laborisM Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua
        </TypoNormalText>
      </div>

      <div
        class="px-6 py-6 flex flex-col space-y-3 bg-white shadow-custom rounded-[10px]"
      >
        <TypoHeaderText :size="'xl'"> School </TypoHeaderText>

        <div class="flex flex-col w-full space-y-2">
          <TypoNormalText :custom-class="'!text-left !leading-relaxed'">
            Cyprus University Of Art
          </TypoNormalText>

          <TypoNormalText :custom-class="'!text-left !leading-relaxed'">
            2020 - Ongoing
          </TypoNormalText>
        </div>
      </div>
    </template>

    <template v-if="activeOption == 'gallery'">
      <div class="w-full flex flex-col items-center justify-center">
        <div class="w-full mdlg:!w-[70%] flex flex-row items-center space-x-3">
          <div class="w-[70%] pr-1 flex flex-col">
            <div class="bg-white rounded-[10px] w-full shadow-custom">
              <FormTextField
                :placeholder="'Search'"
                :custom-class="'w-full space-x-2'"
                :padding="'py-4 px-4'"
              >
                <template v-slot:inner-prefix>
                  <IconLoader :name="'search'" :custom-class="'h-[18px]'" />
                </template>
              </FormTextField>
            </div>
          </div>
          
          <div class="w-[30%] pl-1 flex flex-col">
            <div class="bg-white rounded-[10px] w-full shadow-custom px-1">
              <FormSelect
                :placeholder="'All project types'"
                :custom-class="'w-full space-x-2'"
                :padding="'py-4 px-4'"
              >
              </FormSelect>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full flex flex-col space-y-4 pt-4">
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
    </template>
  </section>

  <div class="h-[100px]"></div>
  </subpage-layout>
</template>

<script lang="ts"> 
import { defineComponent, onMounted, ref, watch } from "vue";
import { useMeta } from "vue-meta"; 
import FormSelect from "@/components/Form/Select.vue"
import FormTextField from "@/components/Form/TextField.vue"
import CardExhibition from "@/components/Card/Exhibition.vue"
import IconLoader from "@/components/IconLoader/index.vue"
import ImageLoader from "@/components/ImageLoader/index.vue"
import TypoNormalText from "@/components/Typo/NormalText.vue"
import TypoHeaderText from "@/components/Typo/HeaderText.vue"
import Button from "@/components/Button/index.vue";
import Avatar from "@/components/Avatar/index.vue";
import Tabs from "@/components/Tabs/index.vue";
 
export default defineComponent({
  components: {
    CardExhibition,
    IconLoader,
    TypoHeaderText,
    TypoNormalText, 
    Button,
    Avatar,
    ImageLoader,
    Tabs,
    FormSelect,
    FormTextField
  }, 
  name: "ProfileDetailPage",
  setup() {
    useMeta({
      title: "Profile",
    });
    
    const activeOption = ref("about");
    const filterOptions = ref([{ title: "about" }, { title: "gallery" }]);

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

    return {activeOption, exhibitions, filterOptions};
  },
});

// definePageMeta({ layout: "sub-page" });  
</script>
 