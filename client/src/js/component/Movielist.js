var React=require('react');
var Movie=require('./Movie.js');


var Movielist=React.createClass(
      {
         render:function(){
           var movieNodes = this.props.jsonData.map(function(movie) {
                                console.log(movie);

                         return (
                           <Movie  m={movie} title={movie.Title} key={movie.imdbID} imdbId={movie.imdbID} y={movie.Year} src={movie.Poster}>
                           </Movie>//end to list of movies
                         );
                       });

                    return(
                    <div className="movieList">
                    {movieNodes}
                     </div>)
          }
      })

module.exports=Movielist;
