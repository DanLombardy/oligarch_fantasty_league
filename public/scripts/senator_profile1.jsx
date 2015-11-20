var UserForm = React.createClass({
   getInitialState: function(){
     return {
       senators: [],
     };
   },

   componentWillMount: function () {
     var setSelectedSenator = (function (senator) {
       this.setState({ selectedSenator: senator});
     }).bind(this);

     this.setState({
       setSelectedSenator: setSelectedSenator
     });
   },

   componentDidMount: function(){
     console.log('mounted state form');
   },

   handleChange: function(event) {
     console.log('selected an option');
     this.setState({selectedState: event.target.value});
     console.log("this is check1" + event.target.value);
     $.ajax({
        url: '/api/place/' + event.target.value,
        dataType: 'json',
        cache: false,
        success: function(data) {
          this.setState({senators: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
   },

   getSenatorsFromState: function() {
     console.log(this.state.selectedState);
   },

   render: function() {
     return (
       <div>
         <form>
           <select name="Select a State" onChange={this.handleChange}>
             <option>Select a State</option>
             <option value="AL">ALABAMA</option>
             <option value="AK">ALASKA</option>
             <option value="AZ">ARIZONA</option>
             <option value="AR">ARKANSAS</option>
             <option value="CA">CALIFORNIA</option>

             <option value="CO">COLORADO</option>
             <option value="CT">CONNECTICUT</option>
             <option value="DE">DELAWARE</option>
             <option value="FL">FLORIDA</option>
             <option value="GA">GEORGIA</option>

             <option value="HI">HAWAII</option>
             <option value="ID">IDAHO</option>
             <option value="IL">ILLINOIS</option>
             <option value="IN">INDIANA</option>
             <option value="IA">IOWA</option>

             <option value="KS">KANSAS</option>
             <option value="KY">KENTUCKY</option>
             <option value="LA">LOUISIANA</option>
             <option value="ME">MAINE</option>
             <option value="MD">MARYLAND</option>

             <option value="MA">MASSACHUSETTS</option>
             <option value="MI">MICHIGAN</option>
             <option value="MN">MINNESOTA</option>
             <option value="MS">MISSISSIPI</option>
             <option value="MO">MISSOURI</option>

             <option value="MT">MONTANA</option>
             <option value="NE">NEBRASKA</option>
             <option value="NV">NEVADA</option>
             <option value="NH">NEW HAMPSHIRE</option>
             <option value="NJ">NEW JERSEY</option>

             <option value="NM">NEW MEXICO</option>
             <option value="NY">NEW YORK</option>
             <option value="NC">NORTH CAROLINA</option>
             <option value="ND">NORTH DAKOTA</option>
             <option value="OH">OHIO</option>

             <option value="OK">OKLAHOMA</option>
             <option value="OR">OREGON</option>
             <option value="PA">PENNSYLVANIA</option>
             <option value="RI">RHODE ISLAND</option>
             <option value="SC">SOUTH CAROLINA</option>

             <option value="SD">SOUTH DAKOTA</option>
             <option value="TN">TENNESSEE</option>
             <option value="TX">TEXAS</option>
             <option value="UT">UTAH</option>
             <option value="VT">VERMONT</option>

             <option value="VA">VIRGINIA</option>
             <option value="WA">WASHINGTON</option>
             <option value="WV">WEST VIRGINIA</option>
             <option value="WI">WISCONSIN</option>
             <option value="WY">WYOMING</option>
           </select>
         </form>

         <h1>{this.state.selectedState} </h1>
         <GetSenators senators={this.state.senators} setSelectedSenator={this.state.setSelectedSenator}/>
         {
           (function () {
             if (this.state.selectedSenator !== undefined) {
               return <SenatorProfile selectedSenator={this.state.selectedSenator} />

             }
           }).bind(this)()
         }

         {
           (function () {
             if (this.state.selectedSenator !== undefined) {
               return <SenatorContact selectedSenator={this.state.selectedSenator} />

             }
           }).bind(this)()
         }


         {
           (function () {
             if (this.state.selectedSenator !== undefined) {
               return <SenatorScore selectedSenator={this.state.selectedSenator} />
             }
           }).bind(this)()
         }


         {
           (function () {
             if (this.state.selectedSenator !== undefined) {
               return <VotingData selectedSenator={this.state.selectedSenator} />
             }
           }).bind(this)()
         }

         {
           (function () {
             if (this.state.selectedSenator !== undefined) {
               return <SenatorLies selectedSenator={this.state.selectedSenator} />
             }
           }).bind(this)()
         }


       </div>
     );
   }
});

var GetSenators = React.createClass({
  getInitialState: function(){
    return {selectedSenator : ""}
  },

  selectChange: function(event) {
    this.props.setSelectedSenator(this.props.senators[event.target.value]);
  },

 render: function() {
   console.log("from in get senators" + this.props.senators);

   if (typeof this.props.senators == 'undefined' || this.props.senators.length === 0) {
     return <div className ="selectSenator">
       <p>Sorry, no senators selected yet</p>
     </div>
   }

   return (
    <div>
      <form>
        <select name="Select a Senator" onChange={this.selectChange}>
          <option> --- Nothing Selected --- </option>
          {
            this.props.senators.map(function (senator, index) {
              return <option key={index} value={index}>{senator["first_name"]} {senator["last_name"]}</option>
            })
          }
        </select>
      </form>
    </div>
   );
 }

});


//*********** PROFILE COMPONENT *******************

var SenatorProfile = React.createClass({

    render: function(){
      var party = "";
      if (this.props.selectedSenator.party == "R"){
        party = "Republican";
      }

      if (this.props.selectedSenator.party == "D"){
        party = "Democrat";
      }

      if(this.props.selectedSenator.party == "I"){
        party = "Independent";
      }

      if(this.props.selectedSenator.factChecks.length == 0 ){
        return <div className ="senatorProf">
          <h3>Senator Name: {this.props.selectedSenator["first_name"]} {this.props.selectedSenator["last_name"]}</h3>
          <p>Party: {party}</p>
          <p>State Senator of: {this.props.selectedSenator.state} </p>
          <p>FEC ID: {this.props.selectedSenator.id}</p>
          <hr />
        </div>
      }
      var photo =  this.props.selectedSenator.factChecks[0]["speaker"]["canonical_photo"];

      return (
      <div className ="senatorProf">
        <img src={photo}/>
        <h3>Senator Name: {this.props.selectedSenator["first_name"]} {this.props.selectedSenator["last_name"]}</h3>
        <p>Party: {party}</p>
        <p>State Senator of: {this.props.selectedSenator.state} </p>
        <p>FEC ID: {this.props.selectedSenator.id}</p>
        <hr />
      </div>
      );
    }
});


//*************SENATOR CONTACT ************************
var SenatorContact = React.createClass({


    render:function(){

      var twitterAct = "";
      var twitterHref= "#";
      if(this.props.selectedSenator['twitter_account'])
      {
        twitterAct = "@" + this.props.selectedSenator['twitter_account'];
        twitterHref = "http://twitter.com/"+ this.props.selectedSenator['twitter_account'];
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




//*************SENATOR SCORING COMPONENT ***************

var SenatorScore = React.createClass({

    render:function(){

      if (typeof this.props.selectedSenator['currentScore'] == 'undefined') {
        return <div className ="senatorScore">
          <p>Sorry, no scoring data</p>
        </div>

      }

      console.log(this.props.selectedSenator['currentScore']['Absentee']);
      var liar= "";

      if (typeof this.props.selectedSenator['currentScore']['Liar'] == 'undefined')
      {
        liar = "Not enough data to tell";
      }else if(this.props.selectedSenator['currentScore']['Liar']['Liar, but not like a LIAR-liar']){
        liar = "Oh, yeah";
      }else{
        liar = "Nope";
      }
      var absent = "";

      if(this.props.selectedSenator['currentScore']['Absentee']){
        absent = "Nope. The senator is active in the senate";
      }else{
        absent = "Oh Yeah. This senator is not around much";
      }

      var partisan = "";
      if(this.props.selectedSenator['currentScore']['Partisan']){
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




//*************VOTING DATA COMPONENT ******************
var VotingData = React.createClass({
    render: function(){
      return(
        <div className = "votingData">
          <p>Votes with Party Percentage: {this.props.selectedSenator["votes_with_party_pct"]}% </p>
          <p>Total Votes: {this.props.selectedSenator["total_votes"]}</p>
          <p>Missed Votes Percentage: {this.props.selectedSenator["missed_votes_pct"]}%</p>
          <p>Missed Votes: {this.props.selectedSenator["missed_votes"]}</p>
          < hr/>
      </div>
      );

    }
  });


  //**********SENATOR LIES COMPONENT ********************

  var SenatorLies= React.createClass({

      render: function(){
        if (typeof this.props.selectedSenator.factChecks == 'undefined') {
          return <div> Waiting on Data</div>
        }
        if(this.props.selectedSenator.factChecks.length == 0 ){
          return (<div><p>Sorry, no factcheck data</p></div>);
        }
        var facts =  this.props.selectedSenator.factChecks;

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
  <UserForm />,
  document.getElementById('content')
);
