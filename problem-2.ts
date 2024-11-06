function removeDuplicates( arr: Array<number>): Array<number> {

    let uniqueArray : Array<number> = [];

    arr.forEach(element => {
        if(uniqueArray.indexOf(element) < 0){
            uniqueArray.push(element);
        }
    });

    console.log(uniqueArray);

    return uniqueArray;
    
}

removeDuplicates([1, 2, 2, 3, 4, 4, 5]);