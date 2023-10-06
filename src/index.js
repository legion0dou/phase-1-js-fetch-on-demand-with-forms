document.addEventListener('DOMContentLoaded', () => {
    const inputForm = document.getElementById('movieForm');
    const movieDetails = document.getElementById('movieDetails');
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.getElementById('searchByID').value;
  
      fetch(`http://localhost:3000/movies/${input}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.id) {
            // Display movie details
            movieDetails.innerHTML = `
              <h4>${data.title}</h4>
              <p>${data.summary}</p>
            `;
          } else {
            // Handle movie not found
            movieDetails.innerHTML = `<p>Movie not found</p>`;
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    });
  });
  