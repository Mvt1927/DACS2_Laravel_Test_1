
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- jquery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <!-- bootstrap 4 -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <!-- swiper-bundle -->
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <!-- font awesome cdn link  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" type="text/css" href="{{ asset('fontawesome-pro-5.15.3-web') . '/' }}css/all.css">
    <!-- recaptcha -->
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <!-- my css -->
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style.bookroom.css') }}">
    <title>Classic Hotel</title>
</head>

<body>
    @include('Classic_hotel.includes.view.header')
    <div id="bookroom_reserve" class="container" style="min-height: 73vh">

    </div>
    <section class="brand-container" style="margin-top: 50px">
        <div class="swiper brand-slider">
            <div class="swiper-wrapper">
                <div class="swiper-slide Github ">
                    <a href="https://github.com/"><img
                            src="{{ asset('resources') . '/' }}Image/icon/logo/GitHub-Mark/svg/github-icon-1-logo-svg-vector.svg"
                            alt="Github logo"></a>
                </div>
                <div class="swiper-slide FontAwesome">
                    <a href="https://fontawesome.com/"><img
                            src="{{ asset('resources') . '/' }}Image/icon/logo/font-awesome/font-awesome-brands.svg"
                            alt="FontAwesome logo"></a>
                </div>
                <div class="swiper-slide W3Schools">
                    <a href="https://www.w3schools.com/"><img
                            src="{{ asset('resources') . '/' }}Image/icon/logo/w3schools/W3Schools_logo.svg"
                            alt="W3Schools logo"></a>
                </div>
                <div class="swiper-slide Bootstrap">
                    <a href="https://getbootstrap.com/"><img
                            src="{{ asset('resources') . '/' }}Image/icon/logo/bootstrap-4/bootstrap-4-logo-svgrepo-com.svg"
                            alt="Bootstrap logo"></a>
                </div>
                <div class="swiper-slide Swiper">
                    <a href="https://swiperjs.com/"><img
                            src="{{ asset('resources') . '/' }}Image/icon/logo/swiper/swiper-logo.svg"
                            alt="Swiper logo"></a>
                </div>
                <div class="swiper-slide stackoverflow">
                    <a href="https://stackoverflow.com/"><img
                            src="{{ asset('resources') . '/' }}Image/icon/logo/stackoverflow/logo-stackoverflow.svg"
                            alt=""></a>
                </div>
            </div>
        </div>
    </section>
    @include('Classic_hotel.includes.view.footer')
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="{{ asset('js/bookroom.js') }}"></script>
    <script src="{{ asset('js/script.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
