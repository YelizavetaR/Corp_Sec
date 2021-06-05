<template>
  <div class="entity-list-container">
    <collapse-transition :group="true" :duration="300" tag="div">
    </collapse-transition>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      initUrl: "billing",
      dataType: "billing",
    };
  },
  methods: {},
  mounted() {},
};
</script>
