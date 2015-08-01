(function ($) {
    $('.team-mate-image').mouseenter(function () {
        var imagePath = '/img/',
            numberOfPics = 4,
            randomPic = Math.floor(Math.random() * numberOfPics);
        $(this).attr('src', imagePath + randomPic + '.jpg')
    });
})(jQuery);
