// smooth scroll
$('.page-scroll').on('click', function(e){

    var tujuan = $(this).attr('href');

    var elemenTujuan = $(tujuan);
    console.log(elemenTujuan.offest().top);

    // $('body').animate({
    //     scrollTop: elemenTujuan.offset().top - 50
    // }, 1250, 'swing');

    // e.preventDefault();


});