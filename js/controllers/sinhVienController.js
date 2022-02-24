let sinhVienControll = {
  renderTable: function (arr) {
    let Html = arr.map((item) => {
      return `
        <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.DTB()}</td>
        <td><button onclick ="xoaSV(${
          item.id
        })" class="btn btn-danger">Xoa</button></td>
        <td><button onclick ="suaSV(${
          item.id
        })" class="btn btn-warning">Sua</button></td>
        </tr>`;
    });
    document.getElementById("tbodySinhVien").innerHTML = Html;
  },
  themSinhVienVaoDS: function () {
    var maSV = document.getElementById("txtMaSV").value;
    var tenSV = document.getElementById("txtTenSV").value;
    var EmailSv = document.getElementById("txtEmail").value;
    var toanSv = document.getElementById("txtDiemToan").value;
    var lySv = document.getElementById("txtDiemLy").value;
    var hoaSv = document.getElementById("txtDiemHoa").value;

    return {
      newSinhVien: new sinhvienModel(maSV, tenSV, EmailSv, toanSv, lySv, hoaSv),
    };
  },
  capNhatSinhVienVaoDS: function () {
    var maSV = document.getElementById("txtMaSV").value;
    var tenSV = document.getElementById("txtTenSV").value;
    var EmailSv = document.getElementById("txtEmail").value;
    var toanSv = document.getElementById("txtDiemToan").value;
    var lySv = document.getElementById("txtDiemLy").value;
    var hoaSv = document.getElementById("txtDiemHoa").value;
    return {
      newSinhVien: new sinhvienModel(maSV, tenSV, EmailSv, toanSv, lySv, hoaSv),
    };
  },
};
