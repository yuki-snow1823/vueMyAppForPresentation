<template>
  <div class="viewer__wrapper">
    <div class="first-text">{{ firstTextData }}</div>
    <div id="preview" class="content ql-editor" v-html="textData"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    textData: {
     type: String,
     default: ''
    }
  },
  computed: {
    // ここ発表会で相談したい
    firstTextData: function () {
      let text = "ここにテキストが入ります"
      
      if(this.textData) {
        return ""
      }
      
      return text
    }
  }
}
</script>

<style>
/* .first-text {
  margin-top: 24px;
} */
.viewer__wrapper {
  margin-top: 30px;
  width: 70%;
  border: 2px rgb(105, 105, 105) dotted;
}
</style>
