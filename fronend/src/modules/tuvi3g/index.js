import React from "react";
import { TuViStyle } from "@/styles/TuViStyle";
import { checkLayLS } from "./calculateTVCC";


export class TuViComponent extends React.PureComponent {
    constructor(props) {
        super(props);
    
        this.state = { 
          checked: false,
          name: "Ẩn Danh",
          g_isNam: 1,
          g_isduonglich: 1,
          g_ngayCur: 1,
          g_thangCur: 1,
          g_namHan: 1,
          g_namSinh: 1995,
          g_mau : 1,
          g_gioSinh : 4,
          g_gioDH : 11,
          g_gioDM : 30,
          g_isLuu4Hoa : 1,
          g_isLuu4Duc : 0,
          g_isLuuKhoiVietKhac : 0,
          g_isLuuThaiTueDB : 0,
          g_isLocNhap : 1,
          g_isInLS : 0,
          g_isTuongtinh : 0,
          g_anTuHoa : 1,
          g_isLuuTuanTriet : 0,
          g_isNom : 0,
          g_isIpad: 0  
        };
    }

    handleSubmit = () => {
        checkLayLS();
    }
    hanldeChangeName = (event) => {
        this.setState({name: event.target.value});
    }
    hanldeChangeGender = (isNam) => {
        this.setState({g_isNam: isNam});
    }

    hanldeChangeCalendar = (isDL) => {
        this.setState({g_isduonglich: isDL});
    }

    hanldeChangeYear = (event) => {
        this.setState({g_namSinh: event.target.value});
    }

    handleChangeMonth = (event) => {
        this.setState({g_thangCur: event.target.value});
    }

    handleChangeDay = (event) => {
        this.setState({g_ngayCur: event.target.value});
    }

    handleChangeHour = (event) => {
        this.setState({g_gioDH: event.target.value});
    }

    handleChangeMinute = (event) => {
        this.setState({g_gioDM: event.target.value});
    }

    hanldeChangeColor = (isMau) => {
        this.setState({g_mau: isMau});
    }

    hanldeChangeFormat = (isPad) => {
        this.setState({g_isIpad: isPad});
    }

