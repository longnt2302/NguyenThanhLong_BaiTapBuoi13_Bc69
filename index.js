function transerferCurrency(x) {
    return x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}

// BÀI TẬP 1
document.getElementById('btnBai1').onclick = function () {
    // Khối 1 : Dữ liệu
    // Số ngày công : 100000

    // Khối 2 : Xử lý
    // Bước 1 : Tạo biến soNgayCong và tienLuong
    // Bước 2 : Tính toán theo công thức soNgayCong * 100000 và gán vào biến tienLuong
    // Bước 3 : In kết quả của bước 2 ra console

    // Khối 3 : Hiển thị dữ liệu
    // Hiển thị giá trị của biến tienLuong ra cho người dùng

    let soNgayCong = document.getElementById('soNgayCong').value * 1;
    let tienLuong = transerferCurrency(soNgayCong * 100000);
    document.getElementById('resB1').innerHTML = `Số tiền lương là : ${tienLuong}`;
};

// BÀI TẬP 2
document.getElementById('btnBai2').onclick = function () {
    // Khối 1 : Dữ liệu

    // Khối 2 : Xử lý
    // Bước 1 : Tạo 3 biến chứa 5 giá trị từ 5 input do người dùng nhập vào
    // Bước 2 : Tính toán giá trị từ bước 1 theo công thức cộng 5 giá trị lại và chia 5
    // Bước 3 : In kết quả tính toàn bước 2 ra console

    // Khối 3 : Hiển thị dữ liệu
    // Hiển thị kết qua của Khối xử lý trên ra cho người dùng

    let soThuc = document.querySelectorAll('.soThuc');
    let tong = 0;
    soThuc.forEach((number) => {
        tong += +number.value;
    });
    let trungBinh = tong / 5;
    let resB2 = document.getElementById('resB2');
    resB2.innerHTML = `Kết quả trung bình là : ${trungBinh}`;
};

// BÀI TẬP 3
document.getElementById('btnBai3').onclick = function () {
    //Khối 1 : Dữ liệu
    // Tiền tệ quy đổi từ $1 => VND là 23500

    // Khối 2 : Xử lý
    // Bước 1 : Tạo biến soTienDo và gán giá trị được nhập từ người dùng
    // Bước 2 : Tính toán theo công thức : soTien * 23500
    // Bước 3 : In kết quả ra console

    // Khối 3 : Hiển thị kết quả ra cho người dùng
    // Hiển thị kết quả từ Khối xử lý ra cho người dùng
    let soTienDo = document.getElementById('soTienDo').value * 1;
    let res = transerferCurrency(soTienDo * 23500);
    document.getElementById('resB3').innerHTML = `Số tiền cần đổi là : $${soTienDo} = ${res}`;
};

// BÀI TẬP 4
document.getElementById('btnBai4').onclick = function () {
    // Khối 1 : Dữ liệu

    // Khối 2 : Xử lý
    // Bước 1 : Tạo 2 biến chieuDai và chieuRong để chứa giá trị nhập từ người dùng
    // Bước 2 : Tạo 2 biến dienTich và chuVi và tính toán theo công thức như sau :
    //     dienTich = chieuDai * chieuRong
    //     chuVi = ( chieuDai + chieuRong ) * 2
    // Bước 3 : In kết quả ở bước 2 ra console

    // Khối 3 : Hiển thị dữ liệu
    // Hiển thị kết quả của Khối xử lý trên ra cho người dùng
    let chieuDai = document.getElementById('chieuDai').value * 1;
    let chieuRong = document.getElementById('chieuRong').value * 1;
    let dienTich = chieuDai * chieuRong;
    let chuVi = (chieuDai + chieuRong) * 2;
    document.getElementById('resBai4').innerHTML = `Diện tích là : ${dienTich} </br>Chu vi là : ${chuVi}`;
};

// BÀI TẬP 5
document.getElementById('btnBai5').onclick = function () {
    // Khối 1 : Dữ liệu

    // Khối 2 : Xử lý
    // Bước 1 : Tạo 1 biến soBatKy và gán giá trị từ người dùng nhập
    // Bước 2 : Từ giá trị lấy được ở bước 1, tách giá trị thành 2 giá trị số soThuNhat và soThuHai bằng phương thức chia lấy số nguyên và số dư.
    // Bước 3 : Tạo biến tongKy và lấy 2 số tách được 2 bước 2 + với nhau
    // Bước 4 : In kết quả ra console

    // Khối 3 : Hiển thị dữ liệu
    // In kết quả ra cho người dùng xem
    let soBatKy = +document.getElementById('soBatKy').value;
    let soThuNhat = Math.floor(soBatKy / 10);
    let soThuHai = soBatKy % 10;
    let tongKy = soThuNhat + soThuHai;
    document.getElementById('resBai5').innerHTML = `Tổng ký giá trị có hai chữ số ${soBatKy} là : ${tongKy}`;
};