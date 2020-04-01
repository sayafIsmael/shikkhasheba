<template>
  <layout title="Send SMS">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">Send SMS</h2>
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
                    title: 'SMS Manager',
                    url: ''
                },
                {
                    title: 'Send SMS',
                    active: true
                }
            ]"
      ></vx-breadcrumb>
      <!-- DROPDOWN -->
      <div class="ml-auto md:block hidden cursor-pointer">
        <inertia-link :href="route('admin.sms-manager.index')">
          <vs-button color="danger" class="mb-2" icon="icon-arrow-left" icon-pack="feather">Back</vs-button>
        </inertia-link>
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col sm:w-3/4">
        <vx-card>
          <form @submit.prevent="send">
            <div class="vx-row">
              <div class="vx-col w-full">
                <vs-input
                  class="w-full mb-2"
                  v-model="form.phone_number"
                  label-placeholder="Phone Number *"
                  :danger="!!$page.errors.phone_number"
                  :danger-text="$page.errors.phone_number != null ? $page.errors.phone_number[0] : ''"
                />
                <div class="w-full mb-2">
                  <vs-textarea class="w-full mb-2" label="Message *" rows='8' v-model="form.message" />
                  <span
                    v-if="!!$page.errors.message"
                    class="text-danger"
                  >{{ $page.errors.message[0] }}</span>
                </div>
              </div>
              <div class="vx-col w-full">
                <strong>All * fields are required.</strong>
              </div>
              <div class="vx-col w-full">
                <vs-button button="submit" class="mr-3 mb-2">Send</vs-button>
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
  components: {
    Layout
  },
  data() {
    return {
      form: {
        phone_number: "",
        message: ""
      }
    };
  },
  methods: {
    send() {
      this.$vs.loading();
      this.$inertia
        .post(this.route("admin.sms-manager.send"), this.form, {
          preserveScroll: true,
          preserveState: true
        })
        .then(() => this.$vs.loading.close());
    },
    reset() {
      this.$vs.loading();
      this.$inertia
        .visit(this.route("admin.sms-manager.compose"))
        .then(() => this.$vs.loading.close());
    }
  }
};
</script>

<style>
</style>
