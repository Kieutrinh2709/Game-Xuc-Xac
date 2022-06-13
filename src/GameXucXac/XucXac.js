import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucXac extends Component {
  renderXucXac =()=>{
    //props từ reducer
    return this.props.mangXucXac.map((xucXac, index)=>{
      return <img key={index} className = "ml-2" style ={{width: 60, height: 60}} src={xucXac.hinhAnh} alt={xucXac.hinhAnh}/>
    })
  }
  render() {
    return (
      <div>
        {this.renderXucXac()}
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return{
    mangXucXac: state.XucXacReducer.mangXucXac
  }
}
export default connect(mapStateToProps, null)(XucXac)

