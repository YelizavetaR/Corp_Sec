<template>
  <form
    style="
      justify-content: center;
      text-align: center;
      align-items: center;
      display: grid;
    "
  >
    <div style="margin: 20px">
      <base-button
        class="pointer"
        @click.stop="
          $router.push({
            name: 'appfaConfig',
          })
        "
        style="
          width: 400px;
          height: 150px;
          display: flex;
          background-color: #91f7df;
          border-radius: 10px;
          border-style: none;
          box-shadow: 5px 10px 8px 10px #888888;
          justify-content: flex-start;
        "
      >
        <div class="icon" style="margin-top: calc(13%); margin-left: 10px">
          <i class="fa-users fas" style="font-size: 48px; color: black"></i>
        </div>
        <div
          class="corporate"
          style="
            margin-top: calc(15%);
            text-align: center;
            margin-left: calc(30%);
          "
        >
          <span
            style="
              font-size: 18px;
              font-style: inherit;
              font-weight: 800;
              margin-top: 10px;
              color: black;
            "
            >Corporate</span
          >
        </div>
      </base-button>
    </div>
    <div style="margin: 20px">
      <base-button
        class="pointer"
        @click.stop="
          $router.push({
            name: 'appfaapplication',
          })
        "
        style="
          width: 400px;
          height: 150px;
          display: flex;
          background-color: #91f7df;
          border-radius: 10px;
          border-style: none;
          box-shadow: 5px 10px 8px 10px #888888;
          justify-content: flex-start;
        "
      >
        <div
          class="icon"
          @click.stop="
            $router.push({
              name: 'appfaapplication',
            })
          "
          style="margin-top: calc(13%); margin-left: 10px"
        >
          <i class="fa-user fas" style="font-size: 48px; color: black"></i>
        </div>
        <div
          class="individual"
          style="
            margin-top: calc(15%);
            text-align: center;
            margin-left: calc(30%);
          "
        >
          <span
            style="
              font-size: 18px;
              font-style: inherit;
              font-weight: 800;
              margin-top: 10px;
              color: black;
            "
            >Individual</span
          >
        </div>
      </base-button>
    </div>
  </form>
</template>

<script>
import form from "@mixins/form";

export default {
  extends: form,
  data() {},
  mounted() {},
  methods: {},
};
</script>

