import React from "react";
import { Link } from "gatsby"
import { globalHistory } from "@reach/router"

export default function({position}) {
  let links = [
    {colour: 'secondary', 'link': '/', name: 'Главная'},
    {colour: 'primary', 'link': '/blog', name: 'Блог'},
    {colour: 'secondary', 'link': '/about', name: 'Обо мне'},
  ];

  links = links.filter(function(item) {
    return item.link !== globalHistory.location.pathname && item.link + '/' !== globalHistory.location.pathname;
  });

  links = links.map((item) =>
    <Link className={'btn btn-' + item.colour} to={item.link}>{item.name}</Link>
  );

  return (
    <div className={"row justify-content-" + position}>
      <div className="btn-group navigation-buttons" role="group" aria-label="navigation">
        {links}
      </div>
    </div>
  )
};