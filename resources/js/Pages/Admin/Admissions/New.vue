<template>
  <layout title="Student Admission">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">Student Admission</h2>
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
                title: 'Admissions',
                url: route('admin.admissions.index')
                },
                {
                title: 'New',
                active: true
                }
            ]"
      ></vx-breadcrumb>
      <!-- DROPDOWN -->
      <div class="ml-auto md:block hidden cursor-pointer">
        <inertia-link :href="route('admin.admissions.index')">
          <vs-button color="danger" class="mb-2" icon="icon-arrow-left" icon-pack="feather">Back</vs-button>
        </inertia-link>
      </div>
    </div>
    <vx-card>
      <form @submit.prevent="store">
        <div class="vx-row">
          <div class="vx-col sm:w-1/1 w-full mb-2">
            <h3>Student Details</h3>
          </div>

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
            <span v-if="!!$page.errors.avatar" class="text-danger">{{ $page.errors.avatar[0] }}</span>
          </div>

          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-select
              class="w-full selectExample mb-2"
              label="Class *"
              placeholder="Select class"
              autocomplete
              v-model="form.class"
              @change="selectClass()"
              :danger="!!$page.errors.class"
              :danger-text="$page.errors.class != null ? $page.errors.class[0] : ''"
            >
              <vs-select-item
                :key="index"
                :value="item.id"
                :text="item.name"
                v-for="(item, index ) in classes"
              />
            </vs-select>
          </div>

          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-select
              class="w-full selectExample mb-2"
              label="Section *"
              placeholder="Select section"
              autocomplete
              v-model="form.section"
              :danger="!!$page.errors.section"
              :danger-text="$page.errors.section != null ? $page.errors.section[0] : ''"
            >
              <vs-select-item
                :key="index"
                :value="item.id"
                :text="item.name"
                v-for="(item, index ) in sections"
              />
            </vs-select>
          </div>

          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-select
              class="w-full selectExample mb-2"
              label="Shift *"
              placeholder="Select Shift"
              v-model="form.shift"
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
          </div>

          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-select
              class="w-full selectExample mb-2"
              label="Group *"
              placeholder="Select Group"
              v-model="form.group"
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
          </div>

          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input
              class="w-full mb-2"
              v-model="form.name"
              label-placeholder="Name *"
              :danger="!!$page.errors.name"
              :danger-text="$page.errors.name != null ? $page.errors.name[0] : ''"
            />

            <vs-input
              type="email"
              class="w-full mb-2"
              v-model="form.email"
              label-placeholder="Email *"
              :danger="!!$page.errors.email"
              :danger-text="$page.errors.email != null ? $page.errors.email[0] : ''"
            />

            <vs-input
              type="number"
              class="w-full mb-2"
              v-model="form.roll_no"
              label-placeholder="Roll No *"
              :danger="!!$page.errors.roll_no"
              :danger-text="$page.errors.roll_no != null ? $page.errors.roll_no[0] : ''"
            />

            <vs-input
              type="number"
              class="w-full mb-2"
              v-model="form.student_id"
              label-placeholder="Student ID *"
              :danger="!!$page.errors.student_id"
              :danger-text="$page.errors.student_id != null ? $page.errors.student_id[0] : ''"
            />

            <vs-input
              type="password"
              class="w-full mb-2"
              v-model="form.password"
              label-placeholder="Pin Number *"
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
            <flat-pickr
              class="w-full mb-2"
              placeholder="Date of Birth *"
              v-model="form.date_of_birth"
              :danger="!!$page.errors.date_of_birth"
              :danger-text="$page.errors.date_of_birth != null ? $page.errors.date_of_birth[0] : ''"
            />
            <span
              v-if="!!$page.errors.date_of_birth"
              class="text-danger"
            >{{ $page.errors.date_of_birth[0] }}</span>
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-select
              class="w-full mb-2"
              label="Gender *"
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

            <vs-input
              type="number"
              class="w-full mb-2"
              v-model="form.contact_no"
              label-placeholder="Contact No *"
              :danger="!!$page.errors.contact_no"
              :danger-text="$page.errors.contact_no != null ? $page.errors.contact_no[0] : ''"
            />
            <vs-input
              type="number"
              class="w-full mb-2"
              v-model="form.emergency_no"
              label-placeholder="Emergency No *"
              :danger="!!$page.errors.emergency_no"
              :danger-text="$page.errors.emergency_no != null ? $page.errors.emergency_no[0] : ''"
            />

            <vs-textarea class="w-full mb-2" label="Address *" v-model="form.address" />
            <span v-if="!!$page.errors.address" class="text-danger">{{ $page.errors.address[0] }}</span>

            <vs-input
              type="number"
              class="w-full mb-2"
              v-model="form.birth_certificate_number"
              label-placeholder="Birth Certificate Number *"
              :danger="!!$page.errors.birth_certificate_number"
              :danger-text="$page.errors.birth_certificate_number != null ? $page.errors.birth_certificate_number[0] : ''"
            />

            <!-- admission fee -->

            <vs-select
              class="w-full mb-2"
              label="Select Fee *"
              v-model="form.fee"
              :danger="!!$page.errors.fee"
              :danger-text="$page.errors.fee != null ? $page.errors.fee[0] : ''"
            >
              <vs-select-item
                :key="index"
                :value="fee.id"
                :text="fee.name+ ' - ' +fee.total+ ' .tk'"
                v-for="(fee,index) in fees"
              />
            </vs-select>
          </div>
          <div class="vx-col sm:w-1/1 w-full mb-2">
            <vs-textarea class="w-full mb-2" label="Note " v-model="form.note" />
            <span v-if="!!$page.errors.note" class="text-danger">{{ $page.errors.note[0] }}</span>
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-1/1 w-full mb-2">
            <h3>Parent Details</h3>
          </div>
          <div class="vx-col sm:w-1/1 w-full mb-2">
            <label>If you want to add a new parent, mark this option</label>
            <vs-switch class="mb-2" v-model="form.new_parent">
              <span slot="on">Add new parent</span>
              <span slot="off">Select parent</span>
            </vs-switch>
          </div>
          <div class="vx-col sm:w-1/1 w-full mb-2" v-if="!form.new_parent">
            <vs-select
              class="w-full mb-2"
              placeholder="Select parent"
              label="Parent *"
              autocomplete
              v-model="form.parent"
              :danger="!!$page.errors.parent"
              :danger-text="$page.errors.parent != null ? $page.errors.parent[0] : ''"
            >
              <vs-select-item
                :key="index"
                :value="item.id"
                :text="item.name"
                v-for="(item, index ) in parents"
              />
            </vs-select>
          </div>
        </div>
        <div class="vx-row" v-if="form.new_parent">
          <div class="vx-col sm:w-1/1 w-full mb-2">
            <file-pond
              name="avatar"
              ref="parentAvatar"
              label-idle="Drop your avatar image here or <span class='filepond--label-action'>Browse</span>"
              accepted-file-types="image/jpeg, image/png"
              :files="parent_avatar"
              @addfile="addParentAvatar"
              @removefile="removeParentAvatar"
            />
            <span
              v-if="!!$page.errors.parent_avatar"
              class="text-danger"
            >{{ $page.errors.parent_avatar[0] }}</span>
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input
              class="w-full mb-2"
              v-model="form.parent_name"
              label-placeholder="Name *"
              :danger="!!$page.errors.parent_name"
              :danger-text="$page.errors.parent_name != null ? $page.errors.parent_name[0] : ''"
            />

            <vs-input
              type="email"
              class="w-full mb-2"
              v-model="form.parent_email"
              label-placeholder="Email *"
              :danger="!!$page.errors.parent_email"
              :danger-text="$page.errors.parent_email != null ? $page.errors.parent_email[0] : ''"
            />

            <vs-input
              type="text"
              class="w-full mb-2"
              v-model="form.parent_id"
              label-placeholder="Parent ID *"
              :danger="!!$page.errors.parent_id"
              :danger-text="$page.errors.parent_id != null ? $page.errors.parent_id[0] : ''"
            />

            <vs-input
              type="password"
              class="w-full mb-2"
              v-model="form.parent_password"
              label-placeholder="Pin Number *"
              :danger="!!$page.errors.parent_password"
              :danger-text="$page.errors.parent_password != null ? $page.errors.parent_password[0] : ''"
            />
            <vs-input
              type="password"
              class="w-full mb-2"
              v-model="form.parent_password_confirmation"
              label-placeholder="Confirm Pin Number"
              :danger="!!$page.errors.parent_password_confirmation"
              :danger-text="$page.errors.parent_password_confirmation != null ? $page.errors.parent_password_confirmation[0] : ''"
            />

            <flat-pickr
              class="w-full mb-2"
              placeholder="Date of Birth *"
              v-model="form.parent_date_of_birth"
            />
            <span
              v-if="!!$page.errors.parent_date_of_birth"
              class="text-danger"
            >{{ $page.errors.parent_date_of_birth[0] }}</span>
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-select
              class="w-full mb-2"
              label="Select Gender *"
              v-model="form.parent_gender"
              :danger="!!$page.errors.parent_gender"
              :danger-text="$page.errors.parent_gender != null ? $page.errors.parent_gender[0] : ''"
            >
              <vs-select-item
                :key="index"
                :value="gender.value"
                :text="gender.label"
                v-for="(gender,index) in genders"
              />
            </vs-select>

            <vs-input
              type="number"
              class="w-full mb-2"
              v-model="form.parent_contact_no"
              label-placeholder="Contact No *"
              :danger="!!$page.errors.parent_contact_no"
              :danger-text="$page.errors.parent_contact_no != null ? $page.errors.parent_contact_no[0] : ''"
            />

            <vs-textarea class="w-full mb-2" label="Address *" v-model="form.parent_address" />
            <span
              v-if="!!$page.errors.parent_address"
              class="text-danger"
            >{{ $page.errors.parent_address[0] }}</span>

            <vs-input
              type="number"
              class="w-full mb-2"
              v-model="form.parent_nid_number"
              label-placeholder="NID Number *"
              :danger="!!$page.errors.parent_nid_number"
              :danger-text="$page.errors.parent_nid_number != null ? $page.errors.parent_nid_number[0] : ''"
            />
            <vs-input
              type="number"
              class="w-full mb-2"
              v-model="form.parent_birth_certificate_number"
              label-placeholder="Birth Certificate Number *"
              :danger="!!$page.errors.parent_birth_certificate_number"
              :danger-text="$page.errors.parent_birth_certificate_number != null ? $page.errors.parent_birth_certificate_number[0] : ''"
            />
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col w-full pb-2">
            <strong>All * fields are required.</strong>
          </div>
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
  props: {
    requests: Object,
    classes: Array,
    sections: Array,
    parents: Array,
    fees: Array,
    shifts: Array,
    groups: Array
  },
  components: {
    Layout,
    flatPickr
  },
  data() {
    return {
      avatar: "",
      parent_avatar: "",
      form: {
        class: this.requests.class_id,
        section: "",
        shift: "",
        group: "",
        avatar: "",
        name: "",
        email: "",
        roll_no: "",
        student_id: "",
        password: "",
        password_confirmation: "",
        gender: "",
        date_of_birth: null,
        contact_no: "",
        emergency_no: "",
        address: "",
        birth_certificate_number: "",
        fee: "",
        note: "",
        // parent info
        new_parent: false,
        parent: "",
        parent_avatar: "",
        parent_name: "",
        parent_email: "",
        parent_id: "",
        parent_password: "",
        parent_password_confirmation: "",
        parent_gender: "",
        parent_date_of_birth: null,
        parent_contact_no: "",
        parent_address: "",
        parent_nid_number: "",
        parent_birth_certificate_number: ""
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
    selectClass() {
      this.$inertia.replace(
        this.route("admin.admissions.new", { class_id: this.form.class })
      );
    },
    store() {
      this.$inertia.post(this.route("admin.admissions.store"), this.form, {
        preserveScroll: true,
        preserveState: true
      });
    },
    addAvatar() {
      this.form.avatar = this.$refs.avatar.getFile().getFileEncodeDataURL();
    },
    removeAvatar() {
      this.form.avatar = "";
    },
    addParentAvatar() {
      this.form.parent_avatar = this.$refs.parentAvatar
        .getFile()
        .getFileEncodeDataURL();
    },
    removeParentAvatar() {
      this.form.parent_avatar = "";
    }
  }
};
</script>
