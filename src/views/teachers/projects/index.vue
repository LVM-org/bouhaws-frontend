<template>
  <subpage-layout>
    <section class="col-span-3 flex flex-col space-y-5 relative pt-5">
      <div class="flex flex-row justify-between items-center sticky top-[6rem]">
        <Tabs
          :tabs="filterOptions1"
          :activeTab="activeOption1"
          @selectTab="selectActiveTab"
        />

        <div class="flex items-center flex-row bg-[#EBEBE5] rounded-[5px]">
          <Tabs
            :tabs="filterOptions"
            :activeTab="activeOption"
            @selectTab="selectActiveOption"
            :is-spaced="false"
          />
        </div>
      </div>

      <div class="flex flex-col space-y-5">
        <router-link
          v-for="project in projects"
          :key="project.id"
          :project="project"
          :to="`/projects/${project.id}`"
          class="flex py-5 px-5 rounded-[10px] flex-row items-center w-full space-x-4 bg-white box-shadow"
        >
          <div class="w-[170px] flex flex-col">
            <ImageLoader
              :photoUrl="project.image_url"
              :customClass="'h-[160px] w-[170px] rounded-[10px]'"
            />
          </div>

          <div class="flex flex-col space-y-3 w-full">
            <TypoHeaderText :size="'xl'" :customClass="'!font-normal'">
              {{ project.title }}
            </TypoHeaderText>

            <div class="flex items-center space-x-6 flex-row w-full">
              <span class="flex items-center space-x-1">
                <Avatar
                  :photoUrl="project.user.photo_url"
                  :size="'20'"
                ></Avatar>
                <TypoHeaderText :customClass="'!font-normal'" size="sm">
                  {{ project.user.name }}
                </TypoHeaderText>
              </span>

              <div class="flex items-center space-x-1.5">
                <TypoHeaderText size="sm"> 13 </TypoHeaderText>

                <TypoNormalText> entries </TypoNormalText>
              </div>

              <TypoNormalText>
                {{ project.dataPosted }}
              </TypoNormalText>

              <TypoNormalText>
                {{ project.deadline }}
              </TypoNormalText>
            </div>

            <TypoNormalText :customClass="'!text-left'">
              {{ project.description }}
            </TypoNormalText>

            <div class="flex items-center flex-row space-x-3 w-full">
              <div class="flex flex-row items-center space-x-1.5 pt-1">
                <template
                  v-for="(milestone, index) in project.milestones"
                  :key="index"
                >
                  <IconLoader
                    :name="`circle-check-black`"
                    :customClass="'h-[16px]'"
                  />
                </template>
              </div>

              <TypoNormalText>
                {{
                  project.milestones > 1
                    ? `${project.milestones} milestones`
                    : `${project.milestones} milestone`
                }}
              </TypoNormalText>
            </div>
          </div>
        </router-link>
      </div>
    </section>

    <div class="h-[100px]"></div>
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
import Tabs from "../../../components/Tabs/index.vue";

export default defineComponent({
  components: {
    IconLoader,
    TypoHeaderText,
    TypoNormalText,
    Button,
    Avatar,
    ImageLoader,
    Tabs,
  },
  name: "TeacherProjectPage",
  setup() {
    useMeta({
      title: "Teachers project",
    });

    const activeOption = ref("active");
    const activeOption1 = ref("all");
    const filterOptions = ref([{ title: "active" }, { title: "completed" }]);
    const filterOptions1 = ref([
      { title: "all" },
      { title: "class" },
      { title: "challenge" },
    ]);

    const projects = ref([
      {
        id: "1",
        title: `Project title`,
        type: "class",
        dataPosted: `Posted 2 hours ago`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        milestones: 5,
        deadline: `Deadline in 15 days`,
        user: {
          name: "Teacher",
          photo_url: "/images/avatar-2.png",
        },
        image_url: "/images/gallery-project-1.png",
        completed: true,
      },
      {
        id: "1",
        title: `Project title`,
        type: "class",
        dataPosted: `Posted 2 hours ago`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        milestones: 1,
        deadline: `Deadline in 15 days`,
        user: {
          name: "Brand",
          photo_url: "/images/avatar-5.png",
        },
        image_url: "/images/gallery-project-2.png",
        completed: true,
      },
      {
        id: "1",
        title: `Project title`,
        type: "class",
        dataPosted: `Posted 2 hours ago`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        milestones: 5,
        deadline: `Deadline in 15 days`,
        user: {
          name: "Teacher",
          photo_url: "/images/avatar-3.png",
        },
        image_url: "/images/gallery-project-3.png",
        completed: true,
      },
      {
        id: "1",
        title: `Project title`,
        type: "class",
        dataPosted: `Posted 2 hours ago`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        milestones: 2,
        deadline: `Deadline in 15 days`,
        user: {
          name: "Brand",
          photo_url: "/images/avatar-4.png",
        },
        image_url: "/images/event-gallery.png",
        completed: true,
      },
    ]);

    const selectActiveTab = (value: string) => {
      activeOption1.value = value;
    };
    const selectActiveOption = (value: string) => {
      activeOption.value = value;
    };

    return {
      activeOption,
      activeOption1,
      filterOptions,
      filterOptions1,
      selectActiveOption,
      selectActiveTab,
      projects,
    };
  },
});

// definePageMeta({  layout: "sub-page" });
</script>
