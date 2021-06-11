<template>
  <base-container
    boxed
    with-loader
    :is-loading="isLoading"
    :loader-color="vars.loaderColor"
    id="printable"
  >
    <div v-if="entity">
      <b-tabs v-model="tabIndex" content-class="mt-3" fill>
        <b-tab :title="$t('customer.entity_info')"
          ><entity-information-content :uuid="entity.uuid"
        /></b-tab>
        <b-tab :title="$t('customer.directors_users')"
          ><directors-users-content
        /></b-tab>
        <b-tab :title="$t('documents.documents')"><documents-content /></b-tab>
        <b-tab :title="$t('enquiry.enquiry')"><enquiry-content /></b-tab>
        <b-tab :title="$t('customer.payments')"><payments-content /></b-tab>
        <b-tab :title="$t('customer.pep')"><pep-content /></b-tab>
        <b-tab :title="$t('cdd.cdd')"><cdd-content /></b-tab>
        <b-tab :title="$t('customer.logs')"><logs-content /></b-tab>
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
  methods: {},
};
</script>
