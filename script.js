(() => {
  "use strict";

  let currentFilter = null;


  window.filterSelection = function (c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";

    if (currentFilter === c) {
      c = "";
      currentFilter = null;
    } else {
      currentFilter = c;
    }

    document.startViewTransition(() => {
      for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (c === "" || x[i].className.indexOf(c) > -1) {
          addClass(x[i], "show");
        }
      }
    });
  };

  function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");

    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }

  function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");

    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

  var btnContainer = document.getElementsByClassName("button-group")[0];
  var btns = btnContainer.getElementsByClassName("btn");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");

      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }

      if (!this.classList.contains("active")) {
        this.className += " active";
      }
    });
  }

  window.addEventListener("DOMContentLoaded", () => {
    var x = document.getElementsByClassName("filterDiv");
    for (var i = 0; i < x.length; i++) {
      addClass(x[i], "show");
    }
  });
})();
