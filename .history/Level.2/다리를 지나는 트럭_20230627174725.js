function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let time = 0;
    let all_weights = 0;
    // 7, 4, 5, 6
    const bridge = [];
    
    if(truck_weights.length == 1){
        return bridge_length +1;
    }
    
    while (truck_weights.length > 0 || bridge.length > 0) {
        time++;

        if (bridge.length > 0 && time - bridge[0].time === bridge_length) {
           console.log(bridge[0].time)
            all_weights -= bridge.shift().weight;
        }

        if (truck_weights.length > 0 && all_weights + truck_weights[0] <= weight) {
            const truckWeight = truck_weights.shift();
            all_weights += truckWeight;
            bridge.push({ weight: truckWeight, time: time });
        }
    }
    
    return time;
}