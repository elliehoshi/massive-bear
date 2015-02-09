$(document).ready(function() {

  // fade in img on load (not working yet)
	// $(function(obj){
 //    $(obj).fadeIn(1000);
 //  });

  // Affix nav
  $(window).scroll(function(){
    var scrollTop = $('.home').height();
    if($(window).scrollTop() >= scrollTop){
      $('#nav-container').css({
        visibility: 'visible',
        position: 'fixed',
        top: '0'
      });
      $('#nav-container').animate({
        opacity: '1'
      }, 500);
    }
    if($(window).scrollTop() < scrollTop){
      $('#nav-container').removeAttr('style');
    }
  })

  // Affix anchor nav
  $(window).scroll(function(){
    var scrollTop = $('.portfolio-description').height();
    if($(window).scrollTop() >= scrollTop){
      $('.anchor-nav-bg').css({
        visibility: 'visible',
        position: 'fixed',
        top: '0'
      });
      $('.anchor-nav-bg').animate({
        opacity: '1'
      }, 500);
    }
    if($(window).scrollTop() < scrollTop){
      $('.anchor-nav-bg').removeAttr('style');
    }
  })

  // For Parallax Background with Cursor Movement
  $('#blackBackdrop').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 6);
    var amountMovedY = (e.pageY * -1 / 6);
    $('#landing-content').css('left', amountMovedX * 4);
    $('#landing-content').css('top', amountMovedY);
    // $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
  });

  // For Parallax Box1 with Cursor Movement
  $('#blackBackdrop').mousemove(function(e){
    var amountMovedX = (e.pageX * 1 / 4);
    var amountMovedY = (e.pageY * 1 / 4);
    $('#movement2').css('right', amountMovedX);
    $('#movement2').css('top', amountMovedY);
    $('#movement3').css('left', amountMovedX);
    $('#movement3').css('top', amountMovedY);
  });

  // Sticky nav
  $('body').addClass('js');
  var $nav = $('#nav'),
    $menulink = $('.menu-link');
  
  $menulink.click(function() {
    console.log("clicked");
    $menulink.toggleClass('active');
    $nav.toggleClass('active');
    return false;
  });

  // jQuery Scroll Animation
  $(window).scroll(function(){
    $('.servicesIcon').each(function(){
      var iconPos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (iconPos < topOfWindow+600) {
          $(this).addClass("bounceIn");
        }
    });
  });

  //   $(window).bind('scroll',function(e){
  //     parallaxScroll();
  // });
 
  // function parallaxScroll(){
  //   var scrolled = $(window).scrollTop();

  //   $('#works').css('top',(4-(scrolled*.9))+'px');
  //   $('#portfolioContainer').css('top',(9-(scrolled*.9))+'px');
  // }

  // Animate Nav Scroll
  $("#nav ul li a[href^='#']").on('click', function(e){
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 300, function() {
      window.location.hash = hash;
    });
  });

  //Animate scroll on click of scroll icon in homepage (refactor to move into function above)
  $("#scroll").on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#services').offset().top
    }, 'slow');
  });

});
