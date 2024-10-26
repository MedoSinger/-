// فتح النافذة المنبثقة مع تفاصيل المنتج
function openProductPopup(title, description, price) {
    document.getElementById('popupTitle').innerText = title;
    document.getElementById('popupDescription').innerText = description;
    document.getElementById('popupPrice').innerText = 'السعر: ' + price + ' دولار';
    document.getElementById('productPopup').style.display = 'flex';
}

// غلق النافذة المنبثقة
function closeProductPopup() {
    document.getElementById('productPopup').style.display = 'none';
}

// إضافة المنتج إلى السلة (هذه وظيفة تجريبية)
function addToCart() {
    alert("تم إضافة المنتج إلى السلة!");
    closeProductPopup();
}
