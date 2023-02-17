// 합병정렬
    
    // for vs while
    // for : for 반복문은 어떤 특정한 조건이 거짓으로 판별될 때까지 반복합니다.
    //  while : while 문은 어떤 조건문이 참이기만 하면 문장을 계속해서 수행합니다.

    function merge(arr1, arr2){
        let results = [];
        let i = 0;
        let j = 0;
        while(i < arr1.length && j < arr2.length){
            // 둘 중 하나가 배열길이 마지막에 도달했을 때 멈춤
            if(arr2[j] > arr1[i]){
                results.push(arr[i]);
                i++;
            } else {
                results.push(arr2[j])
                j++;
            }
        }
        // 작은 것 부터 results에 하나씩 푸쉬
        while(i < arr1.length){
            results.push(arr1[i])
            i++;
        }
        while(j < arr1.length){
            results.push(arr2[j])
            j++;
        }
        // 두 배열 중 하나의 루프가 다 끝났을때 남은 하나 모두 푸쉬
        return results;
    }
    merge([100],[1,2,3,4,5,6])

    function mergeSort(arr){
        if(arr.length <= 1) return arr;
        let mid = math.floor(arr.length/2);
        // math.floor() 정수만 추출
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));
        // 끝 범위는 굳이 안적어도 됨
        return merge(left, right);
    }