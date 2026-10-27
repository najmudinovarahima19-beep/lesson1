// CRUD
// C - CREATE, POST
// R - READ, GET
// U - UPDATE, PUT
// D - DELETE, DELETE

const AIP = "https://66dfd7322fb67ac16f2740dd.mockapi.io/product";
let result = document.querySelector('.result')
async function getService() {
  try {
    const res = await fetch(AIP);
    const data = await res.json("");
    console.log(data);
    showService(data)
  } catch (error) {
    console.log(error);
    result.innerHTML = 'not fount 404'
  }
}
getService();

async function showService(data){
    result.innerHTML = data.map((item) =>{
        return`
                <div class="service">
            <img src="${item.avatar}" alt="">
            <div class="info">
                <b>${item.name}</b>
                <p>${item.price}</p>
            </div>
            <div class="btns"></div>
            <button class="update">update</button>
            <button class="delete">delete</button>
        </div>
        </div>
        `
    }).join('')

}

async function deleteService(id){
  let check = confira("Сиз очурууну каалайсызбы?")
try{
  const res = await fetch(`${API}/${id}`,{
  method : "delete"
  })
} catch(error){

}

}