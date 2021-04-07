//시간
// function getTime() {
//     let show = document.getElementById('show');
//     let time = new Date();
//     let year = time.getFullYear();
//     let month = time.getMonth();
//     let date = time.getDate();
//     let hh = time.getHours();
//     let mm = time.getMinutes();
//     let ss = time.getSeconds();

//     show.innerHTML = year + '년 ' + (month + 1) + '월 ' + date + '일 '
//         + hh + ':' + mm + ':' + ss;
// }
// setInterval(function() {getTime(), 1000});    


//점심시간까지 남은 시간 
function lunch() {
    let t = new Date();
    let h = t.getHours();
    let m = t.getMinutes();
    let s = t.getSeconds();
    let now = new Date(h, m, s);

    let lunchTime = new Time(12, 50, 0);
    let toLunch = now - lunchTime;

    show.innerHTML = h + ':' + m + ':' + s;
}

// setInterval(function() {lunch(), 1000})