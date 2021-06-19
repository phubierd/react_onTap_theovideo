const initialState = {
    danhSachCuoc: [
        { ma: 'bau', hinhAnh: './BTBauCua/bau.png', diemCuoc: 0 },
        { ma: 'cua', hinhAnh: './BTBauCua/cua.png', diemCuoc: 0 },
        { ma: 'ga', hinhAnh: './BTBauCua/ga.png', diemCuoc: 0 },
        { ma: 'ca', hinhAnh: './BTBauCua/ca.png', diemCuoc: 0 },
        { ma: 'nai', hinhAnh: './BTBauCua/nai.png', diemCuoc: 0 },
        { ma: 'tom', hinhAnh: './BTBauCua/tom.png', diemCuoc: 0 },
    ],
    tongDiem: 1000,
    mangXucXac: [
        { ma: 'ca', hinhAnh: './BTBauCua/ca.png', diemCuoc: 0 },
        { ma: 'nai', hinhAnh: './BTBauCua/nai.png', diemCuoc: 0 },
        { ma: 'tom', hinhAnh: './BTBauCua/tom.png', diemCuoc: 0 },
    ]


}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'DAT_CUOC_BAU_CUA': {

            //tim trong danh sách cược quân cược nào đc click sẽ tăng hoặc giảm điểm
            const danhSachCuocUpdate = [...state.danhSachCuoc]
            const index = danhSachCuocUpdate.findIndex(qc => qc.ma === action.quanCuoc.ma)
            // console.log(index)
            if (index != -1) {
                if (action.tangGiam && state.tongDiem > 0) {
                    danhSachCuocUpdate[index].diemCuoc += 100;
                    state.tongDiem -= 100;

                } else {
                    if (danhSachCuocUpdate[index].diemCuoc > 0) {
                        danhSachCuocUpdate[index].diemCuoc -= 100;
                        state.tongDiem += 100;
                    }
                }

            }
            state.danhSachCuoc = danhSachCuocUpdate;

            return { ...state }

        }

        case 'PLAY_GAME_BAU_CUA': {
            // console.log(action)
            const mangXucXacNgauNhien = [];

            for (let i = 0; i < 3; i++) {
                //tao ra 1 so ngau nhien tu 0-> 5
                let soNgauNhien = Math.floor(Math.random() * 6);
                const xucXacNgauNhien = state.danhSachCuoc[soNgauNhien]
                mangXucXacNgauNhien.push(xucXacNgauNhien)
            }
            //cap nhat lai mang xuc xac state.mangXucXac = mangXucXacNgauNhien
            state.mangXucXac = mangXucXacNgauNhien
            //==========================================//
            //xử lý tăng điểm thưởng:
            mangXucXacNgauNhien.forEach((xucXacNN, index) => {

                let indexDSCuoc = state.danhSachCuoc.findIndex(qc => qc.ma === xucXacNN.ma);

                if (index !== -1) {
                    state.tongDiem += state.danhSachCuoc[indexDSCuoc].diemCuoc;
                }
            })

            //==========================================//
            //xử lý hoàn tiền
            state.danhSachCuoc.forEach((qc, index) => {
                let indexXucXacNN = mangXucXacNgauNhien.findIndex(xxnn => xxnn.ma === qc.ma);
                if (indexXucXacNN !== -1) {
                    state.tongDiem += qc.diemCuoc;
                }
            })
            // xử lý làm mới game (clear tiền đặt)
            state.danhSachCuoc = state.danhSachCuoc.map((qc, index) => {
                return { ...qc, diemCuoc: 0 };
            })

            return { ...state }
        }

        case 'CHOI_LAI': {
            state.tongDiem = 1000;
            state.danhSachCuoc = state.danhSachCuoc.map((qc, index) => {
                return { ...qc, diemCuoc: 0 };
            })
            return{...state}
        }


        default:
            return state
    }



}
