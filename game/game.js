// Colin Cruse
// 4/25/15
//
// Loaded by game.html
// Uses GameBoard object defined in board.js
//

// Warning! The function tryDig and the variable board are global variables!

$(function () {
    var totalClicks = 0;
    var successDigs = 0;
    var totalParts = 19;
    var found= [false,false,false,false,false];
    var rating = "good";
    
    
    //begin tryDig
    tryDig = function(targetCell)
    {
        var targetObj = board.dig(targetCell);
  
        if (targetObj) {
            $("#clickR").html('This Click You Found ' + targetObj.name);
            
            //count number of successful digs
            successDigs += 1;
            $("#sDigs").html("Successful Digs: "+successDigs);
            
            
            if(targetObj.name === "Temple"){
            $("#cell"+targetCell).css('background-image','url("graysquare.gif")');}
            if(targetObj.name === "Forum"){
            $("#cell"+targetCell).css('background-image','url("yellow.png")');}
            
            if(targetObj.name === "Palace"){
            $("#cell"+targetCell).css('background-image','url("orange.png")');}
            
            if(targetObj.name === "House"){
            $("#cell"+targetCell).css('background-image','url("green.jpg")');}
            
            if(targetObj.name === "Hut"){
            $("#cell"+targetCell).css('background-image','url("purple.jpg")');}
            updateFound(targetObj);
            
            
        }
        else {
            $("#clickR").html("This Click You Found Nothing");
            $("#cell"+targetCell).css('background-image','url("black.jpg")');
        }
        if(found[0] === true && found [1] === true && found[2] === true && found[3] === true && found[4] === true){
            //make up a raiting 
            var ratio = totalClicks/successDigs;
            if(ratio === 1.0){
                rating = "You did Perfectly";
            }
            else if( ratio > 1.0 && ratio < 2.0 ){
                rating = "You did alright"}
            else if(ratio > 2){
                rating = "You are not very good at this"
            }
                
            $("#foundMessage").html("You Won the Game!: "+rating);
        }
    }//end tryDig
  
    //begin updateFound
    updateFound = function(targetObject){
        var name = targetObject.name;
        if(name === "Temple"){
            $("#tFound").html("Temple Pieces Found: "+ targetObject.successes);
            
        }
        else if(name === "Forum"){
            $("#fFound").html("Forum Pieces Found: "+ targetObject.successes);
           
        }
         else if(name === "Palace"){
            $("#pFound").html("Palace Pieces Found: "+ targetObject.successes);
             
        }
         else if(name === "House"){
            $("#hFound").html("House Pieces Found: "+ targetObject.successes);
             
        }
         else if(name === "Hut"){
            $("#hutFound").html("Hut Pieces Found: "+ targetObject.successes);
             
        }
        if(targetObject.successes === targetObject.size){
                $("#foundMessage").show();
                $("#foundMessage").html(targetObject.name+" Has been Found");
                $("#foundMessage").fadeOut(5000);
                if(name === "Temple"){
                    found[0] = true;}
                else if(name === "Forum"){
                    found[1] = true;}
                else if(name === "Palace"){
                    found[2] = true;}
                else if(name === "House"){
                    found[3] = true;}
                else if(name === "Hut"){
                    found[4] = true;}

                
        }
        
        
    }
    

//set up board    
  board = new GameBoard();
  board.setBoard();
  //end set up
    
      //click handler for clicking on cells
  $(".square").click(function(){
      tryDig($(this).attr('id').substr(4,5));
      totalClicks +=1;
      $("#tClicks").html("Total Digs: "+totalClicks);
    });//end click handler
    
    //get rid of text on board
    $(".square").html("");
    
    
    //set values for sizes of ruins
    $("#fSize").html("Forum Size: "+ board.ruins[2].size);
    $("#pSize").html("Palace Size: "+ board.ruins[0].size);
    $("#tSize").html("Temple Size: "+ board.ruins[1].size);
    $("#hSize").html("House Size: "+ board.ruins[3].size);
    $("#hutSize").html("Hut Size: "+ board.ruins[4].size);
    

    

});
