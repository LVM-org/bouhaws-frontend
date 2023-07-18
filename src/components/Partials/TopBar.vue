<template>
  <nav
    class="w-screen text-neutral-800 bg-white mx-auto relative !z-10 top-0 -mt-0 shadow-md"
  >
    <div
      class="w-full flex container sticky bg-white px-8 mx-auto items-center justify-between py-4"
    >
      <div class="flex-shrink-0 flex items-center justify-between">
        <router-link
          to="/"
          class="text-2xl select-none cursor-pointer font-medium text-bouhaws-gray"
        >
          BOUHAWS
        </router-link>
      </div>

      <div class="flex-1 flex pl-12 space-x-4 xl:space-x-8">
        <ul class="w-full h-auto flex items-center space-x-3">
          <li v-for="(item, index) in navTabs" :key="index">
            <router-link
              :to="item.path"
              class="py-2 capitalize space-x-2 px-4 flex flex-row items-center"
            >
              <IconLoader
                :name="`${item.icon}${
                  tabIsActive(item.routeTag) ? '-active' : ''
                }`"
                :customClass="item.icon_size"
              />

              <TypoNormalText
                :customClass="'!font-normal'"
                :color="`${
                  tabIsActive(item.routeTag)
                    ? 'text-bouhaws-blue-main'
                    : 'text-bouhaws-gray'
                }`"
              >
                {{ item.name }}
              </TypoNormalText>
            </router-link>
          </li>
        </ul>
      </div>

      <div class="space-x-6 flex items-center justify-center">
        <Button
          text=""
          :use-slot="true"
          customClass="h-9 !px-4 !font-normal text-center !bg-[#1A52E4] !rounded-[5px]"
        >
          <TypoNormalText :customClass="'!text-white'">
            Share your artwork
          </TypoNormalText>
        </Button>

        <span class="text-bouhaws-gray">
          <IconTopBar title="notifications" />
        </span>

        <router-link class="h-12 w-12 border rounded-full" to="/profile">
          <img src="~/assets/images/profile-picture.svg" />
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"; 
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  components: {   },
  props: { 
  },
  
  name: "",

  setup() { 
    const router = useRouter();

const navTabs = ref([
  {
    name: "Home",
    path: "/",
    icon: "home",
    routeTag: "home",
    icon_size: "h-[19px] ",
  },
  {
    name: "Projects",
    path: "/projects",
    icon: "projects",
    routeTag: "projects",
    icon_size: "h-[21px]",
  },
  {
    name: "Classes",
    path: "/classes",
    icon: "classes",
    routeTag: "classes",
    icon_size: "h-[21px]",
  },
  {
    name: "Messages",
    path: "/messages",
    icon: "messages",
    routeTag: "messages",
    icon_size: "h-[21px]",
  },
  {
    name: "Exhibition",
    path: "/exhibition",
    icon: "exhibition",
    routeTag: "exhibition",
    icon_size: "h-[20px]",
  },
  {
    name: "Challenges",
    path: "/challenges",
    icon: "challenges",
    routeTag: "challenges",
    icon_size: "h-[20px]",
  },
]);

const tabIsActive = (tabName: string) => {
  const mainName = tabName;

  const router = useRoute();

  if (mainName == "base" && router.path == "/") {
    return true;
  } else if (mainName != "base" && router.path.includes(mainName)) {
    return true;
  }

  return false;
};

    return { navTabs, tabIsActive  };
  },
});
</script>
 
