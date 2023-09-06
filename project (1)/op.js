// Lấy các phần tử trên trang web
const redButton = document.getElementById("color-red");
const blueButton = document.getElementById("color-blue");
const greenButton = document.getElementById("color-green");
const sizeSelect = document.getElementById("size-select");
const quantityMinusButton = document.getElementById("quantity-minus");
const quantityPlusButton = document.getElementById("quantity-plus");
const quantityInput = document.getElementById("quantity-input");
const priceDisplay = document.getElementById("price");

// Thiết lập giá trị ban đầu
let colorPrice = 0;
let sizePrice = 0;
let quantity = 1;
let totalPrice = calculateTotalPrice();

// Cập nhật giá trị tổng số tiền khi người dùng chọn màu sắc
redButton.addEventListener("click", function() {
  colorPrice = 10;
  updateTotalPrice();
});

blueButton.addEventListener("click", function() {
  colorPrice = 15;
  updateTotalPrice();
});

greenButton.addEventListener("click", function() {
  colorPrice = 20;
  updateTotalPrice();
});

// Cập nhật giá trị tổng số tiền khi người dùng chọn kích cỡ
sizeSelect.addEventListener("change", function() {
  const selectedSize = sizeSelect.value;
  
  if (selectedSize === "small") {
    sizePrice = 5;
  } else if (selectedSize === "medium") {
    sizePrice = 10;
  } else if (selectedSize === "large") {
    sizePrice = 15;
  }
  
  updateTotalPrice();
});

// Cập nhật giá trị tổng số tiền khi người dùng thay đổi số lượng
quantityMinusButton.addEventListener("click", function() {
  updateQuantity(-1);
});

quantityPlusButton.addEventListener("click", function() {
  updateQuantity(1);
});

// Cập nhật giá trị số lượng và cập nhật giá tiền
function updateQuantity(change) {
  quantity += change;
  
  if (quantity < 1) {
    quantity = 1;
  }
  
  quantityInput.value = quantity;
  updateTotalPrice();
}

// Cập nhật hiển thị tổng số tiền
function updateTotalPrice() {
  totalPrice = calculateTotalPrice();
  priceDisplay.textContent = formatCurrency(totalPrice) + " đồng";
}

// Tính toán tổng số tiền dựa trên màu sắc, kích cỡ và số lượng
function calculateTotalPrice() {
  return (colorPrice + sizePrice) * quantity;
}

// Định dạng số tiền thành ngàn và dấu chấm
function formatCurrency(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "K";
}
const placeOrderButton = document.getElementById("place-order-button");
const orderForm = document.getElementById("order-form");
const submitButton = document.getElementById("submit-button");
const orderSummary = document.getElementById("order-summary");
const nameOutput = document.getElementById("name-output");
const addressOutput = document.getElementById("address-output");
const phoneOutput = document.getElementById("phone-output");
const colorOutput = document.getElementById("color-output");
const sizeOutput = document.getElementById("size-output");
const quantityOutput = document.getElementById("quantity-output");
const priceOutput = document.getElementById("price-output");

placeOrderButton.addEventListener("click", function () {
  orderForm.style.display = "block";
});

submitButton.addEventListener("click", function () {
  const name = document.getElementById("name-input").value;
  const address = document.getElementById("address-input").value;
  const phone = document.getElementById("phone-input").value;

  nameOutput.textContent = "Họ tên: " + name;
  addressOutput.textContent = "Địa chỉ: " + address;
  phoneOutput.textContent = "Số điện thoại: " + phone;
  colorOutput.textContent = "Màu sắc: " + selectedColor;
  sizeOutput.textContent = "Kích cỡ: " + selectedSize;
  quantityOutput.textContent = "Số lượng: " + quantity;
  priceOutput.textContent = "Tổng tiền: " + formatCurrency(totalPrice) + " đồng";

  orderSummary.style.display = "block";
});

function formatCurrency(value) {
  return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}