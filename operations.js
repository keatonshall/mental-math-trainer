let operations = ["+", "-", "x", "/", "^2"];

function chooseProblem(){
  let num1, num2, pNum1, pNum2, ans;
  let opr =random(operations);
  //let opr = "^2"
  if(opr == "+"){

   pNum1 = floor(random(1, 100));
     pNum2 = floor(random(1, 100));
    ans = pNum1 + pNum2;
    num1 = pNum1.toString();
    num2 = pNum2.toString()
  }else if(opr == "-"){
    pNum1 = floor(random(1, 100));
     pNum2 = floor(random(1, 100));
    let sNum = random([pNum1, pNum2]);

    ans = sNum
    num1 = (pNum1 + pNum2).toString();
    num2 = ((pNum1 + pNum2) - sNum).toString()
  }else if(opr == "x"){
     pNum1 = floor(random(1, 100));
     pNum2 = floor(random(1, 10));
    ans = pNum1 * pNum2;
    num1 = pNum1.toString();
    num2 = pNum2.toString()
  }else if(opr == "/"){
      pNum1 = floor(random(1, 100));
     pNum2 = floor(random(1, 10));
    let sNum = pNum1;

    ans = sNum
    num1 = (pNum1 * pNum2).toString();
    num2 = ((pNum1 * pNum2) / sNum).toString()
  }else if(opr == "^2"){
    pNum1 = floor(random(32, 100))
    ans = pNum1 * pNum1;
    num1 = pNum1.toString();
  }
 // if(opr != "^2"){
   let p =  {
    nums: [num1,num2],
    o: opr,
    a: ans
  };
return p;

    //questionToScript(q);


 // };}else{


  //}
}


function displayProblem(prb){
  textAlign(CENTER, CENTER);
  let prbText;
    let x = width/2;
  let y = 1/4 * height
  textSize(50);
  if(prb.o != "^2"){
    prbText = prb.nums[0] + " " + prb.o + " " + prb.nums[1];
    text(prbText, x, y)
  }else{
    text(prb.nums[0], x, y);
    textSize(30);

    text(2, x + 35, y - 25)
  }
}
