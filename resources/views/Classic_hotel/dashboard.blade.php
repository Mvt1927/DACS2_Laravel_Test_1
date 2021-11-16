<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <?php
        $_COOKIE['remember-token']=Auth::user()->remember_token;
    ?>

    <!-- jquery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <!-- font awesome cdn link  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" type="text/css" href="{{ asset('fontawesome-pro-5.15.3-web') . '/' }}css/all.css">
    <!-- <link rel="stylesheet" href="D:\react\docs\4.0\styles.e1555f6910cae527a5ef.css"> -->
    <link rel="stylesheet" href="{{ asset('css/style.manage.css') }}">

    <title>Dashboard</title>
</head>

<body >
    <div class="root_dashboard">
        <div style="outline: none;" tabindex="-1">
            <div class="sidebar sidebar-fixed" id="sidebar">
                <div class="sidebar-brand d-none d-md-flex">
                    <img class="d-block m-3"
                        src="{{ asset('resources') . '/' }}Image/icon/logo/DACS2_Logo/Classic_Logo/white/Logo_classic_white.png"
                        alt="" height="33">
                    <img class="d-block m-3"
                        src="{{ asset('resources') . '/' }}Image/icon/logo/DACS2_Logo/Classic_hotel_Logo/white/Clasic_hotel_logo_white.png"
                        alt="" height="33">
                </div>
            </div>
            <div class="wrapper d-flex flex-column min-vh-100">
                <div class="header header-sticky mb-4 ">
                    <div class="container-fluid">
                        <i class="fal fa-bars" onclick="event.preventDefault();document.getElementById('sidebar').classList.toggle('hide')"></i>
                        <a class="header-brand mx-auto d-md-none" to="/"></a>
                        <ul class="header-nav d-none d-md-flex me-auto" role="navigation">
                            <li class="nav-item"><a aria-current="page" class="nav-link active"
                                    href="#/dashboard">Dashboard</a></li>
                        </ul>
                        <ul class="header-nav" role="navigation">
                            <li class="nav-item dropdown"><a href="#" class="nav-link" aria-expanded="false"><i
                                        class="fal fa-bell"></i><span
                                        class="badge bg-danger-gradient rounded-pill position-absolute top-0 end-0">5</span></a>
                            </li>
                            <li class="nav-item dropdown"><a href="#" class="nav-link" aria-expanded="false"><i
                                        class="far fa-list-ul"></i><span
                                        class="badge bg-warning-gradient rounded-pill position-absolute top-0 end-0">5</span></a>
                            </li>
                            <li class="nav-item dropdown"><a href="#" class="nav-link c-header-nav-link"
                                    aria-expanded="false"><i class="fal fa-envelope-open-text"></i><span
                                        class="badge bg-info-gradient rounded-pill position-absolute top-0 end-0">4</span></a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ml-auto header-nav ms-3 me-4" role="navigation">
                            <!-- Authentication Links -->
                            @guest
                                @if (Route::has('login'))
                                    <li class="nav-item">
                                        <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                                    </li>
                                @endif

                                @if (Route::has('register'))
                                    <li class="nav-item">
                                        <a class="nav-link"
                                            href="{{ route('register') }}">{{ __('Register') }}</a>
                                    </li>
                                @endif
                            @else
                                <li class="nav-item dropdown">
                                    <a id="navbarDropdown" class="nav-link py-0 container-avatar dropdown-toggle"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                        v-pre>
                                        <div class="avatar avatar-md"><img
                                                src="{{ asset('resources') . '/' }}Image/mvt1927.jpg"
                                                class="avatar-img">
                                        </div>
                                        <label class="ml-2" for="">{{ Auth::user()->name }}</label>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">

                                        <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                                     document.getElementById('logout-form').submit();">
                                            <i class="far fa-user-cog mr-4"></i>{{ __('Setting') }}
                                        </a>
                                        <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                                     document.getElementById('logout-form').submit();">
                                            <i class="far fa-sign-out-alt mr-4"></i>{{ __('Logout') }}
                                        </a>
                                        <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                            class="d-none">
                                            @csrf
                                        </form>
                                    </div>
                                </li>
                            @endguest
                        </ul>

                    </div>
                    <div class="header-divider"></div>
                    <div class="container-fluid">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb m-0 ms-2">
                                <li class="breadcrumb-item"><a class="" href="/">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div class="container" id="root_dashboard">
                    <h3>Navbar With Dropdown</h3>
                    <p>This example adds a dropdown menu in the navbar.</p>
                </div>
                <footer style="margin-top: 60vh">
                    <section class="footer" id="aboutus">
                        <div class="box-container">
                            <div class="box text-center">
                                <h3>Support</h3>
                                <p>Thank for : </p>
                                <a href="https://github.com/"><i class="fab fa-github"></i><label
                                        for="Github">Github</label></a>
                                <a href="https://fontawesome.com/"><i class="fab fa-font-awesome"></i><label
                                        for="FontAwesome">Font Awesome</label></a>
                                <a href="https://www.w3schools.com/"><img
                                        src="{{ asset('resources') . '/' }}Image/icon/logo/w3schools/W3Schools_logo.svg"
                                        alt="W3Schools logo"><label for="W3Schools">W3Schools</label></a>
                                <a href="https://getbootstrap.com/"><img
                                        src="{{ asset('resources') . '/' }}Image/icon/logo/bootstrap-4/bootstrap-4-logo-svgrepo-com.svg"
                                        alt="Bootstrap logo"><label for="Bootstrap">Bootstrap</label></a>
                                <a href="https://swiperjs.com/"><img
                                        src="{{ asset('resources') . '/' }}Image/icon/logo/swiper/swiper-logo.svg"
                                        alt="Swiper logo"><label for="Swiper">Swiper</label></a>
                                <a href="https://stackoverflow.com/"><img
                                        src="{{ asset('resources') . '/' }}Image/icon/logo/stackoverflow/logo-stackoverflow.svg"
                                        alt="Stackoverflow"><label
                                        for="stackoverflow">stack<span>overflow</span></label></a>

                            </div>
                            <div class="box follow text-center">
                                <h3>Follow us</h3>
                                <p>Social network : </p>
                                <a href="https://www.facebook.com/Mvt1927/"><label for=""><i
                                            class="fab fa-facebook"></i> Facebook</label></a>
                                <a href="https://github.com/viettel3g1000"><label for=""><i class="fab fa-github"></i>
                                        Github</label></a>
                            </div>
                        </div>
                        <h1 class="credit"> Created by <span> MVT1927 </span></h1>
                    </section>
                </footer>
            </div>
        </div>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
