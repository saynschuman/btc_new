import React from "react"
import ReactTable from "react-table"
import "react-table/react-table.css"

const Index = props => {
  return <ReactTable data={props.data} columns={props.columns} />
}

export default Index
