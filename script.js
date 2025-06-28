(() => {
  "use strict";

  let currentFilter = null;

  window.filterSelection = function (category) {
    var cards, i;
    cards = document.getElementsByClassName("filterDiv");
    if (category == "all") category = "";

    if (currentFilter === category) {
      category = "";
      currentFilter = null;
    } else {
      currentFilter = category;
    }

    document.startViewTransition(() => {
      for (i = 0; i < cards.length; i++) {
        removeClass(cards[i], "show");

        
        if (category === "" || cards[i].className.indexOf(category) > -1) {
          addClass(cards[i], "show");
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
      var filter = this.getAttribute("data-filter");
  
      if (this.classList.contains("active")) {
        this.classList.remove("active");
        currentFilter = null;
        filterSelection("all");
      } else {

        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
          current[0].classList.remove("active");
        }
  
        this.classList.add("active");
        filterSelection(filter);
      }
    });
  }

  window.addEventListener("DOMContentLoaded", () => {
    const cards = document.getElementsByClassName("filterDiv");
    for (var i = 0; i < cards.length; i++) {
      addClass(cards[i], "show");
    }
  });
})();
