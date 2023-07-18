<template>
  <div class="container mx-auto grid grid-cols-4 gap-6 px-2 relative">
    <!-- left side  -->
    <section class="col-span-1 h-fit pb-5  pt-5 sticky top-[5rem]"> 
      <div
        class="h-full flex p-5 rounded-lg flex-col space-y-4 p-4  overflow-y-auto bg-[#202128] relative"
      > 
        <TypoHeaderText :size="'3xl'" :customClass="'!font-normal !text-white'">
          Milestones
        </TypoHeaderText> 

        <div class="py-4 space-y-4"> 
          <div class="  space-y-3 p-3 bg-[#0E1011] cursor-pointer rounded-lg ">  
            <TypoHeaderText :size="'lg'" :customClass="'!font-light !text-white'"> 
              Enter title
            </TypoHeaderText> 

             <div class="bg-white rounded-[10px] w-full shadow-custom p-1">
              <FormSelect
                :placeholder="'Select points to allocate'"
                :custom-class="'w-full space-x-2'"
                :padding="'py-4 px-4'"
              >
              </FormSelect>
            </div>
          </div>

          <div class="flex items-center space-x-2 p-3 bg-[#0E1011] cursor-pointer rounded-lg "> 
            <IconLoader
              :name="'add-square-dark'"
              :customClass="'h-[28px]  cursor-pointer'" 
            /> 

            <TypoHeaderText :size="'lg'" :customClass="'!font-light !text-white'"> 
              Add milestone
            </TypoHeaderText> 
          </div>
        </div>
      </div> 
    </section>

    <!-- main content -->
    <section class="col-span-2  sticky top-[5rem] py-5 space-y-6 w-full">
      <div class="w-full p-6 bg-white rounded-lg box-shadow space-y-4"> 
        <TypoHeaderText :size="'3xl'" :customClass="'!font-normal'">
          Project details
        </TypoHeaderText> 
  
        <div class="space-y-4">
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

          <div class="py-2 space-y-2.5">
            <label for="description" class="font-light"> Description </label>

            <textarea
              id="description"
              v-model="payload.description"
              class="border-0 resize-none w-full py-1 space-y-2.5 border-b-2 border-[#EBEBE5] placeholder:text-bouhaws-dark no-scrollbar placeholder:text-sm placeholder:font-extralight overflow-auto font-light py-2 px-0.5 text-sm outline-none"
              placeholder="Give a short description"
              rows="2"
            ></textarea>
          </div>

          <div class="flex  space-x-2 items-center "> 
            <IconLoader
              :name="'add-square'"
              :customClass="'h-[22px] cursor-pointer'" 
            /> 

            <TypoNormalText :size="'base'" :customClass="'!font-normal'"> 
              Add image (reference, inspiration, e.t.c)
            </TypoNormalText> 
          </div>

          <div class="space-y-2">
            <TypoHeaderText :size="'2xl'" :customClass="'!font-normal'"> 
                Deadline
              </TypoHeaderText>
            
            <div class=" flex items-center  space-x-4 "> 
              <div class="bg-[#EBEBE5] rounded-[10px] flex-1 w-full shadow-custom p-1">
                  <FormSelect
                    :placeholder="'Select points to allocate'"
                    :custom-class="'w-full space-x-2'"
                    :padding="'py-4 px-4'"
                  >
                  </FormSelect>
                </div>
 
                <div class="rounded-[10px]  bg-[#EBEBE5] flex-1 w-full shadow-custom p-1">
                    <FormSelect
                      :placeholder="'Select points to allocate'"
                      :custom-class="'w-full space-x-2 bg-[#EBEBE5] !text-black'"
                      :padding="'py-4 px-4'"
                    >
                    </FormSelect>
                  </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="w-full p-6 bg-white rounded-[10px] box-shadow space-y-4"
      >
        <TypoHeaderText :size="'3xl'" :customClass="'!font-normal'">
          Requirements
        </TypoHeaderText>
 
        <div class="flex  space-x-2 items-center "> 
          <IconLoader
            :name="'add-square'"
            :customClass="'h-[22px] cursor-pointer'" 
          /> 

          <TypoNormalText :size="'base'" :customClass="'!font-normal'"> 
           Add requirements
          </TypoNormalText> 
        </div>
      </div> 

      <div class="h-[100px]"></div>
    </section> 

   <!-- right side  -->
   <section class="col-span-1 h-fit pb-5  pt-5 sticky top-[5rem]"> 
      <div
        class="h-full flex p-5 rounded-lg flex-col space-y-5 p-4  overflow-y-auto bg-white relative"
      > 
        <TypoHeaderText :size="'3xl'" :customClass="'!font-normal'">
          Project type
        </TypoHeaderText>  

        <div class="flex items-center flex-row ">
          <Tabs
            :tabs="filterOptions"
            :activeTab="activeOption"
              @selectTab="(option) => { activeOption = option }"
            :is-spaced="false"
          />
        </div>
 
        <div>
          <div v-if="activeOption == 'class'">
            <div class="bg-white rounded-[10px] w-full shadow-custom p-2">
              <FormSelect
                :placeholder="'All project types'"
                :custom-class="'w-full space-x-2'"
                :padding="'py-4 px-4'"
              >
              </FormSelect>
            </div>
          </div>

          <div class="space-y-3 p-2"  v-if="activeOption == 'challenge'">
            <TypoHeaderText :size="'xl'" :customClass="'!font-normal'"> 
              Prize
            </TypoHeaderText>
              
            <div class="flex justify-between items-center "> 
              <IconLoader
                :name="'minus-square'"
                :customClass="'h-[28px]  cursor-pointer'"
                @click="challengePrize--"
              /> 

              <TypoHeaderText :size="'2xl'" :customClass="'!font-normal'"> 
                {{challengePrize}} $
              </TypoHeaderText>
  
              <IconLoader
                :name="'add-square'"
                :customClass="'h-[28px] cursor-pointer'"
                @click="challengePrize++"
              /> 
            </div>
          </div>
        </div>
      </div> 
    </section>
  </div>
