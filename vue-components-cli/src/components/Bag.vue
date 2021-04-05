<template>
  <div class="jumbotron">
    <h2>Your Bag</h2>
    <div class="card-columns">
      <LibraryItem v-for="(thing, i) in bag" :item="thing" :key="i" @add-bag="addToBag" @update-bag="removeFromBag"></LibraryItem>
    </div>
    <button class="btn btn-success" @click="updateStatus()">Checkout</button>
  </div>
</template>

<script>
import LibraryItem from "@/components/LibraryItem";
export default {
  name: "Bag",
  components: {
    LibraryItem
  },
  props: {
    bag: {
      type: Object,
      required: true,
    }
  },
  methods: {
    // emits add to cart event in App.vue
    addToBag(item) {
      this.$emit('add-bag', item);
    },
    // emits remove from cart event in App.vue
    removeFromBag(item){
      this.$emit('update-bag', item);
    },
    // loops through each item in cart and calls checkOut function
    updateStatus(){
      this.bag.forEach(function(item){
        item.checkOut();
      })
      // emits empty cart event in App.vue
      this.$emit('empty-bag')
    },

  },

}
</script>

<style scoped>

</style>