<template>
  <router-link
    :to="`/challenges/${challenge?.id}`"
    class="flex py-5 px-5 rounded-[10px] flex-row items-center w-full space-x-4 bg-white box-shadow"
  >
    <div class="flex flex-col">
      <ImageLoader
        :photoUrl="challenge?.image_url"
        :customClass="'h-[200px] w-[220px] rounded-[10px]'"
      />
    </div>

    <div class="flex flex-col space-y-3.5 w-full">
      <TypoHeaderText :size="'xl'" :customClass="'!font-normal'">
        {{ challenge?.title }}
      </TypoHeaderText>

      <div class="flex items-center space-x-6 flex-row w-full">
        <span class="flex items-center space-x-2">
          <Avatar :photoUrl="challenge?.user.photo_url" :size="'20'"></Avatar>
          <TypoNormalText :customClass="'!font-normal'">
            {{ challenge?.user.name }}
          </TypoNormalText>
        </span>

        <TypoNormalText>
          {{ challenge?.dataPosted }}
        </TypoNormalText>

        <TypoNormalText>
          {{ challenge?.deadline }}
        </TypoNormalText>
      </div>

      <TypoNormalText :customClass="'!text-left leading-4'">
        {{ challenge?.description }}
      </TypoNormalText>

      <div class="flex items-center flex-row space-x-6 w-full">
        <div class="flex items-center space-x-1.5">
          <IconLoader name="gift-black" :customClass="'h-[17px]'" />
          <TypoNormalText :customClass="'!font-normal'">
            ${{ challenge?.giftPrice }}
          </TypoNormalText>
        </div>

        <div class="flex items-center space-x-1.5">
          <IconLoader name="time-black" :customClass="'h-[16px]'" />
          <TypoNormalText> {{ challenge?.deadline }} </TypoNormalText>
        </div>

        <div class="flex items-center space-x-1.5">
          <IconLoader name="milestone-black" :customClass="'h-[16px]'" />
          <TypoNormalText>
            {{
              challenge?.milestones?.current > 1
                ? `${challenge?.milestones?.current} milestones`
                : `${challenge?.milestones?.current} milestone`
            }}
          </TypoNormalText>
        </div>
      </div>

      <div>
        <Button text="Join" customClass="!py-2.5 px-4 !font-normal"></Button>
      </div>
    </div>
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
      default: () => {},
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