</template>

<script lang="ts">  
import { defineComponent, onMounted, ref, watch } from "vue";
import { useMeta } from "vue-meta";
import IconLoader from "@/components/IconLoader/index.vue"
import ImageLoader from "@/components/ImageLoader/index.vue"
import TypoNormalText from "@/components/Typo/NormalText.vue"
import TypoHeaderText from "@/components/Typo/HeaderText.vue"
import Button from "@/components/Button/index.vue";
import Avatar from "@/components/Avatar/index.vue";
import Tabs from "@/components/Tabs/index.vue"; 
import FormSelect from "@/components/Form/Select.vue"; 

export default defineComponent({
  components: {
    IconLoader,
    TypoHeaderText,
    TypoNormalText, 
    Button,
    Avatar,
    ImageLoader,
    Tabs,
    FormSelect
  }, 
  name: "TeacherCreateProjectPage",
  setup() {
    useMeta({
      title: "Register",
    });

    const challengePrize = ref(10)
    const activeOption = ref("class");
    const filterOptions = ref([
      { title: "class" },
      { title: "challenge" }, 
    ]);

    const activeItems = ref([
      {
        title: "Mother’s Day",
        total_point: 2000,
        current_point: 500,
        image_url: "/images/mothers-day.png",
      },
      {
        title: "International Women’s Day",
        total_point: 2500,
        current_point: 1500,
        image_url: "/images/international-womens-day.png",
      },
      {
        title: "Project Title",
        total_point: 2500,
        current_point: 1500,
        image_url: "/images/project-title.png",
      },
      {
        title: "Victory Day",
        total_point: 1000,
        current_point: 0,
        image_url: "/images/victory-day.png",
      },
      {
        title: "Project Title",
        total_point: 2500,
        current_point: 2500,
        image_url: "/images/project-title-2.png",
      },
    ]);
    const payload = ref({
      title: "",
      description: "",
    });

    const images = ref([ 
      { url: `/images/entry-1.png` },
      { url: `/images/entry-8.png` },
      { url: `/images/entry-5.png` },
      { url: `/images/entry-8.png` },
      { url: `/images/entry-6.png` },
      { url: `/images/entry-4.png` }, 
      { url: `/images/entry-3.png` }, 
    ]);

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
        giftPrice: 900, 
    });

    const requirements = ref([
      { title: "Project entries must be less than 5MB." },
      { title: "Images resolution should be at least 150 pixels." },
      { title: "Images resolution should be at least 150 pixels." },
    ]);

    const entries = ref([
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

    return {challengePrize, activeOption, entries, filterOptions,project,payload,images,requirements,  activeItems};
  },
});

</script>
