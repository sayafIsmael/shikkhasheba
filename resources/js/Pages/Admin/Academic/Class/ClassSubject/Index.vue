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
                title: 'Subjects',
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
    <!-- <vs-row vs-type="flex" vs-justify="space-between">
        <vs-col vs-type="flex" vs-justify="flex-end" vs-lg="12" vs-sm="12" vs-xs="12" class="mb-2">
          <vs-button @click="create" color="primary" type="filled">Add Section</vs-button>
        </vs-col>
    </vs-row>-->
    <div class="mt-5" v-if="sections.length">
      <vs-tabs alignment="fixed">
        <vs-tab :key="index" v-for="(section, index) in sections" :label="section.name ">
          <div>
            <vs-row class="mt-3" vs-type="flex" vs-justify="flex-end">
              <vs-col
                vs-type="flex"
                vs-justify="flex-end"
                vs-lg="4"
                vs-sm="4"
                vs-xs="12"
                class="mb-2"
              >
                <vs-button @click="createSubject(section)" color="primary" type="filled">Add subject</vs-button>
              </vs-col>
            </vs-row>
            <div v-if="section.subjects.length">
              <vs-row class="mt-4">
                <vs-col
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="3"
                  vs-sm="12"
                  vs-xs="12"
                  :key="index"
                  v-for="(subject, index) in section.subjects"
                >
                  <vx-card class="mb-3">
                    <vs-row>
                      <vs-col vs-type="flex" vs-justify="flex-end">
                        <vs-dropdown>
                          <a class="flex items-center" href="#">
                            <feather-icon icon="MoreHorizontalIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                          </a>

                          <vs-dropdown-menu>
                            <vs-dropdown-item
                              class="text-primary"
                              divider
                              @click="editSubject(subject)"
                            >Edit</vs-dropdown-item>
                            <vs-dropdown-item
                              class="text-danger"
                              divider
                              @click="destroySubject(subject)"
                            >Delete</vs-dropdown-item>
                          </vs-dropdown-menu>
                        </vs-dropdown>
                      </vs-col>
                    </vs-row>
                    <vs-avatar class="mx-auto mb-6 block" size="75px" color="warning" :text="subject.name"/>
                    <div class="text-center">
                      <h4>{{ subject.name }}</h4>
                      <p class="text-grey">{{subject.teacher.name}}</p>
                      <h6 class="text-grey">
                        Full mark:
                        <span>{{ subject.full_mark }}</span>
                      </h6>
                      <h6 class="text-grey">
                        Passing mark:
                        <span>{{ subject.passing_mark }}</span>
                      </h6>
                      <h6 class="text-grey">
                        Subject code:
                        <span>{{ subject.subject_code }}</span>
                      </h6>
                    </div>
                  </vx-card>
                </vs-col>
              </vs-row>
            </div>
            <vs-row class="mt-2" vs-type="flex" v-else>
              <vs-alert color="danger" title="Sorry :(" active="true">No subject found.</vs-alert>
            </vs-row>
          </div>
        </vs-tab>
      </vs-tabs>
    </div>

    <div v-else class="text-center mt-6">
      <vs-alert color="danger" title="Sorry :(" active="true">No section found.</vs-alert>
    </div>

    <vs-popup
      class="holamundo"
      :title="editMode ? 'Edit Subject' : 'Add New Subject in '+this.section.name"
      :active.sync="subjectPopup"
    >
      <form @submit.prevent="editMode ? updateSubject() : storeSubject()">
        <vs-input
          icon="icon icon-book"
          icon-pack="feather"
          label-placeholder="Subject Name"
          v-model="subject.name"
          :danger="!!$page.errors.name"
          :danger-text="$page.errors.name != null ? $page.errors.name[0] : ''"
          class="w-full my-5 no-icon-border"
        />
        <vs-input
          icon="icon icon-book"
          icon-pack="feather"
          label-placeholder="Subject code"
          type="number"
          v-model="subject.subject_code"
          :danger="!!$page.errors.subject_code"
          :danger-text="$page.errors.subject_code != null ? $page.errors.subject_code[0] : ''"
          class="w-full my-5 no-icon-border"
        />
        <vs-input
          icon="icon icon-book"
          icon-pack="feather"
          label-placeholder="Subject full mark"
          type="number"
          v-model="subject.full_mark"
          :danger="!!$page.errors.full_mark"
          :danger-text="$page.errors.full_mark != null ? $page.errors.full_mark[0] : ''"
          class="w-full my-5 no-icon-border"
        />
        <vs-input
          icon="icon icon-book"
          icon-pack="feather"
          label-placeholder="Subject passing mark"
          type="number"
          v-model="subject.passing_mark"
          :danger="!!$page.errors.passing_mark"
          :danger-text="$page.errors.passing_mark != null ? $page.errors.passing_mark[0] : ''"
          class="w-full my-5 no-icon-border"
        />
         <vs-select
          placeholder="Search teacher"
          class="w-full selectExample mb-2"
          label="Teacher"
          label-placeholder="Teacher"
          autocomplete
          v-model="subject.teacher"
          >
          <vs-select-item :key="index" :value="item.id" :text="item.name" v-for="(item, index ) in teachers" />
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
    sections: Array,
    subjects: Object,
    teachers: Array
  },
  components: {
    Layout
  },
  data() {
    return {
      sectionPopup: false,
      subjectPopup: false,
      // section: [],
      editMode: false,
      section: {
        id: "",
        name: "",
        slug: ""
      },
      subject: {
        id: "",
        name: "",
        slug: "",
        subject_code: "",
        full_mark: "",
        passing_mark: "",
        teacher: ""
      },
      filters: {},
    };
  },
  watch: {},
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
    createSubject(section) {
      this.editMode = false;
      this.section = section;
      this.subject.name = "";
      this.subject.id = "";
      this.subject.subject_code = "",
      this.subject.full_mark = "",
      this.subject.passing_mark = "",
      this.subject.teacher = "",
      this.subjectPopup = true;
    },

    storeSubject() {
      console.log(this.subject)
      this.$inertia.post(
        this.route("admin.academic.classes.subjects.store", this.section.id),
        {
          name: this.subject.name,
          classId: this.academicClass.id,
          subject_code: this.subject.subject_code,
          full_mark: this.subject.full_mark,
          passing_mark: this.subject.passing_mark,
          teacher_id: this.subject.teacher
        },
        { preserveScroll: true, preserveState: true }
      );
      this.subjectPopup = false;
    },
    edit(section) {
      this.section = section;
      this.editMode = true;
      this.sectionPopup = true;
    },
    editSubject(subject) {
      this.subject.name = subject.name;
      this.subject.id = subject.id;
      this.subject.teacher = subject.teacher.id;
      this.subject.subject_code = subject.subject_code;
      this.subject.full_mark = subject.full_mark;
      this.subject.passing_mark = subject.passing_mark;
      this.editMode = true;
      this.subjectPopup = true;
    },
    updateSubject() {
      console.log("Teacher", this.subject.teacher);
      this.$inertia.put(
        this.route("admin.academic.classes.subjects.update", this.subject.id),
        {
          name: this.subject.name,
          classId: this.academicClass.id,
          subject_code: this.subject.subject_code,
          full_mark: this.subject.full_mark,
          passing_mark: this.subject.passing_mark,
          teacher_id: this.subject.teacher
        },
        { preserveScroll: true, preserveState: true }
      );
      this.subjectPopup = false;
    },

    destroySubject(subject) {
      this.subject = subject;
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure? you went to delete this.",
        accept: this.acceptDeleteSubject
      });
    },

    acceptDeleteSubject() {
      this.$inertia.delete(
        this.route("admin.academic.classes.subjects.destroy", this.subject.id),
        { preserveScroll: true, preserveState: true }
      );
    }
  }
};
</script>
