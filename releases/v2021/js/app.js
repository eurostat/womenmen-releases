$(document).ready(function () {

  $("#menu").load("menu.html");

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


  $('body').on('click', function (e) {
    $('[data-toggle="tooltip"]').each(function () {
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.tooltip').has(e.target).length === 0) {
            $(this).tooltip('hide');
        }
    });
});    

  $(function ($) {
    if (String.locale === "en") {
      $(".eurostatLogo").css("border", "none");
      $("#imgYourLogo").remove();
    }

 
  });
  $('iframe').on('load', function()
  {
      var item = $(this).contents().find("#title-col");
      $(item).css("margin-top","20px");
  
  }); 
  /*
  $('.frameSVG').on("load", function() {
    console.log("svg loaded");
    resizeFrame(this);
  });
  */
});
  window.onloadedFrame = function (url) {
    var src = "vis/"+url.split("/vis/")[1];

    var frame = $("iframe[src='"+src+"']:first");
    resizeFrame(frame);

  }
  function resizeSVGFrames() {
    $(".frameSVG").each(function () {
      resizeFrame(this);
    })
  }
  function resizeFrame (frame) {
    $(frame).css("height","");
    $(frame).css("height",$(frame).contents().height());
    $(frame).contents().find("html").css("overflow","hidden");
  }
$( window ).resize(function() {
  resizeSVGFrames();
});

var parentLocation = parent.location;
if (parentLocation.hostname.indexOf('ec.europa.eu') !== -1) {
  /*** CCK ***/
  document.write('<script type="application/json">');
  document.write('{ "utility" : "cck" }');
  document.write('</script>');
  /*** PIWIK ***/
  document.write('<script defer src="//europa.eu/webtools/load.js" type="text/javascript"></script>');
  document.write('<script type="application/json">');
  document.write('{ "utility" : "piwik", "siteID" : 59, "sitePath" : ["ec.europa.eu\/eurostat"] }');
  document.write('</script>');
}

