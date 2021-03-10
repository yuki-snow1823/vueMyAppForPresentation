<template>
  <div id="preview" class="content ql-editor" v-html="textData"></div>
</template>

<script>
export default {
  props: {
    textData: {
     type: String,
     default: ''
    }
  }
}
</script>
