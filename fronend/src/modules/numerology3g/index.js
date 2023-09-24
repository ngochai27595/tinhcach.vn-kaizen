import * as React from "react";
import { calc } from "./actions2";
import { NumerologyStyle, MasterNumber } from "@/styles/Numerology";
import getStripe from "@/lib/getStripe"

export class NumerologyComponent3G extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { 
      checked: false,
      calculating: false,
      fname: "",
      lname: "",
      wname: "",
      dbirth: "",
      month: "",
      year: "",
      report1: "",
      report2: "",
      report3: "",
      myNumbers: {
        character: "", 
        soul: "", 
        agenda: "",
        attitude: "",
        personality: "",
        destiny: "",
        purpose: "",
      },
      dest: "",
      char: "",

    };
  }

  canvasEl;
  componentDidMount() {
    const ctx = this.canvasEl.getContext("2d");
    if (ctx) {
      ctx.beginPath();
      ctx.arc(95, 50, 40, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fillStyle = "rgb(200, 0, 0)";
      ctx.fillRect(85, 40, 20, 20);
      ctx.save();
    }
  }
  setRef = (ref) => (this.canvasEl = ref);

  handleCalculate = () => {
    this.setState({calculating: true});
    setTimeout(() => calc(), 100);
  }

  handleFnameChange = (event) => {
    this.setState({fname: event.target.value});
  };
  handleLnameChange = (event) => {
    this.setState({lname: event.target.value});
  };
  handleWnameChange = (event) => {
    this.setState({wname: event.target.value});
  };
  handleDayChange = (event) => {
    this.setState({dbirth: event.target.value});
  };
  handleMotnhChange = (event) => {
    this.setState({month: event.target.value});
  };
  handleYearChange = (event) => {
    this.setState({year: event.target.value});
  };

  handleCheckout = async () => {
    this.sendDatatoBackend(); return;
    let cartItems = [{
      title:"Ebook Thần Số",
      slug:"ebook-than-so",
      description:"Chi tiết các bộ số ý nghĩa, định hướng cuộc đời",
      price: 18,
      quantity: 1,
      image: ["test","test2"],
    }];
    const stripe = await getStripe();
    const response = await fetch('api/stripe', {
        method: "POST",
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(cartItems),
    });
    const data = await response.json();
    await stripe.redirectToCheckout({sessionId: data.id});
  }

  sendDatatoBackend = async () => {
    const data = {
      name: this.state.name,
      dbirth: this.state.dbirth,
      month: this.state.month,
      year: this.state.year,
      html: document.getElementById('body').innerHTML,
    };
  }

  render() {
    return (
      <NumerologyStyle 
        // onLoad="checkInfo()" 
        id="body"
        className="container"
      >
        <canvas height="100" ref={this.setRef} width="1200" hidden={true}>
          Your browser does not support the HTML5 canvas tag.
        </canvas>
        {/* <h1>Thần Số Học 3 Gốc</h1> */}

        <section className="inputForm">
          <div className="ml210">
            <div className="row field name">
                <div className="col-sm-3 col-md-6 col-lg-6 fname">
                    <label>Họ và Tên Đệm</label>
                    <input id="fname" 
                        value={this.state.fname} 
                        onChange={this.handleFnameChange}
                    />
                </div>
                <div className="col-sm-3 col-md-6 col-lg-3 lname">
                    <label>Tên</label>
                    <input id="lname" 
                        value={this.state.lname} 
                        onChange={this.handleLnameChange}
                    />
                </div>
                <div className="col-sm-3 col-md-6 col-lg-3 wname">
                    <label>Tên Tác Ý<span className="grey">{" (nếu có)"}</span></label>
                    <input id="wname" 
                        value={this.state.wname} 
                        onChange={this.handleWnameChange}
                    />
                </div>
            </div>
            <div className="field bdate row">
                <div className="col-sm-3 col-md-6 col-lg-6">
                    <label>Ngày sinh <span className="grey">(Ngày/Tháng/Năm)</span></label>
                    
                    <input
                        id="day"
                        onChange={this.handleDayChange}
                        type="number"
                        min="1"
                        max="31"
                        maxLength={2}
                    />
                        <select 
                            id="month" 
                            name="month" 
                            onChange={this.handleMotnhChange}
                        >
                            <option></option>
                            <option value="1">Tháng 1</option>
                            <option value="2">Tháng 2</option>
                            <option value="3">Tháng 3</option>
                            <option value="4">Tháng 4</option>
                            <option value="5">Tháng 5</option>
                            <option value="6">Tháng 6</option>
                            <option value="7">Tháng 7</option>
                            <option value="8">Tháng 8</option>
                            <option value="9">Tháng 9</option>
                            <option value="10">Tháng 10</option>
                            <option value="11">Tháng 11</option>
                            <option value="12">Tháng 12</option>
                        </select>
                        <input
                            id="year"
                            onChange={this.handleYearChange}
                            type="number"
                            min="0"
                            maxLength={4}
                        />
                    </div>
                <div className="col-sm-3 col-md-6 col-lg-6 divBtnCalc">
                    <button className="btn btn-info calcBtn" onClick={this.handleCalculate}>Xem</button>
                </div>
            </div>
          </div>
          <div className="fullStar">
            <div id="star" className="star">
              <span className="t0"></span>
              <div className="t1"></div>
              <div className="t2"></div>
              <div className="t3"></div>
              <div className="t4"></div>
              <div className="t5"></div>
            </div>
            <div id="star-holder"></div>
          </div>
        </section>

        <section>
          <MasterNumber>
            <div className="card">
                <div className="card-body">
                    { this.state.calculating &&
                        <div className="row mt-1" id="bangthanso">
                            <div className="col-lg-4">
                                <div className="">
                                    <div className="text-center">
                                        <span className="fs-6 fw-bold">Số Chủ Đạo <i
                                                className="fadeIn animated bx bx-right-arrow"></i></span>
                                    </div>
                                    <div className="row text-center mt-3">
                                        <div className="col-12 text-center customStyle">
                                            <img src={"./img/khung.png"} className="img-khung" alt="" />
                                            <div className="display-1 customTextCentered" id="finalSoDuongDoi"></div>
                                        </div>
                                        <div className="col-12 mt-3 mb-2">
                                            <h4 className="text-color" id="hoVaTen" ></h4>
                                            <h6 className="text-color" id="tacY" ></h6>
                                            <h6 className="text-color" id="sinhNhat"></h6>
                                            {/* <p className="text-color">Năm Cá Nhân: <span className="fw-bold"
                                                    id="namCaNhan"></span></p> */}
                                                <p className="personal-info">Năm Cá Nhân: <span className="fw-bold" id="namCaNhan"></span><br/>
                                                Tháng Cá Nhân: <span className="fw-bold" id="thangCaNhan"></span><br/>
                                                Ngày Cá Nhân: <span className="fw-bold" id="ngayCaNhan"></span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-8">
                                <div className="table-responsive">
                                    <table className="table table-bordered text-center">
                                        <tbody>
                                            <tr>
                                                <td colSpan="6"><span className="text-center align-middle fs-6 fw-bold">Bốn đỉnh
                                                        cuộc đời <i className="fadeIn animated bx bx-right-arrow"></i></span></td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle"><b>(**)<br />4 Đỉnh</b></td>
                                                <td>
                                                    <div className="widgets-icons rounded-circle mx-auto bg-info">
                                                        <h4 className="mt-2" id="soDinh1"></h4>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="widgets-icons rounded-circle mx-auto bg-info">
                                                        <h4 className="mt-2" id="soDinh2"></h4>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="widgets-icons rounded-circle mx-auto bg-info">
                                                        <h4 className="mt-2" id="soDinh3"></h4>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="widgets-icons rounded-circle mx-auto bg-info">
                                                        <h4 className="mt-2" id="soDinh4"></h4>
                                                    </div>
                                                </td>
                                                <td className="align-middle" rowSpan="2"><b>Bạn có<br />Tròn vai<br />3 Gốc?</b></td>

                                            </tr>
                                            <tr>
                                                <td className="align-middle">Tuổi</td>
                                                <td>
                                                    <div className="font-22 text-dark"> <i
                                                            className="fadeIn animated bx bx-arrow-from-bottom"></i>
                                                    </div>
                                                    <h5 id="dinh1"></h5>
                                                </td>
                                                <td>
                                                    <div className="font-22 text-dark"> <i
                                                            className="fadeIn animated bx bx-arrow-from-bottom"></i>
                                                    </div>
                                                    <h5 id="dinh2"></h5>
                                                </td>
                                                <td>
                                                    <div className="font-22 text-dark"> <i
                                                            className="fadeIn animated bx bx-arrow-from-bottom"></i>
                                                    </div>
                                                    <h5 id="dinh3"></h5>
                                                </td>
                                                <td>
                                                    <div className="font-22 text-dark"> <i
                                                            className="fadeIn animated bx bx-arrow-from-bottom"></i>
                                                    </div>
                                                    <h5 id="dinh4"></h5>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td className="align-middle" rowSpan="5">Thời<br />Niên<br />Thiếu</td>
                                                <td colSpan="4" className="text-end bg-danger">
                                                    <h5 className="text-white">(****) Số chủ đạo, đường đời: <span
                                                            id="soDuongDoi"></span>
                                                        <i className="fadeIn animated bx bx-arrow-from-left"></i>
                                                    </h5>
                                                </td>
                                                <td className="align-middle" rowSpan="5">Khi<br />Viên<br />Mãn</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="4" className="text-end bg-info">
                                                    <h6>(***) Số họ tên, vận mệnh: <span id="soVanMenh"></span> <i
                                                            className="fadeIn animated bx bx-arrow-from-left"></i></h6>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="4" className="text-end bg-warning">
                                                    <h6>(***) Trưởng thành: <span id="soTruongThanh"></span> <i
                                                            className="fadeIn animated bx bx-arrow-from-left"></i></h6>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="4" className="text-end bg-light-warning">
                                                    <span><b>(*) Tên <span id="soTen"></span>, (**) Tên Tác ý: <span
                                                                id="soTenTacY"></span></b> <i
                                                            className="fadeIn animated bx bx-arrow-from-left"></i></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="4" className="text-end bg-light-warning">
                                                            <span><i>(*) Biểu lộ: <span id="soBieuLo"></span>
                                                            , Nội tâm: <span id="soNoiTam"></span>, Ngày sinh: <span id="hienThiNgaySinh"></span> </i><i
                                                            className="fadeIn animated bx bx-arrow-from-left"></i></span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="table-responsive">
                                    <table className="table table-bordered text-center">
                                        <tbody>
                                            <tr>
                                                <td colSpan="5"><span className="text-center align-middle fs-6 fw-bold">Năng lượng
                                                        con số <i className="fadeIn animated bx bx-right-arrow"></i></span>
                                                    <button type="button" className="btn btn-primary btn-sm px-3 my-1"
                                                        data-bs-toggle="modal" data-bs-target="#chitiet_so">
                                                        <span className="fs-6">Chi tiết</span>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="3" className="bg-light-info fw-bold">Số cơ bản, cần tròn vai</td>
                                                <td colSpan="2" className="bg-light-warning fw-bold">Số bậc thầy</td>

                                            </tr>
                                            <tr>
                                                <td className="bg-light-info">
                                                    <h5 id="so3"></h5>
                                                </td>
                                                <td className="bg-light-info">
                                                    <h5 id="so6"></h5>
                                                </td>
                                                <td className="bg-light-info">
                                                    <h5 id="so9"></h5>
                                                </td>
                                                <td className="bg-light-warning">
                                                    <h5 id="so30"></h5>
                                                </td>
                                                <td className="bg-light-warning">
                                                    <h5 id="so33"></h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="bg-light-info">
                                                    <h5 id="so2"></h5>
                                                </td>
                                                <td className="bg-light-info">
                                                    <h5 id="so5"></h5>
                                                </td>
                                                <td className="bg-light-info">
                                                    <h5 id="so8"></h5>
                                                </td>
                                                <td className="bg-light-warning">
                                                    <h5 id="so20"></h5>
                                                </td>
                                                <td className="bg-light-warning">
                                                    <h5 id="so11"></h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="bg-light-info">
                                                    <h5 id="so1"></h5>
                                                </td>
                                                <td className="bg-light-info">
                                                    <h5 id="so4"></h5>
                                                </td>
                                                <td className="bg-light-info">
                                                    <h5 id="so7"></h5>
                                                </td>
                                                <td className="bg-light-warning">
                                                    <h5 id="so10"></h5>
                                                </td>
                                                <td className="bg-light-warning">
                                                    <h5 id="so22"></h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="5">
                                                    <p className="mt-2 text-start" id="nangLuong"><i className="lni lni-checkmark"></i>
                                                        Năng lượng cao thứ 1 là: <b></b> <br /><i
                                                            className="lni lni-checkmark"></i> Năng lượng cao thứ 2 là: <b></b>
                                                        <br /><i className="lni lni-checkmark"></i> Năng lượng cao thứ 3 là:
                                                        <b></b> <br /><i className="lni lni-checkmark"></i> Năng lượng cao thứ 4
                                                        là: <b></b> <br /></p>
                                                </td>

                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="modal fade" id="chitiet_so" tabIndex="-1"
                                        aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">Bài thơ Thần Số Học (BKE)</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <p>Cốt lõi Thần Số Học<br />
                                                                Thú vị và sắc sâu<br />
                                                                Đặc điểm từng con số<br />
                                                                Đều 2 hướng khác nhau<br />
                                                                <br />
                                                                Trục THÂN gồm 3 số<br />
                                                                1-4-7 nằm ngang <br />
                                                                Thực Tế và Tổ Chức <br />
                                                                Tạo nền móng vững vàng <br />
                                                                <br />
                                                                Số 1 Cá Tính mạnh<br />
                                                                Quyết Đoán sự Bại - Thành<br />
                                                                Nếu ngược lại: Độc Đoán<br />
                                                                Bảo Thủ và Cạnh Tranh<br />
                                                                <br />
                                                                Số 4 là Hành Động<br />
                                                                Sắp Xếp và Chỉn Chu<br />
                                                                Chiều khác là Thực Dụng<br />
                                                                Cứng Nhắc, Khó Tiếp Thu<br />
                                                                <br />
                                                                Số 7 đầy Nghị Lực<br />
                                                                Trí Tuệ từ khổ đau <br />
                                                                Chiều khác Thiếu Thực Tế<br />
                                                                Lý Thuyết Suông, Cứng Đầu<br />
                                                                <br />
                                                                Trục TÂM 2-5-8 <br />
                                                                Là Cảm Xúc -Tình Cảm<br />
                                                                Nằm giữa trục TRÍ - THÂN<br />
                                                                Là Trung tâm Kết Nối<br />
                                                                <br />
                                                                Số 2 là Trực Giác<br />
                                                                Cảm Xúc và Yêu Thương <br />
                                                                Chiều khác là Dính Mắc<br />
                                                                Tùy Hứng và Thất Thường<br />
                                                            </p>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p>
                                                                Số 5 ở Trung Tâm <br />
                                                                Kết Nối mọi con số <br />
                                                                Khiếu Nghệ Thuất, Tự Do<br />
                                                                Chiều khác sẽ Sa Đà<br />
                                                                <br />
                                                                Số 8 là Chuyên Gia<br />
                                                                Tâm Linh hay Tiền Bạc<br />
                                                                Nếu năng lượng chiều khác <br />
                                                                Bất Hợp Tác, Lạnh Lùng<br />
                                                                <br />
                                                                Trục TRÍ 3-6-9 <br />
                                                                Học Hỏi và Tư Duy<br />
                                                                Sáng Tạo và Triết Lý<br />
                                                                Soi sáng mình hướng đi<br />
                                                                <br />
                                                                Số 3 là Học Sâu<br />
                                                                Hài Hước, Truyền Cảm Hứng<br />
                                                                Nếu tư duy Hời Hợt<br />
                                                                Lại Cạn Cợt, Tầm Thường<br />
                                                                <br />
                                                                Số 6 là Sáng Tạo<br />
                                                                Và Yêu Thương xung quanh<br />
                                                                Ngược lại thì Tối Tạo<br />
                                                                Và Dính Mắc, Lan Man<br />
                                                                <br />
                                                                Số 9 Hoài Bão lớn<br />
                                                                Cộng Đồng và Lý Tưởng<br />
                                                                Hoặc Tham Vọng - Ảo Tưởng<br />
                                                                Nhụt Chí và Chán Đời<br />
                                                                <br />
                                                                Mỗi con số bạn ơi <br />
                                                                Đều 2 chiều năng lượng <br />
                                                                Suy ngẫm và đúc kết <br />
                                                                Phải hiểu cho tỏ tường<br />
                                                            </p>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p>
                                                                Những Thần số đặc biệt<br />
                                                                10, 11, 20,<br />
                                                                22, 30, 33 là những số<br />
                                                                Mang năng lượng số to…<br />
                                                                <br />
                                                                Số to lớn từ nhỏ<br />
                                                                Không luyện, nhỏ lại ngay<br />
                                                                Nội tâm sẽ xung đột<br />
                                                                Hoang mang và loay hoay…<br />
                                                                <br />
                                                                Chìa khóa mọi con số<br />
                                                                Luyện 3-7-5-2<br />
                                                                Là Học Sâu, Vượt Khổ<br />
                                                                Đạo Lý, Thiền, Sẻ Chia…<br />
                                                                <br />
                                                                Số 0 là đặc biệt<br />
                                                                Đừng tưởng không có gì<br />
                                                                Mà chứa đầy đạo lý<br />
                                                                Buông xả và Cho Đi…<br />
                                                                <br />
                                                                Vậy nên mọi con số<br />
                                                                Cần luyện ngay cho hay<br />
                                                                Tâm hướng về Không nhé<br />
                                                                Trưởng Thành hơn mỗi ngày…<br />
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary"
                                                        data-bs-dismiss="modal">Đóng</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="text-center">
                                    <span className="fs-6 fw-bold">Chi tiết bộ số (Nhấn từng số để xem)<i
                                            className="fadeIn animated bx bx-right-arrow"></i></span>
                                </div>
                                <div className="row">
                                    <div className="col">

                                        <button type="button" className="btn btn-outline-secondary btn-lg px-3 my-1"
                                            data-bs-toggle="modal" data-bs-target="#chitiet_ten">
                                            <span className="fs-6">Tên: <b id="sochitiet_ten"></b></span>
                                        </button>
                                        <button type="button" className="btn btn-outline-secondary btn-lg px-3 my-1"
                                            data-bs-toggle="modal" data-bs-target="#chitiet_noitam">
                                            <span className="fs-6">Nội Tâm: <b id="sochitiet_noitam"></b></span>
                                        </button>
                                        <button type="button" className="btn btn-outline-secondary btn-lg px-3 my-1"
                                            data-bs-toggle="modal" data-bs-target="#chitiet_bieulo">
                                            <span className="fs-6">Biểu Lộ: <b id="sochitiet_bieulo"></b></span>
                                        </button>
                                        <button type="button" className="btn btn-outline-secondary btn-lg px-3 my-1"
                                            data-bs-toggle="modal" data-bs-target="#chitiet_vanmenh">
                                            <span className="fs-6">Vận Mệnh: <b id="sochitiet_vanmenh"></b></span>
                                        </button>
                                        <button type="button" className="btn btn-outline-secondary btn-lg px-3 my-1"
                                            data-bs-toggle="modal" data-bs-target="#chitiet_truongthanh">
                                            <span className="fs-6">Trưởng Thành: <b id="sochitiet_truongthanh"></b></span>
                                        </button>
                                        <button type="button" className="btn btn-outline-secondary btn-lg px-3 my-1"
                                            data-bs-toggle="modal" data-bs-target="#chitiet_duongdoi">
                                            <span className="fs-6">Chủ Đạo: <b id="sochitiet_duongdoi"></b></span>
                                        </button>
                                        <button type="button" className="btn btn-outline-secondary btn-lg px-3 my-1"
                                            data-bs-toggle="modal" data-bs-target="#chitiet_tacy">
                                            <span className="fs-6">Tác Ý: <b id="sochitiet_tacy"></b></span>
                                        </button>

                                        <div className="modal fade" id="chitiet_ten" tabIndex="-1"
                                            aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-lg">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title">Con số về Tên</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body" id="modal_sochitiet_ten"></div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary"
                                                            data-bs-dismiss="modal">Đóng</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal fade" id="chitiet_noitam" tabIndex="-1"
                                            aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-lg">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title">Con số về Nội Tâm</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body" id="modal_sochitiet_noitam"></div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary"
                                                            data-bs-dismiss="modal">Đóng</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal fade" id="chitiet_bieulo" tabIndex="-1"
                                            aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-lg">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title">Con số về Biểu Lộ</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body" id="modal_sochitiet_bieulo"></div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary"
                                                            data-bs-dismiss="modal">Đóng</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal fade" id="chitiet_vanmenh" tabIndex="-1"
                                            aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-lg">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title">Con số về Vận Mệnh</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body" id="modal_sochitiet_vanmenh"></div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary"
                                                            data-bs-dismiss="modal">Đóng</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal fade" id="chitiet_truongthanh" tabIndex="-1"
                                            aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-lg">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title">Con số về Trưởng Thành</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body" id="modal_sochitiet_truongthanh"></div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary"
                                                            data-bs-dismiss="modal">Đóng</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal fade" id="chitiet_duongdoi" tabIndex="-1"
                                            aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-lg">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title">Con số về Đường Đời</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body" id="modal_sochitiet_duongdoi"></div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary"
                                                            data-bs-dismiss="modal">Đóng</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal fade" id="chitiet_tacy" tabIndex="-1"
                                            aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-lg">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title">Con số về Tên Tác Ý</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body" id="modal_sochitiet_tacy"></div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary"
                                                            data-bs-dismiss="modal">Đóng</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                {/* <div className="card mt-2 radius-10 mb-0 border shadow-none">
                                    <div className="card-body ">
                                        <div id="card-soduongdoi">
                                        </div>
                                        <hr />
                                        Tham gia lớp học <a href="http://bke.edu.vn/docvi" target="_blank"
                                            rel="noopener noreferrer">Đọc Vị Bất Kỳ
                                            Ai</a> hoặc <a href="http://bke.edu.vn/tsh" target="_blank"
                                            rel="noopener noreferrer">Thần Số Học 3 Gốc</a>
                                        để hiểu hơn về bản thân mình.
                                    </div>
                                </div> */}

                                <div className="text-center mt-2">
                                <span className="fs-6 fw-bold">Bổ sung chỉ số (Lớp Chuyên sâu)<i className="fadeIn animated bx bx-right-arrow"></i></span>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <button type="button" className="btn btn-outline-secondary btn-lg px-3 my-1" data-bs-toggle="modal" data-bs-target="#chitiet_tuduylitri">
                                        <span className="fs-6">T.Duy Lý Trí: <b id="sochitiet_tuduylitri">9</b></span>
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary btn-lg px-3 my-1" data-bs-toggle="modal" data-bs-target="#chitiet_canbang">
                                        <span className="fs-6">Cân Bằng: <b id="sochitiet_canbang">9</b></span>
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary btn-lg px-3 my-1" data-bs-toggle="modal" data-bs-target="#chitiet_sothieu">
                                        <span className="fs-6">Số Thiếu: <b id="sochitiet_sothieu">2,4</b></span>
                                    </button>

                                    <button type="button" className="btn btn-outline-secondary btn-lg px-3 my-1" data-bs-toggle="modal"
                                        data-bs-target="#chitiet_chudaovanmenh">
                                        <span className="fs-6">L.kết C.Đạo - V.Mệnh: <b id="sochitiet_chudaovanmenh"></b></span>
                                    </button>
                                    
                                    <button type="button" className="btn btn-outline-secondary btn-lg px-3 my-1" data-bs-toggle="modal"
                                        data-bs-target="#chitiet_noitambieulo">
                                        <span className="fs-6">L.kết N.Tâm - B.Lộ: <b id="sochitiet_noitambieulo"></b></span>
                                    </button>
                                
                                    <button type="button" className="btn btn-outline-secondary btn-lg px-3 my-1" data-bs-toggle="modal"
                                        data-bs-target="#chitiet_sucmanhtiemthuc">
                                        <span className="fs-6">S.Mạnh T.Thức: <b id="sochitiet_sucmanhtiemthuc"></b></span>
                                    </button>
                                    {/* <div className="modal fade" id="chitiet_ten" tabindex="-1" style="display: none;"
                                        aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered modal-lg">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">Con số về Tên</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body" id="modal_sochitiet_ten"></div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}


                                
                                </div>
                                <div className="col-12">
                                    <div className="card mt-2 radius-10 mb-0 border shadow-none">
                                        <div className="card-body ">
                                            <h6 className="card-title text-center">Nợ nghiệp các chỉ số</h6>
                                            <div className="row mt-2">
                                                <div className="col-lg-4">
                                                    <p><b>Chủ đạo: </b><span id="nonghiep_chudao">Không nợ nghiệp</span></p>
                                                    <p><b>Vận mệnh: </b><span id="nonghiep_vanmenh">Không nợ nghiệp</span></p>
                                                    <p><b>Trưởng Thành: </b><span id="nonghiep_truongthanh">Không nợ nghiệp</span></p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p><b>Ngày Sinh: </b><span id="nonghiep_ngaysinh">Không nợ nghiệp</span></p>
                                                    <p><b>Tên Riêng: </b><span id="nonghiep_ten">Không nợ nghiệp</span></p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p><b>Nội Tâm: </b><span id="nonghiep_noitam">Không nợ nghiệp</span></p>
                                                    <p><b>Biểu Lộ: </b><span id="nonghiep_bieulo">Không nợ nghiệp</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="card mt-2 radius-10 mb-0 border shadow-none">
                                <div className="card-body ">
                                    <div id="card-soduongdoi"><b>Tổng quan về số: </b>20<br/><b>3 Gốc: </b>Trưởng thành từ số 2<br/><b>3 Độc: </b>Mắc kẹt ở số 2, không hoàn thành bài học (số 0)<br/></div>
                                    <hr />
                                    Tham gia lớp học <a href="http://bke.edu.vn/docvi" target="_blank" rel="noopener noreferrer">Đọc Vị Bất Kỳ
                                        Ai</a> hoặc <a href="http://bke.edu.vn/tsh" target="_blank" rel="noopener noreferrer">Thần Số Học 3 Gốc</a>
                                    để hiểu hơn về bản thân mình.
                                </div>
                            </div> */}

                            </div>

                        </div>
                    }
                    { !this.state.calculating &&
                        <div className="row mt-2" id="gioithieu">
                            <div className="col-lg-5">
                                <h6 className="mb-1">
                                    Giới thiệu về Thần Số Học
                                </h6>
                                <p>
                                    Thần số học (hay còn gọi là nhân số học, numerology) có nguồn gốc xuất phát từ phương tây,
                                    khoảng hơn 2000 năm trước. Thủa đầu, thần số học chỉ là một bộ môn nằm trong hàng loạt các
                                    bộ môn giúp các nhà thần học, triết học, toán học,…. sử dụng để nghiên cứu về con người, vũ
                                    trụ và các trường năng lượng tác động lên đời sống con người. Dần về sau, thần số học được
                                    phát triển theo nhiều nhánh, nhiều hướng khác nhau bởi các nhà hiền triết lỗi lạc như:
                                    Pitago (Pythagoras), Jabir ibn Hayyan và một số người khác cũng như các trường phái khác
                                    nhau. Trong đó, nổi bật hơn cả và được nhiều người ứng dụng là trường phái thần số học
                                    Pitago.<br />
                                    Thần số học là một bộ môn khoa học lý luận nghiên cứu điểm mạnh, điểm yếu, tính cách và tâm
                                    hồn của con người. Trên cơ sở đó, thần số học đưa ra các lời khuyên, nhận định giúp mọi
                                    người thay đổi cuộc sống.<br />
                                </p>
                            </div>
                            <div className="col-lg-7">
                                <img src="https://res.cloudinary.com/appgnh/image/upload/v1679556356/thanso/motathansohoc.png"
                                    alt="" width="100%" />
                            </div>
                        </div>
                    }
                </div>
            </div>
          </MasterNumber>
          <div id="report2"></div>
          <div id="report3"></div>
        </section>

        <section>
          <div>
            {/* <p id="sally">
              Nội dung này chỉ là một lời giải thích ngắn gọn về những phẩm chất tuyệt vời bạn sở hữu.
            </p> */}
            <div className="fl imgAvatar">
              <img src={"./pix/avatar.jpg"} width="250px"/>
            </div>

            <div className="fl">
              <div id="allNumbers"></div>
              <p>
                Tìm hiểu thêm về Thần số học của bạn và ý nghĩa của chúng đối với bạn   
                {/* <strong>
                  <a href="https://kabala.vn/san-pham/ebook-than-so-hoc/" target="news">
                    Ebook Thần số
                  </a>
                </strong> */}
                <button onClick={this.handleCheckout}>Ebook Thần số</button>
              </p>
              <ul className="linespace">
                <li>
                  Thay đổi cuộc đời với   
                  <a href="https://bke.edu.vn/thansohoc" target="news"> THẦN SỐ HỌC 3 GỐC</a>
                </li>
                <li>
                  Thấu hiểu bản thân và tìm ra tấm bản đồ định hướng cuộc đời   
                  <a
                    href="https://bke.edu.vn/docvi/"
                    target="book"> ĐỌC VỊ BẤT KỲ AI</a>
                </li>
                <li>
                  Hành trình thấu hiểu bản thân và Giải mã cuộc đời  
                  <a
                    href="https://bke.edu.vn/hanhtrinhthauhieu/"
                    target="app"
                    > HÀNH TRÌNH THẤU HIỂU</a>
                </li>
                <li>
                  <a href="https://bke.edu.vn/" target="reading"> Viện đào tạo Bách khoa BKE</a> và hành trình cuộc đời
                </li>
          <li>
                  <a href="https://bke.edu.vn/san-pham/ebook-than-so-hoc/" target="reading">
                    Nâng cấp Ebook Thần Số
                    </a> để mở khóa đầy đủ nội dung và 20+ con số!
                </li>
              </ul>
            </div>
            <div className="clearer"></div>
          </div>
        </section>
      </NumerologyStyle>
    );
  }
}

export const FunctionalComponentToPrint = React.forwardRef((props, ref) => {
  // eslint-disable-line max-len
  return <NumerologyComponent3G ref={ref} text={props.text} />;
});
