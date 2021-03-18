<template>
  <div class="component__editor">
    <quill-editor v-model="content" :options="editorOption" />
    <button @click="submitText">送信</button>
  </div>
</template>

<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'

  import { quillEditor } from 'vue-quill-editor'

  export default {
    data() {
      return {
        content: "",
        editorOption: {
          theme: 'snow',
          syntax: 'true'
        }
      }
    },
    components: {
      quillEditor
    },
    methods: {
      submitText: function() {
        this.$emit('submit', this.content);
      }
    },
    name: 'VueQuillEditor',

  }

</script>

<style scoped>
  .component__editor {
    max-width: 100%;
    width: 50%;
  }

</style>
