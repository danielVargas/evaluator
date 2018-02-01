class Students extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }
  componentDidMount() {
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
            {students}
          <tbody>
          </tbody>
        </table>
      </div>
    );
  }
}