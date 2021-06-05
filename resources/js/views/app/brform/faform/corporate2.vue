<template>
  <base-container
    boxed
    with-loader
    :is-loading="isLoading"
    :loader-color="vars.loaderColor"
  >
    <form @submit.prevent="submit">
      <div class="row">
        <div class="col-12 col-md-6 mb-4">
          <base-input
            auto-focus
            :label="$t('brform.fullname')"
            type="text"
            v-model="formData.fullname"
            :error.sync="formErrors.fullname"
          />
        </div>
        <div class="col-12 col-md-6 mb-4">
          <base-select
            :options="preRequisite.currencies"
            track-by="name"
            show-by="description"
            v-model="formData.entity_type"
            :label="$t('brform.entity_type')"
            :allow-empty="false"
            :disabled="isLoading"
            required
          />
        </div>
        <div class="col-12 col-md-6 mb-4">
          <base-input
            auto-focus
            :label="$t('brform.registration')"
            type="text"
            v-model="formData.registration"
            :error.sync="formErrors.registration"
          />
        </div>
        <div class="col-12 col-md-6 mb-4">
          <base-input
            auto-focus
            :label="$t('brform.officeadress')"
            type="text"
            v-model="formData.officeadress"
            :error.sync="formErrors.officeadress"
          />
        </div>
        <div class="col-12 col-md-6 mb-4">
          <base-input
            auto-focus
            :label="$t('brform.principle')"
            type="text"
            v-model="formData.principle"
            :error.sync="formErrors.principle"
          />
        </div>
        <div class="col-12 col-md-6 mb-4">
          <base-select
            :options="preRequisite.registrationca"
            track-by="name"
            show-by="description"
            v-model="formData.entity_type"
            :label="$t('brform.incorportatio')"
            :allow-empty="false"
            :disabled="isLoading"
            required
          />
        </div>
        <div class="col-12 col-md-6 mb-4">
          <base-input
            :label="$t('brform.org_foundation_date')"
            addon-right-icon="far fa-calendar-alt"
            type="text"
            v-model="formData.orgFoundationDate"
            :error.sync="formErrors.orgFoundationDate"
            :is-wrapper="true"
          >
            <date-picker
              v-model="formData.orgFoundationDate"
              :config="vars.datepickerConfig"
              class="form-control datepicker"
            >
            </date-picker>
          </base-input>
        </div>
        <div class="col-12 col-md-6 mb-4">
          <base-input
            auto-focus
            :label="$t('brform.contactnumber')"
            type="text"
            v-model="formData.contactnumber"
            :error.sync="formErrors.contactnumber"
          />
        </div>
      </div>
      <div class="intented_field">
        <div class="span_field">
          <span class="intented_span">
            {{ $t("brform.intented_span") }}
          </span>
          <span class="detail">
            {{ $t("brform.detailspans") }}
          </span>
          <span class="nature">
            {{ $t("brform.naturespan") }}
          </span>
          <span class="relationship">
            {{ $t("brform.anticicated") }}
          </span>
        </div>
        <div class="textarea_field">
          <b-form-textarea
            id="submit_content"
            rows="5"
            max-rows="8"
          ></b-form-textarea>
        </div>
      </div>
      <div class="model_field">
        <div class="row">
          <div class="col-md-4">
            <button class="btn btn-info">
              {{ $t("brform.select") }}
            </button>
          </div>
          <div class="col-md-6">
            <b-form-textarea
              id="textarea-default"
              rows="6"
              placeholder="textarea"
            ></b-form-textarea>
          </div>
        </div>
      </div>
    </form>
  </base-container>
</template>

<script>
import form from "@mixins/config-form";
import { CollapseTransition } from "vue2-transitions";
import { BFormTextarea } from "bootstrap-vue";
Vue.component("b-form-textarea", BFormTextarea);

export default {
  extends: form,
  components: {
    CollapseTransition,
  },
  data() {
    return {
      formData: {
        fullname: "Popular Pte Ltd",
        entity_type: "",
        registration: "",
        officeadress: "",
        contactnumber: "",
        principle: "",
        orgRecognitionNumber: "",
        orgRecognitionBody: "",
        orgAddressLine1: "",
        orgAddressLine2: "",
        orgCity: "",
        orgState: "",
        orgZipcode: "",
        orgCountry: "",
        orgPhone: "",
        orgFax: "",
        orgEmail: "",
        orgWebsite: "",
        appName: "",
        appDesc: "",
        appThemeColor: "",
        appBackgroundColor: "",
        type: "basic",
      },
      preRequisite: {
        currencies: [
          {
            description: "Afghanistan Afghani",
            name: "AFN",
            symbol: "؋",
            position: "prefix",
          },
          {
            description: "af sdf",
            name: "AFN",
            symbol: "؋",
            position: "prefix",
          },
          {
            description: "gfg fgfg",
            name: "AFN",
            symbol: "؋",
            position: "prefix",
          },
        ],
        registrationca: [
          {
            description: "gfg fgfg",
            name: "AFN",
            symbol: "؋",
            position: "prefix",
          },
          {
            description: "gfg fgfg",
            name: "AFN",
            symbol: "؋",
            position: "prefix",
          },
          {
            description: "gfg fgfg",
            name: "AFN",
            symbol: "؋",
            position: "prefix",
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
.intented_span {
  color: black;
  font-size: 18px;
  font-family: sans-serif;
}
.span_field {
  margin-top: 10px;
  display: grid;
}
.intented_field {
  margin-top: 10px;
  padding: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: aliceblue;
}
.detail {
  color: black;
  font-size: 18px;
}
.nature {
  color: black;
  font-size: 18px;
}
.textarea_field {
  margin-top: 10px;
}
.relationship {
  color: black;
  font-size: 18px;
}
.model_field {
  border-style: solid;
  padding: 10px;
  border-width: 1px;
  border-color: darkgray;
  margin-top: 10px;
}
.button_field {
  margin-left: 20px;
}
</style>