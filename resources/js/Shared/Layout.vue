<template>
  <main>
    <div class="layout--main" :class="[navbarClasses, footerClasses, {'app-page': isAppPage}]">
      <vx-sidebar
        :sidebarItems="sidebarItems"
        :logo="require('@assets/images/logo/logo.png')"
        :title="$page.app.name"
        parent=".layout--main"
      />

      <div id="content-area" :class="[contentAreaClass, {'show-overlay': bodyOverlay}]">
        <div id="content-overlay"></div>

        <div class="content-wrapper">
          <the-navbar
            :navbarColor="navbarColor"
            :class="[{'text-white': isNavbarDark && !isThemeDark}, {'text-base': !isNavbarDark && isThemeDark}]"
          />

          <div class="router-view">
            <div class="router-content" :class="{'mt-0': navbarType == 'hidden'}">
              <div class="content-area__content">
                <back-to-top bottom="5%" visibleoffset="500" v-if="!hideScrollToTop">
                  <vs-button icon-pack="feather" icon="icon-arrow-up" class="shadow-lg" />
                </back-to-top>
                <transition :name="routerTransition" mode="out-in">
                  <article>
                    <slot />
                  </article>
                </transition>
              </div>
            </div>
          </div>
        </div>

        <the-footer></the-footer>
      </div>
    </div>
  </main>
</template>

<script>
import themeConfig from "../themeConfig";

