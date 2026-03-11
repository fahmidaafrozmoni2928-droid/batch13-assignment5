const allButton = () => {
    
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    fetch(url)
    .then((res) => res.json())
    .then((json) => {
        displayAllButtons(json.data);
        console.log(json.data);
    })

}
allButton();

const displayAllButtons = (btns) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";

   btns.forEach((btn) => {
    console.log(btn);


    const createCard = document.createElement('div');
   createCard.innerHTML = `
   
  <div class="card card-border shadow-xl space-y-4 h-full">
            <div class="card-actions justify-end pt-5 pr-4">
                <button class="btn btn-soft btn-error rounded-full ">${btn.priority}</button>
              </div>

            <div class="card-body">
              <h2 class="card-title font-bold text-xl">${btn.title}</h2>
              <p class="text-gray-600">${btn.description}</p>
              </div>
              <div class="pl-5 space-x-5">
              ${btn.labels[0] ? ` <button  class="btn-bug btn btn-soft btn-error rounded-full outline "> ${btn.labels[0]} </button>`: ""}
              ${btn.labels[1] ?    `<button  class="btn-help btn btn-soft btn-warning rounded-full outline">${ btn.labels[1]} </button>`: ""}
              </div>
              <br>
              <hr class="text-gray-300">
              <br>
              <div class="pl-4 text-gray-600">
                <p>#1
                    ${btn.author}</p>
                    <p>${btn.createdAt}</p>
              </div>

          </div>
           `

  cardContainer.appendChild(createCard);

   });

  
}

const btnAll = document.getElementById('btn-all');
const btnOpen = document.getElementById('btn-open');
const btnClosed = document.getElementById('btn-closed')
function styleButtons(id){
     btnAll.classList.add('bg-white', 'text-black');
     btnOpen.classList.add('bg-white', 'text-black');
     btnClosed.classList.add('bg-white', 'text-black');

     btnAll.classList.remove('btn-primary');
     btnOpen.classList.remove('btn-primary');
     btnClosed.classList.remove('btn-primary');

   const selected = document.getElementById(id);
   selected.classList.add('btn-primary');
   selected.classList.remove('bg-white', 'text-black');
   console.log(selected);
}



     
   