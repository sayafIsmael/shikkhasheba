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
                title: 'Class Routine',
                url: route('admin.class-routines.index')
                },
                {
                title: 'Create Routine',
                active: true
                }
            ]"
      ></vx-breadcrumb>
    </div>

    <vx-card>
      <form @submit.prevent="editMode? update() : store()">
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
            v-for="(item,index) in section.subjects"
          />
        </vs-select>
        <vs-select
          class="w-full selectExample mb-2"
          label="Day"
          placeholder="Select Day"
          v-model="day"
          :danger="!!$page.errors.day"
          :danger-text="$page.errors.day != null ? $page.errors.day[0] : ''"
        >
          <vs-select-item
            :key="index"
            :value="item"
            :text="item"
            v-for="(item,index) in routineDay"
          />
        </vs-select>

        <vs-select
          class="w-full selectExample mb-2"
          label="Shift"
          v-model="shift"
          placeholder="Select Shift"
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
          v-model="group"
          placeholder="Select Group"
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

        <flat-pickr
          :config="configdateTimePicker"
          v-model="start_time"
          placeholder="Start time"
          class="w-full"
        />
        <span v-if="!!$page.errors.start_time" class="text-danger">{{ $page.errors.start_time[0] }}</span>
        <flat-pickr
          :config="configdateTimePicker"
          v-model="end_time"
          placeholder="End time"
          class="w-full mt-2"
        />
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
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
  props: {
    section: Object,
    classId: String,
    routineDay: Array,
    shifts: Array,
    groups: Array
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
      shift: "",
      group: "",
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
        this.route("admin.class-routines.store"),
        {
          subject: this.subject,
          day: this.day,
          start_time: this.start_time,
          end_time: this.end_time,
          section: this.section.id,
          academic_class_id: this.classId,
          shift: this.shift,
          group: this.group,
        },
        { preserveScroll: true, preserveState: true }
      );
    }
  }
};
</script>
