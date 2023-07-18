<template>
  <div class="border px-5 py-3 box-shadow rounded-lg bg-white">
    <h4 class="text-2xl mb-2 text-[#9383FF]">{{ course.courseCode }}</h4>
    <h5 class="text-sm mb-8 font-normal">
      {{ course.title }}
    </h5>

    <div class="flex items-center justify-between text-sm font-light">
      <span class="flex items-center space-x-2">
        <img
          src="/images/profile-picture.svg"
          :alt="course.title"
          class="!h-7 !w-7 rounded-full"
        />
        <span> {{ course.username }} </span>
      </span>

      <span
        class="px-3 py-1 rounded-md text-sm font- light"
        :class="
          course.isEnrolled
            ? 'bg-bouhaws-green text-white'
            : 'text-[#0E1011] bg-bouhaws-light '
        "
      >
        {{ course.isEnrolled ? "Enrolled" : "Unenrolled" }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"; 

export default defineComponent({
  components: { 
  },
  props: { 
  course: {
    type: Object,
    default: () => {},
  },
  },
  
  name: "Course",

  setup() { 

    return { 
    };
  },
});
</script>
 