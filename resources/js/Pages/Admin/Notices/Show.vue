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
                url: route('admin.dashboard')
                },
                {
                title: 'Notice',
                url: route('admin.notices.index')
                },
                {
                title: 'View',
                active: true
                }
            ]"
      ></vx-breadcrumb>
      <!-- DROPDOWN -->
      <div class="ml-auto md:block hidden cursor-pointer">
        <inertia-link :href="route('admin.notices.index')">
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
      <div slot="footer">
        <vs-row vs-justify="flex-end">
          <vx-tooltip color="primary" title="Edit" text="Edit notice info.">
            <inertia-link :href="route('admin.notices.edit',notice.id)">
              <vs-button color="primary" icon-pack="feather" icon="icon-edit-2"></vs-button>
            </inertia-link>
          </vx-tooltip>
        </vs-row>
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
