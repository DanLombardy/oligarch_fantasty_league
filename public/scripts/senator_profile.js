/*var SenatorFinances = React.createClass({


  render:function(){
    return (
      <ul>
        <li> Total Contributions: {financeData["total_contributions"]}</li>
        <li>Total  Pacs: {financeData["total_from_pacs"]} </li>
        <li>Total  Individuals: {financeData["total_from_individuals"]}</li>
        <li><a href={financeData["fec_uri"]}> For more info</a></li>
      </ul>
    )
  }
});

ReactDOM.render(
  <SenatorFinances />,
  document.getElementById('content')
);
*/

var TotalProfile = React.createClass({
    getInitialState: function(){
      return {data: "filler"};
    },
    componentDidMount: function(){
      $.ajax({
        url: '/api/senator',
        dataType: 'json',
        cache: false,
        success: function(data) {
          console.log("it was a success!")
          this.setState({data: data});
          console.log(this.state);
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },
    render: function(){

      return (
        <ul>
          <li>The senators state is: {this.state.data[0]['twitter_account']}</li>
        </ul>
      );
    }
});

ReactDOM.render(
  <TotalProfile />,
  document.getElementById('content')
);
