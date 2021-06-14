<template>
  <div>
    <animated-loader
      :is-loading="isLoading || isFetching"
      :loader-color="vars.loaderColor"
    />
    <div class="row">
      <div class="col-12 col-md-6 mb-3">
        <base-input
          auto-focus
          :label="formLabels.name"
          type="text"
          v-model="formData.profile.name"
          :error.sync="formErrors.profileName"
          required
          format="startCase"
        />
      </div>
      <div class="col-12 col-md-6 mb-3">
        <base-input
          :label="formLabels.username"
          type="text"
          v-model="formData.username"
          :error.sync="formErrors.username"
          required
        />
      </div>
      <div class="col-12 col-md-6 mb-3">
        <base-input
          :label="formLabels.email"
          type="text"
          v-model="formData.email"
          :error.sync="formErrors.email"
          required
          format="lowercase"
        />
      </div>
      <div class="col-12 col-md-6 mb-3">
        <base-select
          :options="preRequisite.genders"
          v-model="formData.profile.gender"
          :label="formLabels.gender"
          :error.sync="formErrors.profileGender"
          required
          preselect-first
        />
      </div>
      <div class="col-12 col-md-6 mb-3">
        <base-input
          :label="formLabels.contactnumber"
          type="text"
          v-model="formData.contactnumber"
          :error.sync="formErrors.contactnumber"
          required
          format="lowercase"
        />
      </div>
      <div class="col-12 col-md-6 mb-3">
        <b-form-select
          v-model="formData.selected"
          :label="formLabels.usergroup"
          class="bform_custom"
          :options="formData.options"
          required
        ></b-form-select>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <b-form-select
          v-model="formData.selected1"
          :options="formData.options1"
          class="bform_custom1"
          required
        ></b-form-select>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <b-form-select
          v-model="formData.selected2"
          :options="formData.options2"
          class="bform_custom2"
          required
        ></b-form-select>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <div class="col-md-6" v-if="image">
          <img :src="image" class="img-responsive" height="150" width="150" />
          <i class="fa fa-times-circle" @click="iconclick()"></i>
        </div>
        <div class="col-md-6" id="moned">
          <b-form-group
            v-on:change="onImageChange"
            label="Default:"
            label-cols-sm="2"
          >
            <b-form-file id="file-default"></b-form-file>
          </b-form-group>
        </div>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <b-form-checkbox v-model="formData.checked" name="check-button" switch>
          {{ $t("brform.status") }} <b>(Checked: {{ formData.checked }})</b>
        </b-form-checkbox>
      </div>
    </div>

    <div class="form-footer mt-3">
      <div class="left-side">
        <base-button
          type="button"
          design="light"
          @click="$router.back()"
          tabindex="-1"
          ><i class="fas fa-chevron-left"></i>
          {{ $t("general.cancel") }}</base-button
        >
        <base-checkbox
          class="ml-3 mt-2"
          v-model="keepAdding"
          v-if="showKeepAdding"
        >
          {{ $t("general.keep_adding") }}
        </base-checkbox>
      </div>
      <div class="right-side">
        <base-button type="button" design="light" @click="reset">{{
          $t("general.reset")
        }}</base-button>
        <base-button type="submit" design="primary" @click="filter()"
          ><i class="fas fa-save"></i>
          {{ $t("global.save", { attribute: $t("user.user") }) }}</base-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import form from "@mixins/form";
import { BFormSelect } from "bootstrap-vue";
import { BFormGroup } from "bootstrap-vue";
import { BFormFile } from "bootstrap-vue";
import { BFormCheckbox } from "bootstrap-vue";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import { BIcon } from "bootstrap-vue";
Vue.component("b-icon", BIcon);
Vue.component("b-form-select", BFormSelect);
Vue.component("b-form-group", BFormGroup);
Vue.component("b-form-group", BFormFile);
Vue.component("b-form-checkbox", BFormCheckbox);

