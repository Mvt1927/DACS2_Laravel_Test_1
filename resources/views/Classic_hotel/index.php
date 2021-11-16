<?php
session_start();
$siteKey = '';
$secret = '';
require_once 'config.php';
require_once('vendor/google/recaptcha/src/autoload.php');
if ($siteKey == '' && is_readable('config.php')) {
    $config = include 'config.php';
    $siteKey = $config['v3']['site'];
    $secret = $config['v3']['secret'];
}
$idrooms = "";
if (isset($_GET['idroom'])) {
    $idrooms = mysqli_real_escape_string($conn, $_GET['idroom']);
}
$date = getdate();
?>
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
    <link rel="stylesheet" type="text/css" href="fontawesome-pro-5.15.3-web/css/all.css">
    <!-- <script src="https://raw.githubusercontent.com/viettel3g1000/font/main/Js/6e54d5948f.js" crossorigin="anonymous"></script> -->
    <!-- recaptcha -->
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <!-- my css -->
    <link rel="stylesheet" href="Css/style.css">
    <title>Classic Hotel</title>
</head>

<body>
    <header>
        <div id="menu-bar" class="fas fa-bars"></div>
        <div class="logo">
            <a href="#" class="navbar-header">
                <img class="nav-item float-left logo1" src="Image/icon/logo/logoWhite.png" alt="" style="height: 50px;">
                <img class="nav-item d-block float-left" src="Image/icon/logo/LogoClassicWhite.png" alt="" style="height: 50px;">
            </a>
        </div>
        <nav id="nav-bar">
            <a href="#home">Home</a>
            <a href="#book">Book</a>
            <a href="#rooms">Rooms</a>
            <a href="#services">Services</a>
            <a href="#review">Review</a>
            <a href="#contact">Contact</a>
            <a href="#aboutus">About us</a>
        </nav>
        <div class="icons">
            <i class="fas fa-user" id="login-btn"></i>
        </div>
    </header>
    <section class="home" id="home">
        <div class="content">
            <h3>Wellcome to Classic Hotel</h3>
            <br>
            <p>Make your reservation today</p>
            <br>
            <a href="#book" class="btn">Book now</a>
        </div>
        <div class="controls">
            <span class="vid-btn active" data-src="Video/vid-1.mp4" data-time="40000"></span>
            <span class="vid-btn" data-src="Video/vid-2.mp4" data-time="7000"></span>
            <span class="vid-btn" data-src="Video/vid-3.mp4" data-time="32000"></span>
            <span class="vid-btn" data-src="Video/vid-4.mp4" data-time="20000"></span>
            <span class="vid-btn" data-src="Video/vid-5.mp4" data-time="11000"></span>
        </div>
        <div class="video-container">
            <video src="Video/vid-1.mp4" id="video-slider" loop autoplay muted></video>
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
        <div class="row">
            <div class="image">
                <img class="image col-12" src="Image/5244516.png" alt="">
            </div>
            <form action="bookroom.back.php" id="form_book_room" method="POST" onsubmit="return checkBook()">
                <div class="inputBox" id="input_name_box">
                    <h3>What your full name <span>*</span></h3>
                    <input type="text" id="book_input_name" name="book_input_name" placeholder="Your name">
                </div>
                <div class="inputBox" id="input_phone_box">
                    <h3>Phone <span>*</span></h3>
                    <input type="number" id="book_input_phone" name="book_input_phone" placeholder="Your Phone" min="0" max="99999999999">
                </div>
                <div class="inputBox">
                    <h3>How many</h3>
                    <input type="number" id="book_input_num" name="book_input_num" placeholder="Number of guests" min="1" max="50" value="1">
                </div>
                <div class="inputBox" >
                    <h3>Arrivals</h3>
                    <input type="date" id="book_input_date" name="book_input_date"  min="<?php echo $date['year'] . '-' . $date['mon'] . '-' . $date['mday'] ?>" value="<?php echo $date['year'] . '-' . $date['mon'] . '-' . $date['mday'] ?>">
                </div>
                <?php
                    if ($idrooms!=null) {
                        echo "
                        <input type=\"hidden\" id=\"book_input_idrooms\" name=\"book_input_idrooms\" value=".$idrooms.">
                    ";
                    }
                ?>
                <div>
                    <div class="g-recaptcha" data-sitekey="<?php echo $siteKey ?>" data-callback="onSubmit" data-size="invisible"></div>
                </div>
                <input type="submit" class="btn" name="btn_book_submit" id="btn_book_submit" value="book now">
            </form>
        </div>
    </section>
    <section class="rooms" id="rooms">
        <br>
        <h1 class="heading text-center">
            <span>r</span>
            <span>o</span>
            <span>o</span>
            <span>m</span>
            <span>s</span>
            <BR></BR>
        </h1>
        <div class="box-container">
            <?php
            $roomsql = "SELECT * FROM `rooms`";
            $roomrs = mysqli_query($conn, $roomsql);
            $a = 0;
            while ($roomrow = mysqli_fetch_array($roomrs)) {
                $a++;
            ?>
                <div class="box <?php if ($a > 3) {
                                    echo "no";
                                } ?>active">
                    <img src="<?php echo $roomrow['srcroom'] ?>" alt="idrooms_<?php echo $roomrow['idrooms'] ?>">
                    <div class="content">
                        <h3>
                            <?php echo $roomrow['nameroom'];
                            if ($roomrow['priceroom'] < $roomrow['defpriceroom']) {
                                echo "<img alt=\"Sale icon\" src=\"Image/icon/icons_sale.gif\" style=\"height:32px;width:32px;float: right;\">";
                            } ?>
                        </h3>
                        <p><?php echo $roomrow['inforoom'] ?></p>
                        <div class="stars">
                            <?php
                            for ($i = 0; $i < 5; $i++) {
                                if ($i < $roomrow['starroom']) {
                                    echo "<i class=\"fas fa-star\"></i>";
                                } else {
                                    echo "<i class=\"fal fa-star\"></i>";
                                }
                            }
                            ?>
                        </div>
                        <div class="price"><?php
                                            echo $roomrow['priceroom'] . "₫";
                                            if ($roomrow['priceroom'] < $roomrow['defpriceroom']) {
                                                echo " <span>" . $roomrow['defpriceroom'] . "₫</span>";
                                            }
                                            ?> </div>
                        <a href="?idroom=<?php echo $roomrow['idrooms']?>#book" class="btn">book now</a>
                    </div>
                </div>
            <?php } ?>
            <h1 class="more-rooms col-12 text-center">
                <i class="fas fa-chevron-down more-btn"></i>
            </h1>
        </div>
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
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
            </div>
            <div class="box">
                <i class="fad fa-utensils-alt"></i>
                <h3>food and drinks</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
            </div>
            <div class="box">
                <i class="fad fa-car"></i>
                <h3>Car rental services</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
            </div>
            <div class="box">
                <i class="fad fa-concierge-bell"></i>
                <h3>Room service (24-hour)</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
            </div>
            <div class="box">
                <i class="fad fa-washer"></i>
                <h3>Laundry service</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
            </div>
            <div class="box">
                <i class="fad fa-briefcase-medical"></i>
                <h3>Doctor on call</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
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
                        <img src="Image/mvt1927.jpg" alt="">
                        <h3>MVT1927</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias consectetur ducimus beatae, reprehenderit exercitationem!</p>
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
                        <img src="Image/mvt1927.jpg" alt="">
                        <h3>MVT1927</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias consectetur ducimus beatae, reprehenderit exercitationem!</p>
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
                        <img src="Image/mvt1927.jpg" alt="">
                        <h3>MVT1927</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias consectetur ducimus beatae, reprehenderit exercitationem!</p>
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
                        <img src="Image/mvt1927.jpg" alt="">
                        <h3>MVT1927</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias consectetur ducimus beatae, reprehenderit exercitationem!</p>
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
                <img src="Image/contact-banner.svg" alt="">
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
                    <a href="https://github.com/"><img src="Image/icon/logo/GitHub-Mark/svg/github-icon-1-logo-svg-vector.svg" alt="Github logo"></a>
                </div>
                <div class="swiper-slide FontAwesome">
                    <a href="https://fontawesome.com/"><img src="Image/icon/logo/font-awesome/font-awesome-brands.svg" alt="FontAwesome logo"></a>
                </div>
                <div class="swiper-slide W3Schools">
                    <a href="https://www.w3schools.com/"><img src="Image/icon/logo/w3schools/W3Schools_logo.svg" alt="W3Schools logo"></a>
                </div>
                <div class="swiper-slide Bootstrap">
                    <a href="https://getbootstrap.com/"><img src="Image/icon/logo/bootstrap-4/bootstrap-4-logo-svgrepo-com.svg" alt="Bootstrap logo"></a>
                </div>
                <div class="swiper-slide Swiper">
                    <a href="https://swiperjs.com/"><img src="Image/icon/logo/swiper/swiper-logo.svg" alt="Swiper logo"></a>
                </div>
                <div class="swiper-slide stackoverflow">
                    <a href="https://stackoverflow.com/"><img src="Image/icon/logo/stackoverflow/logo-stackoverflow.svg" alt=""></a>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <section class="footer" id="aboutus">

            <div class="box-container">

                <div class="box">
                    <h3>about us</h3>
                    <p>Thank for : </p>
                    <a href="https://github.com/"><img src="Image/icon/logo/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png" alt="Github logo"><label for="Github">Github</label></a>
                    <a href="https://fontawesome.com/"><img src="Image/icon/logo/font-awesome/font-awesome-brands.svg" alt="FontAwesome logo"><label for="FontAwesome">Font Awesome</label></a>
                    <a href="https://www.w3schools.com/"><img src="Image/icon/logo/w3schools/W3Schools_logo.svg" alt="W3Schools logo"><label for="W3Schools">W3Schools</label></a>
                    <a href="https://getbootstrap.com/"><img src="Image/icon/logo/bootstrap-4/bootstrap-4-logo-svgrepo-com.svg" alt="Bootstrap logo"><label for="Bootstrap">Bootstrap</label></a>
                    <a href="https://swiperjs.com/"><img src="Image/icon/logo/swiper/swiper-logo.svg" alt="Swiper logo"><label for="Swiper">Swiper</label></a>
                    <a href="https://stackoverflow.com/"><img src="Image/icon/logo/stackoverflow/logo-stackoverflow.svg" alt="Stackoverflow"><label for="stackoverflow">stack<span>overflow</span></label></a>
                </div>
                <div class="box">
                    <h3>quick links</h3>
                    <a href="#home">Home</a>
                    <a href="#book">Book</a>
                    <a href="#rooms">Rooms</a>
                    <a href="#services">Services</a>
                    <a href="#review">Review</a>
                    <a href="#contact">Contact</a>
                    <a href="#aboutus">About us</a>
                </div>
                <div class="box follow">
                    <h3>follow us</h3>
                    <a href="https://www.facebook.com/Mvt1927/">facebook</a>
                    <a href="https://github.com/viettel3g1000">github</a>
                </div>
            </div>
            <h1 class="credit"> created by <span> MVT1927 </span></h1>
        </section>
    </footer>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="Js/bookroom.js"></script>
    <script src="Js/script.js"></script>
    <!-- <script>alert('Thank you for your booking')</script> -->
</body>

</html>