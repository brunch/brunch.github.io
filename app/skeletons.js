/* eslint no-extra-parens: 0 */
'use strict';

require('whatwg-fetch');
const {filterItems} = require('./utils');

const Body = createClass({
  getInitialState() {
    return {
      skeletons: [],
      search: '',
    };
  },

  componentWillMount() {
    fetch('https://raw.githubusercontent.com/brunch/skeletons/master/skeletons.json')
      .then(res => res.json())
      .then(({skeletons}) => this.setState({skeletons}));
  },

  handleKeyUp(e) {
    this.setState({search: e.target.value});
  },

  filteredSkeletons() {
    const {skeletons, search} = this.state;
    return filterItems(skeletons, search, [
      'name', 'url', 'alias', 'technologies', 'description',
    ]);
  },

  render() {
    const skeletonItems = this.filteredSkeletons().map((skeleton, i) => (
      <tr key={i}>
        <td>
          <a href={`https://github.com/${skeleton.url}`} target="_blank">
            {skeleton.title}
          </a>
        </td>
        <td>
          <code>{skeleton.url}</code>
        </td>
        <td>
          <code>{skeleton.alias || '-'}</code>
        </td>
        <td>
          {skeleton.technologies}
        </td>
        <td dangerouslySetInnerHTML={{__html: skeleton.description}} />
      </tr>
    ));

    return (
      <div>
        <input
          placeholder="Type to search... It could be a technology name or anything, really"
          type="text"
          className="searchbox"
          onKeyUp={this.handleKeyUp} />
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>URL</th>
              <th>Alias</th>
              <th>Technologies</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {skeletonItems}
          </tbody>
        </table>
      </div>
    );
  },
});

module.exports = Body;
