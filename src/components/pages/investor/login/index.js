import React from "react"
import { investorLogin } from "../../../../helpers/login"

const Index = () => {
  return <div onClick={() => investorLogin()}>login</div>
}

export default Index
