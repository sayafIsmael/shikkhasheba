<template>
  <layout title="Notices">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">Notices</h2>
      </div>

      <!-- BREADCRUMB -->
      <vx-breadcrumb
        :links="
            [
                {
                title: 'Dashboard',
                url: route('accountant.dashboard')
                },
                {
                title: 'Notices',
                active: true
                }
            ]"
      ></vx-breadcrumb>
    </div>
    <vs-card>
      <!-- filters bar -->
      <vs-row vs-type="flex" vs-justify="space-between">
        <vs-col vs-type="flex" vs-lg="12" vs-sm="12" vs-xs="12" class="mb-2">
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

      <vs-collapse id="div-with-loading" accordion type="margin" class="p-0 mt-5 mb-2">
        <vs-row class="header-collapse">
          <vs-col vs-w="2" vs-type="flex" vs-align="center">Sl.</vs-col>
          <vs-col vs-w="8" vs-type="flex" vs-align="center">Heading</vs-col>
          <vs-col vs-w="2" vs-type="flex" vs-align="center">Date</vs-col>
        </vs-row>
        <div v-if="notices.data.length">
          <vs-collapse-item
            icon-pack="feather"
            icon-arrow="icon-arrow-down"
            :key="index"
            v-for="(notice, index) in notices.data"
          >
            <div slot="header">
              <vs-row>
                <vs-col
                  vs-lg="2"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="mb_1"
                >{{ index + 1 }}</vs-col>
                <vs-col
                  vs-lg="8"
                  vs-sm="12"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >{{ notice.heading }}</vs-col>

                <vs-col
                  vs-lg="2"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >{{ notice.updated_at }}</vs-col>
              </vs-row>
            </div>
            <vs-row vs-type="flex" vs-justify="flex-end">
              <vx-tooltip color="primary" title="Show" text="Show notice details.">
                <inertia-link :href="route('accountant.notices.show',notice.id)">
                  <vs-button
                    color="primary"
                    type="border"
                    icon-pack="feather"
                    icon="icon-eye"
                    class="mx-1"
                  >Show Details</vs-button>
                </inertia-link>
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
            :total="notices.pagination.total_pages"
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
    notices: Object
  },
  components: {
    Layout
  },
  data() {
    return {
      filters: {
        perPage: this.requests.perPage ? this.requests.perPage : 10,
        search: this.requests.search,
        page: this.notices.pagination.current_page
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
    }
  },
  methods: {
    filter() {
      let query = _.pickBy(this.filters);
      this.$inertia.replace(
        this.route(
          "accountant.notices.index",
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
