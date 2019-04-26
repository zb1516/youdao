<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>首页</title>
    <style type="text/css">
        .MathJax_Display {
            width: auto !important;
            display: inline-block !important;
        }
        .MathJax {
            outline: 0;
        }
        .MathJax_Display {
            overflow-x: auto;
            overflow-y: hidden;
        }
    </style>
    <script type="text/x-mathjax-config">
        MathJax.Hub.Config({
            showProcessingMessages: false,
            messageStyle: "none",
            displayAlign: "center",
            showMathMenu: false,
            jax: ["input/TeX","output/HTML-CSS"],
            tex2jax: {
                inlineMath: [ ['$','$'], ['\\(','\\)'] ],
                displayMath: [ ['$$','$$']],
                skipTags: ["script","noscript","style","textarea","pre","code"]
            }
        });

    </script>
    <script type="text/javascript" src="https://cdn.bootcss.com/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML"></script>
</head>
<body>
<div id="app"></div>

<script src="{{ mix('/js/manifest.js') }}"></script>
<script src="{{ mix('/js/vendor.js') }}"></script>
<script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>