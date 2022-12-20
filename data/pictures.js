class Picture {
    constructor(name, artist, price, stock, imageUrl) {
        this.name = name;
        this.artist = artist;
        this.price = price;
        this.stock = stock;
        this.imageUrl = imageUrl;
    }
    getName(name) {
        return this[name];
    }
    getArtist(artist) {
        return this[artist];
    }
    getPrice(price) {
        return this[price];
    }
    getStock(stock) {
        return this[stock];
    }
    getImage(imageUrl) {
        return this[imageUrl];
    }
}

export let pictures = [new Picture("Railways in the sunset", "Mike", "200$", "In Stock", "https://media.istockphoto.com/id/687099918/photo/railroad-and-beautiful-sky-at-sunset-industrial-landscape-with-railway-station-colorful-blue.jpg?s=612x612&w=is&k=20&c=IBHQkD2AuUPXYhl2AbwL-tX4osTMj736_3K756wt608="), new Picture("Train in sunset", "Nimrod", "150$", "In Stock", "https://media.istockphoto.com/id/116658384/photo/railroad-locomotive-travelling-across-arizona.jpg?s=612x612&w=is&k=20&c=vou95SUmrVPGzPz3ucUy4vTg-AbR3aRwdvquP_-mykA="), new Picture("Railways", "Dana", "380$", "Not In Stock", " https://media.istockphoto.com/id/491070078/photo/nature-background.jpg?s=612x612&w=is&k=20&c=MYenZZC2mxHo60KeyKVfZ4Lo7Ah9bGrKydWxG-ErtU4="), new Picture("Black and White Railways", "Noa", "1000$", "In Stock", " https://media.istockphoto.com/id/155284419/photo/railroad-track-points.jpg?s=612x612&w=is&k=20&c=VDUwAu02Tbjnh-i-nwXTLipJao7Do88YCLJAWaRMwyg="), new Picture("Electric Trains", "Yuval", "565$", "Not In Stock", "https://media.istockphoto.com/id/1040255488/photo/an-empty-railway-sorting-station-or-terminal-with-lots-of-juncti.jpg?s=612x612&w=is&k=20&c=3eoER2Iqxg1CpOLdQQ9hE7PopmmJ4kJ35RCIWeObwbg="), new Picture("Train in the snow", "Almog", "1500$", "In Stock", "https://images.pexels.com/photos/723175/pexels-photo-723175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"), new Picture("Train station", "Anat", "1800$", "In Stock", "https://images.pexels.com/photos/1824169/pexels-photo-1824169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"), new Picture("Subway", "Shiran", "320$", "Not In Stock", "https://images.pexels.com/photos/1057858/pexels-photo-1057858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"), new Picture("Graphity on a train", "Aviv", "900$", "In Stock", "https://images.pexels.com/photos/358167/pexels-photo-358167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")];

