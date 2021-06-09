<template>
  <div class="main-content">
    <div class="row">
      <div class="col-12 col-lg-12">
        <div class="title-margin">
          <span class="font-weight-bold title-font-size">
            {{ $t("customer.entity_profile") }}
          </span>
          <i v-b-modal.modal-entity-profile class="fa fa-pen padding-left"></i>
        </div>
      </div>
    </div>
    <div class="row padding-left">
      <div class="col-12 col-md-6 mb-3">
        <div class="font-weight-bold">
          {{ $t("customer.entity_name") }}
        </div>
        <div>{{ formData.entityName }}</div>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <div class="font-weight-bold">
          {{ $t("customer.registration_number") }}
        </div>
        <div>{{ formData.registrationNumber }}</div>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <div class="font-weight-bold">
          {{ $t("customer.incorporation_date") }}
        </div>
        <div>{{ formData.incorporationDate }}</div>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <div class="font-weight-bold">
          {{ $t("customer.financial_year") }}
        </div>
        <div>{{ formData.financialYear }}</div>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <div class="font-weight-bold">
          {{ $t("customer.entity_status") }}
        </div>
        <div>{{ formData.entityStatus }}</div>
      </div>
    </div>
    <b-modal
      id="modal-entity-profile"
      ref="modal"
      size="lg"
      :title="$t('customer.entity_profile')"
      @show="resetModal_entity_profile"
      @hidden="resetModal_entity_profile"
      @ok="handleOk_entity_profile"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <div class="row">
          <div class="col-12 col-md-6 mb-3">
            <base-input
              :label="formLabels.entityName"
              type="text"
              v-model="modalData.entityName"
              :error.sync="formErrors.entityName"
            />
          </div>
          <div class="col-12 col-md-6 mb-3">
            <base-input
              :label="formLabels.registrationNumber"
              type="text"
              v-model="modalData.registrationNumber"
              :error.sync="formErrors.registrationNumber"
            />
          </div>
          <div class="col-12 col-md-6 mb-3">
            <base-input
              :label="formLabels.incorporationDate"
              addon-right-icon="far fa-calendar-alt"
              type="text"
              v-model="modalData.incorporationDate"
              :error.sync="formErrors.incorporationDate"
              :is-wrapper="true"
            >
              <date-picker
                v-model="modalData.incorporationDate"
                :config="vars.datepickerConfig"
                class="form-control datepicker"
              >
              </date-picker>
            </base-input>
          </div>
          <div class="col-12 col-md-6 mb-3">
            <base-input
              :label="formLabels.financialYear"
              addon-right-icon="far fa-calendar-alt"
              type="text"
              v-model="modalData.financialYear"
              :error.sync="formErrors.financialYear"
              :is-wrapper="true"
            >
              <date-picker
                v-model="modalData.financialYear"
                :config="vars.datepickerConfig"
                class="form-control datepicker"
              >
              </date-picker>
            </base-input>
          </div>
          <div class="col-12 col-md-6 mb-3">
            <b-form-checkbox
              v-model="modalData.entityStatus"
              name="check-button"
              switch
            >
              {{ formLabels.entityStatus }}
            </b-form-checkbox>
          </div>
        </div>
      </form>
    </b-modal>

    <div class="row">
      <div class="col-12 col-lg-12">
        <div class="title-margin">
          <span class="font-weight-bold title-font-size">
            {{ $t("customer.office_address") }}
          </span>
          <i v-b-modal.modal-office-address class="fa fa-pen padding-left"></i>
        </div>
      </div>
    </div>
    <div class="row padding-left">
      <div class="col-12 col-md-6 mb-3">
        <div class="font-weight-bold">
          {{ $t("customer.address_line_1") }}
        </div>
        <div>{{ formData.addressLine1 }}</div>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <div class="font-weight-bold">
          {{ $t("customer.address_line_2") }}
        </div>
        <div>{{ formData.addressLine2 }}</div>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <div class="font-weight-bold">
          {{ $t("customer.city") }}
        </div>
        <div>{{ formData.city }}</div>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <div class="font-weight-bold">
          {{ $t("customer.state_province") }}
        </div>
        <div>{{ formData.stateProvince }}</div>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <div class="font-weight-bold">
          {{ $t("customer.zip_postcode") }}
        </div>
        <div>{{ formData.zipPostcode }}</div>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <div class="font-weight-bold">
          {{ $t("customer.select_country") }}
        </div>
        <div>{{ formData.selectCountry }}</div>
      </div>
    </div>
    <b-modal
      id="modal-office-address"
      ref="modal"
      size="lg"
      :title="$t('customer.office_address')"
      @show="resetModal_office_address"
      @hidden="resetModal_office_address"
      @ok="handleOk_office_address"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <div class="row">
          <div class="col-12 col-md-6 mb-3">
            <base-input
              :label="formLabels.addressLine1"
              type="text"
              v-model="modalData.addressLine1"
              :error.sync="formErrors.addressLine1"
            />
          </div>
          <div class="col-12 col-md-6 mb-3">
            <base-input
              :label="formLabels.addressLine2"
              type="text"
              v-model="modalData.addressLine2"
              :error.sync="formErrors.addressLine2"
            />
          </div>
          <div class="col-12 col-md-6 mb-3">
            <base-input
              :label="formLabels.city"
              type="text"
              v-model="modalData.city"
              :error.sync="formErrors.city"
            />
          </div>
          <div class="col-12 col-md-6 mb-3">
            <base-input
              :label="formLabels.stateProvince"
              type="text"
              v-model="modalData.stateProvince"
              :error.sync="formErrors.stateProvince"
            />
          </div>
          <div class="col-12 col-md-5 mb-3">
            <base-input
              :label="formLabels.zipPostcode"
              type="text"
              v-model="modalData.zipPostcode"
              :error.sync="formErrors.zipPostcode"
              class="select-padding"
            />
          </div>
          <div class="col-12 col-md-7 mb-3">
            <span class="sub-font-size">{{
              $t("customer.select_country")
            }}</span>
            <b-form-select
              v-model="modalData.selectCountryId"
              :options="options_country"
            ></b-form-select>
          </div>
        </div>
      </form>
    </b-modal>

    <div class="row">
      <div class="col-12 col-lg-12">
        <div class="title-margin">
          <span class="font-weight-bold title-font-size">
            {{ $t("customer.principal_activites") }}
          </span>
          <i
            v-b-modal.modal-principal-activites
            class="fa fa-pen padding-left"
          ></i>
        </div>
      </div>
    </div>
    <div class="row padding-left">
      <div class="col-12 col-lg-12">
        <div class="font-weight-bold">
          {{ $t("customer.primary_activity") }}
        </div>
        <div>{{ formData.primaryActivity }}</div>
      </div>
      <div class="col-12 col-lg-12">
        <div class="font-weight-bold">
          {{ $t("customer.secondary_activity") }}
        </div>
        <div>{{ formData.secondaryActivity }}</div>
      </div>
    </div>
    <b-modal
      id="modal-principal-activites"
      ref="modal"
      size="sm"
      :title="$t('customer.principal_activites')"
      @show="resetModal_principal_activites"
      @hidden="resetModal_principal_activites"
      @ok="handleOk_principal_activites"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <div class="row">
          <div class="col-12 col-lg-12">
            <base-input
              :label="formLabels.primaryActivity"
              type="text"
              v-model="modalData.primaryActivity"
              :error.sync="formErrors.primaryActivity"
            />
          </div>
          <div class="col-12 col-lg-12">
            <base-input
              :label="formLabels.secondaryActivity"
              type="text"
              v-model="modalData.secondaryActivity"
              :error.sync="formErrors.secondaryActivity"
            />
          </div>
        </div>
      </form>
    </b-modal>
    <br />

    <div class="row">
      <div class="col-12 col-lg-12">
        <div class="title-margin">
          <span class="font-weight-bold title-font-size">
            {{ $t("customer.capital") }}
          </span>
          <i
            v-b-modal.modal-principal-activites
            class="fa fa-pen padding-left"
          ></i>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-12">
        <b-table striped hover :items="capital_items"></b-table>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-lg-12">
        <div class="title-margin">
          <span class="font-weight-bold title-font-size">
            {{ $t("customer.share") }}
          </span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <b-table striped hover :items="share_items"></b-table>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
