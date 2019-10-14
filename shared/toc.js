var sec_selector = (sec_selector != undefined) ? sec_selector : 'div.sec > center';

$(document).ready(function(){
        // pwa.text_html.richtext.toc

        pwatoc_e = $('#pwatoc');
        pwatoc_ul = $(pwatoc_e).find('ul');

        if (pwatoc_e.length == 0 || pwatoc_ul.length == 0){
                return;
        }

        $(sec_selector).each(function(e){
                var html_e = $(this).text();
                var div_id = $(this).attr('id');
                if (html_e != ""){
                        var new_el = $('<li><a href="#'+div_id+'">'+html_e+'</a></li>');
                        new_el.appendTo(pwatoc_ul);
                }
                /*todo: back to top disabled*/
                /*$(this)
                .parent()
                .html('<h4>'+html_e+'</h4>'+'<span>(topo)</span>')*/ 
        })
});