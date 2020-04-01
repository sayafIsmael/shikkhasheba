<template>
  <div class="layout--full-page">
    <article>
      <slot />
    </article>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  watch: {
    title: {
      immediate: true,
      handler(title) {
        document.title = title
          ? `${title} | ${this.$page.app.name}`
          : this.$page.app.name;
      }
    }
  }
};
</script>

<style>
</style>
