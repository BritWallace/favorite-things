//Business logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    let favoriteArray = [];
    const favoriteIceCream = $("input#favoriteThing1").val();
    const favoriteMusic = $("input#favoriteThing2").val();
    const favoriteFood = $("input#favoriteThing3").val();
    

    favoriteArray.push(favoriteIceCream);
    favoriteArray.push(favoriteMusic);
    favoriteArray.push(favoriteFood);
    
    $(".favoriteSummary").append(favoriteArray[0]);
    $(".favoriteSummary").append(favoriteArray[1]);
    $(".favoriteSummary").append(favoriteArray[2]);
   

  
    const favoriteSummary = favoriteArray.join(" ");
    
    $(".favoriteSummary").append(favoriteSummary);


    event.preventDefault();
  });
});
/*
    $(".person1").append(person1Input);
    $(".person2").append(person2Input);
    $(".animal").append(animalInput);
    $(".exclamation").append(exclamationInput);
    $(".verb").append(verbInput);
    $(".noun").append(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});
*/