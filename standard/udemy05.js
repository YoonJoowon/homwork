// 선택정렬

    // 구현
    // 메모리에 쓰는 것을 고려하거나 실제 스왑을 수행하는 것을 고려하는 경우 용이 (가끔 쓰임 - 한 숫자를 끝까지 가져가기 때문)
    // 한 숫자 완료하고 한 숫자 완료하고 실행
    function selectionSort(arr){
        for(var i = 0; i < arr.length; i++){
            var lowest = i;
            for(var j = i+1; j < arr.length; j++){
                if(arr[j] < arr[lowest]){
                    lowest = j;
                }
            }
            if(i !== lowest){
                var temp = arr[i];
                arr[i] = arr[lowest];
                arr[lowest] = temp;
            }
        }
        return arr;
    }
    selectionSort([34,22,10,19,17]);


    function selectionSort(arr){
        const swap = (arr, idx1, idx2) =>
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])

        for(let i = 0; i < arr.length; i++){
            let lowest = i;
            for (let j = i+1; j < arr.length; j++){
                if(arr[lowest] > arr[j]){
                    lowest = j;
                }
            }
            if(i !== lowest) swap(arr, i, lowest);
        }
        return arr;
    }

    selectionSort([0,2,34,22,10,19,17])
    