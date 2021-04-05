<template>
  <div class="card-columns">
    <LibraryItem v-for="(thing, i) in library.items" :item="thing" :key="i" @add-bag="addToBag"></LibraryItem>

  </div>
</template>

<script>
import LibraryItem from "@/components/LibraryItem";
import axios from 'axios';
import LibraryCollection from "@/models/LibraryCollection";


export default {
  name: "Library",
  components: {
    LibraryItem
  },
  props: {
    library: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToBag(item) {
      console.log("emitting event from library")
      this.$emit('add-bag', item);
    }
  },

  searchStore(){
    if(this.searchTerm){
      this.searchResults = new LibraryCollection();

      this.searching = true;

      let url = 'https://itunes.apple.com/search'

      let config = {
        params: {
          term: this.searchTerm,
          country: this.country,
          media: this.media,
        }
      };

      axios
          .get(url, config)
          .then((response) =>{
            console.log('Response from API', response)
            if(response.data.results.length){
              this.searchResults = new LibraryCollection(response.data.results);
            }
          })
          .catch((error) =>{
            console.log('AJAX SEARCH ERROR', error);
          })
          .finally(() => {
            this.searching = false;

          })
    }

  }


}
</script>

<style scoped>

</style>