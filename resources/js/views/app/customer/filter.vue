<template>
  <filter-wrapper
    :boxed="boxed"
    @close="$emit('close')"
    :is-loading="isLoading"
  >
    <div class="row">
      <div class="col-12 col-md-6 mb-6">
        <base-input
          auto-focus
          :label="$t('user.props.name')"
          type="text"
          v-model="filters.name"
          :disabled="isLoading"
        />
      </div>
      <div class="col-12 col-md-6 mb-6">
        <base-input
          :label="$t('user.props.email')"
          type="text"
          v-model="filters.email"
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
