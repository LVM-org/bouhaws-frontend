<template>
  <div class="container grid grid-cols-3 gap-6 px-2 relative">
    <!-- main content -->
    <section class="col-span-2 space-y-5">
      <!--  -->
      <div
        class="flex justify-between items-center space-x-4 bg-bouhaws-blue-main text-white rounded-xl py-6 px-6"
      >
        <div class="flex flex-col flex-1 space-y-4 pr-4">
          <TypoHeaderText
            :color="'text-white'"
            :custom-class="'!text-2xl !font-normal'"
          >
            New challenges are here!
          </TypoHeaderText>

          <TypoNormalText :color="'text-white'" :custom-class="'!text-left'">
            Participate in fun events going on right now. You’ll earn points,
            badges and other rewards. Submit and entry today and stand the
            chance to get your work voted as the best.
          </TypoNormalText>

          <div class="flex flex-row">
            <Button
              :custom-class="'!bg-white !w-auto'"
              :use-slot="true"
              :padding="'py-2 px-6'"
            >
              <TypoNormalText :custom-class="'!font-normal'"
                >Get Started</TypoNormalText
              >
            </Button>
          </div>
        </div>

        <div>
          <IconLoader :name="'challenge-gem'" :customClass="'h-[140px] '" />
        </div>
      </div>

      <!-- My projects  -->
      <div
        class="rounded-[10px] px-6 py-6 bg-white flex flex-col space-y-3 shadow-custom"
      >
        <div class="w-full flex flex-row justify-between items-center">
          <TypoHeaderText :custom-class="'!font-normal'" :size="'3xl'">
            My projects
          </TypoHeaderText>
          <IconLoader :name="'arrow-back'" :customClass="'h-[20px]'" />
        </div>

        <div
          class="w-full flex no-scrollbar flex-row space-x-3 flex-nowrap overflow-x-auto scrollbar-hide"
        >
          <div class="flex flex-row space-x-3 py-2 pr-4">
            <div
              class="flex flex-col w-[240px]"
              v-for="(project, index) in projects"
              :key="index"
            >
              <CardProject :project="project" />
            </div>
          </div>
        </div>
      </div>

      <!-- My events -->
      <div
        class="rounded-[10px] px-6 py-6 bg-white flex flex-col space-y-3 shadow-custom"
      >
        <div class="w-full flex flex-row justify-between items-center">
          <TypoHeaderText :custom-class="'!font-normal'" :size="'3xl'">
            My events
          </TypoHeaderText>
          <IconLoader :name="'arrow-back'" :customClass="'h-[20px]'" />
        </div>

        <div
          class="w-full flex no-scrollbar flex-row space-x-3 flex-nowrap overflow-x-auto scrollbar-hide"
        >
          <div class="flex flex-row  space-x-3 py-2 pr-4">
            <div
              class="flex flex-col w-[240px]"
              v-for="(event, index) in events"
              :key="index"
            >
              <CardProject :project="event" />
            </div>
          </div>
        </div>
      </div>

      <!-- My courses -->
      <div
        class="rounded-[10px] px-6 py-6 bg-white flex flex-col space-y-3 shadow-custom"
      >
        <div class="w-full flex flex-row justify-between items-center">
          <TypoHeaderText :custom-class="'!font-normal'" :size="'3xl'">
            My courses
          </TypoHeaderText>
          <IconLoader :name="'arrow-back'" :customClass="'h-[20px]'" />
        </div>

        <div
          class="w-full flex  no-scrollbar flex-row space-x-3 flex-nowrap overflow-x-auto scrollbar-hide"
        >
          <div class="flex flex-row space-x-3 py-2 pr-4">
            <div
              class="flex flex-col w-[240px]"
              v-for="(course, index) in courses"
              :key="index"
            >
              <CardMyCourse :course="course" />
            </div>
          </div>
        </div>
      </div>

      <div class="h-[100px]"></div>
    </section>

    <!-- right side  -->
    <section class="col-span-1 h-fit pb-5 sticky top-0">
      <PartialsLeaderboard />
    </section>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    title: "Project Title",
    type: "class",
    deadline: "23/03/2023",
    total_milestone: 4,
    current_milestone_index: 0,
    image_url: "/images/gallery-project-1.png",
  },
  {
    title: "Mother’s Day",
    type: "challenge",
    deadline: "23/03/2023",
    total_milestone: 5,
    current_milestone_index: 4,
    image_url: "/images/gallery-project-2.png",
  },
  {
    title: "International Women’s Day",
    type: "challenge",
    deadline: "23/03/2023",
    total_milestone: 4,
    current_milestone_index: 1,
    image_url: "/images/gallery-project-3.png",
  },

  {
    title: "Victory Day",
    type: "class",
    deadline: "23/03/2023",
    total_milestone: 4,
    current_milestone_index: 2,
    image_url: "/images/gallery-project-1.png",
  },
  {
    title: "Project Title",
    type: "class",
    deadline: "23/03/2023",
    total_milestone: 5,
    current_milestone_index: 1,
    image_url: "/images/gallery-project-2.png",
  },
];

const events = [
  {
    title: "International Women’s Day",
    type: "",
    deadline: "23/03/2023",
    total_milestone: 4,
    current_milestone_index: 2,
    image_url: "/images/event-gallery.png",
  },
  {
    title: "Mother’s Day",
    type: "",
    deadline: "23/03/2023",
    total_milestone: 5,
    current_milestone_index: 4,
    image_url: "/images/gallery-project-2.png",
  },
  {
    title: "Halloween",
    type: "",
    deadline: "23/03/2023",
    total_milestone: 5,
    current_milestone_index: 1,
    image_url: "/images/event-gallery-2.png",
  },

  {
    title: "Victory Day",
    type: "",
    deadline: "23/03/2023",
    total_milestone: 4,
    current_milestone_index: 2,
    image_url: "/images/event-gallery-3.png",
  },
];

const courses = [
  {
    title: "Modern Art Movements",
    progress: 60,
    image_url: "/images/my-course-1.png",
  },
  {
    title: "Expressionism Abstract Art Techniques with Acrylics",
    progress: 70,
    image_url: "/images/my-course-2.png",
  },
  {
    title: "Contemporary Art Scene",
    progress: 20,
    image_url: "/images/my-course-3.png",
  },
];
</script>
