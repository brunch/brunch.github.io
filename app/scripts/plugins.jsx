var Body = React.createClass({
  getInitialState: function() {
    return {
      plugins: [],
      search: ''
    };
  },

  componentWillMount: function() {
    var self = this;

    fetch('/plugins.json')
      .then(function(x) { return x.json(); })
      .then(function(x) {
        self.setState({ plugins: x.plugins });
      });
  },

  handleKeyUp: function(e) {
    this.setState({ search: e.target.value });
  },

  filteredPlugins: function() {
    var plugins = this.state.plugins;
    var search = this.state.search;

    var searchRes = search.split(' ').filter(function(expr) {
      return expr !== '';
    }).map(function(expr) {
      return new RegExp(expr, 'i');
    });

    if (searchRes.length === 0) return plugins;

    return plugins.filter(function(plugin) {
      var pluginString = [plugin.name, plugin.url, plugin.category, plugin.subcategory, plugin.description].join(' ');
      return searchRes.every(function(searchRe) {
        return searchRe.test(pluginString);
      });
    });
  },

  groupedPlugins: function() {
    var plugins = this.filteredPlugins();

    var groupedObj = plugins.reduce(function(memo, plugin) {
      if (!memo[plugin.category]) {
        memo[plugin.category] = {};
      }

      if (!memo[plugin.category][plugin.subcategory]) {
        memo[plugin.category][plugin.subcategory] = [];
      }

      memo[plugin.category][plugin.subcategory].push(plugin);
      return memo;
    }, {});

    return Object.keys(groupedObj).map(function(category) {
      return {
        category: category,
        subcategories: Object.keys(groupedObj[category]).map(function(subcategory) {
          return {
            subcategory: subcategory,
            plugins: groupedObj[category][subcategory]
          };
        })
      };
    });
  },

  categorySortedPlugins: function() {
    var sorting = ['Compilers', 'Minifiers', 'Linters', 'Graphics', 'Others'];
    var subSorting = { 'Compilers': ['Script languages', 'Style languages', 'Pre-compiled templates'] };

    var catPlugins = this.groupedPlugins();

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

    catPlugins = catPlugins.map(function(cat) {
      return {
        category: cat.category,
        subcategories: cat.subcategories.sort(subSorting[cat.category] || [], 'subcategory')
      };
    });

    return catPlugins.sort(compare(sorting, 'category'));
  },

  render: function() {
    var pluginItems = this.categorySortedPlugins().map(function(category) {
      var catItem = <tr key={category.category}><td colSpan={2}><h4>{category.category}</h4></td></tr>;

      var subcatItems = category.subcategories.map(function(subcategory) {
        var subcatItem = <tr key={subcategory.subcategory}><td colSpan={2}><h5>{subcategory.subcategory}</h5></td></tr>;

        var pluginItems = subcategory.plugins.map(function(plugin, i) {
          var fullURL = plugin.url ? "https://github.com/" + plugin.url : null;

          return <tr key={i}>
            <td><a href={fullURL} target="_blank">{plugin.name}</a></td>
            <td dangerouslySetInnerHTML={{__html: plugin.description}} />
          </tr>;
        });

        return (subcategory.subcategory !== 'undefined' ? [subcatItem] : []).concat(pluginItems);
      })

      return [catItem].concat(subcatItems);
    });

    return <div>
      <input type="text" style={{width: '100%', fontSize: '30px', padding: '5px 10px', margin: '0 0 20px 0'}} onKeyUp={this.handleKeyUp}/>
      <table style={{border: "1px solid black"}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {pluginItems}
        </tbody>
      </table>
    </div>;
  }
});

module.exports = Body;
