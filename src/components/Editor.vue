<template>
  <div class="component__editor">
    <quill-editor v-model="content" :options="editorOption" />
    <button class="btn btn--green btn--border-groove" @click="submitText">
      送信
    </button>
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";

export default {
  data() {
    return {
      content: "",
      editorOption: {
        theme: "snow",
        syntax: "true",
      },
    };
  },
  components: {
    quillEditor,
  },
  methods: {
    submitText: function () {
      this.$emit("submit", this.content);
    },
  },
  name: "VueQuillEditor",
};
</script>

<style scoped>
.component__editor {
  max-width: 100%;
  width: 50%;
}
.btn--green.btn--border-groove {
  border: 4px groove #008039;
}

.btn,
a.btn,
button.btn {
  font-weight: 100;
  line-height: 1.5;
  position: relative;
  display: inline-block;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: #212529;
  border-radius: 0.5rem;
}
</style>
