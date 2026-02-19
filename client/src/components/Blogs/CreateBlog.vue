<template>
  <div class="container">
    <h1>Create Blog</h1>
    <form v-on:submit.prevent="createBlog">
      <p>Title: <input type="text" v-model="blog.title" class="form-control"></p>
      
      <upload-image @uploaded="onUploaded"></upload-image> <!-- เพิ่ม Component Upload -->

      <div class="editor-container">
        <label>Content:</label>
        <ckeditor :editor="editor" v-model="blog.content" :config="editorConfig"></ckeditor>
      </div>

      <p>category: <input type="text" v-model="blog.category" class="form-control"></p>
      <p>status: <input type="text" v-model="blog.status" class="form-control"></p>
      
      <p><button type="submit" class="btn btn-success">Create Blog</button></p>
    </form>
  </div>
</template>

<script>
import BlogsService from '@/services/BlogsService'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import UploadImage from '../Utils/Upload.vue' // Import

export default {
  components: {
    UploadImage // Register Component
  },
  data () {
    return {
      editor: ClassicEditor,
      editorConfig: {
         toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ]
      },
      blog: {
        title: '',
        thumbnail: 'null', // default
        pictures: 'null',
        content: '',
        category: '',
        status: 'saved'
      }
    }
  },
  methods: {
    // รับชื่อไฟล์จาก Component ลูก
    onUploaded (filename) {
      this.blog.thumbnail = filename
      console.log('Thumbnail set to:', filename)
    },
    async createBlog () {
      try {
        await BlogsService.post(this.blog)
        this.$router.push({ name: 'blogs' })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
<style scoped>
/* ปรับแต่ง CSS เฉพาะส่วน Editor */
.editor-wrapper {
    text-align: left;
}
/* แก้ไขความสูงขั้นต่ำของ Editor ให้พิมพ์ง่ายขึ้น */
:deep(.ck-editor__editable) {
    min-height: 300px;
}

</style>