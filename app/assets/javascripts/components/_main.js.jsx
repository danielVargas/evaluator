class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleStepChange = this.handleStepChange.bind(this);
  }
  handleStepChange(event) {
	console.log("cambio de view");
  } 
  render() {
    var Router = ReactRouter.Router;
	var Route = ReactRouter.Route;
	var Link = ReactRouter.Link;
	var IndexRoute = ReactRouter.IndexRoute;
	var IndexLink = ReactRouter.IndexLink;
	var IndexRedirect = ReactRouter.IndexRedirect;
	var hashHistory = ReactRouter.hashHistory;
	var browserHistory = ReactRouter.browserHistory;
	return (
      <div>
      	  <Navigation 
      	  	key={"main-steps"}
          />
		  <br/>
		  <Router history={hashHistory} >
		      <Route exact path="/" component={Students} onEnter={this.handleStepChange} />
		      <Route path="/add" component={AddStudent} onEnter={this.handleStepChange} />
		      <Route path="/edit" component={EditStudent} onEnter={this.handleStepChange} />
		      <Route path="/view" component={ShowStudent} onEnter={this.handleStepChange} />
		  </Router>
	</div>
    );
  }
}