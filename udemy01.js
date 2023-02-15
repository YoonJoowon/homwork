// 문제 해결 접근법 및 패턴

    // 두 배열 사이에 제곱되는 것만 있는지

    function same(arr1, arr2){
        if(arr1.length !== arr2.length){
            return false;
        }
        for(i=0; i<arr1.length; i++){
            let correctIndex = arr2.indexOf(arr1[i]**2)
            if(correctIndex===-1){
                return false;
            }
            arr2.splice(correctIndex, 1)
        }
        return trues
    }

    function sam(arr1, arr2){
        if(arr1.length !== arr2.length){
            return false;
        }
        let Counter1 = {}
        let Counter2 = {}
        for(let val of arr1){
            Counter1[val] = (Counter1[val] || 0) +1
        }
        for(let val of arr2){
            Counter2[val] = (Counter2[val] || 0) +1
        }
        for(let key in Counter1){
            if(!(key**2 in Counter2)){
                return false
            }
            if(Counter2[key**2] !== Counter1[key]){
                return false
            }
        }
        return true
    }

    // 배열 -x + x 가 0이되는것

    function sun(arr){
        for(let i = 0; i< arr.length; i++){
            for(let j = i+1; j < arr.length; j++){
                if(arr[i]+arr[j]===0){
                    return [arr[i], arr[j]];
                }
            }
        }
    }

    function sun(arr){
        let left = 0;
        let right = arr.length -1;
        while(left < right){
            let sum = arr[left] + arr[right];
            if(sum ===0){
                return [arr[left], arr[right]];
            }
            else if(sum>0){
                right --;
            }
            else {
                left ++;
            }

        }

    }

    // 배열 고유값 세려보기

    function countValues(arr){
        if(arr.length === 0) return 0;
        var i =0;
        for(var j = 1; j<arr.length; j++){
            if(arr[i]!== arr[j]){
                i++;
                arr[i] = arr[j]
            }
        }
        return i+1;
    }

    // 기준점 간 이동배열 패턴
    function maxSubArraySum(arr, num){
        if(num > arr.length){
            return null;
        }
        var max = -Infinity;
        for (let i =0; i < arr.length - num +1 ; i++){
            temp = 0;
            for (let j = 0; j < num; j++){
                temp += arr[i+j];
            }
            if (temp > max){
                max = temp;
            }
        }
        return max;
    }