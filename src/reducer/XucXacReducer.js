const initialState = {
    soBanChoi: 0,
    soBanThang: 0,
    banChon: true,//true là tài(>=11), false là xỉu(<11)
    mangXucXac: [
        {hinhAnh: './img/1.png', diem:1},
        {hinhAnh: './img/1.png', diem:1},
        {hinhAnh: './img/1.png', diem:1},
    ]
};
const XucXacReducer =(state = initialState, action)=>{
    switch(action.type){
        case 'DAT_CUOC': {
            state.banChon = action.banChon;
            return {...state}
        }
        case 'PLAY_GAME': {
            //Tạo ra xúc xắc ngẫu nhiên từ số random
            let mangXucXacRandom = [];
            for(let i = 0; i < 3; i++){
                //Mỗi lần chạy sẽ tạo ra 1 số ngẫu nhiên
                let soRandom = Math.floor(Math.random() * 6) + 1;
                //Từ số ngẫu nhiên tạo ra 1 object xúc xắc ngẫu nhiên
                let xucxac = {hinhAnh:`./img/${soRandom}.png`, diem: soRandom};
                //Thêm vào mảng xúc xắc ngẫu nhiên
                mangXucXacRandom.push(xucxac);
            }
            state.mangXucXac = mangXucXacRandom;

            //Xử thắng cuộc
            let tongDiem = mangXucXacRandom.reduce((tong, xucxac, index)=>{
                return tong += xucxac.diem;
            }, 0);

            if((state.banChon && tongDiem >= 11) || (!state.banChon && tongDiem < 11)){
                state.soBanThang += 1;
            }

            state.soBanChoi += 1;
            return {...state};
        }
        // case 'RESET_GAME': {
        //     state.soBanChoi = 0;
        //     state.soBanThang = 0;
        //     state.banChon = true;
        //     state.mangXucXac = [
        //         {hinhAnh: './img/1.png', diem:1},
        //         {hinhAnh: './img/1.png', diem:1},
        //         {hinhAnh: './img/1.png', diem:1},
        //     ];
        //     return {...state};
        // }

        default: return {...state};
    }
}
export default XucXacReducer;