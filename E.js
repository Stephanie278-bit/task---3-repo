class DescriptiveStatistics {
    constructor (data){
        this.data = data.sort((a,b)=> a - b);
    }

    // Mean
    calculateMean (){
        const sum = this.data.reduce((acc,value) => acc + value, 0);
        return sum/this.data.length;
    }

    //median
    calculateMedian(){
        const middleIndex = Math.floor(this.data.length / 2);

        if (this.data.length % 2 === 0) {
            return (this.data[middleIndex -1] + this.data [middleIndex])
        } else{
            return this.data[middleIndex];
        }
    }
    
    //mode
    calculateMode() {
        const frequencyInt = {};

        this.data.forEach(value => {
            frequencyInt[value] = (frequencyInt[value] || 0) + 1
        });

        let mode;
        let maximumFrequency = 0

        for (const value in frequencyInt){
            if (frequencyInt[value] > maximumFrequency){
                mode = Number(value);
                maximumFrequency = frequencyInt[value];
            }
        }
        return mode;
    }

    // range
    calculateRange(){
        return this.data[this.data.length - 1] - this.data[0];
    }
    
    //variance
    calculateVariance(){
        const mean = this.calculateMean();
        const differences = this.data.map((value) => Math.pow(value - mean, 2));
        const sumSquaredDiff = differences.reduce((acc, value) => acc + value,0);
        return sumSquaredDiff / this.data.length;
    }

    //standard deviation
    calculateStandardDeviation(){
        return Math.sqrt(this.calculateVariance());
    }
}


//descriptive methods
console.log("Mean:", stats.calculateMean());
console.log("Median:", stats.calculateMedian());
console.log("Mode:", stats.calculateMode());
console.log("Range:", stats.calculateRange());
console.log("Variance:", stats.calculateVariance());
console.log("Standard Variation:", stats.calculateStandardDeviation());