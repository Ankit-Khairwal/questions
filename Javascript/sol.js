let data = [
  {
    movieName: "The Shawshank Redemption",
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    rating: 4.8,
    bestScenes: [
      {
        title: "Andy Dufresne escapes from prison",
        duration: "15 mins",
      },
      {
        title: "Brooks was here",
        duration: "10 mins",
      },
    ],
  },
  {
    movieName: "The Godfather",
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    rating: 4.9,
    bestScenes: [
      {
        title: "Horse head in bed",
        duration: "5 mins",
      },
      {
        title: "Cannoli scene",
        duration: "3 mins",
      },
    ],
  },
  {
    movieName: "The Dark Knight",
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    rating: 4.8,
    bestScenes: [
      {
        title: "Opening bank robbery",
        duration: "12 mins",
      },
      {
        title: "Why So Serious interrogation",
        duration: "8 mins",
      },
    ],
  },
  {
    movieName: "The Lord of the Rings: The Return of the King",
    actors: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
    rating: 4.9,
    bestScenes: [
      {
        title: "Ride of the Rohirrim",
        duration: "10 mins",
      },
      {
        title: "Frodo destroys the One Ring",
        duration: "7 mins",
      },
    ],
  },
];
("Question1:");
// function getLongestScenes(data) {
//   let result = [];

//   for (let movie of data) {
//     let longest = 0;

//     for (let scene of movie.bestScenes) {
//       let duration = parseInt(scene.duration); // remove "mins" and convert to number
//       if (duration > longest) {
//         longest = duration;
//       }
//     }

//     result.push({
//       movieName: movie.movieName,
//       longestSceneDuration: longest,
//     });
//   }

//   return result;
// }

// console.log(getLongestScenes(data));

("question2:");
// function getAverageRating(data) {
//   let total = data.reduce(function (sum, movie) {
//     return sum + movie.rating;
//   }, 0);
//   let average = total / data.length;
//   return average.toFixed(2);
// }
// console.log(getAverageRating(data));

("question3:");
// function sortMovies(data) {
//     return data.sort(function (a, b) {
//       if (b.rating === a.rating) {
//         return a.movieName.localeCompare(b.movieName);
//       }
//       return b.rating - a.rating;
//     });
//   }

//   console.log(sortMovies(data));
