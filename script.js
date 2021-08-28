$(document).ready(function () {
  //get the key from the key value pair stored later
  var nineAmEl = $("#nine-am");
  var tenAmEl = $("#ten-am");
  var elevenAmEl = $("#eleven-am");
  var twelvePmEl = $("#twelve-pm");
  var onePmEl = $("#one-pm");
  var twoPmEl = $("#two-pm");
  var threePmEl = $("#three-pm");
  var fourPmEl = $("#four-pm");
  var fivePmEl = $("#five-pm");

  var nineAmPlan = localStorage.getItem("nineAmPlan");
  var tenAmPlan = localStorage.getItem("tenAmPlan");
  var elevenAmPlan = localStorage.getItem("elevenAmPlan");
  var twelvePmPlan = localStorage.getItem("twelvePmPlan");
  var onePmPlan = localStorage.getItem("onePmPlan");
  var twoPmPlan = localStorage.getItem("twoPmPlan");
  var threePmPlan = localStorage.getItem("threePmPlan");
  var fourPmPlan = localStorage.getItem("fourPmPlan");
  var fivePmPlan = localStorage.getItem("fivePmPlan");
  var sixPmPlan = localStorage.getItem("sixPmPlan");

  //create a timer to run every 1000 milliseonds and display the time every second
  setInterval(function () {
    //get the current day and time using moment.js
    var currentDay = moment().format("MMMM Do YYYY, h:mm:ss a");

    //gets a handle on the text with the id 'currentDay' in the html
    var currentDayEl = $("#currentDay");
    //set the currrentDay text in the #currentDay html
    currentDayEl.text(currentDay);
    //run it every 1000 milliseconds
  }, 1000);
  //gets a handle on the text in the first text box
  //make an array of the save button handles

  $(nineAmEl).text(nineAmPlan);
  $(tenAmEl).text(tenAmPlan);
  $(elevenAmEl).text(elevenAmPlan);
  $(twelvePmEl).text(twelvePmPlan);
  $(onePmEl).text(onePmPlan);
  $(twoPmEl).text(twoPmPlan);
  $(threePmEl).text(threePmPlan);
  $(fourPmEl).text(fourPmPlan);
  $(fivePmEl).text(fivePmPlan);
  //user clicks "save" button

  //gets a handle on the save button
  var saveBtn1El = $("#save-btn1");
  var saveBtn2El = $("#save-btn2");
  var saveBtn3El = $("#save-btn3");
  var saveBtn4El = $("#save-btn4");
  var saveBtn5El = $("#save-btn5");
  var saveBtn6El = $("#save-btn6");
  var saveBtn7El = $("#save-btn7");
  var saveBtn8El = $("#save-btn8");
  var saveBtn9El = $("#save-btn9");
  //get the key from the key value pair stored later
  //user clicks "save" button
  $(function () {
    $(saveBtn1El).click(function () {
      var nineAmPlan = $("#nine-am").val();
      localStorage.setItem("nineAmPlan", nineAmPlan);
    });
  });

  $(function () {
    $(saveBtn2El).click(function () {
      var tenAmPlan = $("#ten-am").val();
      localStorage.setItem("tenAmPlan", tenAmPlan);
    });
  });

  $(function () {
    $(saveBtn3El).click(function () {
      var elevenAmPlan = $("#eleven-am").val();
      localStorage.setItem("elevenAmPlan", elevenAmPlan);
    });
  });

  $(function () {
    $(saveBtn4El).click(function () {
      var twelvePmPlan = $("#twelve-pm").val();
      localStorage.setItem("twelvePmPlan", twelvePmPlan);
    });
  });

  $(function () {
    $(saveBtn5El).click(function () {
      var onePmPlan = $("#one-pm").val();
      localStorage.setItem("onePmPlan", onePmPlan);
    });
  });

  $(function () {
    $(saveBtn6El).click(function () {
      var twoPmPlan = $("#two-pm").val();
      localStorage.setItem("twoPmPlan", twoPmPlan);
    });
  });

  $(function () {
    $(saveBtn7El).click(function () {
      var threePmPlan = $("#three-pm").val();
      localStorage.setItem("threePmPlan", threePmPlan);
    });
  });

  $(function () {
    $(saveBtn8El).click(function () {
      var fourPmPlan = $("#four-pm").val();
      localStorage.setItem("fourPmPlan", fourPmPlan);
    });
  });
  $(function () {
    $(saveBtn9El).click(function () {
      var fivePmPlan = $("#five-pm").val();
      localStorage.setItem("fivePmPlan", fivePmPlan);
    });
  });

  //store the current time
  var hourNow = moment().format("H");

  if (hourNow > 9) {
    $(nineAmEl).removeClass("future");
    $(nineAmEl).addClass("past");
  } else if (hourNow == 9) {
    $(nineAmEl).removeClass("future");
    $(nineAmEl).addClass("present");
  }
  if (hourNow > 10) {
    $(tenAmEl).removeClass("future");
    $(tenAmEl).addClass("past");
  } else if (hourNow == 10) {
    $(tenAmEl).removeClass("future");
    $(tenAmEl).addClass("present");
  }
  if (hourNow > 11) {
    $(elevenAmEl).removeClass("future");
    $(elevenAmEl).addClass("past");
  } else if (hourNow == 11) {
    $(elevenAmEl).removeClass("future");
    $(elevenAmEl).addClass("present");
  }
  if (hourNow > 12) {
    $(twelvePmEl).removeClass("future");
    $(twelvePmEl).addClass("past");
  } else if (hourNow == 12) {
    $(twelvePmEl).removeClass("future");
    $(twelvePmEl).addClass("present");
  }
  if (hourNow > 13) {
    $(onePmEl).removeClass("future");
    $(onePmEl).addClass("past");
  } else if (hourNow == 13) {
    $(onePmEl).removeClass("future");
    $(onePmEl).addClass("present");
  }
  if (hourNow > 14) {
    $(twoPmEl).removeClass("future");
    $(twoPmEl).addClass("past");
  } else if (hourNow == 14) {
    $(twoPmEl).removeClass("future");
    $(twoPmEl).addClass("present");
  }
  if (hourNow > 15) {
    $(threePmEl).removeClass("future");
    $(threePmEl).addClass("past");
  } else if (hourNow == 15) {
    $(threePmEl).removeClass("future");
    $(threePmEl).addClass("present");
  }
  if (hourNow > 16) {
    $(fourPmEl).removeClass("future");
    $(fourPmEl).addClass("past");
  } else if (hourNow == 9) {
    $(fourPmEl).removeClass("future");
    $(fourPmEl).addClass("present");
  }
  if (hourNow > 17) {
    $(fivePmEl).removeClass("future");
    $(fivePmEl).addClass("past");
  } else if (hourNow == 17) {
    $(fivePmEl).removeClass("future");
    $(fivePmEl).addClass("present");
  }
});

