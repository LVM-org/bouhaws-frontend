<template>
  <section class="container gap-6 space-y-5"> 
    <div class="grid grid-cols-3 gap-x-4">
      <div
        class="p-6 bg-opacity-20 text-white col-span-2 box-shadow rounded-lg bg-gradient-to-br from-[#8861DE] via-[#8861DE] to-[#E0B4F9]"
      >
        <h3 class="uppercase mb-4 text-shadow font-bold text-3xl">
          INTERNATIONAL <br />
          WOMEN’S DAY
        </h3>

        <p class="font-light mb-5 text-sm w-3/4">
          Show your support for all the women breaking the bias by joining this
          event. Submit entries relating to the theme and stand a chance to get
          your work voted as the best.
        </p>

        <div class="flex font-light items-center space-x-8 text-sm">
          <span>200 Entries submitted </span>
          <span>Open until 20/03/23 </span>
        </div>
      </div>

      <div
        class="p-4 relative h-auto col-span-1 box-shadow rounded-lg bg-white"
      >
        <div
          class="absolute right-0 top-0 rounded-md rounded-tl-none rounded-br-none bg-[#E3E3D9] pl-4 pb-4 pr-0.5 pt-0.5"
        >
          <router-link to="events/create">
            <Button
              text="Create new event"
              customClass="!font-light !px-4 !py-2"
            />
          </router-link>
        </div>
      </div>
    </div>

    <!-- others -->
    <div class="grid grid-cols-3 gap-4">
      <router-link
        :to="`events/${x}`"
        class="p-4 col-span-1 min-h-[12.5rem] bg-white rounded-lg"
        v-for="x in 16"
        :key="x"
      >
        test {{ x }}
      </router-link>
    </div>
  </section>
</template>

<script lang="ts"> 
import { defineComponent, onMounted, ref, watch } from "vue";
import { useMeta } from "vue-meta"; 
import Button from "@/components/Button/index.vue";

export default defineComponent({
  components: { Button }, 
  name: "EventsPage",
  setup() {
    useMeta({
      title: "Events",
    });

    return {};
  },
});
</script>
  