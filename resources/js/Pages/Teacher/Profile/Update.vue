<template>
  <layout title="Profile">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">Update Profile</h2>
      </div>

      <!-- BREADCRUMB -->
      <vx-breadcrumb
        :links="
            [
                {
                title: 'Dashboard',
                url: route('teacher.dashboard')
                },
                {
                title: 'Profile',
                url: route('teacher.profile.index')
                },
                {
                title: 'Update',
                active: true
                }
            ]"
      ></vx-breadcrumb>
      <!-- DROPDOWN -->
      <div class="ml-auto md:block hidden cursor-pointer">
        <inertia-link :href="route('teacher.profile.index')">
          <vs-button color="danger" class="mb-2" icon="icon-arrow-left" icon-pack="feather">Back</vs-button>
        </inertia-link>
      </div>
    </div>
    <vx-card>
      <form @submit.prevent="update">
        <div class="vx-row">
          <div class="vx-col sm:w-1/1 w-full mb-2">
            <file-pond
              name="avatar"
              ref="avatar"
              label-idle="Drop your avatar image here or <span class='filepond--label-action'>Browse</span>"
              accepted-file-types="image/jpeg, image/png"
              :files="getAvatar"
              @addfile="addAvatar"
              @removefile="removeAvatar"
            />
            <span v-if="!!$page.errors.avatar" class="text-danger">{{ $page.errors.avatar[0] }}</span>
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
            <label>Date Of Birth</label>
            <flat-pickr
              class="w-full mb-2"
              placeholder="Date of Birth"
              v-model="form.date_of_birth"
            />
            <span
              v-if="!!$page.errors.date_of_birth"
              class="text-danger"
            >{{ $page.errors.date_of_birth[0] }}</span>
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

            <vs-textarea class="w-full mb-2" label="Address" v-model="form.address" />
            <span v-if="!!$page.errors.address" class="text-danger">{{ $page.errors.address[0] }}</span>

            <vs-input
              type="number"
              class="w-full mb-2"
              v-model="form.nid_number"
              label-placeholder="NID Number"
              :danger="!!$page.errors.nid_number"
              :danger-text="$page.errors.nid_number != null ? $page.errors.nid_number[0] : ''"
            />

          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col w-full">
            <vs-button button="submit" class="mr-3 mb-2">Update</vs-button>
            <vs-button color="warning" type="border" class="mb-2" @click="reset()">Reset</vs-button>
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
  props: {
    teacher: Object
  },
  components: {
    Layout,
    flatPickr
  },
  data() {
    return {
      getAvatar: this.teacher.avatar_path,
      form: {
        avatar: "",
        name: this.teacher.name,
        email: this.teacher.email,
        gender: this.teacher.gender,
        date_of_birth: this.teacher.dob,
        contact_no: this.teacher.contact_no,
        address: this.teacher.address,
        nid_number: this.teacher.nid_number,
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
    update() {
      this.$inertia.put(this.route("teacher.profile.update"), this.form, {
        preserveScroll: true,
        preserveState: true
      });
    },
    reset() {
      this.$inertia.visit(this.route("teacher.profile.edit"));
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
