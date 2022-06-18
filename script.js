document.body.innerHTML = `
       <div class="header">
       <a class="larger button" style="background:#45910f" href="index.html">EightSidedSquare</a>
       <div class="socials">
           <a class="button" style="background:red" target="_blank" href="https://www.youtube.com/c/EightSidedSquare">YouTube</a>
           <a class="button" style="background:#1DA1F2" target="_blank" href="https://twitter.com/SidedSquare">Twitter</a>
           <a class="button" style="background:black" target="_blank" href="https://www.tiktok.com/@eightsidedsquare">TikTok</a>
       </div>
   </div>
   <div class="content">` + document.body.innerHTML + `</div>`;
document.head.innerHTML = `
    <meta charset="utf-8">
   <meta name="viewport" content="width=device-width">
   <title>EightSidedSquare</title>
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Chewy&display=swap" rel="stylesheet">
   <link href="style.css" rel="stylesheet" type="text/css" />` + document.head.innerHTML;