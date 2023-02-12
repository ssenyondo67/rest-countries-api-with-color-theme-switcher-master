// ------------------fetching data---------------
var countryNames=[];
var region=[];
var subregion=[];
fetch('data.json')
        .then(response =>response.json())
        .then(data =>{
            for( var i=0;i<data.length;i++){
             countryNames.push(data[i].name);
             region.push(data[i].region);
             subregion.push(data[i].subregion);
            
            }        
        });    

// --------------togletheme-------------
const theme =document.getElementById('theme');
const icon =document.getElementById('icon');
const mode =document.getElementById('mode');


theme.addEventListener('click',()=>{
    if(icon.classList.contains('fa-sun-o')){
        mode.innerHTML='Dark';
        icon.classList.remove('fa-sun-o');
        icon.classList.add('fa-moon-o');
        document.body.classList.add('lightTheme');
    }else{
        mode.innerHTML='Light';
        icon.classList.remove('fa-moon-o');
        icon.classList.add('fa-sun-o');
        document.body.classList.remove('lightTheme');
    }
});
let page=localStorage.getItem('page');
if(!page){
   localStorage.setItem('page','i');
   
}


function goTo(id){
   var name=id;
   

   localStorage.setItem('page','details');
   localStorage.setItem('name', name);
   console.log(name)
   window.location.replace("details.html")
  
}




localStorage.setItem('page','i');