<template>
  <layout title="Exam Seat Plans">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">Exam Seat Plans</h2>
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
                title: 'Exam Seat Plans',
                active: true
                }
            ]"
      ></vx-breadcrumb>
    </div>
    <vs-card>
      <!-- filters bar -->
      <vs-row vs-type="flex" vs-justify="space-between">
        <vs-col vs-type="flex" vs-justify="flex-end" vs-lg="12" vs-sm="6" vs-xs="12" class="mb-2">
          <inertia-link :href="route('admin.exam-seat-plans.create')">
            <vs-button color="primary" type="filled">New Seat Plan</vs-button>
          </inertia-link>
        </vs-col>
      </vs-row>

      <vs-collapse id="div-with-loading" accordion type="margin" class="p-0 mt-5 mb-2">
        <vs-row class="header-collapse">
          <vs-col vs-w="1" vs-type="flex" vs-align="center">Sl.</vs-col>
          <vs-col vs-w="2" vs-type="flex" vs-align="center">Exam Name</vs-col>
          <vs-col vs-w="2" vs-type="flex" vs-align="center">Class</vs-col>
          <vs-col vs-w="1" vs-type="flex" vs-align="center">Section</vs-col>
          <vs-col vs-w="1" vs-type="flex" vs-align="center">Shift</vs-col>
          <vs-col vs-w="2" vs-type="flex" vs-align="center">Group</vs-col>
          <vs-col vs-w="1" vs-type="flex" vs-align="center">Roll Start</vs-col>
          <vs-col vs-w="1" vs-type="flex" vs-align="center">Roll End</vs-col>
          <vs-col vs-w="1" vs-type="flex" vs-align="center">Room Number</vs-col>
        </vs-row>
        <div v-if="seatPlans.data.length">
          <vs-collapse-item
            icon-pack="feather"
            icon-arrow="icon-arrow-down"
            :key="index"
            v-for="(seatPlan, index) in seatPlans.data"
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
                >{{ seatPlan.exam.name }}</vs-col>

                <vs-col
                  vs-lg="2"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >{{ seatPlan.class.name }}</vs-col>

                <vs-col
                  vs-lg="1"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >{{ seatPlan.section.name }}</vs-col>

                <vs-col
                  vs-lg="1"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >{{ seatPlan.shift.name }}</vs-col>

                <vs-col
                  vs-lg="2"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >{{ seatPlan.group.name }}</vs-col>

                <vs-col
                  vs-lg="1"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >{{ seatPlan.roll_start }}</vs-col>

                <vs-col
                  vs-lg="1"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >{{ seatPlan.roll_end }}</vs-col>
                 <vs-col
                  vs-lg="1"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >{{ seatPlan.room_number }}</vs-col>
              </vs-row>
            </div>
            <vs-row vs-type="flex" vs-justify="flex-end">
              <vx-tooltip color="primary" title="View" text="View exam seat plan info.">
                <inertia-link :href="route('admin.exam-seat-plans.show',seatPlan.id)">
                  <vs-button
                    radius
                    color="primary"
                    type="border"
                    icon-pack="feather"
                    icon="icon-eye"
                    class="mx-1"
                  ></vs-button>
                </inertia-link>
              </vx-tooltip>
              <vx-tooltip color="primary" title="Edit" text="Edit exam seat plan info.">
                <inertia-link :href="route('admin.exam-seat-plans.edit',seatPlan.id)">
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
              <vx-tooltip color="danger" title="Delete" text="Delete this exam seat plan.">
                <vs-button
                  radius
                  color="danger"
                  type="border"
                  icon-pack="feather"
                  icon="icon-trash-2"
                  class="mx-1"
                  @click="destroy(seatPlan)"
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
            :total="seatPlans.pagination.total_pages"
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
    seatPlans: Object
  },
  components: {
    Layout
  },
  data() {
    return {
      popup: false,
      editMode: false,
      seatPlan: {},
      filters: {
        perPage: this.requests.perPage ? this.requests.perPage : 10,
        search: this.requests.search,
        page: this.seatPlans.pagination.current_page
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
          "admin.exam-seat-plans.index",
          Object.keys(query).length ? query : { remember: "forget" }
        ),
        {
          preserveScroll: true,
          preserveState: true
        }
      );
    },
    destroy(seatPlan) {
      this.seatPlan = seatPlan;
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
        .delete(this.route("admin.exam-seat-plans.destroy", this.seatPlan.id), {
          preserveScroll: true,
          preserveState: true
        })
        .then(() => this.$vs.loading.close());
    }
  }
};
</script>
