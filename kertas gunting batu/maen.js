var tanya = true;
while (tanya) {
  //menangkap pilihan si pemain
  var p = prompt("pilih: gajah,semut,orang");

  //menangkap pilihan computer
  var comp = Math.random();

  if( comp < 0.34){
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp="orang";
  } else {
    comp = "semut";
  }

  var hasil = "";
  //menentukan ruless
  if (p == comp){
    hasil = SERI;
  } else if (p == "gajah") {
    hasil = (comp == "orang") ? "MENANG" : "KALAH";
  } else if (p == "orang") {
    hasil = (comp == "gajah") ? "KALAH" : "MENANG";
  } else if (p == "semut") {
    hasil = (comp == "orang") ? "KALAH" : "MENANG";
  } else {
    hasil = "Pilihan salah";
  }

  //tampilkan hasilnyaaa
  alert("kamu memilih: " + p + "dan Komputer memilih : " + comp + "\nMaka hasilnya : kamu " + hasil);

  tanya = confirm("lagi???");
}

alert ("terima kasih sudah bermain!");
