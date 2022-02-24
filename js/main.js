function layDanhSachSV() {
  sinhVienService
    .laySanhSachSinhVien()
    .then((res) => {
      let newSinhVien = res.data.map((item) => {
        return new sinhvienModel(
          item.id,
          item.name,
          item.email,
          item.toan,
          item.ly,
          item.hoa
        );
      });
      console.log(newSinhVien);
      sinhVienControll.renderTable(newSinhVien);
    })
    // .then((res) => {
    //   console.log(res.data);
    // })
    .catch((err) => {
      console.log(err);
    });
}
layDanhSachSV();
document.getElementById("themSinhVien").addEventListener("click", () => {
  let dataThemSinhVien = sinhVienControll.themSinhVienVaoDS();
  console.log(dataThemSinhVien.newSinhVien.email);
  // console.log(dataThemSinhVien.newSinhVien);
  let isValidate =
    validator.kiemTraSo(dataThemSinhVien.newSinhVien.id, "spanMaSV") &
    validator.kiemTraKiTu(dataThemSinhVien.newSinhVien.name, "spanTenSV") &
    validator.kiemTraEmail(dataThemSinhVien.newSinhVien.email, "spanEmailSV");
  validator.kiemTraSo(dataThemSinhVien.newSinhVien.toan, "spanToan") &
    validator.kiemTraDoDai(dataThemSinhVien.newSinhVien.toan, "spanToan") &
    validator.kiemTraSo(dataThemSinhVien.newSinhVien.ly, "spanLy") &
    validator.kiemTraDoDai(dataThemSinhVien.newSinhVien.ly, "spanLy") &
    validator.kiemTraSo(dataThemSinhVien.newSinhVien.hoa, "spanHoa") &
    validator.kiemTraDoDai(dataThemSinhVien.newSinhVien.hoa, "spanHoa");
  isValidate &&
    sinhVienService
      .themSinhVien(dataThemSinhVien.newSinhVien)
      .then(() => {
        layDanhSachSV();
      })
      .catch((err) => {
        console.log(err);
      });
});
sinhVienService
  .xoaSinhVien()
  .then((res) => {})
  .catch((err) => {
    // console.log(err);
  });

function xoaSV(id) {
  sinhVienService
    .xoaSinhVien(id)
    .then((res) => {
      layDanhSachSV();
    })
    .catch((err) => {
      console.log(err);
    });
}
function suaSV(id) {
  document.getElementById("txtMaSV").readOnly = true;
  sinhVienService
    .layChiTietSinhVien(id)
    .then((res) => {
      document.getElementById("txtMaSV").value = res.data.id;
      document.getElementById("txtTenSV").value = res.data.name;
      document.getElementById("txtEmail").value = res.data.email;
      document.getElementById("txtDiemToan").value = res.data.toan;
      document.getElementById("txtDiemLy").value = res.data.ly;
      document.getElementById("txtDiemHoa").value = res.data.hoa;
    })
    .catch((err) => {
      console.log(err);
    });
}
document.getElementById("capNhatSinhVien").addEventListener("click", () => {
  let capNhat = sinhVienControll.themSinhVienVaoDS();
  // console.log(dataThemSinhVien.newSinhVien);
  let isValidate =
    validator.kiemTraSo(capNhat.newSinhVien.id, "spanMaSV") &
    validator.kiemTraKiTu(capNhat.newSinhVien.name, "spanTenSV") &
    validator.kiemTraEmail(capNhat.newSinhVien.email, "spanEmailSV") &
    validator.kiemTraSo(capNhat.newSinhVien.toan, "spanToan") &
    validator.kiemTraDoDai(capNhat.newSinhVien.toan, "spanToan") &
    validator.kiemTraSo(capNhat.newSinhVien.ly, "spanLy") &
    validator.kiemTraDoDai(capNhat.newSinhVien.ly, "spanLy") &
    validator.kiemTraSo(capNhat.newSinhVien.hoa, "spanHoa") &
    validator.kiemTraDoDai(capNhat.newSinhVien.hoa, "spanHoa");

  isValidate &&
    sinhVienService
      .capNhatSinhVien(capNhat.newSinhVien.id, capNhat.newSinhVien)
      .then(() => {
        layDanhSachSV();
      })
      .catch((err) => {
        console.log(err);
      });
});
