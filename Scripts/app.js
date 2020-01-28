/*
    Student Name  :  Ritu Patel
    StudentID     :  100730021
    Date Completed:  2020-01-28
*/

"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")
   
    //variables for Part 1-A
    let  buttonLI;
   //variables for Part 1-B
   let StudentDescription;
   //variables for Part 1-c
   let paragraphLI;


    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {

        buttonLI = document.getElementById("largeButton")
        buttonLI.innerHTML="Learn More."


        buttonLI = document.getElementById("firstParagraph")
        buttonLI.innerHTML= "JavaScript is a prototype-based language, and every object in JavaScript has a hidden internal property called Prototype that can be used to extend  object properties and methods."


        Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {

    }



    window.addEventListener("load", Start);
})(app || (app = {}));

