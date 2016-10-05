var React=require('react');
var Weatherfore=require('./Weatherfore.js');
//var Movielist=require('./Movielist.js');
var Weather=React.createClass(
      {
        getInitialState: function() {
              return {jsonData:[]};
 },
        getDefaultProps:function(){
          return{url:'http://api.openweathermap.org/data/2.5/forecast/city?id=1277333&APPID=f26e13300695b52c685811eb18a876d5'};
        },
        searchit:function(arg1){
          $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'GET',
        success: function(data) {
          console.log(data);
          this.setState({jsonData:data.list});
          console.log(JSON.stringify(this.state.jsonData));
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
        },
         render:function(){

                return(<div>
                  <div className="head">
                            <h1> Weather of Bangalore</h1>
                            </div>
                            <button type="button" class="btn btn-default btn-lg active" onClick={this.searchit}>Show Weather</button>                          
                            <Weatherfore data={this.state.jsonData}></Weatherfore>
                     </div>)
          }
      })

module.exports=Weather;
