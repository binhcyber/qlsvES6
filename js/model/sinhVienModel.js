function sinhvienModel(id, name, email, toan, ly, hoa) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.toan = toan;
  this.ly = ly;
  this.hoa = hoa;
  this.DTB = function () {
    return (this.toan * 1 + this.ly * 1 + this.hoa * 1) / 3;
  };
}
