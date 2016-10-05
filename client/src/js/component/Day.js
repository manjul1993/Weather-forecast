var React=require('react');
//var Movieposter=require('./Movieposter.js');
//var Moviedesc=require('./Moviedesc.js');

var Day=React.createClass(
      {
        callIt:function(){
          console.log("goingin");
                    var jsonData= {
                                  temp:this.props.temp,
                                  max:this.props.max,
                                  min:this.props.min,
                                  date:this.props.date,
                                  hpa:this.props.hpa,
                                  sea:this.props.sea};
                                    $.ajax({
                                          url: 'http://localhost:8085/weather/day',
                                          dataType: 'json',
                                          type: 'POST',
                                          data:jsonData,
                                          cache: false,
                                          success: function(d) {
                                            console.log("success");
                                          alert("saved to database as");
                                          }.bind(this),
                                          error: function(xhr, status, err) {
                                          console.error(this.props.url, status, err.toString());
                                          }.bind(this)
                                          });

                  },
         render:function(){

                return(
                <div className = "container" id="movie">
                    <div className="jumbotron">
                    <div class="row">
                            		<div class="col-md-6">
                                <div classNames="page-header">
                                  <h1>
                                    {this.props.date}     <small>Humidity is {this.props.humid}</small>
                                  </h1>
                                </div>
                            		</div>
                            		<div class="col-md-6">
                                <div className="list-group">
                                   <a href="#" className="list-group-item active">Temperature is {this.props.temp}</a>
                                <div className="list-group-item">
                                    <h4 className="list-group-item-heading">
                                      Minimum Temperature : {this.props.min}
                                    </h4>
                                  </div>
                                  <div className="list-group-item">
                                    <h4 className="list-group-item-heading">
                                      Minimum Temperature : {this.props.max}
                                    </h4>
                                  </div>
                                  <div className="list-group-item">
                                    <span className="badge">{this.props.cloud.all}</span>Cloud Cover

                                  </div>
                                  <div className="list-group-item">

                                    <span className="badge pull">{this.props.wind.deg}</span>Wind Speed : {this.props.wind.speed} mph

                                  </div>
                                  <div className="list-group-item">
                                    <span className="badge">{this.props.hpa}</span>Ground Level
                                  </div>
                                  <div className="list-group-item">
                                    <span className="badge">{this.props.sea}</span>Sea Level
                                  </div>
                                  <button type="button" class="btn btn-default active" onClick={this.callIt}>Save it</button>
                              </div>
                            	</div>
                            </div>
                       </div>
                     </div>)
          }
      })

module.exports=Day;
