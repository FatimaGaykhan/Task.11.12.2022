import React from 'react'
import { GiTrashCan } from 'react-icons/gi';
import { BiEditAlt } from 'react-icons/bi';


const HomePage = (props) => {
    const{id,name,phone}=props.userList;
  return (
    <div className='container mt-2'>
        <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col" className='text-primary'>ID</th>
      <th scope="col" className='text-primary'>Fullname</th>
      <th scope="col" className='text-primary'>Phone</th>
      <th scope="col" className='text-primary'>Edit</th>
    </tr>
  </thead>
  <tbody>
    {
        props.userList.map(user=>{
            return(
                <tr>
                   
                   <td>{user.id}</td>
                   <td>{user.name}</td>
                   <td>{user.phone}</td>
                   <td>
                    <button className='btn btn-danger me-2'><GiTrashCan/>Delete</button>
                    <button className='btn btn-success'><BiEditAlt/>Update</button>
                   </td>
                </tr>
            )
        })
    }
  </tbody>
</table>
    </div>
  )
}

export default HomePage