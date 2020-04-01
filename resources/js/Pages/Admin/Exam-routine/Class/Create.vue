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
                title: 'Create Routine',
                active: true
                }
            ]"
      ></vx-breadcrumb>
    </div>

    <vx-card>
      <form @submit.prevent="store()">
        <vs-select
          class="w-full selectExample mb-2"
          label="Subject"
          placeholder="Select Subject"
          v-model="subject"
          :danger="!!$page.errors.subject"
          :danger-text="$page.errors.subject != null ? $page.errors.subject[0] : ''"
        >
          <vs-select-item
            :key="index"
            :value="item.id"
            :text="item.name"
            v-for="(item,index) in subjects"
          />
        </vs-select>

        <div>
          <label for="form">Date</label>
          <flat-pickr
            class="w-full mb-2"
            placeholder="Select Date"
            v-model="date"
            :danger="!!$page.errors.date"
            :danger-text="$page.errors.date != null ? $page.errors.date[0] : ''"
          />
          <span v-if="!!$page.errors.date" class="text-danger">{{ $page.errors.date[0] }}</span>
        </div>

        <vs-select
          class="w-full selectExample mb-2"
          label="Shift"
          placeholder="Select Shift"
          v-model="shift"
          :danger="!!$page.errors.shift"
          :danger-text="$page.errors.shift != null ? $page.errors.shift[0] : ''"
        >
          <vs-select-item
            :key="index"
            :value="item.id"
            :text="item.name"
            v-for="(item,index) in shifts"
          />
        </vs-select>

        <vs-select
          class="w-full selectExample mb-2"
          label="Group"
          placeholder="Select Group"
          v-model="group"
          :danger="!!$page.errors.group"
          :danger-text="$page.errors.group != null ? $page.errors.group[0] : ''"
        >
          <vs-select-item
            :key="index"
            :value="item.id"
            :text="item.name"
            v-for="(item,index) in groups"
          />
        </vs-select>

        <div>
          <label for="form">Start Time</label>
          <flat-pickr
            :config="configdateTimePicker"
            v-model="start_time"
            placeholder="Start time"
            class="w-full mb-2"
          />
          <span
            v-if="!!$page.errors.start_time"
            class="text-danger"
          >{{ $page.errors.start_time[0] }}</span>
        </div>

        <div>
          <label for="form">End Time</label>
          <flat-pickr
            :config="configdateTimePicker"
            v-model="end_time"
            placeholder="End time"
            class="w-full"
          />
        </div>


        <span v-if="!!$page.errors.end_time" class="text-danger">{{ $page.errors.end_time[0] }}</span>

        <br />
        <vs-button class="mt-2" button="submit" color="primary" type="filled">Save Changes</vs-button>
      </form>
    </vx-card>
  </layout>
</template>

<script>
import _ from "lodash";
import Layout from "@/Shared/Layout";
// date picker
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import Datepicker from "vuejs-datepicker";
import "flatpickr/dist/flatpickr.css";

export default {
  props: {
    section: Object,
    classId: String,
    examId: String,
    subjects: Array,
    shifts: Array,
    groups: Array
  },
  components: {
    Layout,
    flatPickr,
    Datepicker
  },
  data() {
    return {
      editMode: false,
      start_time: null,
      end_time: null,
      subject: null,
      date: null,
      configdateTimePicker: {
        enableTime: true,
        enableSeconds: false,
        noCalendar: true,
        time_24hr: false,
        defaultHour: 12
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
    store() {
      this.$inertia.post(
        this.route("admin.exam-routines.store"),
        {
          subject: this.subject,
          date: this.date,
          start_time: this.start_time,
          end_time: this.end_time,
          academic_class_id: this.classId,
          exam: this.examId,
          shift: this.shift,
          group: this.group,
        },
        { preserveScroll: true, preserveState: true }
      );
    }
  }
};
</script>
