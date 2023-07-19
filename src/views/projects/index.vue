<template>
  <dashboard-layout>
  <section class="col-span-3 flex flex-col space-y-3 relative">
    <div class="flex flex-row justify-between items-center sticky top-0">
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
      <CardProjectDetails
        v-for="project in projects"
        :key="project.id"
        :project="project"
      /> 
    </div>
  </section>
  
  <div class="h-[100px]"></div>
  </dashboard-layout>
</template>

<script lang="ts"> 
import { defineComponent, onMounted, ref, watch } from "vue";
import { useMeta } from "vue-meta"; 
import CardProjectDetails from "@/components/Card/ProjectDetails.vue"
import Tabs from "@/components/Tabs/index.vue";

export default defineComponent({
  components: { CardProjectDetails, Tabs },
  middlewares: {
    fetchRules: [],
  },
  name: "ProjectsPage",
  setup() {
    useMeta({
      title: "Projects",
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
 
    const selectActiveTab =  (value: string) => {
      activeOption1.value = value
    }
    const selectActiveOption =  (value: string) => {
      activeOption.value = value
    }


    return { activeOption, activeOption1, filterOptions, filterOptions1, projects, selectActiveTab, selectActiveOption};
  },
});

// definePageMeta({ layout: "dashboard" });

</script>
