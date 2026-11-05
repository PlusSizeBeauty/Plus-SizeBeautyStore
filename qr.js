const QR_DESTINATION = new URL('./', window.location.href).href;
const QR_IMAGE_ENDPOINT = 'https://api.qrserver.com/v1/create-qr-code/';

const qrImage = document.getElementById('qrImage');
const qrLink = document.getElementById('qrLink');

qrImage.src = `${QR_IMAGE_ENDPOINT}?size=230x230&data=${encodeURIComponent(QR_DESTINATION)}`;
qrLink.href = QR_DESTINATION;
qrLink.textContent = QR_DESTINATION;
