<template>
  <layout title="Role">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">Edit Role and Permissions</h2>
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
                title: 'Role',
                active: true
                }
            ]"
      ></vx-breadcrumb>
      <!-- DROPDOWN -->
      <div class="ml-auto md:block hidden cursor-pointer">
        <inertia-link :href="route('admin.roles.index')">
          <vs-button color="danger" class="mb-2" icon="icon-arrow-left" icon-pack="feather">Back</vs-button>
        </inertia-link>
      </div>
    </div>
    <vx-card>
      <form @submit.prevent="update">
        <div class="vx-row">
          <div class="vx-col sm:w-1/1 w-full mb-2">
            <h3>Editing {{ role.name }} role</h3>
          </div>

          <div class="vx-col sm:w-1/1 w-full mb-2">
            <vs-input
              class="w-full mb-2"
              v-model="form.name"
              label-placeholder="Name"
              :danger="!!$page.errors.name"
              :danger-text="$page.errors.name != null ? $page.errors.name[0] : ''"
              :readonly="!role.editable"
            />
            <vs-textarea
              class="w-full mb-2"
              label="Description"
              v-model="form.description"
              :readonly="!role.editable"
            />
            <span
              v-if="!!$page.errors.description"
              class="text-danger"
            >{{ $page.errors.description[0] }}</span>

            <strong>Select Permissions</strong>

            <vs-button
              color="success"
              class="mb-2"
              icon="icon-check-square"
              icon-pack="feather"
              @click="selectAll()"
            >Select All</vs-button>

            <vs-button
              v-if="this.form.permissions.length"
              color="danger"
              class="mb-2"
              icon="icon-check-circle"
              icon-pack="feather"
              @click="deselectAll()"
            >Deselect All</vs-button>

            <ul class="demo-alignment">
              <li v-for="permission in permissions" :key="permission.id">
                <vs-switch
                  vs-icon-on="check"
                  color="success"
                  v-model="form.permissions"
                  :vs-value="permission.id"
                >
                  <span slot="on">{{ permission.key +'.'+ permission.method }}</span>
                  <span slot="off">{{ permission.key +'.'+ permission.method }}</span>
                </vs-switch>
              </li>
            </ul>
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col w-full">
            <vs-button button="submit" class="mr-3 mb-2">Submit</vs-button>
            <vs-button color="warning" type="border" class="mb-2">Reset</vs-button>
          </div>
        </div>
      </form>
    </vx-card>
  </layout>
</template>

<script>
import vSelect from "vue-select";
import Layout from "@/Shared/Layout";
export default {
  props: {
    permissions: Array,
    role: Object,
    rolePermissions: Array
  },
  components: {
    Layout,
    "v-select": vSelect
  },
  data() {
    return {
      form: {
        name: this.role.name,
        description: this.role.description,
        permissions: this.rolePermissions
      }
    };
  },
  methods: {
    selectAll() {
      this.form.permissions = this.permissions.map(({ id }) => id);
    },
    deselectAll() {
      this.form.permissions = [];
    },
    update() {
      this.$vs.loading();
      this.$inertia
        .put(this.route("admin.roles.update", this.role.id), this.form, {
          preserveScroll: true,
          preserveState: true
        })
        .then(() => this.$vs.loading.close());
    }
  }
};
</script>
