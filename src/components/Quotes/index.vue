<template>
  <div
    class="max-w-md m-auto text-white p-20 flex flex-col px-8 justify-center space-y-6 items-center bg-gradient-to-b from-[#16120F] to-[#292F33] rounded-3xl rounded-tl-none"
  >
    <div class="flex justify-center mb-6 items-center">
      <div class="w-40 h-32 bg-[#16120F] rounded-2xl rounded-tl-none"> 
        <div class="w-32 h-32 rounded-full bg-[#E6D6FF] -mt-12 -ml-12"></div>
      </div>
    </div>

    <div class="pt-5 mx-auto">
       <TypoNormalText  customClass="!font-light !text-base !text-white leading-6">
          “{{ quotes[0].quote }}
        </TypoNormalText>  
        
       <TypoNormalText  customClass="flex justify-end !font-normal !text-base !text-white leading-6">
          ~ {{ quotes[0].author }}
        </TypoNormalText>   
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from "vue"; 
import TypoNormalText from "@/components/Typo/NormalText.vue"
import TypoHeaderText from "@/components/Typo/HeaderText.vue"

export default defineComponent({
  components: { 
    TypoHeaderText,
    TypoNormalText,   
  },
  props: { 
  type: {
    type: String,
    default: 'image'
  },
  imageUrl: {
    type: String,
    default: 'left',
  },
  quote: {
    type: String,
    default: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit perspiciatis magnam veritatis. Hic necessitatibus rem tempora alias, vel porro dicta.`,
  },
  author: {
    type: String,
    default: `Oluwatoyin Script`,
  },
  },
  
  name: "",

  setup() {  
    const quotes = ref([
      {
        author: `Pablo Picasso`,
        quote: `We artists are indestructible; even in a prison, or in a concentration camp, I would be almighty in my own world of art`,
      },
      {
        author: `Seth Godin`,
        quote: `Art is a personal gift that changes the recipient. The medium doesn't matter. The intent does.`,
      },
    ])

    return {  quotes };
  },
});
</script>
 