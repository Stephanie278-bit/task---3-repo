class Rent {
    constructor(title, genre, stock) {
        this.title = title;
        this.genre = genre;
        this.stock = stock;
    }

    // series rental
    rentSeries(){
        if(this.stock > 0){
            this.stock--;
            console.log(`you have rented "${this.title}" Have fun`);
        } else {
            console.log( `Sorry "${this.title}" isnt available`);
        };
    }

    //series return
    returnSeries(){
        this.stock++;
        console.log(` You have returned "${this.title}"`);
    }

    //class inheritance from rent class
    class Rent {
        constructor(){
            this.series = [];
        }

        //to add new series
        newSeries(title, genre, stock) {
            const series = new Renting(title, genre, stock);
            this.series.push(series);
        }

        //to rent series
        rentFilm(title){
            const series = this.searchSeries(title);

            if(series){
                series.rentSeries();
            } else {
                console.log(`Series:"${title}" not found`);
            }
        }
        //series return class method
        rentFilm(title) {
            const series = this.searchSeries(title);

            if (series){
                series.returnSeries();
                console.log(`Successfully returned ;)`);
            }else {
                console.log(`Series ${title} not found`);
            }
        }
        //series search
        searchSeries(title){
          return this.series.find((item) => item.title === title);
        }

        //series display
        listFilm() {
            console.log(`Available Series:`);

            this.series.forEach((value) =>{
                console.log(`${value.title}, ${value.genre}, Stock : ${value.stock}`);
            });
        }
    }
    
}