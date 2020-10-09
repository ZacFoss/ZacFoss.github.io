let myFullName = "Zac Foss"; // 7 characters in name...not including space
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
let headerContent = document.querySelector(".header").innerHTML = myFullName + "'s Lab 4";

// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name
let paragraphFirst = document.createElement("p");
paragraphFirst.classList.add("content1");
let paragraphSecond = document.createElement("p");
paragraphSecond.classList.add("content2");
let divContent = document.querySelector(".content");

divContent.appendChild(paragraphFirst);
divContent.appendChild(paragraphSecond);

// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).

paragraphFirst.innerText = "my name has " + myFullName.length + " characters";

// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name

paragraphSecond.innerText = "the third character in my name is " + myFullName[2].toUpperCase();



// 6 Add a new line to your second paragraph
paragraphSecond.innerText += "\n";

// 7 Return the final three characters of your last name to that new line
paragraphSecond.innerText += myFullName.substring(5, 8);

// 8 Substring your first and last name into two separate variables
let firstName = myFullName.substring(0, 2);
let lastName = myFullName.substring(4, 8);
// 9 Add the total length of your first and last names together
let totalLength = firstName.length + lastName.length;
// 10 Display that total next to your name in your header
document.querySelector(".header").innerText += " " + totalLength;