// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel

(function() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                   || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() { callback(currTime + timeToCall); },
        timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
  }
}());

var sectionHeight = function() {
  var total    = $(window).height();
  var $section = $('section').css('height','auto');

  if ($section.outerHeight(true) < total) {
    var margin = $section.outerHeight(true) - $section.height();
    $section.height(total - margin - 20);
  } else {
    $section.css('height','auto');
  }
};

$(window).resize(sectionHeight);

var listenForScroll = function() {
  var lastScrollY = 0;
  var ticking = false;
  var wrapper = $('.wrapper');
  var nav = wrapper.find('.nav-header');

  var update = function() {
    if (lastScrollY > 205) {
      nav.css({position: 'fixed', top: 0});
    } else {
      nav.css({position: 'absolute', top: '-25px'});
    }
    ticking = false;
  };

  var requestTick = function() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  };

  var onScroll = function() {
    lastScrollY = window.scrollY;
    requestTick();
  };

  $(window).on('scroll', onScroll);
  onScroll();
};

$(document).ready(function(){
  listenForScroll();
  (function() {
    var queryAll = function(selector) {
      return [].slice.call(document.querySelectorAll(selector));
    };
    var links = queryAll('.page-nav > li > a');
    links.forEach(function(link) {
      link.className = link.className.replace('active', '');
      var re = new RegExp(link.getAttribute('data-pattern'));
      console.log(location.href, re);
      if (re.test(location.href)) link.className += ' active';
    });
  })();
});

fixScale = function(doc) {

  var addEvent = 'addEventListener',
      type = 'gesturestart',
      qsa = 'querySelectorAll',
      scales = [1, 1],
      meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

  function fix() {
    meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
    doc.removeEventListener(type, fix, true);
  }

  if ((meta = meta[meta.length - 1]) && addEvent in doc) {
    fix();
    scales = [.25, 1.6];
    doc[addEvent](type, fix, true);
  }

};
