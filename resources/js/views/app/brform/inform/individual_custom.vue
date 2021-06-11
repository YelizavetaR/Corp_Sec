<template>
  <base-container
    boxed
    with-loader
    :is-loading="isLoading"
    :loader-color="vars.loaderColor"
  >
    <div>
      <div class="row" id="header_spans">
        <span class="header_owner">{{ $t("brform.header_individual") }}</span>
      </div>
      <div class="row" id="input_fieldaares">
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
          <base-input
            auto-focus
            :label="$t('brform.formername')"
            type="text"
            v-model="formData.formername"
            :error.sync="formErrors.formername"
          />
        </div>
        <div class="col-12 col-md-6 mb-4">
          <base-input
            auto-focus
            :label="$t('brform.aliasany')"
            type="text"
            v-model="formData.aliasany"
            :error.sync="formErrors.aliasany"
          />
        </div>
        <div class="col-12 col-md-6 mb-4">
          <base-select
            :options="preRequisite.currencies"
            track-by="name"
            show-by="description"
            v-model="formData.aliasanyselect"
            :label="$t('brform.aliasany')"
            :allow-empty="false"
            :disabled="isLoading"
            required
          />
        </div>
        <div class="col-12 col-md-6 mb-4">
          <base-input
            auto-focus
            :label="$t('brform.residential')"
            type="text"
            v-model="formData.residential"
            :error.sync="formErrors.residential"
          />
        </div>
        <div class="col-12 col-md-6 mb-4">
          <base-select
            :options="preRequisite.currencies"
            track-by="name"
            show-by="description"
            v-model="formData.countryresidence"
            :label="$t('brform.countryresidence')"
            :allow-empty="false"
            :disabled="isLoading"
            required
          />
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
        <div class="col-12 col-md-6 mb-4">
          <base-input
            :label="$t('brform.date_birth')"
            addon-right-icon="far fa-calendar-alt"
            type="text"
            v-model="formData.date_birth"
            :error.sync="formErrors.date_birth"
            :is-wrapper="true"
          >
            <date-picker
              v-model="formData.date_birth"
              :config="vars.datepickerConfig"
              class="form-control datepicker"
            >
            </date-picker>
          </base-input>
        </div>
        <div class="col-12 col-md-6 mb-4">
          <base-select
            :options="preRequisite.currencies"
            track-by="name"
            show-by="description"
            v-model="formData.nationlity"
            :label="$t('brform.nationlity')"
            :allow-empty="false"
            :disabled="isLoading"
            required
          />
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
    </div>
    <div class="card-body table-responsive p-0">
      <table class="table table-hover" :is-loading="isLoading">
        <tbody>
          <tr>
            <th>Name</th>
            <th>KYC Type</th>
            <th>Action</th>
          </tr>

          <tr v-for="item in tabledata" :key="item.id">
            <td>{{ item.name }}</td>
            <td>
              <select
                v-model="item.id"
                class="loads"
                label="select"
                v-on:change="getLoadStock(item.id)"
              >
                <option value="" selected disabled>Choose</option>
                <option
                  v-for="load in preRequisite.select"
                  :key="load.id"
                  :value="load.name"
                  :id="load.id"
                  v-bind:selected="selected4"
                >
                  {{ load.name }}
                </option>
              </select>
            </td>
            <td>
              <a href="#" @click="deletePhoto(item.id)">
                <b-icon
                  icon="trash"
                  class="delete_icon"
                  aria-hidden="true"
                ></b-icon>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <pagination :data="tabledata"></pagination>
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
        :is-loading="isLoading"
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
    <div class="director_field">
      <div class="span_field">
        <span class="intented_span">
          {{ $t("brform.attachheader") }}
        </span>
        <span class="kyc_span">{{ $t("brform.span1_kyca") }}</span>
        <span class="kyc_span">{{ $t("brform.span2_kycb") }}</span>
      </div>
    </div>
    <div class="button_grup">
      <button class="btn btn-info">{{ $t("brform.save") }}</button>
      <button
        @click="myFilter"
        @click.stop="
          $router.push({
            name: 'appfaindividual_owner',
          })
        "
        class="btn btn-info"
      >
        {{ $t("brform.savenext") }}
      </button>
      <button class="btn btn-gray-lightest">
        {{ $t("brform.cancel") }}
      </button>
    </div>
  </base-container>
</template>

<script>
import form from "@mixins/config-form";
import { CollapseTransition } from "vue2-transitions";
import { BFormTextarea } from "bootstrap-vue";
import { BFormGroup } from "bootstrap-vue";
import { BFormCheckbox } from "bootstrap-vue";
import { BFormRadioGroup } from "bootstrap-vue";
import { BFormSelect } from "bootstrap-vue";
import { BIcon } from "bootstrap-vue";
import table from "@mixins/table";
import vue2Dropzone from "vue2-dropzone";
import axios from "axios";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
Vue.component("b-icon", BIcon);
import { BButton } from "bootstrap-vue";
import { IconsPlugin } from "bootstrap-vue";
Vue.use(IconsPlugin);
Vue.component("b-form-textarea", BFormTextarea);
Vue.component("b-form-radio-group", BFormRadioGroup);
Vue.component("b-button", BButton);
Vue.component("b-form-select", BFormSelect);
Vue.component("b-form-group", BFormGroup);
Vue.component("b-form-checkbox", BFormCheckbox);

