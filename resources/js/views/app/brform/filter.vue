<template>
  <filter-wrapper
    :boxed="boxed"
    @close="$emit('close')"
    :is-loading="isLoading"
  >
    <div class="row">
      <div class="col-12 col-md-4 mb-4">
        <base-input
          auto-focus
          :label="$t('brform.contact_person')"
          type="text"
          v-model="filters.person"
          :disabled="isLoading"
        />
      </div>
      <div class="col-12 col-md-4 mb-4">
        <base-input
          auto-focus
          :label="$t('brform.organisation')"
          type="text"
          v-model="filters.organisation"
          :disabled="isLoading"
        />
      </div>
      <div class="col-12 col-md-4 mb-4">
        <base-input
          auto-focus
          :label="$t('brform.inndividual')"
          type="text"
          v-model="filters.inndividual"
          :disabled="isLoading"
        />
      </div>
      <div class="col-12 col-md-4 mb-4">
        <!-- <base-input type="date" v-model="filters.date" :disabled="isLoading" /> -->
        <date-between
          :label="$t('brform.date', { attribute: $t('brform.todo') })"
          :start.sync="filters.startDate"
          :end.sync="filters.endDate"
          :disabled="isLoading"
        />
      </div>
      <div class="col-12 col-md-4 mb-4">
        <base-input
          auto-focus
          :label="$t('brform.brformtype')"
          type="text"
          v-model="filters.brformtype"
          :disabled="isLoading"
        />
      </div>
      <div class="col-12 col-md-4 mb-4">
        <base-input
          auto-focus
          :label="$t('brform.status')"
          type="text"
          v-model="filters.status"
          :disabled="isLoading"
        />
      </div>
    </div>
  </filter-wrapper>
</template>

<script>
import filterForm from "@mixins/filter-form";

export default {
  extends: filterForm,
};
</script>
