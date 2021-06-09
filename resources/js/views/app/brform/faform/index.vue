<template>
  <base-container
    boxed
    with-loader
    :is-loading="isLoading"
    :loader-color="vars.loaderColor"
  >
    <form>
      <div class="area1">
        <span class="are_you">{{ $t("brform.areyou") }}</span>
        <div class="button_area">
          <base-button
            type="button"
            size="sm"
            design=""
            @click="(yes_flag = true), (no_flag = false)"
            :class="text - success"
            v-b-tooltip.hover.d500
            :title="$t('br_form.toggle', { attribute: $t('brform.todo') })"
          >
            <span class="yes_button"> {{ $t("brform.yes") }}</span>
          </base-button>
          <base-button
            type="button"
            size="sm"
            design=""
            @click="(yes_flag = false), (no_flag = true)"
            :class="text - success"
            v-b-tooltip.hover.d500
            :title="$t('br_form.toggle', { attribute: $t('brform.todo') })"
          >
            <span class="no_button">{{ $t("brform.no") }}</span>
          </base-button>
        </div>
      </div>
      <div class="yes_area" v-show="yes_flag">
        <div class="span_field">
          <span class="header_span">{{ $t("brform.header_span") }} </span>
        </div>
        <div>
          <form @submit.prevent="send()">
            <div class="form-group">
              <div class="form-check">
                <label for="1" class="form-check-label">
                  <input
                    type="checkbox"
                    id="1"
                    class="form-check-input"
                    value="1checkbox"
                    v-model="checkedNames"
                  />
                  <span class="laravel_span">{{ $t("brform.onespan") }} </span>
                </label>
              </div>
              <div class="form-check">
                <label for="2" class="form-check-label">
                  <input
                    type="checkbox"
                    id="2"
                    class="form-check-input"
                    value="2checkbox"
                    v-model="checkedNames"
                  />
                  <span class="laravel_span">{{ $t("brform.twospan") }}</span>
                </label>
              </div>
              <div class="form-check">
                <label for="3" class="form-check-label">
                  <input
                    type="checkbox"
                    id="3"
                    class="form-check-input"
                    value="2checkbox"
                    v-model="checkedNames"
                  />
                  <span class="laravel_span">{{ $t("brform.third") }} </span>
                </label>
              </div>
              <div class="form-check">
                <label for="4" class="form-check-label">
                  <input
                    type="checkbox"
                    id="4"
                    class="form-check-input"
                    value="4checkbox"
                    v-model="checkedNames"
                  />
                  <span class="laravel_span">{{ $t("brform.fourspan") }} </span>
                </label>
              </div>
              <div class="form-check">
                <label for="5" class="form-check-label">
                  <input
                    type="checkbox"
                    id="5"
                    class="form-check-input"
                    value="5checkbox"
                    v-model="checkedNames"
                  />
                  <span class="laravel_span">{{ $t("brform.fivespan") }} </span>
                </label>
              </div>
              <div class="form-check">
                <label for="6" class="form-check-label">
                  <input
                    type="checkbox"
                    id="6"
                    class="form-check-input"
                    value="6checkbox"
                    v-model="checkedNames"
                  />
                  <span class="laravel_span">{{ $t("brform.sixspan") }} </span>
                </label>
              </div>
              <div class="form-check">
                <label for="7" class="form-check-label">
                  <input
                    type="checkbox"
                    id="7"
                    class="form-check-input"
                    value="7checkbox"
                    v-model="checkedNames"
                  />
                  <span class="laravel_span"
                    >{{ $t("brform.sevenspan") }}
                  </span>
                </label>
              </div>
              <br />
            </div>
            <div class="input_field">
              <span class="input_header">
                {{ $t("brform.input_header") }}
              </span>
              <div class="textarad_field">
                <b-form-textarea
                  id="submit_content"
                  rows="5"
                  max-rows="8"
                ></b-form-textarea>
              </div>
            </div>
            <div class="button_grup">
              <button class="btn btn-info">{{ $t("brform.save") }}</button>
              <button
                @click="myFilter"
                @click.stop="
                  $router.push({
                    name: 'appfacorporate_pg2',
                  })
                "
                class="btn btn-info"
                id="save_next"
              >
                {{ $t("brform.savenext") }}
              </button>
              <button class="btn btn-gray-lightest">
                {{ $t("brform.cancel") }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </form>
  </base-container>
</template>

<script>
import form from "@mixins/config-form";
import { BFormTextarea } from "bootstrap-vue";
Vue.component("b-form-textarea", BFormTextarea);
import { BButton } from "bootstrap-vue";
Vue.component("b-button", BButton);
export default {
  extends: form,
  data() {
    return {
      checkedNames: [],
      yes_flag: false,
      no_flag: false,
    };
  },
  methods: {
    myFilter() {
      document.querySelector("#navigation3").style.backgroundColor = "#dee2e9";
      document.querySelector("#navigation1").style.backgroundColor = "#dee2e9";
      document.querySelector("#navigation2").style.backgroundColor = "#32c620";
    },
    send() {
      console.log(this.checkedNames.toString());
    },
  },
};
</script>
<style lang="scss" scoped>
.area1 {
  border-style: solid;
  border-width: 1px;
  padding: 10px;
}
.are_you {
  font-size: 20px;
  color: #010101;
  font-weight: 600;
}
.button_area {
  text-align: center;
  margin-top: 15px;
}
.btn.btn-sm {
  background-color: aquamarine;
  margin: 10px;
  width: 15%;
}
.yes_button {
  font-size: 20px;
}
.no_button {
  font-size: 20px;
}
.header_span {
  font-size: 18px;
  color: blue;
  font-weight: 600;
  margin-left: 15px;
}
input[type="checkbox"] {
  /* Double-sized Checkboxes */
  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
  transform: scale(2.5);
  padding: 10px;
}
.form-check {
  position: relative;
  display: block;
  padding-left: 1.25rem;
  margin: 30px;
}
.laravel_span {
  margin-left: 21px;
  margin-top: -4px;
  font-size: 17px;
  color: #201e1e;
  font-weight: 600;
  display: flex;
  line-height: normal;
}
.yes_area {
  border-style: solid;
  margin-top: 10px;
  border-width: 1px;
  padding: 10px;
}
.span_field {
  padding: 10px;
}
.input_field {
  padding: 15px;
  margin-top: -28px;
}
.input_header {
  font-size: 20px;
  color: black;
  font-family: fangsong;
  font-weight: inherit;
}
.button_grup {
  margin-bottom: 1rem;
  text-align: center;
}
</style>