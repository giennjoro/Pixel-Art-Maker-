$('#sizePicker').submit(function makeGrid(grid) {
   
    $('table tr').remove();

    var row = $('#inputHeight').val();
    var column = $('#inputWidth').val();
    
    for (var i = 1; i <= row; i++) {
        $('table').append("<tr></tr>");
        for (var j = 1; j <= column; j++) {
            $('tr:last').append("<td></td>");
            $('td').attr("class", 'cells');
        }
    }
    grid.preventDefault();

    $('.cells').click(function (event) {
        var addColour = $('#colorPicker').val();
        $(event.target).css('background-color', addColour);
    });
    
    
});
