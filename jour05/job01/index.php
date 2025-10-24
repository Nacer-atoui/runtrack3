<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>JavaScript</title>
</head>
<body>
    <h1>le JavaScript: jour 05 job 01</h1>

    <form id="myForm" action="" method="post">
        <label for="prenom">Prénom :</label> <br/>
        <input type="text" name="prenom" id="prenom" required><br/><br/>
        <label for="nom">Nom :</label> <br/>
        <input type="text" name="nom" id="nom" required><br/><br/>
        <label for="email">Email :</label> <br/>
        <input type="email" name="email" id="email" required><br/><br/>
        <label for="password">Mot de passe :</label> <br/>
        <input type="text" name="password" id="password" required><br/><br/>
        <label for="confirmPassword">Confirmation du Mot de passe :</label> <br/> 
        <input type="text" name="confirmPassword" id="confirmPassword"><br/><br/>
    </form>
<br/>
    

    <button type="submit" id="submit">Valider</button>

    <script src="script.js"></script>
</body>
</html>