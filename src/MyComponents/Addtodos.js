import React, {useState} from 'react';

export const Addtodos = (props) => {
    const [title, settitle] = useState("");
    const [des, setdes] = useState("");

    const submit= (e)=>{
        e.preventDefault();
        if(!title || !des) {
            alert("Title or Description cannot be empty");
        }
        else{
            props.addtodo(title, des);
            settitle("");
            setdes("");
        }

    }

    return (
        <div className="container">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" onChange={(e)=>settitle(e.target.value )} value={title} id="title" aria-describedby="textHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="des"  className="form-label">Description</label>
                    <input type="text" className="form-control" onChange={(e)=>setdes(e.target.value )} value={des} id="des"/>
                </div>
                
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
            <hr/>
        </div>
    )
}
