<template>
  <layout title="Leave Applications">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">Leave Applications</h2>
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
                title: 'Leave Applications',
                active: true
                }
            ]"
      ></vx-breadcrumb>
    </div>
    <vs-card>
      <!-- filters bar -->
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
        <vs-col vs-type="flex" vs-justify="flex-end" vs-lg="6" vs-sm="6" vs-xs="12" class="mb-2">
          <inertia-link :href="route('student.leave-applications.create')">
            <vs-button color="primary" type="filled">New Application</vs-button>
          </inertia-link>
        </vs-col>
      </vs-row>

      <vs-collapse id="div-with-loading" accordion type="margin" class="p-0 mt-5 mb-2">
        <vs-row class="header-collapse">
          <vs-col vs-w="1" vs-type="flex" vs-align="center">Sl.</vs-col>
          <vs-col vs-w="2" vs-type="flex" vs-align="center">Title</vs-col>
          <vs-col vs-w="1" vs-type="flex" vs-align="center">Type</vs-col>
          <vs-col vs-w="2" vs-type="flex" vs-align="center">Form</vs-col>
          <vs-col vs-w="2" vs-type="flex" vs-align="center">Until</vs-col>
          <vs-col vs-w="2" vs-type="flex" vs-align="center">Status</vs-col>
          <vs-col vs-w="2" vs-type="flex" vs-align="center">Date</vs-col>
        </vs-row>
        <div v-if="leaveApplications.data.length">
          <vs-collapse-item
            icon-pack="feather"
            icon-arrow="icon-arrow-down"
            :key="index"
            v-for="(leaveApplication, index) in leaveApplications.data"
          >
            <div slot="header">
              <vs-row>
                <vs-col
                  vs-lg="1"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="mb_1"
                >{{ index + 1 }}</vs-col>

                <vs-col
                  vs-lg="2"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >{{ leaveApplication.title }}</vs-col>
                <vs-col
                  vs-lg="1"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >{{ leaveApplication.leave_type.name }}</vs-col>
                <vs-col
                  vs-lg="2"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >{{ leaveApplication.form }}</vs-col>
                <vs-col
                  vs-lg="2"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >{{ leaveApplication.until }}</vs-col>
                <vs-col
                  vs-lg="2"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >
                  <vs-chip
                    color="success"
                    v-if="leaveApplication.status == 'Approved'"
                  >{{ leaveApplication.status }}</vs-chip>
                  <vs-chip
                    color="warning"
                    v-else-if="leaveApplication.status == 'Pending'"
                  >{{ leaveApplication.status }}</vs-chip>
                  <vs-chip color="danger" v-else>{{ leaveApplication.status }}</vs-chip>
                </vs-col>
                <vs-col
                  vs-lg="2"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >{{ leaveApplication.created_at }}</vs-col>
              </vs-row>
            </div>
            <vs-row vs-type="flex" vs-justify="flex-end">
              <vx-tooltip color="primary" title="Edit" text="Edit leave application info.">
                <inertia-link :href="route('student.leave-applications.edit',leaveApplication.id)">
                  <vs-button
                    radius
                    color="primary"
                    type="border"
                    icon-pack="feather"
                    icon="icon-edit-2"
                    class="mx-1"
                  ></vs-button>
                </inertia-link>
              </vx-tooltip>
              <vx-tooltip color="danger" title="Delete" text="Delete this leave application.">
                <vs-button
                  radius
                  color="danger"
                  type="border"
                  icon-pack="feather"
                  icon="icon-trash-2"
                  class="mx-1"
                  @click="destroy(leaveApplication)"
                ></vs-button>
              </vx-tooltip>
            </vs-row>
          </vs-collapse-item>
        </div>
        <div v-else class="text-center mt-6">
          <vs-alert color="danger" title="Sorry :(" active="true">No data found.</vs-alert>
        </div>
      </vs-collapse>

      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" class="mt-2 pagi">
          <vs-pagination
            :total="leaveApplications.pagination.total_pages"
            v-model="filters.page"
            prev-icon="arrow_back"
            next-icon="arrow_forward"
          ></vs-pagination>
        </vs-col>
      </vs-row>
    </vs-card>
  </layout>
</template>

<script>
import _ from "lodash";
import Layout from "@/Shared/Layout";

export default {
  props: {
    requests: Object,
    leaveApplications: Object
  },
  components: {
    Layout
  },
  data() {
    return {
      popup: false,
      editMode: false,
      leaveApplication: {},
      filters: {
        perPage: this.requests.perPage ? this.requests.perPage : 10,
        search: this.requests.search,
        page: this.leaveApplications.pagination.current_page
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
      val.name != null ? (this.popup = true) : (this.popup = false);
    }
  },
  methods: {
    filter() {
      let query = _.pickBy(this.filters);
      this.$inertia.replace(
        this.route(
          "student.leave-applications.index",
          Object.keys(query).length ? query : { remember: "forget" }
        ),
        {
          preserveScroll: true,
          preserveState: true
        }
      );
    },
    destroy(leaveApplication) {
      this.leaveApplication = leaveApplication;
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure? you went to delete this.",
        accept: this.acceptDelete
      });
    },
    acceptDelete() {
      this.$vs.loading();
      this.$inertia
        .delete(
          this.route(
            "student.leave-applications.destroy",
            this.leaveApplication.id
          ),
          { preserveScroll: true, preserveState: true }
        )
        .then(() => this.$vs.loading.close());
    }
  }
};
</script>
