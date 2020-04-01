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
          <a :href="route('admin.exam-seatplans.download',seatPlan.id)">
            <vs-button color="primary" type="filled">Print</vs-button>
          </a>
        </vs-col>
      </vs-row>

      <div v-if="rollNumbers.length">
        <div class="text-center pb-3">
          <h3>{{ school_name }}</h3>
          <h5>{{ seatPlan.exam.name }} exam</h5>
          <h5>Class : {{ seatPlan.class.name}}</h5>
          <h5>Section : {{ seatPlan.section.name}}</h5>
        </div>
        <vs-table>
          <vs-tr :key="index" v-for="(chunkRollNumber, index) in rollNumbers">
            <vs-td
              :key="i"
              v-for="(rollNumber, i) in chunkRollNumber"
              style="border: 1px solid #ddd;"
            >
              <p class="d-block">Exam: {{ seatPlan.exam.name }}</p>
              <p class="d-block">Class: {{ seatPlan.class.name }}</p>
              <p class="d-block">Section: {{ seatPlan.section.name }}</p>
              <p class="d-block">Roll: {{ rollNumber }}</p>
              <p class="d-block">Section: {{ seatPlan.room_number }}</p>
            </vs-td>
          </vs-tr>
        </vs-table>
      </div>
      <div v-else class="text-center mt-6">
        <vs-alert color="danger" title="Sorry :(" active="true">No data found.</vs-alert>
      </div>
    </vs-card>
  </layout>
</template>

<script>
import _ from "lodash";
import Layout from "@/Shared/Layout";

export default {
  props: {
    rollNumbers: Array,
    seatPlan: Object,
    school_name: String,
  },
  components: {
    Layout
  },
  data() {
    return {};
  },
  mounted() {},
  watch: {},
  methods: {}
};
</script>
