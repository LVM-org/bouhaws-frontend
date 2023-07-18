<template> 
  <div>
  <section class="w-full flex flex-col space-y-5 relative">
    <div class="flex flex-row justify-between items-center sticky top-[6rem]">
      <TypoHeaderText :custom-class="'!font-normal'" :size="'3xl'">
        Class Name
      </TypoHeaderText>

      <div class="flex items-center">
        <Tabs
          :tabs="filterOptions"
          :activeTab="activeOption"
          @selectTab="(option) => {activeOption = option}"
        />
      </div>
    </div>

    <div class="flex flex-col space-y-5" v-if="activeOption == 'projects'">
      <CardProjectDetails
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>

    <div class="flex flex-col space-y-5" v-if="activeOption == 'members'">
      <div
        class="px-4 py-4 flex flex-row items-center space-x-4 bg-white shadow-custom rounded-[10px]"
        v-for="(member, index) in members"
        :key="index"
      >
        <Avatar :photo-url="member.photo_url" :size="'55'" />

        <TypoNormalText :custom-class="'!text-base'">
          {{ member.name }}
        </TypoNormalText>

        <div
          class="py-1 px-2 bg-bouhaws-purple rounded-[5px]"
          v-if="member.is_teacher"
        >
          <TypoNormalText :color="'!text-white'" :custom-class="'!text-xs'">
            Teacher
          </TypoNormalText>
        </div>
      </div>
    </div>

    <div class="flex flex-col space-y-5" v-if="activeOption == 'details'">
      <div
        class="px-6 py-6 flex flex-col space-y-3 bg-white shadow-custom rounded-[10px]"
      >
        <TypoHeaderText :size="'xl'"> About </TypoHeaderText>

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
        <div class="flex flex-row items-center space-x-2">
          <IconLoader :name="'project-black'" :custom-class="'h-[19px]'" />
          <TypoNormalText> 4 projects </TypoNormalText>
        </div>
      </div>

      <div
        class="px-6 py-6 flex flex-col space-y-3 bg-white shadow-custom rounded-[10px]"
      >
        <div class="flex flex-row items-center space-x-2">
          <IconLoader :name="'students-black'" :custom-class="'h-[19px]'" />
          <TypoNormalText> 34 students </TypoNormalText>
        </div>
      </div>
    </div>
  </section>
   
    <div class="h-[100px]"></div>
  </div>
</template>

<script lang="ts"> 
import { defineComponent, ref } from "vue";
import { useMeta } from "vue-meta"; 
import IconLoader from "@/components/IconLoader/index.vue"
import ImageLoader from "@/components/ImageLoader/index.vue"
import TypoNormalText from "@/components/Typo/NormalText.vue"
import TypoHeaderText from "@/components/Typo/HeaderText.vue"
import Button from "@/components/Button/index.vue";
import Avatar from "@/components/Avatar/index.vue";
import CardProjectDetails from "@/components/Card/ProjectDetails.vue"

export default defineComponent({
  components: {
    IconLoader,
    TypoHeaderText,
    TypoNormalText, 
    Button,
    Avatar,
    ImageLoader,
    CardProjectDetails
  }, 
  name: "ClassesDetailsPage",
  setup() {
    useMeta({
      title: "Home",
    });
    
    const activeOption = ref("projects");
    const filterOptions = ref([
      { title: "projects" },
      { title: "members" },
      { title: "details" },
    ]);

    const projects = ref([
      {
        id: "1",
        title: `Project title`,
        type: "class",
        dataPosted: `Posted 2 hours ago`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        milestones: {
          total: 5,
          current: 3,
        },
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
        milestones: {
          total: 5,
          current: 3,
        },
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
        milestones: {
          total: 5,
          current: 3,
        },
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
        milestones: {
          total: 5,
          current: 3,
        },
        deadline: `Deadline in 15 days`,
        user: {
          name: "Brand",
          photo_url: "/images/avatar-4.png",
        },
        image_url: "/images/event-gallery.png",
        completed: true,
      },
    ]);

    const members = ref([
      {
        name: "Teacher Name",
        photo_url: "/images/avatar-3.png",
        is_teacher: true,
      },
      {
        name: "DanielaM",
        photo_url: "/images/avatar-1.png",
        is_teacher: false,
      },
      {
        name: "Robert Lewandowski",
        photo_url: "/images/avatar-2.png",
        is_teacher: false,
      },
      {
        name: "Sheva_111",
        photo_url: "/images/avatar-4.png",
        is_teacher: false,
      },
      {
        name: "DonatellaO",
        photo_url: "/images/avatar-5.png",
        is_teacher: false,
      },
    ]);

    return { members,projects, activeOption, filterOptions };
  },
});

// definePageMeta({ layout: "sub-page" });

// const activeOption = ref("projects");
// const filterOptions = reactive([
//   { title: "projects" },
//   { title: "members" },
//   { title: "details" },
// ]);

// const projects = ref([
//   {
//     id: "1",
//     title: `Project title`,
//     type: "class",
//     dataPosted: `Posted 2 hours ago`,
//     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
//     milestones: {
//       total: 5,
//       current: 3,
//     },
//     deadline: `Deadline in 15 days`,
//     user: {
//       name: "Teacher",
//       photo_url: "/images/avatar-2.png",
//     },
//     image_url: "/images/gallery-project-1.png",
//     completed: true,
//   },
//   {
//     id: "1",
//     title: `Project title`,
//     type: "class",
//     dataPosted: `Posted 2 hours ago`,
//     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
//     milestones: {
//       total: 5,
//       current: 3,
//     },
//     deadline: `Deadline in 15 days`,
//     user: {
//       name: "Brand",
//       photo_url: "/images/avatar-5.png",
//     },
//     image_url: "/images/gallery-project-2.png",
//     completed: true,
//   },
//   {
//     id: "1",
//     title: `Project title`,
//     type: "class",
//     dataPosted: `Posted 2 hours ago`,
//     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
//     milestones: {
//       total: 5,
//       current: 3,
//     },
//     deadline: `Deadline in 15 days`,
//     user: {
//       name: "Teacher",
//       photo_url: "/images/avatar-3.png",
//     },
//     image_url: "/images/gallery-project-3.png",
//     completed: true,
//   },
//   {
//     id: "1",
//     title: `Project title`,
//     type: "class",
//     dataPosted: `Posted 2 hours ago`,
//     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
//     milestones: {
//       total: 5,
//       current: 3,
//     },
//     deadline: `Deadline in 15 days`,
//     user: {
//       name: "Brand",
//       photo_url: "/images/avatar-4.png",
//     },
//     image_url: "/images/event-gallery.png",
//     completed: true,
//   },
// ]);

// const members = reactive([
//   {
//     name: "Teacher Name",
//     photo_url: "/images/avatar-3.png",
//     is_teacher: true,
//   },
//   {
//     name: "DanielaM",
//     photo_url: "/images/avatar-1.png",
//     is_teacher: false,
//   },
//   {
//     name: "Robert Lewandowski",
//     photo_url: "/images/avatar-2.png",
//     is_teacher: false,
//   },
//   {
//     name: "Sheva_111",
//     photo_url: "/images/avatar-4.png",
//     is_teacher: false,
//   },
//   {
//     name: "DonatellaO",
//     photo_url: "/images/avatar-5.png",
//     is_teacher: false,
//   },
// ]);

</script>
