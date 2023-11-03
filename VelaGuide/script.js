//arrow interactions
$(document).ready(function(){
    $('.surgery-header').click(function(){
        var targetContent = $($(this).attr('data-target'));
        var arrowIcon = $(this).find('.arrow-icon');
        
        if (targetContent.css('display') === 'none') {
            targetContent.show();
            arrowIcon.addClass('rotated');
        } else {
            targetContent.hide();
            arrowIcon.removeClass('rotated');
        }
    });
});
