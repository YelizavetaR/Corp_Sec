<template>
  <div class="main-content">
    <div class="row header-margin">
      <div class="col-6 title-font-size font-weight-bold">
        {{ $t("customer.members") }}
      </div>
      <div class="col-6 right-side">
        <b-button variant="primary" v-b-modal.modal-add-member>{{
          $t("customer.add_member")
        }}</b-button>
      </div>
    </div>
    <b-modal
      id="modal-add-member"
      ref="modal"
      size="lg"
      :title="$t('customer.add_member')"
      @show="resetModal_add_member"
      @hidden="resetModal_add_member"
      @ok="handleOk_add_member"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <div class="row">
          <div class="col-12 col-md-6 mb-3">
            <base-input
              :label="formLabels.name"
              type="text"
              v-model="modalData.name"
            />
          </div>
          <div class="col-12 col-md-6 mb-3">
            <base-input
              :label="formLabels.email"
              type="text"
              v-model="modalData.email"
            />
          </div>
          <div class="col-12 col-md-6 mb-3">
            <span class="sub-font-size">{{ $t("customer.member_type") }}</span>
            <b-form-select
              v-model="modalData.memberType"
              :options="member_options"
            ></b-form-select>
          </div>
          <div class="col-12 col-md-6 mb-3">
            <span class="sub-font-size">{{
              $t("customer.shareholder_type")
            }}</span>
            <b-form-select
              v-model="modalData.shareholderType"
              :options="shareholder_options"
            ></b-form-select>
          </div>
          <div class="col-12 col-md-6 mb-3">
            <base-input
              :label="formLabels.entityName"
              type="text"
              v-model="modalData.entityName"
            />
          </div>
          <div class="col-12 col-md-6 mb-3">
            <b-form-checkbox
              v-model="modalData.status"
              name="check-button"
              switch
              class="margin-top"
            >
              {{ formLabels.status }}
            </b-form-checkbox>
          </div>
        </div>
        <br />
        <div class="row background font-weight-bold">
          <div class="col-4">{{ $t("customer.share_type") }}</div>
          <div class="col-3">{{ $t("customer.share_capital") }}</div>
          <div class="col-3">{{ $t("customer.share_number") }}</div>
          <div class="col-2">{{ $t("customer.action") }}</div>
        </div>
        <div class="row margin-top">
          <div class="col-4 forward-padding">
            <b-form-select
              v-model="modalData.sharehType"
              :options="sharehType_options"
            ></b-form-select>
          </div>
          <div class="col-3 forward-padding">
            <b-form-input
              v-model="text"
              :placeholder="$t('customer.share_capital')"
            ></b-form-input>
          </div>
          <div class="col-3 forward-padding">
            <b-form-input
              v-model="text"
              :placeholder="$t('customer.share_number')"
            ></b-form-input>
          </div>
          <div class="col-2 behind-padding">
            <div class="row padding-top">
              <div class="col-6 cursor align-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-plus-square-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"
                  />
                </svg>
              </div>
              <div class="col-6 cursor behind-padding">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </form>
    </b-modal>
    <!-- <b-table
      v-show="entities.meta.total"
      ref="btable"
      :items="itemsProvider"
      :fields="fields"
      :busy.sync="isLoading"
      hover
      striped
      stacked="sm"
      :per-page.number="entities.meta.perPage"
      :current-page="entities.meta.currentPage"
      :filters="null"
    >
      <template #cell(status)="row">
        <badge
          v-if="row.item.status"
          rounded
          :type="vars.colorsForStatus[row.item.status]"
          >{{ getStatusText(row.item.status) }}</badge
        >
      </template>
    </b-table> -->
  </div>
</template>

<script>
import form from "@mixins/form";
import axios from "axios";
import { BButton, BFormInput } from "bootstrap-vue";
Vue.component("b-button", BButton);
Vue.component("b-form-input", BFormInput);

