import React from "react"
import menuStyles from "../styles/menu.module.scss"


export default (props) => {
  return (
      <div>
            <div className={menuStyles.container}>
            <h3 className={menuStyles.title} >{props.title}</h3>

            {
                props.items.map(item=>(
                    <ul>
                            <li>{Object.keys(item)[0]}.............${item[Object.keys(item)[0]]}</li>
                    </ul>
                ))
            }
            </div> 
      </div>
   
  )
}
