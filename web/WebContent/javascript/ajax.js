let tbl, tr, th, td, text;

// Asynchronous JavaScript And Xml
let xhtp = new XMLHttpRequest();
xhtp.onreadystatechange = function () {
    console.log(xhtp.readyState, xhtp.status);
    if (xhtp.readyState == 4 && xhtp.status == 200) {
        // console.log(xhtp.responseText);
        let data = JSON.parse(xhtp.responseText);
        // console.log(data);


        tbl = document.getElementById('tbl');
        for (obj of data) { //index : 0, ... 14
            tr = document.createElement('tr');
            tbl.appendChild(tr);
            for (field in obj) { // field : id, first_name, ... 
                td = document.createElement('td');
                text = document.createTextNode(obj[field]);
                tr.appendChild(td);
                td.appendChild(text);
                // console.log(field, obj[field]);
            }
        }
    }
};
xhtp.open('get', 'MOCK_DATA.json'); //get 뒤에 파일이름
xhtp.send();
//readystate = 4, status = 200 이면 정상
