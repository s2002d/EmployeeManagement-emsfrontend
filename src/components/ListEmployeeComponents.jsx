import React, { useEffect, useState } from 'react'
import { listEmployees , deleteEmployee} from '../Services/EmployeeService'
import { useNavigate } from 'react-router-dom'

function ListEmployeeComponents() {

    // const dummyData = [
    //     {
    //         "id":1,
    //         "firstName":"Sujan",
    //         "lastName":"Darshana",
    //         "email":"sd21@gmail.com"
    //     },
    //     {
    //         "id":2,
    //         "firstName":"Sujan",
    //         "lastName":"Darshana",
    //         "email":"sd21@gmail.com" 
    //     },
    //     {
    //          "id":3,
    //         "firstName":"Sujan",
    //         "lastName":"Darshana",
    //         "email":"sd21@gmail.com"
    //     },
    //     {
    //          "id":4,
    //         "firstName":"Sujan",
    //         "lastName":"Darshana",
    //         "email":"sd21@gmail.com"
    //     }
    // ]


    const [employees, setEmployees] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, [])


    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }


    function addnewEmployee() {
        navigator('/add-employee');
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id) {
        console.log(id);
        deleteEmployee(id).then((response) => {
            getAllEmployees();
        }).catch(error => {
            console.error(error);
        })
    }



    return (
        <div>
            <h1 className='text-center'>List of Employee</h1>
            <button className='btn btn-primary mb-2' onClick={addnewEmployee}>Add Employee</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>
                                        Update
                                    </button>

                                    <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)}>
                                        Delete
                                    </button>
                                </td>

                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponents