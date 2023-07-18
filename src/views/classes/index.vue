<template>
  <router-link
    to="/classes/id"
    class="container grid grid-cols-3 gap-6 px-2 relative"
  >
    <!-- main content -->
    <section class="col-span-2 space-y-5">
      <!-- My Classes  -->
      <div
        class="rounded-[10px] px-5 py-5 bg-white flex flex-col space-y-3 shadow-custom"
        v-for="(bouhawsClass, index) in Classes"
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
            <IconLoader :name="'students-black'" :custom-class="'h-[17px]'" />
            <TypoNormalText>
              {{ bouhawsClass.stats.students }} student{{
                bouhawsClass.stats.students > 1 ? "s" : ""
              }}
            </TypoNormalText>
          </div>

          <div class="flex flex-row items-center space-x-1">
            <IconLoader :name="'project-black'" :custom-class="'h-[17px]'" />
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

    <!-- right side  -->
    <section class="col-span-1 h-fit pb-5 sticky top-0">
      <PartialsLeaderboard />
    </section>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import { useMeta } from "vue-meta"; 
import IconLoader from "@/components/IconLoader/index.vue"
import ImageLoader from "@/components/ImageLoader/index.vue"
import TypoNormalText from "@/components/Typo/NormalText.vue"
import TypoHeaderText from "@/components/Typo/HeaderText.vue"
import Button from "@/components/Button/index.vue";
import Avatar from "@/components/Avatar/index.vue";
import PartialsLeaderboard from "@/components/Partials/Leaderboard.vue";

export default defineComponent({
  components: {
    IconLoader,
    TypoHeaderText,
    TypoNormalText, 
    Button,
    Avatar,
    ImageLoader,
    PartialsLeaderboard
  }, 
  name: "ClassesPage",
  setup() {
    useMeta({
      title: "Home",
    });

const Classes = [
  {
    name: "Class Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    user: {
      name: "Teacher",
      photo_url: "/images/avatar-3.png",
    },
    stats: {
      students: 34,
      projects: 4,
    },
  },
];

    return {Classes};
  },
});
// definePageMeta({ layout: "dashboard" });

</script>
