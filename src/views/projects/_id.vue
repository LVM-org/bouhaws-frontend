<template>
  <milestone-dashboard-layout>
  <div>
    <!-- Modals here -->
    <!-- <Modal
      title="Project details"
      id="project-details"
      v-if="showProjectDetailsModal"
      @close="showProjectDetailsModal = false"
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

    <!-- Project info  -->
    <div class="grid grid-cols-3 gap-x-6 mx-auto relative">
      <section class="col-span-2 space-y-6 w-full">
        <div class="w-full py-5 px-5 bg-white rounded-lg box-shadow space-y-4">
          <div class="flex justify-between items-center">
            <TypoHeaderText :size="'3xl'" :customClass="'!font-normal'">
              {{ project?.title }}
            </TypoHeaderText>
          </div>

          <div class="flex items-center flex-row space-x-5 text-sm">
            <TypoNormalText
              v-if="project.type"
              :customClass="`px-4 py-1 capitalize rounded-[5px] ${
                project.type == 'challenge'
                  ? 'bg-bouhaws-purple'
                  : 'bg-bouhaws-orange'
              }`"
              :color="'text-white'"
            >
              {{ project.type }}
            </TypoNormalText>

            <span class="flex items-center space-x-2">
              <Avatar :photoUrl="project.user.photo_url" :size="'20'"></Avatar>
              <TypoNormalText :customClass="'!font-normal'">
                {{ project.user.name }}
              </TypoNormalText>
            </span>

            <TypoNormalText>
              {{ project.dataPosted }}
            </TypoNormalText>

            <TypoNormalText :color="'text-[#FF3333]'">
              {{ project.deadline }}
            </TypoNormalText>
          </div>

          <TypoNormalText :customClass="'!text-left !leading-relaxed'">
            {{ project.description }}
          </TypoNormalText>
          
          <div
            class="w-full flex flex-row no-scrollbar space-x-3 flex-nowrap overflow-x-auto scrollbar-hide"
          >
            <div class="flex flex-row space-x-3 py-2 pr-4">
              <ImageLoader
                v-for="image in images"
                :key="image"
                :photoUrl="image.url"
                :customClass="'h-[10rem] w-[10rem] rounded-[7px] relative'"
              > 
              </ImageLoader>
            </div>
          </div>
        </div>

        <div
          class="w-full py-5 px-5 bg-white rounded-[10px] box-shadow space-y-3"
        >
          <TypoHeaderText :size="'3xl'" :customClass="'!font-normal'">
            Requirements
          </TypoHeaderText>

          <div class="flex flex-col space-y-1 text-sm">
            <div
              v-for="requirement in requirements"
              :key="requirement.title"
              class="flex space-x-3 items-center font-light py-1 px-2"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-bouhaws-dark"></span>
              <TypoNormalText>
                {{ requirement.title }}
              </TypoNormalText>
            </div>
          </div>
        </div>

        <div
          class="w-full py-5 px-5 bg-white rounded-[10px] box-shadow space-y-3"
        >
          <TypoHeaderText :size="'3xl'" :customClass="'!font-normal'">
            Entries ({{ exhibitions.length }})
          </TypoHeaderText>

          <div class="grid grid-cols-3 gap-3">
            <CardImgUser
              v-for="(exhibition, index) in exhibitions"
              :key="index"
              :item="exhibition"
            />
          </div>
        </div>
      </section>

      <!-- section 2 -->
      <section class="col-span-1 w-full space-y-5 relative">
        <form
          @submit.prevent="uploadForm"
          class="rounded-[10px] box-shadow bg-white px-5 py-5 flex flex-col space-y-3 sticky top-0"
        >
          <TypoHeaderText :size="'3xl'" :customClass="'!font-normal'">
            Submit entry
          </TypoHeaderText>

          <div class="py-2 space-y-2.5 border-b-2 border-[#EBEBE5]">
            <div>
              <label for="title" class="font-light"> Title </label>
              <input
                type="text"
                id="title"
                class="border-0 w-full placeholder:text-bouhaws-dark placeholder:text-sm placeholder:font-extralight font-light py-2 px-0.5 text-sm border-b border-[#EBEBE5] outline-none"
                placeholder="Name your entry"
                v-model="payload.title"
              />
            </div>

            <div>
              <label for="description" class="font-light"> Description </label>

              <textarea
                id="description"
                v-model="payload.description"
                class="border-0 resize-none w-full placeholder:text-bouhaws-dark no-scrollbar placeholder:text-sm placeholder:font-extralight overflow-auto font-light py-2 px-0.5 text-sm outline-none"
                placeholder="Give a short description"
                rows="2"
              ></textarea>
            </div>
          </div>

          <div class="w-full flex flex-col space-y-2">
            <TypoHeaderText :customClass="'!font-normal'">
              Milestone 1
            </TypoHeaderText>

            <div
              class="w-full flex flex-row no-scrollbar space-x-3 flex-nowrap overflow-x-auto scrollbar-hide"
            >
              <div class="flex flex-row space-x-3 py-2 pr-4">
                <ImageLoader
                  v-for="x in 4"
                  :key="x"
                  :photoUrl="'/images/add-image.png'"
                  :customClass="'h-[90px] w-[90px] rounded-[7px] relative'"
                >
                  <span class="absolute top-0 right-0 cursor-pointer">
                    <IconLoader
                      :name="'remove-image'"
                      :customClass="'h-[25px]'"
                    />
                  </span>
                </ImageLoader>
              </div>
            </div>

            <div
              class="flex items-center cursor-pointer w-auto text-sm space-x-1.5 font-light"
            >
              <span class="p-1 bg-bouhaws-blue-main text-white rounded-md">
                <IconAdd :width="14" :height="14" />
              </span>

              <TypoNormalText> Add entry</TypoNormalText>
            </div>
          </div>

          <div class="w-full flex flex-col space-y-4 pt-3">
            <TypoHeaderText :customClass="'!font-normal'">
              Milestone 1
            </TypoHeaderText>

            <div
              class="flex items-center cursor-pointer w-auto text-sm space-x-1.5 font-light mt-3"
            >
              <span class="p-1 bg-bouhaws-blue-main text-white rounded-md">
                <IconAdd :width="14" :height="14" />
              </span>

              <span> Add entry </span>
            </div>
          </div>

          <div class="w-full pt-4 flex flex-col">
            <Button
              type="submit"
              text="Submit"
              customClass="!bg-bouhaws-blue-main text-white w-full"
              :useSlot="true"
              :padding="'py-3'"
            >
              <TypoNormalText
                :custom-class="'!font-normal'"
                :color="'text-white'"
                >Submit</TypoNormalText
              >
            </Button>
          </div>
        </form>
      </section>
    </div>

    <div class="h-[100px]"></div>
  </div>
  </milestone-dashboard-layout>
</template>

<script lang="ts"> 
import { defineComponent, onMounted, ref, watch } from "vue";
import { useMeta } from "vue-meta";
import { useRouter } from "vue-router";
import CardImgUser from "@/components/Card/ImgUser.vue"
import IconLoader from "@/components/IconLoader/index.vue"
import ImageLoader from "@/components/ImageLoader/index.vue"
import TypoNormalText from "@/components/Typo/NormalText.vue"
import TypoHeaderText from "@/components/Typo/HeaderText.vue"
import Button from "@/components/Button/index.vue";
import Avatar from "@/components/Avatar/index.vue";


export default defineComponent({
  components: {
    IconLoader,
    TypoHeaderText,
    TypoNormalText, 
    Button,
    Avatar,
    ImageLoader,
    CardImgUser
  }, 

  middlewares: {
    fetchRules: [],
  },
  name: "ProjectsDetailsPage",
  setup() {
    useMeta({
      title: "Home",
    });

    const router = useRouter();
    const project = ref({
      id: "1",
      title: `Mother’s Day`,
      type: "challenge",
      user: {
        name: "Brand",
        photo_url: "/images/avatar-3.png",
      },
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
      dataPosted: `Posted 2 hours ago`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      milestone: 2,
      memberOfTeam: 4,
      deadline: `Deadline in 15 days`,
      completed: true,
    });

    const showProjectDetailsModal = ref(false);

    const requirements = ref([
      { title: "Project entries must be less than 5MB." },
      { title: "Images resolution should be at least 150 pixels." },
    ]);
 
    const images = ref([ 
      { url: `/images/entry-1.png` },
      { url: `/images/entry-8.png` },
      { url: `/images/entry-5.png` },
      { url: `/images/entry-8.png` },
      { url: `/images/entry-6.png` },
      { url: `/images/entry-4.png` }, 
      { url: `/images/entry-3.png` }, 
    ]);

    const payload = ref({
      title: "",
      description: "",
    });

    const uploadForm = () => {
      console.log(payload.value);
    };

    const exhibitions = ref([
      {
        id: "1",
        user: {
          name: "Student",
          photo_url: "/images/avatar-1.png",
        },
        image_url: `/images/entry-1.png`,
      },
      {
        id: "2",
        user: {
          name: "Student",
          photo_url: "/images/avatar-2.png",
        },
        image_url: `/images/entry-2.png`,
      },
      {
        id: "3",
        user: {
          name: "Student",
          photo_url: "/images/avatar-3.png",
        },
        image_url: `/images/entry-3.png`,
      },
      {
        id: "4",
        user: {
          name: "Student",
          photo_url: "/images/avatar-4.png",
        },
        image_url: `/images/entry-4.png`,
      },
      {
        id: "5",
        user: {
          name: "Student",
          photo_url: "/images/avatar-5.png",
        },
        image_url: `/images/entry-5.png`,
      },
      {
        id: "6",
        user: {
          name: "Student",
          photo_url: "/images/avatar-1.png",
        },
        image_url: `/images/entry-6.png`,
      },
      {
        id: "7",
        user: {
          name: "Student",
          photo_url: "/images/avatar-2.png",
        },
        image_url: `/images/entry-7.png`,
      },
      {
        id: "8",
        user: {
          name: "Student",
          photo_url: "/images/avatar-3.png",
        },
        image_url: `/images/entry-8.png`,
      },
    ]);

    return {router, project, showProjectDetailsModal,
    requirements, images, payload, uploadForm, exhibitions };
  },
});
// definePageMeta({ layout: "milestone-dashboard" }); 

</script>