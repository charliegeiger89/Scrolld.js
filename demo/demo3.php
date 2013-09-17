
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
            <li><a id="demo1Btn" href="#demo1" class="scrolldSpeed19 easeOutBounce easeOutBounceMobile demoBtn">1</a></li>
            <li><a id="demo2Btn" href="#demo2" class="scrolldEasing2 scrolldEasing2Mobile demoBtn">2</a></li>
            <li><a id="demo3Btn" href="#demo3" class="scrolldEasing1 scrolldEasing1Mobile demoBtn">3</a></li>
            <li><a id="demo4Btn" href="#demo4" class="easeOutElastic easeOutElasticMobile  demoBtn">4</a></li>
            <li><a id="demo5Btn" href="#demo5" class="easeInOutExpo easeInOutExpoMobile demoBtn">5</a></li>            
            <li style="clear: both;"></li>            
        </ul>     
        </div>
      <span id="demoTopHome"><a href='http://www.scrolldjs.com' target="_blank" style="display: block;color: #758292;">&#920;</a></span>
         
      <span data-toggle="tooltip" data-placement="top" title="Going Up?" id="demoTop"><a href='#' style="display: block;padding:5px;">&#916;</a></span>
                
      <div id="fullSectionWrap">

    <div id="demo1" class="fullSection flatRed">      
          <div class='demoImgWrap'><img src="http://placekitten.com/140/140?image=1" id="demo5Btn" class="img-circle demoImg"></div>
          <h2 style="text-align: center;text-shadow: 0 -1px 0 rgba(0,0,0,0.3);color: #ffffff;">Divs Only?<br>No Way.</h2>
          <div class="textContent" style="text-align:center!important;">
          <p style="text-align:center!important;">            
          <span id='demo2Btn' class="lead" style="text-align:center!important;font-size:18px;">You can target any element with an id, and trigger with any clickable element!<br> 
          
          This is a simple text span that takes you to section 2, click me!
          </span></p>
 <br><br>
              <a href="../demo/demo2.php" id="prevDemo" style="background: #C13D2F;color: #fff;" ><h2>Back</h2></a>
          </div>          

       </div>

         <div id="demo2" class="fullSection flatGreen">     
            <div class='demoImgWrap'><img id="demo3Btn" src="http://placekitten.com/140/140?image=2" class="img-circle demoImg"></div>
          <h2 style="text-align: center;text-shadow: 0 -1px 0 rgba(0,0,0,0.4);color: #ffffff;">Test It Out</h2>
          <div class="textContent">
          <p class='justify'>            
          <span class="lead" style="font-size:18px ">Read the code below, then click on the <span style="color: #ffffff;">cat</span> above to trigger</span> <br> 
          </p>
<code class="darkCode" style="margin: 5px 0;width: 100%;"><span class="lead" style="font-size:18px;color: #ffffff;">Actual Code:</span>

&lt;img id=&quot;demo3Btn&quot; src=&quot;http://placekitten.com/140/140?image=2&quot;&gt;

&lt;div id=&quot;demo3&quot;&gt;&lt;/div&gt; 

</code>
          </div>  
       </div>

            <div id="demo3" class="fullSection flatYellow">     
            <div class='demoImgWrap'><img src="http://placekitten.com/140/140?image=3" id="demo4Btn" class="scrolldEasing2 scrolldEasing2Mobile img-circle demoImg"></div>
          <h2 style="text-align: center;text-shadow: 0 -1px 0 rgba(0,0,0,0.4);color: #ffffff;">Wasn't That Easy?</h2>
          <div class="textContent">
          <p class='justify'>            
          <span class="lead" style="font-size:18px ">Read the code below, then click on the <span style="color: #ffffff;">cat</span></span> <br> 
          </p>
<code class="darkCode" style="margin: 5px 0;width: 100%;">&lt;img id=&quot;demo4Btn&quot; class=&quot;scrolldEasing2 scrolldEasing2Mobile&quot; src=&quot;http://placekitten.com/140/140?image=3&quot;&gt;

&lt;div id=&quot;demo4&quot;&gt;&lt;/div&gt; 
</code>
              
<p style="text-align:center!important;">
same code except it includes the custom easing class declaration that will <b style="color: #12F39C;">only</b> be applied to the trigger.
Simply apply the name of the easing method as a class, and that specific trigger will use the set easing instead of the global easing method. Add mobile to name end for mobile only, or use both to change the mobile vs web experience.
</p>
          </div>  
       </div>
                  <div id="demo4" class="fullSection flatBlue">     
            <div class='demoImgWrap'><img src="http://placekitten.com/140/140?image=4" id="demo5Btn" class="easeInElastic easeInBackMobile img-circle demoImg"></div>
          <h2 style="text-align: center;text-shadow: 0 -1px 0 rgba(0,0,0,0.4);color: #ffffff;">Try This Out</h2>
          <div class="textContent">
          <p class='justify'>            
          <span class="lead" style="font-size:18px ">2 separate custom easing methods, try it once and then <span style="color: #ffffff;">resize</span> the window and try it again.</span> <br> 
          </p>
              <p class='justify'>   
              Click that cat! Quick!</p>
              <br>
              <code class="darkCode" style="margin: 5px 0;width: 100%;">&lt;img id=&quot;demo4Btn&quot; class=&quot;easeInElastic easeInBackMobile&quot; src=&quot;http://placekitten.com/140/140?image=3&quot;&gt;

&lt;div id=&quot;demo5&quot;&gt;&lt;/div&gt; 
</code>
          </div>  
       </div>
                  <div id="demo5" class="fullSection flatOrangeDark">     
            <div class='demoImgWrap'><img src="http://placekitten.com/140/140?image=5" class="img-circle demoImg"></div>
          <h2 style="text-align: center;text-shadow: 0 -1px 0 rgba(0,0,0,0.4);color: #ffffff;">Read The Tweaks</h2>
          <div class="textContent">
          <p class='justify'>            
          <span class="lead" style="font-size:18px ">Go home & try it out <span style="color: #ffffff;">yourself</span></span> <br> 
          </p>
          <p class='justify'>   
              Nam id orci ut nisi iaculis ornare. Proin in nisi a mi interdum dapibus vitae eu ante. Donec ante dui, varius at augue nec, luctus semper mauris. Praesent id dui quam. Integer ut odio vitae sapien elementum fermentum et nec dui. Ut facilisis nibh vel nulla pellentesque pharetra. Sed auctor est malesuada, faucibus mauris id, faucibus nibh. Proin vel placerat elit. Donec nunc nisi, placerat non libero in, condimentum auctor odio. 
          </p>
          </div>
                      <a href='http://www.scrolldjs.com' target="_blank" id="nextDemo"><h2>Home</h2></a>
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
