import {LibraryItem} from "@/models/LibraryItems";

export default function LibraryBag(){
    this.__proto__ = [];

    this.addCart = function(item){
        this.push(new LibraryItem(item))
            // (function(collection){
            //     return function(){
            //         collection.removeCartItem(this)
            //     }
            // })(this)


        return this;
    }

    this.removeCartItem = function (item){
        this.splice(this.indexOf(item), 1)
            return this;
        };

    this.emptyCart = function(){
        console.log("Splicing bag")
        this.splice(0, this.length);
        return this;
    }
}
