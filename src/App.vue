<template>
  <div id="app">
    <Editor @submit="addTextView" />
    <Viewer :textData="submittedText" />
    <h1>{{ $store.state.count }}</h1>

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
      this.submittedText = textData;
    }
  }
}
</script>

<style>

</style>
