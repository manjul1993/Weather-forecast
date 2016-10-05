var React=require('react');
var Weatherfore=require('./Weatherfore.js');
//var Movielist=require('./Movielist.js');
var Weather=React.createClass(
      {
         render:function(){

                return(<div>
                  <h1>Weather of Bangalore</h1>
                  <Weatherfore data={this.props.data}></Weatherfore>
                     </div>)
          }
      })

module.exports=Weather;
