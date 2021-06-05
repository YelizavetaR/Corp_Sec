<template>
  <base-container
    boxed
    with-loader
    :is-loading="isLoading"
    :loader-color="vars.loaderColor"
    id="printable"
  >
    <div class="row" v-if="entity">
      <div class="col-12 col-md-4 mb-3">
        <view-single
          :label="$t('brform.contact_person')"
          :value="entity.person"
        />
      </div>

      <div class="col-12 col-md-4 mb-3">
        <view-date
          v-if="entity.datepicker"
          :label="$t('brform.date')"
          :value="`${entity.date}`"
          with-tz
          :date-format-options="{
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            weekday: 'short',
          }"
        />
        <view-date v-else :label="$t('brform.date')" :value="entity.date" />
      </div>
      <div class="col-12 col-md-4 mb-3">
        <view-single :label="$t('brform.status')">
          <template #main>
            <div class="pointer">
              <badge v-if="entity.status" rounded type="info">
                {{ entity.status }}</badge
              >
              <badge v-else rounded type="dark"> {{ entity.status }}</badge>
            </div>
          </template>
        </view-single>
      </div>

      <div class="col-12 col-md-4 mb-3">
        <view-single
          :label="$t('brform.inndividual')"
          :value="entity.inndividual"
        />
      </div>
      <div class="col-12 col-md-4 mb-3">
        <view-single
          :label="$t('brform.brformtype')"
          :value="entity.brformtype"
        />
      </div>
      <div class="col-12 col-md-4 mb-3">
        <view-single
          :label="$t('brform.organisation')"
          :value="entity.organisation"
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
          {{ $t("general.back") }}</base-button
        >
      </div>
      <div class="right-side">
        <base-button
          type="button"
          design="primary"
          @click.stop="
            $router.push({
              name: 'appBrformEdit',
              params: { uuid: entity.uuid },
            })
          "
          ><i class="fas fa-edit"></i>
          {{ $t("global.edit", { attribute: $t("brform.todo") }) }}</base-button
        >
      </div>
    </div>
  </base-container>
</template>

<script>
import view from "@mixins/view";

export default {
  extends: view,
  data() {
    return {
      initUrl: "bform/show",
      dataTitle: $t("brform.todo"),
      fallBackRoute: "appBRFormList",
    };
  },
  watch: {
    $route(value) {
      if (value.name === "brformview") {
        this.uuid = value.params.uuid;
        this.getInitialData();
      }
    },
  },
  methods: {},
};
</script>
