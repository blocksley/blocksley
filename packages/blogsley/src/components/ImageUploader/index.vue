<template>
  <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions" @vdropzone-success="success"></vue-dropzone>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

import gql from 'graphql-tag'

export default {
  name: 'ImageUploader',
  data () {
    return {
      images: [],
      dropzoneOptions: {
        // url: 'https://httpbin.org/post',
        url: process.env.SERVER_URL + '/images/upload',
        // autoProcessQueue: false,
        // accept: (file, done) => { console.log(file); done() },
        thumbnailWidth: 150,
        maxFilesize: 0.5
        // headers: { 'My-Awesome-Header': 'header value' }
      }
    }
  },
  components: {
    vueDropzone: vue2Dropzone
  },
  computed: {
  },
  methods: {
    success (file, response) {
      console.log('success')
      console.log(file)

      const imageInput = {
        title: file.name,
        filename: file.name,
        // src: dataURL
        src: `${process.env.SERVER_URL}/images/${file.name}`
      }
      this.$apollo.mutate({
        // Query
        mutation: gql`
          mutation ($data: ImageInput!) {
            createImage (data: $data) {
              id
            }
          }`,
        // Parameters
        variables: {
          data: imageInput
        }
      }).then((data) => {
        console.log(data)
      })
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
</style>
