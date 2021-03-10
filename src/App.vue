<template>
  <div id="app">
    <Editor @submit="addTextView" />
    <Viewer :textData="submittedText" />
  </div>
</template>

<script>
import Editor from './components/Editor.vue'
import Viewer from './components/Viewer.vue'

export default {
  name: 'App',
  data() {
    return {
      submittedText: ''
    }
  },
  components: {
    Editor,
    Viewer
  },
  methods: {
    addTextView: function(textData) {
      console.log(textData);
      this.submittedText = textData;
    }
  }
}
</script>

<style>

</style>
