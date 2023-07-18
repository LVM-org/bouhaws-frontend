<template>
<challenges-layout>
  <section class="space-y-5"> 
    <div class="w-2/3 flex flex-col rounded-lg h-fit p-6 bg-white">
      <h4 class="text-2xl mb-2">Available courses</h4>

      <p class="text-sm mb-2 font-light pr-12">
        Here you can see available courses based on your school. Click the
        course you want to enrol into and enter the passcode set by your
        teacher. The active projects from your courses will be visible in the
        Projects page.
      </p>
    </div>

    <div class="grid grid-cols-3 p-2 max-h-screen gap-4">
      <div v-for="course in courses" :key="course.id">
        <CardCourse :course="course" />
      </div>
    </div>
  </section>
</challenges-layout>
</template>

<script lang="ts"> 
import { defineComponent, ref } from "vue";
import { useMeta } from "vue-meta"; 
import CardCourse from "@/components/Card/Course.vue"

export default defineComponent({
  components: { CardCourse }, 
  name: "CoursesPage",
  setup() {
    useMeta({
      title: "Courses",
    });

    const courses = ref([
      {
        id: "2",
        title: "Introduction to",
        courseCode: "ARC 112",
        isEnrolled: true,
        username: "ArchyScript",
        profilePicture: ""
      },
      {
        id: "8",
        title: "Introduction to",
        courseCode: "ARC 112",
        isEnrolled: false,
        username: "ArchyScript",
        profilePicture: ""
      },
      {
        id: "7",
        title: "Introduction to",
        courseCode: "ARC 112",
        isEnrolled: false,
        username: "ArchyScript",
        profilePicture: ""
      },
      {
        id: "242",
        title: "Introduction to",
        courseCode: "ARC 112",
        isEnrolled: true,
        username: "ArchyScript",
        profilePicture: ""
      },
      {
        id: "28",
        title: "Introduction to",
        courseCode: "ARC 112",
        isEnrolled: false,
        username: "ArchyScript",
        profilePicture: ""
      },
      {
        id: "75",
        title: "Introduction to",
        courseCode: "ARC 112",
        isEnrolled: false,
        username: "ArchyScript",
        profilePicture: ""
      },
      {
        id: "65",
        title: "Introduction to",
        courseCode: "ARC 112",
        isEnrolled: true,
        username: "ArchyScript",
        profilePicture: ""
      },
      {
        id: "1",
        title: "Introduction to",
        courseCode: "ARC 112",
        isEnrolled: false,
        username: "ArchyScript",
        profilePicture: ""
      },
      {
        id: "43",
        title: "Introduction to",
        courseCode: "ARC 112",
        isEnrolled: true,
        username: "ArchyScript",
        profilePicture: ""
      },
      {
        id: "24",
        title: "Introduction to",
        courseCode: "ARC 112",
        isEnrolled: true,
        username: "ArchyScript",
        profilePicture: ""
      },
    ])

    return { courses };
  },
});

// definePageMeta({  layout: "challenges-dashboard" });
 
</script>
  