<template>
  <layout title="Students">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">Students</h2>
      </div>

      <!-- BREADCRUMB -->
      <vx-breadcrumb
        :links="
            [
                {
                title: 'Dashboard',
                url: route('teacher.dashboard')
                },
                {
                title: 'Students',
                active: true
                }
            ]"
      ></vx-breadcrumb>
    </div>

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

    <vs-row class="mt-2" vs-type="flex" v-if="students.data.length">
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="4"
        vs-sm="12"
        vs-xs="12"
        v-for="(data,index) in students.data"
        :key="index"
      >
        <vs-card>
          <vs-row>
            <vs-col vs-type="flex" vs-w="4">
              <vs-avatar class="mx-auto mb-6 block" size="75px" :src="data.student.user.avatar_path" :text="student.name" />
            </vs-col>
            <vs-col vs-type="flex" vs-w="8">
              <div class="text-left">
                <h6>{{ data.student.user.name }}</h6>
                <p class="text-grey">
                  <vs-icon icon="account_circle"></vs-icon>
                  {{ data.student.user.id }}
                </p>
                <p class="text-grey">
                  <vs-icon icon="phone"></vs-icon>
                  {{ data.student.user.contact_no ? data.student.user.contact_no : 'No Contact' }}
                </p>
                <p class="text-grey">
                  <vs-icon icon="email"></vs-icon>
                  {{ data.student.user.email }}
                </p>
                <p class="text-grey">
                  <vs-icon icon="person"></vs-icon>
                  {{ data.student.user.gender }}
                </p>
              </div>
            </vs-col>
          </vs-row>
        </vs-card>
      </vs-col>
    </vs-row>

    <vs-row class="mt-2" vs-type="flex" v-else>
      <vs-alert color="danger" title="Sorry :(" active="true">No data found.</vs-alert>
    </vs-row>

    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" class="mt-2 pagi">
        <vs-pagination
          :total="students.pagination.total_pages"
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
import Avatar from "vue-avatar";
import Layout from "@/Shared/Layout";

export default {
  props: {
    requests: Object,
    students: Object
  },
  components: {
    Avatar,
    Layout
  },
  data() {
    return {
      filters: {
        perPage: this.requests.perPage ? this.requests.perPage : 10,
        search: this.requests.search,
        page: this.students.pagination.current_page
      },
      student: []
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
    }
  },
  methods: {
    filter() {
      let query = _.pickBy(this.filters);
      this.$inertia.replace(
        this.route(
          "teacher.student-class.index",
          Object.keys(query).length ? query : { remember: "forget" }
        ),
        {
          preserveScroll: true,
          preserveState: true
        }
      );
    }
  }
};
</script>

<style scoped>
.vx-card__body {
  padding: 0.5rem !important;
}
</style>
