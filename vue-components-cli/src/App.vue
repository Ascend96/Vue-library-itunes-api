<template>
  <div>
    <nav class="navbar bg-dark text-light">
      <span class="navbar-brand"><i class="fas fa-shopping-bag mx-2"></i> CHECK IT OUT!</span>
      <div class="mx-auto order-0">
        <form class="form-inline my-2 my-lg-o">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" v-model="searchTerm">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="searchStore()">Search</button>
        </form>
      </div>

      <ul class="nav nav-pills navbar-left">
        <li class="nav-item align-start" v-for="item in menuItems" :key="item.title"><router-link :to="item.path" class="nav-link">{{item.title}}<span v-show="item.title === 'Bag'">({{bag.length}})</span>
        </router-link></li>
      </ul>

    </nav>

    <div id="app" class="container-fluid mt-3">
      <div v-if="searching" class="text-center search">Searching..</div>
      <router-view v-else-if="!searching" :library="library" :bag="bag" @update-bag="removeFromBag" @add-bag="addItemToBag" @empty-bag="emptyBag"></router-view>
<!--      <Library :library="library" @add-bag="addItemToBag"></Library>-->
<!--      <Bag :bag="bag" @update-bag="removeFromBag" ></Bag>-->
<!--      <button @click="emptyBag()">Empty cart</button>-->
<!--      <button class="btn btn-success" @click="updateStatus()">Checkout</button>-->
    </div>
  </div>
</template>

<script>
import LibraryCollection from "@/models/LibraryCollection";
import {Book, Movie, Album, Audiobook, Podcast, TVShow, Song} from "./models/LibraryItems";
import LibraryBag from "@/models/LibraryBag";
import axios from 'axios';







export default {
  name: 'App',
  data(){
    return {
      library: new LibraryCollection()
          // .addItem(new Book('Learning Vue', 120))
          // .addItem(new Book('Interaction Design', 200 ))
          // .addItem(new Movie('Princess Bride', 118 ))
          // .addItem(new Movie('Strange Brew', 92 ))
          .addItem(new Album("The Wall", "Pink Floyd", 26 ))
          .addItem(new Album("The Dark Side of the Moon", "Pink Floyd", 9)),

      bag: new LibraryBag()
       .addCart(new Album("illmatic", "nas", 16)),

      menuItems: [
        {title: 'Items', path: '/items', icon: 'mdi-bag'},
        {title: 'Bag', path: '/bag', icon: 'mdi-cart'}
      ],
      searching: true,
      searchTerm: 'JavaScript',
      country: 'US',
      media: 'all',

    }
  },
  components: {

  },
  methods: {
    addItemToBag(item){
      item.inCart
      console.log(item.inCart)
      this.bag.addCart(item);
    },
    emptyBag(){
      this.bag.emptyCart();
    },
    removeFromBag(item){
      this.bag.removeCartItem(item);
    },

    // this method searches the API and pulls results
    searchStore(){
      if(this.searchTerm){


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
              console.log(response.data.results);


              // if there are results, set library to new collection
              if(response.data.results.length){
                this.library = new LibraryCollection();
              }
                // loop through each item in response array
                response.data.results.forEach( e => {
                  // if else statements to check for type of media, and then correctly create new component based on results
                  if(e.kind == 'ebook'){
                    this.library.addItem(new Book(e.trackName, e.artistName, e.genres[0], e.kind, e.artworkUrl100))
                  }
                 else if(e.kind == 'feature-movie'){
                    // converts time from milliseconds to minutes
                   let time = (parseInt(e.trackTimeMillis)/1000) /60;
                    this.library.addItem(new Movie(e.trackName, e.artistName, time.toFixed(2), e.primaryGenreName, e.kind, e.artworkUrl100))
                  }
                 else if(e.kind == 'song'){
                   this.library.addItem(new Song(e.trackName, e.artistName, e.collectionName, e.trackExplicitness, e.kind, e.artworkUrl100))
                  }
                 else if(e.wrapperType == 'audiobook'){
                   this.library.addItem(new Audiobook(e.collectionName, e.artistName, e.description, e.wrapperType, e.artworkUrl100))
                  }
                 else if(e.kind == 'podcast'){
                   this.library.addItem(new Podcast(e.collectionName, e.artistName, e.primaryGenreName, e.kind, e.artworkUrl100))
                  }
                 else if(e.kind == 'tv-episode'){
                   // converts time from milliseconds to minutes
                    let time = (parseInt(e.trackTimeMillis)/1000) /60;
                   this.library.addItem(new TVShow(e.collectionName, e.trackName, time.toFixed(2), e.kind, e.artworkUrl100))
                  }
                })
            })
            .catch((error) =>{
              console.log('AJAX SEARCH ERROR', error);
            })
            .finally(() => {
              this.searching = false;
            })
      }
    }
  },

  mounted(){
    this.searchStore();
  }
}
</script>

<style>

/* Styles that are not scoped are like putting them in a stylesheet */
.nav-item{
  width: 100px;
  border-left: 2px solid white;

}
nav a{
  color: white;
}
.nav-item:hover{
  background-color: gray;
  cursor: pointer;

}
.search{
  border: 3px solid mediumpurple;
  font-size: 2.5rem;
}


</style>
