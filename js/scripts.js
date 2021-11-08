//Business logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    let favoriteArray = [];
    const favoriteIceCream = $("input#favoriteThing1").val();
    const favoriteMusic = $("input#favoriteThing2").val();
    const favoriteFood = $("input#favoriteThing3").val();
    const favoriteBev = $("input#favoriteThing4").val();
    

    favoriteArray.push(favoriteIceCream);
    favoriteArray.push(favoriteMusic);
    favoriteArray.push(favoriteFood);
    favoriteArray.push(favoriteBev);

    /*
    $(".favoriteSummary").append(favoriteArray[0]);
    $(".favoriteSummary").append(favoriteArray[1]);
    $(".favoriteSummary").append(favoriteArray[2]);
    */

   
    console.log(favoriteArray);
  //This gives the input from user spaces between the words.
    const favoriteSummary = favoriteArray.join(" ");
    //combined each class favorite array
    $(".favoriteSummary").append(favoriteSummary);


    event.preventDefault();
  });
});