<template>
  <router-link
    :to="`/exhibition/${exhibition?.id}`"
    :class="`relative box-shadow ${customClass} w-[200px] h-[200px] rounded-b-[10px] flex flex-col`"
  >
    <ImageLoader
      :photoUrl="exhibition?.image_url"
      :customClass="`w-full h-full ${
        hasMoreInfo ? 'rounded-t-[10px]' : 'rounded-[10px]'
      }  flex flex-col justify-between item-start relative`"
    >
      <div
        :class="`absolute bottom-0 left-0 w-full px-4 py-4 bg-gradient-to-t from-black flex flex-col space-y-1 ${
          hasMoreInfo ? 'rounded-t-[10px]' : 'rounded-[10px]'
        }`"
      >
        <TypoNormalText
          :custom-class="`!font-normal !text-white ${
            hasMoreInfo ? '' : '!text-base'
          } `"
        >
          {{ exhibition?.title }}
        </TypoNormalText>

        <TypoNormalText
          :custom-class="` !text-white ${hasMoreInfo ? '!text-xs' : ''}`"
        >
          {{ exhibition?.username }}
        </TypoNormalText>
      </div>
    </ImageLoader>

    <template v-if="hasMoreInfo">
      <div
        class="w-full flex flex-row items-center justify-between space-x-3 bg-white rounded-b-[10px] py-4 px-4"
      >
        <div class="flex flex-row items-center space-x-2">
          <div class="flex flex-row items-center space-x-1">
            <IconLoader :name="'like'" :custom-class="'h-[17px]'" />
            <TypoNormalText
              :color="'text-progress-bar-gray'"
              :custom-class="'!text-xs'"
            >
              {{ exhibition?.stats.likes }}
            </TypoNormalText>
          </div>

          <div class="flex flex-row items-center space-x-1">
            <IconLoader :name="'comment'" :custom-class="'h-[17px]'" />
            <TypoNormalText
              :color="'text-progress-bar-gray'"
              :custom-class="'!text-xs'"
            >
              {{ exhibition?.stats.comments }}
            </TypoNormalText>
          </div>
        </div>

        <div>
          <IconLoader :name="'bookmark'" :custom-class="'h-[19px]'" />
        </div>
      </div>
    </template>
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
  components: {
    IconLoader,
    TypoHeaderText,
    TypoNormalText,
    Button,
    Avatar,
    ImageLoader,
  },
  props: {
    exhibition: {
      type: Object,
    },
    customClass: {
      type: String,
      default: "",
    },
    hasMoreInfo: {
      type: Boolean,
      default: false,
    },
  },

  name: "",

  setup() {
    return {};
  },
});
</script>
