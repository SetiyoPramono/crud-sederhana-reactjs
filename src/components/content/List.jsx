import React from 'react';


const List = ({ data,handleEdit,handleDelete }) => {
    return (
        <div className='App-2'>
            <div className="list-group">
                {
                    data.map((contact) => {
                        return (
                            <div className="list-group-item list-group-item-action">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">Nama : {contact.name}</h5>
                                    <div>
                                        <button onClick={() => handleEdit(contact.id)} className="btn btn-primary m-1" type="button">Edit</button>
                                        <button onClick={() => handleDelete(contact.id)} className="btn btn-danger " type="button">Del</button>
                                    </div>
                                </div>
                                <p className="mb-1">Telp : {contact.telp}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default List