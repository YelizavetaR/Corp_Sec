<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
 <meta name="csrf-token" content="{{ csrf_token() }}">  
  <title>{{$title ? $title . ' - ' : ''}} {{ config('config.basic.app_name') }}</title>
  <meta content="{{$description ?? ''}}" name="description">
  <meta content="{{$keywords ?? ''}}" name="keywords">

  <!-- Favicons -->
  <link rel="apple-touch-icon" sizes="180x180" href="{{ config('config.assets.icon_180') ?? config('config.assets.icon') }}">
  <link rel="icon" type="image/png" sizes="32x32" href="{{ config('config.assets.icon_32') ?? config('config.assets.favicon') }}">
  <link rel="icon" type="image/png" sizes="16x16" href="{{ config('config.assets.icon_16') ?? config('config.assets.favicon') }}">
  <link rel="shortcut icon" href="{{ config('config.assets.favicon') }}">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Krub:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="/site/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="/site/vendor/icofont/icofont.min.css" rel="stylesheet">
  <link href="/site/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="/site/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="/site/vendor/venobox/venobox.css" rel="stylesheet">
  <link href="/site/vendor/aos/aos.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="/site/css/style.css" rel="stylesheet">
  @livewireStyles
</head>

<body>

    {{$slot}}

  <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
  <div id="preloader"></div>

  <!-- Vendor JS Files -->
  <script src="/site/vendor/jquery/jquery.min.js"></script>
  <script src="/site/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="/site/vendor/jquery.easing/jquery.easing.min.js"></script>
  <script src="/site/vendor/php-email-form/validate.js"></script>
  <script src="/site/vendor/owl.carousel/owl.carousel.min.js"></script>
  <script src="/site/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="/site/vendor/venobox/venobox.min.js"></script>
  <script src="/site/vendor/aos/aos.js"></script>

  <!-- Template Main JS File -->
  <script src="/site/js/main.js"></script>
  @livewireScripts

</body>

</html>