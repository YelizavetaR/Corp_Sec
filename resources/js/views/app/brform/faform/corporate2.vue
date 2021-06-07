<template>
  <base-container
    boxed
    with-loader
    :is-loading="isLoading"
    :loader-color="vars.loaderColor"
  >
    <div>
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
            <button class="btn btn-info" id="toggle-btn" @click="toggleModal">
              {{ $t("brform.select") }}
            </button>
          </div>
          <div class="col-md-8">
            <b-form-textarea
              id="textarea-default"
              rows="3"
              placeholder="New entity formation | Nominee director | Company Secretary | Nominee partner"
              disabled
            ></b-form-textarea>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      ref="my-modal"
      hide-footer
      title="PLEASE SELECT THE TYPE OF SERVICE REQUIRED"
    >
      <div class="d-block">
        <b-form-group v-slot="{ ariaDescribedby }">
          <b-form-checkbox
            v-for="option in options"
            v-model="selected"
            :key="option.value"
            :value="option.value"
            :aria-describedby="ariaDescribedby"
            name="flavour-3a"
          >
            {{ option.text }}
          </b-form-checkbox>
        </b-form-group>
      </div>
      <b-button
        class="mt-3"
        variant="outline-danger"
        block
        @click="hideModal"
        >{{ $t("brform.close") }}</b-button
      >
      <b-button
        class="mt-2"
        variant="outline-warning"
        block
        @click="toggleModal"
        >{{ $t("brform.save") }}</b-button
      >
    </b-modal>
    <div id="file-drag-drop">
      <vue-dropzone
        ref="myVueDropzone"
        id="dropzone"
        :options="dropzoneOptions"
        :useCustomSlot="true"
        v-on:vdropzone-success="uploadSuccess"
        v-on:vdropzone-error="uploadError"
        v-on:vdropzone-removed-file="fileRemoved"
      >
        <div class="dropzone-custom-content">
          <span class="drop-files">
            {{ $t("brform.uploadspan") }}
          </span>
          <b-icon icon="plus-circle-fill" aria-hidden="true"></b-icon>
        </div>
      </vue-dropzone>
    </div>
  </base-container>
</template>

<script>
import form from "@mixins/config-form";
import { CollapseTransition } from "vue2-transitions";
import { BFormTextarea } from "bootstrap-vue";
import { BFormGroup } from "bootstrap-vue";
import { BFormCheckbox } from "bootstrap-vue";
import { BIcon } from "bootstrap-vue";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
Vue.component("b-icon", BIcon);
import { BButton } from "bootstrap-vue";
import { IconsPlugin } from "bootstrap-vue";
Vue.use(IconsPlugin);
Vue.component("b-form-textarea", BFormTextarea);
Vue.component("b-button", BButton);
Vue.component("b-form-group", BFormGroup);
Vue.component("b-form-checkbox", BFormCheckbox);

export default {
  extends: form,
  components: {
    CollapseTransition,
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      dropzoneOptions: {
        url: "/files",
        headers: {
          "X-CSRF-TOKEN":
            document.head.querySelector("[name=csrf-token]").content,
        },
        addRemoveLinks: true,
        maxFiles: 5,
        thumbnailWidth: 150,
        maxFilesize: 500,
        autoDiscover: false,
        parallelUploads: 3,
      },
      fileName: "",
      selected: [], // Must be an array reference!
      options: [
        {
          text: "Formation of companies or other legal persons",
          value: "Formation",
        },
        { text: "Provision of director", value: "director" },
        { text: "Provision of Company of a secretary", value: "secretary" },
        { text: "Provision of partner of a Partnership", value: "partnership" },
        {
          text: "Provision of person to act in similar position for other legal person",
          value: "legal",
        },
        {
          text: "Provision of registered office,business address or correspondence or administrative address or related service",
          value: "registered",
        },
        {
          text: "Provision of person to act as shareholder of a corporation(other than one whose securities are listed on a prescribed secrities exchange)",
          value: "shareholder",
        },
      ],
      showNewModel: false,
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
  mounted() {},
  methods: {
    uploadSuccess(file, response) {
      console.log(
        "File Successfully Uploaded with file name: " + response.file
      );
      this.fileName = response.file;
    },
    uploadError(file, message) {
      console.log("An Error Occurred" + file + message);
    },
    fileRemoved() {},
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      console.log(this.selected);
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
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
#textarea-default {
  font-size: 25px;
}
.modal-title {
  font-size: 20px;
}
.d-block {
  padding: 10px;
}
.custom-control.custom-checkbox {
  margin-top: 10px;
}
.fileupoload {
  display: block;
  width: 80%;
  background: #f1f5ff;
  margin: auto;
  margin-top: 40px;
  font-size: 20px;
  line-height: 200px;
  border-radius: 4px;
}
.drop-files {
  border-style: dashed;
  padding: 37px;
  border-radius: 10px;
  border-color: darkturquoise;
}
.drag_field {
  text-align: center;
  position: relative;
}
i {
  position: absolute;
  font-size: 45px;
  top: 27px;
  left: 66%;
  position: absolute;
}
div.file-listing {
  width: 400px;
  margin: auto;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

div.file-listing img {
  height: 100px;
}
div.remove-container {
  text-align: center;
}

div.remove-container a {
  color: red;
  cursor: pointer;
}
a.submit-button {
  display: block;
  margin: auto;
  text-align: center;
  width: 200px;
  padding: 10px;
  text-transform: uppercase;
  background-color: #ccc;
  color: white;
  font-weight: bold;
  margin-top: 20px;
}
progress {
  width: 400px;
  margin: auto;
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
}
.b-icon.bi {
  display: inline-block;
  overflow: visible;
  font-size: 44px;
  vertical-align: 0.85em;
  margin-left: -26px;
  color: blue;
}
#dropzone {
  display: block;
  width: 80%;
  background: #f1f5ff;
  margin: auto;
  margin-top: 40px;
  font-size: 20px;
  line-height: 100px;
  border-radius: 4px;
}
</style>