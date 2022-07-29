

    //get container
    let socialContainer = document.getElementById('social-container');

    //add info/instructions icon
    let infomark = document.createElement('span');    
    infomark.setAttribute('class', 'fa-stack');
    infomark.setAttribute('data-toggle', 'modal');
    infomark.setAttribute('data-target', '#container-modal-instructions');
    infomark.setAttribute('data-tooltip', 'tooltip');
    infomark.setAttribute('data-placement', 'bottom');
    infomark.setAttribute('title', _('instructions-header'));

    let circleInfo = document.createElement('i');
    circleInfo.setAttribute('class', 'fa fa-circle fa-stack-2x');

    let iconInfo = document.createElement('i');
    iconInfo.setAttribute('class', 'fa fa-info fa-stack-1x fa-inverse');

    infomark.appendChild(circleInfo);
    infomark.appendChild(iconInfo);


    socialContainer.appendChild(infomark);
    //only show link to dataset, if outside eurostat's environment
    let parentLocation = parent.location;
    let isEmbed = (window.top !== window.self) ? true : false;

    let embed = document.createElement('span');    
    embed.setAttribute('class', 'fa-stack');
    embed.setAttribute('data-toggle', 'modal');
    embed.setAttribute('data-target', '#container-modal-embed');
    embed.setAttribute('data-tooltip', 'tooltip');
    embed.setAttribute('data-placement', 'bottom');
    embed.setAttribute('title', _('embed-icon'));

    let circleEmbed = document.createElement('i');
    circleEmbed.setAttribute('class', 'fa fa-circle fa-stack-2x');
    let iconEmbed = document.createElement('i');
    iconEmbed.setAttribute('class', 'fa fa-code fa-stack-1x fa-inverse');

    embed.appendChild(circleEmbed);
    embed.appendChild(iconEmbed);

    socialContainer.appendChild(embed);


    let twitter = document.createElement('span');
    twitter.setAttribute('class', 'fa-stack');
    twitter.setAttribute('data-tooltip', 'tooltip');
    twitter.setAttribute('data-placement', 'bottom');
    twitter.setAttribute('title', _('twitter-icon'));

    let circleTwitter = document.createElement('i');
    circleTwitter.setAttribute('class', 'fa fa-circle fa-stack-2x');

    let iconTwitter = document.createElement('i');
    iconTwitter.setAttribute('class', 'fa fa-twitter fa-stack-1x fa-inverse');

    twitter.appendChild(circleTwitter);
    twitter.appendChild(iconTwitter);

    let twitterLink = document.createElement('a');
    twitterLink.appendChild(twitter);
    twitterLink.addEventListener('click', function () {
        var twitter_hashtag = encodeURIComponent(indicator.sharing.twitter_hashtag);
        var twitter_text = encodeURI(_(indicator.sharing.twitter_textKey));
        var url = encodeURI(window.location.href);
		var url_share_twitter = "https://twitter.com/intent/tweet?hashtags="+twitter_hashtag+"&original_referer="+url+"&ref_src=twsrc%5Etfw&text="+twitter_text+"&tw_p=tweetbutton&url="+url;
        window.open(url_share_twitter, '_blank', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
        return false;
    });

    socialContainer.appendChild(twitterLink);

    let fb = document.createElement('span');
    fb.setAttribute('class', 'fa-stack');
    fb.setAttribute('data-tooltip', 'tooltip');
    fb.setAttribute('data-placement', 'bottom');
    fb.setAttribute('title', _('facebook-icon'));

    let circleFacebook = document.createElement('i');
    circleFacebook.setAttribute('class', 'fa fa-circle fa-stack-2x');

    let iconFacebook = document.createElement('i');
    iconFacebook.setAttribute('class', 'fa fa-facebook fa-stack-1x fa-inverse');

    fb.appendChild(circleFacebook);
    fb.appendChild(iconFacebook);
    

    let fbLink = document.createElement('a');
    fbLink.appendChild(fb);
    fbLink.addEventListener('click', function () {
        let u = window.location.href;
        let t = _('title');
        let url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t);
        window.open(url + '?redirect=facebook', 'sharer', 'toolbar=0,status=0,width=626,height=436');        
    });
    socialContainer.appendChild(fbLink);


    let currentLocation = window.location;
    let codeContainer = document.getElementById('embed');
    codeContainer.innerHTML = '&lt;iframe width="100%" height="800" src="' + currentLocation + '"&gt;&lt;/iframe&gt;';
    //localizeHTMLTag('embed-close');
    
    let codeHeader = document.getElementById('embed-header');
    codeHeader.appendChild(document.createTextNode(_('embed_instruction')));
/*
    let logo = new Image();
    logo.src = 'img/logoestat.png';
    logo.setAttribute('class', 'logo');
    socialContainer.appendChild(logo);
*/

    //localise
    let instructions = document.getElementById('instructions');
    let instructionsText0 = _('instructions0');
    let instructionsText1 = _('instructions1');
    let instructionsText2 = _('instructions2');

	let no = new Image();
	no.src = 'img/no.gif';

    instructions.innerHTML = "";
    
    instructions.appendChild(document.createTextNode(instructionsText0));
    instructions.appendChild(document.createElement('br'));
    instructions.appendChild(document.createTextNode(instructionsText1));
    instructions.appendChild(document.createElement('br'));

    var tempNode = document.createElement('div');
    tempNode.innerHTML = instructionsText2;

    instructions.appendChild(tempNode);
    instructions.appendChild(document.createElement('br'));

	//alert(instructionsText0);
        //add informations
    let informationsHeader = document.getElementById('instructions-header');
    informationsHeader.appendChild(document.createTextNode(_('instructions-header')));

    //localizeHTMLTag('instructions-close');

    //active all tooltips
    $('[data-tooltip="tooltip"]').tooltip();
 
