<template>
  <div class="dashboard-wrapper">
    <animated-loader
      :is-loading="isLoading && !others.dashboard"
      :loader-color="vars.loaderColor"
    />

    <div class="row overlap-header">
      <div class="col-12 col-lg-4 d-flex">
        <greeting-widget class="flex-grow" />
      </div>

      <div class="col-12 col-lg-8 d-flex">
        <chart-widget class="flex-grow" />
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-12 col-lg-6">
        <div class="title-margin">
          <h3>{{ $t("user.props.enquiry") }}</h3>
        </div>
        <hr class="hr-border" />
        <div class="title-margin">
          <h7>{{ $t("user.props.total_items") }}</h7>
        </div>
        <table-enquiry-widget class="flex-grow" />
      </div>

      <div class="col-12 col-lg-6">
        <hr class="hr-border" />
        <table-enquiry-widget class="flex-grow" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import GreetingWidget from "./widgets/GreetingWidget";
import ChartWidget from "./widgets/ChartWidget";
import TableEnquiryWidget from "./widgets/tables/Enquiry";

export default {
  components: {
    GreetingWidget,
    ChartWidget,
    TableEnquiryWidget,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters("config", ["vars"]),
    ...mapGetters("common", ["others"]),
  },
  methods: {
    ...mapActions("common", ["Custom", "SetOthers"]),
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "~@js/core/assets/scss/imports.scss";

.overlap-header {
  margin-top: -$side-margin * 3 !important;
}

.hr-border {
  border-top: 1px solid #aaa;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.title-margin {
  margin-left: 10px;
}
</style>
