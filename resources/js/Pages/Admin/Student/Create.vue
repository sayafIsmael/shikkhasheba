<template>
  <layout title="Create">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">Add New Parent</h2>
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
                title: 'Parents',
                url: route('admin.parents.index')
                },
                {
                title: 'Create',
                active: true
                }
            ]"
      ></vx-breadcrumb>
      <!-- DROPDOWN -->
      <div class="ml-auto md:block hidden cursor-pointer">
        <inertia-link :href="route('admin.parents.index')">
          <vs-button color="danger" class="mb-2" icon="icon-arrow-left" icon-pack="feather">Back</vs-button>
        </inertia-link>
      </div>
    </div>
    <vx-card>
      <form @submit.prevent="store">
        <div class="vx-row">
          <div class="vx-col sm:w-1/1 w-full mb-2">
            <file-pond
              name="avatar"
              ref="avatar"
              label-idle="Drop your avatar image here or <span class='filepond--label-action'>Browse</span>"
              accepted-file-types="image/jpeg, image/png"
              :files="avatar"
              @addfile="addAvatar"
              @removefile="removeAvatar"
            />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input
              class="w-full mb-2"
              v-model="form.name"
              label-placeholder="Name"
              :danger="!!$page.errors.name"
              :danger-text="$page.errors.name != null ? $page.errors.name[0] : ''"
            />

            <vs-input
              type="email"
              class="w-full mb-2"
              v-model="form.email"
              label-placeholder="Email"
              :danger="!!$page.errors.email"
              :danger-text="$page.errors.email != null ? $page.errors.email[0] : ''"
            />

            <vs-input
              type="password"
              class="w-full mb-2"
              v-model="form.password"
              label-placeholder="Pin Number"
              :danger="!!$page.errors.password"
              :danger-text="$page.errors.password != null ? $page.errors.password[0] : ''"
            />
            <vs-input
              type="password"
              class="w-full mb-2"
              v-model="form.password_confirmation"
              label-placeholder="Confirm Pin Number"
              :danger="!!$page.errors.password_confirmation"
              :danger-text="$page.errors.password_confirmation != null ? $page.errors.password_confirmation[0] : ''"
            />
            
            <vs-input
              type="password"
              class="w-full mb-2"
              v-model="form.password_confirmation"
              label-placeholder="Confirm Password"
              :danger="!!$page.errors.password_confirmation"
              :danger-text="$page.errors.password_confirmation != null ? $page.errors.password_confirmation[0] : ''"
            />

            <vs-select
              class="w-full mb-2"
              label="Select Gender"
              v-model="form.gender"
              :danger="!!$page.errors.gender"
              :danger-text="$page.errors.gender != null ? $page.errors.gender[0] : ''"
            >
              <vs-select-item
                :key="index"
                :value="gender.value"
                :text="gender.label"
                v-for="(gender,index) in genders"
              />
            </vs-select>
            <flat-pickr
              class="w-full mb-2"
              placeholder="Date of Birth"
              v-model="form.date_of_birth"
              :danger="!!$page.errors.date_of_birth"
              :danger-text="$page.errors.date_of_birth != null ? $page.errors.date_of_birth[0] : ''"
            />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input
              type="number"
              class="w-full mb-2"
              v-model="form.contact_no"
              label-placeholder="Contact No"
              :danger="!!$page.errors.contact_no"
              :danger-text="$page.errors.contact_no != null ? $page.errors.contact_no[0] : ''"
            />

            <vs-textarea
              class="w-full mb-2"
              label="Address"
              v-model="form.address"
              :danger="!!$page.errors.address"
              :danger-text="$page.errors.address != null ? $page.errors.address[0] : ''"
            />

            <vs-input
              type="number"
              class="w-full mb-2"
              v-model="form.nid_number"
              label-placeholder="NID Number"
              :danger="!!$page.errors.nid_number"
              :danger-text="$page.errors.nid_number != null ? $page.errors.nid_number[0] : ''"
            />
            <vs-input
              type="number"
              class="w-full mb-2"
              v-model="form.birth_certificate_number"
              label-placeholder="Birth Certificate Number"
              :danger="!!$page.errors.birth_certificate_number"
              :danger-text="$page.errors.birth_certificate_number != null ? $page.errors.birth_certificate_number[0] : ''"
            />

            <vs-input
              class="w-full mb-2"
              v-model="form.position"
              label-placeholder="Position"
              :danger="!!$page.errors.position"
              :danger-text="$page.errors.position != null ? $page.errors.position[0] : ''"
            />

            <vs-input
              type="number"
              class="w-full mb-2"
              v-model="form.yearly_leave"
              label-placeholder="Yearly Leave"
              :danger="!!$page.errors.yearly_leave"
              :danger-text="$page.errors.yearly_leave != null ? $page.errors.yearly_leave[0] : ''"
            />
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
import Layout from "@/Shared/Layout";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
export default {
  components: {
    Layout,
    flatPickr
  },
  data() {
    return {
      avatar: "",
      form: {
        avatar: "",
        name: "",
        email: "",
        parent_id: "",
        password: "",
        password_confirmation: "",
        gender: "",
        date_of_birth: null,
        contact_no: "",
        address: "",
        nid_number: "",
        birth_certificate_number: "",
        position: "",
        yearly_leave: ""
      },
      genders: [
        {
          label: "Male",
          value: "Male"
        },
        {
          label: "Female",
          value: "Female"
        }
      ]
    };
  },
  methods: {
    store() {
      this.$inertia.post(this.route("admin.parents.store"), this.form, {
        preserveScroll: true,
        preserveState: true
      });
    },
    addAvatar() {
      this.form.avatar = this.$refs.avatar.getFile().getFileEncodeDataURL();
    },
    removeAvatar() {
      this.form.avatar = "";
    }
  }
};
</script>
