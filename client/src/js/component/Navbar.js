var React=require('react');
var {Link}=require('react-router');
var NavLink=require('./NavLink.js');

var Navbar=React.createClass(
      {

         render:function(){

                return(
                  <div className="container-fluid" id="cont">
                  	<div className="row">
                  		<div className="col-md-12">
                  			<ul className="nav nav-tabs">
                  				<li>
                  					<NavLink to="/home">Home</NavLink>
                  				</li>
                  				<li>
                  					<NavLink to="/weather">Weather Forecast</NavLink>
                  				</li>
                          <li>
                            <Link  to="/about/Bangalore">About Bangalore</Link>
                          </li>
                          <li>
                            <Link to="/about/Weather">About Weather Forecast</Link>
                          </li>

                  			</ul>
                  		</div>
                  	</div>
                  </div>
                )
          }
      })

module.exports=Navbar;
