<template>
  <layout title="Fee Items">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">Fee Items</h2>
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
                title: 'Fees',
                url: route('admin.fees.index')
                },
                {
                title: 'Fee Items',
                active: true
                }
            ]"
      ></vx-breadcrumb>
    </div>
    <vs-card>
      <!-- filters bar -->
      <vs-row vs-type="flex" vs-justify="space-between">
        <vs-col vs-type="flex" vs-lg="6" vs-sm="6" vs-xs="12" class="mb-2">
          <h3>Fee Name: {{ fee.name }}, Total: {{ fee.total }}</h3>
          <!-- <vs-dropdown vs-trigger-click class="cursor-pointer mr-1">
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
          ></vs-input>-->
        </vs-col>
        <vs-col vs-type="flex" vs-justify="flex-end" vs-lg="6" vs-sm="6" vs-xs="12" class="mb-2">
          <inertia-link :href="route('admin.fees.index')">
            <vs-button
              type="filled"
              class="mr-2"
              color="danger"
              icon="icon-arrow-left"
              icon-pack="feather"
            >Back</vs-button>
          </inertia-link>

          <vs-button @click="create" color="primary" type="filled">Add New Fee</vs-button>
        </vs-col>
      </vs-row>

      <vs-collapse id="div-with-loading" accordion type="margin" class="p-0 mt-5 mb-2">
        <vs-row class="header-collapse">
          <vs-col vs-w="3" vs-type="flex" vs-align="center">Sl.</vs-col>
          <vs-col vs-w="3" vs-type="flex" vs-align="center">Name</vs-col>
          <vs-col vs-w="3" vs-type="flex" vs-align="center">Amount</vs-col>
        </vs-row>
        <div v-if="feeItems.length">
          <vs-collapse-item
            icon-pack="feather"
            icon-arrow="icon-arrow-down"
            :key="index"
            v-for="(feeItem, index) in feeItems"
          >
            <div slot="header">
              <vs-row>
                <vs-col
                  vs-lg="3"
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
                >{{ feeItem.name }}</vs-col>
                <vs-col
                  vs-lg="3"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >
                  <vs-chip color="primary">{{ feeItem.amount }}</vs-chip>
                </vs-col>
              </vs-row>
            </div>
            <vs-row vs-type="flex" vs-justify="flex-end">
              <vx-tooltip color="primary" title="Edit" text="Edit fee type info.">
                <vs-button
                  radius
                  color="primary"
                  type="border"
                  icon-pack="feather"
                  icon="icon-edit-2"
                  class="mx-1"
                  @click="edit(feeItem)"
                ></vs-button>
              </vx-tooltip>
              <vx-tooltip color="danger" title="Delete" text="Delete this fee type.">
                <vs-button
                  radius
                  color="danger"
                  type="border"
                  icon-pack="feather"
                  icon="icon-trash-2"
                  class="mx-1"
                  @click="destroy(feeItem)"
                ></vs-button>
              </vx-tooltip>
            </vs-row>
          </vs-collapse-item>
        </div>
        <div v-else class="text-center mt-6">
          <vs-alert color="danger" title="Sorry :(" active="true">No fee type found.</vs-alert>
        </div>
      </vs-collapse>

      <!-- <vs-row>
        <vs-col vs-type="flex" vs-justify="center" class="mt-2 pagi">
          <vs-pagination
            :total="feeItems.pagination.total_pages"
            v-model="filters.page"
            prev-icon="arrow_back"
            next-icon="arrow_forward"
          ></vs-pagination>
        </vs-col>
      </vs-row>-->
    </vs-card>
    <vs-popup
      class="holamundo"
      :title="editMode ? 'Edit Fee Item' : 'Add Fee Item'"
      :active.sync="popup"
    >
      <form @submit.prevent="editMode? update() : store()">
        <vs-input
          icon="icon icon-user"
          icon-pack="feather"
          label-placeholder="Fee Item Name"
          v-model="form.name"
          :danger="!!$page.errors.name"
          :danger-text="$page.errors.name != null ? $page.errors.name[0] : ''"
          class="w-full my-5 no-icon-border"
        />

        <vs-input
          icon="icon icon-user"
          icon-pack="feather"
          label-placeholder="Amount"
          v-model="form.amount"
          :danger="!!$page.errors.amount"
          :danger-text="$page.errors.amount != null ? $page.errors.amount[0] : ''"
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
    fee: Object,
    requests: Object,
    feeItems: Array
  },
  components: {
    Layout
  },
  data() {
    return {
      popup: false,
      editMode: false,
      form: {
        id: "",
        name: "",
        slug: "",
        amount: ""
      }
      //   filters: {
      //     perPage: this.requests.perPage ? this.requests.perPage : 10,
      //     search: this.requests.search,
      //     page: this.feeItems.pagination.current_page
      //   }
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
    "$page.errors"(val) {
      val.name != null || val.amount != null
        ? (this.popup = true)
        : (this.popup = false);
    }
  },
  methods: {
    // filter() {
    //   let query = _.pickBy(this.filters);
    //   this.$inertia.replace(
    //     this.route("admin.fees.items.index", [
    //       this.fee.id,
    //       Object.keys(query).length ? query : { remember: "forget" }
    //     ]),
    //     {
    //       preserveScroll: true,
    //       preserveState: true
    //     }
    //   );
    // },
    create() {
      this.editMode = false;
      this.form.name = "";
      this.form.amount = "";
      this.popup = true;
    },
    store() {
      this.$vs.loading();
      this.$inertia
        .post(
          this.route("admin.fees.items.store", this.fee.id),
          {
            name: this.form.name,
            amount: this.form.amount
          },
          { preserveScroll: true, preserveState: true }
        )
        .then(() => this.$vs.loading.close());
    },
    edit(feeItem) {
      this.$page.errors.name = "";
      this.$page.errors.amount = "";
      this.form = feeItem;
      this.editMode = true;
      this.popup = true;
    },
    update() {
      this.$vs.loading();
      this.$inertia
        .put(
          this.route("admin.fees.items.update", [
            this.form.fee_id,
            this.form.id
          ]),
          {
            name: this.form.name,
            amount: this.form.amount
          },
          { preserveScroll: true, preserveState: true }
        )
        .then(() => this.$vs.loading.close());
    },
    destroy(feeItem) {
      this.form = feeItem;
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
          this.route("admin.fees.items.destroy", [
            this.form.fee_id,
            this.form.id
          ]),
          {
            preserveScroll: true,
            preserveState: true
          }
        )
        .then(() => this.$vs.loading.close());
    }
  }
};
</script>
