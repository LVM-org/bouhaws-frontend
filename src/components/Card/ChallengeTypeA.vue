<template>
  <router-link
    :to="`challenges`"
    class="relative rounded-md box-shadow border h-auto w-full"
  >
    <ImageLoader
      :photoUrl="challenge.picture"
      customClass="w-full h-[18rem] rounded-[10px] flex flex-col justify-between item-start"
    >
      <div
        class="h-full space-y-2.5 text-white bg-[#0E1011] bg-opacity-80 hover:bg-opacity-70 rounded-lg p-6"
      >
        <TypoHeaderText
          :custom-class="'!font-medium !text-white'"
          :size="'3xl'"
        >
          {{ challenge.title }}
        </TypoHeaderText>

        <div class="flex space-x-6 items-center">
          <span class="flex space-x-3 items-center">
            <IconLoader name="message" />

            <TypoHeaderText
              :custom-class="'!font-normal !text-white'"
              :size="'base'"
            >
              {{ challenge.brandName }}
            </TypoHeaderText>
          </span>

          <TypoHeaderText
            :custom-class="'!font-light !text-white'"
            :size="'base'"
          >
            {{ challenge.deadline }}
          </TypoHeaderText>

          <TypoHeaderText
            :custom-class="'!font-light !text-white'"
            :size="'base'"
          >
            {{ challenge.posted }}
          </TypoHeaderText>

          <TypoHeaderText
            :custom-class="'!font-light !text-white'"
            :size="'base'"
          >
            {{ challenge.milestone }} milestones
          </TypoHeaderText>
        </div>

        <TypoHeaderText
          :custom-class="'!font-light !text-white leading-5'"
          :size="'base'"
        >
          {{ challenge.description }}
        </TypoHeaderText>

        <span class="flex space-x-2 items-center">
          <IconLoader name="gift" />

          <TypoHeaderText
            :custom-class="'!font-light !text-white'"
            :size="'lg'"
          >
            ${{ challenge.gift }}
          </TypoHeaderText>
        </span>

        <Button
          class="!w-auto !text-black !bg-white !mt-5 btn-box-shadow"
          :use-slot="true"
          :padding="'py-2.5 px-7'"
        >
          <TypoNormalText :custom-class="`!font-normal text-[#61656D]`">
            Join
          </TypoNormalText>
        </Button>
      </div>
    </ImageLoader>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconLoader from "../../components/IconLoader/index.vue";
import ImageLoader from "../../components/ImageLoader/index.vue";
import TypoNormalText from "../../components/Typo/NormalText.vue";
import TypoHeaderText from "../../components/Typo/HeaderText.vue";
import Button from "../../components/Button/index.vue";
import Avatar from "../../components/Avatar/index.vue";

export default defineComponent({
  props: {
    challenge: {
      type: Object,
      default: {
        profilePicture: "",
        name: "Daniel Regha",
      },
    },
    hasSection: {
      type: Boolean,
      default: false,
    },
  },

  components: {
    IconLoader,
    TypoHeaderText,
    TypoNormalText,
    Button,
    Avatar,
    ImageLoader,
  },

  setup() {
    return {};
  },
});
</script>
