import React, { Component } from 'react';
import { connect } from 'react-redux';
class Result extends Component {
  render() {
    return (
      <div>
          <div className="display-4">
              Bạn chọn: 
              <span className="text-danger"> {this.props.banChon ? 'Tài':'Xỉu'}</span>
          </div>
          <div className="display-4">
              Số bàn thắng: 
              <span className="text-success"> {this.props.soBanThang}</span>
          </div>
          <div className="display-4">
              Tống số bàn chơi: 
              <span className="text-primary"> {this.props.soBanChoi} </span>
          </div>
      </div>
    )
  }
}
const mapStateToProps =(state)=>{
  return{
    soBanThang: state.XucXacReducer.soBanThang,
    banChon: state.XucXacReducer.banChon,
    soBanChoi: state.XucXacReducer.soBanChoi
  }
}
export default connect(mapStateToProps, null)(Result)

