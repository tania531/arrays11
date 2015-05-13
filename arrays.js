// Create array
var numsArray = [7, -3, 0, 12, 44, -5, 3];
var tot = 0;
var results = {oddCount:0,
              negs:0,
              ave:0,
              median:0};

numsArray.forEach(CountOdds);
numsArray.forEach(CountNegs);
numsArray.forEach(CalcAve);
numsArray.forEach(GetMedian);

function GetMedian(val, i, arr){
  arr.sort(function(a,b){
    return a - b;
  });

    var half = Math.floor(arr.length/2);

    if(arr.length % 2)
        return results.median = arr[half];
    else
        return results.median =  (arr[half-1] + arr[half]) / 2.0;

}

function CalcAve(val, i, arr){

  tot += val;
  results.ave = (tot / arr.length);
  results.ave = parseFloat(results.ave.toFixed(2));
  return results.ave;
}

// Define the callback functions.
function CountOdds(value) {
  if(value % 2 !== 0){
     results.oddCount++;
  }
  //results[oddCount] = oddCount;
  return results.oddCount;
}
function CountNegs(value) {
  if(value < 0){
     results.negs++;
  }
  //results[oddCount] = oddCount;
  return results.negs;
}

console.log(results);

// returns Object {oddCount: 4, negs: 2, ave: 8.29, median: 3}
