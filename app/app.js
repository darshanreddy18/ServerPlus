function updateTime(){

    const now = new Date();

    document.getElementById("time").innerHTML =
    "Last Updated : " + now.toLocaleString();

}

updateTime();

setInterval(updateTime,1000);

console.log("ServerPlus Dashboard Started");
