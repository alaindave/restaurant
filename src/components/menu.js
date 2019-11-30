import React from "react"
import menuStyles from "../styles/menu.module.scss"


export default (props) => {
  return (
      <div>
          <img className={menuStyles.image} src={props.image}/>
            <h3 className={menuStyles.title} >{props.title}</h3>
            <div className={menuStyles.container}>
            {
                props.items.map(item=>(
                    <ul>
                            <li>{Object.keys(item)[0]}...............{item[Object.keys(item)[0]]}</li>
                    </ul>
                ))
            }
            </div> 
      </div>
   
  )
}
