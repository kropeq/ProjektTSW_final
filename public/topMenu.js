loadPage = function(href)
    {
    $.get(href, function( data ) {
	$("#content").html(data);
	new TweenLite('#content', 0.5, {top: 0, opacity: 1});
	});
    }

hideContent = function(targetHref)
    {
    TweenLite.killTweensOf('#content'); 
    new TweenLite('#content', 0.5, {top: 300, opacity: 0, onComplete: function(){ loadPage(targetHref);  }});
    }

$(document).ready(function(){
    // rejestracja eventow dla menu
    $('#menu ul li a,#logo').click(function(event){
	    event.preventDefault();
	    var targetHref = $(this).attr('href'); 
	    hideContent(targetHref);
    });
    loadPage('/main');
});