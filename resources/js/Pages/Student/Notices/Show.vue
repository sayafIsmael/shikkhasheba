<template>
  <layout title="Notice">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">View Notice</h2>
      </div>

      <!-- BREADCRUMB -->
      <vx-breadcrumb
        :links="
            [
                {
                title: 'Dashboard',
                url: route('student.dashboard')
                },
                {
                title: 'Notice',
                url: route('student.notices.index')
                },
                {
                title: 'View',
                active: true
                }
            ]"
      ></vx-breadcrumb>
      <!-- DROPDOWN -->
      <div class="ml-auto md:block hidden cursor-pointer">
        <inertia-link :href="route('student.notices.index')">
          <vs-button color="danger" class="mb-2" icon="icon-arrow-left" icon-pack="feather">Back</vs-button>
        </inertia-link>
      </div>
    </div>
    <vs-card>
      <div slot="header">
        <h3>{{ notice.heading }}</h3>
      </div>
      <div id="content">
        <strong class="mb-2">Recivied At: {{ notice.created_at }}</strong>
        <div v-html="notice.content"></div>
      </div>
    </vs-card>
  </layout>
</template>

<script>
import Layout from "@/Shared/Layout";

export default {
  props: {
    notice: Object
  },
  components: {
    Layout
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
