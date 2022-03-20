<template>
  <div class="img-upload-container">
    <h1>Let's upload some images!</h1>
    <template v-if="!isLoading">
      <!-- UPLOAD IMG -->
      <label
        for="imgUploader"
        @drop.prevent="handleFile"
        @dragover.prevent="isDragOver = true"
        @dragleave="isDragOver = false"
        :class="{drag: isDragOver, 'not-drag': !isDragOver}"
      >
        <!--prevent on drop and dragover is importent soo the img will not open in the browser-->
        <img
          :src="isDragOver ? 'src/assets/box.png' : 'src/assets/upload.png'"
          alt="Drop images here"
        />
        <h3>Choose an image <span class="light"> or drag it here</span></h3>
      </label>
      <!-- HIDDEN INPUT -->
      <input
        type="file"
        name="img-uploader"
        id="imgUploader"
        @change="handleFile"
      />
    </template>
    <!-- LOADER -->
    <img v-else src="src/assets/loader.gif" alt="" />
  </div>
</template>

<script>
  import {uploadImg} from '@/services/img-upload.service.js';
  export default {
    data() {
      return {
        isLoading: false,
        isDragOver: false,
      };
    },
    methods: {
      handleFile(ev) {
        //added to determine if its change from input or drop , and gets the file
        let file;
        if (ev.type === 'change') file = ev.target.files[0];
        else if (ev.type === 'drop') file = ev.dataTransfer.files[0];
        console.log('ev', ev);
        this.onUploadImg(file); // send the file to upload it
      },
      async onUploadImg(file) {
        this.isLoading = true;
        this.isDragOver = false;
        const res = await uploadImg(file);
        this.$emit('save', res.url);
        this.isLoading = false;
      },
    },
  };
</script>

<style>
  .loader {
    height: 150px;
  }
  label {
    cursor: pointer;
    transition: background-color 0.3s;
  }
  label img {
    height: 100px;
  }
  input {
    height: 0;
    width: 0;
  }
  .drag {
    color: grey;
    background-color: rgb(245, 245, 245);
    display: inline-block;
    padding: 30px 5px;
    width: 450px;
    border: 1px dashed gray;
    border-radius: 8px;
  }
  .not-drag {
    color: grey;
    background-color: rgb(216, 216, 216);
    display: inline-block;
    padding: 30px 5px;
    width: 450px;
    border: 1px dashed gray;
    border-radius: 8px;
  }
  .light {
    font-weight: lighter;
  }
</style>
