var React=require('react');
var Day=require('./Day.js');
var Weatherfore=React.createClass(
      {
          render:function(){
            var weatherNodes = this.props.data.map(function(day) {
                             console.log("day"+ JSON.stringify(day));


                      return (
                        <Day date={day.dt_txt} humid={day.main.humidity} min={day.main.temp_min} max={day.main.temp_max} temp={day.main.temp} weather={this.weather} cloud={day.clouds} rain={day.rain} wind={day.wind} sea={day.main.sea_level} hpa={day.main.grnd_level}>
                        </Day>
                      );
                    });

                 return(
                 <div className="movieList">
                 {weatherNodes}
                  </div>)
       }
      })

module.exports=Weatherfore;
