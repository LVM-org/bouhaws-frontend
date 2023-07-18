<template>
  <div class="flex flex-col space-y-5 mx-auto py-8 max-w-xl w-3/5"> 
    <div class="space-y-2 text-green-500"> 
      <div class="-ml-8 flex items-center space-x-2"> 
        <IconLoader 
          name="arrow-back-blue"
          customClass="!h-[1.7rem] cursor-pointer" 
          @click="isReadyToRegister ? (isReadyToRegister = false) : router.go(-1)"
        />

        <TypoHeaderText  customClass="!font-medium tracking-wide !text-4xl">
          {{ isReadyToRegister ? "Almost done..." : "Register" }}
        </TypoHeaderText>   
      </div>

      <TypoNormalText customClass="!font-normal !text-base leading-6">
        {{ isReadyToRegister ? "Tell us about your school" : "Let’s set up your account" }}
      </TypoNormalText>  
    </div>

    <div class="w-full">
      <!-- first registration phase -->
      <!-- <div v-if="!isReadyToRegister" class="space-y-5">
        <FormTextField
          v-model="payload.username"
          placeholder="Username"
          customClass="!bg-[#EBEBE5]  !outline-none !focus:bg-[#EBEBE5] !rounded-[10px] !rounded-tl-[0px] "
          padding="p-4"
        />  

        <FormTextField
          v-model="payload.email"
          placeholder="Email"
          customClass="!bg-[#EBEBE5]  !outline-none !focus:bg-[#EBEBE5] !rounded-[10px] !rounded-tl-[0px] "
          padding="p-4"
        />  

        <FormTextField 
          v-model="payload.password"
          placeholder="Password"
          :type="'password'"
          customClass="!bg-[#EBEBE5]  !outline-none !focus:bg-[#EBEBE5] !rounded-[10px] !rounded-tl-[0px] "
          padding="p-4"
        /> 
  
        <Button  
          customClass="!bg-bouhaws-blue-main !w-full text-white w-full !rounded-[7px]"
          :useSlot="true"
          :padding="'!py-4'"
          @click="isReadyToRegister = true" 
        >
          <TypoNormalText :custom-class="'!font-light'" :color="'text-white'">
            Continue
          </TypoNormalText>
        </Button> 
   
        <div class="flex justify-center items-center space-x-1 mt-3"> 
          <TypoNormalText> Already have an account? </TypoNormalText>

          <nuxt-link to="/auth/login">
            <TypoNormalText custom-class="!font-normal !text-[#336DFF] ">  Log in </TypoNormalText> 
          </nuxt-link>
        </div>
      </div> -->

      <!-- final registration process -->
      <!-- <form v-else class="space-y-5" @submit.prevent="register"> 
        <FormTextField 
          v-model="payload.student_name"
          name="student_name" 
          placeholder="Studdent name"
          customClass="!bg-[#EBEBE5] !outline-none !focus:bg-[#EBEBE5] !rounded-[10px] !rounded-tl-[0px] "
          padding="p-4"
        />  
        
        <FormSelect
          :placeholder="'Years  of experience'"
          custom-class="w-full space-x-2  !outline-none bg-[#EBEBE5] text-[#A0A1A3] rounded-tl-none "
          :padding="'py-4 px-4'" 
        /> 
  
        <div class="flex justify-center items-center space-x-1 pt-6">  
          <nuxt-link to="/policy/terms">
            <TypoNormalText custom-class="!font-normal !text-[#336DFF] ">  Conditions of Use </TypoNormalText> 
          </nuxt-link>
          
          <TypoNormalText> and </TypoNormalText>

          <nuxt-link to="/policy/conditions">
            <TypoNormalText custom-class="!font-normal !text-[#336DFF] "> Terms </TypoNormalText> 
          </nuxt-link>
        </div>
 
        <Button
          type="submit" 
          customClass="!bg-bouhaws-blue-main !w-full text-white w-full !rounded-[7px]"
          :useSlot="true"
          :padding="'!py-4'"
        >
          <TypoNormalText :custom-class="'!font-light'" :color="'text-white'">
            Done
          </TypoNormalText>
        </Button> 
      </form> -->
    </div>
  </div>
</template>

<script lang="ts">  
import { defineComponent, onMounted, ref, watch } from "vue";
import { useMeta } from "vue-meta"; 
import { useRouter } from "vue-router";
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
  middlewares: {
    fetchRules: [],
  },
  name: "AuthRegisterPage",
  setup() {
    useMeta({
      title: "Register",
    });
    
    const router = useRouter()

    const payload = ref({
      email: "",
      password: "",
      username: ""
    })

    const studentDetails = ref({
      school_name: "",
      student_name: "",
      year_of_enrollment: ""
    })

    const isReadyToRegister = ref(false)
    
    const register = () => {
      console.log(payload.value)
    }


    return {isReadyToRegister, register, studentDetails, payload, router };
  },
});


// definePageMeta({ layout: "auth" });

</script>
