<template>
  <layout title="Academic Section">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">
          Routine
          <!-- of section: -->
          <!-- <inertia-link :href="route('student.academic.classes.index')">{{ academicClass.name }}</inertia-link> -->
        </h2>
      </div>

      <!-- BREADCRUMB -->
      <vx-breadcrumb
        :links="
            [
                {
                title: 'Dashboard',
                url: route('student.dashboard')
                },
                {
                title: 'Exam Routine',
                url: route('student.exam-routine.index')
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
        <a :href="route('student.exam-routines.download', {examId, classId})" class="pr-2">
          <vs-button color="primary" type="filled">Print</vs-button>
        </a>
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
    examId: String,
    routines: Array,
    academiClass: Object,
    exam: Object,
    schoolName: String
  },
  components: {
    Layout,
    flatPickr
  },
  data() {
    return {};
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
    update() {}
  }
};
</script>
