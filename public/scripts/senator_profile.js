
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



var SenatorProfile = React.createClass({
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
      var party = "";
      if (this.state.data.party == "R"){
        party = "Republican";
      }

      if (this.state.data.party == "D"){
        party = "Democrat";
      }

      if(this.state.data.party == "I"){
        party = "Independent";
      }

      if (typeof this.state.data.factChecks == 'undefined') {
        return <div className ="senatorProf">
          <h3>Senator Name: {this.state.data["first_name"]} {this.state.data["last_name"]}</h3>
          <p>Party: {party}</p>
          <p>State Senator of: {this.state.data.state} </p>
          <p>FEC ID: {this.state.data.id}</p>
          <hr />
        </div>
      }
      if(this.state.data.factChecks.length == 0 ){
        return (<div><p>Sorry, no image available</p></div>);
      }
      var photo =  this.state.data.factChecks[0]["speaker"]["canonical_photo"];

      return (
      <div className ="senatorProf">
        <img src={photo}/>
        <h3>Senator Name: {this.state.data["first_name"]} {this.state.data["last_name"]}</h3>
        <p>Party: {party}</p>
        <p>State Senator of: {this.state.data.state} </p>
        <p>FEC ID: {this.state.data.id}</p>
        <hr />
      </div>
      );
    }
});


ReactDOM.render(
  <SenatorProfile />,
  document.getElementById('senatorProf')
);




var SenatorScore = React.createClass({
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

    render:function(){

      if (typeof this.state.data['currentScore'] == 'undefined') {
        return <div className ="senatorScore">
          <p>Sorry, no scoring data</p>
        </div>

      }

      console.log(this.state.data['currentScore']['Absentee']);
      var liar= "";

      if (this.state.data['currentScore']['Liar']['Liar, but not like a LIAR-liar'])
      {
        liar = "For sure";
      }else{
        partisan = "Nope";
      }
      var absent = "";

      if(this.state.data['currentScore']['Absentee']){
        absent = "Nope. The senator is active in the senate";
      }else{
        absent = "Oh Yeah. This senator is not around much";
      }

      var partisan = "";
      if(this.state.data['currentScore']['Partisan']){
        partisan = "For sure";
      }else{
        partisan = "Nope";
      }

      return(
        <div className = "sentatorScore">
          <p>Is the Senator a Liar?: {liar}</p>
          <p>Is the Senator Absentee?: {absent}</p>
          <p>Is the Senator Partisan?: {partisan}</p>
          <hr />
        </div>
      );

    }
});

ReactDOM.render(
  <SenatorScore />,
  (document.getElementById('scoreBoard'))
);


var SenatorContact = React.createClass({
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

    render:function(){
      console.log(this.state.data['twitter_account']);

      var twitterAct = "";
      var twitterHref= "#";
      if(this.state.data['twitter_account'])
      {
        twitterAct = "@" + this.state.data['twitter_account'];
        twitterHref = "http://twitter.com/"+ this.state.data['twitter_account'];
      }else{
        twitterAct = "No twitter data available";

      }


      return(
        <div className = "senContact">
          <p>Tweet at the senator with hate (or love, we guess): <a href={twitterHref}>{twitterAct} </a></p>

          <hr />
        </div>
      );

    }
});

ReactDOM.render(
  <SenatorContact />,
  (document.getElementById('senatorContact'))
);



var VotingData = React.createClass({
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
      return(
        <div className = "votingData">
          <p>Votes with Party: {this.state.data["votes_with_party_pct"]}% </p>
          <p>Total Votes: {this.state.data["total_votes"]}</p>
          <p>Missed Votes Percentage: {this.state.data["missed_votes_pct"]}%</p>
          <p>Missed Votes: {this.state.data["missed_votes"]}</p>
          < hr/>
      </div>
      );

    }
  });

  ReactDOM.render(
    <VotingData />,
    document.getElementById('votingData')
  );









var SenatorLies= React.createClass({
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
      if (typeof this.state.data.factChecks == 'undefined') {
        return <div> Waiting on Data</div>
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
            var truthOrLie = fact["ruling"]['ruling'];
            var truthOrLieImg = fact["ruling"]["canonical_ruling_graphic"];



            return(
              <div key={fact['_id']} className = "lies-info">
                <h1>Headline: {headline}</h1>
                <p> {truthOrLie}</p>
                <img src={truthOrLieImg} />
                <p> Statement: {statement}</p>
              </div>
            );
          })
        }
        </div>
      );
    }
});

ReactDOM.render(
  <SenatorLies />,
  document.getElementById('senatorLies')
);
