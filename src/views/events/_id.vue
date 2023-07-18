<template>
<milestone-dashboard-layout>
  <div>
    <!-- Modals here -->
    <!-- <Modal
      title="Event details"
      id="event-details"
      v-if="showEventDetailsModal"
      @close="showEventDetailsModal = false"
    >
      <div class="space-y-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi utc
        </p>

        <ul class="space-y-1 px-2">
          <li v-for="x in 3" :key="x">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </li>
        </ul>

        <div
          class="w-full flex flex-row space-x-3 flex-nowrap overflow-x-auto scrollbar-hide"
        >
          <div class="flex flex-row space-x-3 py-2 pr-4">
            <CardExhibition
              v-for="exhibition in exhibitions"
              :key="exhibition"
              :exhibition="exhibition"
              class="!h-40 !w-[230px]"
            />
          </div>
        </div>
      </div>
    </Modal> -->  

    <!--  -->
    <div class="grid grid-cols-3 gap-x-6 mx-auto">
      <section class="col-span-2 space-y-6 w-full">
        <div class="w-full py-4 px-6 bg-white rounded-lg box-shadow space-y-7">
          <div class="flex justify-between items-center">
            <h4 class="flex items-center text-2xl space-x-4 font-normal">
              <IconArrow
                type="left"
                @click="router.go(-1)"
                class="text-bouhaws-blue-main cursor-pointer"
              />
              <span> Event Title </span>
            </h4>

            <span class="font-light text-xs"> Posted 18h ago </span>
          </div>

          <p class="text-sm font-light w-5/6">
            Short description of the event and different techniques they used to
            create the entry. Also anything they think would be helpful.
          </p>

          <div class="flex items-center space-x-6 text-xs">
            <span
              class="flex flex-1 space-x-2 bg-[#FFE2C6] text-[#844200] items-center px-3 py-2 rounded-md"
            >
              <IconUser
                :title="event?.entry?.type == 'single' ? 'user' : 'users'"
              />

              <span>
                {{
                  event?.entry?.type == "single"
                    ? "Individual entries"
                    : `Teams of ${
                        event?.entry?.range?.max - event?.entry?.range?.min
                      } members`
                }}
              </span>
            </span>

            <span
              class="flex flex-1 space-x-2 bg-[#ECE0FF] text-[#0C006C] items-center px-3 py-2 rounded-md"
            >
              <IconImagePlus />

              <span>
                {{
                  event?.entry?.type == "single"
                    ? "1 Entry allowed"
                    : `${event?.entry?.range?.min} - ${event?.entry?.range?.max}   entries allowed`
                }}
              </span>
            </span>

            <span
              class="flex flex-1 space-x-2 bg-[#DBE7FF] text-[#02176B] items-center px-3 py-2 rounded-md"
            >
              <span> Deadline: </span>
              <span> {{ event?.deadline }} </span>
            </span>
          </div>

          <div class="flex items-center space-x-6">
            <span class="flex flex-1 items-center text-sm space-x-2">
              <img
                src="/images/profile-picture.svg"
                :alt="event.title"
                class="!h-7 !w-7 rounded-full"
              />

              <span>
                {{ event.username }}
              </span>
            </span>

            <span
              class="relative flex-1 text-xs space-x-2 bg-[#ECE0FF] text-[#0C006C] items-center py-1.5 rounded-md"
            >
              <IconTreasure
                title="diamond"
                :height="40"
                :width="36"
                class="absolute -left-2 -top-2"
              />

              <span class="pl-8">
                {{
                  event?.points?.min > 1
                    ? `${event?.points?.min}/${event?.points?.max} Points`
                    : `${event?.points?.min}/${event?.points?.max} Points`
                }}
              </span>
            </span>

            <span class="flex flex-1"> </span>
          </div>
        </div>

        <div class="w-full py-4 px-6 bg-white rounded-lg box-shadow space-y-4">
          <div class="flex justify-between items-center">
            <h4 class="flex items-center text-2xl space-x-4 font-normal">
              <span> Event Details </span>
            </h4>

            <Button
              text="View"
              @click="showEventDetailsModal = true"
              :hasIcon="false"
              class="!py-2 !px-5 my-2 !font-extralight"
            />
          </div>

          <p class="text-sm font-light w-5/6">
            Click View to see the more of the event details
          </p>

          <div
            class="w-full flex flex-row space-x-3 flex-nowrap overflow-x-auto scrollbar-hide"
          >
            <div class="flex flex-row space-x-3 py-2 pr-4">
              <CardExhibition
                v-for="exhibition in exhibitions"
                :key="exhibition"
                :exhibition="exhibition"
                class="!h-40 !w-[230px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="col-span-1 w-full space-y-6">
        <form
          @submit.prevent="uploadForm"
          class="rounded-lg box-shadow bg-white"
        >
          <div
            class="px-5 py-8 mb-2 border-b-2 border-[#EBEBE5] flex space-x-4 justify-center items-center"
          >
            <span class="p-2 rounded-lg bg-bouhaws-blue-main text-white">
              <IconAdd :width="16" :height="16" />
            </span>

            <h5 class="text-xl">Upload entry</h5>
          </div>

          <div class="px-6 py-2 space-y-2 border-b-2 border-[#EBEBE5]">
            <div>
              <input
                type="text"
                id="title"
                class="border-0 w-full placeholder:text-bouhaws-dark placeholder:text-sm placeholder:font-extralight font-light py-2 px-0.5 text-sm border-b border-[#EBEBE5] outline-none"
                placeholder="Title"
                v-model="payload.title"
              />
            </div>

            <div>
              <textarea
                id="description"
                v-model="payload.description"
                class="border-0 resize-none w-full placeholder:text-bouhaws-dark no-scrollbar placeholder:text-sm placeholder:font-extralight overflow-auto font-light mt-1 py-2 px-0.5 text-sm outline-none"
                placeholder="Short description (optional)"
                column="4"
              ></textarea>
            </div>
          </div>

          <div class="p-7">
            <Button
              type="submit"
              text="Submit"
              :hasIcon="false"
              class="!w-full flex-1 !py-2.5 !px-6 my-2"
              customClass="!bg-[#D6D6D6]  !text-bouhaws-dark !text-white"
            />
          </div>
        </form>

        <div class="rounded-lg box-shadow p-2 pb-4 bg-white">
          <h5 class="text-xl mb-3 p-3">Submission requirements</h5>

          <div class="flex flex-col space-y-2 text-sm">
            <p
              v-for="requirement in requirements"
              :key="requirement.title"
              class="flex space-x-3 items-center font-light py-1 px-2"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-bouhaws-purple"></span>
              <span>
                {{ requirement.title }}
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</milestone-dashboard-layout>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import { useMeta } from "vue-meta"; 
import { useRouter } from "vue-router";
import CardExhibition from "@/components/Card/Exhibition.vue"
import Button from "@/components/Button/index.vue";

