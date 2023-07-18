<template>
  <section class="pb-3 border h-full rounded-xl p-2 bg-bouhaws-semi-dark">
    <div
      class="flex justify-between text-sm rounded-t-xl items-center font-medium mb-4 p-3 w-full"
    >
      <span class="flex items-center space-x-2 text-white">
        <!-- <IconTreasure title="diamond" :width="30" :height="21" /> -->

        <span>Milestone</span>
      </span>

      <span
        class="text-sm font-normal px-4 py-1.5 bg-white rounded-lg text-bouhaws-semi-dark"
      >
        Edit
      </span>
    </div>

    <div class="overflow-scroll no-scrollbar space-y-3 max-h-screen">
      <!-- <CardMilestone
        v-for="(user, index) in users"
        :key="user.id"
        :index="+index + 1"
        :user="user"
      /> -->
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"; 

export default defineComponent({
  components: {   },
  props: { 
  },
  
  name: "",

  setup() { 

const users = ref([
  {
    id: "1",
    name: `Oluwatoyin Script`,
    reward: 180,
    imagUrl: "",
  },
  {
    id: "2",
    name: `Oluwatoyin Script`,
    reward: 180,
    imagUrl: "",
  },
  {
    id: "3",
    name: `Oluwatoyin Script`,
    reward: 180,
    imagUrl: "",
  },
  {
    id: "4",
    name: `Oluwatoyin Script`,
    reward: 180,
    imagUrl: "",
  },
  {
    id: "5",
    name: `Oluwatoyin Script`,
    reward: 180,
    imagUrl: "",
  },
  {
    id: "6",
    name: `Oluwatoyin Script`,
    reward: 180,
    imagUrl: "",
  },
  {
    id: "7",
    name: `Oluwatoyin Script`,
    reward: 180,
    imagUrl: "",
  },
  {
    id: "8",
    name: `Oluwatoyin Script`,
    reward: 180,
    imagUrl: "",
  },
]);
    return { users };
  },
});
</script>

