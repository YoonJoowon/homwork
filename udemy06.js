// 삽입정렬
    
    // 구현
    // - 기존의 [1,2,3,4,5,6] 처럼 다 정렬되고 새로운 항목이 들어와서 정렬 될 때 유리함
    function insertionSort(arr){
        for(var i = 1; i < arr.length; i++){
            var currentVal = arr[i];
            for(var j = i-1; j >= 0 && arr[j] > currentVal; j--){
                arr[j+1] = arr[j]
            }
            arr[j+1] = currentVal;
            console.log(arr)
        }
        return arr;
    }
    insertionSort([2,1,9,76,3])