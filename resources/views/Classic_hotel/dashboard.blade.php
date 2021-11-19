<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <?php
        /* $_COOKIE['remember-token']=Auth::user()->remember_token; */
        setcookie("user-name", '', time() - 600, "/");
        setcookie("csrf-token", '', time() - 600, "/");
        setcookie("user-name", Auth::user()->name, time() + 600000, "/");
        setcookie("csrf-token", csrf_token(), time() + 600000, "/");
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
    <link rel="stylesheet" href="{{ asset('css/style.coreui.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style.manage.css') }}">

    <title>Dashboard</title>
</head>

<body >
    <div id="root_dashboard">
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
