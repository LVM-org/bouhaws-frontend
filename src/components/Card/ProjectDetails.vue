<template>
  <router-link
    :to="`/projects/${project.uuid}`"
    class="flex py-5 px-5 rounded-[10px] flex-row items-center w-full space-x-4 bg-white box-shadow"
  > 
    <div class="w-[170px] flex flex-col">
      <ImageLoader
        :photoUrl="project.photo_url"
        type="user"
        :customClass="'h-[160px] w-[170px] rounded-[10px]'"
      />
    </div>

    <div class="flex flex-col space-y-3 w-full">
      <TypoHeaderText :size="'xl'" :customClass="'!font-normal'">
        {{ project.title }}
      </TypoHeaderText>

      <div class="flex items-center space-x-6 flex-row w-full">
        <TypoNormalText
          v-if="project.type"
          :customClass="`px-4 py-1 capitalize rounded-[5px] ${
            project.type == 'challenge'
              ? 'bg-bouhaws-purple'
              : 'bg-bouhaws-orange'
          }`"
          :color="'text-white'"
        >
          {{ project.type }}
        </TypoNormalText>

        <span class="flex items-center space-x-1">
          <Avatar :photoUrl="project?.user?.profile?.photo_url" :size="'20'"></Avatar>
          <TypoNormalText :customClass="'!font-normal'">
            {{ project?.user?.name }}
          </TypoNormalText>
        </span>

        <TypoNormalText>
          {{ project.created_at }}
        </TypoNormalText>

        <TypoNormalText>
          {{ project.end_date }}
        </TypoNormalText>
      </div>

      <TypoNormalText :customClass="'!text-left'">
        {{ project.description }}
      </TypoNormalText>

      <div v-if="project.milestones" class="flex items-center flex-row space-x-2 w-full">
        <div class="flex flex-row items-center space-x-1 pt-1">
          <template
            v-for="(milestone, index) in project.milestones.total"
            :key="index"
          >
            <IconLoader
              :name="`${
                index < project.milestones.current
                  ? 'completed-milestone'
                  : 'pending-milestone-gray'
              }`"
              :customClass="'h-[16px]'"
            />
          </template>
        </div>

        <TypoNormalText>
          {{ project.milestones.current }}/{{ project.milestones.total }}
          milestones reached
        </TypoNormalText>
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
    project: {
      type: Object, 
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
