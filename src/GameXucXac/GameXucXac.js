import React, { Component } from 'react'
import './GameXucXac.css';
import Result from './Result';
import XucXac from './XucXac';
import { connect } from 'react-redux';

class GameXucXac extends Component {
    render() {
        return (
            <div className="bg-game">
                <div>
                    <h3 className="text-center mt-5 display-4">Game Xúc Xắc</h3>
                </div>
                <div className="row text-center mt-5">
                    <div className="col-5">
                        <button className="btnGame" onClick={()=>{this.props.datCuoc(true)}}>Tài</button>

                    </div>
                    <div className="col-2">
                        <XucXac/>        
                    </div>
                    <div className="col-5">
                        <button className="btnGame" onClick={()=>{this.props.datCuoc(false)}}>Xỉu</button>
                        
                    </div>
                    
                </div>
                <div className="display text-center">
                    <Result/>
                    <button className="btn btn-success mt-4" onClick={()=>{this.props.playGame()}}>Play game</button>
                </div>
            </div>



        )
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        datCuoc: (banChon)=>{
            let action={
                type: 'DAT_CUOC',
                banChon
            }
            dispatch(action);

        },
        playGame: ()=>{
            //gửi dữ liệu play_game lên reducer
            dispatch({
                type: 'PLAY_GAME'
            })

        },
    }
}
export default connect(null, mapDispatchToProps)(GameXucXac)