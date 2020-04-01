<!-- =========================================================================================
    File Name: VxSidebarItem.vue
    Description: Sidebar item component. Extends vuesax framework's 'vs-sidebar-item' component
    Component Name: VxSidebarItem
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div
    :class="[{ 'vs-sidebar-item-active': isActiveRoute(to) } , {'disabled-item pointer-events-none': isDisabled}]"
    class="vs-sidebar--item"
  >
    <inertia-link :href="to" :class="[{'router-link-active': isActiveRoute(to)}]" :target="target" exact>
      <vs-icon v-if="!featherIcon" :icon-pack="iconPack" :icon="icon"></vs-icon>
      <feather-icon :icon="icon" :class="{'w-3 h-3': iconSmall}" v-else></feather-icon>
      <slot></slot>
    </inertia-link>
  </div>
</template>

<script>
export default {
  name: "VxSidebarItem",
  props: {
    icon: {
      default: "",
      type: String
    },
    iconSmall: {
      default: false,
      type: Boolean
    },
    iconPack: {
      default: "material-icons",
      type: String
    },
    href: {
      default: "#",
      type: String
    },
    to: {
      default: null,
      type: String
    },
    slug: {
      default: null,
      type: String
    },
    index: {
      default: null,
      type: [String, Number]
    },
    featherIcon: {
      default: true,
      type: Boolean
    },
    target: {
      default: "_self",
      type: String
    },
    isDisabled: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      activeLink: false,
      activeRoute: ""
    };
  },
  mounted() {
      this.activeRoute = location.href;
  },
  methods: {
    CheckIsActive() {
      return false;
    },
    isActiveRoute(uri) {
      return micromatch.isMatch(this.activeRoute, uri, { contains: true });
    }
  },
  updated() {
    this.CheckIsActive();
  }
};
</script>
