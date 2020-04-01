<template>
  <layout title="Session">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">Edit Session</h2>
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
                title: 'Session',
                url: route('admin.sessions.index')
                },
                {
                title: 'Edit',
                active: true
                }
            ]"
      ></vx-breadcrumb>
      <!-- DROPDOWN -->
      <div class="ml-auto md:block hidden cursor-pointer">
        <inertia-link :href="route('admin.sessions.index')">
          <vs-button color="danger" class="mb-2" icon="icon-arrow-left" icon-pack="feather">Back</vs-button>
        </inertia-link>
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col sm:w-1/2">
        <vx-card>
          <form @submit.prevent="store">
            <vs-input
              class="w-full mb-2"
              v-model="form.name"
              label="Name"
              placeholder="Name"
              :danger="!!$page.errors.name"
              :danger-text="$page.errors.name != null ? $page.errors.name[0] : ''"
            />

            <vs-switch class="mb-2" vs-icon-on="check" color="success" v-model="form.is_active">
              <span slot="on">active</span>
              <span slot="off">inactive</span>
            </vs-switch>

            <div class="vx-row">
              <div class="vx-col w-full">
                <vs-button button="submit" class="mr-3 mb-2">Submit</vs-button>
                <vs-button color="warning" type="border" class="mb-2" @click="reset">Reset</vs-button>
              </div>
            </div>
          </form>
        </vx-card>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from "@/Shared/Layout";

export default {
  props: {
    session: Object
  },
  components: {
    Layout
  },
  watch: {
    academicClass: function(val) {
      let selectedClass = this.academicClasses.find(o => o.id == val);
      this.sections = selectedClass.sections;
      this.form.section = null;
    }
  },
  data() {
    return {
      form: {
        name: this.session.name,
        is_active: this.session.is_active
      }
    };
  },
  methods: {
    store() {
      this.$vs.loading();
      this.form.class = this.academicClass;
      this.$inertia
        .put(this.route("admin.sessions.update", this.session.id), this.form, {
          preserveScroll: true,
          preserveState: true
        })
        .then(() => this.$vs.loading.close());
    },
    reset() {
      this.$vs.loading();
      this.$inertia
        .visit(this.route("admin.sessions.edit", this.session.id))
        .then(() => this.$vs.loading.close());
    }
  }
};
</script>
