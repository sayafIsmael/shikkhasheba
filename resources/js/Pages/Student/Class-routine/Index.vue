<template>
  <layout title="My routine">
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
                url: route('student.dashboard')
                },
                {
                title: 'My Class Routine',
                url: route('student.class-routine.index')
                },
                {
                title: 'Routine',
                active: true
                }
            ]"
      ></vx-breadcrumb>
    </div>
    <vs-row vs-type="flex" vs-justify="space-between">
      <vs-col vs-type="flex" vs-justify="flex-end" vs-lg="12" vs-sm="12" vs-xs="12" class="mb-2">
        <a :href="route('student.class-routines.download', [this.academiClass.id, this.section.id])" class="pl-2">
          <vs-button color="primary" type="filled">Print</vs-button>
        </a>
      </vs-col>
    </vs-row>
    <div class="text-center p-3">
      <h2>{{schoolName}}</h2>
      <h4>Class : {{academiClass.name}}</h4>
      <h4>Section : {{section.name}}</h4>
    </div>
    <vs-table>
      <vs-tr style="border: 1px solid gray;">
        <vs-td class="text-center bg-primary" style="color: white; height: 96px;">Saturday</vs-td>
        <vs-td
          class="text-center"
          style="border: 1px solid gray;"
          :key="index"
          v-for="(routine, index) in saturday"
        >
          Class : {{academiClass.name}}, Section {{section.name}}
          <br />
          Shift: {{ routine.shift.name }}
          <br />
          Group: {{ routine.group.name }}
          <br />
          {{ routine.start_time }} - {{ routine.end_time }}
          <br />
          <p>
            Sub :
            <span style="font-weight: bold; font-size: 18px;">{{ routine.subject[0].name }}</span>
          </p>
          {{ routine.subject[0].teacher.name }}
        </vs-td>
      </vs-tr>
      <vs-tr style="border: 1px solid gray;">
        <vs-td class="text-center bg-primary" style="color: white; height: 96px;">Sunday</vs-td>
        <vs-td
          class="text-center"
          style="border: 1px solid gray;"
          :key="index"
          v-for="(routine, index) in sunday"
        >
          Shift: {{ routine.shift.name }}
          <br />
          Group: {{ routine.group.name }}
          <br />
          {{ routine.start_time }} - {{ routine.end_time }}
          <br />
          <p>
            Sub :
            <span style="font-weight: bold; font-size: 18px;">{{ routine.subject[0].name }}</span>
          </p>
          {{ routine.subject[0].teacher.name }}
        </vs-td>
      </vs-tr>
      <vs-tr style="border: 1px solid gray;">
        <vs-td class="text-center bg-primary" style="color: white; height: 96px;">Monday</vs-td>
        <vs-td
          class="text-center"
          style="border: 1px solid gray;"
          :key="index"
          v-for="(routine, index) in monday"
        >
          Shift: {{ routine.shift.name }}
          <br />
          Group: {{ routine.group.name }}
          <br />
          {{ routine.start_time }} - {{ routine.end_time }}
          <br />
          <p>
            Sub :
            <span style="font-weight: bold; font-size: 18px;">{{ routine.subject[0].name }}</span>
          </p>
          {{ routine.subject[0].teacher.name }}
        </vs-td>
      </vs-tr>
      <vs-tr style="border: 1px solid gray;">
        <vs-td class="text-center bg-primary" style="color: white; height: 96px;">Tuesday</vs-td>
        <vs-td
          class="text-center"
          style="border: 1px solid gray;"
          :key="index"
          v-for="(routine, index) in tuesday"
        >
          Shift: {{ routine.shift.name }}
          <br />
          Group: {{ routine.group.name }}
          <br />
          {{ routine.start_time }} - {{ routine.end_time }}
          <br />
          <p>
            Sub :
            <span style="font-weight: bold; font-size: 18px;">{{ routine.subject[0].name }}</span>
          </p>
          {{ routine.subject[0].teacher.name }}
        </vs-td>
      </vs-tr>
      <vs-tr style="border: 1px solid gray;">
        <vs-td class="text-center bg-primary" style="color: white; height: 96px;">Wednesday</vs-td>
        <vs-td
          class="text-center"
          style="border: 1px solid gray;"
          :key="index"
          v-for="(routine, index) in wednesday"
        >
          Shift: {{ routine.shift.name }}
          <br />
          Group: {{ routine.group.name }}
          <br />
          {{ routine.start_time }} - {{ routine.end_time }}
          <br />
          <p>
            Sub :
            <span style="font-weight: bold; font-size: 18px;">{{ routine.subject[0].name }}</span>
          </p>
          {{ routine.subject[0].teacher.name }}
        </vs-td>
      </vs-tr>
      <vs-tr style="border: 1px solid gray;">
        <vs-td class="text-center bg-primary" style="color: white; height: 96px;">Thursday</vs-td>
        <vs-td
          class="text-center"
          style="border: 1px solid gray;"
          :key="index"
          v-for="(routine, index) in thursday"
        >
          Shift: {{ routine.shift.name }}
          <br />
          Group: {{ routine.group.name }}
          <br />
          {{ routine.start_time }} - {{ routine.end_time }}
          <br />
          <p>
            Sub :
            <span style="font-weight: bold; font-size: 18px;">{{ routine.subject[0].name }}</span>
          </p>
          {{ routine.subject[0].teacher.name }}
        </vs-td>
      </vs-tr>
      <vs-tr style="border: 1px solid gray;">
        <vs-td class="text-center bg-primary" style="color: white; height: 96px;">Friday</vs-td>
        <vs-td
          class="text-center"
          style="border: 1px solid gray;"
          :key="index"
          v-for="(routine, index) in friday"
        >
          Shift: {{ routine.shift.name }}
          <br />
          Group: {{ routine.group.name }}
          <br />
          {{ routine.start_time }} - {{ routine.end_time }}
          <br />
          <p>
            Sub :
            <span style="font-weight: bold; font-size: 18px;">{{ routine.subject[0].name }}</span>
          </p>
          {{ routine.subject[0].teacher.name }}
        </vs-td>
      </vs-tr>
    </vs-table>
  </layout>
</template>

<script>
import _ from "lodash";
import Layout from "@/Shared/Layout";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
  props: {
    academiClass: Object,
    schoolName: String,
    section: Object,
    saturday: Array,
    sunday: Array,
    monday: Array,
    tuesday: Array,
    wednesday: Array,
    thursday: Array,
    friday: Array
  },
  components: {
    Layout,
    flatPickr
  },
  data() {
    return {};
  },
  watch: {},
  methods: {}
};
</script>
