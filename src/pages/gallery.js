import React from "react"
import Layout from "../components/layout"
import food1 from "../images/food1.jpg"
import food2 from "../images/food2.jpg"
import food3 from "../images/food3.jpg"
import food4 from "../images/food4.jpeg"
import food5 from "../images/food5.jpg"
import food6 from "../images/food6.jpeg"
import imageStyles from "../styles/gallery.module.scss"



const GalleryPage = () => {
  return (
    <Layout>
      <div className={imageStyles.photoRow1}>
        <img src={food1} className={imageStyles.image1}/>
        <img src={food2} className={imageStyles.image2}/>
        <img src={food3} className={imageStyles.image3}/>
     </div>
     <div className={imageStyles.photoRow2} >
        <img src={food4} className={imageStyles.image4}/>
        <img src={food5} className={imageStyles.image5}/>
        <img src={food6} className={imageStyles.image6}/>
     </div>
    </Layout>
  )
}

export default GalleryPage
