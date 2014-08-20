Scrolld.js V0.2.1
==========

COMPLETE REFACTOR OF SOURCE. V0.2.1 is drastically more efficient, and much smaller. Minified version is under 1KB. Read below for changes. The plugin is now much less invasive and only requires a data-attribute to function.

COMMENTS, QUESTIONS, BUGS? FEEL FREE TO CONTACT AT:

scrolldjs@gmail.com

==========

* 1. [About](#about)
* 2. [Use](#how-to-use)
* 3. [Demo](#demo)
* 4. [Download](#download)
* 5. [License](#license)

### ABOUT

Scrolld.js provides a method for highly precise scrolling for pixel-perfect layouts and navigation using real-time updated data values.
Scrolld.js is intended for easy use and is fully deployable within minutes. The minified version is under 1KB.

### HOW TO USE

**1** - Download the source & upload it to your server.

**2** - Place the script include file on your page: 

Ex:
 ```html
 <script type="text/javascript" src="../js/Scrolld.0.2.1.js"></script>
 ```

**3** - Place this trigger script at bottom of body:

Ex:
```html
<script type="text/javascript">
	$('[data-scrolld]').scrolld();
</script>
```

**4** - Add a unique data attribute to each anchor element. The data attribute value for the anchor must match the id of the target div.

Ex:
```html
<div data-scrolld='targetElement'></div>
<div id='targetElement'></div>
```

**5** - Keep the defaults or easily tweak the settings for a custom fit.

### TWEAKS

Scrolld.js was built with quick and simple customization in mind. You can easily customize the entire experience by initializing with arguments. 

Ex:
```html
<script type="text/javascript">
	$('[data-scrolld]').scrolld({
        position: 'center',
        speed: 2000,
        offset: 50,
        easing: 'easeOutCubic',
        callback: function(){ console.log('done!') }
	});
</script>
```

Default options:

```
    position: 'top', // 'top' or 'center'
    speed: 1100, // any int
    offset: 0, // any int
    easing: 'scrolldEasing', // Requires jQuery easing plugin for additional easing methods
    callback: null // Function ran at end of animation
```

### DEMO

Download repo and view the demo directory for a basic demo.


### LICENSE

(MIT License)

Copyright (C) 2014 Charles Geiger

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
