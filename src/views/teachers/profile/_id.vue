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

      <!--  -->
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

      <!--  -->
      <template v-if="activeOption == 'projects'">
        <div class="w-full flex flex-col items-center justify-center">
          <div
            class="w-full mdlg:!w-[70%] flex flex-row items-center space-x-3"
          >
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
          <div class="grid grid-cols-4 gap-4">
            <router-link
              v-for="(project, index) in projects"
              :key="index"
              :to="`/projects/${project?.id}`"
              :class="`relative box-shadow h-[220px] rounded-b-[10px] flex flex-col`"
            >
              <ImageLoader
                :photoUrl="project?.image_url"
                :customClass="`w-full h-full rounded-[10px]
                    flex flex-col justify-between item-start relative`"
              >
                <div
                  :class="`absolute bottom-0 left-0 w-full px-4 py-4 bg-gradient-to-t from-black flex flex-col space-y-1 rounded-[10px]`"
                >
                  <TypoNormalText
                    :custom-class="`!font-normal !text-white !text-base`"
                  >
                    {{ project?.title }}
                  </TypoNormalText>

                  <div class="flex items-center space-x-2">
                    <TypoNormalText :custom-class="`!font-light !text-white`">
                      Deadline
                    </TypoNormalText>

                    <TypoNormalText :custom-class="`!text-white`">
                      {{ project?.deadline }}
                    </TypoNormalText>
                  </div>

                  <div class="flex items-center space-x-1">
                    <TypoNormalText :custom-class="`!text-white`">
                      {{ project?.entries }}
                    </TypoNormalText>

                    <TypoNormalText :custom-class="`!font-light !text-white`">
                      entries
                    </TypoNormalText>
                  </div>
                </div>
              </ImageLoader>
            </router-link>
          </div>
        </div>
      </template>

      <!--  -->
      <template v-if="activeOption == 'classes'">
        <section class="col-span-2 space-y-5">
          <div
            class="rounded-[10px] px-5 py-5 bg-white flex flex-col space-y-3 shadow-custom"
            v-for="(bouhawsClass, index) in classes"
            :key="index"
          >
            <TypoHeaderText :size="'2xl'" :custom-class="'!font-normal'">
              {{ bouhawsClass.name }}
            </TypoHeaderText>

            <div class="flex items-center space-x-6 flex-row w-full">
              <div class="flex items-center space-x-1">
                <Avatar
                  :photoUrl="bouhawsClass.user.photo_url"
                  :size="'20'"
                ></Avatar>
                <TypoNormalText :customClass="'!font-normal'">
                  {{ bouhawsClass.user.name }}
                </TypoNormalText>
              </div>

              <div class="flex flex-row items-center space-x-1">
                <IconLoader
                  :name="'students-black'"
                  :custom-class="'h-[17px]'"
                />
                <TypoNormalText>
                  {{ bouhawsClass.stats.students }} student{{
                    bouhawsClass.stats.students > 1 ? "s" : ""
                  }}
                </TypoNormalText>
              </div>

              <div class="flex flex-row items-center space-x-1">
                <IconLoader
                  :name="'project-black'"
                  :custom-class="'h-[17px]'"
                />
                <TypoNormalText>
                  {{ bouhawsClass.stats.projects }} project{{
                    bouhawsClass.stats.projects > 1 ? "s" : ""
                  }}
                </TypoNormalText>
              </div>
            </div>

            <TypoNormalText :custom-class="'!text-left !leading-relaxed'">
              {{ bouhawsClass.description }}
            </TypoNormalText>
          </div>

          <div class="h-[100px]"></div>
        </section>
      </template>

      <!--  -->
      <template v-if="activeOption == 'about'">
        <div
          class="px-6 py-6 flex flex-col space-y-3 bg-white shadow-custom rounded-[10px]"
        >
          <TypoHeaderText :size="'xl'"> Bio </TypoHeaderText>

          <TypoNormalText :custom-class="'!text-left !leading-relaxed'">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laborisM Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua
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
    </section>

    <div class="h-[100px]"></div>
  </subpage-layout>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import { useMeta } from "vue-meta";
import Tabs from "../../../components/Tabs/index.vue";
import IconLoader from "../../../components/IconLoader/index.vue";
import ImageLoader from "../../../components/ImageLoader/index.vue";
import TypoNormalText from "../../../components/Typo/NormalText.vue";
import TypoHeaderText from "../../../components/Typo/HeaderText.vue";
import Button from "../../../components/Button/index.vue";
import Avatar from "../../../components/Avatar/index.vue";
import FormTextField from "../../../components/Form/TextField.vue";
import FormSelect from "../../../components/Form/Select.vue";

export default defineComponent({
  components: {
    IconLoader,
    TypoHeaderText,
    TypoNormalText,
    Button,
    Avatar,
    ImageLoader,
    FormTextField,
    FormSelect,
    Tabs,
  },

  name: "TeacherProfileDetailsPage",
  setup() {
    useMeta({
      title: "Teachers profile",
    });

    const activeOption = ref("projects");
    const filterOptions = ref([
      { title: "projects" },
      { title: "classes" },
      { title: "about" },
    ]);

    const projects = ref([
      {
        id: "1",
        title: "Project Title",
        deadline: "23/03/2023",
        entries: 4,
        image_url: "/images/gallery-project-1.png",
      },
      {
        id: "1",
        title: "Mother’s Day",
        deadline: "23/03/2023",
        entries: 5,
        image_url: "/images/event-gallery.png",
      },
      {
        id: "1",
        title: "Mother’s Day",
        deadline: "23/03/2023",
        entries: 5,
        image_url: "/images/gallery-project-3.png",
      },
      {
        id: "1",
        title: "International Women’s Day",
        deadline: "23/03/2023",
        entries: 4,
        image_url: "/images/gallery-project-3.png",
      },
      {
        id: "1",
        title: "International Women’s Day",
        deadline: "23/03/2023",
        entries: 4,
        image_url: "/images/gallery-project-3.png",
      },
      {
        id: "1",
        title: "Victory Day",
        deadline: "23/03/2023",
        entries: 4,
        image_url: "/images/gallery-project-1.png",
      },
      {
        id: "1",
        title: "Project Title",
        deadline: "23/03/2023",
        entries: 5,
        image_url: "/images/gallery-project-2.png",
      },
      {
        id: "1",
        title: "Project Title",
        deadline: "23/03/2023",
        entries: 5,
        image_url: "/images/gallery-project-2.png",
      },
    ]);

    const classes = ref([
      {
        name: "Class Name",
        description:
          "Lorem ipsum dolor sit amet, cons etur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        user: {
          name: "Teacher",
          photo_url: "/images/avatar-3.png",
        },
        stats: {
          students: 34,
          projects: 4,
        },
      },
      {
        name: "Class Name",
        description:
          "Lorem ipsum dolor rcitation ullamco lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        user: {
          name: "Teacher",
          photo_url: "/images/avatar-3.png",
        },
        stats: {
          students: 34,
          projects: 4,
        },
      },
      {
        name: "Class Name",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        user: {
          name: "Teacher",
          photo_url: "/images/avatar-3.png",
        },
        stats: {
          students: 34,
          projects: 4,
        },
      },
      {
        name: "Class Name",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        user: {
          name: "Teacher",
          photo_url: "/images/avatar-3.png",
        },
        stats: {
          students: 34,
          projects: 4,
        },
      },
    ]);

    return { activeOption, filterOptions, projects, classes };
  },
});
// definePageMeta({  layout: "sub-page" });
</script>
