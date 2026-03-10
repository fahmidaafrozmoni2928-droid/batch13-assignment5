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
                <button class="btn btn-soft btn-error rounded-full ">HIGH</button>
              </div>

            <div class="card-body">
              <h2 class="card-title font-bold text-xl">${btn.title}</h2>
              <p class="text-gray-600">${btn.description}</p>
              </div>
              <div class="pl-5 space-x-5">
                <button class="btn btn-soft btn-error rounded-full outline ">${btn.labels}</button>
                <button class="btn btn-soft btn-warning rounded-full outline">${btn.labels}</button>
              </div>
              <br>
              <hr class="text-gray-300">
              <br>
              <div class="pl-4 text-gray-600">
                <p>#1
                    by john_doe</p>
                    <p>1/15/2024</p>
              </div>

          </div>
           `

  cardContainer.appendChild(createCard);

   });

  
}