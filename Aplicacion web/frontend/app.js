const form = document.getElementById('create-tournament-form');
const tournamentList = document.getElementById('tournament-list-items');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  const location = document.getElementById('location').value;
  const participants = document.getElementById('participants').value.split(',');
  
  const tournament = { name, date, location, participants };
  
  // Enviar el torneo al backend
  fetch('/tournaments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(tournament)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Limpiar el formulario
    form.reset();
    // Actualizar el listado de torneos
    getTournaments();
  })
  .catch(error => {
    console.error('Error al crear el torneo:', error);
  });
});

function getTournaments() {
  // Obtener torneos desde el backend
  fetch('/tournaments')
  .then(response => response.json())
  .then(data => {
    // Limpiar el listado de torneos
    tournamentList.innerHTML = '';
    
    // Mostrar cada torneo en el listado
    data.forEach(tournament => {
      const li = document.createElement('li');
      li.textContent = tournament.name;
      tournamentList.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error al obtener los torneos:', error);
  });
}

// Obtener los torneos al cargar la página
getTournaments();
