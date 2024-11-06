let imgBox = document.getElementById('img-box');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');
let downloadBtn = document.getElementById('downloadBtn');
function generateQR() {
  if(qrText.value.length >0){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +  qrText.value;
    imgBox.classList.add('show-img');
    qrText.value = '' ;
    // إظهار زر التحميل بعد إنشاء كود QR
    downloadBtn.style.display = 'block';
    generateBtn.style.display = 'none';
  }else {
    qrText.classList.add('error');
    setTimeout(()=>{
      qrText.classList.remove('error');
    },1000)

  }
  
}

// download QR Code

function downloadPDF() {
    const { jsPDF } = window.jspdf; // تأكد من تضمين jsPDF في مشروعك
    const pdf = new jsPDF();
    // الحصول على أبعاد صفحة PDF الافتراضية
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    // ضبط حجم وأبعاد الصورة
    const imgWidth = 150; // عرض الصورة
    const imgHeight = 150; // ارتفاع الصورة
    // حساب موقع الصورة لوضعها في المنتصف
    const x = (pageWidth - imgWidth) / 2;
    const y = (pageHeight - imgHeight) / 2;
    // إضافة الصورة في منتصف الصفحة
    pdf.addImage(qrImage.src, "JPEG", x, y, imgWidth, imgHeight);
    // حفظ ملف PDF
    pdf.save("QRCode.pdf");
    // إعادة زر الإنشاء وإخفاء زر التحميل بعد التحميل
    downloadBtn.style.display = 'none';
    generateBtn.style.display = 'block';

}