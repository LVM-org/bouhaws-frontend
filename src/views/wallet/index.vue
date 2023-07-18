<template>
  <subpage-layout>
  <div>   
    <section class="col-span-3 space-y-14 flex flex-col relative  w-full">
      <div class=" box-shadow flex-1 space-y-2 bg-white  !text-[#0E1011] rounded-[10px]  px-8 py-6 ">  
          <TypoHeaderText  size="lg" customClass="!font-normal  leading-5">
              Available balance
          </TypoHeaderText> 

          <span class="flex items-center justify-between space-x-4"> 
            <TypoHeaderText  customClass="!font-normal  flex-1 !text-3xl !leading-4">
                $6,400.00
            </TypoHeaderText> 

            <Button text="Withdraw" customClass="!font-normal " padding="py-3 px-8" />  
          </span> 
        </div>


      <div class="space-y-6">
        <div class="flex justify-between items-center px-2">
          <TypoHeaderText customClass="!text-[#0E1011] !font-normal !text-3xl">
              History
            </TypoHeaderText> 

          <span>teet</span>
        </div> 

        <div class="space-y-3">
          <div  v-for="transaction in transactions" :key="transaction" class=" px-8 py-6  !text-[#0E1011] box-shadow  rounded-[10px] bg-white flex items-center space-x-6 border-b">
            <div class="flex-1 space-y-2.5"> 
              <TypoHeaderText  customClass="!font-normal !tex t-base leading-5">
                {{transaction.isProfit ? transaction.title : 'Withdrawal'}}
              </TypoHeaderText> 

            <span class="flex items-center space-x-4"> 
              <TypoNormalText  customClass="!font-light !text-sm !leading-3">
              {{transaction.datePosted}}
              </TypoNormalText> 

              <TypoNormalText  customClass="!font-light !text-sm !leading-3">
              {{transaction.timePosted}}
              </TypoNormalText>
            </span>
            </div>
    
            <TypoHeaderText size="2xl"  :customClass="`!font-normal !leading-5 ${transaction.isProfit && '!text-[#27BA8E]'} `"> 
              {{transaction.isProfit ? `+${transaction.amount}` : `-${transaction.amount}` }} 
            </TypoHeaderText>  
          </div> 
        </div> 
      </div>
    </section>
    
    <div class="h-[100px]"></div>
  </div>
  </subpage-layout>
</template>

<script lang="ts">  
import { defineComponent, onMounted, ref, watch } from "vue";
import { useMeta } from "vue-meta"; 
import TypoNormalText from "@/components/Typo/NormalText.vue"
import TypoHeaderText from "@/components/Typo/HeaderText.vue"
import Button from "@/components/Button/index.vue";

export default defineComponent({
  components: { 
    TypoHeaderText,
    TypoNormalText, 
    Button, 
  },
  middlewares: {
    fetchRules: [],
  },
  name: "WalletPage",
  setup() {
    useMeta({
      title: "Wallet",
    });
    
    const activeOption = ref("active");
    const activeOption1 = ref("all");
    const filterOptions = ref([{ title: "active" }, { title: "completed" }]);
    const filterOptions1 = ref([
      { title: "all" },
      { title: "class" },
      { title: "challenge" },
    ]); 

    const transactions = ref([
      { amount: 190, title: "Bank of America", isProfit: true, datePosted: "March 2", timePosted: "4hrs ago" },
      { amount: 190, title: "Bank of Nigeria", isProfit: true, datePosted: "June 2", timePosted: "4hrs ago" },
      { amount: 190, title: "Withdraw", isProfit: false, datePosted: "February 2", timePosted: "4hrs ago" },
      { amount: 190, title: "Tell me about the crypto space", isProfit: true, datePosted: "March 2", timePosted: "4hrs ago" },
      { amount: 190, title: "Bank of America", isProfit: false, datePosted: "March 2", timePosted: "4hrs ago" },
    ])

    const selectActiveTab =  (value: string) => {
      activeOption1.value = value
    }
    const selectActiveOption =  (value: string) => {
      activeOption.value = value
    }

    return { activeOption, activeOption1, filterOptions, filterOptions1, transactions, selectActiveTab, selectActiveOption };
  },
});
// definePageMeta({ layout: "sub-page" });  
</script>
 