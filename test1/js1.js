var colorChile = [];
var config = {}
//buttons
var selectColor = document.getElementById('selectColor');
var customerOk = document.getElementById('customerOk');
var newSizeOk = document.getElementById('newSizeOk');
var deleteColor = document.getElementById('deleteColor');
var addColor = document.getElementById('addColor');

//divs
var customerColors = document.getElementById('customerColors');
var closeCustomerColors = document.getElementById('closeCustomerColors');
var customerColorsContainer = document.getElementById('customerColorsContainer');
var customerColors = document.getElementById('customerColors');
//inputs
var selectSize = document.getElementById('selectSize');
var email = document.getElementById('email');
var companyName = document.getElementById('companyName');
var colorPiker = document.getElementById('colorPiker');
var addSize = document.getElementById("addSize");

//functions
selectColor.addEventListener("click",function(e){
    console.log("event : ", e);
    config.deletColor = false;
    customerColors.style.display = "block";
});

deleteColor.addEventListener("click",function(e){
    console.log("event : ", e);
    config.deletColor = true;
    customerColors.style.display = "block";
});

closeCustomerColors.addEventListener("click",function(e){
    customerColors.style.display = "none";
});

selectSize.addEventListener("change",function(e){
    console.log("on change : ", e);
    config.size = e.target.value;
});

customerOk.addEventListener("click",function(e){
    config.email = email.value;
    config.companyName = companyName.value;
    console.log("config : ", config)
    alert("Hi : "+config.companyName+"\n"+"Your email is :"+config.email+"\n"+"Color : "+config.color+"\n"+"Size : "+config.size);
});

addColor.addEventListener("click",function(e){
    console.log("addColor e : ", e)
    var color = colorPiker.value;
    let el = document.createElement('div');
    el.style.backgroundColor = color;
    el.classList.add('colorDiv');
    el.setAttribute('color',color);
    el.addEventListener("click",function(ev){
        console.log("element color e 1: ", ev);
        console.log("element color e 2: ", ev.target.getAttribute('color'));
        
       if(!config.deletColor)  {
           customerColors.style.display = "none";
           config.color = ev.target.getAttribute('color');
        }
       else customerColorsContainer.removeChild(ev.target);
    })
    customerColorsContainer.appendChild(el);
});

newSizeOk.addEventListener("click",function(e){
    var s = addSize.value;
    var el  = document.createElement('option');
    el.text = s;
    el.value = s;
    selectSize.appendChild(el);
    addSize.value = '';

});

//test
// for(let i= 0; i < 30; i++){
//     let e = document.createElement('div');
//     e.classList.add('colorDiv');
//     e.setAttribute('color','#yuq'+i);
//     e.addEventListener("click",function(e){
//         console.log("element color e 1: ", e);
//         console.log("element color e 2: ", e.target.getAttribute('color'));
//         config.color = e.target.getAttribute('color');
//         customerColorsContainer.removeChild(e.target)
//     })
//     customerColorsContainer.appendChild(e);
// }
// while(customerColorsContainer.firstChild){
//     console.log("customerColorsContainer : ",customerColorsContainer.childNodes)
// }
console.log("customerColorsContainer : ",customerColorsContainer.firstChild)


