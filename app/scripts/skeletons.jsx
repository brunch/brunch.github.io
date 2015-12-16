var Body = React.createClass({
  getInitialState: function() {
    return { skeletons: [] };
  },

  componentWillMount: function() {
    var self = this;

    fetch('/skeletons.json')
      .then(function(x) { return x.json(); })
      .then(function(x) {
        self.setState({ skeletons: x.skeletons });
      });
  },

  render: function() {
    var skeletonItems = this.state.skeletons.map(function(skeleton, i) {
      var fullURL = "https://github.com/" + skeleton.url;

      return <tr key={i}>
        <td><a href={fullURL} target="_blank">{skeleton.name}</a></td>
        <td><code>{skeleton.url}</code></td>
        <td>{skeleton.technologies}</td>
        <td>{skeleton.description}</td>
      </tr>;
    });
    return <div>
      <table style={{border: "1px solid black"}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>URL</th>
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
