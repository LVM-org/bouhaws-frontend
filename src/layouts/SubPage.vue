<template>
  <div class="bg-[#E3E3D9] relative font-Kanit w-full flex flex-col">
    <!-- <PartialsTopBar /> -->

    <div class="w-full flex flex-col items-center justify-center">
      <div
        class="lg:!w-[72%] mdlg:!w-[85%] flex flex-col lg:!pt-[25px] mdlg:!pt-[50px]"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue"; 

export default defineComponent({
  props: {},
  components: {},
  name: "SubPageLayout",
}) 
</script>


<style>
* {
  font-family: Kanit, Arial, Helvetica, sans-serif;
}
.text-shadow {
  text-shadow: 2.5px 2.5px 0px #4503a4;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
/*  */
.box-shadow {
  box-shadow: 0px 10px 34px rgba(0, 0, 0, 0.15);
}

body {
  background: #e3e3d9 !important;
}
</style>
