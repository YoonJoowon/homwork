// 검색 알고리즘

    // 이진 검색 솔루션

    function Search(arr, elem){
        var start = 0;
        var end = arr.length -1;
        var middle = math.floor((start + end) / 2);
        while(arr[middle] !== elem && start <= end){
            if(elem < arr[middle]) end = middle - 1;
            else start = middle + 1;
            middle = Math.floor((start + end) / 2);
        }
        return arr[middle] === elem ? middle : -1;
    }
    Search([2,5,6,7,13,15,28,30], -10)

    // 나이브 문자열 검색구현

    function naiveSearch(long, short){
        var count = 0;
        for (var i = 0; i < long.length; i++){
            for(var j = 0; j < short.length; j++){
                if(short[j] !== long[i+j]) break;
                if(j === short.length - 1) count ++;
            }
        }
        return count;
    }
    naiveSearch("lorie loled", "pop")