class Student extends React.Component {
  constructor(props) {
    super(props);
  } 
  render() {
    return (
      <tr key={this.props.student.id} >
            <td>{this.props.student.id}</td>
            <td>{this.props.student.name}</td>
            <td>
              <a href={"students#/edit?student_id="+ this.props.student.id}>
               Editar estudiante
              </a>
            </td> 
            <td>
              <a href={"students#/view?student_id="+ this.props.student.id}>
              Ver estudiante
              </a>
            </td>
            <td>
              <a href="#" onClick={this.props.handleDelete} id={this.props.student.id}>
              Eliminar estudiante
              </a>
            </td>
            
       </tr>
    );
  }
}