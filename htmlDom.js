//Validating the form
{
  function formValidationText() {
    let x = document.forms["form1"]["yourName"].value;
    if (x == "") {
      alert("Input not a valid text!");
      return false;
    } else if (!isNaN(x)) {
      alert("You cannot enter number!");
      return false;
    }
  }
  //Input password validation
  function formValidationPassword() {
    const y = document.forms["form2"]["yourPassword"].value;
    if (y == "") {
      alert(`Input can not be blank!`);
      return false;
    } else if (isNaN(y)) {
      alert(`Input must be a legal number.`);
      return false;
    }
  }

  {
    //title checking of the html page
    let x = document.getElementById("title_Checking");
    x.innerHTML = document.title;
    setTimeout(() => {
      //Changing css style using DOM
      x.style.color = "gold";
      x.style.fontSize = "50px";
    }, 5000);
  }

  {
    //Changing HTML attribute
    function lighOn() {
      const x = document.querySelector("#imageOfLight");
      x.src = "img/light_on.png";
    }
    function lightOff() {
      const y = document.getElementById("imageOfLight");
      y.src = "img/light-off.png";
    }
    {
      let buttonStyle1 = document.querySelector(".button");
      buttonStyle1.style.width = "100px";
      buttonStyle1.style.backgroundColor = "gold";
      buttonStyle1.style.outline = "none";
      buttonStyle1.style.border = "none";
      buttonStyle1.style.borderRadius = "50px";
      buttonStyle1.style.height = "30px";
      buttonStyle1.style.fontFamily = "Pacifico";
      buttonStyle1.style.cursor = "pointer";
    }
    {
      let buttonStyle2 = document.querySelector("#button");
      buttonStyle2.style.width = "100px";
      buttonStyle2.style.backgroundColor = "gold";
      buttonStyle2.style.outline = "none";
      buttonStyle2.style.border = "none";
      buttonStyle2.style.borderRadius = "50px";
      buttonStyle2.style.height = "30px";
      buttonStyle2.style.fontFamily = "Pacifico";
      buttonStyle2.style.cursor = "pointer";
    }
  }

  //JS animation part
  {
    function animation() {
      const ani = document.getElementById("animationBox");
      let pos = 0;
      let id = null;
      clearInterval(id);
      id = setInterval(mainAnimationFun, 1);
      function mainAnimationFun() {
        if (pos === 400) {
          clearInterval(id);
        } else {
          pos++;
          ani.style.top = pos + "px";
          ani.style.left = pos + "px";
          ani.innerHTML = 4;
          ani.style.zIndex = 1;
        }
      }
    }
  }
  {
    //3rd animation
    function animation2() {
      const docId = document.getElementById("animationBox2");
      let pos = 0;
      const clearInt = setInterval(myAnima, 1);
      function myAnima() {
        if (pos < 400) {
          pos++;
          docId.style.right = pos + "px";
          docId.style.top = pos + "px";
          docId.innerHTML = 3;
          docId.style.zIndex = 1;
        } else {
          clearInterval(clearInt);
          // docId.style.zIndex = -1;
        }
      }
    }
  }
  {
    //3rd animation
    function animation3() {
      const myMove = document.getElementById("myMoveAnimation");
      let pos = 0;
      const clear = setInterval(myAni, 1);
      function myAni() {
        if (pos < 400) {
          pos++;
          myMove.style.bottom = pos + "px";
          myMove.style.left = pos + "px";
          myMove.innerHTML = 2;
        } else {
          clearInterval(clear);
        }
      }
    }
  }
  {
    //4th animation
    function animation4() {
      const myMove1 = document.getElementById("myMoveAnimation2");
      let position = 0;
      const cleInt = setInterval(myMov, 1);
      function myMov() {
        if (position < 400) {
          position++;
          myMove1.style.bottom = position + "px";
          myMove1.style.right = position + "px";
          function changin() {
            myMove1.innerHTML = 1;
          }
          setTimeout(changin, 1500);
        } else {
          clearInterval(cleInt);
        }
      }
    }
  }
  //5th animation
  {
    function myWidthAnimaTion() {
      const doc = document.getElementById("myMovAnimation5");
      let wid = 50;
      const cle = setInterval(myWid, 50);
      function myWid() {
        if (wid > 20) {
          wid--;
          doc.style.width = wid + "px";
          doc.style.height = wid + "px";
          doc.style.left = 215 + "px";
          doc.style.top = 215 + "px";
          doc.innerHTML = 6;
          doc.style.zIndex = 1;
        } else {
          clearInterval(cle);
        }
      }
    }
  }
  //6th animation
  function mySizeIncreseAni() {
    const docOfEle = document.getElementById("myMovAnimation6");
    let size = 20;
    const clearingInt = setInterval(reSize, 50);
    function reSize() {
      if (size < 50) {
        size++;
        docOfEle.style.width = size + "px";
        docOfEle.style.height = size + "px";
        docOfEle.innerHTML = 5;
      } else {
        clearInterval(clearingInt);
      }
    }
  }
  {
    //button 6
    //Using "addEventListener()"
    const button6 = document.getElementById("button6");
    button6.addEventListener("click", mySizeIncreseAni);
    button6.addEventListener("click", myWidthAnimaTion);
    button6.addEventListener("click", animation4);
    button6.addEventListener("click", animation3);
    button6.addEventListener("click", animation2);
    button6.addEventListener("click", animation);
    const removeAddEvent = document.getElementById('button7');
  }


  {
    //Button for DOM Event
    const textOfButton = document.querySelector('.buttonForEvent');
    function txt1() {
      textOfButton.innerHTML = 'What\'s your name?';
    }
    function txt2() {
      textOfButton.innerHTML = `Nice to meet you :)`;
    }
    function txt3() {
      textOfButton.innerHTML = `Hope, see you again.`
    }
  }
  const txtButtonChange = document.getElementById('buttonForEvent');
  txtButtonChange.addEventListener('mouseover', txt1);
  txtButtonChange.addEventListener('click', txt2);
  txtButtonChange.addEventListener('mouseout', txt3);


  {
    //Input "onchange" event
    function onChange() {
    const inputValue = document.forms['form4']['upperCase'];
    inputValue.value = inputValue.value.toUpperCase();
    }
    const buttonOnChange = document.getElementById('upperCase');
    buttonOnChange.addEventListener('change', onChange)

    {
      const makeLowerCase = () => {
        const lowerCaseText = document.forms['form5']['inputLowerCase'];
        lowerCaseText.value = lowerCaseText.value.toLowerCase();
      }
      const lowerCaseB = document.querySelector('#inputLowerCase');
      lowerCaseB.addEventListener('change', makeLowerCase);
    }
    {
      //Removing blank space from input
      let removingBlankSpace = () => {
        const valueOfInput = document.forms["form6"]["trim"];
        valueOfInput.value = valueOfInput.value.trim();
      }
      const inputStri = document.getElementById('trim');
      inputStri.addEventListener('change', removingBlankSpace);
    }
    {
      //Multiple alert in the same button
      let firstAlert = () => {
        alert(`Read our privacy statement before start!`);
      }
      let secondAlert = () => {
        alert(`Don't break any rules otherwise your account will be restricted!`);
      }
      const alertButton = document.querySelector('#multipleAlert');
      alertButton.addEventListener('click',firstAlert);
      alertButton.addEventListener('click', secondAlert);
    }
  }


  {
    //Input validation
    let funInput = () => {
    const inputValues = document.forms['form7']['formVal'];
    inputValues.placeholder = "Enter at least 8 digit";
    }
    let inputValues = document.forms['form7']['formVal'];
    inputValues.addEventListener('mouseover', funInput);
    inputValues.addEventListener('click', () => {
      const inputValues = document.forms['form7']['formVal'];
      inputValues.placeholder = "Don't do any mistake!";
    })

    //Validation code here
    const isValidInput = () => {
      const isValid = document.forms['form7']['formVal'].value;
      const printRes = document.getElementById('resTex');
      if(isValid === '') {
        alert(`Input can not be submitted blank :(`);
        return false;
      } else if(isNaN(isValid)) {
        alert(`Input must be legal number.`)
      } else {
        printRes.innerHTML = `Input is ok, and the value of input is: ${isValid}`;
      }
    }
    const form7 = document.getElementById('form7');
    form7.addEventListener('submit', isValidInput);
  }

  {
    //Node relationship
    document.getElementById('printNodeText').innerHTML = document.getElementById('accessNodeText').childNodes[0].nodeValue;
  }

  //Dynamically appending node element to HTML
  {
    const para1 = document.createElement("p");
    const textNode = document.createTextNode("Fuck you boy");
    para1.appendChild(textNode);

    const div1Place = document.getElementById("divOfAppend");
    div1Place.appendChild(para1);

    //Creating another node
    const para2 = document.createElement('p');
    const para2Text = document.createTextNode('He is not a good boy.');
    para2.appendChild(para2Text); 
    
    //insert 'para2' after 1st child and before 2nd child of div
    const p2 = document.getElementById("p2"); 
    div1Place.insertBefore(para2, p2);
    
    //Remove the element that contain 'p3' id in the following div 
    const p3Id = document.querySelector('#p3');
    p3Id.remove(); //But this method not compitible with all browser.

    //So try to do it another way that is more smarter than this one
    //Remove the element that contain 'p5' id in the following div using "removeChild()"
    const p5 = document.getElementById('p5');
    div1Place.removeChild(p5);

    //Replace a child (remove the element that contain 'p6' id) with another element of the current div element
    let p6 = document.querySelector('#p6');
    const newPara = document.createElement('p');
    const newParaText = document.createTextNode('He always flirt different girls.');
    newPara.appendChild(newParaText);
    div1Place.replaceChild(newPara, p6);
  }
}
