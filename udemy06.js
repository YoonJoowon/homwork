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



    // 배열정렬은 필수이며 면접에도 자주나옴
    // 버블, 선택, 삽입 정렬은 작은 배열에서는 자주 쓰이지만 썩 좋진 않음
    // 버블정렬, 삽입정렬 = 정렬이 거의 다 돼 있을 경우 O(n) 의 복잡도를 가짐
    // 선택정렬 = 정렬이 거의 다 돼 있더라도 O(n^2) 의 복잡도를 가짐 / 쉽다는 것 말고는 장점이 없음