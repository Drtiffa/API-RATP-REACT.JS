import React from 'react'

const Input = (props) => {
    return (
            <div className="input-group input-group-sm mb-3">
                <input onChange={props.input} type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                <button onClick={props.btnF} className="btn btn-primary">GO !</button>
            </div>
    )
}

export default Input;