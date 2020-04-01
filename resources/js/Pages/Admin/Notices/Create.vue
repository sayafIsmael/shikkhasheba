<template>
  <layout title="Notice">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">New Notice</h2>
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
                title: 'Notice',
                url: route('admin.notices.index')
                },
                {
                title: 'Create',
                active: true
                }
            ]"
      ></vx-breadcrumb>
      <!-- DROPDOWN -->
      <div class="ml-auto md:block hidden cursor-pointer">
        <inertia-link :href="route('admin.notices.index')">
          <vs-button color="danger" class="mb-2" icon="icon-arrow-left" icon-pack="feather">Back</vs-button>
        </inertia-link>
      </div>
    </div>
    <vx-card>
      <form @submit.prevent="store">
        <div class="vx-row">
          <div class="vx-col sm:w-1/1 w-full mb-2">
            <vs-select
              placeholder="Select User Types"
              class="w-full selectExample mb-2"
              label="User Types"
              label-placeholder="User Types"
              autocomplete
              multiple
              v-model="form.user_types"
              :danger="!!$page.errors.user_types"
              :danger-text="$page.errors.user_types != null ? $page.errors.user_types[0] : ''"
            >
              <vs-select-item
                :key="index"
                :value="item.id"
                :text="item.name"
                v-for="(item, index ) in roles"
              />
            </vs-select>
          </div>

          <div class="vx-col sm:w-1/1 w-full mb-2">
            <vs-input
              class="w-full mb-2"
              v-model="form.heading"
              label-placeholder="Heading"
              :danger="!!$page.errors.heading"
              :danger-text="$page.errors.heading != null ? $page.errors.heading[0] : ''"
            />

            <div>
              <label for="content">Content</label>
              <span v-if="!!$page.errors.content" class="text-danger">{{ $page.errors.content[0] }}</span>
              <quill-editor v-model="form.content"></quill-editor>
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
// quillEditor
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import { quillEditor } from "vue-quill-editor";

export default {
  props: {
    roles: Array
  },
  components: {
    Layout,
    quillEditor
  },
  data() {
    return {
      form: {
        user_types: [],
        heading: "",
        content: ""
      }
    };
  },
  methods: {
    store() {
      this.$vs.loading();
      this.$inertia
        .post(this.route("admin.notices.store"), this.form, {
          preserveScroll: true,
          preserveState: true
        })
        .then(() => this.$vs.loading.close());
    },
    reset() {
      this.$inertia.visit(this.route("admin.notices.create"));
    }
  }
};
</script>
