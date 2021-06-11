<template>
  <base-container boxed>
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
        v-model="setup_entity_selected"
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
          v-model="formData.entity_name"
          required
        />
        <base-input
          :label="formLabels.incorporation_date"
          addon-right-icon="far fa-calendar-alt"
          type="text"
          v-model="formData.incorporation_date"
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
          v-model="ssic_selected"
          :options="ssic_options"
        ></b-form-select>
        <div class="padding-top">
          <b-form-textarea
            id="describe_content"
            rows="3"
            max-rows="8"
            v-model="formData.describe_business"
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
                v-model="formData.address_line_1"
              />
            </div>
            <div class="col-12 col-md-6 mb-3">
              <span class="sub-font-size">{{
                $t("customer.unit_building")
              }}</span>
              <base-input
                :label="formLabels.address_line_2"
                type="text"
                v-model="formData.address_line_2"
              />
            </div>
            <div class="col-12 col-md-6 mb-3">
              <base-input
                :label="formLabels.city"
                type="text"
                v-model="formData.city"
              />
            </div>
            <div class="col-12 col-md-6 mb-3">
              <base-input
                :label="formLabels.state_province"
                type="text"
                v-model="formData.state_province"
              />
            </div>
            <div class="col-12 col-md-4 mb-3">
              <base-input
                :label="formLabels.zip_postcode"
                type="text"
                v-model="formData.zip_postcode"
                class="select-padding"
              />
            </div>
            <div class="col-12 col-md-8 mb-3">
              <span class="sub-font-size">{{
                $t("customer.select_country")
              }}</span>
              <b-form-select
                v-model="country_id"
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
            <base-button type="submit" design="primary" @click="addEntity"
              ><i class="fas fa-save"></i>
              {{
                $t("global.add", { attribute: $t("customer.entity") })
              }}</base-button
            >
          </div>
        </div>
      </div>
      <div class="col-2 col-lg-2"></div>
    </div>
  </base-container>
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
      formData: {
        uuid: null,
        entity_name: "",
        entity_type: 0,
        incorporation_date: "",
        financial_end: "",
        ssic_id: 0,
        describe_business: "",
        question1_id: "",
        question2_id: "",
        address_line_1: "",
        address_line_2: "",
        city: "",
        state_province: "",
        zip_postcode: "",
        country_id: 0,
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
    };
  },
  methods: {
    addEntity() {
      this.formData.entity_type = this.setup_entity_selected;
      this.formData.ssic_id = this.ssic_selected;
      for (let x of this.question1_selected) {
        this.formData.question1_id += x + ",";
      }
      for (let y of this.question2_selected) {
        this.formData.question2_id += y + ",";
      }
      this.formData.question1_id = this.formData.question1_id.substr(
        0,
        this.formData.question1_id.length - 1
      );
      this.formData.question2_id = this.formData.question2_id.substr(
        0,
        this.formData.question2_id.length - 1
      );
      this.formData.country_id = this.country_id;
      console.log(this.formData);

      this.isLoading = true;
      this.Custom({
        url: `entity/store`,
        method: "post",
        data: this.formData,
      })
        .then((response) => {
          this.$toasted.success($t("global.success"));
          this.initFormData();
          setTimeout(() => {
            this.$toasted.clear();
          }, 1500);
          this.isLoading = false;
        })
        .catch((error) => {
          console.error(error.message);
        });
    },

    initFormData() {
      this.setup_entity_selected = 0;
      this.ssic_selected = 0;
      this.question1_selected = [4];
      this.question2_selected = [0];
      this.country_id = 0;

      this.formData.uuid = null;
      this.formData.entity_name = "";
      this.formData.entity_type = 0;
      this.formData.incorporation_date = "";
      this.formData.financial_end = "";
      this.formData.ssic_id = 0;
      this.formData.describe_business = "";
      this.formData.question1_id = "";
      this.formData.question2_id = "";
      this.formData.address_line_1 = "";
      this.formData.address_line_2 = "";
      this.formData.city = "";
      this.formData.state_province = "";
      this.formData.zip_postcode = "";
      this.formData.country_id = 0;
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