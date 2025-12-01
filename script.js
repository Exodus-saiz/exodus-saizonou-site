
// Affichage date et heure
function updateDateTime() {
  const now = new Date();
  document.getElementById('datetime').textContent = now.toLocaleString();
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Bouton Moov Money
function moovPayment() {
  alert('Vous allez être redirigé vers Moov Money. Montant libre à saisir.\nNuméro: +229 0155289731');
  window.open('https://www.moovmoney.bj/', '_blank');
}
