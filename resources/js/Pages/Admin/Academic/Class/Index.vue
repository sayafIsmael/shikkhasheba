<template>
  <layout title="Academic Class">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">Academic Classes</h2>
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
                title: 'Academic Classes',
                active: true
                }
            ]"
      ></vx-breadcrumb>
    </div>

    <!-- Academic Class Popup -->
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
        <vs-button @click="create" color="primary" type="filled">Add Class</vs-button>
      </vs-col>
    </vs-row>

    <div v-if="academicClasses.data.length">
      <vs-row vs-type="flex" class="mt-4">
        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          vs-w="3"
          vs-sm="12"
          vs-xs="12"
          :key="index"
          v-for="(academicClass, index) in academicClasses.data"
        >
          <vx-card class="mb-3">
            <vs-row>
              <vs-col vs-type="flex" vs-justify="flex-end">
                <vs-dropdown>
                  <a class="flex items-center" href="#">
                    <feather-icon icon="MoreHorizontalIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                  </a>

                  <vs-dropdown-menu>
                    <inertia-link
                      :href="route('admin.academic.classes.sections.index', {classId: academicClass.id})"
                    >
                      <vs-dropdown-item>Sections</vs-dropdown-item>
                    </inertia-link>
                    <inertia-link
                      :href="route('admin.academic.classes.subjects.index', {classId: academicClass.id})"
                    >
                      <vs-dropdown-item>Subjects</vs-dropdown-item>
                    </inertia-link>
                    <vs-dropdown-item class="text-primary" divider @click="edit(academicClass)">Edit</vs-dropdown-item>
                    <vs-dropdown-item
                      class="text-danger"
                      divider
                      @click="destroy(academicClass)"
                    >Delete</vs-dropdown-item>
                  </vs-dropdown-menu>
                </vs-dropdown>
              </vs-col>
            </vs-row>
            <inertia-link
              :href="route('admin.academic.classes.sections.index', {classId: academicClass.id})"
            >
              <vs-avatar
                class="mx-auto mb-6 block"
                size="80px"
                color="primary"
                :text="academicClass.name"
              />
            </inertia-link>
            <div class="text-center">
              <inertia-link
                :href="route('admin.academic.classes.sections.index', {classId: academicClass.id})"
              >
                <h4>{{ academicClass.name }}</h4>
                <span class="text-grey">Total sections : {{ academicClass.sections_count }}</span>
                <br/>
                <span class="text-grey">Total students : {{ academicClass.student_class_count }}</span>
              </inertia-link>
            </div>
          </vx-card>
        </vs-col>
      </vs-row>
    </div>
    <vs-row class="mt-2" vs-type="flex" v-else>
      <vs-alert color="danger" title="Sorry :(" active="true">No class found.</vs-alert>
    </vs-row>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" class="mt-2 pagi">
        <vs-pagination
          :total="academicClasses.pagination.total_pages"
          v-model="filters.page"
          prev-icon="arrow_back"
          next-icon="arrow_forward"
        ></vs-pagination>
      </vs-col>
    </vs-row>
    <vs-popup class :title="editMode ? 'Edit Class' : 'Add New Class'" :active.sync="classPopup">
      <form @submit.prevent="editMode? update() : store()">
        <vs-input
          icon="icon icon-user"
          icon-pack="feather"
          label-placeholder="Class Name"
          v-model="academicClass.name"
          :danger="!!$page.errors.name"
          :danger-text="$page.errors.name != null ? $page.errors.name[0] : ''"
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
    requests: Object,
    academicClasses: Object
  },
  components: {
    Layout
  },
  data() {
    return {
      classPopup: false,
      editMode: false,
      academicClass: {
        id: "",
        name: "",
        slug: ""
      },
      filters: {
        perPage: this.requests.perPage ? this.requests.perPage : 10,
        search: this.requests.search,
        page: this.academicClasses.pagination.current_page
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
      val.name != null ? (this.classPopup = true) : (this.classPopup = false);
    }
  },
  methods: {
    filter() {
      let query = _.pickBy(this.filters);
      this.$inertia.replace(
        this.route(
          "admin.academic.classes.index",
          Object.keys(query).length ? query : { remember: "forget" }
        ),
        {
          preserveScroll: true,
          preserveState: true
        }
      );
    },
    create() {
      this.editMode = false;
      this.academicClass.name = "";
      this.classPopup = true;
    },
    store() {
      this.$inertia.post(
        this.route("admin.academic.classes.store"),
        {
          name: this.academicClass.name
        },
        { preserveScroll: true, preserveState: true }
      );
    },
    edit(academicClass) {
      this.academicClass = academicClass;
      this.editMode = true;
      this.classPopup = true;
    },
    update() {
      this.$inertia.put(
        this.route("admin.academic.classes.update", this.academicClass.id),
        {
          name: this.academicClass.name
        },
        { preserveScroll: true, preserveState: true }
      );
    },
    destroy(academicClass) {
      this.academicClass = academicClass;
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure? you want to delete this.",
        accept: this.acceptDelete
      });
    },
    acceptDelete() {
      this.$inertia.delete(
        this.route("admin.academic.classes.destroy", this.academicClass.id),
        { preserveScroll: true, preserveState: true }
      );
    }
  }
};
</script>
<style scoped>
/* .vx-card .vx-card__collapsible-content .vx-card__body{
  padding-left: 0px !important;
  padding-right: 0px !important;
} */
</style>