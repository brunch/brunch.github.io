var filterItems = function(items, search, attributes) {
  var searchRes = search.split(' ').filter(function(expr) {
    return expr !== '';
  }).map(function(expr) {
    return new RegExp(expr, 'i');
  });

  if (searchRes.length === 0) return items;

  return items.filter(function(item) {
    var attributeValues = attributes.map(function(attr) { return item[attr]; });
    var itemString = attributeValues.join(' ');
    return searchRes.every(function(searchRe) {
      return searchRe.test(itemString);
    });
  });
};

var compare = function(order, key) {
  return function(i1, i2) {
    var id1 = order.indexOf(i1[key]);
    var id2 = order.indexOf(i2[key]);

    if (id1 !== -1 && id2 !== -1) {
      return id1 > id2 ? 1 : -1;
    } else {
      return id1 ? 1 : id2 ? -1 : i1[key].localeCompare(i2[key]);
    }
  };
};

module.exports = {filterItems: filterItems, compare: compare};