export default {
  extends: form,
  table,
  components: {
    CollapseTransition,
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      selected4: "select",
      selected1: "",
      selected2: null,
      options2: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
      ],
      selected3: null,
      options3: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option", disabled: true },
      ],
      options1: [
        { item: "non_individual", name: "Non Individual" },
        { item: "individual", name: "Individual" },
      ],
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
      tabledata: [],
      fileName: "",
      select: "select",
      messages: [],
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
        formername: "Cho chap",
        aliasany: "Cho chap",
        entity_type: "",
        aliasanyselect: "",
        countryresidence: "",
        nationlity: "",
        residential: "",
        officeadress: "",
        contactnumber: "",
        principle: "",
        orgRecognitionNumber: "",
        orgRecognitionBody: "",
        orgAddressLine1: "",
        orgAddressLine2: "",
        orgCity: "",
        orgState: "",
        date_birth: "",
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
        select: [
          {
            id: "1",
            name: "Certification Of Incorporation",
          },
          {
            id: "2",
            name: "Certificate of Registration",
          },
          {
            id: "3",
            name: "Proof of Agent  Authority",
          },
          {
            id: "4",
            name: "others",
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
  mounted() {
    this.fetchINitData();
  },
  methods: {
    myFilter() {
      document.querySelector("#in_navigation1").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation4").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation5").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation6").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation7").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation3").style.backgroundColor =
        "#32c620";
    },
    getLoadStock(id) {
      console.log(id);
    },
    deletePhoto(id) {
      axios({
        method: "post",
        url: `/files/delete/${id}`,
        headers: {
          "X-CSRF-TOKEN":
            document.head.querySelector("[name=csrf-token]").content,
        },
      })
        .then((response) => {
          console.log(response.data);
          this.$toasted.success(response.data.success);
          setTimeout(() => {
            this.$toasted.clear();
            this.fetchINitData();
          }, 1500);
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
    fetchINitData() {
      axios({
        method: "get",
        url: "/files/load",
        headers: {
          "X-CSRF-TOKEN":
            document.head.querySelector("[name=csrf-token]").content,
        },
      })
        .then((response) => {
          this.isLoading = false;
          if (response.data.data != []) {
            this.tabledata = response.data.data;
          } else {
            this.tabledata = [];
          }
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
    uploadSuccess(file, response) {
      this.$toasted.success(response.success);
      setTimeout(() => {
        this.$toasted.clear();
        this.fetchINitData();
      }, 1500);
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
  padding: 10px;
  border-style: solid;
  border-width: 1px;
  border-top: hidden;
  border-color: #babdc0;
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
.kyc_span {
  color: black;
  font-size: 15px;
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
.delete_icon {
  font-size: 25px !important;
  color: #403e3e !important;
  margin-left: 10px !important;
  margin-top: 10px;
}
.delete_icon1 {
  font-size: 19px !important;
  justify-content: inherit;
  color: #403e3e !important;
  margin-top: 9px;
}
.plus_icon_icon1 {
  font-size: 19px !important;
  justify-content: inherit;
  color: #403e3e !important;
  margin-top: 9px;
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
#input_fieldaares {
  border-style: solid;
  border-width: 1px;
  padding: 15px;
  border-top: hidden;
}
.director_field {
  padding: 10px;
  border-style: solid;
  border-width: 1px;
  margin-top: 10px;
  border-color: darkgray;
}
.name_of {
  color: black;
  margin-top: 10px;
  font-size: 20px;
}

.popular {
  color: black;
  font-weight: 600;
  margin-top: 15px;
  font-size: 15px;
}
#name_field {
  margin-top: 10px;
  display: grid;
}
.director {
  color: black;
  font-weight: 700;
  font-size: 18px;
}
.popular_field {
  margin-top: 25px;
}
#popular_field {
  margin-top: 15px;
  display: flex;
}
#radio_groupfield {
  margin-left: 40px;
}
.header_tr {
  border-style: hidden;
}
.custom-select {
  width: 60%;
}
.plus_icon {
  font-size: 25px !important;
  color: #0e12f3 !important;
  margin-left: 10px !important;
  margin-top: 10px;
}
.director_field {
  padding: 10px;
  border-style: solid;
  border-width: 1px;
  margin-top: 10px;
  border-color: darkgray;
}
.plus_icon1 {
  font-size: 20px !important;
  color: #f4f4f7 !important;
  margin-top: 8px;
}
#buttonremove {
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
}
.removespan {
  margin-left: 3px;
  margin-top: 10px;
}
.addspan {
  margin-left: 3px;
  margin-top: 10px;
}
.btn.btn-light {
  display: flex;
  padding-left: 35px;
}
.btn.btn-primary {
  display: flex;
  padding-left: 35px;
}
#header_spans {
  border-style: solid;
  border-width: 1px;
  padding: 20px;
}
.header_owner {
  font-size: 20px;
  color: #464242;
  font-weight: 600;
}
.button_grup {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>