import React from 'react'

const Info = (props) => {
    return (
        <div className="container info">
            <hr/>
                <h3>{props.station}</h3>
                    <div className="d-flex justify-content-between">
                        <div>
                            <h3>Direction : {props.data[0].destination}</h3>
                            <p>{props.data[0].message}</p>
                            <p>{props.data[1].message}</p>
                        </div>
                        <div>
                            <h3>Direction : {props.data[4].destination}</h3>
                            <p>{props.data[4].message}</p>
                            <p>{props.data[5].message}</p>
                        </div>
                    </div>
            <hr/>
        </div>
    )
}

export default Info;