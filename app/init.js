'use strict';

function anchorize() {
  var sel = 'h1[id],h2[id],h3[id],h4[id],h5[id],h6[id]';
  var headers = [].slice.call(document.querySelectorAll(sel));
  headers.forEach(function(header) {
    var id = header.id;
    header.id = '';
    header.innerHTML += '<a name="' + id + '">&nbsp;</a>';
  });
}

function toc(contentClass, fallbackContentClass, tableClass) {
  var art = document.getElementsByClassName(contentClass)[0] || document.getElementsByClassName(fallbackContentClass)[0];
  if (!art) return;
  var els = [].slice.call(art.childNodes).filter(function(el) { return el.tagName === 'H2' || el.tagName === 'H3'; });
  if (els.length === 0) return;
  var grouped = els.reduce(function(memo, el) {
    if (el.tagName === 'H2') {
      memo.push([el]);
    } else {
      var last = memo[memo.length - 1];
      if (!last) return memo;
      last.push(el);
    }
    return memo;
  }, []);
  var tocHtml = '';
  tocHtml += '<ul className="toc">';
  grouped.forEach(function(group) {
    var main = group[0];
    var children = group.slice(1);
    tocHtml += '<li>';
    tocHtml += '<a href="#' + main.id + '">' + main.innerHTML + '</a>';
    if (children.length) {
      tocHtml += '<ul>';
      children.forEach(function(child) {
        tocHtml += '<li><a href="#' + child.id + '">' + child.innerHTML + '</a></li>';
      });
      tocHtml += '</ul>';
    }
    tocHtml += '</li>';
  });
  tocHtml += '</ul>';

  [].slice.call(document.getElementsByClassName(tableClass)).forEach(function(placeholder) {
    placeholder.innerHTML = tocHtml;
  });
}

function setTitle(contentClass) {
  var art = document.getElementsByClassName(contentClass)[0];
  if (!art) return;
  var heading = art.getElementsByTagName('h1')[0];
  if (!heading) return;
  document.title = heading.textContent + ' — Brunch';
}

function deferIframe() {
  var deferIframes = document.querySelectorAll('.defer-iframe');

  [].forEach.call(deferIframes, function (deferIframe) {
    var iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('frameborder', 0);

    Object.keys(deferIframe.dataset).forEach(key => {
      iframe.setAttribute(key, deferIframe.dataset[key])
    });

    deferIframe.appendChild(iframe);
  });
}

// Just a small hack
// Add `.html` extansion for each of internal links
// Fix for: https://github.com/brunch/brunch.github.io/issues/233
if (process.env.NODE_ENV === 'development') {
  [...document.querySelectorAll('a[href]')]
    .filter(({ pathname }) => pathname !== '/' && pathname.startsWith('/'))
    .forEach(link => link.href += '.html');
}

setTitle('page__content');
toc('doc-content', 'page__content', 'toc-placeholder');
anchorize();
deferIframe();
