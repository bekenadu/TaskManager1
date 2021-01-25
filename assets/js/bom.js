/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/


let hreff = location.href;
let protocoll = location.protocol;
let hostt = location.host;
let portt = location.port;
let hostnamee = location.hostname;

let appnamee = navigator.appname;
let appversionn = navigator.appversion;
let platformm = navigator.platform;
let languagee = navigator.Language;
let cookieEnabledd = navigator.cookieEnabled;

let heightt= screen.height;
let widthh = screen.width;
let pixelDepthtt = screen.pixelDepth;

let lengthh = history.length;
let statee= history.state;




// Define UI Variables  here 

let badges= document.querySelectorAll(".badge");
badges[0].innerText=hreff;
badges[1].innerText=protocoll;
badges[2].innerText=hostt;
badges[3].innerText = hostnamee;
badges[4].innerText = appnamee;
badges[5].innerText = appversionn;
badges[6].innerText = platformm;
badges[7].innerText = languagee;
badges[8].innerText = cookieEnabledd;
badges[9].innerText = heightt;
badges[10].innerText = widthh;
badges[12].innerText = pixelDepthtt;
badges[13].innerText = lengthh;
badges[14].innerText = statee;



// Display the BOM Information on the innerHTML of the elements