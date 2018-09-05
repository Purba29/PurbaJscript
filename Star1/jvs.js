function vali(){
            var b =document.getElementById("pattern").value;
            var a= parseInt(b);
          if(a==="")
          {
          document.getElementById("tab").innerHTML = "PLease enter a number between 1 to 5" ; 
          }
          else if(a<=5)
          {
              document.getElementById("tab").innerHTML = "" ; 
              Print_Stars();
            }
            else
            {
              document.getElementById("tab").innerHTML = "PLease enter a number between 1 to 5 only" ;
            }

          }
      function Print_Stars() {
          var counter=document.getElementById("pattern").value;
         
          var count = parseFloat(counter);
          var count1 = parseInt(counter);
          var star = '';
          
          for (var i = 0; i < count1; i++) {
            

              star += '<image src="full-star.png" />';
		
          }                     
	   if(!Number.isInteger(count))
      { 
     var a=count%1;
     a=a.toFixed(1);
     a = a* 10;
 star += '<img src="partial-star-'+a+'.png" />'; 
                }              

          document.getElementById("display").innerHTML = star ;
      }