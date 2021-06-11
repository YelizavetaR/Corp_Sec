<template>
  <div class="entity-list-container">
    <collapse-transition :group="true" :duration="300" tag="div">
      <filter-form
        v-if="showFilters"
        @close="toggleFilter"
        key="filters"
        :boxed="true"
        :is-loading="isLoading"
      />

      <base-container
        boxed
        with-loader
        :is-loading="isLoading"
        :loader-color="vars.loaderColor"
        class="p-0"
        key="list"
      >
        <table-wrapper
          v-if="isInitialized"
          :meta="entities.meta"
          :filtered="isFiltered"
          entity-title="enquiry.enquiry"
          entities-title="enquiry.enquiry"
          entity-description=""
        >
          <b-table
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
            @row-clicked="rowClickHandler({ route: 'appEnquiryView' }, $event)"
            class="cursor"
          >
            <template #cell(subject)="row">
              <div class="row">
                <div class="col-6">{{ row.item.subject }}</div>
                <div class="col-6 text-align-right">
                  {{ $t("enquiry.by") }}{{ row.item.name }}
                  <view-date
                    :value="row.item.createdAt"
                    with-tz
                    tag="span"
                    class="mb-0 date-font"
                  />
                </div>
              </div>
            </template>
          </b-table>
        </table-wrapper>
      </base-container>
    </collapse-transition>
  </div>
</template>

<script>
import table from "@mixins/table";
import FilterForm from "./filter";

export default {
  components: {
    FilterForm,
  },
  extends: table,
  data() {
    return {
      fields: [
        {
          key: "subject",
          label: $t("enquiry.enquiry"),
          sort: "subject",
        },
      ],
      filtersOptions: {
        subject: "",
      },
      sortOptions: {
        hasScroll: true,
      },
      columnsOptions: {
        hasScroll: true,
      },
      initUrl: "enquiry",
      dataType: "enquiry",
    };
  },
  methods: {
    getStatusText(str) {
      return str.replace("_", " ");
    },
  },
  mounted() {
    this.updatePageMeta();
  },
};
</script>

<style lang="scss" scoped>
.cursor {
  cursor: pointer;
}

.text-align-right {
  text-align: right;
  padding-right: 20px;
}

.date-font {
  font-size: 13px;
}
</style>
