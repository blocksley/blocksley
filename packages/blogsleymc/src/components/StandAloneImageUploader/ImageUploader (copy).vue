<template>
  <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
    <div class="q-pa-md row items-start q-gutter-md">
      <ImageCard v-for="image in images" :key="image.id" :image="image" @click.native="select(edge.node)" clickable/>
    </div>
    <div class="dropbox">
      <input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
        accept="image/*" class="input-file">
        <p v-if="isInitial">
          Drag your file(s) here to begin<br> or click to browse
        </p>
        <p v-if="isSaving">
          Uploading {{ fileCount }} files...
        </p>
    </div>
  </form>
</template>

<script>
import gql from 'graphql-tag'

import ImageCard from 'components/ImageCard'

const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3

export default {
  name: 'ImageUploader',
  data () {
    return {
      images: [],
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: 'photos'
    }
  },
  components: {
    ImageCard
  },
  computed: {
    isInitial () {
      return this.currentStatus === STATUS_INITIAL
    },
    isSaving () {
      return this.currentStatus === STATUS_SAVING
    },
    isSuccess () {
      return this.currentStatus === STATUS_SUCCESS
    },
    isFailed () {
      return this.currentStatus === STATUS_FAILED
    }
  },
  methods: {
    save () {
      for (let image of this.images) {
        this.$apollo.mutate({
          // Query
          mutation: gql`
            mutation ($data: ImageInput!) {
              createImage (data: $data) @client {
                id
              }
            }`,
          // Parameters
          variables: {
            data: image
          }
        }).then((data) => {
          console.log(data)
        })
      }
    },

    reset () {
      // reset form to initial state
      this.currentStatus = STATUS_INITIAL
      this.uploadedFiles = []
      this.uploadError = null
    },
    filesChange (fieldName, fileList) {
      if (!fileList.length) return
      // handle file changes
      const reader = new FileReader()

      for (let file of fileList) {
        console.log(file)
        reader.onload = ((file) => { // here we save variable 'file' in closure
          return (event) => { // return handler function for 'onload' event
            const dataURL = event.target.result
            // print(event.target)
            const filename = file.name
            const image = {
              title: filename,
              filename: filename,
              src: dataURL
            }
            this.images.push(image)
            this.$apollo.mutate({
              // Query
              mutation: gql`
                mutation ($data: ImageInput!) {
                  createImage (data: $data) @client {
                    id
                  }
                }`,
              // Parameters
              variables: {
                data: image
              }
            }).then((data) => {
              console.log(data)
            })
          }
        })(file)
        reader.readAsDataURL(file)
      }
      // this.save()
    }
  },
  mounted () {
    this.reset()
  }
}
</script>

<style lang="scss">
  .dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>