    render() {
        return (
            <TuViStyle>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            {/* <form name="laylaso"> */}
                                <table className="table table-responsive table-bordered tableMain">
                                    <tbody>
                                        <tr>
                                            <td colSpan="2">
                                                Họ và Tên:
                                                <input maxLength="25" name="hoten" id="hovaten" size="25" type="text" value={this.state.name} onChange={this.hanldeChangeName}/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <input defaultChecked name="isNam" type="radio" value="1" onChange={()=>this.hanldeChangeGender(1)} />
                                                                Nam
                                                            </td>
                                                            <td>
                                                                <input name="isNam" type="radio" value="0" onChange={()=>this.hanldeChangeGender(0)} />
                                                                Nữ
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input defaultChecked name="duonglich" type="radio" value="1" onChange={()=>this.hanldeChangeCalendar(1)} />
                                                                Dương Lịch
                                                            </td>
                                                            <td>
                                                                <input name="duonglich" type="radio" value="0" onChange={()=>this.hanldeChangeCalendar(0)} />
                                                                Âm lịch
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Năm Sinh:
                                                            </td>
                                                            <td>
                                                                <input maxLength="10" name="namsinh" id="namsinh" size="10" type="text" value={this.state.g_namSinh} onChange={this.hanldeChangeYear} />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Th&aacute;ng sinh:
                                                            </td>
                                                            <td>
                                                                <select name="thangsinh" 
                                                                    id="thangsinh" 
                                                                    onChange={this.handleChangeMonth}
                                                                >
                                                                    <option value="1">
                                                                        1
                                                                    </option>
                                                                    <option value="2">
                                                                        2
                                                                    </option>
                                                                    <option value="3">
                                                                        3
                                                                    </option>
                                                                    <option defaultValue value="4">
                                                                        4
                                                                    </option>
                                                                    <option value="5">
                                                                        5
                                                                    </option>
                                                                    <option value="6">
                                                                        6
                                                                    </option>
                                                                    <option value="7">
                                                                        7
                                                                    </option>
                                                                    <option value="8">
                                                                        8
                                                                    </option>
                                                                    <option value="9">
                                                                        9
                                                                    </option>
                                                                    <option value="10">
                                                                        10
                                                                    </option>
                                                                    <option value="11">
                                                                        11
                                                                    </option>
                                                                    <option value="12">
                                                                        12
                                                                    </option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Ng&agrave;y sinh:
                                                            </td>
                                                            <td>
                                                                <div>
                                                                    <select name="ngaysinh"
                                                                        id="ngaysinh"
                                                                        onChange={this.handleChangeDay}
                                                                    >
                                                                        <option value="1">
                                                                            1
                                                                        </option>
                                                                        <option value="2">
                                                                            2
                                                                        </option>
                                                                        <option value="3">
                                                                            3
                                                                        </option>
                                                                        <option value="4">
                                                                            4
                                                                        </option>
                                                                        <option value="5">
                                                                            5
                                                                        </option>
                                                                        <option value="6">
                                                                            6
                                                                        </option>
                                                                        <option value="7">
                                                                            7
                                                                        </option>
                                                                        <option value="8">
                                                                            8
                                                                        </option>
                                                                        <option defaultValue value="9">
                                                                            9
                                                                        </option>
                                                                        <option value="10">
                                                                            10
                                                                        </option>
                                                                        <option value="11">
                                                                            11
                                                                        </option>
                                                                        <option value="12">
                                                                            12
                                                                        </option>
                                                                        <option value="13">
                                                                            13
                                                                        </option>
                                                                        <option value="14">
                                                                            14
                                                                        </option>
                                                                        <option value="15">
                                                                            15
                                                                        </option>
                                                                        <option value="16">
                                                                            16
                                                                        </option>
                                                                        <option value="17">
                                                                            17
                                                                        </option>
                                                                        <option value="18">
                                                                            18
                                                                        </option>
                                                                        <option value="19">
                                                                            19
                                                                        </option>
                                                                        <option value="20">
                                                                            20
                                                                        </option>
                                                                        <option value="21">
                                                                            21
                                                                        </option>
                                                                        <option value="22">
                                                                            22
                                                                        </option>
                                                                        <option value="23">
                                                                            23
                                                                        </option>
                                                                        <option value="24">
                                                                            24
                                                                        </option>
                                                                        <option value="25">
                                                                            25
                                                                        </option>
                                                                        <option value="26">
                                                                            26
                                                                        </option>
                                                                        <option value="27">
                                                                            27
                                                                        </option>
                                                                        <option value="28">
                                                                            28
                                                                        </option>
                                                                        <option value="29">
                                                                            29
                                                                        </option>
                                                                        <option value="29">
                                                                            30
                                                                        </option>
                                                                        <option value="29">
                                                                            31
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Giờ sinh:
                                                            </td>
                                                            <td>
                                                                <div>
                                                                    <input max="23" maxLength="2" id ="giosinhH" min="0" size="2" type="number" value={this.state.g_gioDH} onChange={this.handleChangeHour}/>
                                                                    giờ
                                                                    <input max="59" maxLength="2" id="giosinhM" min="0" size="2" type="number" value={this.state.g_gioDM} onChange={this.handleChangeMinute}/>
                                                                    phút
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">
                                                                Loại ảnh:
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input defaultChecked name="anhMau" type="radio" onChange={()=>this.hanldeChangeColor(1)} />
                                                                Màu
                                                            </td>
                                                            <td>
                                                                <input name="anhMau" type="radio" onChange={()=>this.hanldeChangeColor(0)} />
                                                                Đen trắng
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">
                                                                Cỡ ảnh:
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input defaultChecked name="dangLD" type="radio" onChange={()=>this.hanldeChangeFormat(0)} />
                                                                900x1269px
                                                            </td>
                                                            <td>
                                                                <input name="dangLD" type="radio" onChange={()=>this.hanldeChangeFormat(1)} />
                                                                900x1035px
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td>
                                                <strong>
                                                    Tùy chọn:
                                                </strong>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td colSpan="2">
                                                                <input name="checkTtinh" type="checkbox" defaultValue="1" />
                                                                An vòng Tướng tinh
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">
                                                                <input defaultChecked name="checkHan" type="checkbox" value="1" />
                                                                Hạn năm:
                                                                <input maxLength="10" name="textNamHan" id="textNamHan" size="10" type="text" value="2023" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input name="checkLuu4Hoa" type="checkbox" value="1" />
                                                                Lưu tứ hóa
                                                            </td>
                                                            <td>
                                                                <input name="checkLuu4Duc" type="checkbox" value="1" />
                                                                Lưu tứ đức
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input name="checkLuuDaiVan" type="checkbox" value="1" />
                                                                Lưu đại vận
                                                            </td>
                                                            <td>
                                                                <input name="checkLuuKhoiVietKhac" type="checkbox" value="1" />
                                                                Lưu c&aacute;c sao kh&aacute;c
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input name="checkLocNhap" type="checkbox" value="1" />
                                                                Lộc Kỵ nhập
                                                            </td>
                                                            <td>
                                                                <input name="checkLuuTuanTriet" type="checkbox" value="1" />
                                                                Lưu Tuần Triệt
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">
                                                                Lưu Th&aacute;i Tuế theo:
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input defaultChecked name="luuthaitue" type="radio" />
                                                                Địa B&agrave;n
                                                            </td>
                                                            <td>
                                                                <input name="luuthaitue" type="radio" />
                                                                Tiểu Hạn
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">
                                                                Ng&ocirc;n ngữ trong l&aacute; số:
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input defaultChecked name="isNom" type="radio" />
                                                                Việt
                                                            </td>
                                                            <td>
                                                                <input name="isNom" type="radio" />
                                                                N&ocirc;m
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            {/* </form> */}
                            <div className="btn-main">
                                <button onClick={()=>this.handleSubmit()}>
                                    Lấy l&aacute; số
                                </button>
                                <button>
                                    In l&aacute; số
                                </button>
                                <a href="#" download="lstv.jpg" id="downloadLnk">
                                    <button>
                                        Tải ảnh về
                                    </button>
                                </a>
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>
                    <div id="divCanvas">
                        <canvas width="920" height="1289" className="image-laso">
                            Your browser does not support the HTML5 canvas tag.
                        </canvas>
                    </div>
                </div>
            </TuViStyle>
        )
    }
}