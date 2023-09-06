$(document).ready(function() {
    // Initialize variables
    var currentIndex = 0,
        sliderImages = $('.slider-image'),
        sliderImagesCount = sliderImages.length;
  
    // Set the first image as active
    sliderImages.eq(currentIndex).addClass('active');
  
    // Define function to move to next slide
    function nextSlide() {
      currentIndex++;
      if (currentIndex >= sliderImagesCount) {
        currentIndex = 0;
      }
      sliderImages.eq(currentIndex).addClass('active').siblings().removeClass('active');
      sliderImages.eq(currentIndex).css('left', '100%').animate({'left': '0'});
      sliderImages.eq((currentIndex + sliderImagesCount - 1) % sliderImagesCount).animate({'left': '-100%'});
    }
  
    // Set up interval to move to next slide every 4 seconds
    setInterval(nextSlide, 4000);
  
    // Add click event handlers to the buttons
    $('.prev-slide').click(function() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = sliderImagesCount - 1;
      }
      sliderImages.eq(currentIndex).addClass('active').siblings().removeClass('active');
      sliderImages.eq(currentIndex).css('left', '-100%').animate({'left': '0'});
      sliderImages.eq((currentIndex + 1) % sliderImagesCount).animate({'left': '100%'});
    });
  
    $('.next-slide').click(nextSlide);
  });
  
  //đổi ảnh dí chuột..
   myImg_1 = document.getElementById("my_img_1").src;
   myImg_2 = document.getElementById("my_img_2").src;
   myImg_3 = document.getElementById("my_img_3").src;
   myImg_4 = document.getElementById("my_img_4").src;
   myImg_5 = document.getElementById("my_img_5").src;
   myImg_6 = document.getElementById("my_img_6").src;
   
  function hienThi_1(){
    document.getElementById("my_img_1").src = "img/img_2/1.webp"
  }
  function notHienThi_1(){
    document.getElementById("my_img_1").src = myImg_1
  }
  
  function hienThi_2(){
    document.getElementById("my_img_2").src = "img/img_2/2.jpg"
  }
  function notHienThi_2(){
    document.getElementById("my_img_2").src = myImg_2
  }
  
  function hienThi_3(){
    document.getElementById("my_img_3").src = "img/img_2/3.webp"
  }
  function notHienThi_3(){
    document.getElementById("my_img_3").src = myImg_3
  }
  
  function hienThi_4(){
    document.getElementById("my_img_4").src = "img/img_2/4.webp"
  }
  function notHienThi_4(){
    document.getElementById("my_img_4").src = myImg_4
  }
  
  function hienThi_5(){
    document.getElementById("my_img_5").src = "img/img_2/5.jpg"
  }
  function notHienThi_5(){
    document.getElementById("my_img_5").src = myImg_5
  }
  
  function hienThi_6(){
    document.getElementById("my_img_6").src = "img/img_2/6.webp"
  }
  function notHienThi_6(){
    document.getElementById("my_img_6").src = myImg_6
  }
  
  // đổi ảnh card sản phẩm mới
  card_1 = document.getElementById("card-1").src;
  card_2 = document.getElementById("card-2").src;
  card_3 = document.getElementById("card-3").src;
  card_4 = document.getElementById("card-4").src;
  card_5 = document.getElementById("card-5").src;
  card_6 = document.getElementById("card-6").src;
  card_7 = document.getElementById("card-7").src;
  card_8 = document.getElementById("card-8").src;
  
  function hienthi_card_1(){
    document.getElementById("card-1").src = "img/img san pham moi/new/1.webp"
  }
  function not_hienthi_card_1(){
    document.getElementById("card-1").src = card_1
  }
  function hienthi_card_2(){
    document.getElementById("card-2").src = "img/img san pham moi/new/2.webp"
  }
  function not_hienthi_card_2(){
    document.getElementById("card-2").src = card_2
  }
  function hienthi_card_3(){
    document.getElementById("card-3").src = "img/img san pham moi/new/3.webp"
  }
  function not_hienthi_card_3(){
    document.getElementById("card-3").src = card_3
  }
  function hienthi_card_4(){
    document.getElementById("card-4").src = "img/img san pham moi/new/4.webp"
  }
  function not_hienthi_card_4(){
    document.getElementById("card-4").src = card_4
  }
  function hienthi_card_5(){
    document.getElementById("card-5").src = "img/img san pham moi/new/5.webp"
  }
  function not_hienthi_card_5(){
    document.getElementById("card-5").src = card_5
  }
  function hienthi_card_6(){
    document.getElementById("card-6").src = "img/img san pham moi/new/6.webp"
  }
  function not_hienthi_card_6(){
    document.getElementById("card-6").src = card_6
  }
  function hienthi_card_7(){
    document.getElementById("card-7").src = "img/img san pham moi/new/7.webp"
  }
  function not_hienthi_card_7(){
    document.getElementById("card-7").src = card_7
  }
  function hienthi_card_8(){
    document.getElementById("card-8").src = "img/img san pham moi/new/8.jpg"
  }
  function not_hienthi_card_8(){
    document.getElementById("card-8").src = card_8
  }
  
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $('.my_menu').addClass('menu_2');
    } else {
      $('.my_menu').removeClass('menu_2');
    }
  });
  
  
  
  
  //huỷ reset trang khi nhấn vào các nút dưới
  $('.heart a').click(function(event) {
    event.preventDefault();
    // Xử lý logic khi click vào thẻ <a>
  });
  $('.bars a').click(function(event) {
    event.preventDefault();
    // Xử lý logic khi click vào thẻ <a>
  });
  $('.expand a').click(function(event) {
    event.preventDefault();
    // Xử lý logic khi click vào thẻ <a>
  });
  
  
  
  //thay đổi nổi dung trong container_room
  var containerZoom = document.querySelector('.container_zoom');
  function my_zoom_card(j){
   if(j == 1){
    containerZoom.classList.add('container_zoom_1');
    containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/7xtwyt-simg-d0daf0-800x1200-max.png'
    containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/7xtwyt-simg-d0daf0-800x1200-max.png'
    containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/a6gnv4-simg-d0daf0-800x1200-max.png'
    containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/es97ga-simg-d0daf0-800x1200-max.png'
    containerZoom.querySelector('.card_room_4').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/ikfg7s-simg-d0daf0-800x1200-max.png'
    containerZoom.querySelector('.card-title').innerHTML = 'Ví nữ mini da mềm khóa vuông thời trang';
    containerZoom.querySelector('.card-text1 .h').innerHTML = '120.000đ';
    containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '230.000đ';
    }
    if(j == 2){
    containerZoom.classList.add('container_zoom_1');
    containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/fzn0pqa4qzvuyvm6ghkg-simg-d0daf0-800x1200-max.jpg?v=1673363444327'
    containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/t1ezoeu7zoxbnyoouqjl-simg-d0daf0-800x1200-max.jpg'
    containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/3dedgw99ipuhyym3dsck-simg-d0daf0-800x1200-max.jpg'
    containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/5mfnpsubqd97xddwlbr0-simg-d0daf0-800x1200-max.jpg'
    containerZoom.querySelector('.card_room_4').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/fzn0pqa4qzvuyvm6ghkg-simg-d0daf0-800x1200-max.jpg'
    containerZoom.querySelector('.card-title').innerHTML = 'Ví nữ cầm tay phong cách Hàn Quốc';
    containerZoom.querySelector('.card-text1 .h').innerHTML = '50.000đ';
    containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '';
  }
  if(j == 3){
    containerZoom.classList.add('container_zoom_1');
    containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/pdwkie-simg-d0daf0-800x1200-max.png'
    containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/pdwkie-simg-d0daf0-800x1200-max.png'
    containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/blhess-simg-d0daf0-800x1200-max.png'
    containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/jey4ks-simg-d0daf0-800x1200-max.png'
    containerZoom.querySelector('.card_room_4').src = 'https://vn-live-01.slatic.net/p/5564b42427a977d4a1d3b82aa8e52014.jpg'
    containerZoom.querySelector('.card-title').innerHTML = 'Túi Xách Nữ Đeo Chéo Da Pu Đi Dự Tiệc Du Lịch';
    containerZoom.querySelector('.card-text1 .h').innerHTML = '400.000đ';
    containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '1.900.000đ';
  }
  if(j == 4){
    containerZoom.classList.add('container_zoom_1');
    containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/6cu2beawkolengqt4jhh-simg-d0daf0-800x1200-max.jpg?v=1673362848030'
    containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/100/456/491/products/6cu2beawkolengqt4jhh-simg-d0daf0-800x1200-max.jpg?v=1673362848030'
    containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/a6qejqbrovtfe5emqfk8-simg-d0daf0-800x1200-max.jpg'
    containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/em7bhaln8ntkqer9ar3s-simg-d0daf0-800x1200-max.jpg'
    containerZoom.querySelector('.card_room_4').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/oew48anplastdklcwktd-simg-d0daf0-800x1200-max.jpg'
    containerZoom.querySelector('.card-title').innerHTML = 'Túi xách nữ công sở';
    containerZoom.querySelector('.card-text1 .h').innerHTML = '150.000đ';
    containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '200.000đ';
  }
  if(j == 5){
    containerZoom.classList.add('container_zoom_1');
    containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/3ebwrtwivacljnng7u8i-simg-d0daf0-800x1200-max.jpg?v=1673362646807'
    containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/100/456/491/products/3ebwrtwivacljnng7u8i-simg-d0daf0-800x1200-max.jpg?v=1673362646807'
    containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/4hutomdqcnk2d5pusbas-simg-d0daf0-800x1200-max.jpg'
    containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/b3l3nmfozab8e5dowiic-simg-d0daf0-800x1200-max.jpg'
    containerZoom.querySelector('.card_room_4').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/jssvlleak63pulkqjzd9-simg-d0daf0-800x1200-max.jpg'
    containerZoom.querySelector('.card-title').innerHTML = 'Túi xách nữ vải dù chống nước cao cấp';
    containerZoom.querySelector('.card-text1 .h').innerHTML = '290.000đ';
    containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '400.000đ';
  }
  if(j == 6){
    containerZoom.classList.add('container_zoom_1');
    containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/tfwmhp8vxkztfuwuczdz.jpg?v=1673362318757'
    containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/100/456/491/products/tfwmhp8vxkztfuwuczdz.jpg?v=1673362318757'
    containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/k2p8mleypumx9c936wh4.jpg'
    containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/tfwmhp8vxkztfuwuczdz.jpg'
    containerZoom.querySelector('.card_room_4').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/yaikjlagbjbsqrbme4ve.jpg'
    containerZoom.querySelector('.card-title').innerHTML = 'Quần short nữ kèm dây đai thanh lịch';
    containerZoom.querySelector('.card-text1 .h').innerHTML = '190.000đ';
    containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '230.000đ';
  }
  if(j == 7){
    containerZoom.classList.add('container_zoom_1');
    containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/bub1xb-simg-d0daf0-800x1200-max.jpg'
    containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/bub1xb-simg-d0daf0-800x1200-max.jpg'
    containerZoom.querySelector('.card_room_2').src = 'https://cf.shopee.vn/file/20d43d6bac58200cda209d085ab8d089'
    containerZoom.querySelector('.card_room_3').src = 'https://cf.shopee.vn/file/9247b0c9b78aa01b1693712c3a092b79'
    containerZoom.querySelector('.card_room_4').src = 'https://lzd-img-global.slatic.net/g/ot/common/cb133772ebea4cdc863f6c14bd067633.jpeg_360x360q75.jpg_.webp'
    containerZoom.querySelector('.card-title').innerHTML = 'Quần baggy kaki nữ';
    containerZoom.querySelector('.card-text1 .h').innerHTML = '90.000đ';
    containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '150.000đ';
  }
  if(j==8){
    containerZoom.classList.add('container_zoom_1');
    containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/zxh2pd.jpg'
    containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/zxh2pd.jpg'
    containerZoom.querySelector('.card_room_2').src = 'https://media3.scdn.vn/img3/2019/9_20/xeBnso_simg_b5529c_250x250_maxb.jpg'
    containerZoom.querySelector('.card_room_3').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTElso7fJuv1wFcJxHjXj9jTpECZNX_ypTr7b2w--TbAQWiuYp5tzNlrxqTiVl28Bzl8Ks&usqp=CAU'
    containerZoom.querySelector('.card_room_4').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStCe-n7iFmgFrv9y4sMatkFYW79nU4r64AY5xbjXgY4g97OX7ZsLyx0KneKfhQzBASYaY&usqp=CAU'
    containerZoom.querySelector('.card-title').innerHTML = 'Quần kaki nữ các màu';
    containerZoom.querySelector('.card-text1 .h').innerHTML = '189.000đ';
    containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '300.000đ';
  }
  }
  
  //thêm số lượng sản phẩm
  var valuerCard = document.getElementById('soLuongSanPham') 
  index = valuerCard.innerHTML
  function giam(){
    if(index > 0){
      index--
    }
    valuerCard.innerHTML = index
  
  }
  function tang(){
      index++
  valuerCard.innerHTML = index
  }
  function close_room(){
    containerZoom.classList.remove('container_zoom_1');
    valuerCard.innerHTML = 0;
    index = 0;
  }
  
  //đổi ảnh trong room card
  function zoom(img) {
    var cardZoom = document.getElementById('card_zoom');
    cardZoom.src = img.src;
  }
  // Lấy tham chiếu đến các phần tử HTML
var openPopupButton = document.getElementById("open-popup");
var closePopupButton = document.getElementById("close-popup");
var popup = document.getElementById("popup");

// Xử lý sự kiện click để mở popup
openPopupButton.addEventListener("click", function() {
  popup.style.display = "block";
});

// Xử lý sự kiện click để đóng popup
closePopupButton.addEventListener("click", function() {
  popup.style.display = "none";
});