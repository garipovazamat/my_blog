import React from 'react'
import "../components/layout.css"
import SocialIcons from "../components/basic/SocialIcons"
import Navigation from "../components/basic/Navigation"
import portret from '../images/portret2.jpg'

const IndexPage = () => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="center-block col-md-8">
        <div>
          <img src={portret} name="Garipov Azamat" width="200" height="200" className="rounded mx-auto d-block" alt='Гарипов Азамат'/>
          <h1 className="text-center h2">
            Гарипов Азамат <br/>
            <small>Backend Developer</small>
          </h1>
          <Navigation position="center"/>
          <hr />
          <p className="text-justify">
            Привет. Меня зовут Азамат. Проживаю в городе&nbsp;<a href="https://goo.gl/maps/2QXhCN5wLey2VFbK8" target='_blank' rel='noopener noreferrer'>Челябинск</a>.
            Работаю backend разработчиком в компании&nbsp;<a href="//n1.ru" target='_blank' rel='noopener noreferrer'>N1</a>.
            Здесь вы можете почитать мои статьи и узнать обо мне подробнее.
          </p>
          <SocialIcons/>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage