
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
    <title>Classic Hotel</title>
</head>

<body>
    @include('Classic_hotel.includes.header')
    <section class="home" id="home">
        <div class="content">
            <h3>Wellcome to Classic Hotel</h3>
            <br>
            <p>Make your reservation today</p>
            <br>
            <a href="#book" class="btn">Book now</a>
        </div>
        <div class="controls">
            <span class="vid-btn active" data-src="{{ asset('resources') . '/' }}Video/vid-1.mp4"
                data-time="40000"></span>
            <span class="vid-btn" data-src="{{ asset('resources') . '/' }}Video/vid-2.mp4"
                data-time="7000"></span>
            <span class="vid-btn" data-src="{{ asset('resources') . '/' }}Video/vid-3.mp4"
                data-time="32000"></span>
            <span class="vid-btn" data-src="{{ asset('resources') . '/' }}Video/vid-4.mp4"
                data-time="20000"></span>
            <span class="vid-btn" data-src="{{ asset('resources') . '/' }}Video/vid-5.mp4"
                data-time="11000"></span>
        </div>
        <div class="video-container">
            <video src="{{ asset('resources') . '/' }}Video/vid-1.mp4" id="video-slider" loop autoplay muted></video>
        </div>
    </section>
    <section class="book" id="book">
        <br>
        <h1 class="heading text-center">
            <span>b</span>
            <span>o</span>
            <span>o</span>
            <span>k</span>
            <span class="space"></span>
            <span>n</span>
            <span>o</span>
            <span>w</span>
            <BR></BR>
        </h1>
        <div id="bookroom_box">

        </div>
    </section>
    <section class="rooms" id="rooms">
    </section>
    <section class="services" id="services">
        <br>
        <h1 class="heading text-center">
            <span>s</span>
            <span>e</span>
            <span>r</span>
            <span>v</span>
            <span>i</span>
            <span>e</span>
            <span>s</span>
            <BR></BR>
        </h1>
        <div class="box-container">
            <div class="box">
                <i class="fad fa-hotel"></i>
                <h3>affordable hotels</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                    exercitationem ut minima itaque iusto ipsum corrupti!</p>
            </div>
            <div class="box">
                <i class="fad fa-utensils-alt"></i>
                <h3>food and drinks</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                    exercitationem ut minima itaque iusto ipsum corrupti!</p>
            </div>
            <div class="box">
                <i class="fad fa-car"></i>
                <h3>Car rental services</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                    exercitationem ut minima itaque iusto ipsum corrupti!</p>
            </div>
            <div class="box">
                <i class="fad fa-concierge-bell"></i>
                <h3>Room service (24-hour)</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                    exercitationem ut minima itaque iusto ipsum corrupti!</p>
            </div>
            <div class="box">
                <i class="fad fa-washer"></i>
                <h3>Laundry service</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                    exercitationem ut minima itaque iusto ipsum corrupti!</p>
            </div>
            <div class="box">
                <i class="fad fa-briefcase-medical"></i>
                <h3>Doctor on call</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                    exercitationem ut minima itaque iusto ipsum corrupti!</p>
            </div>
        </div>
    </section>
    <section class="review" id="review">

        <h1 class="heading text-center">
            <span>r</span>
            <span>e</span>
            <span>v</span>
            <span>i</span>
            <span>e</span>
            <span>w</span>
            <BR></BR>
        </h1>
        <div class="swiper review-slider">

            <div class="swiper-wrapper">

                <div class="swiper-slide">
                    <div class="box">
                        <img src="{{ asset('resources') . '/' }}Image/mvt1927.jpg" alt="">
                        <h3>MVT1927</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt
                            fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias
                            consectetur ducimus beatae, reprehenderit exercitationem!</p>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fal fa-star"></i>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="box">
                        <img src="{{ asset('resources') . '/' }}Image/mvt1927.jpg" alt="">
                        <h3>MVT1927</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt
                            fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias
                            consectetur ducimus beatae, reprehenderit exercitationem!</p>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fal fa-star"></i>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="box">
                        <img src="{{ asset('resources') . '/' }}Image/mvt1927.jpg" alt="">
                        <h3>MVT1927</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt
                            fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias
                            consectetur ducimus beatae, reprehenderit exercitationem!</p>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fal fa-star"></i>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="box">
                        <img src="{{ asset('resources') . '/' }}Image/mvt1927.jpg" alt="">
                        <h3>MVT1927</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt
                            fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias
                            consectetur ducimus beatae, reprehenderit exercitationem!</p>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fal fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="contact" id="contact">
        <h1 class="heading text-center">
            <span>c</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>a</span>
            <span>c</span>
            <span>t</span>
            <i class="fas fa-font-awesome-logo-full"></i>
            <BR></BR>
        </h1>
        <div class="row">
            <div class="image">
                <img src="{{ asset('resources') . '/' }}Image/contact-banner.svg" alt="">
            </div>
            <form action="">
                <div class="inputBox">
                    <input type="text" placeholder="Name">
                    <input type="email" placeholder="Email">
                </div>
                <div class="inputBox">
                    <input type="number" placeholder="Number">
                    <input type="text" placeholder="Subject">
                </div>
                <textarea placeholder="Message" name="" id="" cols="30" rows="10"></textarea>
                <input type="submit" class="btn" value="send message">
            </form>
        </div>
    </section>
    <section class="brand-container">
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
    @include('Classic_hotel.includes.footer')
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="{{ asset('js/bookroom.js') }}"></script>
    <script src="{{ asset('js/script.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
