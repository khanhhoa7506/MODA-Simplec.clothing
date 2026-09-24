// ==========================================
// DANH SÁCH SẢN PHẨM
// ==========================================

var products = [
    {
        name: "Áo",
        price: 200000,
        image: "images/ao.jpg"
    },

    {
        name: "Quần",
        price: 300000,
        image: "images/quan.jpg"
    },

    {
        name: "Giày",
        price: 500000,
        image: "images/giay.jpg"
    }
];


// ==========================================
// CHỌN SẢN PHẨM TỪ CARD
// ==========================================

function selectProduct(productName) {

    document.getElementById("product").value = productName;

    changeImage();

    document.getElementById("shopping").scrollIntoView({
        behavior: "smooth"
    });
}


// ==========================================
// ĐỔI HÌNH ẢNH
// ==========================================

function changeImage() {

    var product = document.getElementById("product");

    var image = document.getElementById("productImage");


    if (product.value == "ao") {

        image.src = "images/ao.jpg";

    }

    else if (product.value == "quan") {

        image.src = "images/quan.jpg";

    }

    else {

        image.src = "images/giay.jpg";

    }
}


// ==========================================
// TÍNH TIỀN
// ==========================================

function calculateMoney() {

    var product = document.getElementById("product");

    var quantity = document.getElementById("quantity");


    var price = 0;


    if (product.value == "ao") {

        price = 200000;

    }

    else if (product.value == "quan") {

        price = 300000;

    }

    else {

        price = 500000;

    }


    // Tiền hàng
    var total = price * Number(quantity.value);


    // Giảm giá
    var discount = 0;


    if (total >= 500000) {

        discount = total * 10 / 100;

    }

    else {

        discount = 0;

    }


    // Phải trả
    var finalMoney = total - discount;


    // Hiển thị
    document.getElementById("total").innerHTML =
        formatMoney(total);

    document.getElementById("discount").innerHTML =
        formatMoney(discount);

    document.getElementById("final").innerHTML =
        formatMoney(finalMoney);


    // Cuộn xuống kết quả
    document.querySelector(".result-section").scrollIntoView({
        behavior: "smooth"
    });
}


// ==========================================
// ĐỊNH DẠNG TIỀN
// ==========================================

function formatMoney(number) {

    return number.toLocaleString("vi-VN") + "đ";

}


// ==========================================
// ĐỔI MÀU NỀN
// ==========================================

function changeColor(color) {

    // Xóa màu cũ
    document.body.classList.remove(
        "blue-theme",
        "red-theme",
        "yellow-theme"
    );

    // Thêm màu mới
    if (color == "blue") {

        document.body.classList.add("blue-theme");

    }

    else if (color == "red") {

        document.body.classList.add("red-theme");

    }

    else if (color == "yellow") {

        document.body.classList.add("yellow-theme");

    }

}

// ==========================================
// HIỂN THỊ BẢNG GIÁ
// SỬ DỤNG FOR
// ==========================================

function showPriceList() {

    var priceList = document.getElementById("priceList");

    var result = "";


    for (var i = 0; i < products.length; i++) {

        result +=
            '<div class="price-item">' +

            '<span>' +
            (i + 1) +
            ". " +
            products[i].name +
            '</span>' +

            '<strong>' +
            formatMoney(products[i].price) +
            '</strong>' +

            '</div>';
    }


    priceList.innerHTML = result;

}