let eventVariable = document.getElementById("btnGetMesssage");

eventVariable.addEventListener("mouseover", function( eventVariable ){
    let p1 = document.getElementById("paragraphId1");
    let p2 = document.getElementById("paragraphId2");

    p2.innerText = p1.innerText + " Zac Foss";
});