<template>
  <form @submit.prevent="submit">
    <animated-loader
      :is-loading="isLoading || isFetching"
      :loader-color="vars.loaderColor"
    />
    <div class="row">
      <div class="col-12 col-lg-12">
        <div class="title-margin">
          <h4 class="font-weight-bold">{{ $t("customer.entity_info") }}</h4>
        </div>
      </div>
    </div>
    <br />

    <div class="row padding-left">
      <h6 class="font-weight-bold">{{ $t("customer.setup_entity") }}</h6>
      <b-form-radio-group
        v-model="selected"
        :options="options"
        value-field="item"
        text-field="name"
        class="padding-left"
      />
    </div>

    <div class="row">
      <div class="col-12 col-lg-12">
        <hr class="hr-border" />
      </div>
    </div>
    <br />

    <div class="row padding-left">
      <div class="col-10 col-lg-10">
        {{ $t("customer.info_your_entity") }}
        <hr class="hr-detail" />
        <base-input
          :label="formLabels.entity_name"
          type="text"
          v-model="formData.entityName"
          :error.sync="formErrors.entity_name"
          required
        />
        <base-input
          :label="formLabels.incorporation_date"
          addon-right-icon="far fa-calendar-alt"
          type="text"
          v-model="formData.incorporation_date"
          :error.sync="formErrors.incorporation_date"
          :is-wrapper="true"
        >
          <date-picker
            v-model="formData.incorporation_date"
            :config="vars.datepickerConfig"
            class="form-control datepicker"
          >
          </date-picker>
        </base-input>
        <base-input
          :label="formLabels.financial_end"
          addon-right-icon="far fa-calendar-alt"
          type="text"
          v-model="formData.financial_end"
          :error.sync="formErrors.financial_end"
          :is-wrapper="true"
        >
          <date-picker
            v-model="formData.financial_end"
            :config="vars.datepickerConfig"
            class="form-control datepicker"
          >
          </date-picker>
        </base-input>
        <br />
        <div class="sub-font-size">{{ $t("customer.ssic_activity") }}</div>
        <b-form-select
          v-model="selected_activity"
          :options="options_activity"
        ></b-form-select>
        <div class="padding-top">
          <b-form-textarea
            id="describe_content"
            rows="3"
            max-rows="8"
            :placeholder="$t('customer.describe_business')"
          ></b-form-textarea>
        </div>
        <br />
        <div>
          <span>{{ $t("customer.question_1") }}</span>
          <span class="sub-font-size sub-font-color padding-left">{{
            $t("customer.sub_text")
          }}</span>
        </div>
        <br />
        <b-form-checkbox-group
          v-model="question1Selected"
          :options="question1Options"
          :aria-describedby="ariaDescribedby"
          stacked
        ></b-form-checkbox-group>
        <br />
        <div>
          <span class="color-gray">{{ $t("customer.other_reason") }}</span>
          <hr class="hr-detail" />
        </div>
        <div>
          <span>{{ $t("customer.question_2") }}</span>
          <span class="sub-font-size sub-font-color padding-left">{{
            $t("customer.sub_text")
          }}</span>
        </div>
        <br />
        <b-form-checkbox-group
          v-model="question2Selected"
          :options="question2Options"
          :aria-describedby="ariaDescribedby"
          stacked
        ></b-form-checkbox-group>
        <br />
        <div>
          <span class="color-gray">{{ $t("customer.other_reason") }}</span>
          <hr class="hr-detail" />
          <span class="font-weight-bolder padding-left">{{
            $t("customer.company_address")
          }}</span>
          <div class="row padding-left">
            <div class="col-12 col-md-6 mb-3">
              <span class="sub-font-size">{{
                $t("customer.street_address")
              }}</span>
              <base-input
                :label="formLabels.address_line_1"
                type="text"
                v-model="formData.addressLine1"
                :error.sync="formErrors.address_line_1"
                required
              />
            </div>
            <div class="col-12 col-md-6 mb-3">
              <span class="sub-font-size">{{
                $t("customer.unit_building")
              }}</span>
              <base-input
                :label="formLabels.address_line_2"
                type="text"
                v-model="formData.addressLine2"
                :error.sync="formErrors.address_line_2"
                required
              />
            </div>
            <div class="col-12 col-md-6 mb-3">
              <base-input
                :label="formLabels.city"
                type="text"
                v-model="formData.city"
                :error.sync="formErrors.city"
                required
              />
            </div>
            <div class="col-12 col-md-6 mb-3">
              <base-input
                :label="formLabels.state_province"
                type="text"
                v-model="formData.stateProvince"
                :error.sync="formErrors.state_province"
                required
              />
            </div>
            <div class="col-12 col-md-4 mb-3">
              <base-input
                :label="formLabels.zip_postcode"
                type="text"
                v-model="formData.zip_postcode"
                :error.sync="formErrors.zip_postcode"
                required
                class="select-padding"
              />
            </div>
            <div class="col-12 col-md-8 mb-3">
              <span class="sub-font-size">{{
                $t("customer.select_country")
              }}</span>
              <b-form-select
                v-model="selected_country"
                :options="options_country"
              ></b-form-select>
            </div>
          </div>
        </div>
        <div class="form-footer mt-3">
          <div class="right-side">
            <base-button
              type="button"
              design="light"
              @click="$router.back()"
              tabindex="-1"
              ><i class="fas fa-chevron-left"></i>
              {{ $t("general.cancel") }}</base-button
            >
            <base-button type="submit" design="primary"
              ><i class="fas fa-save"></i>
              {{
                $t("global.save", { attribute: $t("customer.entity") })
              }}</base-button
            >
          </div>
        </div>
      </div>
      <div class="col-2 col-lg-2"></div>
    </div>
  </form>
