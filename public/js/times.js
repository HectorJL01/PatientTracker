var timeList = ["9:00", "9:30", "10:00", "10:30", "11:00"];
function buttonTime () {
    for (var i = 0; i < timeList.length; i++){
        var btn = document.createElement("button");
        var list = document.createTextNode(timeList[i]);
        btn.appendChild(list);
        document.body.appendChild(btn);
    }
}
buttonTime();

