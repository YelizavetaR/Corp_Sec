<template>
  <base-container
    boxed
    with-loader
    :is-loading="isLoading"
    :loader-color="vars.loaderColor"
    id="printable"
  >
    <div class="row" v-if="entity">
      <div class="col-1"></div>
      <div class="col-10 text-area">
        <div class="bold">{{ entity.subject }}</div>
        <br />
        <div>{{ entity.message }}</div>
        <br />
        <br />
        <div class="bold text-align-right">
          {{ $t("enquiry.by") }}{{ entity.name }}
        </div>
        <div class="text-align-right">
          <view-date
            :value="entity.createdAt"
            with-tz
            tag="span"
            class="mb-0"
          />
        </div>
      </div>
      <div class="col-1"></div>
    </div>

    <br />

    <div class="row" v-if="entity">
      <div class="col-10 offset-sm-2 offset-1">
        <div class="bold">{{ $t("enquiry.documents_attached") }}</div>
        <div v-for="(file, index) in attachments" :key="index">
          <div class="row">
            <div
              class="
                col-sm-8 col-xs-9 col-md-7 col-lg-6 col-10
                mt-3
                d-flex
                justify-content-between
              "
            >
              <span>{{ file }}</span>
              <div>
                <a
                  :href="'http://connect.test/uploads/enquiry/' + file"
                  class="text-black pr-4"
                  download
                >
                  <i class="fa fa-download"></i
                ></a>
                <a href="#" class="text-black"> <i class="fa fa-trash"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />

    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <b-form-textarea
          id="submit_content"
          rows="3"
          max-rows="8"
        ></b-form-textarea>
        <br />
        <div class="row">
          <div class="col-6 left-side">
            <base-button
              type="button"
              design="primary"
              @click="$router.back()"
              tabindex="-1"
              ><i class="fas fa-chevron-left"></i>
              {{ $t("general.back") }}</base-button
            >
          </div>
          <div class="col-6 text-align-right">
            <b-button variant="success">Submit</b-button>
          </div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
  </base-container>
</template>

<script>
import view from "@mixins/view";
import { mapGetters } from "vuex";
import { BFormTextarea, BButton } from "bootstrap-vue";
Vue.component("b-form-textarea", BFormTextarea);
Vue.component("b-button", BButton);

export default {
  extends: view,
  data() {
    return {
      initUrl: "enquiry/show",
      dataTitle: $t("enquiry.enquiry"),
      fallBackRoute: "appEnquiryList",
    };
  },
  watch: {
    $route(value) {
      if (value.name === "appEnquiryView") {
        this.uuid = value.params.uuid;
        this.getInitialData();
      }
    },
  },
  methods: {},
  computed: {
    attachments() {
      return this.entity.filePath.split("/");
    },
    ...mapGetters("user", {
      loggedInUser: "loggedInUser",
    }),
  },
};
</script>

<style lang="scss" scoped>
.bold {
  font-weight: bold;
}

.text-area {
  background: #e8e8e8;
  border-color: #888888;
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
}

.text-align-right {
  text-align: right;
}
</style>
