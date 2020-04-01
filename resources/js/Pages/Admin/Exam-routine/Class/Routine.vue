<template>
  <layout title="Academic Section">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">
          Routine
          <!-- of section: -->
          <!-- <inertia-link :href="route('admin.academic.classes.index')">{{ academicClass.name }}</inertia-link> -->
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
                title: 'Exam Routine',
                url: route('admin.exam-routines.index', {examId: examId, classId: classId})
                },
                {
                title: 'Routine',
                active: true
                }
            ]"
      ></vx-breadcrumb>
    </div>
    <vs-row vs-type="flex" vs-justify="space-between" class="pb-2">
      <vs-col vs-type="flex" vs-justify="flex-end" vs-lg="12" vs-sm="12" vs-xs="12" class="mb-2">
        <a :href="route('admin.exam-routines.download', {examId, classId})" class="pr-2">
          <vs-button color="primary" type="filled">Print</vs-button>
        </a>
        <inertia-link
          :href="route('admin.exam-routines.create', {examId: examId, classId: classId})"
        >
          <vs-button color="primary" type="filled">Add Routine</vs-button>
        </inertia-link>
      </vs-col>
    </vs-row>

    <vs-card>
      <div class="text-center p-3">
        <h2>{{schoolName}}</h2>
        <h3>{{exam.name}} exam</h3>
        <h4>Class : {{academiClass.name}}</h4>
      </div>
      <vs-collapse id="div-with-loading" accordion type="margin" class="p-0 mt-5 mb-2">
        <vs-row class="header-collapse">
          <vs-col vs-w="1" vs-type="flex" vs-align="center">Sl.</vs-col>
          <vs-col vs-w="2" vs-type="flex" vs-align="center">Date</vs-col>
          <vs-col vs-w="1" vs-type="flex" vs-align="center">Shift</vs-col>
          <vs-col vs-w="2" vs-type="flex" vs-align="center">Group</vs-col>
          <vs-col vs-w="2" vs-type="flex" vs-align="center">Subject Title</vs-col>
          <vs-col vs-w="2" vs-type="flex" vs-align="center">Start Time</vs-col>
          <vs-col vs-w="2" vs-type="flex" vs-align="center">End Time</vs-col>
        </vs-row>
        <div v-if="routines.length">
          <vs-collapse-item
            icon-pack="feather"
            icon-arrow="icon-arrow-down"
            :key="index"
            v-for="(routine, index) in routines"
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
                >{{ routine.date }}</vs-col>
                <vs-col
                  vs-lg="1"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >{{ routine.shift.name }}</vs-col>
                <vs-col
                  vs-lg="2"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >{{ routine.group.name }}</vs-col>
                <vs-col
                  vs-lg="2"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >{{ routine.subject.name }}</vs-col>
                <vs-col
                  vs-lg="2"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >{{ routine.start_time }}</vs-col>
                <vs-col
                  vs-lg="2"
                  vs-sm="6"
                  vs-xs="12"
                  vs-type="flex"
                  vs-align="center"
                  class="text-truncate mb_1"
                >{{ routine.end_time }}</vs-col>
              </vs-row>
            </div>
            <vs-row vs-type="flex" vs-justify="flex-end">
              <vx-tooltip color="primary" title="Edit" text="Edit routine info.">
                <inertia-link :href="route('admin.exam-routines.edit',routine.id)">
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
              <vx-tooltip color="danger" title="Delete" text="Delete this routine.">
                <vs-button
                  radius
                  color="danger"
                  type="border"
                  icon-pack="feather"
                  icon="icon-trash-2"
                  class="mx-1"
                  @click="destroy(routine)"
                ></vs-button>
              </vx-tooltip>
            </vs-row>
          </vs-collapse-item>
        </div>
        <vs-row class="mt-2" vs-type="flex" v-else>
          <vs-alert color="danger" title="Sorry :(" active="true">No routine found.</vs-alert>
        </vs-row>
      </vs-collapse>
    </vs-card>
  </layout>
</template>

<script>
import _ from "lodash";
import Layout from "@/Shared/Layout";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
  props: {
    classId: String,
    academiClass: Object,
    examId: String,
    exam: Object,
    routines: Array,
    schoolName: String
  },
  components: {
    Layout,
    flatPickr
  },
  data() {
    return {
      editMode: false,
      start_time: null,
      end_time: null,
      subject: "",
      day: "",
      routine: "",
      configdateTimePicker: {
        enableTime: true,
        enableSeconds: true,
        noCalendar: true,
        time_24hr: false
      }
    };
  },
  watch: {
    "$page.errors"(val) {
      val.name != null
        ? (this.routinePopup = true)
        : (this.routinePopup = false);
    }
  },
  methods: {
    create() {},
    update() {},
    store() {
      this.$inertia.post(
        this.route("admin.exam-routines.store"),
        {
          subject_id: this.subject,
          day: this.day,
          start_time: this.start_time,
          end_time: this.end_time,
          section_id: this.section.id,
          academic_class_id: this.classId
        },
        { preserveScroll: true, preserveState: true },
        (this.routinePopup = false)
      );
    },
    destroy(routine) {
      this.routine = routine;
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
        this.route("admin.exam-routines.destroy", this.routine.id),
        { preserveScroll: true, preserveState: true }
      );
    }
  }
};
</script>
