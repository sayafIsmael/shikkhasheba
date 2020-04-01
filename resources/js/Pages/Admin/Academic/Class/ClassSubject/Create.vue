<template>
  <layout title="Create">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">Academic Sections</h2>
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
                title: 'Academic Sections',
                url: route('admin.academic.sections.index')
                },
                {
                title: 'Create',
                active: true
                }
            ]"
      ></vx-breadcrumb>
    </div>
    <vs-row vs-w="12">
      <vs-col vs-offset vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card>
          <form @submit.prevent="store">
            <vs-select
              class="mb-3 w-full"
              label="Class"
              v-model="section.academicClass"
              :danger="!!$page.errors.academic_class"
              :danger-text="$page.errors.academic_class != null ? $page.errors.academic_class[0] : ''"
            >
              <vs-select-item
                :key="index"
                :value="academicClass.id"
                :text="academicClass.name"
                v-for="(academicClass,index) in academicClasses"
              />
            </vs-select>
            <div class="vx-row mb-2">
              <div class="vx-col w-full">
                <vs-input
                  class="w-full"
                  v-model="section.name"
                  label-placeholder="Section Name"
                  :danger="!!$page.errors.name"
                  :danger-text="$page.errors.name != null ? $page.errors.name[0] : ''"
                />
              </div>
            </div>

            <div class="vx-row">
              <div class="vx-col w-full">
                <inertia-link :href="route('admin.academic.sections.index')">
                  <vs-button color="warning" type="border" class="mb-2">Back</vs-button>
                </inertia-link>
                <vs-button button="submit" class="mr-3 mb-2">Submit</vs-button>
              </div>
            </div>
          </form>
        </vs-card>
      </vs-col>
    </vs-row>
  </layout>
</template>

<script>
import _ from "lodash";
import Layout from "@/Shared/Layout";

export default {
  components: {
    Layout
  },
  props: {
    academicClasses: Array
  },
  data() {
    return {
      section: {
        academicClass: "",
        name: ""
      }
    };
  },
  methods: {
    store() {
      this.$inertia.post(
        this.route("admin.academic.sections.store"),
        {
          academic_class: this.section.academicClass,
          name: this.section.name
        },
        { preserveScroll: true, preserveState: true }
      );
    }
  }
};
</script>
