import Heading from "../Heading";

const NewTaskView = (props) => {
	const {handleChange, handleSubmit } = props;

	return (
		<div>
			<Heading />
			<div className="root">
			<div className="formContainer">
				<div className="formTitle">
				<h2 style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
					New Task
				</h2>
				</div>
				<form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
				<label style= {{color:'#11153e', fontWeight: 'bold'}}>Description: </label>
				<input type="text" name="description" onChange ={(e) => handleChange(e)} />
				<br/>
				<br/>

				<label style={{color:'#11153e', fontWeight: 'bold'}}>Priority Level: </label>
				<input type="text" name="priority" onChange={(e) => handleChange(e)} />
				<br/>
				<br/>

				<label style={{color:'#11153e', fontWeight: 'bold'}}>Employee ID #: </label>
				<input type="text" name="employeeID" onChange={(e) => handleChange(e)} />
				<br/>
				<br/>

				<button type="submit">
					Submit
				</button>
				<br/>
				<br/>
				</form>
				</div>
			</div>
		</div>
	)
}

export default NewTaskView;