</template>

<script>
import form from "@mixins/form";
import {
  BFormRadioGroup,
  BFormSelect,
  BFormTextarea,
  BFormCheckboxGroup,
} from "bootstrap-vue";
Vue.component("b-form-radio-group", BFormRadioGroup);
Vue.component("b-form-select", BFormSelect);
Vue.component("b-form-textarea", BFormTextarea);
Vue.component("b-form-checkbox-group", BFormCheckboxGroup);

export default {
  extends: form,
  data() {
    return {
      selected: "new",
      options: [
        { item: "new", name: $t("customer.new") },
        { item: "transfer", name: $t("customer.transfer_corporate") },
      ],
      selected_activity: 0,
      options_activity: [
        { value: 0, text: "Please select an option" },
        { value: 1, text: "This is First option" },
      ],
      question1Selected: [4], // Must be an array reference!
      question1Options: [
        { text: $t("customer.expansion_business"), value: 0 },
        { text: $t("customer.entering_asia"), value: 1 },
        { text: $t("customer.requested_parties"), value: 2 },
        { text: $t("customer.recognized_hub"), value: 3 },
        { text: $t("customer.others_specify"), value: 4 },
      ],
      question2Selected: [0], // Must be an array reference!
      question2Options: [
        { text: $t("customer.savings_employment"), value: 0 },
        { text: $t("customer.profit_business"), value: 1 },
        { text: $t("customer.investment_gain"), value: 2 },
        { text: $t("customer.loans_institutions"), value: 3 },
        { text: $t("customer.personal_savings"), value: 4 },
        { text: $t("customer.inheritance"), value: 5 },
        { text: $t("customer.investors"), value: 6 },
        { text: $t("customer.others_specify"), value: 7 },
      ],
      selected_country: 0,
      options_country: [{ value: 0, text: "Singapore" }],
      formData: {
        uuid: null,
        entity_name: "",
        incorporation_date: "",
        financial_end: "",
        address_line_1: "",
        address_line_2: "",
        city: "",
        state_province: "",
        zip_postcode: "",
        select_country: "",
      },
      formLabels: {
        entity_name: $t("customer.entity_name"),
        incorporation_date: $t("customer.incorporation_date"),
        financial_end: $t("customer.financial_end"),
        address_line_1: $t("customer.address_line_1"),
        address_line_2: $t("customer.address_line_2"),
        city: $t("customer.city"),
        state_province: $t("customer.state_province"),
        zip_postcode: $t("customer.zip_postcode"),
        select_country: $t("customer.select_country"),
      },
      initUrl: "users",
    };
  },
  mounted() {
    this.getInitialData();
  },
};
</script>

<style lang="scss" scoped>
.hr-border {
  border-top: 1px solid #000;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.hr-detail {
  margin-top: 0rem;
  margin-bottom: 1rem;
}

.padding-left {
  padding-left: 30px;
}

.padding-top {
  padding-top: 20px;
}

.sub-font-size {
  font-size: 10px;
}

.sub-font-color {
  color: red;
}

.select-padding {
  padding-top: 7px;
}
</style>