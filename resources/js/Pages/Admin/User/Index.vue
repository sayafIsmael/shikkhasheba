<template>
  <layout title="Users">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">Users</h2>
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
                title: 'Users',
                active: true
                }
            ]"
      ></vx-breadcrumb>
    </div>
    <vs-row vs-type="flex">
      <!-- admins -->
      <vs-col
        class="mb-2"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="3"
        vs-sm="12"
        vs-xs="12"
      >
        <vx-card>
          <vs-row>
            <vs-col vs-type="flex" vs-justify="flex-end">
              <vs-dropdown>
                <a class="flex items-center" href="#">
                  <feather-icon icon="MoreHorizontalIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                </a>
                <vs-dropdown-menu>
                  <inertia-link :href="route('admin.roles.edit',users.admin.superAdminId)">
                    <vs-dropdown-item>Super Admin Permissions</vs-dropdown-item>
                  </inertia-link>
                  <inertia-link :href="route('admin.roles.edit',users.admin.schoolAdminId)">
                    <vs-dropdown-item>School Admin Permissions</vs-dropdown-item>
                  </inertia-link>
                </vs-dropdown-menu>
              </vs-dropdown>
            </vs-col>
          </vs-row>
          <inertia-link :href="route('admin.admins.index')">
            <vs-avatar class="mx-auto mb-6 block" size="80px" src="/images/icons/users/admins.svg" />
            <div class="text-center">
              <div class="flex items-center w-full justify-center">
                <h4>Admins</h4>
                <vs-chip color="primary" class="ml-1">{{ users.admin.count }}</vs-chip>
              </div>

              <p class="text-grey">{{ users.admin.description }}</p>
            </div>
          </inertia-link>
        </vx-card>
      </vs-col>

      <!-- teachers -->
      <vs-col
        class="mb-2"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="3"
        vs-sm="12"
        vs-xs="12"
      >
        <vx-card>
          <vs-row>
            <vs-col vs-type="flex" vs-justify="flex-end">
              <vs-dropdown>
                <a class="flex items-center" href="#">
                  <feather-icon icon="MoreHorizontalIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                </a>
                <vs-dropdown-menu>
                  <inertia-link :href="route('admin.roles.edit',users.teacher.headTeacherId)">
                    <vs-dropdown-item>Head Teacher Permissions</vs-dropdown-item>
                  </inertia-link>
                  <inertia-link :href="route('admin.roles.edit',users.teacher.teacherId)">
                    <vs-dropdown-item>Teacher Permissions</vs-dropdown-item>
                  </inertia-link>
                </vs-dropdown-menu>
              </vs-dropdown>
            </vs-col>
          </vs-row>
          <inertia-link :href="route('admin.teachers.index')">
            <vs-avatar
              class="mx-auto mb-6 block"
              size="80px"
              src="/images/icons/users/teachers.svg"
            />
            <div class="text-center">
              <div class="flex items-center w-full justify-center">
                <h4>Teachers</h4>
                <vs-chip color="primary" class="ml-1">{{ users.teacher.count }}</vs-chip>
              </div>

              <p class="text-grey">{{ users.teacher.description }}</p>
            </div>
          </inertia-link>
        </vx-card>
      </vs-col>

      <!-- accountants -->
      <vs-col
        class="mb-2"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="3"
        vs-sm="12"
        vs-xs="12"
      >
        <vx-card>
          <vs-row>
            <vs-col vs-type="flex" vs-justify="flex-end">
              <vs-dropdown>
                <a class="flex items-center" href="#">
                  <feather-icon icon="MoreHorizontalIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                </a>
                <vs-dropdown-menu>
                  <inertia-link :href="route('admin.roles.edit',users.accountant.id)">
                    <vs-dropdown-item>Permissions</vs-dropdown-item>
                  </inertia-link>
                </vs-dropdown-menu>
              </vs-dropdown>
            </vs-col>
          </vs-row>
          <inertia-link :href="route('admin.accountants.index')">
            <vs-avatar
              class="mx-auto mb-6 block"
              size="80px"
              src="/images/icons/users/accountants.svg"
            />
            <div class="text-center">
              <div class="flex items-center w-full justify-center">
                <h4>Accountants</h4>
                <vs-chip color="primary" class="ml-1">{{ users.accountant.count }}</vs-chip>
              </div>

              <p class="text-grey">{{ users.accountant.description }}</p>
            </div>
          </inertia-link>
        </vx-card>
      </vs-col>

      <!-- parents -->
      <vs-col
        class="mb-2"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="3"
        vs-sm="12"
        vs-xs="12"
      >
        <vx-card>
          <vs-row>
            <vs-col vs-type="flex" vs-justify="flex-end">
              <vs-dropdown>
                <a class="flex items-center" href="#">
                  <feather-icon icon="MoreHorizontalIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                </a>
                <vs-dropdown-menu>
                  <inertia-link :href="route('admin.roles.edit',users.parent.id)">
                    <vs-dropdown-item>Permissions</vs-dropdown-item>
                  </inertia-link>
                </vs-dropdown-menu>
              </vs-dropdown>
            </vs-col>
          </vs-row>
          <inertia-link :href="route('admin.parents.index')">
            <vs-avatar
              class="mx-auto mb-6 block"
              size="80px"
              src="/images/icons/users/parents.svg"
            />
            <div class="text-center">
              <div class="flex items-center w-full justify-center">
                <h4>Parents</h4>
                <vs-chip color="primary" class="ml-1">{{ users.parent.count }}</vs-chip>
              </div>

              <p class="text-grey">{{ users.parent.description }}</p>
            </div>
          </inertia-link>
        </vx-card>
      </vs-col>

      <!-- studnets -->
      <vs-col
        class="mb-2"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="3"
        vs-sm="12"
        vs-xs="12"
      >
        <vx-card>
          <vs-row>
            <vs-col vs-type="flex" vs-justify="flex-end">
              <vs-dropdown>
                <a class="flex items-center" href="#">
                  <feather-icon icon="MoreHorizontalIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                </a>
                <vs-dropdown-menu>
                  <inertia-link :href="route('admin.roles.edit',users.student.id)">
                    <vs-dropdown-item>Permissions</vs-dropdown-item>
                  </inertia-link>
                </vs-dropdown-menu>
              </vs-dropdown>
            </vs-col>
          </vs-row>
          <inertia-link :href="route('admin.students.index')">
            <vs-avatar
              class="mx-auto mb-6 block"
              size="80px"
              src="/images/icons/users/students.svg"
            />
            <div class="text-center">
              <div class="flex items-center w-full justify-center">
                <h4>Students</h4>
                <vs-chip color="primary" class="ml-1">{{ users.student.count }}</vs-chip>
              </div>

              <p class="text-grey">{{ users.student.description }}</p>
            </div>
          </inertia-link>
        </vx-card>
      </vs-col>
    </vs-row>
  </layout>
</template>

<script>
import Layout from "@/Shared/Layout";

export default {
  props: {
    users: Object
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
