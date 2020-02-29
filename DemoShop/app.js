var productsCount = document.getElementById("products-count");
console.log(+productsCount.textContent);

var addToCartButtons = document.querySelectorAll(".add-to-cart");
console.log(addToCartButtons);
for(var i=0; i<addToCartButtons.length; i++)
{	addToCartButtons[i].addEventListener('click', function()
  {	 var prevProductsCount = +productsCount.textContent;
	   productsCount.textContent = prevProductsCount + 1;
	   console.log(productsCount.textContent);
     console.log(addToCartButtons[i]);

  })
}

var heartImages = document.querySelectorAll(".heart");
for(var i=0; i< heartImages.length; i++)
{ heartImages[i].addEventListener("click", function()
  { changeBgImg();
    // heartImages[i].style.backgroundImage = "url('../images/icon (8).png')";

  })

}
var block = document.getElementById('block');

function changeBgImg(){
    block.style.background= 'blue';
    block.style.background.images= "url('https://demos.artbees.net/jupiter/epulo/wp-content/uploads/sites/92/2016/03/heart.png')";

}






/*function addScript(scripts) {
    for(var i = 0; i < scripts.length; i++) {
        var script = document.createElement('script');
        script.src = './slick/' + scripts[i];
        document.body.appendChild(script);
    }
}
addScript([
    'jquery220.js',
    'slick.js',
    'app2.js',
]);*/

    $(document).on('ready', function() {
      $(".vertical-center-4").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 2
      });
      $(".vertical-center-3").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      $(".vertical-center-2").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 2
      });
      $(".vertical-center").slick({
        dots: true,
        vertical: true,
        centerMode: true,
      });
      $(".vertical").slick({
        dots: true,
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 3
      });
      $(".center2").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
      $(".variable").slick({
        dots: true,
        infinite: true,
        variableWidth: true
      });
      $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      });
    });
    
   