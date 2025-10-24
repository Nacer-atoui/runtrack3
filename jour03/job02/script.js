$(document).ready(function () {
//Je crée deux tableau, un qui contient tout les id des image dans l'ordre
//et un vide dans lequel je vais stocker les images sur lesquelles je clique pour pouvoir ensuite verifier l'ordre et donc la victoire
//ou la défaite.
  const randomImage = ['#img1', '#img2', '#img3', '#img4', '#img5', '#img6'];
  const newArr = [];

  function isEqual(randomImage, newArr) {
      return newArr.every((value, index) => value === randomImage[index]);
    }
    
  $("#img1").on("click", function () {
    $("#img1").appendTo(".arc_contain");
    newArr.push("#img1");
    console.log(newArr);
    result = isEqual(newArr, randomImage);
    console.log(result);
    if(result === true) {
      alert ("VICTOIRE !")
    } else {
      console.log ("ESSAIE ENCORE !");
    }
  });
  $("#img2").on("click", function () {
    $("#img2").appendTo(".arc_contain");
    newArr.push("#img2");
    console.log(newArr);
    result = isEqual(newArr, randomImage);
    console.log(result);
    if(result === true) {
      alert ("VICTOIRE !")
    } else {
      console.log ("ESSAIE ENCORE !");
    }
  });
  $("#img3").on("click", function () {
    $("#img3").appendTo(".arc_contain");
    newArr.push("#img3");
    console.log(newArr);
    result = isEqual(newArr, randomImage);
    console.log(result);
    if(result === true) {
      alert ("VICTOIRE !")
    } else {
      console.log ("ESSAIE ENCORE !");
    }
  });
  $("#img4").on("click", function () {
    $("#img4").appendTo(".arc_contain");
    newArr.push("#img4");
    console.log(newArr);
    result = isEqual(newArr, randomImage);
    console.log(result);
    if(result === true) {
      alert ("VICTOIRE !")
    } else {
      console.log ("ESSAIE ENCORE !");
    }
  });
  $("#img5").on("click", function () {
    $("#img5").appendTo(".arc_contain");
    newArr.push("#img5");
    console.log(newArr);
    result = isEqual(newArr, randomImage);
    console.log(result);
    if(result === true) {
      alert ("VICTOIRE !")
    } else {
      console.log ("ESSAIE ENCORE !");
    }
  });
  $("#img6").on("click", function () {
    $("#img6").appendTo(".arc_contain");
    newArr.push("#img6");
    result = isEqual(newArr, randomImage);
    console.log(result);
    if(result === true) {
      alert ("VICTOIRE !")
    } else {
      alerte ("DEFAITE !");
    }
  });

  $("#mix").on("click", function () {

    for (let i = 0; i < 50; i++) {
      $("#img" + (Math.floor(Math.random() * 6) + 1)).prependTo(".arc_mix");
    }
  });
});