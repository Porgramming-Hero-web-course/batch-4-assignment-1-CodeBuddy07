function sumArray(arr: Array<number>): number {
    let sum: number = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
    return sum;
}

sumArray([1, 2, 3, 4, 5]);