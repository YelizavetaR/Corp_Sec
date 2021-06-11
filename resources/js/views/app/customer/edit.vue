<template>
  <base-container
    boxed
    with-loader
    :is-loading="isLoading"
    :loader-color="vars.loaderColor"
    id="printable"
  >
    <div v-if="entity">
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
          v-model="entity.entityType"
          :options="setup_entity_options"
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
            v-model="entity.entityName"
            required
          />
          <base-input
            :label="formLabels.incorporation_date"
            addon-right-icon="far fa-calendar-alt"
            type="text"
            v-model="entity.incorporationDate"
            :error.sync="formErrors.incorporation_date"
            :is-wrapper="true"
          >
            <date-picker
              v-model="entity.incorporationDate"
              :config="vars.datepickerConfig"
              class="form-control datepicker"
            >
            </date-picker>
          </base-input>
          <base-input
            :label="formLabels.financial_end"
            addon-right-icon="far fa-calendar-alt"
            type="text"
            v-model="entity.financialEnd"
            :error.sync="formErrors.financial_end"
            :is-wrapper="true"
          >
            <date-picker
              v-model="entity.financialEnd"
              :config="vars.datepickerConfig"
              class="form-control datepicker"
            >
            </date-picker>
          </base-input>
          <br />
          <div class="sub-font-size">{{ $t("customer.ssic_activity") }}</div>
          <b-form-select
            v-model="entity.ssicId"
            :options="ssic_options"
          ></b-form-select>
          <div class="padding-top">
            <b-form-textarea
              id="describe_content"
              rows="3"
              max-rows="8"
              v-model="entity.describeBusiness"
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
            v-model="question1_selected"
            :options="question1_options"
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
            v-model="question2_selected"
            :options="question2_options"
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
                  v-model="entity.addressLine1"
                />
              </div>
              <div class="col-12 col-md-6 mb-3">
                <span class="sub-font-size">{{
                  $t("customer.unit_building")
                }}</span>
                <base-input
                  :label="formLabels.address_line_2"
                  type="text"
                  v-model="entity.addressLine2"
                />
              </div>
              <div class="col-12 col-md-6 mb-3">
                <base-input
                  :label="formLabels.city"
                  type="text"
                  v-model="entity.city"
                />
              </div>
              <div class="col-12 col-md-6 mb-3">
                <base-input
                  :label="formLabels.state_province"
                  type="text"
                  v-model="entity.stateProvince"
                />
              </div>
              <div class="col-12 col-md-4 mb-3">
                <base-input
                  :label="formLabels.zip_postcode"
                  type="text"
                  v-model="entity.zipPostcode"
                  class="select-padding"
                />
              </div>
              <div class="col-12 col-md-8 mb-3">
                <span class="sub-font-size">{{
                  $t("customer.select_country")
                }}</span>
                <b-form-select
                  v-model="entity.countryId"
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
              <base-button type="submit" design="primary" @click="updateEntity"
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
    </div>
  </base-container>
</template>

<script>
import view from "@mixins/view";
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
  extends: view,
  data() {
    return {
      initUrl: "entity/show",
      dataTitle: $t("customer.entity"),
      fallBackRoute: "appCustomerList",
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
      question1_selected: [4],
      question2_selected: [0],
    };
  },
  methods: {
    updateEntity() {
      this.entity.question1Id = "";
      this.entity.question2Id = "";

      for (let x of this.question1_selected) {
        this.entity.question1Id += x + ",";
      }
      for (let y of this.question2_selected) {
        this.entity.question2Id += y + ",";
      }
      this.entity.question1Id = this.entity.question1Id.substr(
        0,
        this.entity.question1Id.length - 1
      );
      this.entity.question2Id = this.entity.question2Id.substr(
        0,
        this.entity.question2Id.length - 1
      );

      this.isLoading = true;
      this.Custom({
        url: `entity/update/${this.entity.uuid}`,
        method: "post",
        data: this.entity,
      })
        .then((response) => {
          this.$toasted.success($t("global.success"));
          setTimeout(() => {
            this.$toasted.clear();
          }, 1500);
          this.isLoading = false;
        })
        .catch((error) => {
          this.isLoading = false;
          formUtil.handleErrors(error);
        });
    },
  },
  computed: {
    question1() {
      if (!this.entity) return [];
      return this.entity.question1Id.split(",").map(function (item) {
        return parseInt(item);
      });
    },
    question2() {
      if (!this.entity) return [];
      return this.entity.question2Id.split(",").map(function (item) {
        return parseInt(item);
      });
    },
  },
  watch: {
    question1(newQuestion) {
      this.question1_selected = newQuestion;
      console.log(this.question1_selected);
    },
    question2(newQuestion) {
      this.question2_selected = newQuestion;
    },
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
