function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const inputElement = document.querySelector('#inputs textarea');
      const bestRestaurantResult = document.querySelector('#bestRestaurant p');
      const bestWorkersResult = document.querySelector('#workers p');

      const restaurants = JSON.parse(inputElement.value).reduce((result, restaurant) => {
         const [restaurantName, workersData] = restaurant.split(' - ');

         const workers = workersData.split(', ').map((worker) => {
            const [name, salary] = worker.split(' ');

            return {
               name, 
               salary: Number(salary)
            };
         });

         if (!result.hasOwnProperty(restaurantName)) {
            result[restaurantName] = {
               workers: []
            }
         }

         result[restaurantName].workers.push(...workers);

         return result;
      }, {});
    
      function getAvgSalary(restaurant) {
         return (
            restaurant.workers.reduce((result, worker) => result + worker.salary, 0) /
            restaurant.workers.length
         ); 
      }

      const [bestRestaurantKey] = Object.keys(restaurants)
         .sort((a, b) => getAvgSalary(restaurants[b]) - getAvgSalary(restaurants[a]));

      const bestWorkers = restaurants[bestRestaurantKey].workers
         .slice()
         .sort((a, b) => b.salary - a.salary);

      bestRestaurantResult.textContent = `Name: ${bestRestaurantKey} Average Salary: ${getAvgSalary(restaurants[bestRestaurantKey]).toFixed(2)} Best Salary: ${bestWorkers[0].salary.toFixed(2)}`;
      bestWorkersResult.textContent = bestWorkers.map((worker) => `Name: ${worker.name} With Salary: ${worker.salary}`).join(' ');
   }
}