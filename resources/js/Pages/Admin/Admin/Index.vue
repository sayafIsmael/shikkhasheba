<template>
  <layout title="Admins">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">Admins</h2>
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
                title: 'Admins',
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
      <vs-col vs-type="flex" vs-justify="flex-end" vs-lg="6" vs-sm="6" vs-xs="12" class="mb-2">
        <inertia-link :href="route('admin.admins.create')">
          <vs-button color="primary" type="filled">Add Admin</vs-button>
        </inertia-link>
      </vs-col>
    </vs-row>

    <vs-row class="mt-2" vs-type="flex" v-if="admins.data.length">
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="4"
        vs-sm="12"
        vs-xs="12"
        v-for="(admin,index) in admins.data"
        :key="index"
      >
        <vs-card>
          <vs-row>
            <vs-col vs-type="flex" vs-justify="flex-end">
              <vs-dropdown>
                <a class="flex items-center" href="#">
                  <feather-icon icon="MoreHorizontalIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                </a>
                <vs-dropdown-menu>
                  <inertia-link :href="route('admin.admins.edit',admin.id)">
                    <vs-dropdown-item>Edit</vs-dropdown-item>
                  </inertia-link>

                  <vs-dropdown-item divider class="text-danger" @click="destroy(admin)">Delete</vs-dropdown-item>
                </vs-dropdown-menu>
              </vs-dropdown>
            </vs-col>
            <vs-col vs-type="flex" vs-w="4">
              <vs-avatar class="mx-auto mb-6 block" size="75px" :src="admin.avatar_path" :text="admin.name" />
            </vs-col>
            <vs-col vs-type="flex" vs-w="8">
              <div class="text-left">
                <h6>{{ admin.name }}</h6>
                <p class="text-grey">
                  <vs-icon icon="perm_identity"></vs-icon>
                  {{ admin.role.name }}
                </p>
                <p class="text-grey">
                  <vs-icon icon="account_circle"></vs-icon>
                  {{ admin.user_id }}
                </p>
                <p class="text-grey">
                  <vs-icon icon="phone"></vs-icon>
                  {{ admin.contact_no ? admin.contact_no : 'No Contact' }}
                </p>
                <p class="text-grey">
                  <vs-icon icon="email"></vs-icon>
                  {{ admin.email }}
                </p>
                <p class="text-grey">
                  <vs-icon icon="person"></vs-icon>
                  {{ admin.gender }}
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
          :total="admins.pagination.total_pages"
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
    admins: Object
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
        page: this.admins.pagination.current_page
      },
      admin: []
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
          "admin.admins.index",
          Object.keys(query).length ? query : { remember: "forget" }
        ),
        {
          preserveScroll: true,
          preserveState: true
        }
      );
    },
    destroy(admin) {
      this.admin = admin;
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure? you went to delete this.",
        accept: this.acceptDelete
      });
    },
    acceptDelete() {
      this.$inertia.delete(
        this.route("admin.admins.destroy", this.admin.id),
        { preserveScroll: true, preserveState: true }
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
