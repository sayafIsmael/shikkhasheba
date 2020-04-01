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
                title: 'Edit Routine',
                active: true
                }
            ]"
      ></vx-breadcrumb>
    </div>

    <vx-card>
      <form @submit.prevent="update">
        <vs-select
          class="w-full selectExample mb-2"
          label="Subject"
          placeholder="Select Subject"
          v-model="form.subject"
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
            v-model="form.date"
            :danger="!!$page.errors.date"
            :danger-text="$page.errors.date != null ? $page.errors.date[0] : ''"
          />
          <span v-if="!!$page.errors.date" class="text-danger">{{ $page.errors.date[0] }}</span>
        </div>

        <vs-select
          class="w-full selectExample mb-2"
          label="Shift"
          placeholder="Select Shift"
          v-model="form.shift"
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
          v-model="form.group"
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
          <label for="form">Start time</label>
          <flat-pickr
            :config="configdateTimePicker"
            v-model="form.start_time"
            placeholder="Start time"
            class="w-full"
          />
          <span
            v-if="!!$page.errors.start_time"
            class="text-danger"
          >{{ $page.errors.start_time[0] }}</span>
        </div>

        <div>
          <label for="form">End time</label>
          <flat-pickr
            :config="configdateTimePicker"
            v-model="form.end_time"
            placeholder="End time"
            class="w-full mt-2"
          />
          <span v-if="!!$page.errors.end_time" class="text-danger">{{ $page.errors.end_time[0] }}</span>
        </div>

        <br />
        <vs-button class="mt-2" button="submit" color="primary" type="filled">Save Changes</vs-button>
      </form>
    </vx-card>
  </layout>
</template>

<script>
import _ from "lodash";
import Layout from "@/Shared/Layout";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import Datepicker from "vuejs-datepicker";

export default {
  props: {
    classId: String,
    routine: Object,
    examId: Array,
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
      form: {
        start_time: this.routine.start_time,
        end_time: this.routine.end_time,
        subject: this.routine.subject.id,
        date: this.routine.date,
        shift: this.routine.shift_id,
        group: this.routine.group_id
      },
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
    update() {
      this.$inertia.put(
        this.route("admin.exam-routines.update", this.routine.id),
        {
          subject: this.form.subject,
          date: this.form.date,
          start_time: this.form.start_time,
          end_time: this.form.end_time,
          academic_class_id: this.routine.academic_class_id,
          exam: this.examId,
          shift: this.form.shift,
          group: this.form.group
        },
        { preserveScroll: true, preserveState: true }
      );
    }
  }
};
</script>
