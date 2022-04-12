import React, { useState } from "react";
import List from "./List";
import "./style.css";
import { uid } from "uid";

const Form = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Setiyo",
      telp: "0823404542"
    },
    {
      id: 2,
      name: "Pramono",
      telp: "875627828"
    },
  ]);

  const [isUpdate, setIsUpdate] = useState({ id: null, status: false })

  const [formData, setFormData] = useState({
    name: "",
    telp: ""
  });

  function handleChange(e) {
    let data = { ...formData };
    data[e.target.name] = e.target.value;
    setFormData(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("oke")
    let data = [...contacts]

    if (formData.name === "") {
      return false;
    }
    if (formData.telp === "") {
      return false;
    }

    if (isUpdate.status) {
      data.forEach((contact) => {
        if (contact.id === isUpdate.id) {
          contact.name = formData.name;
          contact.telp = formData.telp;
        }
      });
    }else {
      data.push({ id: uid(), name: formData.name, telp: formData.telp });
    }

    setIsUpdate({id: null, status: false})
    setContacts(data);
    setFormData({name: "", telp: ""})
  }

  function handleEdit(id){
    let data = [...contacts];
    let foundData = data.find(contact => contact.id === id);
    setFormData({name: foundData.name, telp: foundData.telp});
    setIsUpdate({id: id,status: true});
  }

  function handleDelete(id){
    let data = [...contacts];
    let filterData = data.filter(contact => contact.id !== id);
    setContacts(filterData);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="App">
            <h2 className="px-3 py-3">Form Input Data</h2>
            <form onSubmit={handleSubmit} className="px-3 py-4">
              <div className="form-group">
                <label htmlFor="">Nama</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.name}
                  name="name"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="">No. Telp</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.telp}
                  name="telp"
                />
              </div>
              <div>
                <button type="submit" className="btn btn-primary w-100 mt-3">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col">
          <h2 className="px-3 py-3"> List Data Siswa</h2>

          <List handleDelete={handleDelete} handleEdit={handleEdit} data={contacts} />
        </div>
      </div>
    </div>
  );
};

export default Form;
