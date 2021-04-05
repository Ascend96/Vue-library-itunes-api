<template>
  <div class="movie">
    <img :src="item.image" height="100px" width="100px">
    <h3 class="card-title">{{item.title}}</h3>
    <p class="card-text"><b>Artist:</b> {{item.artist}}</p>
    <hr>
    <p class="card-text"><b>Runtime:</b> {{item.runtime}}</p>
    <p class="card-text"><b>Genre:</b> {{item.genre}}</p>
    <p class="card-text"><b>Type:</b> {{item.type}}</p>

  </div>
</template>

<script>
import Media from "@/components/Media";

export default {
  name: "Movie",
  extends: Media,
}
</script>

<style scoped>

</style>