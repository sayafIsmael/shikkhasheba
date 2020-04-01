<template>
  <layout title="Academic Section">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">
          All Sections of class:
          <inertia-link :href="route('admin.academic.classes.index')">{{ academicClass.name }}</inertia-link>
        </h2>
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
                url: route('admin.academic.classes.index')
                },
                {
                title: 'Sections',
                active: true
                }
            ]"
      ></vx-breadcrumb>

      <div class="ml-auto md:block hidden cursor-pointer">
        <inertia-link :href="route('admin.academic.classes.index')">
          <vs-button color="danger" class="mb-2" icon="icon-arrow-left" icon-pack="feather">Back</vs-button>
        </inertia-link>
      </div>
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
        <vs-button @click="create" color="primary" type="filled">Add Section</vs-button>
      </vs-col>
    </vs-row>

    <div v-if="sections.data.length">
      <vs-row vs-type="flex" class="mt-4">
        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          vs-w="3"
          vs-sm="12"
          vs-xs="12"
          :key="index"
          v-for="(section, index) in sections.data"
        >
          <vx-card class="mb-3">
            <vs-row>
              <vs-col vs-type="flex" vs-justify="flex-end">
                <vs-dropdown>
                  <a class="flex items-center" href="#">
                    <feather-icon icon="MoreHorizontalIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                  </a>

                  <vs-dropdown-menu>
                    <vs-dropdown-item class="text-primary" divider @click="edit(section)">Edit</vs-dropdown-item>
                    <vs-dropdown-item class="text-danger" @click="destroy(section)">Delete</vs-dropdown-item>
                  </vs-dropdown-menu>
                </vs-dropdown>
              </vs-col>
            </vs-row>
            <inertia-link :href="route('admin.academic.classes.show', section.id)">
              <vs-avatar
                class="mx-auto mb-6 block"
                size="80px"
                color="success"
                :text="section.name"
              />
            </inertia-link>
            <div class="text-center">
              <inertia-link :href="route('admin.academic.classes.show', section.id)">
                <h4>{{ section.name }}</h4>
              </inertia-link>
              <p class="text-grey">{{section.teacher.name}}</p>
              <p class="text-grey">Room number: {{section.room_number}}</p>
              <p class="text-grey">Total student: {{section.student_class_count}}</p>
            </div>
          </vx-card>
        </vs-col>
      </vs-row>
    </div>
    <vs-row class="mt-2" vs-type="flex" v-else>
      <vs-alert color="danger" title="Sorry :(" active="true">No section found.</vs-alert>
    </vs-row>

    <vs-row>
      <vs-col vs-type="flex" vs-justify="flex-end" class="mt-2 pagi">
        <vs-pagination
          :total="sections.pagination.total_pages"
          v-model="filters.page"
          prev-icon="arrow_back"
          next-icon="arrow_forward"
        ></vs-pagination>
      </vs-col>
    </vs-row>

    <vs-popup
      class="holamundo"
      :title="editMode ? 'Edit Section' : 'Add New Section'"
      :active.sync="sectionPopup"
    >
      <form @submit.prevent="editMode? update() : store()">
        <vs-input
          icon="icon icon-user"
          icon-pack="feather"
          label-placeholder="Section Name"
          v-model="section.name"
          :danger="!!$page.errors.name"
          :danger-text="$page.errors.name != null ? $page.errors.name[0] : ''"
          class="w-full my-5 no-icon-border"
        />
        <vs-input
          icon="icon icon-book"
          icon-pack="feather"
          label-placeholder="Room number"
          type="number"
          v-model="section.room_number"
          :danger="!!$page.errors.room_number"
          :danger-text="$page.errors.room_number != null ? $page.errors.room_number[0] : ''"
          class="w-full my-5 no-icon-border"
        />
        <vs-select
          placeholder="Search teacher"
          class="w-full selectExample mb-2"
          label="Teacher"
          label-placeholder="Teacher"
          autocomplete
          v-model="section.teacher"
        >
          <vs-select-item
            :key="index"
            :value="item.id"
            :text="item.name"
            v-for="(item, index ) in teachers"
          />
        </vs-select>
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
    academicClass: Object,
    requests: Object,
    sections: Object,
    teachers: Array
  },
  components: {
    Layout
  },
  data() {
    return {
      sectionPopup: false,
      // section: [],
      editMode: false,
      section: {
        id: "",
        name: "",
        // academic_class_id: "",
        slug: "",
        room_number: "",
        teacher: ""
      },
      filters: {
        classId: this.academicClass.id,
        perPage: this.requests.perPage ? this.requests.perPage : 10,
        search: this.requests.search,
        page: this.sections.pagination.current_page
      }
    };
  },
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
      val.name != null
        ? (this.sectionPopup = true)
        : (this.sectionPopup = false);
    }
  },
  methods: {
    filter() {
      let query = _.pickBy(this.filters);
      this.$inertia.replace(
        this.route(
          "admin.academic.classes.sections.index",
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
      this.section.name = "";
      this.section.id = "";
      this.section.room_number = "";
      this.section.teacher = "";
      this.sectionPopup = true;
    },
    store() {
      this.$inertia.post(
        this.route(
          "admin.academic.classes.sections.store",
          this.academicClass.id
        ),
        {
          name: this.section.name,
          room_number: this.section.room_number,
          teacher_id: this.section.teacher
        },
        { preserveScroll: true, preserveState: true }
      );
      this.sectionPopup = false;
    },
    edit(section) {
      this.section.id = section.id;
      this.section.name = section.name;
      this.section.room_number = section.room_number;
      this.section.teacher = section.teacher.id;
      this.editMode = true;
      this.sectionPopup = true;
    },
    update() {
      this.$inertia.put(
        this.route("admin.academic.classes.sections.update", [
          this.academicClass.id,
          this.section.id
        ]),
        {
          name: this.section.name,
          room_number: this.section.room_number,
          teacher_id: this.section.teacher
        },
        { preserveScroll: true, preserveState: true }
      );
      this.sectionPopup = false;
    },
    destroy(section) {
      this.section = section;
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
        this.route("admin.academic.classes.sections.destroy", [
          this.academicClass.id,
          this.section.id
        ]),
        { preserveScroll: true, preserveState: true }
      );
    }
  }
};
</script>