import VxSidebar from "@/src/components/vx-sidebar/VxSidebar.vue";
import TheNavbar from "@/src/components/TheNavbar.vue";
import TheFooter from "@/src/components/TheFooter.vue";
import BackToTop from "vue-backtotop";
export default {
  components: {
    VxSidebar,
    TheNavbar,
    TheFooter,
    BackToTop
  },
  props: {
    title: String
  },
  data() {
    return {
      navbarType: themeConfig.navbarType || "floating",
      navbarColor: themeConfig.navbarColor || "#fff",
      footerType: themeConfig.footerType || "static",
      routerTransition: themeConfig.routerTransition || "none",
      isNavbarDark: false,
      sidebarItems: [],
      disableCustomizer: themeConfig.disableCustomizer,
      windowWidth: window.innerWidth, //width of windows
      hideScrollToTop: themeConfig.hideScrollToTop,
      disableThemeTour: themeConfig.disableThemeTour
    };
  },
  mounted() {
    this.toggleClassInBody(themeConfig.theme);
    this.updateSidebarItems();
    // FlashMessage
    if (this.$page.flash.success) {
      this.flashMessage("Success", this.$page.flash.success, "success");
    }
    if (this.$page.flash.error) {
      this.flashMessage("Error", this.$page.flash.error, "danger");
    }
  },
  created() {
    this.showFlash();

    this.setSidebarWidth();
    if (this.navbarColor == "#fff" && this.isThemeDark) {
      this.updateNavbarColor("#10163a");
    } else {
      this.updateNavbarColor(this.navbarColor);
    }
  },
  watch: {
    title: {
      immediate: true,
      handler(title) {
        document.title = title
          ? `${title} | ${this.$page.app.name}`
          : this.$page.app.name;
      }
    },
    "$store.state.theme"(val) {
      this.toggleClassInBody(val);
    },
    "$page.flash": {
      handler() {
        this.showFlash();
      },
      deep: true
    },
    isThemeDark(val) {
      if (this.navbarColor == "#fff" && val) {
        this.updateNavbarColor("#10163a");
      } else {
        this.updateNavbarColor("#fff");
      }
    }
  },
  computed: {
    isAppPage() {
      //   if (this.$route.path.includes("/apps/")) return true;
      return false;
    },
    isThemeDark() {
      return this.$store.state.theme == "dark";
    },
    sidebarWidth() {
      return this.$store.state.sidebarWidth;
    },
    bodyOverlay() {
      return this.$store.state.bodyOverlay;
    },
    contentAreaClass() {
      if (this.sidebarWidth == "default") return "content-area-default";
      else if (this.sidebarWidth == "reduced") return "content-area-reduced";
      else if (this.sidebarWidth) return "content-area-full";
    },
    navbarClasses() {
      return {
        "navbar-hidden": this.navbarType == "hidden",
        "navbar-sticky": this.navbarType == "sticky",
        "navbar-static": this.navbarType == "static",
        "navbar-floating": this.navbarType == "floating"
      };
    },
    footerClasses() {
      return {
        "footer-hidden": this.footerType == "hidden",
        "footer-sticky": this.footerType == "sticky",
        "footer-static": this.footerType == "static"
      };
    }
  },
  methods: {
    showFlash() {
      if (this.$page.flash.success) {
        this.$vs.notify({
          title: "Success",
          text: this.$page.flash.success,
          color: "success"
        });
      }
      if (this.$page.flash.error) {
        this.$vs.notify({
          title: "Success",
          text: this.$page.flash.error,
          color: "danger"
        });
      }
    },
    updateSidebarItems() {
      const role = this.$page.auth.user.role.slug;

      if (role == "admin" || role == "school-admin") {
        this.sidebarItems = [
          {
            url: this.route("admin.dashboard"),
            name: "Dashboard",
            slug: "dashboard",
            icon: "HomeIcon"
          },
          {
            url: this.route("admin.profile.index"),
            name: "Profile",
            slug: "profile",
            icon: "UserIcon"
          },
          {
            url: null,
            name: "Academic",
            icon: "Edit2Icon",
            submenu: [
              {
                url: this.route("admin.academic.classes.index"),
                name: "Classes",
                slug: "classes"
              }
            ]
          },
          {
            url: this.route("admin.admissions.index"),
            name: "Admissions",
            slug: "admissions",
            icon: "UserPlusIcon"
          },
        //   {
        //     url: null,
        //     name: "Admission Manager",
        //     icon: "UserPlusIcon",
        //     submenu: [
        //       {
        //         url: this.route("admin.admissions.new"),
        //         name: "New Admission",
        //         slug: "new-addmission"
        //       },
        //       {
        //         url: this.route("admin.admissions.index"),
        //         name: "Admission Logs",
        //         slug: "admission-logs"
        //       }
        //     ]
        //   },
          {
            url: null,
            name: "Leave Management",
            icon: "UserXIcon",
            submenu: [
              {
                url: this.route("admin.leave-types.index"),
                name: "Types",
                slug: "types"
              },
              {
                url: this.route("admin.leave-applications.index"),
                name: "Applications",
                slug: "applications"
              }
            ]
          },
          {
            url: null,
            name: "Fee Manager",
            icon: "DollarSignIcon",
            submenu: [
              {
                url: this.route("admin.fee-types.index"),
                name: "Types",
                slug: "types"
              },
              {
                url: this.route("admin.fees.index"),
                name: "Fees",
                slug: "fees"
              }
            ]
          },
          {
            url: null,
            name: "Attendance Manager",
            icon: "FileTextIcon",
            submenu: [
              {
                url: this.route("admin.staff-attendances.index"),
                name: "Staff Attendances",
                slug: "staff-affendances"
              },
              {
                url: this.route("admin.student-attendances.index"),
                name: "Student Attendances",
                slug: "student-affendances"
              }
            ]
          },
          {
            url: this.route("admin.notices.index"),
            name: "Notices",
            slug: "notices",
            icon: "BellIcon"
          },
          {
            url: this.route("admin.sms-manager.index"),
            name: "SMS Manager",
            slug: "sms-manager",
            icon: "MessageSquareIcon"
          },
          {
            url: null,
            name: "Routine",
            icon: "ListIcon",
            submenu: [
              {
                url: this.route("admin.class-routines.index"),
                name: "Class routine",
                slug: "class-routine"
              },
              {
                url: this.route("admin.exams.index"),
                name: "Exam routine",
                slug: "exam-routine"
              }
            ]
          },
          {
            url: this.route("admin.exam-seat-plans.index"),
            name: "Exam Seat Plan",
            slug: "exam-seat-plan",
            icon: "GridIcon"
          },
          {
            url: this.route("admin.sessions.index"),
            name: "Sessions",
            slug: "sessions",
            icon: "BellIcon"
          },
          {
            header: "System"
          },
          {
            url: this.route("admin.users.index"),
            name: "Users",
            slug: "users",
            icon: "UsersIcon"
          },
          {
            url: this.route("admin.roles.index"),
            name: "Roles",
            slug: "roles",
            icon: "UserCheckIcon"
          },
          {
            url: this.route("admin.settings.index"),
            name: "Settings",
            slug: "settings",
            icon: "SettingsIcon"
          },
        ];
      } else if (role == "teacher" || role == "head-teacher") {
        this.sidebarItems = [
          {
            url: this.route("teacher.dashboard"),
            name: "Dashboard",
            slug: "dashboard",
            icon: "HomeIcon"
          },
          {
            url: this.route("teacher.profile.index"),
            name: "Profile",
            slug: "profile",
            icon: "UserIcon"
          },
          {
            url: this.route("teacher.class.index"),
            name: "My Class",
            slug: "my-class",
            icon: "GridIcon"
          },
          {
            url: this.route("teacher.class-routine.index"),
            name: "My Class Routine",
            slug: "my-class-routine",
            icon: "ListIcon"
          },
          {
            url: this.route("teacher.leave-applications.index"),
            name: "Leave Applications",
            slug: "leave-applications",
            icon: "UserXIcon"
          },
          {
            url: this.route("teacher.notices.index"),
            name: "Notices",
            slug: "notices",
            icon: "BellIcon"
          }
        ];
      } else if (role == "parent") {
        this.sidebarItems = [
          {
            url: this.route("parent.dashboard"),
            name: "Dashboard",
            slug: "dashboard",
            icon: "HomeIcon"
          },
          {
            url: this.route("parent.profile.index"),
            name: "Profile",
            slug: "profile",
            icon: "UserIcon"
          },
          {
            url: this.route("parent.notices.index"),
            name: "Notices",
            slug: "notices",
            icon: "BellIcon"
          }
        ];
      } else if (role == "accountant") {
        this.sidebarItems = [
          {
            url: this.route("accountant.dashboard"),
            name: "Dashboard",
            slug: "dashboard",
            icon: "HomeIcon"
          },
          {
            url: this.route("accountant.profile.index"),
            name: "Profile",
            slug: "profile",
            icon: "UserIcon"
          },
          {
            url: this.route("accountant.leave-applications.index"),
            name: "Leave Applications",
            slug: "leave-applications",
            icon: "UserXIcon"
          },
          {
            url: this.route("accountant.notices.index"),
            name: "Notices",
            slug: "notices",
            icon: "BellIcon"
          }
        ];
      } else if (role == "student") {
        this.sidebarItems = [
          {
            url: this.route("student.dashboard"),
            name: "Dashboard",
            slug: "dashboard",
            icon: "HomeIcon"
          },
          {
            url: this.route("student.profile.index"),
            name: "Profile",
            slug: "profile",
            icon: "UserIcon"
          },
          {
            url: this.route("student.class-routine.index"),
            name: "My Class Routine",
            slug: "my-class-routine",
            icon: "ListIcon"
          },
          {
            url: this.route("student.exam-routine.index"),
            name: "My Exam Routine",
            slug: "my-exam-routine",
            icon: "GridIcon"
          },
          {
            url: this.route("student.leave-applications.index"),
            name: "Leave Applications",
            slug: "leave-applications",
            icon: "UserXIcon"
          },
          {
            url: this.route("student.notices.index"),
            name: "Notices",
            slug: "notices",
            icon: "BellIcon"
          }
        ];
      }
    },
    toggleClassInBody(className) {
      if (className == "dark") {
        if (document.body.className.match("theme-semi-dark"))
          document.body.classList.remove("theme-semi-dark");
        document.body.classList.add("theme-dark");
      } else if (className == "semi-dark") {
        if (document.body.className.match("theme-dark"))
          document.body.classList.remove("theme-dark");
        document.body.classList.add("theme-semi-dark");
      } else {
        if (document.body.className.match("theme-dark"))
          document.body.classList.remove("theme-dark");
        if (document.body.className.match("theme-semi-dark"))
          document.body.classList.remove("theme-semi-dark");
      }
    },
    updateNavbarColor(val) {
      this.navbarColor = val;
      if (val == "#fff") this.isNavbarDark = false;
      else this.isNavbarDark = true;
    },
    handleWindowResize(event) {
      this.windowWidth = event.currentTarget.innerWidth;
      this.setSidebarWidth();
    },
    setSidebarWidth() {
      if (this.windowWidth < 1200) {
        this.$store.commit("TOGGLE_IS_SIDEBAR_ACTIVE", false);
        this.$store.dispatch("updateSidebarWidth", "no-sidebar");
        this.disableThemeTour = true;
      } else if (this.windowWidth < 1200) {
        this.$store.dispatch("updateSidebarWidth", "reduced");
      } else {
        this.$store.commit("TOGGLE_IS_SIDEBAR_ACTIVE", true);
      }
    },
    toggleHideScrollToTop(val) {
      this.hideScrollToTop = val;
    }
  }
};
</script>
