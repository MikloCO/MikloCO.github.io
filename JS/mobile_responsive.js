console.log("mobile reporting for duty!");

function openNav() {
    document.getElementById("phone").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("phone").style.width = "0";
  }




 function filterPhoneSelection(c)
  {
    var cards = document.getElementsByClassName("card");

    for(i = 0; i < cards.length; i++)
    {
      cards[i].style.display = "block";  
    }

    if(c == "all")
    {
      return;
    }
    
    for(i = 0; i < cards.length; i++)
    {
    //  if(!cards[i].classList.contains("java"))
    //   {
    //       cards[i].style.display = "none";
    //   }
    if(!cards[i].classList.contains(c))
    {
        cards[i].style.display = "none";
    }
     
    }

    

        
  }
