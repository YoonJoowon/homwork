// 버블 정렬

    // 기본 내장 자바스크립트 정렬
    // - 그냥 기본 정렬이라고 보면 됨

    function numberCompare(num1, num2){
        return num2 - num1;
    }
    [6, 4, 15, 10].sort(numberCompare);

    function compareByLen(srt1, str2){
        return str2.length - srt1.length;
    }
    ["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen)

    // 버블 정렬 : 구현

    function bubblesort(arr){
        for(var i = arr.length; i > 0; i--){
            for(var j = 0; j< i-1; j++){
                console.log(arr, arr[j], arr[j+1]);
                if(arr[j] > arr[j+1]){
                    // SWAP!
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;                    
                }
            }
            console.log("ONE PASS COMPLETE!")
        }
        return arr;
    }

    // noSwap 변수 추가
    function bubbleSort(arr) {
        let noSwap;
        for (var i = arr.length; i > 0; i--) {
          noSwap = true;
          for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
              var temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
              noSwap = false;
            }
          }
          if (noSwap) break;
        }
        return arr;
      }
      
    bubblesort([37,45,29,8,12]);

    

    function bubblesort(arr){
        const swap = (arr, idx1, idx2) => {
            [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
        };

        for (let i = arr.length; i>0; i--){
            for(let j = 0; j < i-1; j++){
                if(arr[j] > arr[j+1]){
                    swap(arr, j, j+1);
                }
            }
        }
        return arr;
    }
    bubblesort([37,45,29,8,12]);