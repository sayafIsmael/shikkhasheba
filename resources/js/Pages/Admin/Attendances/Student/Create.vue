<template>
  <layout title="Student Attendance">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">Student Attendance</h2>
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
                title: 'Student Attendance',
                url: route('admin.student-attendances.index')
                },
                {
                title: 'Create',
                active: true
                }
            ]"
      ></vx-breadcrumb>
      <!-- DROPDOWN -->
      <div class="ml-auto md:block hidden cursor-pointer">
        <inertia-link :href="route('admin.student-attendances.index')">
          <vs-button color="danger" class="mb-2" icon="icon-arrow-left" icon-pack="feather">Back</vs-button>
        </inertia-link>
      </div>
    </div>
    <vx-card>
      <form @submit.prevent="store">
        <div class="vx-row">
          <div class="vx-col sm:w-1/1 w-full mb-2">
            <div>
              <label for="date">Date</label>
              <flat-pickr class="w-full mb-2" placeholder="Select Date" v-model="form.date" />
              <span v-if="!!$page.errors.date" class="text-danger">{{ $page.errors.date[0] }}</span>
            </div>

            <vs-table :data="students">
              <template slot="header">
                <h3>Students</h3>
              </template>
              <template slot="thead">
                <vs-th>Name</vs-th>
                <vs-th>User ID</vs-th>
                <vs-th>Status</vs-th>
                <vs-th>Remark</vs-th>
              </template>

              <template>
                <vs-tr v-for="(student,index) in form.students" :key="index">
                  <vs-td>
                    <span>{{ student.user.name }}</span>
                    <br />
                  </vs-td>

                  <vs-td>{{ student.user.user_id }}</vs-td>

                  <vs-td>
                    <vs-switch v-model="student.status">
                      <span slot="on">Present</span>
                      <span slot="off">Absence</span>
                    </vs-switch>
                  </vs-td>

                  <vs-td>
                    <vs-textarea v-model="student.remark" />
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col w-full">
            <vs-button button="submit" class="mr-3 mb-2">Submit</vs-button>
            <vs-button color="warning" type="border" class="mb-2" @click="reset">Reset</vs-button>
          </div>
        </div>
      </form>
    </vx-card>
  </layout>
</template>

<script>
import Layout from "@/Shared/Layout";
// date picker
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
  props: {
    academicClass: Object,
    section: Object,
    students: Array
  },
  components: {
    Layout,
    flatPickr
  },
  data() {
    return {
      form: {
        class: this.academicClass.id,
        section: this.section.id,
        date: "",
        students: this.students
      }
    };
  },
  methods: {
    store() {
      this.$vs.loading();
      this.$inertia
        .post(this.route("admin.student-attendances.store"), this.form, {
          preserveScroll: true,
          preserveState: true
        })
        .then(() => this.$vs.loading.close());
    },
    reset() {
      this.$vs.loading();
      this.$inertia
        .visit(this.route("admin.student-attendances.create"))
        .then(() => this.$vs.loading.close());
    }
  }
};
</script>
