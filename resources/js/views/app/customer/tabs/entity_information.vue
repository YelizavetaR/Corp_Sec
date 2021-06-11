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
        <div>{{ entityInformationData.entity_name }}</div>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <div class="font-weight-bold">
          {{ $t("customer.registration_number") }}
        </div>
        <div>{{ entityInformationData.uen }}</div>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <div class="font-weight-bold">
          {{ $t("customer.incorporation_date") }}
        </div>
        <div>{{ entityInformationData.incorporation_date }}</div>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <div class="font-weight-bold">
          {{ $t("customer.financial_year") }}
        </div>
        <div>{{ entityInformationData.financial_end }}</div>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <div class="font-weight-bold">
          {{ $t("customer.entity_status") }}
        </div>
        <div>{{ entityInformationData.status.toUpperCase() }}</div>
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
        <div>{{ entityInformationData.address_line_1 }}</div>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <div class="font-weight-bold">
          {{ $t("customer.address_line_2") }}
        </div>
        <div>{{ entityInformationData.address_line_2 }}</div>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <div class="font-weight-bold">
          {{ $t("customer.city") }}
        </div>
        <div>{{ entityInformationData.city }}</div>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <div class="font-weight-bold">
          {{ $t("customer.state_province") }}
        </div>
        <div>{{ entityInformationData.state_province }}</div>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <div class="font-weight-bold">
          {{ $t("customer.zip_postcode") }}
        </div>
        <div>{{ entityInformationData.zip_postcode }}</div>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <div class="font-weight-bold">
          {{ $t("customer.select_country") }}
        </div>
        <div>{{ this.options_country[this.modalData.country_id].text }}</div>
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
              v-model="modalData.country_id"
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
        <div>{{ entityInformationData.primaryActivity }}</div>
      </div>
      <div class="col-12 col-lg-12">
        <div class="font-weight-bold">
          {{ $t("customer.secondary_activity") }}
        </div>
        <div>{{ entityInformationData.secondaryActivity }}</div>
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
import axios from "axios";
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
      entityInformationData: [],
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
        country_id: 0,

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
  mounted() {
    this.getData();
  },
  props: {
    uuid: String,
  },
  methods: {
    getData() {
      axios({
        method: "get",
        url: `/entity/show/${this.uuid}`,
        headers: {
          "X-CSRF-TOKEN":
            document.head.querySelector("[name=csrf-token]").content,
        },
      })
        .then((response) => {
          this.isLoading = false;
          if (response.data != []) {
            this.entityInformationData = response.data;
          } else {
            this.entityInformationData = [];
          }
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
    resetModal_entity_profile() {
      this.modalData.entityName = this.entityInformationData.entity_name;
      this.modalData.registrationNumber = this.entityInformationData.uen;
      this.modalData.incorporationDate =
        this.entityInformationData.incorporation_date;
      this.modalData.financialYear = this.entityInformationData.financial_end;
      this.entityInformationData.status == "activated"
        ? (this.modalData.entityStatus = true)
        : (this.modalData.entityStatus = false);
    },
    handleOk_entity_profile(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.entityInformationData.entity_name = this.modalData.entityName;
      this.entityInformationData.uen = this.modalData.registrationNumber;
      this.entityInformationData.incorporation_date =
        this.modalData.incorporationDate;
      this.entityInformationData.financial_end = this.modalData.financialYear;
      this.modalData.entityStatus == true
        ? (this.entityInformationData.status = "activated")
        : (this.entityInformationData.status = "inactivated");

      this.$nextTick(() => {
        this.$bvModal.hide("modal-entity-profile");
      });
    },

    resetModal_office_address() {
      this.modalData.addressLine1 = this.entityInformationData.address_line_1;
      this.modalData.addressLine2 = this.entityInformationData.address_line_2;
      this.modalData.city = this.entityInformationData.city;
      this.modalData.stateProvince = this.entityInformationData.state_province;
      this.modalData.zipPostcode = this.entityInformationData.zip_postcode;
      this.modalData.selectCountry = this.entityInformationData.select_country;
      this.modalData.country_id = this.entityInformationData.country_id;
    },
    handleOk_office_address(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.entityInformationData.address_line_1 = this.modalData.addressLine1;
      this.entityInformationData.address_line_2 = this.modalData.addressLine2;
      this.entityInformationData.city = this.modalData.city;
      this.entityInformationData.state_province = this.modalData.stateProvince;
      this.entityInformationData.zip_postcode = this.modalData.zipPostcode;
      this.entityInformationData.country_id = this.modalData.country_id;
      this.entityInformationData.select_country =
        this.options_country[this.modalData.country_id].text;

      this.$nextTick(() => {
        this.$bvModal.hide("modal-office-address");
      });
    },

    resetModal_principal_activites() {
      this.modalData.primaryActivity =
        this.entityInformationData.primaryActivity;
      this.modalData.secondaryActivity =
        this.entityInformationData.secondaryActivity;
    },
    handleOk_principal_activites(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.entityInformationData.primaryActivity =
        this.modalData.primaryActivity;
      this.entityInformationData.secondaryActivity =
        this.modalData.secondaryActivity;

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