var React=require('react');
var ReactDOM=require('react-dom');
var Weather=require('./component/Weather.js');
var Navbar=require('./component/Navbar.js');
var Home=require('./component/Home.js');
var About=require('./component/About.js');
var {hashHistory,Route,Router,IndexRoute}=require('react-router');
var Moviezone=React.createClass(
      {

         render:function(){

                return(<div>
                        <Navbar/>

                        <br/><br/><br/>
                        {this.props.children}
                     </div>)
          }
      })

ReactDOM.render(<Router history={hashHistory}>
                    <Route path='/' component={Moviezone}>
                            <IndexRoute component={Home}/>
                            <Route path='/home' component={Home}/>
                            <Route path='/weather' component={Weather}/>                            
                            <Route path='/about/:aboutId' component={About}/>
                    </Route>

                </Router>,document.getElementById('app'));