export default {
  extends: form,
  data() {
    return {
      fields: [
        {
          key: "name",
          label: $t("user.props.name"),
        },
        {
          key: "email",
          label: $t("user.props.email"),
        },
        {
          key: "member_type",
          label: $t("customer.member_type"),
        },
        {
          key: "status",
          label: $t("customer.status"),
          transformer: "badgeStatusYesNo",
        },
        {
          key: "entity_name",
          label: $t("customer.entity_name"),
        },
        {
          key: "createdAt",
          label: $t("general.created_at"),
          sort: "created_at",
          transformer: "date",
          thClass: "d-none",
          tdClass: "d-none",
        },
        {
          key: "updatedAt",
          label: $t("general.updated_at"),
          sort: "updated_at",
          transformer: "date",
          thClass: "d-none",
          tdClass: "d-none",
        },
      ],
      modalData: {
        name: "",
        email: "",
        memberType: 0,
        shareholderType: 0,
        entityName: "",
        status: "",
        entity_id: 0,
        sharehType: 0,
      },
      formLabels: {
        name: $t("user.props.name"),
        email: $t("user.props.email"),
        memberType: $t("customer.member_type"),
        shareholderType: $t("customer.shareholder_type"),
        entityName: $t("customer.entity_name"),
        status: $t("customer.status"),
      },
      member_options: [
        { value: 0, text: "Director" },
        { value: 1, text: "Share Holder" },
        { value: 2, text: "User" },
        { value: 3, text: "Agent" },
        { value: 4, text: "Beneficial owner" },
      ],
      shareholder_options: [
        { value: 0, text: "Individual" },
        { value: 1, text: "Organisation" },
      ],
      sharehType_options: [
        { value: 0, text: "Ordinary SGD (SGD)" },
        { value: 1, text: "Share Name (SGD)" },
      ],
    };
  },
  computed: {},
  mounted() {
    // this.getData();
  },
  props: {
    id: Number,
  },
  methods: {
    getData() {
      this.isLoading = true;
      // axios({
      //   method: "get",
      //   // url: `/director/show/${this.id}`,
      //   url: `/director`,
      //   headers: {
      //     "X-CSRF-TOKEN":
      //       document.head.querySelector("[name=csrf-token]").content,
      //   },
      // })
      this.Custom({
        url: `director`,
        method: "get",
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
          this.isLoading = false;
          console.error(error.message);
        });
    },
    initialData() {
      this.modalData.name = "";
      this.modalData.email = "";
      this.modalData.memberType = 0;
      this.modalData.shareholderType = 0;
      this.modalData.entityName = "";
      this.modalData.status = "";
      this.modalData.sharehType = 0;
    },
    resetModal_add_member() {
      this.initialData();
    },
    handleOk_add_member(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.modalData.status == true
        ? (this.modalData.status = "activated")
        : (this.modalData.status = "inactivated");
      this.modalData.entity_id = this.id;

      this.isLoading = true;
      this.Custom({
        url: `director/store`,
        method: "post",
        data: this.modalData,
      })
        .then((response) => {
          this.$toasted.success($t("global.success"));
          this.initialData();
          setTimeout(() => {
            this.$toasted.clear();
          }, 1500);
          this.isLoading = false;
        })
        .catch((error) => {
          console.error(error.message);
        });

      this.$nextTick(() => {
        this.$bvModal.hide("modal-add-member");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.header-margin {
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.title-font-size {
  font-size: 20px;
}

.right-side {
  text-align: right;
}

.sub-font-size {
  font-size: 12px;
}

.margin-top {
  margin-top: 20px;
}

.padding-top {
  padding-top: 8px;
}

.align-center {
  text-align: center;
}

.background {
  background-color: #f2f2f2;
  padding-bottom: 10px;
  padding-top: 10px;
}

.forward-padding {
  padding-left: 0px;
  padding-right: 20px;
}

.behind-padding {
  padding-left: 0px;
  padding-right: 0px;
}

.cursor {
  cursor: pointer;
}
</style>