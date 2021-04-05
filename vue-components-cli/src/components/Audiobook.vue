<template>
  <div class="audiobook">
    <img :src="item.image" alt="picture" height="100px" width="100px">
    <h3 class="card-title">{{item.title}}</h3>
    <p class="card-text"><b>Artist:</b> {{item.artist}}</p>
    <hr>
    <p class="card-text"><b>Type: </b> {{item.type}}</p>



  </div>
</template>

<script>
import Media from "@/components/Media";
export default {
  name: "Audiobook",
  extends: Media,
}
</script>

<style scoped>

</style>