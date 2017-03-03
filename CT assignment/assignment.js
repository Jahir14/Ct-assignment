
//for showing numbers which are multiple of 3 within a range

function shownumber() {
    var myform = document.forms.form1;


var myNumber = myform.num1.value;

        var i = 0;
        while (i <= myNumber) {
           if(i % 3 == 0){
            document.write(" " + i);
        }
            i = i + 1;
        }
    
    }

//for showing  even number within a range
function oddEven(){
   
    var myform = document.forms.myform2;
    var num= parseInt(myform.num2.value);
       
    if(isNaN(num)){
            alert("please enter a number");
        }
    
     // for positive    
  if(num>=0){
    var i = 0;
        while(i<=num){
            if(i % 2 == 0){
                document.write(" " + i);
                }
            i++;
            
         }
      }
    // for negative
    else{
         var i = 0;
        while(i>=num){
            if(i % 2 == 0){
                document.write(" " + i);
                }
            i--;
            
         }
    }
}

//for checking result

function resultChecking(){
    var myform=document.forms.form3;
    var result=parseInt(myform.result.value);
    if(isNaN(result)){
        alert("please enter your result");
        return 0;
    }
    else if( (result > 100) || (result < 0) ){
        alert("Please enter valid result");
        return 0;
    }
    else{
        if(result >=80){
            document.write("You get A+");
        }
         else if(result <=79 && result>=70){
            document.write("You get A");
        }
         else if(result <=69 && result>=60){
            document.write("You get A-");
        }
         else if(result <=59 && result>=50){
            document.write("You get B");
        }
         else if(result <=49 && result>=40){
            document.write("You get C");
        }
         else if(result >=33 && result<=39){
            document.write("You get D");
        }
        else{
            document.write("You Fail");
        }
    }
        
}



//for Calculator

function showOne(){
    document.forms.myform.result.value +="1";
}
function showTwo(){
    document.forms.myform.result.value +="2";
}
function showThree(){
    document.forms.myform.result.value +="3";
}
function showFour(){
    document.forms.myform.result.value +="4";
}
function showFive(){
    document.forms.myform.result.value +="5";
}
function showSix(){
    document.forms.myform.result.value +="6";
}
function showSeven(){
    document.forms.myform.result.value +="7";
}
function showEight(){
    document.forms.myform.result.value +="8";
}
function showNine(){
    document.forms.myform.result.value +="9";
}
function showDot(){
    document.forms.myform.result.value +=".";
}
function showZero(){
    document.forms.myform.result.value +="0";
}
function showDivision(){
    document.forms.myform.result.value +="/";
}
function showMultiply(){
    document.forms.myform.result.value +="*";
}
function showSub(){
    document.forms.myform.result.value +="-";
}

function showPlus(){
    document.forms.myform.result.value +="+";
}
function Clear(){
    document.forms.myform.result.value =" ";
}


function calculation(){
    var cal= eval(document.forms.myform.result.value);
    
    document.forms.myform.result.value= cal;
}

