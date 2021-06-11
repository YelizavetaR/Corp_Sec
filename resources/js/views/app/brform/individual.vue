<template>
  <div class="inner-sidebar-layout">
    <div class="inner-sidebar">
      <div class="component-navigation-menu-wrapper">
        <ul class="component-navigation-menu list-unstyled">
          <li>
            <router-link :to="{ name: 'appfaApplicationBasicInfo' }">
              <div
                :class="{ active: showMobileMenu1 }"
                @click="myFilter1"
                id="in_navigation1"
              >
                <div class="menu-item-content">
                  <span class="detailed">
                    <span class="title">{{
                      $t("brform.inidividual_custom")
                    }}</span>
                    <span class="description"></span>
                  </span>
                </div>
              </div>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'appfaindividual_owner' }">
              <div
                :class="{ active: showMobileMenu3 }"
                @click="myFilter3"
                id="in_navigation3"
              >
                <div class="menu-item-content">
                  <span class="detailed">
                    <span class="title">{{ $t("brform.coporatepage3") }}</span>
                    <span class="description"></span>
                  </span>
                </div>
              </div>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'appfaindvidual_agent' }">
              <div
                :class="{ active: showMobileMenu3 }"
                @click="myFilter4"
                id="in_navigation4"
              >
                <div class="menu-item-content">
                  <span class="detailed">
                    <span class="title">{{ $t("brform.coporatepage4") }}</span>
                    <span class="description"></span>
                  </span>
                </div>
              </div>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'appfaindividual_pg1' }">
              <div
                :class="{ active: showMobileMenu3 }"
                @click="myFilter5"
                id="in_navigation5"
              >
                <div class="menu-item-content">
                  <span class="detailed">
                    <span class="title">{{ $t("brform.coporatepage5") }}</span>
                    <span class="description"></span>
                  </span>
                </div>
              </div>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'appfaindividual_peppg2' }">
              <div
                :class="{ active: showMobileMenu3 }"
                @click="myFilter6"
                id="in_navigation6"
              >
                <div class="menu-item-content">
                  <span class="detailed">
                    <span class="title">{{ $t("brform.coporatepage6") }}</span>
                    <span class="description"></span>
                  </span>
                </div>
              </div>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'appfaindividual_declartion' }">
              <div
                :class="{ active: showMobileMenu3 }"
                @click="myFilter7"
                id="in_navigation7"
              >
                <div class="menu-item-content">
                  <span class="detailed">
                    <span class="title">{{ $t("brform.coporatepage7") }}</span>
                    <span class="description"></span>
                  </span>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="inner-content-wrapper">
      <transition-page>
        <router-view />
      </transition-page>
    </div>
  </div>
</template>

<script>
import BaseButton from "../../../core/components/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      yes_flag: false,
      no_flag: false,
    };
  },
  computed: {},
  methods: {
    myFilter1() {
      document.querySelector("#in_navigation3").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation1").style.backgroundColor =
        "#32c620";
      document.querySelector("#in_navigation5").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation7").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation4").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation6").style.backgroundColor =
        "#dee2e9";
    },
    myFilter3() {
      document.querySelector("#in_navigation3").style.backgroundColor =
        "#32c620";
      document.querySelector("#in_navigation1").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation5").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation7").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation4").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation6").style.backgroundColor =
        "#dee2e9";
    },
    myFilter4() {
      document.querySelector("#in_navigation3").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation4").style.backgroundColor =
        "#32c620";
      document.querySelector("#in_navigation1").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation5").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation7").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation6").style.backgroundColor =
        "#dee2e9";
    },
    myFilter5() {
      document.querySelector("#in_navigation3").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation5").style.backgroundColor =
        "#32c620";
      document.querySelector("#in_navigation1").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation4").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation7").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation6").style.backgroundColor =
        "#dee2e9";
    },
    myFilter6() {
      document.querySelector("#in_navigation3").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation6").style.backgroundColor =
        "#32c620";
      document.querySelector("#in_navigation1").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation5").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation7").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation4").style.backgroundColor =
        "#dee2e9";
    },
    myFilter7() {
      document.querySelector("#in_navigation3").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation7").style.backgroundColor =
        "#32c620";
      document.querySelector("#in_navigation6").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation1").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation5").style.backgroundColor =
        "#dee2e9";
      document.querySelector("#in_navigation4").style.backgroundColor =
        "#dee2e9";
    },
  },
};
</script>

<style lang="scss" scoped>
.inner-sidebar {
  background-color: #c7cccb45;
}
.menu-item-content {
  border: currentColor;
  border-style: solid;
  border-width: 1px;
  border-color: darkgrey;
  text-align: center;
  padding: 11px;
  display: flex;
  justify-content: center;
}
.detailed {
  font-size: 14px;
  margin-left: 7px;
  color: #353838;
  margin-top: 4px;
  font-weight: 600;
}
.menu-thumbnail {
  color: #342c2c;
}
.pointer:hover {
  background-color: #32c620;
  &.detailed {
    color: black;
  }
}
.active {
  background-color: #32c620;
}
</style>
