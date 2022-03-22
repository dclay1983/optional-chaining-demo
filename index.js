import axios from 'axios';

let renderStats = (obj) => {
  // grabbing stats in a less than efficient manner to better simulate
  // how the optional chaining operator works.
  let stats = {
    hp: obj.stats?.[0].base_stat,
    attack: obj.stats?.[1].base_stat,
    defense: obj.stats?.[2].base_stat,
    specialAttack: obj.stats?.[3].base_stat,
    specialDefense: obj.stats?.[4].base_stat,
    speed: obj.stats?.[5].base_stat,
  };

  // console.table renders a table view of the passed in argument or nested array
  console.table(stats);
}

// takes an argument after `npm start` to define which pokemon to query
// if no argument is provided pokemon defaults to 'charmander'
const pokemon = process.argv[2] || 'charmander';

// using axios to show a simple use case.
axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  .then( ({data}) => {
    // calling renderStats here simulates initializing state which causes a re-render
    console.log('renderStats called with an object:')
    renderStats(data)
  });


console.log('renderStats called with an empty object:')

// calling renderStats with an empty object simulates how our app
// would initially call the render method when state is not initialized yet
renderStats({});
