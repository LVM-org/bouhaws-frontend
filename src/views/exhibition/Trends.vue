<template>
  <div class="container  py-5 px-2"> 
    <div class="flex flex-col items-center mb-6 justify-center p-6 space-y-5 rounded-2xl bg-bouhaws-blue-main">
      <h4 class="text-white text-3xl">
       Explore projects by students in the community
      </h4>

      <div class="w-2/5 mx-auto text-[#61656D] flex items-center space-x-4 px-5 bg-white rounded-xl">
        <IconSearch />

        <input type="search" placeholder="Search" class="flex-1 w-full text-sm py-3 bg-transparent outline-none" />
      </div>
    </div>

    <div class="flex items-center my-8 space-x-4 justify-between "> 
      <div class="flex   space-x-3 items-center justify-between ">
        <span v-for="filterOption in filterOptions" class="px-4 py-2 btn-box-shadow text-sm cursor-pointer   text-[#61656D] rounded-lg font-light"
          :class="activeOption == filterOption.title ? 'bg-bouhaws-semi-dark text-white ' : 'bg-white'"
          @click="activeOption = filterOption.title"
        >
          {{filterOption.title}}
        </span>
      </div>

      <div class="flex   items-center justify-between bg-white rounded-lg">
        <span v-for="filterType in filterTypes" class="px-4 py-2 text-sm cursor-pointer   text-[#61656D] rounded-lg font-light"
          :class="activeType == filterType.title ? 'bg-bouhaws-semi-dark text-white  btn-box-shadow' : 'bg-transparent'"
          @click="activeType = filterType.title"
        >
          {{filterType.title}}
        </span>
      </div>
    </div>
    
    
    <div>
      <div class="mb-6">
        <div class="grid grid-cols-3  gap-6">
          <!-- <CardExhibitionTypeA
            v-for="exhibition in 3"
            :key="exhibition"
            :exhibition="exhibition" 
          /> -->
        </div>
      </div>
      
      <div>
        <h4 class="my-4 text-2xl">
       Explore projects by students in the community
      </h4>
        
        <div class="grid grid-cols-4 gap-6">
          <CardExhibitionTypeA
            v-for="exhibition in exhibitions"
            :key="exhibition"
            :exhibition="exhibition"
            :hasSection="true"
          />
        </div>
      </div>
    </div>

    
      <template>
        <div>
          <div
            class="grid grid-cols-3 gap-6 items-start text-[#0E1011] p-2 w-5/6 mx-auto"
          >
            <section class="w-full col-span-1 h-full">
              <img src="/images/art.svg" class="!h-fit !w-full" />
            </section>

            <section class="col-span-2 w-full space-y-5">
              <div class="w-full py-3 px-4 bg-white rounded-lg box-shadow space-y-3">
                <h4 class="flex items-center text-2xl space-x-3">
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

              <div class="w-full py-3 px-4 bg-white rounded-lg box-shadow space-y-3">
                <h5 class="text-2xl">Comments</h5>

                <div class="flex items-center space-x-3">
                  <img
                    src="/images/profile-picture.svg"
                    class="!h-7 !w-7 rounded-full"
                  />

                  <input
                    id="Comments"
                    class="border-0 resize-none w-3/4 bg-transparent border-b border-[#EBEBE5] placeholder:text-bouhaws-dark no-scrollbar placeholder:text-sm placeholder:font-extralight overflow-auto font-light mt-1 py-1.5 px-2 text-sm outline-none"
                    placeholder="Add a comment..."
                  />
                </div>

                <div class="max-h-[16rem] mt-4 py-2 space-y-6">
                  <!-- <CardComment
                    v-for="comment in comments"
                    :key="comment.id"
                    :comment="comment"
                  /> -->
                </div>
              </div>
            </section>
          </div>

          <div class="mt-8 space-y-4 w-full">
            <h5 class="text-2xl text-center">More like this</h5>

            <div
              class="w-full flex flex-row space-x-3 flex-nowrap overflow-x-auto no-scrollbar"
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
        </div>
      </template>  
  </div>
</template>

<script lang="ts"> 
import { defineComponent, onMounted, ref, watch } from "vue";
import { useMeta } from "vue-meta"; 
import CardExhibition from "@/components/Card/Exhibition.vue"
import CardExhibitionTypeA from "@/components/Card/ExhibitionTypeA.vue"
import CardComment from "@/components/Card/Comment.vue" 

export default defineComponent({
  components: { 
    CardExhibition, 
    CardExhibitionTypeA,
    CardComment, 
  },  
  name: "ExhibitionTrendsPage",
  setup() {
    useMeta({
      title: "Home",
    });

    const activeOption = ref("all") 
    const activeType = ref("popular") 
    const filterOptions =  ref([
      {title: 'all'},
      {title: 'class'},
      {title: 'challenge'},
      {title: 'active'},
      {title: 'completed'},
    ]) 
    const filterTypes =  ref([
      {title: 'popular'},
      {title: 'recent'}, 
    ]) 
    const exhibitions = ref([
      {
        id: "1",
        username: `ArchyScript`,
        profilePicture: ``,
        artWork: ``
      },
      {
        id: "2",
        username: `ArchyScript`,
        profilePicture: ``,
        artWork: ``
      },
      {
        id: "3",
        username: `ArchyScript`,
        profilePicture: ``,
        artWork: ``
      },
      {
        id: "4",
        username: `ArchyScript`,
        profilePicture: ``,
        artWork: ``
      },
      {
        id: "5",
        username: `ArchyScript`,
        profilePicture: ``,
        artWork: ``
      },
      {
        id: "6",
        username: `ArchyScript`,
        profilePicture: ``,
        artWork: ``
      },
      {
        id: "7",
        username: `ArchyScript`,
        profilePicture: ``,
        artWork: ``
      },
      {
        id: "8",
        username: `ArchyScript`,
        profilePicture: ``,
        artWork: ``
      },
      {
        id: "9",
        username: `ArchyScript`,
        profilePicture: ``,
        artWork: ``
      },
      {
        id: "10",
        username: `ArchyScript`,
        profilePicture: ``,
        artWork: ``
      },
      {
        id: "11",
        username: `ArchyScript`,
        profilePicture: ``,
        artWork: ``
      },
      {
        id: "12",
        username: `ArchyScript`,
        profilePicture: ``,
        artWork: ``
      },
    ])

    return { activeOption, activeType, filterOptions, filterTypes, exhibitions, };
  },
}); 
</script>
 
 <style>
  .btn-box-shadow {
    box-shadow: 0px 10px 34px rgba(0, 0, 0, 0.15);
  }
 </style>