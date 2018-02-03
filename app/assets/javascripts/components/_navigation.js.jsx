class Navigation extends React.Component {
  constructor(props) {
    super(props);
  } 
  render() {
    return (
      <div className="">
			  <li>
			    <a href="students#/">	
					Listado
				</a>
			  </li>
			  <li>
			    <a href="students#/add">	
				 Agregar estudiante
				</a>
			  </li>
        </div>
    );
  }
}