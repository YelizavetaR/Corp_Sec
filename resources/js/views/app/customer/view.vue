<template>
  <base-container
    boxed
    with-loader
    :is-loading="isLoading"
    :loader-color="vars.loaderColor"
    id="printable"
  >
    <div>
      <b-tabs v-model="tabIndex" content-class="mt-3" fill>
        <b-tab
          :title="$t('customer.entity_info')"
          :title-link-class="linkClass(0)"
          ><entity-information-content
        /></b-tab>
        <b-tab
          :title="$t('customer.directors_users')"
          :title-link-class="linkClass(1)"
          ><directors-users-content
        /></b-tab>
        <b-tab
          :title="$t('documents.documents')"
          :title-link-class="linkClass(2)"
          ><documents-content
        /></b-tab>
        <b-tab :title="$t('enquiry.enquiry')" :title-link-class="linkClass(3)"
          ><enquiry-content
        /></b-tab>
        <b-tab :title="$t('customer.payments')" :title-link-class="linkClass(4)"
          ><payments-content
        /></b-tab>
        <b-tab :title="$t('customer.pep')" :title-link-class="linkClass(5)"
          ><pep-content
        /></b-tab>
        <b-tab :title="$t('cdd.cdd')" :title-link-class="linkClass(6)"
          ><cdd-content
        /></b-tab>
        <b-tab :title="$t('customer.logs')" :title-link-class="linkClass(7)"
          ><logs-content
        /></b-tab>
      </b-tabs>
    </div>

    <div class="form-footer mt-3">
      <div class="left-side">
        <base-button
          type="button"
          design="light"
          @click="$router.back()"
          tabindex="-1"
          ><i class="fas fa-chevron-left"></i>
          {{ $t("general.back") }}</base-button
        >
      </div>
    </div>
  </base-container>
</template>

<script>
import EntityInformationContent from "./tabs/entity_information";
import DirectorsUsersContent from "./tabs/directors_users";
import DocumentsContent from "./tabs/documents";
import EnquiryContent from "./tabs/enquiry";
import PaymentsContent from "./tabs/payments";
import PepContent from "./tabs/pep";
import CddContent from "./tabs/cdd";
import LogsContent from "./tabs/logs";

import view from "@mixins/view";
import { BTabs, BTab } from "bootstrap-vue";
Vue.component("b-tabs", BTabs);
Vue.component("b-tab", BTab);

export default {
  extends: view,
  components: {
    EntityInformationContent,
    DirectorsUsersContent,
    DocumentsContent,
    EnquiryContent,
    PaymentsContent,
    PepContent,
    CddContent,
    LogsContent,
  },
  data() {
    return {
      initUrl: "entity/show",
      dataTitle: $t("customer.entity"),
      fallBackRoute: "appCustomerList",
      tabIndex: 0,
    };
  },
  computed: {},
  watch: {
    $route(value) {
      if (value.name === "appCustomerView") {
        this.uuid = value.params.uuid;
        this.getInitialData();
      }
    },
  },
  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
        // return ["bg-primary", "text-light"];
      } else {
        // return ["bg-light", "text-info"];
      }
    },
  },
};
</script>
