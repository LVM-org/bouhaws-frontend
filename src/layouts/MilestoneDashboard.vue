<template>
  <div class="bg-[#E3E3D9] h-fit  font-Kanit w-full ">
    <PartialsTopBar />
  
    <div class="relative top-5 py-[1rem]"> 
      <div class="flex space-x-6 container  mx-auto max-h-[calc(100vh-12rem)]">
        <div
          class="rounded-[10px]   !w-[25%] h-fit max-h-full"
        >
         <PartialsMilestoneView />
        </div>

        <div class="sticky overflow-scroll flex-1  max-h-[calc(100vh-4rem)] no-scrollbar"> 
          <slot/>
        </div>
      </div>
    </div>  
  </div>
</template> 

<script lang="ts">
import { ref, defineComponent } from "vue"; 
import PartialsTopBar from "@/components/Partials/TopBar.vue"
import PartialsMilestoneView from "@/components/Partials/MilestoneView.vue"

export default defineComponent({
  props: {},
  components: { PartialsTopBar, PartialsMilestoneView },
  name: "MilestoneDashboardLayout",
}) 
</script>
