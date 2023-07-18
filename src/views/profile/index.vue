<template>
  <subpage-layout>
  <div class="flex space-x-6 sticky top-[60%]">wewewe
    <div
      class="rounded-[10px] space-y-1 flex flex-col box-shadow px-6 py-6 !w-[360px] h-fit bg-white"
    >
      <TypoHeaderText :custom-class="'!font-normal'" :size="'2xl'">
        Settings
      </TypoHeaderText>

      <div
        class="w-full flex flex-col space-y-1 border-b border-[#EBEBE5] pb-3"
      >
        <TypoNormalText
          v-for="nav in navs"
          :key="nav.title"
          :customClass="` !font-light cursor-pointer  hover:text-[#1A52E4] py-2 !text-[14px]  capitalize ${
            nav.title == activeNav ? '!text-[#1A52E4]' : '!text-[#61656D] '
          }`"
          @click="selectTab(nav.title)"
        >
          {{ nav.title }}
        </TypoNormalText>
      </div>

      <div class="border-[#EBEBE5]">
        <TypoNormalText
          customClass="py-2 !font-normal  cursor-pointer !text-[#FF3333] capitalize "
        >
          delete account
        </TypoNormalText>
      </div>
    </div>

    <div class="sticky overflow-scroll flex-1 no-scrollbar max-h-screen top-0">
      <ProfilePersonal v-if="activeNav == 'personal'" />
      <ProfileContacts v-if="activeNav == 'contacts'" />
      <ProfileNotifications v-if="activeNav == 'notifications'" />
      <ProfileSecurity v-if="activeNav == 'security'" />
    </div>
  </div>
  </subpage-layout>
</template>

<script lang="ts"> 
import { defineComponent, onMounted, ref, watch } from "vue";
import { useMeta } from "vue-meta"; 
import TypoNormalText from "@/components/Typo/NormalText.vue"
import TypoHeaderText from "@/components/Typo/HeaderText.vue"
import ProfilePersonal from "@/components/Profile/Personal.vue"
import ProfileContacts from "@/components/Profile/Contacts.vue"
import ProfileNotifications from "@/components/Profile/Notifications.vue"
import ProfileSecurity from "@/components/Profile/Security.vue"

export default defineComponent({
  components: {
    TypoHeaderText,
    TypoNormalText, 
    ProfilePersonal,
    ProfileContacts,
    ProfileNotifications,
    ProfileSecurity,
  },  
  name: "ProfilePage",
  setup() {
    useMeta({
      title: "Home",
    });

    const activeNav = ref("personal");
    const navs = ref([
      { title: "personal" },
      { title: "contacts" },
      { title: "notifications" },
      { title: "security" },
    ]);

    const selectTab = (activeTab: string) => {
      activeNav.value = activeTab;
      console.log(activeTab);
    };

    return { activeNav, navs,  selectTab };
  },
});

// definePageMeta({ layout: "sub-page" }); 
</script>

<style lang="scss" scoped></style>

 