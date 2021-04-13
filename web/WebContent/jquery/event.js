 // $(function () {
        //     let table = [];
        //     table.push('<ul>');
        //     table.push('<li>Apple</li>');
        //     table.push('<li>Banana</li>');
        //     table.push('<li>Cherry</li>');
        //     table.push('</ul>');
        //     let tag = table.join('');
        //     $('body').html(tag); 
        // });

        $(document).ready(function () {
            $.ajax({
                url: "../MOCK_DATA.json",
                success: function (data) {
                    let table = [];
                    table.push('<table border="1">');
                    for (let i = 0; i < data.length; i++) { //row 단위
                        table.push('<tr>');
                            for(filed in data[i]) { //field 단위
                                table.push('<td>' + data[i][filed] +'</td>')
                            }
                            table.push('</tr>')
                    }
                    table.push('</table>');
                    let tag = table.join('');
                    $('body').html(tag);
                }
            });
        });




        // $(document).ready(function () {
        //     $.ajax({
        //         url: "../MOCK_DATA.json",
        //         success: function (data) {
        //             let table = [];
        //             table.push('<table border="1">');
        //             let ulTag = $('<ul />');
        //             console.log(data);
        //             for(let i=0; i<data.length; i++){
        //             let liTag = $('<li />').html(data[i].id);
        //             ulTag.append(liTag);
        //             }
        //             $('body').append(ulTag);


                    // let tbl = $('<table border = "1" />').attr('id', 'tbl');
                    // for (let i = 0; i < data.length; i++) {
                    //     let tr = $('<tr />');
                    //     let th = $('<th />');
                    //     let td = $('<td />');

                    //     tr.append(
                    //         $(td).html(data[i].id));
                    //     tbl.append(tr);

                    //     td = $('<td />');
                    //     tr.append(
                    //         $(td).html(data[i].first_name));
                    //     tbl.append(tr);

                    //     td = $('<td />');
                    //     tr.append(
                    //         $(td).html(data[i].last_name));
                    //     tbl.append(tr);

                    // }

                    // $('body').append(tbl);

        //         }
        //     });
        // });




        // 이름 클릭
        $.ajax({
            url: '../MOCK_DATA.json',
            type: 'get',
            data: 'name=hong&age=20',
            dataType: 'json',
            success: function (data) {
                let arry = data;
                let ulTag = $('<ul />');
                $(arry).each(function (index, object) { //a=index/b=object
                    console.log(index, object);
                    // ulTag.append($('<li />').html('<a href="#">' + object.first_name + '</a>'));
                    ulTag.append($('<li />')
                        .append($('<a />')
                        .html(object.first_name)
                        .attr('href', 'get.jsp?name=' + object.first_name)));
                });
                $('body').append(ulTag);
            },
            error: function (reject) {
                console.error(reject.status, reject.statusText);
            }
        });