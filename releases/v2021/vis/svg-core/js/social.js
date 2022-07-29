	twitter_hashtag = "Eurostat";

    //get container
    let socialContainer = document.getElementById('social-container');
    
    let embed = document.createElement('span');    
    embed.setAttribute('class', 'fa-stack');
    embed.setAttribute('data-toggle', 'modal');
    embed.setAttribute('data-target', '#container-modal-embed');
    embed.setAttribute('data-tooltip', 'tooltip');
    embed.setAttribute('data-placement', 'top');
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
    twitter.setAttribute('data-placement', 'top');
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
		var url = encodeURI(window.location.href);
		var url_share_twitter = "https://twitter.com/intent/tweet?hashtags="+twitter_hashtag+"&original_referer="+url+"&ref_src=twsrc%5Etfw&text="+encodeURI(_("title"))+"&tw_p=tweetbutton&url="+url;
		console.log(url_share_twitter);
        window.open(url_share_twitter, '_blank', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
        return false;
    });

    socialContainer.appendChild(twitterLink);

    let fb = document.createElement('span');
    fb.setAttribute('class', 'fa-stack');
    fb.setAttribute('data-tooltip', 'tooltip');
    fb.setAttribute('data-placement', 'top');
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

    let mail = document.createElement('span');
    mail.setAttribute('class', 'fa-stack');
    mail.setAttribute('data-tooltip', 'tooltip');
    mail.setAttribute('data-placement', 'top');
    mail.setAttribute('title', _('mail-icon'));

    let circleMail = document.createElement('i');
    circleMail.setAttribute('class', 'fa fa-circle fa-stack-2x');

    let iconMail = document.createElement('i');
    iconMail.setAttribute('class', 'fa fa-envelope fa-stack-1x fa-inverse');

    mail.appendChild(circleMail);
    mail.appendChild(iconMail);
    

    let mailLink = document.createElement('a');
    mailLink.appendChild(mail);
    mailLink.addEventListener('click', function () {
        let u = window.location.href;
        let url = 'mailto:?body='+_("title")+"%0D%0A%0D%0A"+u;
        window.open(url , 'sharer', 'toolbar=0,status=0,width=626,height=436');        
    });
    socialContainer.appendChild(mailLink);

    let currentLocation = window.location;
    let codeContainer = document.getElementById('embed');
    codeContainer.innerHTML = '&lt;iframe width="100%" height="800" src="' + currentLocation + '"&gt;&lt;/iframe&gt;';

    let codeHeader = document.getElementById('embed-header');
    codeHeader.appendChild(document.createTextNode(_('embed_instruction')));


    //active all tooltips
    $('[data-tooltip="tooltip"]').tooltip();
 
