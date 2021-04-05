<template>
  <div class="tvshow">
    <img :src="item.image" height="100px" width="100px">
    <h3 class="card-title">{{item.title}}</h3>
    <p class="card-text"><b>Episode Name:</b> {{item.episodeName}}</p>
    <hr>
    <p class="card-text"><b>Length:</b> {{item.length}}</p>
    <p class="card-text"><b>Type:</b> {{item.type}}</p>

  </div>
</template>

<script>
import Media from "@/components/Media";
export default {
  name: "TVShow",
  extends: Media,
}
</script>

<style scoped>

</style>