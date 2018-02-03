class EditStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: '',
      name: '',
      id: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } 
  componentDidMount() {
    $.getJSON('/students/'+$.urlParam('student_id')+'.json', (response) => { 
      console.log(response);
      this.setState({ student: response, name: response.name, id: response.id }) 
    });
  }
  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    $.ajax({
        url: '/students/'+ this.state.id,
        type: 'PUT',
        data: { name: this.state.name},
        success: function(result) {
          window.location.href = "/students#/view?student_id="+ result.id;
          alertify.success('Se ha actualizado correctamente.');
            // Do something with the result
        },
        error: function(result) {
          alertify.error('Ha ocurrido un error.');
            // Do something with the result
        }
    });
  }  
  render() {
    const student = []
    if (this.state.student != '' ){
      console.log(this.state.student);
      student.push(
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
        );
      
    }
    return (
      <div>
      	Editar estudiante
        {student}
      </div>
    );
  }
}