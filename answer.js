function describeValue(value){
    if(value) return `${typeof(value)} | truthy`;
    else return `${typeof(value)} | falsy`;
}

function getDayType(day){
    switch (day.toLowerCase()) {
        case "friday":
        case "saturday":
            return "Weekend";
        
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day"
    }
}

function validateUsername(name){
    n = name;
    if(n.length < 4) return `${"Too Short"}`;
    if(n.includes(" ")) return `${"No Space Allowed"}`;
    if(n.toLowerCase().includes("admin")) return `${"Reserved Word"}`
    else return `${"Available"}`;
    
}

function getCngFare(distance, isNight = false, waitingMinutes = 0){
    let fare;
    if(distance <= 2) fare = 50;
    else fare = 50+((distance-2)*15);

    if(waitingMinutes > 0) fare = fare = fare + (waitingMinutes * 2);

    if(isNight) fare = fare * 1.20;
    return fare;
}


const getChaseVerdict=(target, scored, ballsLeft)=>{
    let run_needed=target-scored;
    if(run_needed <= 0) return `${"Won"}`;
    else if(ballsLeft <= 0)  return `${"Lost"}`; 

    let required_rate= (run_needed/ballsLeft)*6;

    if(required_rate <= 6) return  `Need ${run_needed} runs in ${ballsLeft} balls | Comfortable`; 
    else if(required_rate <= 12) return  `Need ${run_needed} runs in ${ballsLeft} balls | Tough`; 
    else return  `Need ${run_needed} runs in ${ballsLeft} balls | Almost Impossible`; ; 

}