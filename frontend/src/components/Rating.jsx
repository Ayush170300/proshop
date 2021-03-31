import React from 'react'

const Rating = ({value,text}) => {
    return (
        <div>
            <span style={{color:"gold"}}>
                {value>=1?<i className="fas fa-star"></i>:value>=0.5?<i className="fas fa-star-half-alt"></i>:<i className="far fa-star"></i>}
            </span>
            <span style={{color:"gold"}}>
                {value>=2?<i className="fas fa-star"></i>:value>=1.5?<i className="fas fa-star-half-alt"></i>:<i className="far fa-star"></i>}
            </span>
            <span style={{color:"gold"}}>
                {value>=3?<i className="fas fa-star"></i>:value>=2.5?<i className="fas fa-star-half-alt"></i>:<i className="far fa-star"></i>}
            </span>
            <span style={{color:"gold"}}>
                {value>=4?<i className="fas fa-star"></i>:value>=3.5?<i className="fas fa-star-half-alt"></i>:<i className="far fa-star"></i>}
            </span>
            <span style={{color:"gold"}}>
                {value>=5?<i className="fas fa-star"></i>:value>=4.5?<i className="fas fa-star-half-alt"></i>:<i className="far fa-star"></i>}
            </span>
            <span>{text?text:""}</span>
        </div>
    )
}

export default Rating
