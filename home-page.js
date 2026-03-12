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
             
    if(btn.status === "open"){
    
      createCard.classList.add('border-t-4', 'border-green-500');
    }
    else if(btn.status === "closed"){
  
    
      createCard.classList.add('border-t-4', 'border-purple-500');
    }
   
    
   createCard.innerHTML = `
   
  <div class="card card-border shadow-xl space-y-4 h-full">
            <div class="card-actions justify-end pt-5 pr-4">
                <button class="btn btn-soft btn-error rounded-full ">${btn.priority}</button>
              </div>

            <div class="card-body">
              <h2 class="card-title font-bold text-xl">${btn.title}</h2>
              <p class="text-gray-600">${btn.description}</p>
              </div>
              <div class="pl-5 space-x-5 space-y-3">
              ${btn.labels[0] ? ` <button  class="btn-bug btn btn-soft btn-error rounded-full outline "> ${btn.labels[0]} </button>`: ""}
              ${btn.labels[1] ?    `<button  class="btn-help btn btn-soft btn-warning rounded-full outline">${ btn.labels[1]} </button>`: ""}
              </div>
              <br>
              <hr class="text-gray-300">
              <br>
              <div class="pl-4 text-gray-600 flex">
              <div class = "justify-start">
                <p>#1${btn.author}
                    </p>
                    <p>${btn.assignee}</p>
                    </div>
                    <div class = " justify-end pl-3">
                    <p>${btn.createdAt}</p>
                    <p>Updated:${btn.updatedAt}</p>
                    </div>
              </div>
              <p class = "">${btn.status}</p>

          </div>
           `
          
  createCard.addEventListener("click", () => {
    console.log(btn.id);
    openModal(btn.id);

  })         
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

//const btnOpen = document.getElementById('btn-open');
//const btnAll = document.getElementById('btn-all');
//const btnClosed = document.getElementById('btn-closed');
//open button

btnOpen.addEventListener("click", function(){
  const cards = document.querySelectorAll('#card-container > div');
  
 cards.forEach((card) => {
   if( card.classList.contains( 'border-green-500')){
     card.style.display = "";
   }
  else{
   card.style.display = "none";
  }
 })
 
})

// all button

btnAll.addEventListener("click", function() {
const cards = document.querySelectorAll('#card-container > div');
cards.forEach((card) => {
 card.style.display = "";
})
})

//closed button

btnClosed.addEventListener("click", function(){
  const cards = document.querySelectorAll('#card-container > div');
cards.forEach((card) => {
 if(card.classList.contains('border-purple-500')){
   card.style.display = "";
 }
 else{
   card.style.display = "none";
 }
 
})
})


const openModal = (modalId) => {
     console.log(modalId);
   const modalContainer = document.getElementById('modal-container');
    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${modalId}`)
    .then((res) => res.json())
    .then((json) => {
      const details = json.data
      console.log(details, "json");
     const modalTitle = document.getElementById('modal-title');
     const modalDescription = document.getElementById('modal-description');
     const modalStatus = document.getElementById('modal-status');
     const modalAssignee = document.getElementById('modal-assignee');
     const createdAt = document.getElementById('modal-createdAt');
     //const modalLabels = document.getElementById('modal-labels');
     const modalAssig = document.getElementById('modal-assig');
     const modalBug = document.getElementById('modal-bug');
     const modalHelp = document.getElementById('modal-help');
     const modalPrio = document.getElementById('modal-prio');
     modalPrio.textContent = details.priority;
     modalBug.textContent = details.labels[0];
      modalHelp.textContent = details.labels[1];
     modalTitle.textContent = details.title;
     modalDescription.textContent = details.description;
     modalStatus.textContent = details.status;
   //  modalLabels.textContent = details.labels;
     modalAssignee.textContent = details.assignee;
     createdAt.textContent = details.createdAt;
      modalAssig.textContent = "Assignee:" + details.assignee;
     modalContainer.showModal();
    })
  
}