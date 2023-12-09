const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc==="images/python-logo.svg"){
        myImage.setAttribute("src","images/python2.png");
    } else {
        myImage.setAttribute("src","images/python-logo.svg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Python is cool, ${myName}`;
    }
  }
  

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Python is cool, ${myName}`;
}

myButton.onclick = () => {
    setUserName();
}