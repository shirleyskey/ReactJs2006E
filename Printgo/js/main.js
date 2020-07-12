$(document).ready(function() {
    // Handler for .ready() called.
    var $grid = $('.grid').isotope({
        // options
        itemSelector: '.product__item',

    });

    $('.filter-button-group').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        console.log("hihi");
    });
});