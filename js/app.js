// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

// Smooth scroll for in page links - http://wibblystuff.blogspot.in/2014/04/in-page-smooth-scroll-using-css3.html
// Improvements from - http://codepen.io/kayhadrin/pen/KbalA

$(function() {
  var $window = $(window), $document = $(document),
    transitionSupported = typeof document.body.style.transitionProperty === "string", // detect CSS transition support
    scrollTime = 1; // scroll time in seconds

  $("a[href*=#]:not([href=#])").on("click", function(e) {
    var target, avail, scroll,
      deltaScroll;
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      target = $(this.hash);
      target = target.length ? target : $("[id=" + this.hash.slice(1) + "]");

      if (target.length) {
        avail = $document.height() - $window.height();

        if (avail > 0) {
          scroll = target.offset().top;
          if (scroll > avail) {
            scroll = avail;
          }
        } else {
          scroll = 0;
        }

        deltaScroll = $window.scrollTop() - scroll;

        // if we don't have to scroll because we're already at the right scrolling level,
        if (!deltaScroll) {
          return; // do nothing
        }

        e.preventDefault();
        
        if (transitionSupported) {
          $("html").css({
            "margin-top": deltaScroll + "px",
            "transition": scrollTime + "s ease-in-out"
          }).data("transitioning", scroll);
        } else {
          $("html, body").stop(true, true) // stop potential other jQuery animation (assuming we're the only one doing it)
          .animate({
            scrollTop: scroll + "px"
          }, scrollTime * 1000);
          
          return;
        }
      }
    }
  });

  if (transitionSupported) {
    $("html").on("transitionend webkitTransitionEnd msTransitionEnd oTransitionEnd", function(e) {
      var $this = $(this),
        scroll = $this.data("transitioning");
      
      if (e.target === e.currentTarget && scroll) {
        $this.removeAttr("style").removeData("transitioning");
        
        $("html, body").scrollTop(scroll);
      }
    });
  }
});

// Doughnut Chart for Weekly Goals
var fundingTotal = [
  {
    value: 2107,
    color:"#9822C0"
  },
  {
    value : 6393,
    color : "#E2EAE9"
  }
]
var options = {
  percentageInnerCutout : 50
};
var fundChart = $("#fundingTotal").get(0).getContext("2d");
var myfundChart = new Chart(fundChart).Doughnut(fundingTotal, options);


