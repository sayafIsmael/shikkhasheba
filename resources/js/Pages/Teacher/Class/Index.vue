<template>
  <layout title="Academic Class">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">My Classes</h2>
      </div>

      <!-- BREADCRUMB -->
      <vx-breadcrumb
        :links="
            [
                {
                title: 'My class',
                url: route('teacher.dashboard')
                },
                {
                title: 'My class',
                active: true
                }
            ]"
      ></vx-breadcrumb>
    </div>

    <!-- Academic Class Popup -->

    <div v-if="sections.length">
      <vs-row vs-type="flex" class="mt-4">
        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          vs-w="3"
          vs-sm="12"
          vs-xs="12"
          :key="index"
          v-for="(section, index) in sections"
        >
          <vx-card class="mb-3">
            
            <inertia-link
              :href="route('teacher.student-class.show', section.id)"
            >
              <vs-avatar
                class="mx-auto mb-6 block"
                size="80px"
                color="primary"
                :text="section.academic_class.name"
              />
            </inertia-link>
            <div class="text-center">
              <inertia-link
                :href="route('teacher.student-class.show', section.id)"
              >
                <h4>{{ section.academic_class.name }}</h4>
                <p>[{{ section.name }}]</p>
              </inertia-link>
            </div>
          </vx-card>
        </vs-col>
      </vs-row>
    </div>
    <vs-row class="mt-2" vs-type="flex" v-else>
      <vs-alert color="danger" title="Sorry :(" active="true">No class found.</vs-alert>
    </vs-row>
    
    <vs-popup class :title="editMode ? 'Edit Class' : 'Add New Class'" :active.sync="classPopup">
      <form @submit.prevent="editMode? update() : store()">
        <vs-input
          icon="icon icon-user"
          icon-pack="feather"
          label-placeholder="Class Name"
          v-model="section.name"
          :danger="!!$page.errors.name"
          :danger-text="$page.errors.name != null ? $page.errors.name[0] : ''"
          class="w-full my-5 no-icon-border"
        />
        <vs-button button="submit" color="primary" type="filled">Save Changes</vs-button>
      </form>
    </vs-popup>
  </layout>
</template>

<script>
import _ from "lodash";
import Layout from "@/Shared/Layout";

export default {
  props: {
    requests: Object,
    sections: Array
  },
  components: {
    Layout
  },
  data() {
    return {
      classPopup: false,
      editMode: false,
      section: {
        id: "",
        name: "",
        slug: ""
      },
      // filters: {
      //   perPage: this.requests.perPage ? this.requests.perPage : 10,
      //   search: this.requests.search,
      //   page: this.sections.pagination.current_page
      // }
    };
  },
  mounted() {},
  watch: {
    // "filters.perPage"() {
    //   this.filter();
    // },
    // "filters.search"() {
    //   this.filters.page = 1;
    //   this.filter();
    // },

    // "filters.page"() {
    //   this.filter();
    // },
    // "$page.errors"(val) {
    //   val.name != null ? (this.classPopup = true) : (this.classPopup = false);
    // }
  },
  methods: {
    filter() {
      let query = _.pickBy(this.filters);
      this.$inertia.replace(
        this.route(
          "teacher.academic.classes.index",
          Object.keys(query).length ? query : { remember: "forget" }
        ),
        {
          preserveScroll: true,
          preserveState: true
        }
      );
    },
  }
};
</script>
<style scoped>
/* .vx-card .vx-card__collapsible-content .vx-card__body{
  padding-left: 0px !important;
  padding-right: 0px !important;
} */
</style>