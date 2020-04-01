<!-- =========================================================================================
    File Name: VxBreadcrumb.vue
    Description: Breadcrumb component
    Component Name: VxBreadcrumb
========================================================================================== -->


<template functional>
  <div class="vx-breadcrumb" :class="data.staticClass">
    <ul class="flex flex-wrap items-center">
      <li class="inline-flex items-end">
        <inertia-link href="/">
          <feather-icon icon="HomeIcon" svgClasses="h-5 w-5 mb-1 stroke-current text-primary" />
        </inertia-link>
        <span class="breadcrumb-separator mx-2">
          <feather-icon icon="ChevronsRightIcon" svgClasses="w-4 h-4" />
        </span>
      </li>
      <li v-for="(link, index) in props.links" :key="index" class="inline-flex items-center">
        <template v-if="link.url">
          <inertia-link :href="link.url">{{ link.title }}</inertia-link>
          <span class="breadcrumb-separator mx-2 flex items-start">
            <feather-icon icon="ChevronsRightIcon" svgClasses="w-4 h-4" />
          </span>
        </template>
        <template v-else>
          <span class="cursor-default">{{ link.title }}</span>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "vx-breadcrumb"
};
</script>
