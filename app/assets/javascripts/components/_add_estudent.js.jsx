class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    $.post( "/students", { name: this.state.name})
      .done(function( data ) {
        window.location.href = "/students#";
        alertify.success('Se ha agregado satisgactoriamente el estudiante');     
      })
      .fail(function() {
        alertify.success('Ha ocurrido un error');     
      });
  } 
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" 
              className="form-control" 
              name="name" id="name" 
              placeholder="Nombre" 
              value={this.state.name} 
              onChange={this.handleChange} />
            <small id="emailHelp" className="form-text text-muted">Introduzca nombre completo y apellidos</small>
          </div>
          <button type="submit" className="btn btn-primary">Ingresar</button>
        </form>
      </div>
    );
  }
}