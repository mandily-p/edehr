<template lang="pug">
  div(:class="$options.name")
    div(:class="`${$options.name}__bottom`")
      ui-button(v-on:buttonClicked="showDialog", :class="`${$options.name}__button`", v-bind:secondary="true") Scratch Pad
    app-dialog(:isModal="false", ref="theDialog", @cancel="cancelDialog", @save="saveDialog")
      h3(slot="header") Your private notes
      div(slot="body")
        div
          div(class="input-fieldrow")
            div(class="input-element input-element-full")
              textarea(:class="`${$options.name}__textarea`",v-model="theNotes")
</template>

<script>
import AppDialog from '../../app/components/AppDialogShell'
import UiButton from '../../app/ui/UiButton.vue'

export default {
  name: 'EhrScratchPad',
  components: {
    UiButton,
    AppDialog
  },
  data: function () {
    return {
      populate: true,
      theNotes: ''
    }
  },
  methods: {
    resetNotes: function () {
      let sp = this.$store.getters['ehrData/scratchData']
      console.log('EhrScratchPad reset with existing ', sp)
      this.theNotes = sp
    },
    showDialog: function () {
      this.resetNotes()
      this.$refs.theDialog.onOpen()
    },
    cancelDialog: function () {
      this.resetNotes()
      this.$refs.theDialog.onClose()
    },
    saveDialog: function () {
      this.$refs.theDialog.onClose()
      console.log('EhrScratchPad saving ', this.theNotes)
      this.$store.dispatch('ehrData/sendScratchData', this.theNotes)
    }
  }
}
</script>

<style lang="scss" scoped>

.EhrScratchPad {
  margin: 2em 0;

  &__bottom {
    padding: 15px;
  }
  &__button {
    width: 100%;
  }
  &__textarea {
    width: 100%;
    height: 6rem;
  }
}

.dialog-wrapper { 
  width: 10em;
}
</style>
