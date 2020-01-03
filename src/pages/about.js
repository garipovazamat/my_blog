import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import chelyabinsk from '../images/about.jpg'

const About = () => (
  <Layout>
    <SEO title="Обо мне" />
    <div className="about">
      <div className="about_head row">
        <h1>Обо мне</h1>
        <img src={chelyabinsk} alt="Челябинск" />
      </div>
      <h3>Кратко</h3>
      <p>
      После 3-го курса обучения начал работать веб программистом, и с тех пор развиваюсь в этом направлении, а так же увлекаюсь машинным обучением.
      Больший интерес вызывает backend разработка в highload проектах.
      Основным рабочим языком является PHP, но так же люблю писать на Python.
      На данный момент являюсь middle разработчиком.
      </p>

      <h3>Опыт работы:</h3>
      <ul>
        <li>"N1.ru". Backend-разработчик, окт. 2019 – настоящее время**</li>
        <li>"74.ru". PHP-разработчик, сент. 2018 – сент. 2019 (1 г. 1 мес.)</li>
        <li>"ProAnalytics". Программист, июль 2016 – апр. 2018 (1 г. 10 мес.)</li>
        <li>"Intec". Помощник веб-программиста, 2015 – сент. 2015 (3 мес)</li>
      </ul>

      <h3>Ключевые навыки:</h3>
      <ul>
        <li>Языки: PHP, Python</li>
        <li>Технологии: GIT, Docker, Nginx, MySql, MongoDB, ElasticSearch</li>
        <li>Библиотеки: Slim, Yii2, pytorch, sklearn</li>
      </ul>
    </div>
  </Layout>
)

export default About
