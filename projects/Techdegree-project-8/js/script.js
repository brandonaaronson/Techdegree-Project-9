
// global variables

let employees = [];
const apiUrl = 'https://randomuser.me/api/?results=12&inc=name,picture,email,location,phone,dob&noinfo&nat=US';
const container = document.querySelector('.grid-container');
const overlay = document.querySelector('.overlay');
const modalContainer = document.querySelector('.modal-content');
const modalClose = document.querySelector('.modal-close');


// fetches employee information

fetch(apiUrl)
  .then(res => res.json())
  .then(res => res.results)
  .then(displayEmployees)
  .catch(err => console.log(err))
  


  function displayEmployees(employeeData) {

    employees = employeeData;

    let employeeHTML = "";

    employees.forEach((employee, index) => {
      let name = employee.name;
      let email = employee.email;
      let city = employee.location.city;
      let picture = employee.picture;

      employeeHTML += `
        <div class="card" data-index="${index}">
          <img class="avatar" src="${picture.large}" />
          <div class="user-info">
            <h2 class="name">${name.first} ${name.last}</h2>
            <p class="email">${email}</p>
            <p class="address">${city}</p>
            </div>
          </div>
      `
    });
    container.innerHTML = employeeHTML;
  }

// function to display modal popup with more user information //

function displayModal(index) {
  let {name, dob, phone, email, location: { city, street, state, postcode}, picture} = employees[index];

  let date = new Date(dob.date);

  const modalHTML = `
  <img class="avatar" src="${picture.large}" alt=""/>
  <div class="modal-info">
    <h2 class="name"> ${name.first} ${name.last}</h2>
    <p class="email">${email}</p>
    <p class="address">${city}</p>
    <hr />
    <p>${phone}</p>
    <p class="address">${street}, ${state} ${postcode}</p>
    <p>Birthday:
    ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
  </div>
  `;

  overlay.classList.remove('hidden');
  modalContainer.innerHTML = modalHTML;
}



// event listener for opening the modal //

container.addEventListener('click', e => {

  if (e.target !== container) {
    const card = e.target.closest(".card");
    const index = card.getAttribute('data-index');

    displayModal(index);
  }
});

// event listener for closing the modal //

document.addEventListener('click', (e) => {
  if (e.target.className == 'overlay' || e.target.className == 'modal-close') {
    overlay.classList.add('hidden');
  }
});

document.addEventListener('keydown', (e) =>{
  if (e.key === "Escape") {
    overlay.classList.add('hidden')
  }
});