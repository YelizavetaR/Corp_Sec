<template>
  <div class="inner-sidebar-layout">
    <div class="inner-sidebar">
      <div class="component-navigation-menu-wrapper">
        <ul class="component-navigation-menu list-unstyled">
          <li>
            <router-link :to="{ name: 'appfaConfigBasicInfo' }">
              <div
                :class="{ active: showMobileMenu1 }"
                v-on:click="(showMobileMenu1 = true), (showMobileMenu2 = false)"
              >
                <div class="menu-item-content">
                  <span class="detailed">
                    <span class="title">{{ $t("brform.coporatepage1") }}</span>
                    <span class="description"></span>
                  </span>
                </div>
              </div>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'appfacorporate_pg2' }">
              <div
                :class="{ active: showMobileMenu2 }"
                @click="(showMobileMenu2 = true), (showMobileMenu1 = false)"
              >
                <div class="menu-item-content">
                  <span class="detailed">
                    <span class="title">{{ $t("brform.coporatepage2") }}</span>
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
      showMobileMenu1: false,
      showMobileMenu2: false,
      yes_flag: false,
      no_flag: false,
    };
  },
  computed: {},
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
