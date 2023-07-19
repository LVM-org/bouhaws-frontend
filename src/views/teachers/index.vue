<template>
  <subpage-layout>
  <div class="container mx-auto grid grid-cols-3 gap-6 px-2 relative">
    <!-- main content -->
    <section class="col-span-2 space-y-5  pt-6 sticky top-[5rem]"> 
      <!-- My projects  -->
      <div
        class="rounded-[10px] px-6 py-6 bg-white flex flex-col space-y-3 shadow-custom"
      >
        <div class="w-full flex flex-row justify-between items-center">
          <TypoHeaderText :custom-class="'!font-normal'" :size="'3xl'">
            Projects
          </TypoHeaderText>

          <TypoHeaderText :custom-class="`!font-light text-[#1A52E4] `" :size="'lg'">
            view all
          </TypoHeaderText>
        </div>
 
        <div class="grid grid-cols-3 gap-4 "> 
            <router-link
                v-for="(project, index) in projects" :key="index"
                :to="`/projects/${project?.id}`"
                :class="`relative box-shadow   h-[200px] rounded-b-[10px] flex flex-col`"
            >
                <ImageLoader
                    :photoUrl="project?.image_url"
                    :customClass="`w-full h-full rounded-[10px]
                    flex flex-col justify-between item-start relative`"
                >
                <div :class="`absolute bottom-0 left-0 w-full px-4 py-4 bg-gradient-to-t from-black flex flex-col space-y-1 rounded-[10px]`">
                    <TypoNormalText :custom-class="`!font-normal !text-white !text-base`">
                        {{ project?.title }}
                    </TypoNormalText>
                    
                    <div class="flex items-center space-x-2">
                        <TypoNormalText :custom-class="`!font-light !text-white`">
                            Deadline
                        </TypoNormalText> 
                            
                        <TypoNormalText :custom-class="`!text-white`">
                            {{ project?.deadline }}
                        </TypoNormalText> 
                    </div>
                    
                    <div class="flex items-center space-x-1">
                        <TypoNormalText :custom-class="`!text-white`">
                            {{ project?.entries }}
                        </TypoNormalText> 
                        
                        <TypoNormalText :custom-class="`!font-light !text-white`">
                            entries
                        </TypoNormalText>  
                    </div>
                </div>
                </ImageLoader> 
            </router-link>
        </div> 
      </div> 

    <!-- classes  -->
      <div
        class="rounded-[10px] px-6 py-6 bg-white flex flex-col space-y-3 shadow-custom"
      >
        <div class="w-full flex flex-row justify-between items-center">
          <TypoHeaderText :custom-class="'!font-normal'" :size="'3xl'">
            Classes
          </TypoHeaderText>

          <TypoHeaderText :custom-class="`!font-light text-[#1A52E4] `" :size="'lg'">
            view all
          </TypoHeaderText>
        </div>

        <div class="grid grid-cols-3 gap-4 ">  
            <div v-for="(index) in 6" :key="index"  :class="`w-full  rounded-[10px] p-4 !bg-[#DBE7FF] flex flex-col space-y-2`"> 
                <TypoNormalText :custom-class="`!font-normal  !text-lg`">
                    Class name
                </TypoNormalText>
                
                <div class="flex items-center space-x-2">
                    <IconLoader :name="'students-black'" :custom-class="'h-[17px]'" /> 
                        
                    <TypoNormalText :custom-class="`!font-light`">
                        34 students
                    </TypoNormalText> 
                </div> 
                
                <div class="flex items-center space-x-2">
                    <IconLoader :name="'project-black'" :custom-class="'h-[18px]'" /> 
                        
                    <TypoNormalText :custom-class="``">
                        4 projects
                    </TypoNormalText> 
                </div> 
            </div>  
        </div> 
        </div> 

      <div class="h-[100px]"></div>
    </section>

    <!-- right side  -->
    <section class="col-span-1 h-fit pb-5 pt-6 sticky top-[5rem]">
          <!--  Chat list section -->
      <div
        class="col-span-2 h-full bg-white shadow-custom rounded-[10px] relative flex flex-col"
      >
        <div
          class="h-full flex flex-col space-y-2 pb-4 overflow-y-auto relative"
        >
          <div
            class="px-4 pt-4 pb-3 bg-white top-0 sticky w-full flex flex-row items-center rounded-t-[10px] border-b-[1px] border-[#EBEBE5]"
          >
            <TypoHeaderText :size="'3xl'" :customClass="'!font-normal'">
              Messages
            </TypoHeaderText>
          </div>

          <div
            :class="`px-4 w-full py-3 hover:bg-[#DBE7FF] flex flex-row items-center justify-between cursor-pointer ${
              convo.id == selectedConvo.id ? 'bg-[#DBE7FF]' : 'bg-white'
            }`"
            v-for="(convo, index) in conversationList"
            :key="index"
          >
            <div class="flex flex-row items-center space-x-2">
              <div class="w-[48px]">
                <Avatar :photoUrl="convo.user.photo_url" :size="'48'"></Avatar>
              </div>
              <div class="flex flex-col space-y-1">
                <TypoNormalText
                  :customClass="'!font-normal !text-left !line-clamp-1'"
                >
                  {{ convo.user.name }}
                </TypoNormalText>
                <TypoNormalText :customClass="'!text-left !line-clamp-1'">
                  {{ convo.last_messsage }}
                </TypoNormalText>
              </div>
            </div>

            <div
              class="h-full flex flex-col justify-between items-end min-w-[50px]"
            >
              <TypoNormalText :customClass="'!text-xs '">
                {{ convo.time }}
              </TypoNormalText>
              <span
                :class="`h-[22px] w-[22px] rounded-full bg-bouhaws-purple flex items-center justify-center ${
                  convo.unread > 0 ? '' : '!invisible'
                }`"
              >
                <TypoNormalText :color="'text-white !text-xs !font-normal'">
                  {{ convo.unread }}
                </TypoNormalText>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section> 
  </div>
  </subpage-layout>
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

export default defineComponent({ 
  components: {
    IconLoader,
    TypoHeaderText,
    TypoNormalText, 
    Button,
    Avatar,
    ImageLoader,
  }, 
  name: "TeachersHomePage",
  setup() {
    useMeta({
      title: "Teachers Home",
    });

    const projects = ref([
      {
        id: "1",
        title: "Project Title",
        deadline: "23/03/2023",
        entries: 4,
        image_url: "/images/gallery-project-1.png",
      },
      {
        id: "1",
        title: "Mother’s Day",
        deadline: "23/03/2023",
        entries: 5,
        image_url: "/images/event-gallery.png",
      },
      {
        id: "1",
        title: "Mother’s Day",
        deadline: "23/03/2023",
        entries: 5,
        image_url: "/images/gallery-project-3.png",
      },
      {
        id: "1",
        title: "International Women’s Day",
        deadline: "23/03/2023",
        entries: 4,
        image_url: "/images/gallery-project-3.png",
      }, 
      {
        id: "1",
        title: "Victory Day",
        deadline: "23/03/2023",
        entries: 4,
        image_url: "/images/gallery-project-1.png",
      },
      {
        id: "1",
        title: "Project Title",
        deadline: "23/03/2023",
        entries: 5,
        image_url: "/images/gallery-project-2.png",
      },
    ]);
   
    const conversationList = ref([
      {
        id: 1,
        user: {
          name: "Username",
          photo_url: "/images/chat-1.png",
        },
        last_messsage: "Awesome work so far ",
        time: "7:33 pm",
        unread: 1,
      },
      {
        id: 2,
        user: {
          name: "Username",
          photo_url: "/images/chat-2.png",
        },
        last_messsage: "I’ll check the rest out and give you more feedback",
        time: "9:03 am",
        unread: 0,
      },
      {
        id: 3,
        user: {
          name: "Username",
          photo_url: "/images/chat-3.png",
        },
        last_messsage: "Great work!",
        time: "4:13 pm",
        unread: 0,
      },
      {
        id: 4,
        user: {
          name: "Username",
          photo_url: "/images/chat-4.png",
        },
        last_messsage: "I think maybe you can change the way the",
        time: "3:25 pm",
        unread: 0,
      },
      {
        id: 5,
        user: {
          name: "Username",
          photo_url: "/images/chat-5.png",
        },
        last_messsage: "Ahh I see what you were talking about",
        time: "10:12 am",
        unread: 0,
      },
      {
        id: 5,
        user: {
          name: "Username",
          photo_url: "/images/chat-6.png",
        },
        last_messsage: "Thank you",
        time: "12:39 pm",
        unread: 0,
      },
    ]);

    const selectedConvo = ref({
      id: 2,
      user: {
        name: "Username",
        photo_url: "/images/chat-2.png",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      },
      last_messsage: "I’ll check the rest out and give you more feedback",
      time: "9:03 am",
      last_active: "Last active 3mins ago",
      unread: 0,
    });
 
    return { projects, selectedConvo, conversationList };
  },
});
// definePageMeta({  layout: "sub-page" }); 

</script>
