<template>
  <layout title="Role">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">Roles</h2>
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
                title: 'Roles',
                active: true
                }
            ]"
      ></vx-breadcrumb>
    </div>
    <vs-card>
      <vs-row vs-type="flex" vs-justify="space-between">
        <vs-col vs-type="flex" vs-lg="12" vs-sm="12" vs-xs="12" class="mb-2">
          <vs-input
            v-model="filters.search"
            icon="icon-search"
            icon-pack="feather"
            placeholder="Search"
            class="w-full"
          ></vs-input>
        </vs-col>
        <!-- <vs-col vs-type="flex" vs-justify="flex-end" vs-lg="6" vs-sm="6" vs-xs="12" class="mb-2">
          <vs-button color="primary" type="filled">Add Customer</vs-button>
        </vs-col> -->
      </vs-row>

      <vs-collapse id="div-with-loading" accordion type="margin" class="p-0 mt-5 mb-2">
        <vs-row class="header-collapse">
          <vs-col vs-w="2" vs-type="flex" vs-align="center">Sl.</vs-col>
          <vs-col vs-w="3" vs-type="flex" vs-align="center">Name</vs-col>
          <vs-col vs-w="3" vs-type="flex" vs-align="center">Description</vs-col>
          <vs-col vs-w="2" vs-type="flex" vs-align="center">Users in role</vs-col>
          <vs-col vs-w="2" vs-type="flex" vs-align="center">Permissions</vs-col>
        </vs-row>
        <div v-if="roles.data.length">
          <vs-collapse-item
            icon-pack="feather"
            icon-arrow="icon-arrow-down"
            :key="index"
            v-for="(role, index) in roles.data"
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
                  vs-lg="3"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >
                  <span radius class="customer-icon mr-1" vs-type="flex" vs-align="center">
                    <vs-icon icon-pack="feather" icon="icon-user"></vs-icon>
                  </span>
                  {{ role.name }}
                </vs-col>
                <vs-col
                  vs-lg="3"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >{{ role.description }}</vs-col>
                <vs-col
                  vs-lg="2"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >
                  <vs-chip color="primary">{{ role.users_count }}</vs-chip>
                </vs-col>
                <vs-col
                  vs-lg="2"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >
                  <vs-chip color="success">{{ role.permissions_count }}</vs-chip>
                </vs-col>
              </vs-row>
            </div>
            <vs-row vs-type="flex" vs-justify="flex-end">
              <vx-tooltip
                color="primary"
                title="Edit user info"
                text="Can edit user info clicking here!"
              >
                <inertia-link :href="route('admin.roles.edit',role.id)">
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
              <vx-tooltip
                v-if="role.editable"
                color="danger"
                title="Delete user"
                text="Can delete this user."
              >
                <vs-button
                  radius
                  color="danger"
                  type="border"
                  icon-pack="feather"
                  icon="icon-trash-2"
                  class="mx-1"
                ></vs-button>
              </vx-tooltip>
            </vs-row>
          </vs-collapse-item>
        </div>
        <div v-else class="text-center mt-6">
          <strong>No customer found</strong>
        </div>
      </vs-collapse>

      <vs-row>
        <vs-col vs-type="flex" vs-justify="flex-end" class="mt-2 pagi">
          <vs-pagination
            :total="roles.pagination.total_pages"
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
    roles: Object
  },
  components: {
    Layout
  },
  data() {
    return {
      filters: {
        search: this.requests.search,
        page: this.roles.pagination.current_page
      }
    };
  },
  mounted() {},
  watch: {
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
          "admin.roles.index",
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
