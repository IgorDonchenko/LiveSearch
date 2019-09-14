<!doctype html>
<html lang="ru">
<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <meta charset="UTF-8" />
    <script
  src="https://code.jquery.com/jquery-3.4.1.js"
  integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
  crossorigin="anonymous"></script>
    <script>        
    // function funcBefore () {
    //     $("#information").text ("Ожидание...");
    // }

    // function funcSuccess (data) {
    //     $("#information").text (data);
    // }

    // $(document).ready (function () {
    //     $("#load").bind("click", function () {
    //     var admin = "Admin";
    //         $.ajax ({
    //             url: "details.php",
    //             type: "POST",
    //             data: ({name: admin, number: 5}),
    //             dataType: "html",
    //             beforeSend: funcBefore,
    //             success: funcSuccess
    //         });
    //     });
    // });
    </script>
</head>
<body>
<div class="container">


<a href="app/seach.php">Поиск </a>

<div class="col-lg-12">
    <h1 class="text-center"> Живой Поиск </h1>
</div>
<div class="col-lg-12 form-control-group">
    <input type="text" id="elastic">
</div>


    <div class="row">
       
            <div class="elastic">
                <div class="control">Товар 2</div>
                <div class="control">Товар 1</div>
                <div class="control">Товар 3</div>
                <div class="control">Товар 4</div>
                <div class="control">Товар 5</div>
                <div class="control">Товар 6</div>
                <div class="control">Товар 7</div>
                <div class="control">Товар 8</div>
                <div class="control">Товар 9</div>
                <div class="control">Товар 10</div>
                <div class="control">Товар 11</div>
                <div class="control">Товар 12</div>             
            </div>
            
        </div>
    </div>


    <p id="load" style="cursor:pointer">Загрузить данные</p>
    <div id="information"></div>

	<script src="js/js.js"></script>

</body>
</html>