$(document).ready(function() {
  
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-limpar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaTarefa = $('#text-novo').val();
        const novoItem = $('<li style= "display: none"></li>');
       $(`<div class="paragrafo"><p>` + enderecoDaNovaTarefa + `</p></div>`).appendTo(novoItem);
        $('ul').append(novoItem);
        $(novoItem).fadeIn(1000);
        $('#text-novo').val('');
    })
 })


