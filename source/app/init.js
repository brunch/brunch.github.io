'use strict';

function anchorize() {
  var headers = [].slice.call(document.querySelectorAll('h1[id],h2[id],h3[id],h4[id],h5[id],h6[id]'));
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
  var deferIframes = document.getElementsByClassName('defer-iframe');
  var deferIframesNumber = deferIframes.length;

  if (deferIframesNumber) {
    for (var i = 0; i < deferIframesNumber; i++) {
      var iframe = document.createElement('iframe');
      var frameborder = document.createAttribute('frameborder');
      var webkitallowfullscreen = document.createAttribute('webkitallowfullscreen');
      var mozallowfullscreen = document.createAttribute('mozallowfullscreen');
      var allowfullscreen = document.createAttribute('allowfullscreen');

      frameborder.value = '0';

      iframe.setAttributeNode(frameborder);
      iframe.setAttributeNode(webkitallowfullscreen);
      iframe.setAttributeNode(mozallowfullscreen);
      iframe.setAttributeNode(allowfullscreen);

      iframe = setDataValuesToIframe(iframe, Object.assign({}, deferIframes[i].dataset));

      deferIframes[i].appendChild(iframe);
    }
  }
}

function setDataValuesToIframe(element, data) {
  for (var attrName in data) {
    var attr = document.createAttribute(attrName);

    attr.value = data[attrName];
    element.setAttributeNode(attr);
  }

  return element;
}

setTitle('page__content');
toc('doc-content', 'page__content', 'toc-placeholder');
anchorize();
deferIframe();
