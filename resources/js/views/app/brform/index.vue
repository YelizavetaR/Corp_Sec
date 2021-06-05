<template>
  <div class="entity-list-container">
    <div style="display: flex; justify-content: flex-end">
      <div style="margin-bottom: 10px">
        <base-button
          class="pointer"
          design="primary"
          @click.stop="
            $router.push({
              name: 'appBrformchoose',
            })
          "
        >
          {{ $t("brform.addfa") }}
        </base-button>
      </div>
      <div style="margin-bottom: 10px; margin-left: 10px">
        <base-button class="pointer" design="primary">
          {{ $t("brform.addep") }}
        </base-button>
      </div>
      <div style="margin-bottom: 10px; margin-left: 10px">
        <base-button class="pointer" design="primary">
          {{ $t("brform.addfa_a") }}
        </base-button>
      </div>
    </div>
    <div class="check_box_layout">
      <div class="span_yes">
        <span class="header_yes"
          >If Application Here you may select more than one category</span
        >
      </div>
      <div class="check_boxs"></div>
    </div>
    <collapse-transition :group="true" :duration="300" tag="div">
      <filter-form
        v-if="showFilters"
        @close="toggleFilter"
        key="filters"
        :boxed="true"
        :pre-requisite="preRequisite"
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
          entity-title="br_form.brfom"
          entities-title="br_form.brfoms"
          entity-description="br_form.description"
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
            @row-dblclicked="
              rowClickHandler({ route: 'appBR_FormView' }, $event)
            "
          >
            <template #cell(Date)="row">
              <view-date
                :value="row.item.date"
                with-tz
                tag="span"
                class="mb-0"
              />
            </template>
            <template #cell(status)="row">
              <badge v-if="row.item.status" rounded type="info">
                {{ getStatusText(row.item.status) }}</badge
              >
              <badge v-else rounded type="dark">
                {{ getStatusText(row.item.status) }}</badge
              >
            </template>
            <template #cell(actions)="row">
              <base-button
                type="button"
                size="sm"
                design=""
                :class="row.item.status ? 'text-success' : 'text-dark'"
                v-b-tooltip.hover.d500
                :title="$t('br_form.toggle', { attribute: $t('br_form.todo') })"
              >
                <i v-if="row.item.status" class="fas fa-check-circle"></i>
                <i v-else class="fas fa-times-circle"></i>
              </base-button>

              <table-row-actions>
                <router-link
                  class="dropdown-item"
                  :to="{
                    name: 'brformview',
                    params: { uuid: row.item.uuid },
                  }"
                  ><i class="fas fa-arrow-circle-right"></i>
                  {{
                    $t("global.view", { attribute: $t("brform.add") })
                  }}</router-link
                >

                <router-link
                  v-if="hasPermission('edit-user')"
                  class="dropdown-item"
                  :to="{
                    name: 'appBrformEdit',
                    params: { uuid: row.item.uuid },
                  }"
                  ><i class="fas fa-edit"></i>
                  {{
                    $t("global.edit", { attribute: $t("brform.edit") })
                  }}</router-link
                >

                <a
                  v-if="hasPermission('delete-user')"
                  class="dropdown-item"
                  @click.stop="deleteEntity(row.item)"
                  ><i class="fas fa-trash"></i>
                  {{
                    $t("global.delete", { attribute: $t("brform.delete") })
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

export default {
  components: {
    FilterForm,
  },
  extends: table,
  data() {
    return {
      fields: [
        {
          key: "date",
          label: $t("brform.date"),
          sort: "date",
          transformer: "date",
        },
        {
          key: "person",
          label: $t("brform.contact_person"),
          sort: "person",
        },
        {
          key: "entity",
          label: $t("brform.entity"),
          sort: "entity",
        },
        {
          key: "inndividual",
          label: $t("brform.inndividual"),
          sort: "inndividual",
        },
        {
          key: "brformtype",
          label: $t("brform.brFormType"),
        },
        {
          key: "status",
          label: $t("brform.status"),
        },
        {
          key: "actions",
          label: "",
          cantHide: true,
          tdClass: "actions-dropdown-wrapper",
        },
      ],
      filtersOptions: {
        person: "",
        organisation: "",
        inndividual: "",
        date: "",
        startDate: "",
        endDate: "",
        brformtype: "",
        status: "",
      },
      initUrl: "bform",
      dataType: "brform",
    };
  },
  methods: {
    getStatusText(str) {
      if (str != null) {
        return str.replace("_", " ");
      }
    },
    deleteEntity(row) {
      this.isLoading = true;
      this.Custom({
        url: `bform/delete/${row.uuid}`,
        method: "delete",
      })
        .then((response) => {
          this.$toasted.success(response.message);
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
