
export function computeStatistics(numbers) {
    if (!numbers || !Array.isArray(numbers) || numbers.length === 0) {
        return {
            average: NaN,
            min: NaN,
            max: NaN
        };
    }
    
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    return {
        average: average,
        min: min,
        max: max
    };
}
