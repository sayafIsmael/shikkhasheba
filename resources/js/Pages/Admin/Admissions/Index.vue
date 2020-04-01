<template>
  <layout title="Leave Applications">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">Admission Logs</h2>
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
                title: 'Admissions',
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
          <!-- <vs-input
            v-model="filters.search"
            icon="icon-search"
            icon-pack="feather"
            placeholder="Search"
            class="w-full"
          ></vs-input> -->
        </vs-col>
        <vs-col vs-type="flex" vs-justify="flex-end" vs-lg="6" vs-sm="6" vs-xs="12" class="mb-2">
          <inertia-link :href="route('admin.admissions.new')">
            <vs-button color="primary" type="filled">New Admission</vs-button>
          </inertia-link>
        </vs-col>
      </vs-row>

      <vs-collapse id="div-with-loading" accordion type="margin" class="p-0 mt-5 mb-2">
        <vs-row class="header-collapse">
          <vs-col vs-w="1" vs-type="flex" vs-align="center">Sl.</vs-col>
          <vs-col vs-w="2" vs-type="flex" vs-align="center">Student</vs-col>
          <vs-col vs-w="3" vs-type="flex" vs-align="center">Class</vs-col>
          <vs-col vs-w="2" vs-type="flex" vs-align="center">Roll No</vs-col>
          <vs-col vs-w="2" vs-type="flex" vs-align="center">Fee</vs-col>
          <vs-col vs-w="2" vs-type="flex" vs-align="center">Date</vs-col>
        </vs-row>
        <div v-if="admissions.data.length">
          <vs-collapse-item
            icon-pack="feather"
            icon-arrow="icon-arrow-down"
            :key="index"
            v-for="(admission, index) in admissions.data"
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
                >
                  Name: {{ admission.student.user.name }}
                  <br>
                  Id: ({{ admission.student.user.user_id }})
                </vs-col>

                <vs-col
                  vs-lg="3"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >{{ admission.student_class.academic_class.name }}</vs-col>
                <vs-col
                  vs-lg="2"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >{{ admission.student_class.roll_no }}</vs-col>
                <vs-col
                  vs-lg="2"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >
                &#2547; {{ admission.fee.total }}
                </vs-col>
                <vs-col
                  vs-lg="2"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >{{ admission.created_at }}</vs-col>
              </vs-row>
            </div>
            <vs-row vs-type="flex" vs-justify="flex-end">
              <vx-tooltip color="primary" title="Print invoice" text="Print application invoice.">
                <a :href="route('admin.admissions.download', admission.id)">
                  <vs-button
                    color="primary"
                    type="border"
                    icon-pack="feather"
                    class="mx-1"
                  >Print invoice</vs-button>
                </a>
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
            :total="admissions.pagination.total_pages"
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
    admissions: Object
  },
  components: {
    Layout
  },
  data() {
    return {
      popup: false,
      editMode: false,
      admission: {},
      filters: {
        perPage: this.requests.perPage ? this.requests.perPage : 10,
        search: this.requests.search,
        page: this.admissions.pagination.current_page
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
          "admin.leave-applications.index",
          Object.keys(query).length ? query : { remember: "forget" }
        ),
        {
          preserveScroll: true,
          preserveState: true
        }
      );
    },
    destroy(admission) {
      this.admission = admission;
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
            "admin.leave-applications.destroy",
            this.admission.id
          ),
          { preserveScroll: true, preserveState: true }
        )
        .then(() => this.$vs.loading.close());
    }
  }
};
</script>
