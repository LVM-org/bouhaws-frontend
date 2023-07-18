<template>
  <div
    class="fixed lg:!top-[10%] mdlg:!top-[12%] left-0 !w-screen lg:!h-[90%] mdlg:!h-[88%] overflow-hidden pb-4 flex flex-col justify-center items-center"
  >
    <div class="h-[95%] grid grid-cols-9 gap-4 lg:!w-[90%] mdlg:!w-[96%]">
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

      <!-- Chat content section -->
      <div
        class="col-span-5 h-full bg-white shadow-custom rounded-[10px] relative"
      > 
        <div
          class="px-4 pt-4 pb-3 bg-white top-0 sticky w-full justify-between flex flex-row space-x-3 items-center rounded-t-[10px] border-b-[1px] border-[#EBEBE5]"
        >
          <div class="flex flex-row space-x-3 items-center">
            <Avatar
              :photoUrl="selectedConvo.user.photo_url"
              :size="'48'"
            ></Avatar>

            <div class="flex flex-col">
              <TypoNormalText
                :customClass="'!font-normal !text-left !text-base !line-clamp-1'"
              >
                {{ selectedConvo.user.name }}
              </TypoNormalText>
              <TypoNormalText :customClass="'!text-left !line-clamp-1'">
                {{ selectedConvo.last_active }}
              </TypoNormalText>
            </div>
          </div>

          <div class="pr-2">
            <IconLoader :name="'search'" :customClass="'h-[20px]'" />
          </div>
        </div>
 
        <div class="h-full w-full px-5 py-5 flex flex-col space-y-3">
          <div
            :class="`w-full flex flex-row ${
              message.isOwner ? 'justify-end' : 'justify-start'
            } `"
            v-for="(message, index) in messages"
            :key="index"
          >
            <div
              :class="`min-w-[170px] max-w-[50%] w-auto px-3 py-3 flex flex-col space-y-2 ${
                message.isOwner ? 'bg-[#DBE7FF]' : 'bg-[#E6D6FF]'
              } `"
              style="border-radius: 0px 10px 10px 10px"
            >
              <template v-if="message.type == 'image'">
                <ImageLoader
                  :photoUrl="message.media?.url || ''"
                  :customClass="'h-[250px] w-[280px] rounded-[5px]'"
                />
              </template>

              <div
                class="w-full flex flex-row items-end space-x-2 justify-between"
              >
                <TypoNormalText :customClass="'!text-left '">
                  {{ message.content }}
                </TypoNormalText>

                <TypoNormalText :customClass="'!text-xs'">
                  {{ message.time }}
                </TypoNormalText>
              </div>
            </div>
          </div>
        </div>
 
        <div
          class="px-4 py-4 bg-white bottom-0 absolute left-0 w-full justify-between flex flex-row space-x-3 items-center rounded-b-[10px] border-t-[1px] border-[#EBEBE5]"
        >
          <div class="w-[35px]">
            <IconLoader :name="'chat-add-image'" :customClass="'h-[23px]'" />
          </div>
          <div class="flex flex-row space-x-3 items-center w-full">
            <span
              :contenteditable="true"
              role="textbox"
              :class="`w-full textarea !font-light resize-none !min-h-[48px] text-bodyBlack whitespace-pre-wrap focus:outline-none !max-h-[80px] overflow-x-hidden bg-transparent rounded-[8px] py-3 px-3 items-start text-left overflow-y-auto`"
              placeholder="Enter message here"
              id="messageContainer"
            >
            </span>
          </div>

          <div class="w-[35px]">
            <IconLoader :name="'chat-send'" :customClass="'h-[23px]'" />
          </div>
        </div>
      </div>

      <!-- Chat details -->
      <div class="col-span-2 h-full bg-white shadow-custom rounded-[10px]">
        <div
          class="h-full flex flex-col space-y-2 pb-4 overflow-y-auto relative"
        >
          <div
            class="px-4 pt-4 pb-3 bg-white top-0 sticky w-full flex flex-row items-center rounded-t-[10px] border-b-[1px] border-[#EBEBE5]"
          >
            <TypoHeaderText :size="'3xl'" :customClass="'!font-normal'">
              Details
            </TypoHeaderText>
          </div>

          <div
            class="w-full flex flex-col space-y-3 items-center justify-center px-4 py-4"
          >
            <Avatar :photoUrl="'/images/chat-details.png'" :size="'180'" />

            <TypoHeaderText :customClass="'!font-normal'" :size="'2xl'">
              {{ selectedConvo.user.name }}
            </TypoHeaderText>

            <TypoNormalText :customClass="'!leading-relaxed text-center'">
              {{ selectedConvo.user.bio }}
            </TypoNormalText>
          </div>

          <div
            class="w-full flex flex-col space-y-3 items-center justify-center px-4 py-4 border-t-[1px] border-b-[1px] border-[#EBEBE5]"
          >
            <div class="w-full flex flex-row items-center justify-between">
              <TypoNormalText :customClass="'!font-normal'">
                Photos
              </TypoNormalText>
              <IconLoader :name="'arrow-back'" :customClass="'h-[17px]'" />
            </div>

            <div
              class="w-full flex flex-row space-x-3 flex-nowrap overflow-x-auto scrollbar-hide"
            >
              <div class="flex flex-row space-x-3 py-2 pr-4">
                <ImageLoader
                  :customClass="`flex flex-col w-[80px] h-[80px]`"
                  v-for="(photo, index) in chatPhotos"
                  :key="index"
                  :photoUrl="photo"
                >
                </ImageLoader>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
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

export default defineComponent({
  components: {
    IconLoader,
    TypoHeaderText,
    TypoNormalText, 
    Button,
    Avatar,
    ImageLoader,
  }, 
  middlewares: {
    fetchRules: [],
  },
  name: "MessagesPage",
  setup() {
    useMeta({
      title: "Messages",
    });
 
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

    const messages = ref([
      {
        content: "This is really cool",
        time: "7:33 pm",
        media: {
          url: "/images/message-img.png",
        },
        isOwner: false,
        type: "image",
      },
      {
        content: "Thank you",
        time: "7:33 pm",
        isOwner: true,
        type: "text",
      },
      {
        content: "I’ll check the rest out and give you more feedback",
        time: "7:33 pm",
        isOwner: false,
        type: "text",
      },
    ]);

    const chatPhotos = ref([
      "/images/chat-photo-1.png",
      "/images/chat-photo-2.png",
      "/images/chat-photo-3.png",
      "/images/chat-photo-4.png",
    ]);

    return { conversationList, selectedConvo, messages, chatPhotos };
  },
});

</script>
<style scoped>
.textarea[contenteditable]:empty::before {
  content: "Enter message";
  color: #61656d;
}
</style>
