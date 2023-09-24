// obj chuyển đổi chữ thành số
const objectQuyDoiChu = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 1,
    K: 2,
    L: 3,
    M: 4,
    N: 5,
    O: 6,
    P: 7,
    Q: 8,
    R: 9,
    S: 1,
    T: 2,
    U: 3,
    V: 4,
    W: 5,
    X: 6,
    Y: 7,
    Z: 8,
  };


  // const elem = (id) => document.getElementById(id);
  // const getValue = (id) => elem(id).value || "";

  // var hoDem = getValue("fname");
  // var ten = getValue("lname");
  // var sinhNhat = $("#ngaysinh").val();
  // console.log(sinhNhat);
  // var tentacy = getValue("wname");

  export function calcName() {
    let arrTen = getChuCaiToArr(arrTen);
    let arrHoDem = getChuCaiToArr(arrHoDem);
    let arrChiaNguyenAmPhuAmTen = getChiaNguyenAmPhuAm(arrTen);
    let arrChiaNguyenAmPhuAmHoDem = getChiaNguyenAmPhuAm(arrHoDem);
    let tongArrTen = getChuyenDoiSoTenVaHoDem(arrTen);
    let tongArrHoDem = getChuyenDoiSoTenVaHoDem(arrHoDem);
    let tongArrNguyenAmVaPhuAmTen = getChuyenDoiSoNguyenAmVaPhuAm(
      arrChiaNguyenAmPhuAmTen
    );
    let tongArrNguyenAmVaPhuAmHoDem = getChuyenDoiSoNguyenAmVaPhuAm(
      arrChiaNguyenAmPhuAmHoDem
    );
    let tongCongArrTen = tinhTongGiuSoBacThay(tongArrTen);
    // console.log(tongCongArrTen);
    let tongCongArrHoDem = tinhTongGiuSoBacThay(tongArrHoDem);
    // console.log(tongCongArrHoDem);

    let tongCongArrVanMenh = [...tongCongArrTen, ...tongCongArrHoDem];
    // Tính được số vận mệnh - Số Họ Tên
    var finalSoVanMenh = tinhTongCacSoTuMangGiuSoBacThay(tongCongArrVanMenh);
    // console.log(finalSoVanMenh);
    // Tính được số Tên
    var finalSoTen = tinhTongCacSoTuMangGiuSoBacThay(tongCongArrTen);
    // console.log(finalSoTen);

    var tongArrNguyenAmHoVaTen = [
      ...tongArrNguyenAmVaPhuAmTen["nguyenam"],
      ...tongArrNguyenAmVaPhuAmHoDem["nguyenam"],
    ];
    var tongArrPhuAmHoVaTen = [
      ...tongArrNguyenAmVaPhuAmTen["phuam"],
      ...tongArrNguyenAmVaPhuAmHoDem["phuam"],
    ];

    // console.log(tongArrNguyenAmHoVaTen);
    // console.log(tongArrPhuAmHoVaTen);

    // Tính được số Biểu Lộ
    var finalSoBieuLo = tinhTongCacSoTuMangGiuSoBacThay(tongArrPhuAmHoVaTen);
    // console.log(finalSoBieuLo);
    // Tính được số Nội Tâm
    var finalSoNoiTam = tinhTongCacSoTuMangGiuSoBacThay(tongArrNguyenAmHoVaTen);
    // console.log(finalSoNoiTam);

  }

  export function calcBDay(){
    var arrNgaySinh = chuyenDoiDateThanhArr(sinhNhat).day;
    var arrThangSinh = chuyenDoiDateThanhArr(sinhNhat).month;
    var arrNamSinh = chuyenDoiDateThanhArr(sinhNhat).year;

    // console.log(arrNgaySinh);
    // console.log(arrThangSinh);
    // console.log(arrNamSinh);

    var tongNgaySinh = tinhTongCacSoTuMangGiuSoBacThay(arrNgaySinh);
    var tongThangSinh = tinhTongCacSoTuMangGiuSoBacThay(arrThangSinh);
    var tongNamSinh = tinhTongCacSoTuMangGiuSoBacThay(arrNamSinh);

    var arrNgaySinhKhongBacThay =
      chuyenDoiDateThanhArrKhongGiuSoBacThay(sinhNhat).day;
    var arrThangSinhKhongBacThay =
      chuyenDoiDateThanhArrKhongGiuSoBacThay(sinhNhat).month;
    var arrNamSinhKhongBacThay =
      chuyenDoiDateThanhArrKhongGiuSoBacThay(sinhNhat).year;
    // console.log(arrNgaySinhKhongBacThay);
    // console.log(arrThangSinhKhongBacThay);
    // console.log(arrNamSinhKhongBacThay);

    var tongNgaySinhKhongBacThay = tinhTongCacSoTuMangKhongGiuSoBacThay(
      arrNgaySinhKhongBacThay
    );
    var tongThangSinhKhongBacThay = tinhTongCacSoTuMangKhongGiuSoBacThay(
      arrThangSinhKhongBacThay
    );
    var tongNamSinhKhongBacThay = tinhTongCacSoTuMangKhongGiuSoBacThay(
      arrNamSinhKhongBacThay
    );

    // console.log(tongNgaySinh);
    // console.log(tongThangSinh);
    // console.log(tongNamSinh);

    // Tính được số Chủ Đạo - Đường Đời
    var arrSoChuDao = [tongNgaySinh, tongThangSinh, tongNamSinh];
    var arrSoNgaySinh = [tongNgaySinh];
    var finalSoNgaySinh = tinhTongCacSoTuMangGiuSoBacThay(arrSoNgaySinh);
    var finalSoChuDao = tinhTongCacSoTuMangGiuSoBacThay(arrSoChuDao);
    // console.log(finalSoChuDao);

    // Tính Số trưởng thành = tên + ngày sinh
    var arrSoTruongThanh = [finalSoChuDao, finalSoVanMenh];
    var finalSoTruongThanh = tinhTongCacSoTuMangGiuSoBacThay(arrSoTruongThanh);
    // console.log(finalSoTruongThanh);

    // ------------------------ XỬ LÍ PHẦN 4 ĐỈNH CUỘC ĐỜI ------------------------
    // var arrtest =[1,2,3,4,5,6,7,8,9,10,11,20,22,30,33];
    // for (let index = 0; index < arrtest.length; index++) {
    //   const element = 36 - getDinhCuocDoi(arrtest[index]) ;
    //   console.log(arrtest[index] + " tương ứng " + element );
    // }

    var dinh1 = 36 - getDinhCuocDoi(finalSoChuDao);
    var dinh2 = dinh1 + 9;
    var dinh3 = dinh2 + 9;
    var dinh4 = dinh3 + 9;

    // console.log(dinh1);
    // console.log(dinh2);
    // console.log(dinh3);
    // console.log(dinh4);

    var arrTongNgaySinhThangSinh = [
      tongNgaySinhKhongBacThay,
      tongThangSinhKhongBacThay,
    ];
    var arrTongNgaySinhNamSinh = [
      tongNgaySinhKhongBacThay,
      tongNamSinhKhongBacThay,
    ];
    var soDinh1 = tinhTongCacSoTuMangGiuSoBacThay(arrTongNgaySinhThangSinh);
    var soDinh2 = tinhTongCacSoTuMangGiuSoBacThay(arrTongNgaySinhNamSinh);

    var arrTongDinh1Dinh2 = [soDinh1, soDinh2];
    var soDinh3 = tinhTongCacSoTuMangGiuSoBacThay(arrTongDinh1Dinh2);
    var arrTongThangSinhNamSinh = [
      tongThangSinhKhongBacThay,
      tongNamSinhKhongBacThay,
    ];
    // console.log(arrTongThangSinhNamSinh);
    var soDinh4 = tinhTongCacSoTuMangGiuSoBacThay(arrTongThangSinhNamSinh);


    // ------------------------ XỬ LÍ PHẦN NĂNG LƯỢNG CON SỐ ------------------------
    // gộp tất cả dãy vào trong 1 mảng để đếm
    // ngay thang nam x1
    var arrThanSo = [...arrNgaySinh, ...arrThangSinh, ...arrNamSinh];
    var hienThiNgaySinh = arrThanSo.toString();
    $("#hienThiNgaySinh").html(hienThiNgaySinh);

    // push soDinh values to arrThanSo
    const soDinhValues = [soDinh1, soDinh2, soDinh3, soDinh4];
    // Đinh x2
    arrThanSo.push(...soDinhValues, ...soDinhValues);

    // ten, noi tam, bieulo x1
    // push other values to arrThanSo
    arrThanSo.push(finalSoTen, finalSoNoiTam, finalSoBieuLo);
    // van menh ho ten x3
    // push finalSoVanMenh to arrThanSo
    for (let i = 0; i < 3; i++) {
      arrThanSo.push(finalSoVanMenh);
    }
    // duong doi - chủ đạo x4
    // push finalSoChuDao to arrThanSo
    for (let i = 0; i < 4; i++) {
      arrThanSo.push(finalSoChuDao);
    }
    // truong thanh x3
    // push finalSoTruongThanh to arrThanSo
    for (let i = 0; i < 3; i++) {
      arrThanSo.push(finalSoTruongThanh);
    }
    if(finalSoTenTacY !==""){
      for (let i = 0; i < 2; i++) {
        arrThanSo.push(finalSoTenTacY);
      }
    }
    // console.log(arrThanSo);

    var bangSo = demSoTrongMang(arrThanSo);
    var finalSo = bangSo[0];
    var nangLuong = bangSo[1];
    // console.log(finalSo);
    // console.log(soNangLuongCao);
    var so1 = getBangSo(finalSo, 1);
    var so2 = getBangSo(finalSo, 2);
    var so3 = getBangSo(finalSo, 3);
    var so4 = getBangSo(finalSo, 4);
    var so5 = getBangSo(finalSo, 5);
    var so6 = getBangSo(finalSo, 6);
    var so7 = getBangSo(finalSo, 7);
    var so8 = getBangSo(finalSo, 8);
    var so9 = getBangSo(finalSo, 9);
    var so10 = getBangSo(finalSo, 10);
    var so11 = getBangSo(finalSo, 11);
    var so20 = getBangSo(finalSo, 20);
    var so22 = getBangSo(finalSo, 22);
    var so30 = getBangSo(finalSo, 30);
    var so33 = getBangSo(finalSo, 33);
  }

  export function calcWname() {
    var finalSoTenTacY = ""; // mặc định rỗng
    // console.log(typeof tentacy); -> kiểm tra type
    if (tentacy.trim() === "") {
    } else {
      var arrTenTacY = getChuCaiToArr(tentacy);
      var tongArrTenTacY = getChuyenDoiSoTenVaHoDem(arrTenTacY);
      // console.log(tongArrTenTacY);
      finalSoTenTacY = tinhTongCacSoTuMangGiuSoBacThay(
        tinhTongGiuSoBacThay(tongArrTenTacY)
      );
      // console.log(finalSoTenTacY);
    }
  }

  export function calcDeep() {
    // ------------------------ Lớp khai vấn chuyên sâu ------------------------
    // ----------------- Thử thách ----------------------
    var arrNgaySinhKhongBacThay =
      chuyenDoiDateThanhArrKhongGiuSoBacThay(sinhNhat).day;
    var arrThangSinhKhongBacThay =
      chuyenDoiDateThanhArrKhongGiuSoBacThay(sinhNhat).month;
    var arrNamSinhKhongBacThay =
      chuyenDoiDateThanhArrKhongGiuSoBacThay(sinhNhat).year;
    // console.log(arrNgaySinhKhongBacThay);
    // console.log(arrThangSinhKhongBacThay);
    // console.log(arrNamSinhKhongBacThay);

    var tongNgaySinhKhongBacThay = tinhTongCacSoTuMangKhongGiuSoBacThay(
      arrNgaySinhKhongBacThay
    );
    var tongThangSinhKhongBacThay = tinhTongCacSoTuMangKhongGiuSoBacThay(
      arrThangSinhKhongBacThay
    );
    var tongNamSinhKhongBacThay = tinhTongCacSoTuMangKhongGiuSoBacThay(
      arrNamSinhKhongBacThay
    );

    var thuthach1 = truHaiSoLayHieuDuong(
      tongNgaySinhKhongBacThay,
      tongThangSinhKhongBacThay
    );
    var thuthach2 = truHaiSoLayHieuDuong(
      tongNgaySinhKhongBacThay,
      tongNamSinhKhongBacThay
    );
    var thuthach3 = truHaiSoLayHieuDuong(thuthach1, thuthach2);
    var thuthach4 = truHaiSoLayHieuDuong(
      tongThangSinhKhongBacThay,
      tongNamSinhKhongBacThay
    );

    // console.log(thuthach1);
    // console.log(thuthach2);
    // console.log(thuthach3);
    // console.log(thuthach4);

    $("#thuthach1").html(thuthach1);
    $("#thuthach2").html(thuthach2);
    $("#thuthach3").html(thuthach3);
    $("#thuthach4").html(thuthach4);
    // ----------------- Năm Tháng ngày cá nhân ----------------------
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1; //months from 1-12
    var year = today.getFullYear();

    var arrDay = chuyenDoiNumberThanhMang(day);
    var arrMonth = chuyenDoiNumberThanhMang(month);
    var arrYear = chuyenDoiNumberThanhMang(year);
    // console.log(arrDay);
    // console.log(arrMonth);
    // console.log(arrYear);
    var thangRutGon = tinhTongCacSoTuMangKhongGiuSoBacThay(arrMonth);
    var ngayRutGon = tinhTongCacSoTuMangKhongGiuSoBacThay(arrDay);

    // Tính được năm cá nhân, tháng cá nhân và ngày cá nhân
    var arrNamCaNhan = [...arrYear, ...arrNgaySinh, ...arrThangSinh];
    var finalNamCaNhan = tinhTongCacSoTuMangKhongGiuSoBacThay(arrNamCaNhan);
    // console.log(finalNamCaNhan);

    var arrThangCaNhan = [finalNamCaNhan, thangRutGon];
    var finalThangCaNhan = tinhTongCacSoTuMangKhongGiuSoBacThay(arrThangCaNhan);
    // console.log(finalThangCaNhan);

    var arrNgayCaNhan = [finalThangCaNhan, ngayRutGon];
    var finalNgayCaNhan = tinhTongCacSoTuMangKhongGiuSoBacThay(arrNgayCaNhan);
    // console.log(finalNgayCaNhan);

    $("#namCaNhan").html(finalNamCaNhan);
    $("#thangCaNhan").html(finalThangCaNhan);
    $("#ngayCaNhan").html(finalNgayCaNhan);
    // ----------------- Tư duy lí trí = tên + ngày sinh ----------------------
    var arrTuDuyLyTri = [finalSoTen, tongNgaySinh];
    var finalSoTuDuyLyTri = tinhTongCacSoTuMangGiuSoBacThay(arrTuDuyLyTri);
    $("#sochitiet_tuduylitri").html(finalSoTuDuyLyTri);

    // ---------------- Số Cân bằng - các ký tự đầu trong họ và tên ------------
    function getChuCaiDauTienTrongHoTen(arr) {
      let newArr = [];
      for (let index = 0; index < arr.length; index++) {
        // var element = chuyenDoiNguyenAmVaPhuAm(arr[index]);
        var element = arr[index][0]; //lấy ký tự đầu tiên
        newArr.push(element);
      }
      return newArr;
    }
    function chuyenDoiChuThanhSo(arr) {
      const result = [];
      for (let i = 0; i < arr.length; i++) {
        const char = arr[i]?.toUpperCase(); // convert to uppercase to match object keys
        const number = objectQuyDoiChu[char];
        if (number) {
          result.push(number);
        }
      }
      return result;
    }

    var arrChuCaiDauTrongHoDem = getChuCaiDauTienTrongHoTen(arrHoDem);
    var arrChuCaiDauTrongTen = getChuCaiDauTienTrongHoTen(arrTen);
    var arrChuCaiDauTrongHoTen = [
      ...arrChuCaiDauTrongHoDem,
      ...arrChuCaiDauTrongTen,
    ];

    var arrTongChuCaiDauTrongHoTen = chuyenDoiChuThanhSo(
      arrChuCaiDauTrongHoTen
    );
    // console.log(arrTongChuCaiDauTrongHoTen);
    var finalSoCanBang = tinhTongCacSoTuMangGiuSoBacThay(
      arrTongChuCaiDauTrongHoTen
    );
    $("#sochitiet_canbang").html(finalSoCanBang);
    // ------- Liên kết chủ đạo - vận mệnh, nội tâm - biểu lộ -----------------

    var finalSoChuDaoVanMenh = truHaiSoLayHieuDuong(
      finalSoChuDao,
      finalSoVanMenh
    );
    var finalSoNoiTamBieuLo = truHaiSoLayHieuDuong(
      finalSoNoiTam,
      finalSoBieuLo
    );
    $("#sochitiet_chudaovanmenh").html(finalSoChuDaoVanMenh);
    $("#sochitiet_noitambieulo").html(finalSoNoiTamBieuLo);

    // --------------- Số Thiếu ----------------------
    function chuyenDoiTextThanhArr(inputString) {
      const unsignedString = inputString
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      const processString = unsignedString.replace(/\s+/g, "").toUpperCase();
      const outputString = processString.split("");
      return outputString;
    }

    var arrHoVaTen = chuyenDoiTextThanhArr(hoVaTen);
    var arrSoHoVaTen = chuyenDoiChuThanhSo(arrHoVaTen);
    var checkSoThieuArrSoHoVaTen = timSoBiThieuTrongArr(arrSoHoVaTen);
    // console.log(checkSoThieuArrSoHoVaTen);
    if (checkSoThieuArrSoHoVaTen["count"] == 0) {
      let finalSoThieu = checkSoThieuArrSoHoVaTen["missing"];
      $("#sochitiet_sothieu").html(finalSoThieu);
    } else {
      let finalSoThieu = checkSoThieuArrSoHoVaTen["missing"].toString();
      $("#sochitiet_sothieu").html(finalSoThieu);
    }
    // ------------ Sức mạnh tiềm thức: 9 trừ số số thiếu ----------------------
    var finalSoSucManhTiemThuc = 9 - checkSoThieuArrSoHoVaTen["count"];
    $("#sochitiet_sucmanhtiemthuc").html(finalSoSucManhTiemThuc);

    // -------------- Nợ nghiệp --------------------------------------------------
    /** chủ đạo, vận mệnh, trưởng thành, ngày sinh, tên riêng, nội tâm, biểu lộ */

    var noNghiepSoChuDao = checkNoNghiep(arrSoChuDao);
    var noNghiepSoVanMenh = checkNoNghiep(tongCongArrVanMenh);
    var noNghiepSoTruongThanh = checkNoNghiep(arrSoTruongThanh);
    var noNghiepSoNgaySinh = checkNoNghiep(arrSoNgaySinh);
    var noNghiepSoTen = checkNoNghiep(tongCongArrTen);
    var noNghiepSoNoiTam = checkNoNghiep(tongArrNguyenAmHoVaTen);
    var noNghiepSoBieuLo = checkNoNghiep(tongArrPhuAmHoVaTen);

    $('#nonghiep_chudao').html(noNghiepSoChuDao);
    $('#nonghiep_vanmenh').html(noNghiepSoVanMenh);
    $('#nonghiep_truongthanh').html(noNghiepSoTruongThanh);
    $('#nonghiep_ngaysinh').html(noNghiepSoNgaySinh);
    $('#nonghiep_ten').html(noNghiepSoTen);
    $('#nonghiep_noitam').html(noNghiepSoNoiTam);
    $('#nonghiep_bieulo').html(noNghiepSoBieuLo);





    // ------------------------ end Lớp khai vấn chuyên sâu ------------------------
  }


  
  //v2 Chuyển đổi để lấy nguyên âm, phụ âm trong tên.
  export function chuyenDoiNguyenAmVaPhuAm(arr) {
    const vowels = ["A", "E", "I", "O", "U"];
    let is_y_vowel = false;
  
    if (arr.length === 1 && arr[0] === "Y") {
      is_y_vowel = true;
    } else {
      if (arr[0] === "Y" && !vowels.includes(arr[1])) {
        is_y_vowel = true;
      } else if (
        arr[arr.length - 1] === "Y" &&
        !vowels.includes(arr[arr.length - 2])
      ) {
        is_y_vowel = true;
      } else {
        for (let i = 1; i < arr.length - 1; i++) {
          if (
            arr[i] === "Y" &&
            !vowels.includes(arr[i - 1]) &&
            !vowels.includes(arr[i + 1])
          ) {
            is_y_vowel = true;
            break;
          }
        }
      }
    }
  
    let regex;
    if (is_y_vowel) {
      regex = /[aeiouy]/i;
    } else {
      regex = /[aeiou]/i;
    }
  
    const nguyenAm = [];
    const phuAm = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (regex.test(arr[i])) {
        nguyenAm.push(arr[i]);
      } else {
        phuAm.push(arr[i]);
      }
    }
  
    return { nguyenAm, phuAm };
  }
  
  // Chuyển đổi tất cả các mảng từ chữ cái trên thành số tương ứng -> cộng tổng chúng dần
  export function chuyenDoiChuThanhSoVaTinhTongArr(arr) {
    // export function giúp Cộng các số trong mảng lại với nhau
    function tongSoTuArr(arr) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
    }
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const char = arr[i]?.toUpperCase(); // convert to uppercase to match object keys
      const number = objectQuyDoiChu[char];
      if (number) {
        result.push(number);
      }
    }
    const sum = tongSoTuArr(result);
    return sum;
  }
  
  export function lamTronSoVeDuoi9GiuSoBacThay(number) {
    // Case 1: number is from 1 to 9, keep it the same
    if (number >= 1 && number <= 9) {
      return number;
    }
  
    // Case 2: number is one of 10, 11, 20, 22, 30, or 33, keep it the same
    if ([10, 11, 20, 22, 30, 33].includes(number)) {
      return number;
    }
  
    // Case 3: add the digits together and keep adding if the sum is greater than 11
    let sum = 0;
    while (number > 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }
  
    if (sum <= 11) {
      return sum;
    } else {
      return lamTronSoVeDuoi9GiuSoBacThay(sum);
    }
  }
  
  // Chuyển đổi chuỗi ngày tháng năm sinh thành 3 mảng ngày sinh, tháng sinh và năm sinh riêng biệt.
  export function chuyenDoiDateThanhArr(inputDate) {
    const dateArray = inputDate.split("-");
    // typedate yyyy-mm-dd
    var year = dateArray[0];
    var month = dateArray[1];
    var day = dateArray[2];
    // giữ lại số to trong ngày, tháng, năm (nếu tính cả năm 10,20,30 => vẫn cần giữ)
    var dayArray =
      day === "10" ||
      day === "11" ||
      day === "20" ||
      day === "22" ||
      day === "30" ||
      day === "33"
        ? [Number(day)]
        : day.split("").map(Number);
    var monthArray =
      month === "10" ||
      month === "11" ||
      month === "20" ||
      month === "22" ||
      month === "30" ||
      month === "33"
        ? [Number(month)]
        : month.split("").map(Number);
    var yearArr =
      year === "10" ||
      year === "11" ||
      year === "20" ||
      year === "22" ||
      year === "30" ||
      year === "33"
        ? [Number(year)]
        : year.split("").map(Number);
    function xoaSoKhong(arr) {
      if (arr.includes(0)) {
        return arr.filter((elem) => elem !== 0);
      }
      return arr;
    }
    return {
      day: xoaSoKhong(dayArray),
      month: xoaSoKhong(monthArray),
      year: xoaSoKhong(yearArr),
    };
  }
  
  export function getDinhCuocDoi(number) {
    const dinhCuocDoiMap = {
      20: 2,
      30: 3,
      22: 4,
      33: 6,
      1: 10,
    };
    return dinhCuocDoiMap[number] || number;
  }
  
  export function demSoTrongMang(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
      var element = arr[i];
      if (obj[element]) {
        obj[element]++;
      } else {
        obj[element] = 1;
      }
    }
    // Thêm các khóa chưa xuất hiện trong object và đặt giá trị là 0
    var keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20, 22, 30, 33];
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!obj.hasOwnProperty(key)) {
        obj[key] = 0;
      }
    }
    var sortedArr = Object.entries(obj).sort(function (a, b) {
      return b[1] - a[1];
    });
    // lấy ra mảng 4 số
    var fourNumber = sortedArr.slice(0, 4);
  
    return [obj, fourNumber];
  }
  
  export function getBangSo(obj, number) {
    var soLuong = obj[number];
    if (soLuong == 0) {
      return "";
    } else {
      return `${number}^${soLuong}`;
    }
  }
  
  // --------------- các hàm phục vụ tính nâng cao -------------
  
  export function lamTronSoVeDuoi9KhongGiuSoBacThay(number) {
    if (number <= 9) {
      return number;
    } else {
      let sum = 0;
      String(number)
        .split("")
        .forEach(function (digit) {
          sum = sum + Number(digit);
        });
      return lamTronSoVeDuoi9KhongGiuSoBacThay(sum);
    }
  }
  
  export function chuyenDoiDateThanhArrKhongGiuSoBacThay(inputDate) {
    const dateArray = inputDate.split("-");
    // typedate yyyy-mm-dd
    var year = dateArray[0];
    var month = dateArray[1];
    var day = dateArray[2];
    // giữ lại số to trong ngày, tháng, năm (nếu tính cả năm 10,20,30 => vẫn cần giữ)
    var dayArray = day.split("").map(Number);
    var monthArray = month.split("").map(Number);
    var yearArr = year.split("").map(Number);
    function xoaSoKhong(arr) {
      if (arr.includes(0)) {
        return arr.filter((elem) => elem !== 0);
      }
      return arr;
    }
    return {
      day: xoaSoKhong(dayArray),
      month: xoaSoKhong(monthArray),
      year: xoaSoKhong(yearArr),
    };
  }
  
  export function truHaiSoLayHieuDuong(num1, num2) {
    let result = num1 - num2;
    if (result < 0) {
      result = -result;
    }
    return result;
  }
  
  export function chuyenDoiNumberThanhMang(number) {
    return String(number).split("").map(Number);
  }
  
  export function timSoBiThieuTrongArr(arr) {
    const nums = new Set(arr);
    const missing = [];
    let count = 0;
    for (let i = 1; i <= 9; i++) {
      if (!nums.has(i)) {
        missing.push(i);
        count++;
      }
    }
    if (count > 0) {
      return { count, missing };
    } else {
      return { count: 0, missing: "Không" };
    }
  }
  
  export function checkNoNghiep(arr) {
    let number = 0;
    for (let i = 0; i < arr.length; i++) {
      let element = arr[i];
      number += element;
    }
    if (number == 13) {
      return "Nợ nghiệp 13/4";
    } else if (number == 14) {
      return "Nợ nghiệp 14/5";
    } else if (number == 16) {
      return "Nợ nghiệp 16/7";
    } else if (number == 19) {
      return "Nợ nghiệp 19/1";
    } else {
      return "Không nợ nghiệp";
    }
  }

  export function getChuCaiToArr(arr) {
    // Convert first name, last name to uppercase, remove diacritics, and put them in an array
    function chuyenDoiTextThanhArr(inputString) {
      const unsignedString = inputString
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Bỏ dấu
        .replace(/[ĂÂăâ]/g, "A") // Hằng, HẰNG, Hân, Hân
        .replace(/[Đđ]/g, "D") // Đại, ĐẠI
        .replace(/[Êê]/g, "E") // Tiến, TIẾN
        .replace(/[ÔƠôơ]/g, "O") // Hồng, Mơ, 
        .replace(/[Ưư]/g, "U"); // Thư
      const processString = unsignedString.replace(/\s+/g, "").toUpperCase();
      const outputString = processString.split("");
      return outputString;
    }
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
      var element = chuyenDoiTextThanhArr(arr[index]);
      newArr.push(element);
    }
    return newArr;
  }

  export function getChiaNguyenAmPhuAm(arr) {
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
      var element = chuyenDoiNguyenAmVaPhuAm(arr[index]);
      newArr.push(element);
    }
    return newArr;
  }

  export function getChuyenDoiSoTenVaHoDem(arr) {
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
      var element = chuyenDoiChuThanhSoVaTinhTongArr(arr[index]);
      newArr.push(element);
    }
    return newArr;
  }

  export function getChuyenDoiSoNguyenAmVaPhuAm(arr) {
    let newArrNguyenAm = [];
    let newArrPhuAm = [];
    for (let index = 0; index < arr.length; index++) {
      var element = arr[index];
      var nguyenAm = chuyenDoiChuThanhSoVaTinhTongArr(element["nguyenAm"]);
      var phuAm = chuyenDoiChuThanhSoVaTinhTongArr(element["phuAm"]);
      newArrNguyenAm.push(nguyenAm);
      newArrPhuAm.push(phuAm);
    }
    return { nguyenam: newArrNguyenAm, phuam: newArrPhuAm };
  }

  export function tinhTongGiuSoBacThay(arr) {
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
      // console.log(arr[index]);
      var element = lamTronSoVeDuoi9GiuSoBacThay(arr[index]);
      newArr.push(element);
    }
    return newArr;
  }

  export function tinhTongCacSoTuMangGiuSoBacThay(arr) {
    var sum = 0;
    for (let index = 0; index < arr.length; index++) {
      // console.log(arr[index]);
      var element = arr[index];
      sum = sum + element;
    }
    var result = lamTronSoVeDuoi9GiuSoBacThay(sum);
    return result;
  }

  // ------------------------ XỬ LÍ PHẦN VỀ NGÀY SINH ------------------------
  export function tinhTongCacSoTuMangKhongGiuSoBacThay(arr) {
    var sum = 0;
    for (let index = 0; index < arr.length; index++) {
      // console.log(arr[index]);
      var element = arr[index];
      sum = sum + element;
    }
    var result = lamTronSoVeDuoi9KhongGiuSoBacThay(sum);
    return result;
  }


  export function calc(){
    // ----------------------- ẨN HIỆN FORM ------------------------
    $("#gioithieu").addClass("hidden");
    $("#bangthanso").removeClass("hidden");
    $("#componetthanso").addClass("hidden");
    $("#showform").removeClass("hidden");
    // ----------------------- end ẨN HIỆN FORM ------------------------
    // ----------------------- XOÁ DỮ LIỆU BAN ĐẦU ------------------------
    $("#finalSoDuongDoi").html("");
    $("#hoVaTen").html("");
    $("#tacY").html("");
    $("#sinhNhat").html("");
    $("#dinh1").html("");
    $("#dinh2").html("");
    $("#dinh3").html("");
    $("#dinh4").html("");
    $("#soDinh1").html("");
    $("#soDinh2").html("");
    $("#soDinh3").html("");
    $("#soDinh4").html("");
    $("#soDuongDoi").html("");
    $("#soVanMenh").html("");
    $("#soTruongThanh").html("");
    $("#soTenTacY").html("");
    $("#soTen").html("");
    $("#soBieuLo").html("");
    $("#soNoiTam").html("");
    $("#so1").html("");
    $("#so2").html("");
    $("#so3").html("");
    $("#so4").html("");
    $("#so5").html("");
    $("#so6").html("");
    $("#so7").html("");
    $("#so8").html("");
    $("#so9").html("");
    $("#so10").html("");
    $("#so11").html("");
    $("#so20").html("");
    $("#so22").html("");
    $("#so30").html("");
    $("#so33").html("");
    $("#sochitiet_ten").html("");
    $("#sochitiet_noitam").html("");
    $("#sochitiet_bieulo").html("");
    $("#sochitiet_vanmenh").html("");
    $("#sochitiet_truongthanh").html("");
    $("#sochitiet_duongdoi").html("");
    $("#sochitiet_tacy").html("");

    // lớp nâng cao
    $("#thuthach1").html("");
    $("#thuthach2").html("");
    $("#thuthach3").html("");
    $("#thuthach4").html("");

    $("#namCaNhan").html("");
    $("#thangCaNhan").html("");
    $("#ngayCaNhan").html("");

    $("#sochitiet_tuduylitri").html("");
    $("#sochitiet_canbang").html("");
    $("#sochitiet_chudaovanmenh").html("");
    $("#sochitiet_noitambieulo").html("");
    $("#sochitiet_sothieu").html("");
    $("#sochitiet_sucmanhtiemthuc").html("");

    $('#nonghiep_chudao').html("");
    $('#nonghiep_vanmenh').html("");
    $('#nonghiep_truongthanh').html("");
    $('#nonghiep_ngaysinh').html("");
    $('#nonghiep_ten').html("");
    $('#nonghiep_noitam').html("");
    $('#nonghiep_bieulo').html("");

    // ----------------------- END XOÁ DỮ LIỆU BAN ĐẦU ------------------------

    var hoDem = $("#fname").val();
    var ten = $("#lname").val();
    // var sinhNhat = $("#ngaysinh").val();
    // console.log(sinhNhat);
    var tentacy = $("#wname").val();
    // var email = $("#email").val();
    // ----------------------- XỬ LÍ PHẦN TÊN ------------------------
    // gộp chung lại để lấy họ và tên -> xử lí phần số thiếu
    var hoVaTen = hoDem + " " + ten;
    // phân tách tên thành mảng
    var arrHoDem = hoDem.split(" ");
    var arrTen = ten.split(" ");

    // console.log(ten); //Minh
    // console.log(sinhNhat); //01/01/1998

    // console.log(arrHoDem);

    // chuyển đổi tên, họ thành chữ cái trong từng mảng
    function getChuCaiToArr(arr) {
      // Convert first name, last name to uppercase, remove diacritics, and put them in an array
      function chuyenDoiTextThanhArr(inputString) {
        const unsignedString = inputString
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "") // Bỏ dấu
          .replace(/[ĂÂăâ]/g, "A") // Hằng, HẰNG, Hân, Hân
          .replace(/[Đđ]/g, "D") // Đại, ĐẠI
          .replace(/[Êê]/g, "E") // Tiến, TIẾN
          .replace(/[ÔƠôơ]/g, "O") // Hồng, Mơ, 
          .replace(/[Ưư]/g, "U"); // Thư
        const processString = unsignedString.replace(/\s+/g, "").toUpperCase();
        const outputString = processString.split("");
        return outputString;
      }
      let newArr = [];
      for (let index = 0; index < arr.length; index++) {
        var element = chuyenDoiTextThanhArr(arr[index]);
        newArr.push(element);
      }
      return newArr;
    }

    arrTen = getChuCaiToArr(arrTen);
    arrHoDem = getChuCaiToArr(arrHoDem);

    // console.log(arrHoDem); // [['T', 'R', 'I', 'N', 'H'],['V', 'A', 'N']]
    // console.log(arrTen); //[['M', 'I', 'N', 'H'],['T', 'H', 'A', 'O']]

    // Tìm kiếm nguyên âm và phụ âm trong họ và tên

    function getChiaNguyenAmPhuAm(arr) {
      let newArr = [];
      for (let index = 0; index < arr.length; index++) {
        var element = chuyenDoiNguyenAmVaPhuAm(arr[index]);
        newArr.push(element);
      }
      return newArr;
    }

    var arrChiaNguyenAmPhuAmTen = getChiaNguyenAmPhuAm(arrTen);
    var arrChiaNguyenAmPhuAmHoDem = getChiaNguyenAmPhuAm(arrHoDem);
    // console.log(arrChiaNguyenAmPhuAmTen);
    // console.log(arrChiaNguyenAmPhuAmHoDem);

    function getChuyenDoiSoTenVaHoDem(arr) {
      let newArr = [];
      for (let index = 0; index < arr.length; index++) {
        var element = chuyenDoiChuThanhSoVaTinhTongArr(arr[index]);
        newArr.push(element);
      }
      return newArr;
    }

    var tongArrTen = getChuyenDoiSoTenVaHoDem(arrTen);
    var tongArrHoDem = getChuyenDoiSoTenVaHoDem(arrHoDem);

    // console.log(tongArrTen); //[26]
    // console.log(tongArrHoDem); //[33, 10]

    function getChuyenDoiSoNguyenAmVaPhuAm(arr) {
      let newArrNguyenAm = [];
      let newArrPhuAm = [];
      for (let index = 0; index < arr.length; index++) {
        var element = arr[index];
        var nguyenAm = chuyenDoiChuThanhSoVaTinhTongArr(element["nguyenAm"]);
        var phuAm = chuyenDoiChuThanhSoVaTinhTongArr(element["phuAm"]);
        newArrNguyenAm.push(nguyenAm);
        newArrPhuAm.push(phuAm);
      }
      return { nguyenam: newArrNguyenAm, phuam: newArrPhuAm };
    }

    var tongArrNguyenAmVaPhuAmTen = getChuyenDoiSoNguyenAmVaPhuAm(
      arrChiaNguyenAmPhuAmTen
    );
    var tongArrNguyenAmVaPhuAmHoDem = getChuyenDoiSoNguyenAmVaPhuAm(
      arrChiaNguyenAmPhuAmHoDem
    );

    // console.log(tongArrNguyenAmVaPhuAmTen);
    // console.log(tongArrNguyenAmVaPhuAmHoDem);

    function tinhTongGiuSoBacThay(arr) {
      let newArr = [];
      for (let index = 0; index < arr.length; index++) {
        // console.log(arr[index]);
        var element = lamTronSoVeDuoi9GiuSoBacThay(arr[index]);
        newArr.push(element);
      }
      return newArr;
    }

    var tongCongArrTen = tinhTongGiuSoBacThay(tongArrTen);
    // console.log(tongCongArrTen);
    var tongCongArrHoDem = tinhTongGiuSoBacThay(tongArrHoDem);
    // console.log(tongCongArrHoDem);

    var tongCongArrVanMenh = [...tongCongArrTen, ...tongCongArrHoDem];

    function tinhTongCacSoTuMangGiuSoBacThay(arr) {
      var sum = 0;
      for (let index = 0; index < arr.length; index++) {
        // console.log(arr[index]);
        var element = arr[index];
        sum = sum + element;
      }
      var result = lamTronSoVeDuoi9GiuSoBacThay(sum);
      return result;
    }

    // Tính được số vận mệnh - Số Họ Tên
    var finalSoVanMenh = tinhTongCacSoTuMangGiuSoBacThay(tongCongArrVanMenh);
    // console.log(finalSoVanMenh);
    // Tính được số Tên
    var finalSoTen = tinhTongCacSoTuMangGiuSoBacThay(tongCongArrTen);
    // console.log(finalSoTen);

    var tongArrNguyenAmHoVaTen = [
      ...tongArrNguyenAmVaPhuAmTen["nguyenam"],
      ...tongArrNguyenAmVaPhuAmHoDem["nguyenam"],
    ];
    var tongArrPhuAmHoVaTen = [
      ...tongArrNguyenAmVaPhuAmTen["phuam"],
      ...tongArrNguyenAmVaPhuAmHoDem["phuam"],
    ];

    // console.log(tongArrNguyenAmHoVaTen);
    // console.log(tongArrPhuAmHoVaTen);

    // Tính được số Biểu Lộ
    var finalSoBieuLo = tinhTongCacSoTuMangGiuSoBacThay(tongArrPhuAmHoVaTen);
    // console.log(finalSoBieuLo);
    // Tính được số Nội Tâm
    var finalSoNoiTam = tinhTongCacSoTuMangGiuSoBacThay(tongArrNguyenAmHoVaTen);
    // console.log(finalSoNoiTam);

    // ------------------------ XỬ LÍ XONG PHẦN VỀ TÊN ------------------------

    // ------------------------ XỬ LÍ PHẦN VỀ NGÀY SINH ------------------------
    function tinhTongCacSoTuMangKhongGiuSoBacThay(arr) {
      var sum = 0;
      for (let index = 0; index < arr.length; index++) {
        // console.log(arr[index]);
        var element = arr[index];
        sum = sum + element;
      }
      var result = lamTronSoVeDuoi9KhongGiuSoBacThay(sum);
      return result;
    }

    // var arrNgaySinh = chuyenDoiDateThanhArr(sinhNhat).day;
    // var arrThangSinh = chuyenDoiDateThanhArr(sinhNhat).month;
    // var arrNamSinh = chuyenDoiDateThanhArr(sinhNhat).year;
    const elem = (id) => document.getElementById(id);
    const getValue = (id) => elem(id).value || "";
    var arrNgaySinh = $("#day").val();
    var arrThangSinh = $("#month").val();
    var arrNamSinh = $("#year").val();

    // console.log(arrNgaySinh);
    // console.log(arrThangSinh);
    // console.log(arrNamSinh);

    var tongNgaySinh = tinhTongCacSoTuMangGiuSoBacThay(arrNgaySinh);
    var tongThangSinh = tinhTongCacSoTuMangGiuSoBacThay(arrThangSinh);
    var tongNamSinh = tinhTongCacSoTuMangGiuSoBacThay(arrNamSinh);

    var arrNgaySinhKhongBacThay = arrNgaySinh;
    var arrThangSinhKhongBacThay = arrThangSinh;
    var arrNamSinhKhongBacThay = arrNamSinh;
    // console.log(arrNgaySinhKhongBacThay);
    // console.log(arrThangSinhKhongBacThay);
    // console.log(arrNamSinhKhongBacThay);

    var tongNgaySinhKhongBacThay = tinhTongCacSoTuMangKhongGiuSoBacThay(
      arrNgaySinhKhongBacThay
    );
    var tongThangSinhKhongBacThay = tinhTongCacSoTuMangKhongGiuSoBacThay(
      arrThangSinhKhongBacThay
    );
    var tongNamSinhKhongBacThay = tinhTongCacSoTuMangKhongGiuSoBacThay(
      arrNamSinhKhongBacThay
    );

    // console.log(tongNgaySinh);
    // console.log(tongThangSinh);
    // console.log(tongNamSinh);

    // Tính được số Chủ Đạo - Đường Đời
    var arrSoChuDao = [tongNgaySinh, tongThangSinh, tongNamSinh];
    var arrSoNgaySinh = [tongNgaySinh];
    var finalSoNgaySinh = tinhTongCacSoTuMangGiuSoBacThay(arrSoNgaySinh);
    var finalSoChuDao = tinhTongCacSoTuMangGiuSoBacThay(arrSoChuDao);
    // console.log(finalSoChuDao);

    // Tính Số trưởng thành = tên + ngày sinh
    var arrSoTruongThanh = [finalSoChuDao, finalSoVanMenh];
    var finalSoTruongThanh = tinhTongCacSoTuMangGiuSoBacThay(arrSoTruongThanh);
    // console.log(finalSoTruongThanh);
    // ------------------------ XỬ LÍ XONG PHẦN VỀ NGÀY SINH ------------------------

    // ------------------------ XỬ LÍ PHẦN TÊN TÁC Ý ------------------------
    var finalSoTenTacY = ""; // mặc định rỗng
    // console.log(typeof tentacy); -> kiểm tra type
    if (tentacy.trim() === "") {
    } else {
      var arrTenTacY = getChuCaiToArr(tentacy);
      var tongArrTenTacY = getChuyenDoiSoTenVaHoDem(arrTenTacY);
      // console.log(tongArrTenTacY);
      finalSoTenTacY = tinhTongCacSoTuMangGiuSoBacThay(
        tinhTongGiuSoBacThay(tongArrTenTacY)
      );
      // console.log(finalSoTenTacY);
    }

    // ------------------------ XỬ LÍ XONG PHẦN TÊN TÁC Ý ------------------------

    // ------------------------ XỬ LÍ PHẦN 4 ĐỈNH CUỘC ĐỜI ------------------------
    // var arrtest =[1,2,3,4,5,6,7,8,9,10,11,20,22,30,33];
    // for (let index = 0; index < arrtest.length; index++) {
    //   const element = 36 - getDinhCuocDoi(arrtest[index]) ;
    //   console.log(arrtest[index] + " tương ứng " + element );
    // }

    var dinh1 = 36 - getDinhCuocDoi(finalSoChuDao);
    var dinh2 = dinh1 + 9;
    var dinh3 = dinh2 + 9;
    var dinh4 = dinh3 + 9;

    // console.log(dinh1);
    // console.log(dinh2);
    // console.log(dinh3);
    // console.log(dinh4);

    var arrTongNgaySinhThangSinh = [
      tongNgaySinhKhongBacThay,
      tongThangSinhKhongBacThay,
    ];
    var arrTongNgaySinhNamSinh = [
      tongNgaySinhKhongBacThay,
      tongNamSinhKhongBacThay,
    ];
    var soDinh1 = tinhTongCacSoTuMangGiuSoBacThay(arrTongNgaySinhThangSinh);
    var soDinh2 = tinhTongCacSoTuMangGiuSoBacThay(arrTongNgaySinhNamSinh);

    var arrTongDinh1Dinh2 = [soDinh1, soDinh2];
    var soDinh3 = tinhTongCacSoTuMangGiuSoBacThay(arrTongDinh1Dinh2);
    var arrTongThangSinhNamSinh = [
      tongThangSinhKhongBacThay,
      tongNamSinhKhongBacThay,
    ];
    // console.log(arrTongThangSinhNamSinh);
    var soDinh4 = tinhTongCacSoTuMangGiuSoBacThay(arrTongThangSinhNamSinh);

    // console.log(soDinh1);
    // console.log(soDinh2);
    // console.log(soDinh3);
    // console.log(soDinh4);

    // ------------------------ XỬ LÍ XONG PHẦN 4 ĐỈNH CUỘC ĐỜI ------------------------

    // ------------------------ XỬ LÍ PHẦN NĂNG LƯỢNG CON SỐ ------------------------
    // gộp tất cả dãy vào trong 1 mảng để đếm
    // ngay thang nam x1
    var arrThanSo = [...arrNgaySinh, ...arrThangSinh, ...arrNamSinh];
    var hienThiNgaySinh = arrThanSo.toString();
    $("#hienThiNgaySinh").html(hienThiNgaySinh);

    // push soDinh values to arrThanSo
    const soDinhValues = [soDinh1, soDinh2, soDinh3, soDinh4];
    // Đinh x2
    arrThanSo.push(...soDinhValues, ...soDinhValues);

    // ten, noi tam, bieulo x1
    // push other values to arrThanSo
    arrThanSo.push(finalSoTen, finalSoNoiTam, finalSoBieuLo);
    // van menh ho ten x3
    // push finalSoVanMenh to arrThanSo
    for (let i = 0; i < 3; i++) {
      arrThanSo.push(finalSoVanMenh);
    }
    // duong doi - chủ đạo x4
    // push finalSoChuDao to arrThanSo
    for (let i = 0; i < 4; i++) {
      arrThanSo.push(finalSoChuDao);
    }
    // truong thanh x3
    // push finalSoTruongThanh to arrThanSo
    for (let i = 0; i < 3; i++) {
      arrThanSo.push(finalSoTruongThanh);
    }
    if(finalSoTenTacY !==""){
      for (let i = 0; i < 2; i++) {
        arrThanSo.push(finalSoTenTacY);
      }
    }
    // console.log(arrThanSo);

    var bangSo = demSoTrongMang(arrThanSo);
    var finalSo = bangSo[0];
    var nangLuong = bangSo[1];
    // console.log(finalSo);
    // console.log(soNangLuongCao);
    var so1 = getBangSo(finalSo, 1);
    var so2 = getBangSo(finalSo, 2);
    var so3 = getBangSo(finalSo, 3);
    var so4 = getBangSo(finalSo, 4);
    var so5 = getBangSo(finalSo, 5);
    var so6 = getBangSo(finalSo, 6);
    var so7 = getBangSo(finalSo, 7);
    var so8 = getBangSo(finalSo, 8);
    var so9 = getBangSo(finalSo, 9);
    var so10 = getBangSo(finalSo, 10);
    var so11 = getBangSo(finalSo, 11);
    var so20 = getBangSo(finalSo, 20);
    var so22 = getBangSo(finalSo, 22);
    var so30 = getBangSo(finalSo, 30);
    var so33 = getBangSo(finalSo, 33);

    $("#so1").html(so1);
    $("#so2").html(so2);
    $("#so3").html(so3);
    $("#so4").html(so4);
    $("#so5").html(so5);
    $("#so6").html(so6);
    $("#so7").html(so7);
    $("#so8").html(so8);
    $("#so9").html(so9);
    $("#so10").html(so10);
    $("#so11").html(so11);
    $("#so20").html(so20);
    $("#so22").html(so22);
    $("#so30").html(so30);
    $("#so33").html(so33);

    var htmlNangLuong = "";
    nangLuong.forEach((element, index) => {
      htmlNangLuong += `<i class="lni lni-checkmark"></i> Năng lượng cao thứ ${
        index + 1
      } là: <b>${element[0]}^${element[1]}</b> <br>`;
    });
    $;

    $("#nangLuong").html(htmlNangLuong);

    // $.get("../api/getSoThanSoHoc.php", function (data, status) {
    //   var responseData = JSON.parse(data);
      // console.log(responseData);

      $("#sochitiet_ten").html(finalSoTen);
      $("#sochitiet_noitam").html(finalSoNoiTam);
      $("#sochitiet_bieulo").html(finalSoBieuLo);
      $("#sochitiet_vanmenh").html(finalSoVanMenh);
      $("#sochitiet_truongthanh").html(finalSoTruongThanh);
      $("#sochitiet_duongdoi").html(finalSoChuDao);
      $("#sochitiet_tacy").html(finalSoTenTacY);
      $("#sochitiet_ngaysinh").html(finalSoNgaySinh);

      // console.log(responseData[finalSoTen]);

    //   function getModal(id, number, responseData) {
    //     var html = "";
    //     if (!number) {
    //       html = "";
    //     } else {
    //       var dataObj = responseData[number];
    //       html +=
    //         "<b>Tổng quan về số: </b>" +
    //         number +
    //         "<br>" +
    //         "<b>3 Gốc: </b>" +
    //         dataObj["bagoc"] +
    //         "<br>" +
    //         "<b>3 Độc: </b>" +
    //         dataObj["badoc"] +
    //         "<br>";
    //     }
    //     $(id).html(html);
    //   }

    //   getModal("#modal_sochitiet_ten", finalSoTen, responseData);
    //   getModal("#modal_sochitiet_noitam", finalSoNoiTam, responseData);
    //   getModal("#modal_sochitiet_bieulo", finalSoBieuLo, responseData);
    //   getModal("#modal_sochitiet_vanmenh", finalSoVanMenh, responseData);
    //   getModal(
    //     "#modal_sochitiet_truongthanh",
    //     finalSoTruongThanh,
    //     responseData
    //   );
    //   getModal("#modal_sochitiet_duongdoi", finalSoChuDao, responseData);
    //   getModal("#modal_sochitiet_tacy", finalSoTenTacY, responseData);
    //   getModal("#modal_sochitiet_ngaysinh", finalSoNgaySinh, responseData);

    //   // chi tiết về con số
    //   getModal("#card-soduongdoi", finalSoChuDao, responseData);
    // });

    // ------------------------ XỬ LÍ XONG PHẦN NĂNG LƯỢNG CON SỐ ------------------------
    $("#hoVaTen").html(hoVaTen);

    // không hiện nếu không có
    if (finalSoTenTacY !== "") {
      $("#tacY").html("Tác ý: " + tentacy);
    }
    // $("#sinhNhat").html(sinhNhat);

    $("#dinh1").html(dinh1);
    $("#dinh2").html(dinh2);
    $("#dinh3").html(dinh3);
    $("#dinh4").html(dinh4);
    $("#soDinh1").html(soDinh1);
    $("#soDinh2").html(soDinh2);
    $("#soDinh3").html(soDinh3);
    $("#soDinh4").html(soDinh4);
    $("#soVanMenh").html(finalSoVanMenh);
    $("#soTruongThanh").html(finalSoTruongThanh);
    $("#soTen").html(finalSoTen);
    $("#soBieuLo").html(finalSoBieuLo);
    $("#soNoiTam").html(finalSoNoiTam);

    $("#soDuongDoi").html(finalSoChuDao);
    $("#finalSoDuongDoi").html(finalSoChuDao);

    $("#soTenTacY").html(finalSoTenTacY);

    // ------------------------ Lớp khai vấn chuyên sâu ------------------------
    // ----------------- Thử thách ----------------------
    var thuthach1 = truHaiSoLayHieuDuong(
      tongNgaySinhKhongBacThay,
      tongThangSinhKhongBacThay
    );
    var thuthach2 = truHaiSoLayHieuDuong(
      tongNgaySinhKhongBacThay,
      tongNamSinhKhongBacThay
    );
    var thuthach3 = truHaiSoLayHieuDuong(thuthach1, thuthach2);
    var thuthach4 = truHaiSoLayHieuDuong(
      tongThangSinhKhongBacThay,
      tongNamSinhKhongBacThay
    );

    // console.log(thuthach1);
    // console.log(thuthach2);
    // console.log(thuthach3);
    // console.log(thuthach4);

    $("#thuthach1").html(thuthach1);
    $("#thuthach2").html(thuthach2);
    $("#thuthach3").html(thuthach3);
    $("#thuthach4").html(thuthach4);
    // ----------------- Năm Tháng ngày cá nhân ----------------------
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1; //months from 1-12
    var year = today.getFullYear();

    var arrDay = chuyenDoiNumberThanhMang(day);
    var arrMonth = chuyenDoiNumberThanhMang(month);
    var arrYear = chuyenDoiNumberThanhMang(year);
    // console.log(arrDay);
    // console.log(arrMonth);
    // console.log(arrYear);
    var thangRutGon = tinhTongCacSoTuMangKhongGiuSoBacThay(arrMonth);
    var ngayRutGon = tinhTongCacSoTuMangKhongGiuSoBacThay(arrDay);

    // Tính được năm cá nhân, tháng cá nhân và ngày cá nhân
    var arrNamCaNhan = [...arrYear, ...arrNgaySinh, ...arrThangSinh];
    var finalNamCaNhan = tinhTongCacSoTuMangKhongGiuSoBacThay(arrNamCaNhan);
    // console.log(finalNamCaNhan);

    var arrThangCaNhan = [finalNamCaNhan, thangRutGon];
    var finalThangCaNhan = tinhTongCacSoTuMangKhongGiuSoBacThay(arrThangCaNhan);
    // console.log(finalThangCaNhan);

    var arrNgayCaNhan = [finalThangCaNhan, ngayRutGon];
    var finalNgayCaNhan = tinhTongCacSoTuMangKhongGiuSoBacThay(arrNgayCaNhan);
    // console.log(finalNgayCaNhan);

    $("#namCaNhan").html(finalNamCaNhan);
    $("#thangCaNhan").html(finalThangCaNhan);
    $("#ngayCaNhan").html(finalNgayCaNhan);
    // ----------------- Tư duy lí trí = tên + ngày sinh ----------------------
    var arrTuDuyLyTri = [finalSoTen, tongNgaySinh];
    var finalSoTuDuyLyTri = tinhTongCacSoTuMangGiuSoBacThay(arrTuDuyLyTri);
    $("#sochitiet_tuduylitri").html(finalSoTuDuyLyTri);

    // ---------------- Số Cân bằng - các ký tự đầu trong họ và tên ------------
    function getChuCaiDauTienTrongHoTen(arr) {
      let newArr = [];
      for (let index = 0; index < arr.length; index++) {
        // var element = chuyenDoiNguyenAmVaPhuAm(arr[index]);
        var element = arr[index][0]; //lấy ký tự đầu tiên
        newArr.push(element);
      }
      return newArr;
    }
    function chuyenDoiChuThanhSo(arr) {
      const result = [];
      for (let i = 0; i < arr.length; i++) {
        const char = arr[i]?.toUpperCase(); // convert to uppercase to match object keys
        const number = objectQuyDoiChu[char];
        if (number) {
          result.push(number);
        }
      }
      return result;
    }

    var arrChuCaiDauTrongHoDem = getChuCaiDauTienTrongHoTen(arrHoDem);
    var arrChuCaiDauTrongTen = getChuCaiDauTienTrongHoTen(arrTen);
    var arrChuCaiDauTrongHoTen = [
      ...arrChuCaiDauTrongHoDem,
      ...arrChuCaiDauTrongTen,
    ];

    var arrTongChuCaiDauTrongHoTen = chuyenDoiChuThanhSo(
      arrChuCaiDauTrongHoTen
    );
    // console.log(arrTongChuCaiDauTrongHoTen);
    var finalSoCanBang = tinhTongCacSoTuMangGiuSoBacThay(
      arrTongChuCaiDauTrongHoTen
    );
    $("#sochitiet_canbang").html(finalSoCanBang);
    // ------- Liên kết chủ đạo - vận mệnh, nội tâm - biểu lộ -----------------

    var finalSoChuDaoVanMenh = truHaiSoLayHieuDuong(
      finalSoChuDao,
      finalSoVanMenh
    );
    var finalSoNoiTamBieuLo = truHaiSoLayHieuDuong(
      finalSoNoiTam,
      finalSoBieuLo
    );
    $("#sochitiet_chudaovanmenh").html(finalSoChuDaoVanMenh);
    $("#sochitiet_noitambieulo").html(finalSoNoiTamBieuLo);

    // --------------- Số Thiếu ----------------------
    function chuyenDoiTextThanhArr(inputString) {
      const unsignedString = inputString
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      const processString = unsignedString.replace(/\s+/g, "").toUpperCase();
      const outputString = processString.split("");
      return outputString;
    }

    var arrHoVaTen = chuyenDoiTextThanhArr(hoVaTen);
    var arrSoHoVaTen = chuyenDoiChuThanhSo(arrHoVaTen);
    console.log('hainn----arrHoVaTen---',arrSoHoVaTen);
    var checkSoThieuArrSoHoVaTen = timSoBiThieuTrongArr(arrSoHoVaTen);
    console.log(checkSoThieuArrSoHoVaTen);
    if (checkSoThieuArrSoHoVaTen["count"] == 0) {
      let finalSoThieu = checkSoThieuArrSoHoVaTen["missing"];
      $("#sochitiet_sothieu").html(finalSoThieu);
    } else {
      let finalSoThieu = checkSoThieuArrSoHoVaTen["missing"].toString();
      $("#sochitiet_sothieu").html(finalSoThieu);
    }
    // ------------ Sức mạnh tiềm thức: 9 trừ số số thiếu ----------------------
    var finalSoSucManhTiemThuc = 9 - checkSoThieuArrSoHoVaTen["count"];
    $("#sochitiet_sucmanhtiemthuc").html(finalSoSucManhTiemThuc);

    // -------------- Nợ nghiệp --------------------------------------------------
    /** chủ đạo, vận mệnh, trưởng thành, ngày sinh, tên riêng, nội tâm, biểu lộ */

    var noNghiepSoChuDao = checkNoNghiep(arrSoChuDao);
    var noNghiepSoVanMenh = checkNoNghiep(tongCongArrVanMenh);
    var noNghiepSoTruongThanh = checkNoNghiep(arrSoTruongThanh);
    var noNghiepSoNgaySinh = checkNoNghiep(arrSoNgaySinh);
    var noNghiepSoTen = checkNoNghiep(tongCongArrTen);
    var noNghiepSoNoiTam = checkNoNghiep(tongArrNguyenAmHoVaTen);
    var noNghiepSoBieuLo = checkNoNghiep(tongArrPhuAmHoVaTen);

    $('#nonghiep_chudao').html(noNghiepSoChuDao);
    $('#nonghiep_vanmenh').html(noNghiepSoVanMenh);
    $('#nonghiep_truongthanh').html(noNghiepSoTruongThanh);
    $('#nonghiep_ngaysinh').html(noNghiepSoNgaySinh);
    $('#nonghiep_ten').html(noNghiepSoTen);
    $('#nonghiep_noitam').html(noNghiepSoNoiTam);
    $('#nonghiep_bieulo').html(noNghiepSoBieuLo);

    // ------------------------ end Lớp khai vấn chuyên sâu ------------------------

    let myNumbers = [
      {title: "Chủ Đạo", number: finalSoChuDao, class: "destiny"},
      {title: "Vận Mệnh", number : finalSoVanMenh, class: "character"},
      {title: "Trưởng Thành", number: finalSoTruongThanh, class: "agenda"},
      {title: "Nội Tâm", number : finalSoNoiTam, class: "attitude"},
      {title: "Biểu Lộ", number: finalSoBieuLo, class: "personality"},
      {title: "Tên", number: finalSoTen, class: "soul"}
    ];
    calcExtra(myNumbers, finalSoChuDao);

}

export function calcExtra(myNumbers, finalSoChuDao) {
  // - Numbers on star
  $('#star-holder').html(Object.keys(myNumbers)
    .map((cat) => {
      if (myNumbers[cat]) {
        const num = myNumbers[cat].number;
        return (
          '<a href="#' +
          myNumbers[cat].class +
          '"><div class="' +
          myNumbers[cat].class +
          " num c" +
          num +
          '">' +
          num +
          "<span>" +
          myNumbers[cat].title +
          "</span></div></a>"
        );
      }
      return "";
    })
    .join(""));
  var h = "";
  if (finalSoChuDao) {
    h +=
      '<span class="t0 c' +
      (finalSoChuDao ? finalSoChuDao : "") +
      '"></span>';
  } else {
    h += '<span class="t0"></span>';
  }
  myNumbers.forEach(
    (cat, idx) => {
      const num = cat.number ? cat.number : "";
      if(idx >= 1) h += '<div class="t' + idx + " k" + num + '"></div>';
    }
  );
  $('#star').html(h);

}
    