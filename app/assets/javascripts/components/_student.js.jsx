class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: ''
    };
  }
  componentDidMount() {
    $.getJSON('/students/'+$.urlParam('student_id')+'.json', (response) => { 
      console.log(response);
      this.setState({ student: response}) 
    });
  } 
  render() {
    const student = []
    if (this.state.student != '' ){
      console.log(this.state.student);
      student.push(
          <p>
            <strong>Nombre: </strong>
            {this.state.student.name}
          </p>
      );
      
    }
    return (
      <div>
      	{student}
      </div>
    );
  }
}