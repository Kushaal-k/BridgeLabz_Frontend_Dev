// Assign independent jQuery versions
var jq1 = jQuery.noConflict(true); // jQuery 1.x
var jq2 = jQuery.noConflict(true); // jQuery 3.7.1

// -----------------------
// jQuery Version 1 Tasks
// -----------------------

// Carousel rotation
jq1(document).ready(function () {
  let index = 0;
  const items = jq1(".carousel-item");

  function rotate() {
    items.hide();
    items.eq(index).show();
    index = (index + 1) % items.length;
  }

  rotate();
  setInterval(rotate, 2000);
});

// Highlight active widget
jq1(".widget").click(function () {
  jq1(".widget").removeClass("active-widget");
  jq1(this).addClass("active-widget");
});


// -----------------------
// jQuery Version 2 Tasks
// -----------------------

// Modal Popup
jq2("#notifyBtn").click(function () {
  jq2("#modalBox").fadeIn(300);
});

jq2("#closeModal").click(function () {
  jq2("#modalBox").fadeOut(300);
});

// Tooltip on hover
jq2(".widget").hover(
  function () {
    jq2(this).attr("title", "This is a widget tooltip!");
  }
);
