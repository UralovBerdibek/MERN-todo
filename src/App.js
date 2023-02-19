import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';

function App() {

  const [contact, setContact] = useState({
    name: '',
    email: '',
    number: ''
  })
  const [contacts, setContacts] = useState([
    {
      _id: '',
      name: '',
      email: '',
      number: ''
    }
  ])

  const handleChange = (e) =>{
    const {name, value} = e.target
    setContact(prev => {
      return{
        ...prev,
        [name]: value
      }
    });
  }

  const submitHandler =(e) => {
    e.preventDefault()
    const {name, email, number} = contact
    const newContact = {
      name,
      email,
      number
    }
    axios.post("http://localhost:5000/newContact/", newContact)
    toast.success("Contact student was addedd succesfully")
    setContact({
      name: '',
      email: '',
      number: ''
    })
  }

  useEffect(() => {
    fetch('http://localhost:5000/contacts/')
      .then((res) => {
        if(res.ok){
          return res.json()
        }
      })
      .then(result => setContacts(result))
      .catch(err => console.log(err))
  }, [contacts])

  const deleteContact = (id) => {
    axios.delete('http://localhost:5000/delete/'+id)
    toast.error("Contact was deleted succesfully")
  }

  return (
    <div className="container">
      <ToastContainer />
      <Navbar />
      <form className="w-50 m-auto">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Enter Your Name</label>
          <input onChange={handleChange} name="name" value={contact.name} type="text" id="name" className="form-control"></input>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Enter Your Email</label>
          <input onChange={handleChange} name="email" value={contact.email} type="email" id="email" className="form-control"></input>
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">Enter Your Phone Number</label>
          <input onChange={handleChange} name="number" value={contact.number} type="text" id="number" className="form-control"></input>
        </div>
        <button onClick={submitHandler} type="submit" className="btn btn-outline-secondary">Submit</button>
      </form> 
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((item, index) => {
            return(
            <tr key={item._id}>
              <th scope="row">{index + 1}</th>
              <td> {item.name} </td>
              <td> {item.email} </td>
              <td> +{item.number} </td>
              <td>
                <button onClick={() => deleteContact(item._id)} className='btn btn-outline-danger'>Delete</button>
              </td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
