<template>
  <div class="bg-white w-full rounded-md space-y-6 box-shadow px-6 py-6">
    <TypoHeaderText :custom-class="'!font-normal'" :size="'2xl'">
      Security
    </TypoHeaderText>

    <form @submit.prevent="updatePassword">
      <div class="space-y-5">
        <FormTextField
          v-model="payload.current_password"
          placeholder="Current password"
          customClass="bg-[#EBEBE5] !rounded-r-[12px] rounded-bl-[12px] rounded-tl-[0px] "
          :padding="'py-4 px-4'"
        />
        <FormTextField
          v-model="payload.new_password"
          placeholder="New password"
          customClass="bg-[#EBEBE5] !rounded-r-[12px] rounded-bl-[12px] rounded-tl-[0px] "
          :padding="'py-4 px-4'"
        />
        <FormTextField
          v-model="payload.confirm_new_password"
          placeholder="Confirm new password"
          customClass="bg-[#EBEBE5] !rounded-r-[12px] rounded-bl-[12px] rounded-tl-[0px] "
          :padding="'py-4 px-4'"
        />

        <div class="w-full flex flex-col pt-4">
          <Button
            type="submit"
            text="Submit"
            customClass="!bg-bouhaws-blue-main text-white w-full !rounded-[7px]"
            :useSlot="true"
            :padding="'!py-4'"
          >
            <TypoNormalText :custom-class="'!font-light'" :color="'text-white'">
              Save
            </TypoNormalText>
          </Button>
        </div>
      </div>
    </form>
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
  current_password: "",
  new_password: "",
  confirm_new_password: "",
});

const updatePassword = () => {
  console.log(payload.value);
};
    return { payload, updatePassword };
  },
});
</script>
 