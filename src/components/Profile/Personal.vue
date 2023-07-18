<template>
  <div
    class="bg-white w-full flex flex-col rounded-[10px] space-y-6 box-shadow px-6 py-6"
  >
    <TypoHeaderText :custom-class="'!font-normal'" :size="'2xl'">
      Personal
    </TypoHeaderText>

    <div class="space-y-6">
      <div class="w-fit h-fit relative rounded">
        <Avatar :photoUrl="'/images/profile-info.png'" :size="'158'" />

        <span
          class="flex justify-center items-center absolute bottom-2 -right-3 bg-black p-3 rounded-full"
        >
          <IconLoader name="camera-light" customClass="h-[24px]" />
        </span>
      </div>

      <form @submit.prevent="updateProfile">
        <div class="space-y-4">
          <FormTextField
            v-model="payload.name"
            placeholder="Your name"
            customClass="bg-[#EBEBE5] !rounded-r-[12px] rounded-bl-[12px] rounded-tl-[0px] "
            :padding="'py-4 px-4'"
          />

          <FormTextArea
            v-model="payload.about"
            placeholder="About you"
            customClass="bg-[#EBEBE5] !rounded-r-[12px] rounded-bl-[12px] rounded-tl-[0px] "
          />

          <div class="w-full flex flex-col pt-2">
            <Button
              type="submit"
              text="Submit"
              customClass="!bg-bouhaws-blue-main text-white w-full !rounded-[7px]"
              :useSlot="true"
              :padding="'!py-4'"
            >
              <TypoNormalText
                :custom-class="'!font-light'"
                :color="'text-white'"
              >
                Save
              </TypoNormalText>
            </Button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"; 
import IconLoader from "@/components/IconLoader/index.vue"
import ImageLoader from "@/components/ImageLoader/index.vue" 
import FormTextArea from "@/components/Form/TextArea.vue"
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
    FormTextArea
  }, 

  props: { 
  },
  
  name: "",

  setup() { 

const payload = ref({
  name: "Oluwatoyin Script",
  about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, et veniam laudantium nostrum eos labore in, praesentium quae iusto facilis eaque consectetur neque sint amet officia voluptas deleniti delectus sunt?`,
});

const updateProfile = () => {
  console.log(payload.value);
};

    return { payload, updateProfile };
  },
});
</script>
 