//get the current time as a function/variable

//this is a function to compare the current time to the time block

//dynamically add classes to the textarea based on current time
//prepend each text area with the hour

//if current time > timeblocktime, then the time block has passed

//else if current time === timeblock time, then the time block is present

// else is the future

// if (hourNow > 10) {
//   $(tenAmEl).removeClass("future");
//   $(tenAmEl).addClass("past");
// } else if (hourNow === 10) {
//   $(tenAmEl).removeClass("future");
//   $(tenAmEl).addClass("present");
// }
// if (hourNow > 11) {
//   $(elevenAmEl).removeClass("future");
//   $(elevenAmEl).addClass("past");
// }
// if (hourNow === 11) {
//   $(elevenAmEl).removeClass("future");
//   $(elevenAmEl).addClass("present");
// }

// if (hourNow > 12) {
//   $(twelvePmEl).removeClass("future");
//   $(twelvePmEl).addClass("past");
// } else if (hourNow === 12) {
//   $(twelvePmEl).removeClass("future");
//   $(twelvePmEl).addClass("present");
// }

// if (hourNow > 13) {
//   $(onePmEl).removeClass("future");
//   $(onePmEl).addClass("past");
// } else if (hourNow === 13);
// $(onePmEl).removeClass("future");
// $(onePmEl).addClass("present");

// if (hourNow > 14) {
//   $(twoPmEl).removeClass("future");
//   $(twoPmEl).addClass("past");
// } else if (hourNow === 14);
// $(twoPmEl).removeClass("future");
// $(twoPmEl).addClass("present");

// if (hourNow > 15) {
//   $(threePmEl).removeClass("future");
//   $(threePmEl).addClass("past");
// } else if (hourNow === 15) {
//   $(threePmEl).removeClass("future");
//   $(threePmEl).addClass("present");
// }
// if (hourNow > 16) {
//   $(fourPmEl).removeClass("future");
//   $(fourPmEl).addClass("past");
// } else if (hourNow === 16) {
//   $(fourPmEl).removeClass("future");
//   $(fourPmEl).addClass("present");
// }
// if (hourNow > 17) {
//   $(fivePmEl).removeClass("future");
//   $(fivePmEl).addClass("past");
// } else if (hourNow === 17) {
//   $(fivePmEl).removeClass("future");
//   $(fivePmEl).addClass("present");