import form from "@mixins/form";
import { BButton, BFormCheckbox, BFormSelect, BTable } from "bootstrap-vue";
Vue.component("b-button", BButton);
Vue.component("b-form-checkbox", BFormCheckbox);
Vue.component("b-form-select", BFormSelect);
Vue.component("b-table", BTable);

export default {
  extends: form,
  components: {},
  data() {
    return {
      options_country: [
        { value: 0, text: "Singapore" },
        { value: 1, text: "Russia" },
      ],
      capital_items: [
        {
          "Share Name": "Ordinary SGD",
          "Total Paid-up Capital": 20000,
          "Total Issued Share Capital": 20000,
          "Total Number of Shares": 1000,
          "Currency ": "SGD",
        },
      ],
      share_items: [
        {
          "Share Type": "Ordinary SGD (SGD)",
          "Share Capital": 20000,
          "Share Number": 1000,
        },
        {
          "Share Type": "Preference (SGD)",
          "Share Capital": 20000,
          "Share Number": 200,
        },
      ],
      modalData: {
        entityName: "",
        registrationNumber: "",
        incorporationDate: "",
        financialYear: "",
        entityStatus: "",

        addressLine1: "",
        addressLine2: "",
        city: "",
        stateProvince: "",
        zipPostcode: "",
        selectCountry: "",
        selectCountryId: 0,

        primaryActivity: "",
        secondaryActivity: "",
      },
      formData: {
        entityName: "",
        registrationNumber: "",
        incorporationDate: "",
        financialYear: "",
        entityStatus: "Activated",

        addressLine1: "",
        addressLine2: "",
        city: "",
        stateProvince: "",
        zipPostcode: "",
        selectCountry: "Singapore",
        selectCountryId: 0,

        primaryActivity: "",
        secondaryActivity: "",
      },
      formLabels: {
        entityName: $t("customer.entity_name"),
        registrationNumber: $t("customer.registration_number"),
        incorporationDate: $t("customer.incorporation_date"),
        financialYear: $t("customer.financial_year"),
        entityStatus: $t("customer.entity_status"),

        addressLine1: $t("customer.address_line_1"),
        addressLine2: $t("customer.address_line_2"),
        city: $t("customer.city"),
        stateProvince: $t("customer.state_province"),
        zipPostcode: $t("customer.zip_postcode"),
        selectCountry: $t("customer.select_country"),

        primaryActivity: $t("customer.primary_activity"),
        secondaryActivity: $t("customer.secondary_activity"),
      },
    };
  },
  computed: {},
  methods: {
    resetModal_entity_profile() {
      this.modalData.entityName = this.formData.entityName;
      this.modalData.registrationNumber = this.formData.registrationNumber;
      this.modalData.incorporationDate = this.formData.incorporationDate;
      this.modalData.financialYear = this.formData.financialYear;
      this.formData.entityStatus == "Activated"
        ? (this.modalData.entityStatus = true)
        : (this.modalData.entityStatus = false);
    },
    handleOk_entity_profile(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.formData.entityName = this.modalData.entityName;
      this.formData.registrationNumber = this.modalData.registrationNumber;
      this.formData.incorporationDate = this.modalData.incorporationDate;
      this.formData.financialYear = this.modalData.financialYear;
      this.modalData.entityStatus == true
        ? (this.formData.entityStatus = "Activated")
        : (this.formData.entityStatus = "Inactivated");

      this.$nextTick(() => {
        this.$bvModal.hide("modal-entity-profile");
      });
    },

    resetModal_office_address() {
      this.modalData.addressLine1 = this.formData.addressLine1;
      this.modalData.addressLine2 = this.formData.addressLine2;
      this.modalData.city = this.formData.city;
      this.modalData.stateProvince = this.formData.stateProvince;
      this.modalData.zipPostcode = this.formData.zipPostcode;
      this.modalData.selectCountry = this.formData.selectCountry;
      this.modalData.selectCountryId = this.formData.selectCountryId;
    },
    handleOk_office_address(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.formData.addressLine1 = this.modalData.addressLine1;
      this.formData.addressLine2 = this.modalData.addressLine2;
      this.formData.city = this.modalData.city;
      this.formData.stateProvince = this.modalData.stateProvince;
      this.formData.zipPostcode = this.modalData.zipPostcode;
      this.formData.selectCountryId = this.modalData.selectCountryId;
      this.formData.selectCountry =
        this.options_country[this.modalData.selectCountryId].text;

      this.$nextTick(() => {
        this.$bvModal.hide("modal-office-address");
      });
    },

    resetModal_principal_activites() {
      this.modalData.primaryActivity = this.formData.primaryActivity;
      this.modalData.secondaryActivity = this.formData.secondaryActivity;
    },
    handleOk_principal_activites(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.formData.primaryActivity = this.modalData.primaryActivity;
      this.formData.secondaryActivity = this.modalData.secondaryActivity;

      this.$nextTick(() => {
        this.$bvModal.hide("modal-principal-activites");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.padding-left {
  padding-left: 30px;
}

.title-font-size {
  font-size: 18px;
}

.title-margin {
  margin-top: 15px;
  margin-bottom: 15px;
}

.main-content {
  margin-left: 20px;
  margin-right: 20px;
}

.select-padding {
  padding-top: 7px;
}
</style>