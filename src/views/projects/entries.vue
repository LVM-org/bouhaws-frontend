<template>
  <milestone-dashboard-layout>
  <div>  
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
 
      <section class="col-span-1 w-full space-y-4 ">
        <form
          @submit.prevent="uploadForm"
          class="rounded-[10px] box-shadow bg-white justify-center items-center p-5 flex flex-col space-y-3 sticky top-0"
        > 
          <IconLoader name="angular-piano" customClass="h-[100px]"/> 

          <TypoHeaderText :size="'base'" :customClass="'!font-normal'">
            Submit entry
          </TypoHeaderText>  

          <div class="w-full pt-8 flex flex-col">
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
              > 
                Edit
              </TypoNormalText>
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
  name: "ProjectEntriesPage",
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

    return {exhibitions,uploadForm,payload,images,requirements,showProjectDetailsModal,project, router};
  },
});
// definePageMeta({ layout: "milestone-milestone-dashboard" }); 

</script>