export default defineComponent({
  components: { Button, CardExhibition },
  middlewares: {
    fetchRules: [],
  },
  name: "EventsDetailsPage",
  setup() {
    useMeta({
      title: "Home",
    });
 
    const router = useRouter();
    const event = ref({
      id: "1",
      title: `Project title`,
      username: "ArchyScript",
      entryType: "single",
      entryRange: "1-4",
      entry: {
        type: "multiple",
        range: {
          min: 1,
          max: 6,
        },
      },
      points: {
        min: 200,
        max: 500,
      },
      dataPosted: `Posted 2h ago `,
      description: `Short description of the event and how the teacher is expecting from the student entries. Also anything they think would be helpful.`,
      milestone: 2,
      memberOfTeam: 4,
      deadline: `20/23/2022`,
      imagUrl: "/images/profile-picture.svg",
      completed: true,
    });

    const requirements = ref([
      { title: "Project entries must be less than 5MB." },
      { title: "Project entries must be less than 5MB." },
      { title: "Images resolution should be at least 150 pixels." },
    ]);

    const payload = ref({
      title: "",
      description: "",
    });

    const uploadForm = () => {
      console.log(payload.value);
    };

    const showEventDetailsModal = ref(false);

    const exhibitions = ref([
      {
        id: "1",
        username: `ArchyScript`,
        profilePicture: ``,
        artWork: ``,
      },
      {
        id: "2",
        username: `ArchyScript`,
        profilePicture: ``,
        artWork: ``,
      },
      {
        id: "3",
        username: `ArchyScript`,
        profilePicture: ``,
        artWork: ``,
      },
      {
        id: "4",
        username: `ArchyScript`,
        profilePicture: ``,
        artWork: ``,
      },
      {
        id: "5",
        username: `ArchyScript`,
        profilePicture: ``,
        artWork: ``,
      },
      {
        id: "6",
        username: `ArchyScript`,
        profilePicture: ``,
        artWork: ``,
      },
      {
        id: "7",
        username: `ArchyScript`,
        profilePicture: ``,
        artWork: ``,
      },
      {
        id: "8",
        username: `ArchyScript`,
        profilePicture: ``,
        artWork: ``,
      },
      {
        id: "9",
        username: `ArchyScript`,
        profilePicture: ``,
        artWork: ``,
      },
      {
        id: "10",
        username: `ArchyScript`,
        profilePicture: ``,
        artWork: ``,
      },
      {
        id: "11",
        username: `ArchyScript`,
        profilePicture: ``,
        artWork: ``,
      },
      {
        id: "12",
        username: `ArchyScript`,
        profilePicture: ``,
        artWork: ``,
      },
    ]);

    return { router, event, requirements, payload, uploadForm, showEventDetailsModal, exhibitions };
  },
});

// definePageMeta({ layout: "milestone-dashboard" });

</script>
 