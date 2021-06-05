<template>
  <form @submit.prevent="submit">
    <animated-loader
      :is-loading="isLoading || isFetching"
      :loader-color="vars.loaderColor"
    />

    <div class="row">
      <div class="col-6 col-md-6 mb-4">
        <base-input
          auto-focus
          :label="formLabels.person"
          type="text"
          v-model="formData.person"
          :error.sync="formErrors.person"
          required
        />
      </div>
      <div class="col-6 col-md-6 mb-4">
        <base-input
          auto-focus
          :label="formLabels.entity"
          type="text"
          v-model="formData.entity"
          :error.sync="formErrors.entity"
          required
        />
      </div>
      <div class="col-6 col-md-6 mb-4">
        <base-input
          :label="formLabels.date"
          addon-right-icon="far fa-calendar-alt"
          type="text"
          v-model="formData.date"
          :error.sync="formErrors.date"
          :is-wrapper="true"
          required
        >
          <date-picker
            v-model="formData.date"
            :config="vars.datepickerConfig"
            class="form-control datepicker"
          />
        </base-input>
      </div>
      <div class="col-6 col-md-6 mb-4">
        <base-input
          auto-focus
          :label="formLabels.inndividual"
          type="text"
          v-model="formData.inndividual"
          :error.sync="formErrors.inndividual"
          required
        />
      </div>
      <div class="col-6 col-md-6 mb-4">
        <base-input
          auto-focus
          :label="formLabels.brformtype"
          type="text"
          v-model="formData.brformtype"
          :error.sync="formErrors.brformtype"
          required
        />
      </div>
      <div class="col-6 col-md-6 mb-4">
        <base-input
          auto-focus
          :label="formLabels.status"
          type="text"
          v-model="formData.status"
          :error.sync="formErrors.status"
          required
        />
      </div>
      <div class="col-12 col-md-12 mb-4">
        <base-input
          auto-focus
          :label="formLabels.organisation"
          type="text"
          v-model="formData.organisation"
          :error.sync="formErrors.organisation"
          required
        />
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
        <base-button
          class="pointer"
          @click.stop="toggleTodo(formData)"
          design="primary"
          >{{
            $t("global.save", { attribute: $t("brform.todo") })
          }}</base-button
        >
      </div>
    </div>

    <template v-if="showKeepAdding && keepAdding">
      <keep-adding-form
        :keep-adding-fields="keepAddingFields"
        :keep-adding-option="keepAddingOption"
        @optionUpdated="keepAddingOption = $event"
        :keep-adding-selected-fields="keepAddingSelectedFields"
        @fieldsUpdated="keepAddingSelectedFields = $event"
        :is-loading="isLoading"
      />
    </template>
  </form>
</template>

<script>
import form from "@mixins/form";
import store from "@js/store";

const vars = store.getters["config/vars"];

export default {
  extends: form,
  data() {
    return {
      formData: {
        uuid: null,
        person: "",
        date: moment().format(vars.serverDateFormat),
        entity: "",
        inndividual: "",
        brformtype: "",
        status: "",
        organisation: "",
      },
      formLabels: {
        person: $t("brform.contact_person"),
        entity: $t("brform.entity"),
        inndividual: $t("brform.inndividual"),
        status: $t("brform.status"),
        brformtype: $t("brform.brformtype"),
        date: $t("brform.date"),
        organisation: $t("brform.organisation"),
      },
      initUrl: "",
      timeFields: ["time"],
    };
  },
  mounted() {
    this.isLoading = false;
  },
  methods: {
    toggleTodo(todo) {
      this.isLoading = true;
      this.Custom({
        url: `bform/update/${todo.uuid}`,
        method: "post",
        data: todo,
      })
        .then((response) => {
          console.log(response);
          this.$toasted.success(response.message);
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
};
</script>
