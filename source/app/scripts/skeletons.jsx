var Body = React.createClass({
  getInitialState: function() {
    return {
      skeletons: [],
      search: ''
    };
  },

  componentWillMount: function() {
    var self = this;

    fetch('https://raw.githubusercontent.com/brunch/skeletons/master/skeletons.json')
      .then(function(x) { return x.json(); })
      .then(function(x) {
        self.setState({ skeletons: x.skeletons });
      });
  },

  handleKeyUp: function(e) {
    this.setState({ search: e.target.value });
  },

  filteredSkeletons: function() {
    var skeletons = this.state.skeletons;
    var search = this.state.search;

    var searchRes = search.split(' ').filter(function(expr) {
      return expr !== '';
    }).map(function(expr) {
      return new RegExp(expr, 'i');
    });

    if (searchRes.length === 0) return skeletons;

    return skeletons.filter(function(skeleton) {
      var skeletonString = [skeleton.name, skeleton.url, skeleton.alias, skeleton.technologies, skeleton.description].join(' ');
      return searchRes.every(function(searchRe) {
        return searchRe.test(skeletonString);
      });
    });
  },

  render: function() {
    var skeletonItems = this.filteredSkeletons().map(function(skeleton, i) {
      var fullURL = "https://github.com/" + skeleton.url;

      return <tr key={i}>
        <td><a href={fullURL} target="_blank">{skeleton.title}</a></td>
        <td><code>{skeleton.url}</code></td>
        <td><code>{skeleton.alias || '-'}</code></td>
        <td>{skeleton.technologies}</td>
        <td dangerouslySetInnerHTML={{__html: skeleton.description}} />
      </tr>;
    });
    return <div>
      <input type="text" style={{width: '100%', fontSize: '30px', padding: '5px 10px', margin: '0 0 20px 0'}} onKeyUp={this.handleKeyUp}/>
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
    </div>;
  }
});

module.exports = Body;
