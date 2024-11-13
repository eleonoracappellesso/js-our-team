"use strict";
console.clear();

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


function createCards() {
  let template = '';
  const teamContainer = document.querySelector(".team-card");

  for (let value of teamMembers) {
    template += `
            <div class="team-member col-12 col-sm-6 col-md-4 col-lg-4">
              <div class="card m-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${value.img}" class="img-fluid rounded-start" alt="Foto identificativa">
                  </div>
                  <div class="col-md-8">
                        <h5>${value.name}</h5>
                        <p>${value.role}</p>
                        <a href="mailto:${value.email}">${value.email}</a>
                        <i class="fa-solid fa-trash-can btn text-warning d-flex justify-content-end trash-member"></i> 
                  </div>
                </div>
              </div>
            </div>`;
  }

  teamContainer.innerHTML = template;

  trashMembers();
}
createCards();

const myForm = document.getElementById('addPerson');
myForm.addEventListener('submit', addMember);

function addMember(event) {
  event.preventDefault();
  event.stopPropagation();

  const name = document.getElementById('name').value;
  const role = document.getElementById('role').value;
  const email = document.getElementById('email').value;
  const img = document.getElementById('img').value;

  const newMember = {
    name, role, email, img
  };

  teamMembers.push(newMember);
  createCards();
}

function trashMembers() {
  
  const trashBtns = document.querySelectorAll('.trash-member');
  console.log(trashBtns.length);
  for (let i = 0; i < trashBtns.length; i++) {
    console.log('ciclo-' + i);
    console.log(trashBtns[i]);

    trashBtns[i].addEventListener('click', deleteMember);
  }
}

function deleteMember(event) {
  event.preventDefault();
  event.stopPropagation();

  const cardToDelete = event.target.closest('.team-member');
  if (cardToDelete) {
    cardToDelete.remove();
  }
}