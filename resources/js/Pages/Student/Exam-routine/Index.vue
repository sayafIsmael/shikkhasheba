<template>
  <layout title="Academic Class">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">Exam Routine</h2>
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
                title: 'Exam',
                active: true
                }
            ]"
      ></vx-breadcrumb>
    </div>

    <!-- Academic Class Popup -->
    <vs-row vs-type="flex" vs-justify="space-between">
      <vs-col vs-type="flex" vs-lg="6" vs-sm="6" vs-xs="12" class="mb-2">
        <vs-dropdown vs-trigger-click class="cursor-pointer mr-1">
          <div
            class="p-3 border border-solid rounded-full d-theme-border-grey-light flex items-center justify-between"
          >
            <span class="mr-2">{{ filters.perPage }}</span>
            <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
          </div>
          <vs-dropdown-menu>
            <vs-dropdown-item @click="filters.perPage = 10">10</vs-dropdown-item>
            <vs-dropdown-item @click="filters.perPage = 20">20</vs-dropdown-item>
            <vs-dropdown-item @click="filters.perPage = 50">50</vs-dropdown-item>
            <vs-dropdown-item @click="filters.perPage = 75">75</vs-dropdown-item>
            <vs-dropdown-item @click="filters.perPage = 100">100</vs-dropdown-item>
          </vs-dropdown-menu>
        </vs-dropdown>
        <vs-input
          v-model="filters.search"
          icon="icon-search"
          icon-pack="feather"
          placeholder="Search"
          class="w-full"
        ></vs-input>
      </vs-col>
    </vs-row>

    <div v-if="exams.data.length">
      <vs-row class="m-2" vs-type="flex" vs-justify="center">
        <p>Please select an exam</p>
      </vs-row>
      <vs-row vs-type="flex" class="mt-4">
        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          vs-w="4"
          vs-sm="12"
          vs-xs="12"
          :key="index"
          v-for="(exam, index) in exams.data"
        >
          <vs-card>
            <inertia-link :href="route('student.exam-routine.show', {examId: exam.id})">
              <div class="text-center p-2">
                <h4>{{ exam.name }}</h4>
              </div>
            </inertia-link>
          </vs-card>
        </vs-col>
      </vs-row>
    </div>
    <vs-row class="mt-2" vs-type="flex" v-else>
      <vs-alert color="danger" title="Sorry :(" active="true">No exam found.</vs-alert>
    </vs-row>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" class="mt-2 pagi">
        <vs-pagination
          :total="exams.pagination.total_pages"
          v-model="filters.page"
          prev-icon="arrow_back"
          next-icon="arrow_forward"
        ></vs-pagination>
      </vs-col>
    </vs-row>

    
  </layout>
</template>

<script>
import _ from "lodash";
import Layout from "@/Shared/Layout";

export default {
  props: {
    requests: Object,
    exams: Object
  },
  components: {
    Layout
  },
  data() {
    return {
      filters: {
        perPage: this.requests.perPage ? this.requests.perPage : 10,
        search: this.requests.search,
        page: this.exams.pagination.current_page
      }
    };
  },
  mounted() {},
  watch: {
    "filters.perPage"() {
      this.filter();
    },
    "filters.search"() {
      this.filters.page = 1;
      this.filter();
    },

    "filters.page"() {
      this.filter();
    },
    "$page.errors"(val) {
      val.name != null ? (this.examPopup = true) : (this.examPopup = false);
    }
  },
  methods: {
    filter() {
      let query = _.pickBy(this.filters);
      this.$inertia.replace(
        this.route(
          "student.exams.index",
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