<template>
  <div class="bg-white w-full rounded-md space-y-6 box-shadow px-6 py-6">
    <TypoHeaderText :custom-class="'!font-normal'" :size="'2xl'">
      Contacts
    </TypoHeaderText>

    <form @submit.prevent="updateContact">
      <div class="space-y-5">
        <FormTextField
          v-model="payload.email"
          placeholder="Your email"
          customClass="bg-[#EBEBE5] !rounded-r-[12px] rounded-bl-[12px] rounded-tl-[0px] "
          :padding="'py-4 px-4'"
        />

        <FormTextField
          v-model="payload.phone_number"
          placeholder="Your phone number"
          customClass="bg-[#EBEBE5] !rounded-r-[12px] rounded-bl-[12px] rounded-tl-[0px] "
          :padding="'py-4 px-4'"
        />

        <div class="w-full flex flex-col">
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
import TypoNormalText from "@/components/Typo/NormalText.vue"
import TypoHeaderText from "@/components/Typo/HeaderText.vue"
import Button from "@/components/Button/index.vue";
import Avatar from "@/components/Avatar/index.vue";
import FormTextField from "../../components/Form/TextField.vue";
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
      email: "hermanwayne@gmail.com",
      phone_number: `+90 815 489 2067`,
    });

    const updateContact = () => { 
      console.log(20)
      loading.value = true  
      Logic.Auth.GetAuthUser();
      loading.value = false 
    };

    return { payload, updateContact };
  },
});
</script> 