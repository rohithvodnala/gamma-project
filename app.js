// const form =document.querySelector('#searchForm');
// const res =document.querySelector('#result');
// // const buttonEle =document.getElementById('buttondata');
// // const h4Ele =document.getElementById('h4');
// // const price =r.data.ticker.price;
// // const price =r.data.ticker.price;
// // h4Ele.textContent = "1234";

// form.addEventListener('submit',(e)=>{

//     e.preventDefault();

//     const ctype  =form.elements.coinType.value;
    
//     console.log(ctype);


// });

// const fetchPrice= async(ctype) =>{
// const r = await axios.get('https://api.cryptonator.com/api/ticker/${ctype}');
// const price =r.data.ticker.price;
// // h4Ele.textContent = price;
// const volume =r.data.ticker.volume;
// const change=r.data.ticker.change;
// const base= r.data.ticker.base;
// const target=r.data.ticker.target;
// const time =r.data.timestamp;

// res.innerHTML='${price}';

// }


const form = document.querySelector('#searchForm');
const res = document.querySelector('#tableResult');
var upd; 
form.addEventListener('submit',(e)=>{

    e.preventDefault();
    if(upd){
        clearTimeout(upd);
    }

    const ctype = form.elements.coinType.value;

    fetchPrice(ctype);

});


const fetchPrice= async(ctype) =>{
    const r = await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=USD`);
    console.log(r.data.coin.price);
     const price = r.data.coin.price;
     const volume  = r.data.coin.volume;
     const change = r.data.coin.priceChange1d;
     const base = r.data.coin.name;
     const target = 'USD';


     res.innerHTML =`<tr style="background-color:blue; color:white; font-weight:700">
     <td>
         Property
     </td>
     <td>Value</td>
 </tr>
 <tr>
     <td>
         ${base}
     </td>
     <td>${price} ${target}</td>
 </tr>
 <tr>
     <td>
         Volume
     </td>
     <td>${volume}</td>
 </tr>
 <tr>
     <td>
         Change
     </td>
     <td>${change}</td>
 </tr>`

    upd = setTimeout(()=>fetchPrice(ctype),10000);

}