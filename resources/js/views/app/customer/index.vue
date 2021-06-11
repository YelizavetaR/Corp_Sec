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
        <div class="row">
          <div class="col-1"></div>
          <div class="col-4">
            <b-form-radio-group
              v-model="selected"
              :options="options"
              value-field="item"
              text-field="name"
              class="p-5"
            />
          </div>
          <div class="col-7"></div>
        </div>
        <table-wrapper
          v-if="isInitialized"
          :meta="entities.meta"
          :filtered="isFiltered"
          add-button-route="appCustomerAdd"
          :add-button-permissions="['create-user']"
          entity-title="customer.entity"
          entities-title="customer.entity"
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
            @row-clicked="rowClickHandler({ route: 'appCustomerView' }, $event)"
            class="cursor"
          >
            <template #cell(no)="row">
              {{ row.index + 1 }}
            </template>

            <template #cell(status)="row">
              <badge
                v-if="row.item.status"
                rounded
                :type="vars.colorsForStatus[row.item.status]"
                >{{ getStatusText(row.item.status) }}</badge
              >
            </template>

            <template #cell(actions)="row">
              <table-row-actions>
                <router-link
                  class="dropdown-item"
                  :to="{
                    name: 'appCustomerView',
                    params: { uuid: row.item.uuid },
                  }"
                  ><i class="fas fa-arrow-circle-right"></i>
                  {{
                    $t("global.view", { attribute: $t("customer.entity") })
                  }}</router-link
                >

                <router-link
                  v-if="hasPermission('create-user')"
                  class="dropdown-item"
                  :to="{
                    name: 'appCustomerEdit',
                    params: { uuid: row.item.uuid },
                  }"
                  ><i class="fas fa-edit"></i>
                  {{
                    $t("global.edit", { attribute: $t("customer.entity") })
                  }}</router-link
                >

                <a
                  v-if="hasPermission('create-user')"
                  class="dropdown-item"
                  @click.stop="deleteEntity(row.item)"
                  ><i class="fas fa-trash"></i>
                  {{
                    $t("global.delete", { attribute: $t("customer.entity") })
                  }}</a
                >
              </table-row-actions>
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
import { BFormRadioGroup } from "bootstrap-vue";
Vue.component("b-form-radio-group", BFormRadioGroup);

export default {
  components: {
    FilterForm,
  },
  extends: table,
  data() {
    return {
      selected: "entity",
      options: [
        { item: "entity", name: "Entity" },
        { item: "individual", name: "Individual" },
      ],
      fields: [
        {
          key: "no",
          label: "#",
        },
        {
          key: "entityName",
          label: $t("customer.entity_name"),
          sort: "entity_name",
        },
        {
          key: "email",
          label: $t("user.props.email"),
          sort: "email",
        },
        {
          key: "uen",
          label: $t("customer.uen"),
          sort: "uen",
        },
        {
          key: "status",
          label: $t("customer.status"),
          sort: "status",
          transformer: "badgeStatusYesNo",
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
        {
          key: "actions",
          label: "",
          cantHide: true,
          tdClass: "actions-dropdown-wrapper",
        },
      ],
      filtersOptions: {
        entityName: "",
        email: "",
      },
      sortOptions: {
        hasScroll: true,
      },
      columnsOptions: {
        hasScroll: true,
      },
      permissionsRequired: "create-user",
      routesRequired: {
        add: "appCustomerAdd",
      },
      initUrl: "customers",
      dataType: "entity",
    };
  },
  methods: {
    getStatusText(str) {
      return str.replace("_", " ");
    },
    deleteEntity(row) {
      this.isLoading = true;
      this.Custom({
        url: `entity/delete/${row.uuid}`,
        method: "delete",
      })
        .then((response) => {
          this.$toasted.success($t("global.success"));
          setTimeout(() => {
            this.$toasted.clear();
          }, 1000);
          this.isLoading = false;
          this.$nextTick(() => {
            this.refreshTable();
          });
        })
        .catch((error) => {
          this.isLoading = false;
          formUtil.handleErrors(error);
        });
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

.custom-control.custom-control-inline.custom-radio {
  margin-left: 10px;
}

.p-5.bv-no-focus-ring {
  display: flex;
  justify-content: space-evenly;
}
</style>