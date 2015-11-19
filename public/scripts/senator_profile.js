
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

var Senator1Vote= React.createClass({
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
          if(this.isMounted()){
            this.setState({data: data});
          }
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },
    render: function(){
      console.log(this.state);
      if (typeof this.state.data.factChecks == 'undefined') {
        return <div> No data bro</div>
      }
      if(this.state.data.factChecks.length == 0 ){
        return (<div><p>Sorry, no factcheck data</p></div>);
      }
      var facts =  this.state.data.factChecks;

      return (
        <div className="factHolder">
        {
          facts.map(function(fact){
            var headline = fact['ruling_headline'];
            var statement = fact['statement'];



            return(
              <div key={fact['_id']} className = "fact-info">
                <h1>{headline}</h1>
                <p>{statement}</p>
                <br />
              </div>
            );
          })
        }
        </div>
      );
    }
});

ReactDOM.render(
  <Senator1Vote />,
  document.getElementById('senator1Vote')
);
