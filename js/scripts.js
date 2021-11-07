//Business logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    let favoriteArray = [];
    const person1Input = $("input#favoriteThing1").val();
    const person2Input = $("input#favoriteThing2").val();
    const animalInput= $("input#favoriteThing3").val();
    

    favoriteArray.push(person1Input);
    favoriteArray.push(person2Input);
    favoriteArray.push(animalInput);
    
    console.log(favoriteArray)


    event.preventDefault();
  });
});
