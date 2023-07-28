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

      <!-- 
          {
    "id": "1",
    "title": "Project Young",
    "type": "tet",
    "created_at": "2023-07-24 01:49:21",
    "description": "My project description",
    "end_date": "2022-09-24 00:00:00",
    "photo_url": null,
    "milestones": [],
    "__typename": "Project"
  },

  {
          "id": "1",
          "title": "Project Young",
          "type": "tet",
          "created_at": "2023-07-24 01:49:21",
          "description": "My project description",
          "end_date": "2022-09-24 00:00:00",
          "photo_url": null,
          "milestones": [],
          "user": {
            "email": "test@gmail.com",
            "id": "1",
            "name": "Test Name",
            "profile": {
              "photo_url": null,
              "points": 0
            }
          }
        },
       -->

      <div class="flex flex-col space-y-5" v-if="AllProjects.length"> 
        <CardProjectDetails
          v-for="project in AllProjects"
          :key="project.id"
          :project="project"
        /> 
      </div>
       
      <FullscreenLoading :loading="isLoading" v-else/> 
    </section>

    <div class="h-[100px]"></div>
  </dashboard-layout>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref, watch , computed, reactive} from "vue";
import { useMeta } from "vue-meta";
import CardProjectDetails from "@/components/Card/ProjectDetails.vue";
import FullscreenLoading  from "@/components/FullscreenLoading/index.vue";
import Tabs from "../../components/Tabs/index.vue";
import { Logic } from "bouhaws-frontend-logic";

export default defineComponent({
  components: { 
    CardProjectDetails,
    FullscreenLoading ,
    Tabs
  }, 
  name: "ProjectsPage",
  setup() {
    useMeta({
      title: "Projects",
    }); 
    const isLoading = ref(false);
    const activeOption = ref("active");
    const activeOption1 = ref("all");
    const filterOptions = ref([{ title: "active" }, { title: "completed" }]);
    const filterOptions1 = ref([
      { title: "all" },
      { title: "class" },
      { title: "challenge" },
    ]);

    const AllProjects =   ref(Logic.Project?.AllProjects)
    
    const selectActiveTab = (value: string) => {
      activeOption1.value = value;
    };
    const selectActiveOption = (value: string) => {
      activeOption.value = value;
    };
    

    const getAllProjects = async () => {
      isLoading.value = true
      Logic.Project.GetProjectsPayload = {
        first: 10,
        page: 1 
      }
      await Logic.Project.GetProjects()  
      isLoading.value = false
    }

    onBeforeMount(async() => {
      await getAllProjects() 
      Logic.Project.watchProperty("AllProjects", AllProjects)
    })

    return {
      activeOption,
      activeOption1,
      filterOptions,
      filterOptions1,
      AllProjects,
      selectActiveTab,
      selectActiveOption, 
      isLoading
    };
  },
}); 
</script>
