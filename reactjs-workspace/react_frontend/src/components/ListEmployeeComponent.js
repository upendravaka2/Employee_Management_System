import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';

export default class ListEmployeeComponent extends Component {

        constructor(props)
        {
            super(props);

            //declare the state
            this.state={
                employees:[]
            }
        }

        componentDidMount(){
                    EmployeeService.getEmployees().then((res)=>
                    {
                        this.setState({employees:res.data})
                    })
        }

        deleteEmployee=(employeeId)=>
        {
            EmployeeService.deleteEmployee(employeeId).then(res=>
            {
                EmployeeService.getEmployees().then((res)=>
                {
                this.setState({employees:res.data})
                })
            }
            ).catch(error=>
            {
                console.log(error)
            }
            )
        }


  render() {
    return (
      <div>
            <h2 className='text-center'> Employee List </h2>
            <div className="row my-5 mx-3">
                <Link to="/add-employee" className='btn btn-outline-primary my-3'>Add Employee</Link>
               <table className='table table-borderd table-striped  '>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Frist Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.employees.map(
                            employee =>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <Link to={`/update-employee/${employee.id}`} className='btn btn-info'>Update</Link>
                                        <button className='btn btn-danger'style={{marginLeft:"15px"}} onClick={()=> this.deleteEmployee(employee.id)}>Delete</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
               </table>
            </div> 
      </div>
    )
  }
}
