<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">



    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
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
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <title>{{ config('app.name', 'Laravel') }}</title>
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                        <img class="nav-item float-left logo1" src="{{ asset('resources') . '/' }}Image/icon/logo/logoWhite.png" alt=""
                            style="height: 3rem;">
                        <img class="nav-item d-block float-left"
                            src="{{ asset('resources') . '/' }}Image/icon/logo/LogoClassicWhite.png" alt="" style="height: 3rem;">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            @if (Route::has('login'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                                </li>
                            @endif

                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }}
                                </a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            @yield('content')
        </main>
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
        @include('Classic_hotel.includes.view.footer')
        <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="{{ asset('js/bookroom.js') }}"></script>
    <script src="{{ asset('js/script.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>
    </div>
</body>
</html>
