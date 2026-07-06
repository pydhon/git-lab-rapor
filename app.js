// ===================================
// Git Lab Rapor Paneli - JavaScript
// ===================================

// Butona basıldığında çalışan fonksiyon
function raporlariYenile() {

  // Ekrandaki bilgi mesajı elementini seçiyoruz
  var mesajAlani = document.getElementById("bilgi-mesaji");

  // Şu anki saat ve tarihi alıyoruz
  var simdi = new Date();

  // Saat ve dakikayı iki haneli göstermek için formatıyoruz
  var saat   = simdi.getHours().toString().padStart(2, "0");
  var dakika = simdi.getMinutes().toString().padStart(2, "0");

  // Mesaj alanını güncelliyoruz
  mesajAlani.textContent = "Raporlar " + saat + ":" + dakika + " itibarıyla yenilendi.";
}
