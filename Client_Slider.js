// Header Code
<script type="text/javascript">
function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", filename);
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref);
}
 
loadjscssfile("https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css", "css");
console.log("heya");
</script>

//Footer Code

<script type="text/javascript">
console.log('hello world');

var url1="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js";
var url2="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js";
var url3="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css";

var script1 = document.createElement('script');
script1.onload = function () {
    	$( "body" ).append( '<div class="bxslider"><div><img src="http://assets.stickpng.com/thumbs/58482f67cef1014c0b5e4a81.png" title="Funky roots"></div><div><img src="http://www.stickpng.com/assets/images/5842a629a6515b1e0ad75afa.png" title="The long and winding road"></div><div><img src="https://lever-client-logos.s3.amazonaws.com/123ec582-1d15-443b-b760-c85a0d353a20-1466720106417.png" title="Happy trees"></div></div>' );
  
  $(document).ready(function(){
      $(function(){
  $('.bxslider').bxSlider({
    		mode: 'horizontal',
			ticker: true,
			tickerHover: true,
			useCSS: false,
			responsive: false,
			slideMargin: 1,
			minSlides: 0,
			maxSlides: 100,
			speed: 50000,

  });
});
    });
};
script1.src = url2;

document.head.appendChild(script1); //or something of the likes

console.log('hello world1');
</script>