<template>
<dashboard-layout>
  <div>  
    <div class="grid grid-cols-3 gap-6 py-5 px-2 w-4/6 mx-auto border">
      <section class="border w-full col-span-1 h-auto">
        <img
          src="/images/profile-picture.svg"
          alt=""
          class="h-full w-full rounded-full"
        />
      </section>

      <section class="col-span-2 w-full space-y-5">
        <div
          class="border w-full py-3 px-4 bg-white rounded-lg box-shadow space-y-3"
        >
          <h4 class="flex items-center text-2xl space-x-3 font-normal">
            <IconArrow type="left" class="text-bouhaws-blue-main" />
            <span> Project Title </span>
          </h4>

          <div class="flex items-center space-x-6 text-sm mb-3">
            <span class="flex items-center space-x-2">
              <img
                src="/images/profile-picture.svg"
                class="!h-7 !w-7 rounded-full"
              />
              <span> ArchyScript </span>
            </span>

            <span class="font-light"> Posted 2hr ago </span>
          </div>

          <p class="text-sm font-light">
            Short description of the project and different techniques they used
            to create the entry. Also anything they think would be helpful.
          </p>

          <p class="flex items-center space-x-5 text-bouhaws-light py-2">
            <IconArrow type="upvote" />

            <span class="text-bouhaws-dark"> 360 </span>

            <IconArrow type="downvote" />
          </p>
        </div>

        <div class="border w-full h-auto">commi=ents</div>
      </section>
    </div>
  </div>
</dashboard-layout>
</template>


<script lang="ts"> 
import { defineComponent } from "vue";
import { useMeta } from "vue-meta"; 

export default defineComponent({
  components: {}, 
  name: "CoursesDetailsPage",
  setup() {
    useMeta({
      title: "Courses",
    });

    return {};
  },
});
 </script>
 