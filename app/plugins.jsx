/* eslint no-extra-parens: 0 */
'use strict';

require('whatwg-fetch');
const React = require('react');
const {filterItems, compare} = require('./utils');

const Body = React.createClass({
  getInitialState() {
    return {
      plugins: [],
      search: '',
    };
  },

  componentWillMount() {
    fetch('/plugins.json')
      .then(res => res.json())
      .then(({plugins}) => this.setState({plugins}));
  },

  handleKeyUp(e) {
    this.setState({search: e.target.value});
  },

  filteredPlugins() {
    const {plugins, search} = this.state;
    return filterItems(plugins, search, [
      'name', 'url', 'category', 'subcategory', 'description',
    ]);
  },

  groupedPlugins() {
    const plugins = this.filteredPlugins();

    // FIXME: Simplify that shit. Defenitely it might be implemented easier
    const groupedObj = plugins.reduce((memo, plugin) => {
      if (!memo[plugin.category]) {
        memo[plugin.category] = {};
      }

      if (!memo[plugin.category][plugin.subcategory]) {
        memo[plugin.category][plugin.subcategory] = [];
      }

      memo[plugin.category][plugin.subcategory].push(plugin);
      return memo;
    }, {});

    return Object.keys(groupedObj).map(category => {
      return {
        category,
        subcategories: Object.keys(groupedObj[category]).map(subcategory => ({
          subcategory,
          plugins: groupedObj[category][subcategory],
        })),
      };
    });
  },

  categorySortedPlugins() {
    const sorting = [
      'Compilers', 'Minifiers', 'Linters', 'Graphics', 'Others',
    ];

    return this.groupedPlugins()
      .sort(compare(sorting, 'category'));
  },

  renderFeatured() {
    const {plugins} = this.state;

    const featuredPlugins = plugins
      .filter(plug => plug.featured)
      .map(({url, name, description}, i) => (
        <li key={i}>
          <a href={url ? `https://github.com/${url}` : null} target="_blank">
            {name}
          </a>
          {' — '}
          <span dangerouslySetInnerHTML={{__html: description}} />
        </li>
      ));

    return this.state.search.length > 0 ? null : (
      <div>
        <h3>Here are some plugins to get you started:</h3>
        <ul>{featuredPlugins}</ul>
      </div>
    );
  },

  render() {
    // FIXME: Simplify this map in map in map. Too complex.
    const pluginItems = this.categorySortedPlugins().map(({category, subcategories}) => {
      const catItem = (
        <tr key={category}>
          <td colSpan={2}>
            <h4>{category}</h4>
          </td>
        </tr>
      );

      const subcatItems = subcategories.map(({subcategory, plugins}) => {
        const subcatItem = (
          <tr key={subcategory}>
            <td colSpan={2}>
              <h5>{subcategory}</h5>
            </td>
          </tr>
        );

        const pluginItems = plugins.map(({url, name, description}, i) => {
          return (
            <tr key={i}>
              <td>
                <a href={url ? `https://github.com/${url}` : null} target="_blank">
                  {name}
                </a>
              </td>
              <td dangerouslySetInnerHTML={{__html: description}} />
            </tr>
          );
        });

        return subcategory === 'undefined' ?
          pluginItems :
          [subcatItem, ...pluginItems];
      });

      return [catItem].concat(subcatItems);
    });

    return <div>
      <input
        placeholder="Type to search..."
        type="text"
        className="searchbox"
        onKeyUp={this.handleKeyUp} />
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
  },
});

module.exports = Body;
