<template>
  <layout title="Settings">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">Settings</h2>
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
                title: 'Settings',
                active: true
                }
            ]"
      ></vx-breadcrumb>
    </div>
    <div class="vx-row">
      <div class="vx-col sm:w-3/4">
        <vx-card>
          <form @submit.prevent="store">
            <vs-tabs alignment="fixed">
              <vs-tab label="General">
                <div id="school_logo">
                  <file-pond
                    class="p-2"
                    name="school_logo"
                    ref="school_logo"
                    label-idle="Drop your school logo here or <span class='filepond--label-action'>Browse</span>"
                    accepted-file-types="image/jpeg, image/png"
                    :files="getSchoolLogo"
                    @addfile="addSchoolLogo"
                    @removefile="removeSchoolLogo"
                  />
                  <span
                    v-if="!!$page.errors.school_logo"
                    class="text-danger"
                  >{{ $page.errors.school_logo[0] }}</span>
                </div>
                <vs-input
                  class="w-full mb-2"
                  v-model="form.school_name"
                  label-placeholder="School Name"
                  :danger="!!$page.errors.school_name"
                  :danger-text="$page.errors.school_name != null ? $page.errors.school_name[0] : ''"
                />
                <div class="w-full mb-2">
                  <vs-textarea
                    class="w-full mb-2"
                    label="School Address "
                    v-model="form.school_address"
                  />
                  <span
                    v-if="!!$page.errors.school_address"
                    class="text-danger"
                  >{{ $page.errors.school_address[0] }}</span>
                </div>
              </vs-tab>
              <vs-tab label="SMS Setting">
                <vs-input
                  class="w-full mb-2"
                  v-model="form.muthofun_username"
                  label-placeholder="Muthofun Username"
                  :danger="!!$page.errors.muthofun_username"
                  :danger-text="$page.errors.muthofun_username != null ? $page.errors.muthofun_username[0] : ''"
                />

                <vs-input
                  type="password"
                  class="w-full mb-2"
                  v-model="form.muthofun_password"
                  label-placeholder="Muthofun Password"
                  :danger="!!$page.errors.muthofun_password"
                  :danger-text="$page.errors.muthofun_password != null ? $page.errors.muthofun_username[0] : ''"
                />
              </vs-tab>
              <!-- <vs-tab label="Example">
                <div></div>
              </vs-tab>-->
            </vs-tabs>
            <div class="vx-row">
              <div class="vx-col w-full px-6">
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
    settings: Object
  },
  components: {
    Layout
  },
  data() {
    return {
      getSchoolLogo: this.settings.school_logo,
      form: {
        school_logo: "",
        //   general settings
        school_name: this.settings.school_name,
        school_address: this.settings.school_address,

        // sms settings
        muthofun_username: this.settings.muthofun_username,
        muthofun_password: this.settings.muthofun_password
      }
    };
  },
  methods: {
    store() {
      this.$vs.loading();
      this.$inertia
        .put(this.route("admin.settings.update"), this.form, {
          preserveScroll: true,
          preserveState: true
        })
        .then(() => this.$vs.loading.close());
    },
    reset() {
      this.$vs.loading();
      this.$inertia
        .visit(this.route("admin.settings.index"))
        .then(() => this.$vs.loading.close());
    },
    addSchoolLogo() {
      this.form.school_logo = this.$refs.school_logo
        .getFile()
        .getFileEncodeDataURL();
    },
    removeSchoolLogo() {
      this.form.school_logo = "";
    }
  }
};
</script>

<style>
</style>
