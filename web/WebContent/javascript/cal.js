function createCalendar() {
    let today = new Date();
    let thisYear = today.getFullYear();
    let thisMonth = today.getMonth(); //0: 1월, 1: 2월, ...
    let thisDate = today.getDate();
    let thisDay = today.getDay(); //0: 일, 1: 월, 2: 화, ...
    console.log(thisYear);
    console.log(thisMonth + 1);
    console.log(thisDate);
    console.log(thisDay);

    let lastDate = new Date(thisYear, thisMonth + 1, 0).getDate();
    //(,, month + 1,) 이번달 + 1 = 다음달
    //( , ,0)0: 지난달의 마지막날, 1: 이번 달 1번째 날
    let firstDate = new Date(thisYear, thisMonth, 1).getDate();
    let firstDay = new Date(thisYear, thisMonth, 1).getDay(); //이번달의 1번째 날의 요일
    console.log(firstDay)
    // let firstDay = 4 
    let days = ['일', '월', '화', '수', '목', '금', '토'];

    //이번 달.. 
    document.write('<h1>' + thisYear + '년 ' + (thisMonth + 1) + '월 </h1>')
    document.write('<table border = "1">');
    document.write('<tr>');
    //요일
    for (let i = 0; i < 7; i++) {
        document.write('<th>' + days[i] + '</th>');
    }
    document.write('</tr>');

    //날짜
    document.write('<tr>');
    for (let i = 0; i < firstDay; i++) {
        document.write('<td></td>');
    }
    for (let i = 1; i <= lastDate; i++) {
        // document.write('<td></td>');
        if ((i + firstDay) % 7 == 0) {
            document.write('<td>' + i + '</td></tr><tr>');
        } else if (i == thisDate) { //오늘 날짜 표시
            document.write('<td style = "background-color : yellow;">' + i + '</td>');
        } else {
            document.write('<td>' + i + '</td>');

        }
    }
    document.write('</table>');
}