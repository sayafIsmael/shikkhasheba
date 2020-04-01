<template>
  <layout title="Sms Manager">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">Sms Manager</h2>
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
                title: 'Sms Manager',
                active: true
                }
            ]"
      ></vx-breadcrumb>
    </div>
    <!-- ROW 2 -->
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
        <vs-card class="p-1">
          <div class="text-center">
            <h6>Remaining Credit</h6>
            <h4 class="pt-2">{{ sms_credit }}</h4>
          </div>
        </vs-card>
      </div>

      <div class="vx-col w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
        <vs-card class="p-1">
          <div class="text-center">
            <h6>Today Total Sent</h6>
            <h4 class="pt-2">{{ today_total_sent }}</h4>
          </div>
        </vs-card>
      </div>

      <div class="vx-col w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
        <inertia-link :href="route('admin.sms-manager.to-all')">
          <vs-button
            class="mb-2"
            color="primary"
            type="filled"
            icon="icon-users"
            icon-pack="feather"
          >Send SMS To All Users</vs-button>
        </inertia-link>
        <inertia-link :href="route('admin.sms-manager.to-by-role')">
          <vs-button
            color="primary"
            type="filled"
            icon="icon-user-check"
            icon-pack="feather"
          >Send SMS By Role</vs-button>
        </inertia-link>
      </div>
      <div class="vx-col w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
        <!-- <vs-button
          class="mb-2"
          color="primary"
          type="filled"
          icon="icon-plus"
          icon-pack="feather"
        >Compose</vs-button>
        <vs-button color="primary" type="filled" icon="icon-plus" icon-pack="feather">Compose</vs-button> -->
      </div>
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
          <inertia-link :href="route('admin.sms-manager.compose')">
            <vs-button color="primary" type="filled" icon="icon-plus" icon-pack="feather">Compose</vs-button>
          </inertia-link>
        </vs-col>
      </vs-row>

      <vs-collapse id="div-with-loading" accordion type="margin" class="p-0 mt-5 mb-2">
        <vs-row class="header-collapse">
          <vs-col vs-w="1" vs-type="flex" vs-align="center">Sl.</vs-col>
          <vs-col vs-w="3" vs-type="flex" vs-align="center">Phone Number</vs-col>
          <vs-col vs-w="6" vs-type="flex" vs-align="center">Message</vs-col>
          <vs-col vs-w="2" vs-type="flex" vs-align="center">Timestamp</vs-col>
        </vs-row>
        <div v-if="sms_logs.data.length">
          <vs-collapse-item
            icon-pack="feather"
            icon-arrow="icon-arrow-down"
            :key="index"
            v-for="(sms_log, index) in sms_logs.data"
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
                  vs-lg="3"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >{{ sms_log.phone_number }}</vs-col>

                <vs-col
                  vs-lg="6"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >{{ sms_log.message }}</vs-col>

                <vs-col
                  vs-lg="2"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >{{ sms_log.updated_at }}</vs-col>
              </vs-row>
            </div>
            <vs-row vs-type="flex" vs-justify="flex-end">
              <vx-tooltip color="danger" title="Delete" text="Delete this leave application.">
                <vs-button
                  radius
                  color="danger"
                  type="border"
                  icon-pack="feather"
                  icon="icon-trash-2"
                  class="mx-1"
                  @click="destroy(sms_log)"
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
            :total="sms_logs.pagination.total_pages"
            v-model="filters.page"
            prev-icon="arrow_back"
            next-icon="arrow_forward"
          ></vs-pagination>
        </vs-col>
      </vs-row>
    </vs-card>
    <vs-popup title="Select Class and Section" :active.sync="selectRolePopup">
      <div class="vx-row">
        <vs-select
          placeholder="Select Role"
          class="w-full selectExample m-2"
          label="Role"
          label-placeholder="Role"
          autocomplete
          v-model="role"
          :danger="!!$page.errors.role"
          :danger-text="$page.errors.role != null ? $page.errors.role[0] : ''"
        >
          <vs-select-item
            :key="index"
            :value="item.id"
            :text="item.name"
            v-for="(item, index ) in roles"
          />
        </vs-select>
      </div>
      <inertia-link
        :href="route('admin.sms-manager.to-by-role')"
        method="get"
        :data="{ role_id: role }"
      >
        <vs-button button="submit" color="primary" type="filled">Go</vs-button>
      </inertia-link>
    </vs-popup>
  </layout>
</template>

<script>
import _ from "lodash";
import Layout from "@/Shared/Layout";

export default {
  props: {
    sms_credit: String,
    today_total_sent: Number,
    roles: Array,
    requests: Object,
    sms_logs: Object
  },
  components: {
    Layout
  },
  data() {
    return {
      selectRolePopup: false,
      role: "",
      popup: false,
      editMode: false,
      sms_log: {},
      filters: {
        perPage: this.requests.perPage ? this.requests.perPage : 10,
        search: this.requests.search,
        page: this.sms_logs.pagination.current_page
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
          "admin.sms-manager.index",
          Object.keys(query).length ? query : { remember: "forget" }
        ),
        {
          preserveScroll: true,
          preserveState: true
        }
      );
    },
    destroy(sms_log) {
      this.sms_log = sms_log;
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
        .delete(this.route("admin.sms-manager.logs.destroy", this.sms_log.id), {
          preserveScroll: true,
          preserveState: true
        })
        .then(() => this.$vs.loading.close());
    }
  }
};
</script>
