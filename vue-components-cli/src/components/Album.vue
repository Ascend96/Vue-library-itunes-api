<template>
  <div class="album">
    <h3 class="card-title">{{item.title}}</h3>
    <div class="row">
      <div class="col-md-6">
        <p class="card-text">Artist: {{item.artist}}</p>
      </div>
      <div class="col-md-6">
        <p class="card-text">Track Count: {{item.trackCount}}</p>
      </div>
    </div>


  </div>
</template>

<script>
import Media from "@/components/Media";
export default {
  name: "Album",
  extends: Media,

}
</script>

<style scoped>

</style>