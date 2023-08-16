console.log("---character.js attached---");

const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#character-name').value.trim();
  const gender = document.querySelector('#gender').value.trim();
  const race = document.querySelector('#race').value.trim();
  const classs = document.querySelector('#classs').value.trim();

  const description = document.querySelector('#description').value.trim();
  // const background = document.querySelector('#background').value.trim();
  // const look = document.querySelector('#look').value.trim();
  // const personality = document.querySelector('#personality').value.trim();

  const strength = document.querySelector('#strField').value.trim();
  const dexterity = document.querySelector('#dexField').value.trim();
  const consitution = document.querySelector('#chaField').value.trim();
  const intelligence = document.querySelector('#intField').value.trim();
  const wisdom = document.querySelector('#wisField').value.trim();
  const charisma = document.querySelector('#chaField').value.trim();

  if (name && gender && race && classs && description) {
    const response = await fetch(`/api/characters`, {
      method: 'POST',
      body: JSON.stringify({ name, gender, race, classs, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/characters/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/character');
    } else {
      alert('Failed to delete character');
    }
  }
};

document
  .querySelector('.new-character-form')
  .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.character-list')
//   .addEventListener('click', delButtonHandler);
