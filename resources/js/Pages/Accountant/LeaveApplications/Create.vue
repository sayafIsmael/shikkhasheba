<template>
  <layout title="Leave Appliction">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">New Leave Application</h2>
      </div>

      <!-- BREADCRUMB -->
      <vx-breadcrumb
        :links="
            [
                {
                title: 'Dashboard',
                url: route('accountant.dashboard')
                },
                {
                title: 'Leave Application',
                url: route('accountant.leave-applications.index')
                },
                {
                title: 'Create',
                active: true
                }
            ]"
      ></vx-breadcrumb>
      <!-- DROPDOWN -->
      <div class="ml-auto md:block hidden cursor-pointer">
        <inertia-link :href="route('accountant.leave-applications.index')">
          <vs-button color="danger" class="mb-2" icon="icon-arrow-left" icon-pack="feather">Back</vs-button>
        </inertia-link>
      </div>
    </div>
    <vx-card>
      <form @submit.prevent="store">
        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input
              class="w-full mb-2"
              v-model="form.title"
              label-placeholder="Title"
              :danger="!!$page.errors.title"
              :danger-text="$page.errors.title != null ? $page.errors.title[0] : ''"
            />

            <div id="form">
              <label for="form">Form</label>
              <flat-pickr
                class="w-full mb-2"
                placeholder="Select Date"
                v-model="form.form"
                :danger="!!$page.errors.form"
                :danger-text="$page.errors.form != null ? $page.errors.form[0] : ''"
              />
              <span v-if="!!$page.errors.form" class="text-danger">{{ $page.errors.form[0] }}</span>
            </div>
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-select
              class="w-full mb-2"
              label="Select Type"
              v-model="form.type"
              :danger="!!$page.errors.type"
              :danger-text="$page.errors.type != null ? $page.errors.type[0] : ''"
            >
              <vs-select-item
                :key="index"
                :value="item.id"
                :text="item.name"
                v-for="(item,index) in leaveTypes"
              />
            </vs-select>
            <div id="until">
              <label for="until">Until</label>
              <flat-pickr
                class="w-full mb-2"
                placeholder="Select Date"
                v-model="form.until"
                :danger="!!$page.errors.until"
                :danger-text="$page.errors.until != null ? $page.errors.until[0] : ''"
              />
              <span v-if="!!$page.errors.until" class="text-danger">{{ $page.errors.until[0] }}</span>
            </div>
          </div>
          <div class="vx-col sm:w-1/1 w-full mb-2">
            <div>
              <label for="description">Description</label>
              <span
                v-if="!!$page.errors.description"
                class="text-danger"
              >{{ $page.errors.description[0] }}</span>
              <quill-editor v-model="form.description"></quill-editor>
            </div>
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
// quillEditor
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import { quillEditor } from "vue-quill-editor";

export default {
  props: {
    leaveTypes: Array,
    leaveStatus: Array
  },
  components: {
    Layout,
    flatPickr,
    quillEditor
  },
  data() {
    return {
      form: {
        title: "",
        desceription: "",
        type: "",
        form: "",
        until: ""
      }
    };
  },
  methods: {
    store() {
      this.$vs.loading();
      this.$inertia
        .post(this.route("accountant.leave-applications.store"), this.form, {
          preserveScroll: true,
          preserveState: true
        })
        .then(() => this.$vs.loading.close());
    },
    reset() {
      this.$vs.loading();
      this.$inertia
        .visit(this.route("accountant.leave-applications.create"))
        .then(() => this.$vs.loading.close());
    }
  }
};
</script>
