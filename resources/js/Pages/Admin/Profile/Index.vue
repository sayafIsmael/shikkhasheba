<template>
  <layout title="Profile">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">Profile</h2>
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
                title: 'Profile',
                active: true
                }
            ]"
      ></vx-breadcrumb>
    </div>
    <div id="profile-page">
      <!-- PROFILE HEADER -->
      <div class="profile-header mb-2">
        <div class="relative">
          <div class="cover-container rounded-t-lg">
            <img
              src="http://wsg.com.gt/v6/uploads/bglogin.jpg"
              alt="user-profile-cover"
              class="responsive block"
            />
          </div>
          <div class="profile-img-container pb-4 pointer-events-none">
            <div>
              <vs-avatar
                class="mx-auto mb-6 block"
                size="85px"
                :src="admin.avatar_path"
                :text="admin.name"
              />
            </div>
            <div class="profile-actions pointer-events-auto flex">
              <inertia-link :href="route('admin.profile.edit')">
                <vs-button size="large" icon-pack="feather" radius icon="icon-edit-2"></vs-button>
              </inertia-link>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-start flex-wrap profile-header-nav p-6"></div>
      </div>
    </div>

    <vs-row vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card>
          <div slot="header">
            <h3>Personal information</h3>
          </div>
          <div>
            <vs-row>
              <vs-col vs-type="flex" vs-w="6">
                <ul class="widget w-personal-info item-block">
                  <li>
                    <span class="title">Account Type:</span>
                    <span class="text">
                      <vs-chip color="primary">{{ admin.role.name }}</vs-chip>
                    </span>
                  </li>
                  <li>
                    <span class="title">Name:</span>
                    <span class="text">{{ admin.name }}</span>
                  </li>
                  <li>
                    <span class="title">Email:</span>
                    <span class="text">{{ admin.email }}</span>
                  </li>
                  <li>
                    <span class="title">Admin ID:</span>
                    <span class="text">{{ admin.user_id }}</span>
                  </li>
                  <li>
                    <span class="title">Phone:</span>
                    <span class="text">{{ admin.contact_no }}</span>
                  </li>
                  <li>
                    <span class="title">Gender:</span>
                    <span class="text">{{ admin.gender }}</span>
                  </li>
                </ul>
              </vs-col>
              <vs-col vs-type="flex" vs-w="6">
                <ul class="widget w-personal-info item-block">
                  <li>
                    <span class="title">Member since:</span>
                    <span class="text">{{ admin.created_at | moment("dddd, MMMM Do YYYY") }}</span>
                  </li>

                  <li>
                    <span class="title">Birthday:</span>
                    <span class="text">{{ admin.dob | moment("dddd, MMMM Do YYYY") }}</span>
                  </li>
                  <li>
                    <span class="title">Address:</span>
                    <span class="text">{{ admin.address }}</span>
                  </li>
                  <li>
                    <span class="title">Birth Certificate Number:</span>
                    <span class="text">{{ admin.birth_certificate_number }}</span>
                  </li>
                  <li>
                    <span class="title">NID Number:</span>
                    <span class="text">{{ admin.nid_number }}</span>
                  </li>
                </ul>
              </vs-col>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </layout>
</template>

<script>
import Layout from "@/Shared/Layout";

export default {
  props: {
    admin: Object
  },
  components: {
    Layout
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.cover-container img {
  height: 250px;
}
.w-personal-info {
  margin-bottom: 0;
}
.w-personal-info li {
  padding: 15px 0;
}
.w-personal-info.item-block .title {
  margin-right: 0;
  float: none;
  width: auto;
}
.w-personal-info li .title {
  color: #515365;
  font-weight: 500;
  margin-right: 30px;
  float: left;
  width: 30%;
}
.w-personal-info li .text {
  color: #888da8;
  display: block;
  overflow: hidden;
}
</style>
