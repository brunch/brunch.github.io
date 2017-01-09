require('whatwg-fetch');
var utils = require('./utils');
var filterItems = utils.filterItems;
var compare = utils.compare;

var Body = createClass({
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
    return filterItems(plugins, search, ['name', 'url', 'category', 'subcategory', 'description']);
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

    catPlugins = catPlugins.map(function(cat) {
      return {
        category: cat.category,
        subcategories: cat.subcategories.sort(subSorting[cat.category] || [], 'subcategory')
      };
    });

    return catPlugins.sort(compare(sorting, 'category'));
  },

  renderFeatured: function() {
    var featuredPlugins = this.state.plugins.filter(function(plug) { return plug.featured; });
    var featuredItems = featuredPlugins.map(function(plugin, i) {
      var fullURL = plugin.url ? "https://github.com/" + plugin.url : null;

      return <li key={i}>
        <a href={fullURL} target="_blank">{plugin.name}</a> — <span dangerouslySetInnerHTML={{__html: plugin.description}} />
      </li>;
    });
    return this.state.search.length > 0 ? null : <div>
      <h3>Here are some plugins to get you started:</h3>
      <ul>{featuredItems}</ul>
    </div>;
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
      <input placeholder="Type to search..." type="text" className="searchbox" onKeyUp={this.handleKeyUp}/>
      {this.renderFeatured()}
      <table className="data-table">
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
