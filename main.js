let select=document.querySelectorAll('.currency')

let btn=document.getElementById("btn")
let input=document.getElementById("input")
//data va fetch pannanum

fetch('https://api.frankfurter.app/currencies')
//json convert pannnanum
.then(respo=>respo.json())
//convert toa another method
.then(respo=>dropDown(respo))


function dropDown(respo){

   // console.log(Object.entries(respo))
   let cur=Object.entries(respo)
for(let i=0;i<cur.length;i++)
{
   let opt = `<option value="${cur[i][0]}">${cur[i][0]}</option>`
   select[0].innerHTML +=opt
   select[1].innerHTML +=opt

}
}
btn.addEventListener('click',()=>{
 let cur1=select[0].value
 let cur2=select[1].value
 let inputva=input.value
 if(cur1==cur2)
    alert("choose different currencies")
 else
 convert(cur1,cur2,inputva)

});

function convert(cur1,cur2,inputva)
 {
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputva}&from=${cur1}&to=${cur2}`)
      .then(resp => resp.json())
      .then((data) => {
        document.getElementById('result').value=Object.values(data.rates)
      });
}