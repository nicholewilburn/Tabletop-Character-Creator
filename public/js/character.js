const newFormHandler = async (event) => {
  // event.preventDefault();

  // const name = document.querySelector('#').value.trim();
  // const gender = document.querySelector('#').value.trim();
  // const race = document.querySelector('#').value.trim();
  // const class = document.querySelector('#').value.trim();

  // const description = document.querySelector('#').value.trim();
  // const background = document.querySelector('#').value.trim();
  // const look = document.querySelector('#').value.trim();
  // const personality = document.querySelector('#').value.trim();

  // const strength = document.querySelector('#').value.trim();
  // const dexterity = document.querySelector('#').value.trim();
  // const charisma = document.querySelector('#').value.trim();
  // const intelligence = document.querySelector('#').value.trim();
  // const wisdom = document.querySelector('#').value.trim();
  // const charisma = document.querySelector('#').value.trim();

  // if (name && gender && race && class && description) {
  //   const response = await fetch(`/api/characters`, {
  //     method: 'POST',
  //     body: JSON.stringify({ name, gender, race, class, description }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   if (response.ok) {
  //     document.location.replace('/profile');
  //   } else {
  //     alert('Failed to create project');
  //   }
  // }
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

document
  .querySelector('.character-list')
  .addEventListener('click', delButtonHandler);
