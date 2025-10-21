<!DOCTYPE html>
<html lang="en">

<head>
    <title>How to Generate Random String in Javascript / jQuery</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
</head>

<body>

    <div class="container">
        <h4>How to Generate Random String in Javascript / jQuery</h4>
        <div class="panel panel-primary">
            <div class="panel-heading">How to Generate Random String in Javascript / jQuery</div>
            <div class="panel-body">
                <button class="btn btn-warning" id="btn-generate">Generate String</button>
                <div style="margin-top: 10px;">String: <span id="random_string"></span></div>
            </div>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <script type="text/javascript">
        $(function() {

            $("#btn-generate").on("click", function() {

                var string = generateRandomString(10);
                $("#random_string").text(string);
            });
        });

        function generateRandomString(length) {

            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < length; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            return text;
        }

    </script>
</body>

</html>