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
  extends: table,
  data() {
    return {
      fields: [
        {
          key: "contact",
          label: $t("user.props.contact"),
          sort: "name",
        },
        {
          key: "due_date",
          label: $t("user.props.due_date"),
        },
        {
          key: "amount",
          label: $t("user.props.amount"),
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
