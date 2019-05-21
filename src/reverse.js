export const exMixin = {
  computed: {
    reversedTextinMixin () {
      return this.text4.split('').reverse().join('')
    },
    addCountTextinMixin () {
      return this.text4 + ' ( ' + this.text4.length + ' )'
    }
  }
}
