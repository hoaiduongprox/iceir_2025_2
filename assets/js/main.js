$(document).ready(function () {
    function initSlider() {
        if ($(window).width() < 991) {
            if (!$('.slider-container').hasClass('slick-initialized')) {
                $('.slider-container').slick({
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    autoplaySpeed: 3000
                });
            }
        } else {
            if ($('.slider-container').hasClass('slick-initialized')) {
                $('.slider-container').slick('unslick');
            }
        }
    }

    // Chạy khi trang tải lần đầu
    initSlider();

    // Kiểm tra khi thay đổi kích thước màn hình
    $(window).resize(function () {
        initSlider();
    });
});
