<template lang="pug">
  div(:class="$options.name")
    sup(:title="text")
      button(class="info-button", v-on:click="buttonClicked")
        fas-icon(class="info-icon", icon="info-circle")
    app-dialog(:isModal="false", ref="theDialog", :useSave="false", @cancel="cancelDialog")
      h3(slot="header") Information
      div(slot="body") {{ text }}
  
</template>

<script>
import AppDialog from '../components/AppDialogShell'

export default {
  name: 'UiInfo',
  components: {
    AppDialog
  },
  data: function () {
    return {
    }
  },
  props: {
    text: { type: String }
  },
  methods: {
    buttonClicked: function () {
      this.showingDialog = true
      this.$refs.theDialog.onOpen()
    },
    cancelDialog: function () {
      this.showingDialog = false
      this.$refs.theDialog.onClose()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.UiInfo {
  display: inline;
  margin-left: 10px;
  .info-button {
    background: none;
    color: $grey40;
    padding: 0;
    border: none;
    border-radius: 50%; /* to encircle the circle icon*/
    height: 1em; /* to match height of fas icon*/
  }
  .info-icon {
    vertical-align: -6px;

    &:hover {
      color: $black;
      cursor: pointer;
    }
  }
}
</style>
