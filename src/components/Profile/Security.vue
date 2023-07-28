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
            <TypoNormalText :custom-class="'!font-light !d-flex !justify-center !w-full !items-center'" :color="'text-white'">
              Save
            </TypoNormalText>
          </Button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue"; 
import IconLoader from "@/components/IconLoader/index.vue"
import ImageLoader from "@/components/ImageLoader/index.vue" 
import FormTextField from "@/components/Form/TextField.vue"
import TypoNormalText from "@/components/Typo/NormalText.vue"
import TypoHeaderText from "@/components/Typo/HeaderText.vue"
import Button from "@/components/Button/index.vue";
import Avatar from "@/components/Avatar/index.vue"; 
import { Logic } from "bouhaws-frontend-logic";

export default defineComponent({
  components: {
    IconLoader,
    TypoHeaderText,
    TypoNormalText, 
    Button,
    Avatar,
    ImageLoader, 
    FormTextField
  },  

  setup() { 
    const loading = ref(false)

    const payload = reactive({
      current_password: "",
      new_password: "",
      confirm_new_password: "",
    });

    const updatePassword = () => {
    loading.value = true 
    // if (payload.current_password && payload.new_password && payload.confirm_new_password) {
    //   Logic.Auth.UpdatePasswordPayload = { 
    //     old_password: payload.current_password,
    //     password: payload.new_password
    //   };
    //   Logic.Auth.UpdatePassword(true);
    //   loading.value = false
    // }
    };
    return { payload, updatePassword };
  },
});
</script>
 