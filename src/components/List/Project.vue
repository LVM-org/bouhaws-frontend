<template>
  <div class="flex justify-between items-center -space-x-2.5">
    <!--  -->
    <div class="space-y-0.5">
      <h5 class="font-medium">Project Title</h5>
      <p class="text-sm font-normal">You submitted an entry 2h ago</p>
    </div>

    <!--  -->
    <div>
      <h5 class="text-sm font-normal mb-1.5">Project milestones</h5>

      <p class="flex space-x-2 items-center">
        <span
          v-for="x in 5"
          :class="x < 2 ? 'text-bouhaws-green' : 'text-bouhaws-light-gray'"
        >
          <IconCheckbox :width="16" :height="16" />
        </span>
      </p>
    </div>

    <!--  -->
    <div
      class="px-5 cursor-pointer flex items-center space-x-2.5 w-fit py-2 font-medium text-sm rounded-lg text-white bg-bouhaws-dark"
    >
      <span>Get Started</span>
      <!-- <IconArrow :width="13" :height="12" type="45-right" /> -->
    </div>
  </div>
</template>

<script lang="ts">  
// const props = defineProps({
//   challenge: {
//     type: Object,
//     default: () => { }
//   }
// })
</script>
