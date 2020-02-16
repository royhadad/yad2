export default class Search {
    constructor(areaText, type, minNumOfRooms, maxNumOfRooms, minPrice, maxPrice, others) {
        this.areaText = areaText;
        this.type = type;
        this.minNumOfRooms = minNumOfRooms;
        this.maxNumOfRooms = maxNumOfRooms;
        this.minPrice = minPrice;
        this.maxPrice = maxPrice;
        this.others = others;
    }
}