class Students extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    $.getJSON('/students.json', (response) => { this.setState({ students: response }) });
  }
  handleDelete(event) {
    
    event.preventDefault();
    $.ajax({
        url: '/students/'+ event.target.id,
        type: 'DELETE',
        success: function(result) {
          alertify.success('Se ha eliminado correctamente.');
            // Do something with the result
        },
        error: function(result) {
          alertify.error('Ha ocurrido un error.');
            // Do something with the result
        }
    });
    $.getJSON('/students.json', (response) => { this.setState({ students: response }) });
  } 
  render() {
  
    const students = []
    if (this.state.students.length > 0){
      this.state.students.forEach((student) => {
        students.push(
          <tr key={student.id} >
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>
              <a href={"students#/edit?student_id="+ student.id}>
               Editar estudiante
              </a>
            </td> 
            <td>
              <a href={"students#/view?student_id="+ student.id}>
              Ver estudiante
              </a>
            </td>
            <td>
              <a href="#" onClick={this.handleDelete} id={student.id}>
              Eliminar estudiante
              </a>
            </td>
            
          </tr>
        );
      });
      
    }
    return (
      <div>
        <h1>Estudiantes</h1>
        <table className="table table-striped table-responsive">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th colSpan="3"></th>
            </tr>
          </thead>
          <tbody>
            {students}
          </tbody>
        </table>
      </div>
    );
  }
}