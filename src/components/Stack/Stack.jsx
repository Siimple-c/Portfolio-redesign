import React from 'react'
import {BiLogoReact, BiLogoJavascript} from 'react-icons/bi'
import {FaSass, FaGithubSquare} from 'react-icons/fa'
import {BsWordpress} from 'react-icons/bs'
import './stack.scss'

function Stack() {
  return (
    <ul className="stack-list">
      <li className="stack-icon shine"><BiLogoReact/></li>
      <li className="stack-icon shine"><BiLogoJavascript/></li>
      <li className="stack-icon shine"><FaSass/></li>
      <li className="stack-icon shine"><FaGithubSquare/></li>
      <li className="stack-icon shine"><BsWordpress/></li>
    </ul>
  )
}

export default Stack