
$(document).ready(function () {
    var buttonHTML = "<a id='shareBtn' type='button' role='button' alt='Share' data-html='true' data-toggle='popoverSharing' class='shareButton btn btn-primary'><i class='fa fa-share-alt fa-2x'></i></a>";
    var url = location.href;  // entire url including querystring - also: window.location.href;
    var baseURL = document.URL.substr(0,document.URL.lastIndexOf('/'));
    baseURL += "/";
    
    if ($(".mainTitle").length) {
        $(".mainTitle").append(buttonHTML);
        $(".mainTitle a").attr("shareUrl",window.location.href.split("?")[0]);
        $(".mainTitle a").attr("title",_("shareTextPublication"));        
    }
    if ($("#topMenuShare").length) {
        //$("#topMenuShare").append(buttonHTML);
        $("#topMenuShare a").attr("shareUrl",document.URL.substr(0,document.URL.lastIndexOf('/'))+"/");
        $("#topMenuShare a").attr("title",_("shareTextPublication"));  
    } 
    if ($(".rowBlock h1:first-child").length) {
        $(".rowBlock h1:first-child").append(buttonHTML);
        $(".rowBlock h1:first-child a").addClass("sharePage");
        $(".rowBlock h1:first-child a").attr("shareUrl",window.location.href.split("?")[0]);
        $(".rowBlock h1:first-child a").attr("title",_("shareTextPage"));
    }
    $(".iframeContainer").each(function () {
        $(this).append(buttonHTML);
        $(".shareButton", this).addClass("shareVis");
        $(".shareButton", this).attr("shareUrl", $("iframe:first",this).attr("src"));   
        $(".shareButton", this).attr("title",_("shareTextVis"));  
    });
    $(window).resize(function() {
        $('[data-toggle="popoverSharing"]').popover("hide");
    }); 
    function vis_scroll() {
        $(document).scroll(function () {
            $('[data-toggle="popoverSharing"]').popover("hide")
        });
    }
    /* social network and email sharing */

    function facebook_sharing(shareObjet) {

        u = shareObjet.url;
        t = shareObjet.title;

        var url = "https://www.facebook.com/sharer/sharer.php?u=" +
            encodeURIComponent(u) + "&t=" + encodeURIComponent(t);
        var popup = window.open(url + "?redirect=facebook", "sharer",
            "toolbar=0,status=0,width=600,height=436");
    }

    function twitter_sharing(shareObjet) {

        var twitter_hashtag = "Eurostat #Energy";
        twitter_hashtag = encodeURIComponent(twitter_hashtag);

        u = shareObjet.url;
        t = shareObjet.title;

        var url = encodeURI(u);

        var url_share_twitter = "https://twitter.com/intent/tweet?hashtags=" +
            twitter_hashtag + "&original_referer=" + url +
            "&ref_src=twsrc%5Etfw&text=" + encodeURI(t) + "&tw_p=tweetbutton&url=" +
            url;

        window.open(url_share_twitter, '_blank',
            'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'
        );

        return false;
    }

    function email_sharing(shareObjet) {

        var url = shareObjet.url;

        if (url.indexOf('bloc-1a') > -1) {
            var pageDesc = _("shareDescBloc1a");
        }

        if (url.indexOf('bloc-1b') > -1) {
            var pageDesc = _("shareDescBloc1b");
        }

        if (url.indexOf('bloc-1c') > -1) {
            var pageDesc = _("shareDescBloc1c");
        }

        if (url.indexOf('bloc-1d') > -1) {
            var pageDesc = _("shareDescBloc1d");
        }

        if (url.indexOf('bloc-2a') > -1) {
            var pageDesc = _("shareDescBloc2a");
        }

        if (url.indexOf('bloc-2b') > -1) {
            var pageDesc = _("shareDescBloc2b");
        }

        if (url.indexOf('bloc-2c') > -1) {
            var pageDesc = _("shareDescBloc2c");
        }

        if (url.indexOf('bloc-2d') > -1) {
            var pageDesc = _("shareDescBloc2d");
        }

        if (url.indexOf('bloc-3a') > -1) {
            var pageDesc = _("shareDescBloc3a");
        }

        if (url.indexOf('bloc-3b') > -1) {
            var pageDesc = _("shareDescBloc3b");
        }

        if (url.indexOf('bloc-3c') > -1) {
            var pageDesc = _("shareDescBloc3c");
        }

        if (url.indexOf('bloc-3d') > -1) {
            var pageDesc = _("shareDescBloc3d");
        }


        if (url.indexOf('info') > -1) {
            var pageDesc = _("shareDescBlocInfo");
        }


        if (url.indexOf('index') > -1 || url.indexOf('.html') ==-1) {
            var pageDesc = _("shareDescIndex");
            var subject = "Eurostat - " + _("document.title");
        } else {
            var subject = "Eurostat - " + _("document.title") + " - " + document.title;
        }

        if (url.includes("vis/")) {
            subject = "Eurostat - " + _("document.title") + " - " + shareObjet.title;
            pageDesc = shareObjet.title;
        }else {
            url = shareObjet.url;
        }

        //var subject = "Eurostat - " + _("document.title") + " - " + document.title;
        var body = pageDesc + " %0D%0A" + " %0D%0A" + url;
        var mailTo = "mailto:?subject=" + subject + "&body=" + body;
        window.location = (mailTo);

    }

    function embed_infographics(shareObjet) {
        $("#embedModal").modal("show");

        var iframeCode1 =
                "&lt;iframe frameborder=\"0\" height=\"600px\" scrolling=\"no\" width=\"100%\" src=\"";
        var iframeCode2 = "&gt;&lt;/iframe&gt;"

        $(".modal-body code").html(iframeCode1 + shareObjet.url + iframeCode2);

        $([document.documentElement, document.body]).animate({
            scrollTop:vis.top - $(".navbar:first").height()
        }, 1000);
    }
    $(document).scroll(function () {
        $('[data-toggle="popoverSharing"]').popover("hide")
    });
    $(window).resize(function() {
        $('[data-toggle="popoverSharing"]').popover("hide");
    }); 
    $('[data-toggle="popoverSharing"]').tooltip({placement: 'left', offset: '0 20px'});
    $('[data-toggle="popoverSharing"]').popover({
        title: "Test ",//_("shareText3"),
        html: true,
        toggle: "popoverSharing",
        placement: "left",
        trigger: "click",
        sanitize: false,
        //container: ".navbar",
        boundary: "viewport",
        content: function () {
            $('[data-toggle="popoverSharing"]').tooltip("dispose");

           //$('[data-toggle="popover"]').popover("hide");
            var shareVis = $(this).hasClass("shareVis");
            var sharePage = $(this).hasClass("sharePage");
            var shareText = sharePage ? _("shareTextPage") : ( shareVis ?  _("shareTextVis") : _("shareTextPublication"));
            //var shareText = _("shareText3");

            var url = shareVis ? $(this).siblings("iframe:first").attr("src") : window.location.href;


            var embedText = "<span>"+_("embedText")+"</span>";
            var embedBlock = "<br><br>" + embedText +
                "&nbsp;<span class=\"iconShare\"id=\"embed\"><i class=\"fa fa-code fa-fw\" aria-hidden=\"true\"></i></span>";
            var shareModule1 = "<span class=\"shareTextBody\" id=\"sharePopover\">"  +
                (shareText) +
                "</span><br><span id=\"btn_share_fb\" class=\"iconShare\"><i class=\"fa fa-facebook-f fa-fw\" aria-hidden=\"true\"></i></span><span class=\"iconShare\" id=\"btn_share_tw\"><i class=\"fa fa-twitter fa-fw\" aria-hidden=\"true\"></i></span><span class=\"iconShare\" id=\"btn_share_mail\"><i class=\"fa fa-envelope fa-fw\" aria-hidden=\"true\"></i></span>"
            var shareModule2 = shareModule1 ;
            shareModule2+=  shareVis ? embedBlock : "";


            if (("#infographics1").length > 0){
                return shareModule2;
            } else {
                return shareModule1;
            }

        },

    }).on('shown.bs.popover', function () {
        var shareUrl = $(this).attr("shareUrl");
        var boolVis = shareUrl.includes("vis/");
        var frameTitle;

        if (boolVis) {
            var baseURL = document.URL.substr(0,document.URL.lastIndexOf('/'));
            var vis = null;

            vis = $('iframe[src="'+shareUrl+'"]');

            if ($(vis).contents().find("meta[property='og:title']").length) {
                frameTitle = $(vis).contents().find("meta[property='og:title']").attr("content");
            }else {
                frameTitle = $(vis).contents().find("title").html();
            }

            shareUrl = baseURL + "/"+shareUrl.split("?")[0];
            frameTitle = frameTitle.replace("Housing in Europe: ","");
            frameTitle = frameTitle.replace("- Compare your country","");
        }
        var shareTitle = boolVis ? frameTitle : shareUrl == document.URL.substr(0,document.URL.lastIndexOf('/'))+"/" ? _("document.title"): document.title;
        var shareObjet = {title: shareTitle , url : shareUrl};

        $("#btn_share_fb").click(function () {

            facebook_sharing(shareObjet);
        });


        $("#btn_share_tw").click(function () {

            twitter_sharing(shareObjet);
        });

        $("#btn_share_mail").click(function () {

            email_sharing(shareObjet);

        });

        $("#embed").click(function () {

            embed_infographics(shareObjet);

        });

    }).on("hide.bs.popover", function () {     
        $('[data-toggle="popoverSharing"]').tooltip("dispose");
        $('[data-toggle="popoverSharing"]').tooltip({placement: 'left', offset: '0 20px'});
    });


});