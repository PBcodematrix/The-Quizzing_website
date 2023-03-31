// const chartData = {
//     labels: ["Option 1", "Option 2", "Option 3", "Option 4"],
//     data: [30, 17, 10, 7,],
//   };
  
//   const myChart = document.querySelector(".my-chart");
//   const ul = document.querySelector(".programming-stats .details ul");
  
//   new Chart(myChart, {
//     type: "doughnut",
//     data: {
//       labels: chartData.labels,
//       datasets: [
//         {
//           label: "Option selected",
//           data: chartData.data,
//         },
//       ],
//     },
//     options: {
//       borderWidth: 10,
//       borderRadius: 2,
//       hoverBorderWidth: 0,
//       plugins: {
//         legend: {
//           display: false,
//         },
//       },
//     },
//   });



  
  
//   const populateUl = () => {
//     chartData.labels.forEach((l, i) => {
//       let li = document.createElement("li");
//       li.innerHTML = `${l}: <span class='percentage'>${chartData.data[i]}%</span>`;
//       ul.appendChild(li);
//     });
//   };
  
//   populateUl();
  


