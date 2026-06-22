function markAttendance(status){

    const result = document.getElementById("result");

    result.innerHTML = status;

    if(status === "Present"){
        result.style.color = "green";
    }
    else{
        result.style.color = "red";
    }

}