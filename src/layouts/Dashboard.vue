<template>
  <!-- <div
    :class="`h-full  w-full space-y-2 flex flex-col lg:text-sm mdlg:text-[12px] text-xs`"
  >
    <slot /> 
    <div class="h-[120px] mdlg:!hidden"></div>
  </div> --> 
  <div class="bg-[#E3E3D9] h-fit  relative font-Kanit w-full ">
    <PartialsTopBar />
  
    <div class="relative top-5 py-[1rem]"> 
      <div class="flex space-x-6 container  mx-auto max-h-[calc(100vh-12rem)]">
        <div
          class="rounded-[10px] py-8 !w-[25%] h-fit max-h-full"
        >
          <PartialsSideBar />
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
import { useRouter } from "vue-router";
import PartialsSideBar from "@/components/Partials/SideBar.vue"
import PartialsTopBar from "@/components/Partials/TopBar.vue"

export default defineComponent({
  props: {},
  components: { PartialsSideBar, PartialsTopBar },
  name: "DashboardLayout",
  setup() {
    const router = useRouter();

    const selectedTab = ref("");

    const tabIsActive = (tabName: string) => {
      const mainName = tabName;

      if (mainName == "base" && router.currentRoute.value.path == "/") {
        return true;
      } else if (
        mainName != "base" &&
        router.currentRoute.value.path.includes(mainName)
      ) {
        selectedTab.value = mainName;
        return true;
      }

      return false;
    };

    const goBack = () => {
      window.history.length > 1 ? router.go(-1) : router.push("/");
    };

    const goToRoute = (route: string) => {
      router.push(route);
    };

    const loaderSetup = ref<any>();

    const tabs = ref<any[]>([
      {
        name: "Home",
        path: "/",
        icon: "home",
        routeTag: "base",
        icon_size: "h-[18px]",
      },
    ]);

    return {
      tabIsActive,
      goBack,
      goToRoute,
      loaderSetup,
      tabs,
    };
  },
});
</script>
