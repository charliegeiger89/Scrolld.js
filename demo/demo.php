
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>&middot; Scrolld.js Demo &middot;</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=0">
    <meta name="description" content="Demo of Scrolld.js">
    <meta name="author" content="">
    <!-- CSS -->
      <style type="text/css">
          
    * {
       box-sizing: border-box;
       -moz-box-sizing: border-box;
    }

    html, body {
       margin: 0;
       padding: 0;
       height: 100%;
    }         
          
          #fixedNavBar > ul{
     list-style: none;
        text-decoration: none;
}

#fixedNavBar{
           position: fixed;
           width: 100%;
           padding: 0.5% 0;           
           top: 0;
           z-index: 8888;
           background: #4B5763 !important;
}
      </style>
    <link href="../css/combinedCSS.css" rel="stylesheet">
    <link rel="shortcut icon" href="../img/favicon.ico"/>
  </head>
  <body>

 <div id="fadeBlack"> 
      </div>   
    <!-- Wrap all page content here -->
      
    <div id="fixedNavBar" style="border-bottom: 2px solid #3B434B;">
        <ul id="demoUl">
            <li><a id="demo1Btn" href="#demo1" class="demoBtn">1</a></li>
            <li><a id="demo2Btn" href="#demo2" class="demoBtn">2</a></li>
            <li><a id="demo3Btn" href="#demo3" class="demoBtn">3</a></li>
            <li><a id="demo4Btn" href="#demo4" class="demoBtn">4</a></li>
            <li><a id="demo5Btn" href="#demo5" class="demoBtn">5</a></li>            
            <li style="clear: both;"></li>            
        </ul>     
        </div>
      <span id="demoTopHome"><a href='http://www.scrolldjs.com' target="_blank" style="display: block;color: #758292;">&#920;</a></span>

      <span id="demoTopNext"><a href='../demo/demo2.php' style="display: block;color: #758292;">&#8250;</a></span> 
      <span data-toggle="tooltip" data-placement="top" title="Going Up?" id="demoTop"><a href='#' style="display: block;padding:5px;">&#916;</a></span>
                
      <div id="fullSectionWrap">

    <div id="demo1" class="fullSection flatRed">      
          <div class='demoImgWrap'><img src="http://placekitten.com/140/140?image=1" class="img-circle demoImg"></div>
          <h2 style="text-align: center;text-shadow: 0 -1px 0 rgba(0,0,0,0.3);color: #ffffff;">Scrolling Simplified.</h2>
          <div class="textContent">
          <p class='justify'>            
          <span class="lead" style="font-size:18px ">Scrolld.js gives you the tools to be your own scroll <span style="color: #ffffff;">boss</span></span></p>
          <p class='justify'>   
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac fermentum eros. Curabitur ultrices aliquam ipsum vel consequat. Praesent sodales, dui a adipiscing pretium, libero orci venenatis velit, nec dapibus risus sapien a erat. Phasellus sodales dignissim enim, non semper enim mollis a. Maecenas vel metus et tellus viverra ornare id eu sapien. Vestibulum id placerat nunc, quis imperdiet tellus. Phasellus gravida elementum mauris sed dignissim. Suspendisse venenatis fringilla iaculis. Aliquam imperdiet placerat tempor. Donec ac mollis lectus. Proin ut libero iaculis, suscipit quam eu, auctor dolor. Phasellus dapibus sodales dolor eget fermentum. Aliquam euismod libero vel tempus interdum.
              
          </p>
              <br><br>
           <p class="smallp">Duis in lobortis est. Donec ac felis hendrerit, commodo leo sit amet, blandit quam. Donec fringilla ullamcorper ullamcorper. Vestibulum in dictum orci, vitae eleifend lectus. Maecenas pulvinar congue urna, et egestas risus dignissim at. Nulla eu tortor sed nulla tempor aliquam eu vitae ante. Proin eu sem nec arcu molestie congue id sit amet nisi. Aliquam non lectus vehicula, rhoncus neque at, rhoncus justo. Curabitur imperdiet et nisi dapibus suscipit. Suspendisse potenti. In ornare, massa ultrices mollis aliquet, justo augue porttitor urna, in facilisis purus est consectetur leo. In porttitor est sed justo sodales hendrerit. Integer quis ante feugiat, scelerisque orci at, porta sem. Aliquam ligula metus, vulputate id erat et, ornare mollis lacus. Sed mollis eros sem.        
           </p>
          </div>          

       </div>

         <div id="demo2" class="fullSection flatGreen">     
            <div class='demoImgWrap'><img src="http://placekitten.com/140/140?image=2" class="img-circle demoImg"></div>
          <h2 style="text-align: center;text-shadow: 0 -1px 0 rgba(0,0,0,0.4);color: #ffffff;">It's Fast & Light.</h2>
          <div class="textContent">
          <p class='justify'>            
          <span class="lead" style="font-size:18px ">Get on up, It's﻿ <span style="color: #ffffff;">Bobsled</span> time</span> <br> 
          </p>
              <p class='justify'>   
              Nam id orci ut nisi iaculis ornare. Proin in nisi a mi interdum dapibus vitae eu ante. Donec ante dui, varius at augue nec, luctus semper mauris. Praesent id dui quam. Integer ut odio vitae sapien elementum fermentum et nec dui. Ut facilisis nibh vel nulla pellentesque pharetra. Sed auctor est malesuada, faucibus mauris id, faucibus nibh. Proin vel placerat elit. Donec nunc nisi, placerat non libero in, condimentum auctor odio. Donec fringilla congue vestibulum. Ut tempus in augue fringilla gravida. Integer nec blandit quam. Mauris volutpat nisi in elit sagittis, non elementum dui rhoncus.
               </p>
              <br><br>
              <p class="smallp">
              Duis in lobortis est. Donec ac felis hendrerit, commodo leo sit amet, blandit quam. Donec fringilla ullamcorper ullamcorper. Vestibulum in dictum orci, vitae eleifend lectus. Maecenas pulvinar congue urna, et egestas risus dignissim at. Nulla eu tortor sed nulla tempor aliquam eu vitae ante. Proin eu sem nec arcu molestie congue id sit amet nisi. Aliquam non lectus vehicula, rhoncus neque at, rhoncus justo. Curabitur imperdiet et nisi dapibus suscipit. Suspendisse potenti. In ornare, massa ultrices mollis aliquet, justo augue porttitor urna, in facilisis purus est consectetur leo. In porttitor est sed justo sodales hendrerit. Integer quis ante feugiat, scelerisque orci at, porta sem. Aliquam ligula metus, vulputate id erat et, ornare mollis lacus. Sed mollis eros sem.        
              </p>
          </div>  
       </div>

            <div id="demo3" class="fullSection flatYellow">     
            <div class='demoImgWrap'><img src="http://placekitten.com/140/140?image=3" class="img-circle demoImg"></div>
          <h2 style="text-align: center;text-shadow: 0 -1px 0 rgba(0,0,0,0.4);color: #ffffff;">Mobile Friendly.</h2>
          <div class="textContent">
          <p class='justify'>            
          <span class="lead" style="font-size:18px ">Your Nokia <span style="color: #ffffff;">3310</span> never looked so good</span> <br> 
          </p>
              <p class='justify'>   
              Nam id orci ut nisi iaculis ornare. Proin in nisi a mi interdum dapibus vitae eu ante. Donec ante dui, varius at augue nec, luctus semper mauris. Praesent id dui quam. Integer ut odio vitae sapien elementum fermentum et nec dui. Ut facilisis nibh vel nulla pellentesque pharetra. Sed auctor est malesuada, faucibus mauris id, faucibus nibh. Proin vel placerat elit. Donec nunc nisi, placerat non libero in, condimentum auctor odio. Donec fringilla congue vestibulum. Ut tempus in augue fringilla gravida. Integer nec blandit quam. Mauris volutpat nisi in elit sagittis, non elementum dui rhoncus.
                 </p> <br><br>
                  <p class="smallp">
              Duis in lobortis est. Donec ac felis hendrerit, commodo leo sit amet, blandit quam. Donec fringilla ullamcorper ullamcorper. Vestibulum in dictum orci, vitae eleifend lectus. Maecenas pulvinar congue urna, et egestas risus dignissim at. Nulla eu tortor sed nulla tempor aliquam eu vitae ante. Proin eu sem nec arcu molestie congue id sit amet nisi. Aliquam non lectus vehicula, rhoncus neque at, rhoncus justo. Curabitur imperdiet et nisi dapibus suscipit. Suspendisse potenti. In ornare, massa ultrices mollis aliquet, justo augue porttitor urna, in facilisis purus est consectetur leo. In porttitor est sed justo sodales hendrerit. Integer quis ante feugiat, scelerisque orci at, porta sem. Aliquam ligula metus, vulputate id erat et, ornare mollis lacus. Sed mollis eros sem.        
          </p>
          </div>  
       </div>
                  <div id="demo4" class="fullSection flatBlue">     
            <div class='demoImgWrap'><img src="http://placekitten.com/140/140?image=4" class="img-circle demoImg"></div>
          <h2 style="text-align: center;text-shadow: 0 -1px 0 rgba(0,0,0,0.4);color: #ffffff;">Open Source.</h2>
          <div class="textContent">
          <p class='justify'>            
          <span class="lead" style="font-size:18px ">Six easy payments of <span style="color: #ffffff;">$null.99</span></span> <br> 
          </p>
              <p class='justify'>   
              Nam id orci ut nisi iaculis ornare. Proin in nisi a mi interdum dapibus vitae eu ante. Donec ante dui, varius at augue nec, luctus semper mauris. Praesent id dui quam. Integer ut odio vitae sapien elementum fermentum et nec dui. Ut facilisis nibh vel nulla pellentesque pharetra. Sed auctor est malesuada, faucibus mauris id, faucibus nibh. Proin vel placerat elit. Donec nunc nisi, placerat non libero in, condimentum auctor odio. Donec fringilla congue vestibulum. Ut tempus in augue fringilla gravida. Integer nec blandit quam. Mauris volutpat nisi in elit sagittis, non elementum dui rhoncus.
                  </p><br><br><p class="smallp">
              Duis in lobortis est. Donec ac felis hendrerit, commodo leo sit amet, blandit quam. Donec fringilla ullamcorper ullamcorper. Vestibulum in dictum orci, vitae eleifend lectus. Maecenas pulvinar congue urna, et egestas risus dignissim at. Nulla eu tortor sed nulla tempor aliquam eu vitae ante. Proin eu sem nec arcu molestie congue id sit amet nisi. Aliquam non lectus vehicula, rhoncus neque at, rhoncus justo. Curabitur imperdiet et nisi dapibus suscipit. Suspendisse potenti. In ornare, massa ultrices mollis aliquet, justo augue porttitor urna, in facilisis purus est consectetur leo. In porttitor est sed justo sodales hendrerit. Integer quis ante feugiat, scelerisque orci at, porta sem. Aliquam ligula metus, vulputate id erat et, ornare mollis lacus. Sed mollis eros sem.        
          </p>
          </div>  
       </div>
                  <div id="demo5" class="fullSection flatOrangeDark">     
            <div class='demoImgWrap'><img src="http://placekitten.com/140/140?image=5" class="img-circle demoImg"></div>
          <h2 style="text-align: center;text-shadow: 0 -1px 0 rgba(0,0,0,0.4);color: #ffffff;">Next Demo Time.</h2>
          <div class="textContent">
          <p class='justify'>            
          <span class="lead" style="font-size:18px ">It is clearly time to <span style="color: #ffffff;">move</span> on</span> <br> 
          </p>
              <p class='justify'>   
              Nam id orci ut nisi iaculis ornare. Proin in nisi a mi interdum dapibus vitae eu ante. Donec ante dui, varius at augue nec, luctus semper mauris. Praesent id dui quam. Integer ut odio vitae sapien elementum fermentum et nec dui. Ut facilisis nibh vel nulla pellentesque pharetra. Sed auctor est malesuada, faucibus mauris id, faucibus nibh. Proin vel placerat elit. Donec nunc nisi, placerat non libero in, condimentum auctor odio. 
          </p>
          </div>
                      <a href="../demo/demo2.php" id="nextDemo"><h2>Next Demo</h2></a>
       </div>

        </div>
      
  

<!-- JavaScript -->

      <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
      <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
      <script src="../demo/js/scrolld.min.js"></script>
      <script type="text/javascript">$("[id*='Btn']").stop(true).on('click', function (e) {e.preventDefault();$(this).scrolld();})</script>
      <script src="../demo/js/deferDemo.js"></script>
 
  </body>
</html>
