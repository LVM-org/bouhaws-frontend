<template>
  <div class="flex flex-col space-y-5  py-8 mx-auto max-w-xl w-3/5">
    <div class="space-y-2 !text-green-500"> 
      <div class=" -ml-8 flex items-center space-x-2"> 
        <IconLoader name="arrow-back-blue"  @click="router.go(-1)"  customClass="!h-[1.7rem] cursor-pointer" />

        <TypoHeaderText  customClass="!font-medium tracking-wide !text-4xl">
          Log In
        </TypoHeaderText>   
      </div>
 
       <TypoNormalText  customClass="!font-normal !text-base leading-6">
          Welcome back!
        </TypoNormalText>
    </div>

    <div class="w-full ">
      <form class="space-y-6" @submit.prevent="login">  
        <FormTextField
          v-model="payload.email"
          placeholder="Email"
          customClass="!bg-[#EBEBE5]  !outline-none !focus:bg-[#EBEBE5] !rounded-[12px] !rounded-tl-[0px] "
          padding="p-4"
        />  

        <FormTextField 
          v-model="payload.password"
          type="password"
          placeholder="Password"
          customClass="!bg-[#EBEBE5]  !outline-none !focus:bg-[#EBEBE5] !rounded-[12px] !rounded-tl-[0px] "
          padding="p-4"
        /> 
          

        <Button
          type="submit" 
          customClass="!bg-bouhaws-blue-main !w-full text-white w-full !rounded-[7px]"
          :useSlot="true"
          :padding="'!py-4'"
        >
          <TypoNormalText :custom-class="'!font-light'" :color="'text-white'">
            Login
          </TypoNormalText>
        </Button> 
      </form>

      <div class="flex justify-center items-center space-x-1 mt-3"> 
        <TypoNormalText> Don’t have an account? </TypoNormalText>

        <router-link to="/auth/register">
          <TypoNormalText custom-class="!font-normal !text-[#336DFF] "> Register </TypoNormalText> 
        </router-link>
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
import FormTextArea from "@/components/Form/TextArea.vue"

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
  name: "AuthLoginPage",
  setup() {
    useMeta({
      title: "Login",
    }); 

    const payload = ref({
      email: "erev",
      password: ""
    }) 

    const login = () => {
      console.log(payload.value)
    } 
    

    return { 
      payload,
      login 
    };
  },
});

// definePageMeta({ layout: "auth" });
// const router = useRouter() 
// const payload = ref({
//   email: "",
//   password: ""
// }) 
// const login = () => {
//   console.log(payload.value)
// } 
</script>

<style scoped>
input {
  @apply opacity-80;
}
</style>
