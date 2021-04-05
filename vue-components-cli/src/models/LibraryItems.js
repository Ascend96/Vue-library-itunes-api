function LibraryItem(media, removeMethod, addToCartMethod){
    // list of possible status (enum)
    const STATUSES = {CHECKED_OUT: 'out', AVAILABLE: 'in'};

    const CARTSTATUS = {IN_CART : false};

    // set the default status
    media.status = STATUSES.AVAILABLE;
    media.cartStatus = CARTSTATUS.IN_CART;

    // methods
    media.checkIn = function(){
        this.status = STATUSES.AVAILABLE;
    }

    media.checkOut = function(){
        this.status = STATUSES.CHECKED_OUT;
    }

    media.isAvailable = function(){
        return this.status === STATUSES.AVAILABLE;
    }
    media.inCart = function(){
        this.cartStatus = true;
    }

    if(removeMethod){
        // option 1
        // media.remove = function(){
        //     removeMethod(this);
        // }
        // option 2
        media.remove = removeMethod;
    }

    if(addToCartMethod){
        media.add = addToCartMethod;
    }

    // if(removeFromCartMethod){
    //     media.cart = removeFromCartMethod;
    // }

    return media;
}

//let book = new LibraryItem('Interaction Design', 200);
//let movie = new LibraryItem('Strange Brew', null,92);

function Book(title, artist, genre, type, image){
    this.title = title;
    this.artist = artist;
    this.genre = genre;
    this.type = type;
    this.image = image;
}


// same as
class Movie{
    constructor(title, artist, runtime, genre, type, image) {
        this.title = title;
        this.artist = artist;
        this.runtime = runtime;
        this.genre = genre;
        this.type = type;
        this.image = image;

    }
}

function Album(title, artist, trackCount){
    this.title = title;
    this.artist = artist;
    this.trackCount = trackCount;

}

function Podcast(title, artist, genre, type, image){
    this.title = title;
    this.artist = artist;
    this.genre = genre;
    this.type = type;
    this.image = image;

}

function Audiobook(title, artist, description, type, image){
    this.title = title;
    this.artist = artist;
    this.description = description;
    this.type = type;
    this.image = image;

}

function TVShow(title, episodeName, length, type, image){
    this.title = title;
    this.episodeName = episodeName;
    this.length = length;
    this.type = type;
    this.image = image;

}
function Song(title, artist, album, explicitness, type, image){
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.explicitness = explicitness;
    this.type = type;
    this.image = image;
}



// export for use as JS modules
export {LibraryItem, Book, Movie, Album, Podcast, Audiobook, TVShow, Song}