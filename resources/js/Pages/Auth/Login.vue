<template>
  <layout title="Login">
    <div
      class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
      id="page-login"
    >
      <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
        <vx-card>
          <div slot="no-body" class="full-page-bg-color">
            <div class="vx-row no-gutter justify-center items-center">
              <div class="vx-col hidden lg:block lg:w-1/2">
                <img src="@assets/images/pages/login.png" alt="login" class="mx-auto" />
              </div>
              <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
                <div class="p-8">
                  <div class="vx-card__title mb-8">
                    <h4 class="mb-4">Login</h4>
                    <p>Welcome back, please login to your account.</p>
                  </div>
                  <form @submit.prevent="login">
                    <vs-input
                      icon="icon icon-user"
                      icon-pack="feather"
                      label-placeholder="User Id"
                      v-model="form.user_id"
                      :danger="!!$page.errors.user_id"
                      :danger-text="$page.errors.user_id != null ? $page.errors.user_id[0] : ''"
                      class="w-full no-icon-border"
                    />
                    <vs-input
                      type="password"
                      icon="icon icon-lock"
                      icon-pack="feather"
                      label-placeholder="Pin Number"
                      v-model="form.password"
                      @input="checknum"
                      :danger="!!$page.errors.password"
                      :danger-text="$page.errors.password != null ? $page.errors.password[0] : ''"
                      class="w-full mt-6 no-icon-border"
                    />

                    <div class="flex flex-wrap justify-between my-5">
                      <vs-checkbox v-model="form.remember" class="mb-3">Remember Me</vs-checkbox>
                      <inertia-link href="#">Forgot Password?</inertia-link>
                    </div>
                    <vs-button button="submit" color="primary" type="filled">Login</vs-button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </vx-card>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from "@/Shared/FullPageLayout";

export default {
  components: {
    Layout
  },
  data() {
    return {
      form: {
        user_id: "",
        password: "",
        remember: false
      }
    };
  },
  methods: {
    login() {
      this.$vs.loading();
      this.$inertia
        .post(this.route("login"), this.form, {
          replace: true,
          preserveScroll: true,
          preserveState: true
        })
        .then(() => this.$vs.loading.close());
    },
    checknum: function(event) {
      this.form.password = this.form.password.replace(/[^0-9]/g, "");
    }
  }
};
</script>

<style lang="scss">
#page-login {
  .social-login {
    .bg-facebook {
      background-color: #1551b1;
    }
    .bg-twitter {
      background-color: #00aaff;
    }
    .bg-google {
      background-color: #4285f4;
    }
    .bg-github {
      background-color: #333;
    }
  }
}
</style>
