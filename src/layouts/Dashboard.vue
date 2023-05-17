<template>
  <div
    :class="`h-full  w-full space-y-2 flex flex-col lg:text-sm mdlg:text-[12px] text-xs`"
  >
    <slot />
    <div class="h-[120px] mdlg:!hidden"></div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  props: {},
  components: {},
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
