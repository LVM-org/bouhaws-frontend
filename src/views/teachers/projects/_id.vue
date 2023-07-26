<template>
  <subpage-layout>
    <div class="container mx-auto grid grid-cols-3 gap-6 px-2 relative">
      <!-- right side  -->
      <section class="col-span-1 h-fit pb-5 pt-5 sticky top-[5rem]">
        <!--  Chat list section -->
        <div
          class="col-span-2 h-full bg-white shadow-custom rounded-[10px] relative flex flex-col"
        >
          <div
            class="h-full flex rounded-lg flex-col space-y-2 p-4 overflow-y-auto bg-[#202128] relative"
          >
            <div
              class="p-4 pb-0 top-0 sticky w-full flex flex-row items-center"
            >
              <TypoHeaderText
                :size="'3xl'"
                :customClass="'!font-normal !text-white'"
              >
                Milestones
              </TypoHeaderText>
            </div>

            <div
              class="h-full flex flex-col space-y-3 overflow-y-auto w-full p-2 -mt-2"
            >
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- main content -->
      <section class="col-span-2 sticky top-[5rem] pt-5 space-y-6 w-full">
        <div class="w-full py-5 px-5 bg-white rounded-lg box-shadow space-y-4">
          <div class="flex justify-between items-center">
            <TypoHeaderText :size="'3xl'" :customClass="'!font-normal'">
              {{ project?.title }}
            </TypoHeaderText>
          </div>

          <div class="flex items-center flex-row space-x-5 text-sm">
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

            <span class="flex items-center space-x-2">
              <Avatar :photoUrl="project.user.photo_url" :size="'20'"></Avatar>
              <TypoNormalText :customClass="'!font-normal'">
                {{ project.user.name }}
              </TypoNormalText>
            </span>

            <TypoNormalText>
              {{ project.dataPosted }}
            </TypoNormalText>

            <TypoNormalText :color="'text-[#FF3333]'">
              {{ project.deadline }}
            </TypoNormalText>

            <div class="flex items-center space-x-1">
              <IconLoader name="gift-active" :customClass="'!h-4'" />
              <TypoNormalText customClass="!text-[#27BA8E]">
                ${{ project.giftPrice }}
              </TypoNormalText>
            </div>
          </div>

          <TypoNormalText :customClass="'!tecxt-left !leading-relaxed'">
            {{ project.description }}
          </TypoNormalText>

          <div
            class="w-full flex flex-row no-scrollbar space-x-3 flex-nowrap overflow-x-auto scrollbar-hide"
          >
            <div class="flex flex-row space-x-3 py-2 pr-4">
              <ImageLoader
                v-for="image in images"
                :key="image"
                :photoUrl="image.url"
                :customClass="'h-[10rem] w-[10rem] rounded-[7px] relative'"
              >
              </ImageLoader>
            </div>
          </div>
        </div>

        <div
          class="w-full py-5 px-5 bg-white rounded-[10px] box-shadow space-y-3"
        >
          <TypoHeaderText :size="'3xl'" :customClass="'!font-normal'">
            Requirements
          </TypoHeaderText>

          <div class="flex flex-col space-y-1 text-sm">
            <div
              v-for="requirement in requirements"
              :key="requirement.title"
              class="flex space-x-3 items-center font-light py-1 px-2"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-bouhaws-dark"></span>
              <TypoNormalText>
                {{ requirement.title }}
              </TypoNormalText>
            </div>
          </div>
        </div>

        <div
          class="w-full py-5 px-5 bg-white rounded-[10px] box-shadow space-y-3"
        >
          <TypoHeaderText :size="'3xl'" :customClass="'!font-normal'">
            Entries ({{ entries.length || 0 }})
          </TypoHeaderText>

          <div class="grid grid-cols-4 gap-3" v-if="entries.length > 1">
            <CardImgUser
              v-for="(entry, index) in entries"
              :key="index"
              :item="entry"
              class="!h-[10rem]"
            />
          </div>

          <TypoHeaderText v-else size="lg'" :customClass="'!font-normal'">
            There are no entries yet
          </TypoHeaderText>
        </div>

        <div class="h-[100px]"></div>
      </section>
    </div>
  </subpage-layout>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import { useMeta } from "vue-meta";
