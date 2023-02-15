// 재귀 recursion

    // 스택 호출하기
    function takeShower(){
        return "Showering!"
    }

    function eatBreakfast(){
        let meal = cookFood();
        return `Eating ${meal}`
    }

    function cookFood(){
        let items = ["Oatmeal", "Eggs", "Protein Shacke"]
        return items[Math.floor(Math.random()*items.length)];
    }

    function wakeUp(){
        takeShower()
        eatBreakfast()
        console.log("OK ready to go to work!")
    }

    wakeup()

    // 예제 1
    function countDown(num){
        for(var i = num; i > 0; i--){
            console.log(i);
        }
        console.log("All done!")
    }

    countDown(5)

    // 예제 2
    function sumRange(num){
        if(num === 1) return 1;
        return num + sumRange (num-1);
    }

    // 반복문으로 팩토리얼 구현하기
    function factorial(num){
        let total = 1;
        for(let i = num; i>0; i--){
            total *=i
        }
        return total;
    }

    // 재귀호출로 팩토리얼 구현하기
    function factorial(num){
        if(num === 1) return 1;
        return num * factorial(num-1);
    }
    factorial(5);

    // Helper 메소드 재귀
    function collectOddValues(arr){
        let result = [];

        function helper(helperInput){
            if(helperInput.length ===0){
                return;
            }
            if(helperInput[0] % 2 !== 0){
                result.push(helperInput[0])
            }
            helper(helperInput.slice(1))
        }
        helper(arr)
        return result;
    }

    collectOddValues([1,2,3,4,5,6,7,8,9])

    // 순수 재귀
    function collectOddValues2(arr){
        let newArr = [];

        if(arr.length ===0){
            return newArr;
        }

        if(arr [0] % 2 !==0){
            newArr.push(arr[0]);
        }

        newArr = newArr.concat(collectOddValues2(arr.slice(1)))
        return newArr;
    }

    collectOddValues2([1,2,3,4,5])