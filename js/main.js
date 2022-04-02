function roundToNext5(n){
    let i = n;
    while(i % 5 !== 0){
      i++;
    }
    return i;
  }

console.log(roundToNext5(12)) // 15