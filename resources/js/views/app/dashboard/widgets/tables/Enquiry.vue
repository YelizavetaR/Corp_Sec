<template>
  <div class="entity-list-container" shadow>
    <collapse-transition :group="true" :duration="300" tag="div">
      <base-container
        boxed
        with-loader
        :is-loading="isLoading"
        :loader-color="vars.loaderColor"
        class="p-0"
        key="list"
      >
        <b-table
          ref="btable"
          :items="itemsProvider"
          :fields="fields"
          :busy.sync="isLoading"
          striped
        >
        </b-table>
      </base-container>
    </collapse-transition>
  </div>
</template>

<script>
import table from "@mixins/table";

export default {
  name: "table-enquiry-widget",
  extends: table,
  data() {
    return {
      fields: [
        {
          key: "enquiry",
          label: $t("user.props.enquiry"),
          sort: "name",
        },
        {
          key: "date",
          label: $t("user.props.date"),
        },
        {
          key: "company_name",
          label: $t("user.props.company_name"),
        },
        {
          key: "status",
          label: $t("user.props.status"),
        },
      ],
      columnsOptions: {
        hasScroll: true,
      },
      initUrl: "users",
      dataType: "user",
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
