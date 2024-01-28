class sum{
    static pi = 3.14159;

    static square(x){
        return x * x;
    }
    static circum(r){
        return 2 * sum.pi * radius;
    }
}

console.log(mathOperation.pi);

const result = mathOperation.square(5);
console.log(result);

const circumferenceResult = mathOperation.circumference(4);
console.log(circumferenceResult);

class description{
    static mean(numbers){
        const sum = numbers.reduce((acc,name) => acc + num, 0);
        return sum / numbers.length;
    }
    static median(numbers){
        const sortedNumbers = numbers.sort((a, b) => a - b);
        const middle = Math.floor(sortedNumbers.length / 2);
        return sortedNumbers.length % 2 === 0
        ?(sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2 : sortedNumbers[middle];
    }
    static mode(){

    }
    static range(numbers){
        const sortedNumbers = numbers.sort((a, b) => a - b);
        return sortedNumbers[sortedNumbers.length - 1] - sortedNumbers[0];
    }
    static variance(numbers){
        const meanValue = DescriptiveStatistics.mean(numbers);
        const squaredDifferences = numbers.map((num) => (num - meanValue) ** 2);
        return DescriptiveStatistics.mean(squaredDifferences);
    }
    static standardDeviation(numbers)
    {
        return Math.sqrt(DescriptiveStatistics.variance(numbers));
    }
}

const dataset = [12, 15, 8, 10, 5, 14, 7, 9];
console.log(DescriptiveStatistics.mean(dataset));
console.log(DescriptiveStatistics.median(dataset));
console.log(DescriptiveStatistics.range(dataset));
console.log(DescriptiveStatistics.standardDeviation(dataset));