var React=require('react');
var Movieposter=require('./Movieposter.js');
var Moviedesc=require('./Moviedesc.js');

var Movie=React.createClass(
      {


          callIt:function(){

                            $.ajax({
                                  url: 'http://localhost:8080/movie/add',//Ajax call to save favourite movies in the data
                                  dataType: 'json',
                                  type: 'POST',
                                  cache: false,
                                  data: this.props.m,
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
                        <div className = "row">
                          <Movieposter src={this.props.src}></Movieposter>
                          <Moviedesc title={this.props.title} imdbId={this.props.imdbId} y={this.props.y} ></Moviedesc>
                          <button type="button"  className="btn btn-info" onClick={this.callIt}>Add to Favourites</button>
                          </div>
                       </div>
                     </div>)
          }
      })

module.exports=Movie;
