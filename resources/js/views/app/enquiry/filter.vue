<template>
  <filter-wrapper
    :boxed="boxed"
    @close="$emit('close')"
    :is-loading="isLoading"
  >
    <div class="row">
      <div class="col-12 col-md-12 mb-12">
        <base-input
          auto-focus
          :label="$t('enquiry.subject')"
          type="text"
          v-model="filters.subject"
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