export default {
  extends: form,
  data() {
    return {
      image: "",
      formData: {
        checked: false,
        status: "",
        selected: null,
        options: [
          { value: null, text: "User Group" },
          { value: "staff", text: "Staff" },
          { value: "admin", text: "Admin" },
        ],
        selected1: null,
        options1: [
          { value: null, text: "Department" },
          { value: "charted_accounting", text: "Charted Accounting" },
          { value: "process", text: "Process" },
        ],
        selected2: null,
        options2: [
          { value: null, text: "Designation" },
          { value: "manager", text: "Manager" },
          { value: "executive", text: "Executive" },
        ],
        uuid: null,
        username: "",
        usergroup: "",
        contactnumber: "",
        email: "",
        profile: {
          name: "",
          gender: null,
          birthDate: null,
        },
        password: "",
        passwordConfirmation: "",
        forcePassword: false,
      },
      preRequisite: {
        usergroup: [
          {
            name: "Staff",
          },
          {
            name: "Admin",
          },
        ],
        genders: [],
      },
      formLabels: {
        name: $t("user.props.name"),
        email: $t("user.props.email"),
        contactnumber: $t("user.props.contactnumber"),
        usergroup: $t("user.props.usergroup"),
        gender: $t("user.props.gender"),
        birthDate: $t("user.props.birth_date"),
        username: $t("user.props.username"),
        password: $t("user.props.password"),
        passwordConfirmation: $t("user.props.password_confirmation"),
      },
      initUrl: "users",
    };
  },
  methods: {
    iconclick() {
      this.image = "";
      if (this.image == "") {
        document.querySelector(".d-block.form-file-text").innerHTML =
          "No file chosen";
      }
      console.log("this icon click");
    },
    setImage: function (output) {
      this.hasImage = true;
      this.image = output;
      console.log("Info", output.info);
      console.log("Exif", output.exif);
    },
    onImageChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    setavar() {
      document.querySelector(".d-block.form-file-text").innerHTML =
        "Please select avatar";
    },
    createImage(file) {
      let reader = new FileReader();
      let vm = this;
      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
      document.querySelector(
        ".d-block.form-file-text"
      ).innerHTML = `${file.name}`;
    },
    filter() {
      if (this.formData.checked == false) this.formData.status = "unactivated";
      if (this.formData.checked == true) this.formData.status = "activated";
      this.senddata = {};
      this.senddata.name = this.formData.profile.name;
      this.senddata.username = this.formData.username;
      this.senddata.email = this.formData.email;
      this.senddata.gender = this.formData.profile.gender;
      this.senddata.contactnumber = this.formData.contactnumber;
      this.senddata.selected = this.formData.selected;
      this.senddata.selected1 = this.formData.selected1;
      this.senddata.selected2 = this.formData.selected2;
      this.senddata.image = this.image;
      this.senddata.status = this.formData.status;
      console.log(this.senddata);
      this.Custom({
        url: `user/insert`,
        method: "post",
        data: this.senddata,
      })
        .then((response) => {
          console.log(response);
          // this.$toasted.success(response.message);
          // setTimeout(() => {
          //   this.$toasted.clear();
          // }, 1500);
          // this.isLoading = false;
        })
        .catch((error) => {
          this.isLoading = false;
          formUtil.handleErrors(error);
        });
    },
  },
  mounted() {
    this.getInitialData();
    this.setavar();
  },
};
</script>
<style scoped>
.bform_custom {
  height: 80%;
}
.bform_custom1 {
  height: 120%;
}
.bform_custom2 {
  height: 120%;
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
#user_image {
  margin-top: 10px;
  margin-left: 20px;
  width: 18%;
  padding-left: 12px;
  border: hidden;
}
#moned {
  margin-top: 10px;
}
i.fa.fa-times-circle {
  position: relative;
  top: -60px;
  left: -4px;
  font-size: 25px;
  color: black;
}
</style>