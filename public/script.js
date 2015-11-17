 console.log("this is running");
var StateSelect = React.createClass({
  render: function(){
    return (
      <form>
          <select name="senators">
            <option value="Ohio"> Ohio</option>
            <option value="Washington"> Washington</option>
            <option value="North Dakota">North Dakota</option>
         </select>
         <br />
         <input type="submit" value="submit" />
      </form>
    )
  }

});




ReactDOM.render(
  <StateSelect />,
  document.getElementById('content')
);
