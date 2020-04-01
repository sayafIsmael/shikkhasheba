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
                title: 'Routine',
                active: true
                }
            ]"
      ></vx-breadcrumb>
    </div>
    <vs-row vs-type="flex" vs-justify="space-between">
      <vs-col vs-type="flex" vs-justify="flex-end" vs-lg="12" vs-sm="12" vs-xs="12" class="mb-2">
        <inertia-link
          :href="route('admin.class-routines.create', {classId: this.classId, sectionId: this.section.id})"
        >
          <vs-button color="primary" type="filled">Add Routine</vs-button>
        </inertia-link>
        <a :href="route('admin.class-routines.section.download', [this.classId, this.section.id])" class="pl-2">
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
          <vs-row>
            <vs-col vs-type="flex" vs-justify="flex-end">
              <vs-dropdown>
                <a class="flex items-center" href="#">
                  <feather-icon icon="MoreHorizontalIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                </a>

                <vs-dropdown-menu>
                  <inertia-link :href="route('admin.class-routines.edit', routine.id)">
                    <vs-dropdown-item>Edit</vs-dropdown-item>
                  </inertia-link>

                  <vs-dropdown-item class="text-danger" @click="destroy(routine)">Delete</vs-dropdown-item>
                </vs-dropdown-menu>
              </vs-dropdown>
            </vs-col>
          </vs-row>
          Shift: {{ routine.shift.name }}
          <br />
          Group: {{ routine.group.name }}
          <br />
          {{ routine.start_time }} - {{ routine.end_time }}
          <br />
          <span style="font-weight: bold; font-size: 18px;">{{ routine.subject[0].name }}</span>
          <br />
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
          <vs-row>
            <vs-col vs-type="flex" vs-justify="flex-end">
              <vs-dropdown>
                <a class="flex items-center" href="#">
                  <feather-icon icon="MoreHorizontalIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                </a>

                <vs-dropdown-menu>
                  <inertia-link :href="route('admin.class-routines.edit', routine.id)">
                    <vs-dropdown-item>Edit</vs-dropdown-item>
                  </inertia-link>

                  <vs-dropdown-item class="text-danger" @click="destroy(routine)">Delete</vs-dropdown-item>
                </vs-dropdown-menu>
              </vs-dropdown>
            </vs-col>
          </vs-row>
          Shift: {{ routine.shift.name }}
          <br />
          Group: {{ routine.group.name }}
          <br />
          {{ routine.start_time }} - {{ routine.end_time }}
          <br />
          <span style="font-weight: bold; font-size: 18px;">{{ routine.subject[0].name }}</span>
          <br />
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
          <vs-row>
            <vs-col vs-type="flex" vs-justify="flex-end">
              <vs-dropdown>
                <a class="flex items-center" href="#">
                  <feather-icon icon="MoreHorizontalIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                </a>

                <vs-dropdown-menu>
                  <inertia-link :href="route('admin.class-routines.edit', routine.id)">
                    <vs-dropdown-item>Edit</vs-dropdown-item>
                  </inertia-link>

                  <vs-dropdown-item class="text-danger" @click="destroy(routine)">Delete</vs-dropdown-item>
                </vs-dropdown-menu>
              </vs-dropdown>
            </vs-col>
          </vs-row>
          Shift: {{ routine.shift.name }}
          <br />
          Group: {{ routine.group.name }}
          <br />
          {{ routine.start_time }} - {{ routine.end_time }}
          <br />
          <span style="font-weight: bold; font-size: 18px;">{{ routine.subject[0].name }}</span>
          <br />
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
          <vs-row>
            <vs-col vs-type="flex" vs-justify="flex-end">
              <vs-dropdown>
                <a class="flex items-center" href="#">
                  <feather-icon icon="MoreHorizontalIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                </a>

                <vs-dropdown-menu>
                  <inertia-link :href="route('admin.class-routines.edit', routine.id)">
                    <vs-dropdown-item>Edit</vs-dropdown-item>
                  </inertia-link>

                  <vs-dropdown-item class="text-danger" @click="destroy(routine)">Delete</vs-dropdown-item>
                </vs-dropdown-menu>
              </vs-dropdown>
            </vs-col>
          </vs-row>
          Shift: {{ routine.shift.name }}
          <br />
          Group: {{ routine.group.name }}
          <br />
          {{ routine.start_time }} - {{ routine.end_time }}
          <br />
          <span style="font-weight: bold; font-size: 18px;">{{ routine.subject[0].name }}</span>
          <br />
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
          <vs-row>
            <vs-col vs-type="flex" vs-justify="flex-end">
              <vs-dropdown>
                <a class="flex items-center" href="#">
                  <feather-icon icon="MoreHorizontalIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                </a>

                <vs-dropdown-menu>
                  <inertia-link :href="route('admin.class-routines.edit', routine.id)">
                    <vs-dropdown-item>Edit</vs-dropdown-item>
                  </inertia-link>

                  <vs-dropdown-item class="text-danger" @click="destroy(routine)">Delete</vs-dropdown-item>
                </vs-dropdown-menu>
              </vs-dropdown>
            </vs-col>
          </vs-row>
          Shift: {{ routine.shift.name }}
          <br />
          Group: {{ routine.group.name }}
          <br />
          {{ routine.start_time }} - {{ routine.end_time }}
          <br />
          <span style="font-weight: bold; font-size: 18px;">{{ routine.subject[0].name }}</span>
          <br />
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
          <vs-row>
            <vs-col vs-type="flex" vs-justify="flex-end">
              <vs-dropdown>
                <a class="flex items-center" href="#">
                  <feather-icon icon="MoreHorizontalIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                </a>

                <vs-dropdown-menu>
                  <inertia-link :href="route('admin.class-routines.edit', routine.id)">
                    <vs-dropdown-item>Edit</vs-dropdown-item>
                  </inertia-link>

                  <vs-dropdown-item class="text-danger" @click="destroy(routine)">Delete</vs-dropdown-item>
                </vs-dropdown-menu>
              </vs-dropdown>
            </vs-col>
          </vs-row>
          Shift: {{ routine.shift.name }}
          <br />
          Group: {{ routine.group.name }}
          <br />
          {{ routine.start_time }} - {{ routine.end_time }}
          <br />
          <span style="font-weight: bold; font-size: 18px;">{{ routine.subject[0].name }}</span>
          <br />
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
          <vs-row>
            <vs-col vs-type="flex" vs-justify="flex-end">
              <vs-dropdown>
                <a class="flex items-center" href="#">
                  <feather-icon icon="MoreHorizontalIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                </a>

                <vs-dropdown-menu>
                  <inertia-link :href="route('admin.class-routines.edit', routine.id)">
                    <vs-dropdown-item>Edit</vs-dropdown-item>
                  </inertia-link>

                  <vs-dropdown-item class="text-danger" @click="destroy(routine)">Delete</vs-dropdown-item>
                </vs-dropdown-menu>
              </vs-dropdown>
            </vs-col>
          </vs-row>
          Shift: {{ routine.shift.name }}
          <br />
          Group: {{ routine.group.name }}
          <br />
          {{ routine.start_time }} - {{ routine.end_time }}
          <br />
          <span style="font-weight: bold; font-size: 18px;">{{ routine.subject[0].name }}</span>
          <br />
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
    section: Object,
    classId: String,
    academiClass: Object,
    schoolName: String,
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
        this.route("admin.class-routines.store"),
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
        this.route("admin.class-routines.destroy", this.routine.id),
        { preserveScroll: true, preserveState: true }
      );
    }
  }
};
</script>
