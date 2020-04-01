<template>
  <layout title="Student Attendances">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">Student Attendances</h2>
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
                title: 'Student Attendances',
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
          <!-- <inertia-link :href="route('admin.student-attendances.create')"> -->
          <vs-button color="primary" type="filled" @click="createPopup = true">New Attendance</vs-button>
          <!-- </inertia-link> -->
        </vs-col>
      </vs-row>

      <vs-collapse id="div-with-loading" accordion type="margin" class="p-0 mt-5 mb-2">
        <vs-row class="header-collapse">
          <vs-col vs-w="2" vs-type="flex" vs-align="center">Sl.</vs-col>
          <vs-col vs-w="4" vs-type="flex" vs-align="center">Date</vs-col>
          <vs-col vs-w="2" vs-type="flex" vs-align="center">Present</vs-col>
          <vs-col vs-w="2" vs-type="flex" vs-align="center">Absence</vs-col>
          <vs-col vs-w="2" vs-type="flex" vs-align="center">Total</vs-col>
        </vs-row>
        <div v-if="attendances.data.length">
          <vs-collapse-item
            icon-pack="feather"
            icon-arrow="icon-arrow-down"
            :key="index"
            v-for="(attendance, index) in attendances.data"
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
                  vs-lg="4"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >{{ attendance.date }}</vs-col>

                <vs-col
                  vs-lg="2"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >
                  <vs-chip color="success">{{ attendance.present }}</vs-chip>
                </vs-col>

                <vs-col
                  vs-lg="2"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >
                  <vs-chip color="danger">{{ attendance.absence }}</vs-chip>
                </vs-col>
                <vs-col
                  vs-lg="2"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >
                  <vs-chip color="primary">{{ attendance.total }}</vs-chip>
                </vs-col>
              </vs-row>
            </div>
            <vs-row vs-type="flex" vs-justify="flex-end">
              <vx-tooltip color="primary" title="Edit" text="Edit leave application info.">
                <inertia-link :href="route('admin.student-attendances.edit',attendance.id)">
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
                  @click="destroy(attendance)"
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
            :total="attendances.pagination.total_pages"
            v-model="filters.page"
            prev-icon="arrow_back"
            next-icon="arrow_forward"
          ></vs-pagination>
        </vs-col>
      </vs-row>
    </vs-card>
    <vs-popup title="Select Class and Section" :active.sync="createPopup">
      <form @submit.prevent="submit">
        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-select
              placeholder="Select class"
              class="w-full selectExample mb-2"
              label="Class"
              label-placeholder="Class"
              autocomplete
              v-model="form.class"
              @change="selectClass()"
              :danger="!!$page.errors.class"
              :danger-text="$page.errors.class != null ? $page.errors.class[0] : ''"
            >
              <vs-select-item
                :key="index"
                :value="item.id"
                :text="item.name"
                v-for="(item, index ) in classes"
              />
            </vs-select>
          </div>

          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-select
              placeholder="Select section"
              class="w-full selectExample mb-2"
              label="Section"
              label-placeholder="Section"
              autocomplete
              v-model="form.section"
              @change="selectSection()"
              :danger="!!$page.errors.section"
              :danger-text="$page.errors.section != null ? $page.errors.section[0] : ''"
            >
              <vs-select-item
                :key="index"
                :value="item.id"
                :text="item.name"
                v-for="(item, index ) in sections"
              />
            </vs-select>
          </div>

          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-select
              placeholder="Select group"
              class="w-full selectExample mb-2"
              label="Group"
              autocomplete
              v-model="form.group"
              :danger="!!$page.errors.group"
              :danger-text="$page.errors.group != null ? $page.errors.group[0] : ''"
            >
              <vs-select-item
                :key="index"
                :value="item.id"
                :text="item.name"
                v-for="(item, index ) in groups"
              />
            </vs-select>
          </div>

          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-select
              label="Shift"
              placeholder="Select shift"
              class="w-full selectExample mb-2"
              autocomplete
              v-model="form.shift"
              :danger="!!$page.errors.shift"
              :danger-text="$page.errors.shift != null ? $page.errors.shift[0] : ''"
            >
              <vs-select-item
                :key="index"
                :value="item.id"
                :text="item.name"
                v-for="(item, index ) in shifts"
              />
            </vs-select>
          </div>
        </div>
        <!-- <inertia-link
          :href="route('admin.student-attendances.create',{'class_id':form.class,section_id:form.section})"
        >-->
        <vs-button button="submit" color="primary" type="filled" @click="submit">Go</vs-button>
        <!-- </inertia-link> -->
      </form>
    </vs-popup>
  </layout>
</template>

<script>
import _ from "lodash";
import Layout from "@/Shared/Layout";

export default {
  props: {
    requests: Object,
    attendances: Object,
    classes: Array,
    sections: Array,
    shifts: Array,
    groups: Array,
  },
  components: {
    Layout
  },
  data() {
    return {
      createPopup: false,
      popup: false,
      editMode: false,
      attendance: {},
      filters: {
        perPage: this.requests.perPage ? this.requests.perPage : 10,
        search: this.requests.search,
        page: this.attendances.pagination.current_page
      },
      form: {
        class: this.requests.class_id,
        section: this.requests.section_id,
        group: this.requests.group_id,
        shift: this.requests.shift_id,
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
          "admin.student-attendances.index",
          Object.keys(query).length ? query : { remember: "forget" }
        ),
        {
          preserveScroll: true,
          preserveState: true
        }
      );
    },
    selectClass() {
      this.$vs.loading();
      this.$inertia.replace(
        this.route("admin.student-attendances.index", {
          class_id: this.form.class
        })
      ).then(() => this.$vs.loading.close());
    },
    selectSection() {
      this.$vs.loading();
      this.$inertia.replace(
        this.route("admin.student-attendances.index", {
          class_id: this.form.class,
          section_id: this.form.section
        })
      ).then(() => this.$vs.loading.close());
    },
    submit() {
      this.createPopup = false;
      this.$inertia.replace(
        this.route("admin.student-attendances.create", {
          class_id: this.form.class,
          section_id: this.form.section,
          group_id: this.form.group,
          shift_id: this.form.shift,
        })
      );
    },
    destroy(attendance) {
      this.attendance = attendance;
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
          this.route("admin.student-attendances.destroy", this.attendance.id),
          { preserveScroll: true, preserveState: true }
        )
        .then(() => this.$vs.loading.close());
    }
  }
};
</script>
