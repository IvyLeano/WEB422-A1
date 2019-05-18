/********************************************************************************* *
WEB422 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. * No part
of this assignment has been copied manually or electronically from any other source * (including web
sites) or distributed to other students.
*
* Heroku link: https://fierce-ridge-73424.herokuapp.com
* Name: ___Ivy Leano - Hill___________________ Student ID: ________120331186______ Date: ______05/18/2019__________
*
*
********************************************************************************/
//Note: $.ajax: https://www.w3schools.com/jquery/ajax_ajax.asp
//              https://api.jquery.com/jquery.get/

$(document).ready(function () {
  console.log("Document Ready");
  //Team Menu on click event
  $("#teams-menu").on("click", function (event) {
    event.preventDefault();
    $.get("https://fierce-ridge-73424.herokuapp.com/teams", function (data) {
      $('#data').empty();
      $('#data').append(`<h3>Teams</h3>`);
      $('#data').append(JSON.stringify(data))
    })
    //console.log("handler1 ");
  });

  //Employees-menu on click event
  $("#employees-menu").on("click", function (event) {
    event.preventDefault();
    //Ajax Request 
    $.get("https://fierce-ridge-73424.herokuapp.com/employees", function (data) {
      $('#data').empty();
      $('#data').append(`<h3>Employees</h3>`);
      $('#data').append(JSON.stringify(data))
    })
    //console.log("handler2 ");
  });

  //On click event for projects-menu
  $("#projects-menu").on("click", function (event) {
    event.preventDefault();
    //Ajax Request 
    $.get("https://fierce-ridge-73424.herokuapp.com/projects", function (data) {
      $('#data').empty();
      $('#data').append(`<h3>Projects</h3>`);
      $('#data').append(JSON.stringify(data))
    })
    //console.log("handler3 ");
  });

  $("#positions-menu").on("click", function (event) {
    event.preventDefault();
    //Ajax Request 
    $.get("https://fierce-ridge-73424.herokuapp.com/positions", function (data) {
      $('#data').empty();
      $('#data').append(`<h3>Positions</h3>`);
      $('#data').append(JSON.stringify(data))
    })
    //console.log("handler4 ");
  });
})



