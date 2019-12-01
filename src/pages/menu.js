import React from "react"
import Layout from "../components/layout"
import Menu from "../components/menu"
import menuStyles from "../styles/menuList.module.scss"

const MenuPage = () => {
  return (
    <Layout>
      <div className={menuStyles.row1} >
        <div className={menuStyles.item1}>
            <Menu title="Brochettes Combos" items={[{"Tongue brochette+Side+Salad":19},{"Beef brochette+Side+Salad ":15},{"Goat brochette+Side+Salad":10}]}/> 
        </div>
        <div className={menuStyles.item2} >
            <Menu title="Combos" items={[{"1/4 Chicken+ Side+Salad":15},{"Tilapia/Thomson":25},{"Salmon with boiled potatoes":25},{"Hamburger+French Fries":10}]}/> 
        </div>
      </div>
        <div className={menuStyles.row2}>
          <div className={menuStyles.item3}>
              <Menu title="Salad" items={[{"Mixed veggies":5.99},{"Chef salad":10},{"Isombe":8.99}]}/> 
          </div>
          <div className={menuStyles.item4}>
              <Menu title="Sides" items={[{"Rice":4},{"Potatoes(Baked)":3},{"Bananas(Green)":3},{"Bananas(Plantains)":5},{"French fries":5},{"Fufu":6.25},{"African beignets(5)":4}]}/> 
          </div>
        </div>
      
    </Layout>
  )
}

export default MenuPage
