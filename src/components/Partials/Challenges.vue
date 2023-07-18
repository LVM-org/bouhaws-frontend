<template>
  <section
    class="pb-3 border relative bg-bouhaws-semi-dark h-full rounded-t-xl"
  >
    <div
      class="px-3 pb-4 mb-2 border-b border-b-[#61656D] border-opacity-70 relative w-full"
    >
      <div
        class="w-fit bg-gradient-to-r -mt-6 from-bouhaws-light-green via-bouhaws-blue-main to-bouhaws-green p-1 rounded-full flex justify-center items-center right-1/2 bottom-1/2 text-xl mx-auto font-medium"
      >
        <span
          class="w-full h-full rounded-full bg-bouhaws-semi-dark text-white px-5 py-3"
        >
          3
        </span>
      </div>

      <div>
        <div
          class="mt-5 text-sm rounded-full relative bg-bouhaws-light flex mx-auto w-5/6"
        >
          <p
            class="text-white px-3 py-1 overflow-hidden rounded-full bg-bouhaws-green"
          >
            <!-- :style="{ width: `${getPercentageRatio(23000, 50000)}%` }" -->
            <!-- {{ formatNumber(23000) }} -->
          </p>

          <span
            class="absolute text-bouhaws-semi-dark right-0 top-0 flex justify-end items-center px-3 py-1"
          >
            <!-- {{ formatNumber(50000) }} -->
          </span>
        </div>

        <p
          class="flex items-center justify-center text-bouhaws-light w-full my-2 space-x-1 text-xs"
        >
          <span class="text-bouhaws-light-green">
            <!-- {{ formatNumber(50000 - 23000) }} points -->
          </span>
          <span> left to reach LEVEL 4 </span>
        </p>
      </div>
    </div>

    <div class="px-3 h-full overflow-scroll pb-20 no-scrollbar space-y-3">
      <!-- <CardChallenge
        v-for="challenge in challenges"
        :key="challenge.id"
        :challenge="challenge"
      /> -->

      <div class="h-12"></div>
    </div>

    <div
      class="h-14 absolute rounded-b-xl bg-bouhaws-semi-dark w-full -bottom-12 left-0"
    ></div>
  </section>
</template>

<script lang="ts">
// import { getPercentageRatio, formatNumber } from "~/controllers/utils";

// const challenges = ref([
//   {
//     id: "1",
//     title: `Challenge title`,
//     reward: 1,
//     instruction: `Challenge instruction`,
//     imagUrl: "",
//     completed: true,
//   },
//   {
//     id: "2",
//     title: `Challenge title`,
//     reward: 500,
//     instruction: `Challenge instruction`,
//     imagUrl: "",
//     completed: true,
//   },
//   {
//     id: "3",
//     title: `Challenge title`,
//     reward: 500,
//     instruction: `Challenge instruction`,
//     imagUrl: "",
//     completed: true,
//   },
//   {
//     id: "4",
//     title: `Challenge title`,
//     reward: 500,
//     instruction: `Challenge instruction`,
//     imagUrl: "",
//     completed: true,
//   },
//   {
//     id: "11",
//     title: `Challenge title`,
//     reward: 500,
//     instruction: `Challenge instruction`,
//     imagUrl: "",
//     completed: true,
//   },
//   {
//     id: "12",
//     title: `Challenge title`,
//     reward: 500,
//     instruction: `Challenge instruction`,
//     imagUrl: "",
//     completed: false,
//   },
//   {
//     id: "3",
//     title: `Challenge title`,
//     reward: 500,
//     instruction: `Challenge instruction`,
//     imagUrl: "",
//     completed: true,
//   },
//   {
//     id: "4",
//     title: `Challenge title`,
//     reward: 500,
//     instruction: `Challenge instruction`,
//     imagUrl: "",
//     completed: true,
//   },
//   {
//     id: "11",
//     title: `Challenge title`,
//     reward: 500,
//     instruction: `Challenge instruction`,
//     imagUrl: "",
//     completed: true,
//   },
//   {
//     id: "12",
//     title: `Challenge title`,
//     reward: 500,
//     instruction: `Challenge instruction`,
//     imagUrl: "",
//     completed: false,
//   },
//   {
//     id: "3",
//     title: `Challenge title`,
//     reward: 500,
//     instruction: `Challenge instruction`,
//     imagUrl: "",
//     completed: true,
//   },
//   {
//     id: "4",
//     title: `Challenge title`,
//     reward: 500,
//     instruction: `Challenge instruction`,
//     imagUrl: "",
//     completed: true,
//   },
//   {
//     id: "11",
//     title: `Challenge title`,
//     reward: 500,
//     instruction: `Challenge instruction`,
//     imagUrl: "",
//     completed: true,
//   },
//   {
//     id: "12",
//     title: `Challenge title`,
//     reward: 500,
//     instruction: `Challenge instruction`,
//     imagUrl: "",
//     completed: false,
//   },
//   {
//     id: "3",
//     title: `Challenge title`,
//     reward: 500,
//     instruction: `Challenge instruction`,
//     imagUrl: "",
//     completed: true,
//   },
//   {
//     id: "4",
//     title: `Challenge title`,
//     reward: 500,
//     instruction: `Challenge instruction`,
//     imagUrl: "",
//     completed: true,
//   },
//   {
//     id: "11",
//     title: `Challenge title`,
//     reward: 500,
//     instruction: `Challenge instruction`,
//     imagUrl: "",
//     completed: true,
//   },
//   {
//     id: "12",
//     title: `Challenge title`,
//     reward: 500,
//     instruction: `Challenge instruction`,
//     imagUrl: "",
//     completed: false,
//   },
// ]);
</script>
