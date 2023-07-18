<template>
<milestone-dashboard-layout>
  <div class="mx-auto relative flex flex-col"> 
    <div class="flex justify-end absolute right-0 -top-12 pb-4">
      <Button
        text="Save Event details"
        customClass="!font-normal !py-2.5 !px-5"
      />
    </div>

    <div class="grid grid-cols-3 gap-x-5 mb-5">
      <section
        class="w-full col-span-2 py-4 px-6 bg-white rounded-lg box-shadow space-y-7"
      >
        <div>
          <h4 class="flex items-center text-2xl space-x-4 font-normal">
            <IconArrow
              type="left"
              @click="router.go(-1)"
              class="text-bouhaws-blue-main cursor-pointer"
            />

            <input
              id="Comments"
              class="border-0 resize-none w-3/4 text-2xl text-[#B4BAC9] placeholder:text-[#B4BAC9] bg-transparent placeholder:text-2xl overflow-auto font-light mt-1 py-1.5 px-2 outline-none"
              placeholder="Event Title"
              v-model="payload.title"
            />
          </h4>

          <div>
            <textarea
              id="description"
              class="border-0 resize-none w-full text-[#B4BAC9] placeholder:text-[#B4BAC9] placeholder:text-sm placeholder:font-light overflow-auto font-normal mt-1 py-2 px-0.5 text-sm outline-none"
              placeholder="Enter a short description of the project"
              column="4"
              v-model="payload.description"
            ></textarea>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-6 text-xs flex-wrap">
          <span
            class="flex flex-1 truncate space-x-2 bg-[#EBEBE5] text-bouhaws-semi-dark items-center px-3 py-2 rounded-md"
          >
            <IconUser
              title="user"
              class="text-[#A0A1A3]"
              :width="16"
              :height="18"
            />

            <select
              class="border-0 text-bouhaws-dark truncate bg-transparent py-1 px-2 outline-none"
              placeholder="Event Title"
            >
              <option value="1">Individual entries</option>
              <option value="2">Multiple entries</option>
            </select>
          </span>

          <span
            class="flex flex-1 space-x-3 truncate bg-[#EBEBE5] text-bouhaws-semi-dark items-center px-3 py-2 rounded-md"
          >
            <IconImagePlus class="text-[#A0A1A3]" :width="16" :height="18" />

            <input
              type="number"
              class="border-0 text-bouhaws-dark border-b truncate font-normal border-bouhaws-dark w-9 bg-transparent overflow-auto py-1 outline-none"
              v-model="payload.no_of_entries"
            />

            <span class="truncate">
              {{
                payload.no_of_entries < 1 ? "Entry allowed" : `Entries allowed`
              }}
            </span>
          </span>

          <span
            class="flex flex-1 space-x-2 bg-[#EBEBE5] truncate text-bouhaws-semi-dark items-center px-3 py-2 rounded-md"
          >
            <span> Deadline: </span>

            <IconCalendar class="text-[#A0A1A3]" :width="14" :height="16" />

            <input
              type="date"
              class="border-0 text-bouhaws-dark w-fit truncate font-normal border-bouhaws-dark bg-transparent overflow-auto py-1 outline-none"
              min="2018-01-01"
              max="2018-12-31"
              v-model="payload.deadline"
            />
          </span>
        </div>

        <div class="flex items-center space-x-6">
          <span class="flex items-center text-sm space-x-2">
            <img
              src="/images/profile-picture.svg"
              :alt="event.title"
              class="!h-7 !w-7 rounded-full"
            />

            <span>
              {{ event.username }}
            </span>
          </span>
        </div>
      </section>

      <section
        class="w-full h-fit py-4 px-6 bg-white text-sm rounded-lg box-shadow space-y-4"
      >
        <h4 class="text-2xl">Recent entries</h4>

        <p class="font-light">
          Here you’ll see how many students from your school have submitted
          entries
        </p>

        <p class="!mb-10">
          <span>0</span>

          <span> Entries submitted </span>
        </p>

        <span
          class="flex space-x-3 items-center justify-center !w-full flex-1 !py-2.5 !px-6 my-2 bg-[#D6D6D6] !text-white rounded-lg"
        >
          <span> View submitted entries </span>

          <IconArrow type="right" />
        </span>
      </section>
    </div>

    <div class="grid grid-cols-2 gap-x-5">
      <section
        class="w-full py-4 px-6 bg-white rounded-lg box-shadow space-y-3"
      >
        <h4 class="text-2xl">Event details</h4>

        <div>
          <textarea
            id="description"
            class="border-0 resize-none w-full placeholder:font-light placeholder:text-sm placeholder:text-bouhaws-semi-dark overflow-auto font-normal mt-1 py-2 px-0.5 text-sm outline-none"
            placeholder="Enter a short description of the project"
            column="3"
          ></textarea>
        </div>

        <p
          class="flex items-center space-x-2 text-bouhaws-blue-main text-sm font-light"
        >
          <IconAdd />

          <span>Add project details</span>
        </p>
      </section>

      <section
        class="w-full rounded-lg py-4 px-6 rounded-tl-none box-shadow flex flex-col justify-between space-y-4 p-2 pb-4 bg-white"
      >
        <h5 class="text-xl">Submission requirements</h5>

        <p
          class="flex items-center space-x-2 text-bouhaws-blue-main text-sm font-light"
        >
          <IconAdd />

          <span>Add project details</span>
        </p>
      </section>
    </div>
  </div>
</milestone-dashboard-layout>
</template>

<script lang="ts"> 
import { defineComponent, onMounted, ref, watch } from "vue";
import { useMeta } from "vue-meta"; 
import { useRouter } from "vue-router";
import Button from "@/components/Button/index.vue";

export default defineComponent({
  components: { Button },
  middlewares: {
    fetchRules: [],
  },
  name: "CreateEventsPage",
  setup() {
    useMeta({
      title: "Create Events",
    });

    const router = useRouter()
    const event = ref({
      id: "1",
      title: `Event title`,
      username: "ArchyScript",
      entryType: 'single',
      entryRange: '1-4',
      entry: {
        type: 'multiple',
        range: {
          min: 1,
          max: 6
        }
      },
      points: {
        min: 200,
        max: 500
      },
      dataPosted: `Posted 2h ago `,
      description: `Short description of the event and how the teacher is expecting from the student entries. Also anything they think would be helpful.`,
      milestone: 2,
      memberOfTeam: 4,
      deadline: `20/23/2022`,
      imagUrl: '/images/profile-picture.svg',
      completed: true,
    })

    const requirements = ref([
      { title: "Project entries must be less than 5MB." },
      { title: "Project entries must be less than 5MB." },
      { title: "Images resolution should be at least 150 pixels." },
    ])

    const payload = ref({
      title: "",
      description: "",
      deadline: "",
      no_of_entries: 0
    })

    const showEventDetailsModal = ref(false)

    const uploadForm = () => {
      console.log(payload.value)
    }

    return {uploadForm, showEventDetailsModal, payload, event, requirements, router};
  },
});

// definePageMeta({ layout: "milestone-dashboard" });

</script>

<style scoped>
input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}
</style> 