import IconLoader from "../../../components/IconLoader/index.vue";
import ImageLoader from "../../../components/ImageLoader/index.vue";
import TypoNormalText from "../../../components/Typo/NormalText.vue";
import TypoHeaderText from "../../../components/Typo/HeaderText.vue";
import Button from "../../../components/Button/index.vue";
import Avatar from "../../../components/Avatar/index.vue";
import CardImgUser from "../../../components/Card/ImgUser.vue";

export default defineComponent({
  components: {
    IconLoader,
    TypoHeaderText,
    TypoNormalText,
    Button,
    Avatar,
    ImageLoader,
    CardImgUser,
  },
  name: "TeacherProjectsDetailsPage",
  setup() {
    useMeta({
      title: "Teachers project",
    });

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
      {
        title: "Project Title",
        total_point: 2500,
        current_point: 2500,
        image_url: "/images/project-title-2.png",
      },
    ]);

    const images = ref([
      { url: `/images/entry-1.png` },
      { url: `/images/entry-8.png` },
      { url: `/images/entry-5.png` },
      { url: `/images/entry-8.png` },
      { url: `/images/entry-6.png` },
      { url: `/images/entry-4.png` },
      { url: `/images/entry-3.png` },
    ]);

    const project = ref({
      id: "1",
      title: `Mother’s Day`,
      type: "challenge",
      user: {
        name: "Brand",
        photo_url: "/images/avatar-3.png",
      },
      entryType: "single",
      entryRange: "1-4",
      entry: {
        type: "multiple",
        range: {
          min: 1,
          max: 6,
        },
      },
      points: {
        min: 200,
        max: 500,
      },
      dataPosted: `Posted 2 hours ago`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      milestone: 2,
      memberOfTeam: 4,
      deadline: `Deadline in 15 days`,
      giftPrice: 900,
    });

    const requirements = ref([
      { title: "Project entries must be less than 5MB." },
      { title: "Images resolution should be at least 150 pixels." },
      { title: "Images resolution should be at least 150 pixels." },
    ]);

    const entries = ref([
      {
        id: "1",
        user: {
          name: "Student",
          photo_url: "/images/avatar-1.png",
        },
        image_url: `/images/entry-1.png`,
      },
      {
        id: "2",
        user: {
          name: "Student",
          photo_url: "/images/avatar-2.png",
        },
        image_url: `/images/entry-2.png`,
      },
      {
        id: "3",
        user: {
          name: "Student",
          photo_url: "/images/avatar-3.png",
        },
        image_url: `/images/entry-3.png`,
      },
      {
        id: "4",
        user: {
          name: "Student",
          photo_url: "/images/avatar-4.png",
        },
        image_url: `/images/entry-4.png`,
      },
      {
        id: "5",
        user: {
          name: "Student",
          photo_url: "/images/avatar-5.png",
        },
        image_url: `/images/entry-5.png`,
      },
      {
        id: "6",
        user: {
          name: "Student",
          photo_url: "/images/avatar-1.png",
        },
        image_url: `/images/entry-6.png`,
      },
      {
        id: "7",
        user: {
          name: "Student",
          photo_url: "/images/avatar-2.png",
        },
        image_url: `/images/entry-7.png`,
      },
      {
        id: "8",
        user: {
          name: "Student",
          photo_url: "/images/avatar-3.png",
        },
        image_url: `/images/entry-8.png`,
      },
    ]);

    return { entries, requirements, project, images, activeItems };
  },
});

// definePageMeta({  layout: "sub-page" });
</script>
