// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import { getDatabase, set, ref, update,onValue,get,child  } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcsQIuUfP_wD5Jef-M_Tbgwqbwjl7yvLg",
    authDomain: "quizzing-495f8.firebaseapp.com",
    databaseURL: "https://quizzing-495f8-default-rtdb.firebaseio.com",
    projectId: "quizzing-495f8",
    storageBucket: "quizzing-495f8.appspot.com",
    messagingSenderId: "442259494870",
    appId: "1:442259494870:web:ff67437fe0d8906ac93677",
    measurementId: "G-VKHBJRD5E4"
};

// Initialize Firebase
var uid;
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const user = auth.currentuser;
const db = getDatabase(app);
const dbRef = ref(db);

      
        get(child(ref(db),'topic/arr')).then((snapshot) => {

            if (snapshot.exists()) {
             
                var arr1= [];
                arr1= snapshot.val();

                console.log(arr1);


                
            
           
            for(var i=1;i<arr1.length;i++)
            {   
                
              var li=document.createElement("li");
              li.innerHTML=` <div class="quiz" ><p class="top" id="topic${i}">${arr1[i]}</p><button type="button" class="btn btn-primary pollbtn" id=${arr1[i]}>Poll status</button></div>`
              var ul=document.getElementById("add-topic");
              ul.appendChild(li);
              console.log(li);
              
            }
            
            
            

            
                   
                   
                 
                    

          
                              
                
                

                      
                      document.getElementById("loadContent").classList.add("d-none");




                      document.getElementById("Food").addEventListener("click",function(){
                        get(child(ref(db),'Poll/'+ "Food")).then((snapshot) => {
        
                                if (snapshot.exists()) {
                                  console.log(snapshot.val());
                                  let topic = snapshot.val();
                                 
                                  var k = 'value';
                                  
                
                                  for(var j=1;j<6;j++)
                                  {  
                                   
                                    var option1 =topic['qs'+j].option1;
                                    var option2 =topic['qs'+j].option2;
                                    var option3 =topic['qs'+j].option3;
                                    var option4 =topic['qs'+j].option4;
                                    
                                    eval('var ' + k + j + '= ' + option1 + option2 + option3 + option4 + ';'); 
                
                                  }
                          
                                  
                                  
                           
                          for(var j=1;j<6;j++)
                          {  
                        
                            var option1 =topic['qs'+j].option1;
                            var option2 =topic['qs'+j].option2;
                            var option3 =topic['qs'+j].option3;
                            var option4 =topic['qs'+j].option4;
                        
                            console.log(option1);
                            console.log(option2);
                            console.log(option3);
                            console.log(option4);
                           
                        
                            const chartData = {
                                labels: ["Option 1", "Option 2", "Option 3", "Option 4"],
                                data: [option1, option2, option3, option4,],
                              };
                             
                              const myChart = document.getElementById("Foodqs"+j);
                              const ul = document.getElementById("Fooddetail"+j);
                            //   if(newChart){
                            //     newChart.clear();
                            //     newChart.destroy();
                            // }
                              
                            var newChart=  new Chart(myChart, {
                                type: "doughnut",
                                data: {
                                  labels: chartData.labels,
                                  datasets: [
                                    {
                                      label: "Option selected",
                                      data: chartData.data,
                                    },
                                  ],
                                },
                                options: {
                                  borderWidth: 10,
                                  borderRadius: 2,
                                  hoverBorderWidth: 0,
                                  plugins: {
                                    legend: {
                                      display: false,
                                    },
                                  },
                                },
                              });
                            
                            
                            
                              
                              
                              const populateUl = () => {
                                chartData.labels.forEach((l, i) => {
                                  let li = document.createElement("li");
                                  li.innerHTML = `${l}: <span class='percentage'>${((chartData.data[i]))}</span>`;
                                  ul.appendChild(li);
                                });
                              };
                              
                              populateUl();
                        
                        
                            }
                          }else {
                            console.log("No data available");
                             }
             
                         }).catch((error) => {
                           console.error(error);
                         });       
        
                        })
                        
                        document.getElementById("Music").addEventListener("click",function(){
                          get(child(ref(db),'Poll/'+ "Music")).then((snapshot) => {
          
                                  if (snapshot.exists()) {
                                    console.log(snapshot.val());
                                    let topic = snapshot.val();
                                   
                                   
                  
                  
                  
                             
                            
                                    
                                    
                             
                            for(var j=1;j<6;j++)
                            {  
                          
                              var option1 =topic['qs'+j].option1;
                              var option2 =topic['qs'+j].option2;
                              var option3 =topic['qs'+j].option3;
                              var option4 =topic['qs'+j].option4;
                          
                              console.log(option1);
                              console.log(option2);
                              console.log(option3);
                              console.log(option4);
                             
                          
                              const chartData = {
                                  labels: ["Option 1", "Option 2", "Option 3", "Option 4"],
                                  data: [option1, option2, option3, option4,],
                                };
                               
                                const myChart = document.getElementById("Musicqs"+j);
                                const ul = document.getElementById("Musicdetail"+j);
                              //   if(newChart){
                              //     newChart.clear();
                              //     newChart.destroy();
                              // }
                                
                              var newChart=  new Chart(myChart, {
                                  type: "doughnut",
                                  data: {
                                    labels: chartData.labels,
                                    datasets: [
                                      {
                                        label: "Option selected",
                                        data: chartData.data,
                                      },
                                    ],
                                  },
                                  options: {
                                    borderWidth: 10,
                                    borderRadius: 2,
                                    hoverBorderWidth: 0,
                                    plugins: {
                                      legend: {
                                        display: false,
                                      },
                                    },
                                  },
                                });
                              
                              
                              
                                
                                
                                const populateUl = () => {
                                  chartData.labels.forEach((l, i) => {
                                    let li = document.createElement("li");
                                    li.innerHTML = `${l}: <span class='percentage'>${chartData.data[i]}</span>`;
                                    ul.appendChild(li);
                                  });
                                };
                                
                                populateUl();
                          
                          
                              }
                            }else {
                              console.log("No data available");
                               }
               
                           }).catch((error) => {
                             console.error(error);
                           });       
          
                          })
        
                          document.getElementById("Corporate").addEventListener("click",function(){
                            get(child(ref(db),'Poll/'+ "Corporate")).then((snapshot) => {
            
                                    if (snapshot.exists()) {
                                      console.log(snapshot.val());
                                      let topic = snapshot.val();
                                     
                                     
                    
                    
                    
                               
                              
                                      
                                      
                               
                              for(var j=1;j<6;j++)
                              {  
                            
                                var option1 =topic['qs'+j].option1;
                                var option2 =topic['qs'+j].option2;
                                var option3 =topic['qs'+j].option3;
                                var option4 =topic['qs'+j].option4;
                            
                                console.log(option1);
                                console.log(option2);
                                console.log(option3);
                                console.log(option4);
                               
                            
                                const chartData = {
                                    labels: ["Option 1", "Option 2", "Option 3", "Option 4"],
                                    data: [option1, option2, option3, option4,],
                                  };
                                 
                                  const myChart = document.getElementById("Corporateqs"+j);
                                  const ul = document.getElementById("Corporatedetail"+j);
                                //   if(newChart){
                                //     newChart.clear();
                                //     newChart.destroy();
                                // }
                                  
                                var newChart=  new Chart(myChart, {
                                    type: "doughnut",
                                    data: {
                                      labels: chartData.labels,
                                      datasets: [
                                        {
                                          label: "Option selected",
                                          data: chartData.data,
                                        },
                                      ],
                                    },
                                    options: {
                                      borderWidth: 10,
                                      borderRadius: 2,
                                      hoverBorderWidth: 0,
                                      plugins: {
                                        legend: {
                                          display: false,
                                        },
                                      },
                                    },
                                  });
                                
                                
                                
                                  
                                  
                                  const populateUl = () => {
                                    chartData.labels.forEach((l, i) => {
                                      let li = document.createElement("li");
                                      li.innerHTML = `${l}: <span class='percentage'>${chartData.data[i]}</span>`;
                                      ul.appendChild(li);
                                    });
                                  };
                                  
                                  populateUl();
                            
                            
                                }
                              }else {
                                console.log("No data available");
                                 }
                 
                             }).catch((error) => {
                               console.error(error);
                             });       
            
                            })
                                      
                            document.getElementById("General-Knowledge").addEventListener("click",function(){
                              get(child(ref(db),'Poll/'+ "General-Knowledge")).then((snapshot) => {
              
                                      if (snapshot.exists()) {
                                        console.log(snapshot.val());
                                        let topic = snapshot.val();
                                       
                                       
                      
                      
                      
                                 
                                
                                        
                                        
                                 
                                for(var j=1;j<6;j++)
                                {  
                              
                                  var option1 =topic['qs'+j].option1;
                                  var option2 =topic['qs'+j].option2;
                                  var option3 =topic['qs'+j].option3;
                                  var option4 =topic['qs'+j].option4;
                              
                                  console.log(option1);
                                  console.log(option2);
                                  console.log(option3);
                                  console.log(option4);
                                 
                              
                                  const chartData = {
                                      labels: ["Option 1", "Option 2", "Option 3", "Option 4"],
                                      data: [option1, option2, option3, option4,],
                                    };
                                   
                                    const myChart = document.getElementById("General-Knowledgeqs"+j);
                                    const ul = document.getElementById("General-Knowledgedetail"+j);
                                  //   if(newChart){
                                  //     newChart.clear();
                                  //     newChart.destroy();
                                  // }
                                    
                                  var newChart=  new Chart(myChart, {
                                      type: "doughnut",
                                      data: {
                                        labels: chartData.labels,
                                        datasets: [
                                          {
                                            label: "Option selected",
                                            data: chartData.data,
                                          },
                                        ],
                                      },
                                      options: {
                                        borderWidth: 10,
                                        borderRadius: 2,
                                        hoverBorderWidth: 0,
                                        plugins: {
                                          legend: {
                                            display: false,
                                          },
                                        },
                                      },
                                    });
                                  
                                  
                                  
                                    
                                    
                                    const populateUl = () => {
                                      chartData.labels.forEach((l, i) => {
                                        let li = document.createElement("li");
                                        li.innerHTML = `${l}: <span class='percentage'>${chartData.data[i]}</span>`;
                                        ul.appendChild(li);
                                      });
                                    };
                                    
                                    populateUl();
                              
                              
                                  }
                                }else {
                                  console.log("No data available");
                                   }
                   
                               }).catch((error) => {
                                 console.error(error);
                               });       
              
                              })
        
                              document.getElementById("Literature").addEventListener("click",function(){
                                get(child(ref(db),'Poll/'+ "Literature")).then((snapshot) => {
                
                                        if (snapshot.exists()) {
                                          console.log(snapshot.val());
                                          let topic = snapshot.val();
                                         
                                         
                        
                        
                        
                                   
                                  
                                          
                                          
                                   
                                  for(var j=1;j<6;j++)
                                  {  
                                
                                    var option1 =topic['qs'+j].option1;
                                    var option2 =topic['qs'+j].option2;
                                    var option3 =topic['qs'+j].option3;
                                    var option4 =topic['qs'+j].option4;
                                
                                    console.log(option1);
                                    console.log(option2);
                                    console.log(option3);
                                    console.log(option4);
                                   
                                
                                    const chartData = {
                                        labels: ["Option 1", "Option 2", "Option 3", "Option 4"],
                                        data: [option1, option2, option3, option4,],
                                      };
                                     
                                      const myChart = document.getElementById("Literatureqs"+j);
                                      const ul = document.getElementById("Literaturedetail"+j);
                                    //   if(newChart){
                                    //     newChart.clear();
                                    //     newChart.destroy();
                                    // }
                                      
                                    var newChart=  new Chart(myChart, {
                                        type: "doughnut",
                                        data: {
                                          labels: chartData.labels,
                                          datasets: [
                                            {
                                              label: "Option selected",
                                              data: chartData.data,
                                            },
                                          ],
                                        },
                                        options: {
                                          borderWidth: 10,
                                          borderRadius: 2,
                                          hoverBorderWidth: 0,
                                          plugins: {
                                            legend: {
                                              display: false,
                                            },
                                          },
                                        },
                                      });
                                    
                                    
                                    
                                      
                                      
                                      const populateUl = () => {
                                        chartData.labels.forEach((l, i) => {
                                          let li = document.createElement("li");
                                          li.innerHTML = `${l}: <span class='percentage'>${chartData.data[i]}</span>`;
                                          ul.appendChild(li);
                                        });
                                      };
                                      
                                      populateUl();
                                
                                
                                    }
                                  }else {
                                    console.log("No data available");
                                     }
                     
                                 }).catch((error) => {
                                   console.error(error);
                                 });       
                
                                })
                                document.getElementById("Video-Games").addEventListener("click",function(){
                                  get(child(ref(db),'Poll/'+ "Video-Games")).then((snapshot) => {
                  
                                          if (snapshot.exists()) {
                                            console.log(snapshot.val());
                                            let topic = snapshot.val();
                                           
                                           
                          
                          
                          
                                     
                                    
                                            
                                            
                                     
                                    for(var j=1;j<6;j++)
                                    {  
                                  
                                      var option1 =topic['qs'+j].option1;
                                      var option2 =topic['qs'+j].option2;
                                      var option3 =topic['qs'+j].option3;
                                      var option4 =topic['qs'+j].option4;
                                  
                                      console.log(option1);
                                      console.log(option2);
                                      console.log(option3);
                                      console.log(option4);
                                     
                                  
                                      const chartData = {
                                          labels: ["Option 1", "Option 2", "Option 3", "Option 4"],
                                          data: [option1, option2, option3, option4,],
                                        };
                                       
                                        const myChart = document.getElementById("Video-Gamesqs"+j);
                                        const ul = document.getElementById("Video-Gamesdetail"+j);
                                      //   if(newChart){
                                      //     newChart.clear();
                                      //     newChart.destroy();
                                      // }
                                        
                                      var newChart=  new Chart(myChart, {
                                          type: "doughnut",
                                          data: {
                                            labels: chartData.labels,
                                            datasets: [
                                              {
                                                label: "Option selected",
                                                data: chartData.data,
                                              },
                                            ],
                                          },
                                          options: {
                                            borderWidth: 10,
                                            borderRadius: 2,
                                            hoverBorderWidth: 0,
                                            plugins: {
                                              legend: {
                                                display: false,
                                              },
                                            },
                                          },
                                        });
                                      
                                      
                                      
                                        
                                        
                                        const populateUl = () => {
                                          chartData.labels.forEach((l, i) => {
                                            let li = document.createElement("li");
                                            li.innerHTML = `${l}: <span class='percentage'>${chartData.data[i]}</span>`;
                                            ul.appendChild(li);
                                          });
                                        };
                                        
                                        populateUl();
                                  
                                  
                                      }
                                    }else {
                                      console.log("No data available");
                                       }
                       
                                   }).catch((error) => {
                                     console.error(error);
                                   });       
                  
                                  })

                                  document.getElementById("Sports").addEventListener("click",function(){
                                    get(child(ref(db),'Poll/'+ "Sports")).then((snapshot) => {
                    
                                            if (snapshot.exists()) {
                                              console.log(snapshot.val());
                                              let topic = snapshot.val();
                                             
                                             
                            
                            
                            
                                       
                                      
                                              
                                              
                                       
                                      for(var j=1;j<6;j++)
                                      {  
                                    
                                        var option1 =topic['qs'+j].option1;
                                        var option2 =topic['qs'+j].option2;
                                        var option3 =topic['qs'+j].option3;
                                        var option4 =topic['qs'+j].option4;
                                    
                                        console.log(option1);
                                        console.log(option2);
                                        console.log(option3);
                                        console.log(option4);
                                       
                                    
                                        const chartData = {
                                            labels: ["Option 1", "Option 2", "Option 3", "Option 4"],
                                            data: [option1, option2, option3, option4,],
                                          };
                                         
                                          const myChart = document.getElementById("Sportsqs"+j);
                                          const ul = document.getElementById("Sportsdetail"+j);
                                        //   if(newChart){
                                        //     newChart.clear();
                                        //     newChart.destroy();
                                        // }
                                          
                                        var newChart=  new Chart(myChart, {
                                            type: "doughnut",
                                            data: {
                                              labels: chartData.labels,
                                              datasets: [
                                                {
                                                  label: "Option selected",
                                                  data: chartData.data,
                                                },
                                              ],
                                            },
                                            options: {
                                              borderWidth: 10,
                                              borderRadius: 2,
                                              hoverBorderWidth: 0,
                                              plugins: {
                                                legend: {
                                                  display: false,
                                                },
                                              },
                                            },
                                          });
                                        
                                        
                                        
                                          
                                          
                                          const populateUl = () => {
                                            chartData.labels.forEach((l, i) => {
                                              let li = document.createElement("li");
                                              li.innerHTML = `${l}: <span class='percentage'>${chartData.data[i]}</span>`;
                                              ul.appendChild(li);
                                            });
                                          };
                                          
                                          populateUl();
                                    
                                    
                                        }
                                      }else {
                                        console.log("No data available");
                                         }
                         
                                     }).catch((error) => {
                                       console.error(error);
                                     });       
                    
                                    })
                                


  

 
                   
                }else {
                 console.log("No data available");
                  }
  
              })  .then(()=>{
               
         
                
                document.getElementById("Food").addEventListener("click",function(){
                                 
                  console.log("food");
                     // document.getElementById(bid).classList.remove("close");
                   document.getElementById("Foodpopup").style.display="block";
                   document.getElementById("Foodpopup").classList.remove("close");
                 
                 })
                 
                 document.getElementById("Foodbttn").addEventListener("click",function(){
                 
                   // document.getElementById(bid).classList.add("close");
                   document.getElementById("Foodpopup").style.display="none";
                   document.getElementById("Foodpopup").classList.remove("close");
                 
                 })
                 
                 document.getElementById("Music").addEventListener("click",function(){
                                  
                   console.log("music");
                   // document.getElementById(bid).classList.remove("close");
                 document.getElementById("Musicpopup").style.display="block";
                 document.getElementById("Musicpopup").classList.remove("close");
                 
                 })
                 
                 document.getElementById("Musicbttn").addEventListener("click",function(){
                 
                 // document.getElementById(bid).classList.add("close");
                 document.getElementById("Musicpopup").style.display="none";
                 document.getElementById("Musicpopup").classList.remove("close");
                 
                 })
                 
                 document.getElementById("Corporate").addEventListener("click",function(){
                   console.log("corporate");                
                  
                   // document.getElementById(bid).classList.remove("close");
                 document.getElementById("Corporatepopup").style.display="block";
                 document.getElementById("Corporatepopup").classList.remove("close");
                 
                 })
                 
                 document.getElementById("Corporatebttn").addEventListener("click",function(){
                 
                 // document.getElementById(bid).classList.add("close");
                 document.getElementById("Corporatepopup").style.display="none";
                 document.getElementById("Corporatepopup").classList.remove("close");
                 
                 })
                   
                 document.getElementById("General-Knowledge").addEventListener("click",function(){
                                  
                   console.log("General-Knowledge");
                   // document.getElementById(bid).classList.remove("close");
                 document.getElementById("General-Knowledgepopup").style.display="block";
                 document.getElementById("General-Knowledgepopup").classList.remove("close");
                 
                 })
                 
                 document.getElementById("General-Knowledgebttn").addEventListener("click",function(){
                 
                 // document.getElementById(bid).classList.add("close");
                 document.getElementById("General-Knowledgepopup").style.display="none";
                 document.getElementById("General-Knowledgepopup").classList.remove("close");
                 
                 })
                 
                 document.getElementById("Literature").addEventListener("click",function(){
                                  
                   console.log("Literature");
                   // document.getElementById(bid).classList.remove("close");
                 document.getElementById("Literaturepopup").style.display="block";
                 document.getElementById("Literaturepopup").classList.remove("close");
                 
                 })
                 
                 document.getElementById("Literaturebttn").addEventListener("click",function(){
                 
                 // document.getElementById(bid).classList.add("close");
                 document.getElementById("Literaturepopup").style.display="none";
                 document.getElementById("Literaturepopup").classList.remove("close");
                 
                 })

                 document.getElementById("Video-Games").addEventListener("click",function(){
                                  
                  console.log("Video-Games");
                  // document.getElementById(bid).classList.remove("close");
                document.getElementById("Video-Gamespopup").style.display="block";
                document.getElementById("Video-Gamespopup").classList.remove("close");
                
                })
                
                document.getElementById("Video-Gamesbttn").addEventListener("click",function(){
                
                // document.getElementById(bid).classList.add("close");
                document.getElementById("Video-Gamespopup").style.display="none";
                document.getElementById("Video-Gamespopup").classList.remove("close");
                
                })

                document.getElementById("Sports").addEventListener("click",function(){
                                  
                  console.log("Sports");
                  // document.getElementById(bid).classList.remove("close");
                document.getElementById("Sportspopup").style.display="block";
                document.getElementById("Sportspopup").classList.remove("close");
                
                })
                
                document.getElementById("Sportsbttn").addEventListener("click",function(){
                
                // document.getElementById(bid).classList.add("close");
                document.getElementById("Sportspopup").style.display="none";
                document.getElementById("Sportspopup").classList.remove("close");
                
                })
                 


 // .............................................POPUP QUIZ..........................................



                 document.getElementById("topic1").addEventListener('click',function(){

                  document.querySelector(".popupquiz").classList.toggle("grid");
                  
                })
                document.getElementById("topic2").addEventListener('click',function(){
                
                  document.querySelector(".popupquiz").classList.toggle("grid");
                  
                })
                document.getElementById("topic3").addEventListener('click',function(){
                
                  document.querySelector(".popupquiz").classList.toggle("grid");
                  
                })
                document.getElementById("topic4").addEventListener('click',function(){
                
                  document.querySelector(".popupquiz").classList.toggle("grid");
                  
                })
                document.getElementById("topic5").addEventListener('click',function(){
                
                  document.querySelector(".popupquiz").classList.toggle("grid");
                  
                })
                document.getElementById("topic6").addEventListener('click',function(){
                
                  document.querySelector(".popupquiz").classList.toggle("grid");
                  
                })
                document.getElementById("topic7").addEventListener('click',function(){
                
                  document.querySelector(".popupquiz").classList.toggle("grid");
                  
                })
                
                
                document.getElementById("goBack").addEventListener('click',function(){
                
                  document.querySelector(".popupquiz").classList.remove("grid");
                  
                })
                


                 document.getElementById("topic1").addEventListener("click",function(){
  
                  var topic=  document.getElementById("topic1").innerHTML;
                  console.log(topic);
                  document.getElementById("quiztopic").innerHTML=topic;
                get(child(dbRef, 'quizzes/' + topic )).then((snapshot) => {
                    if (snapshot.exists()) {
                
                      document.getElementById("qs1").innerHTML      =   snapshot.val().qs1;
                      document.getElementById("qs1opt1").innerHTML =   snapshot.val().q1opt1;
                      document.getElementById("qs1opt2").innerHTML =   snapshot.val().q1opt2;
                      document.getElementById("qs1opt3").innerHTML =   snapshot.val().q1opt3;
                      document.getElementById("qs1opt4").innerHTML =   snapshot.val().q1opt4;
                
                      document.getElementById("qs2").innerHTML      =   snapshot.val().qs2;
                      document.getElementById("qs2opt1").innerHTML =   snapshot.val().q2opt1;
                      document.getElementById("qs2opt2").innerHTML =   snapshot.val().q2opt2;
                      document.getElementById("qs2opt3").innerHTML =   snapshot.val().q2opt3;
                      document.getElementById("qs2opt4").innerHTML =   snapshot.val().q2opt4;
                
                      document.getElementById("qs3").innerHTML      =   snapshot.val().qs3;
                      document.getElementById("qs3opt1").innerHTML =   snapshot.val().q3opt1;
                      document.getElementById("qs3opt2").innerHTML =   snapshot.val().q3opt2;
                      document.getElementById("qs3opt3").innerHTML =   snapshot.val().q3opt3;
                      document.getElementById("qs3opt4").innerHTML =   snapshot.val().q3opt4;
                
                      document.getElementById("qs4").innerHTML      =   snapshot.val().qs4;
                      document.getElementById("qs4opt1").innerHTML =   snapshot.val().q4opt1;
                      document.getElementById("qs4opt2").innerHTML =   snapshot.val().q4opt2;
                      document.getElementById("qs4opt3").innerHTML =   snapshot.val().q4opt3;
                      document.getElementById("qs4opt4").innerHTML =   snapshot.val().q4opt4;
                
                      document.getElementById("qs5").innerHTML      =   snapshot.val().qs5;
                      document.getElementById("qs5opt1").innerHTML =   snapshot.val().q5opt1;
                      document.getElementById("qs5opt2").innerHTML =   snapshot.val().q5opt2;
                      document.getElementById("qs5opt3").innerHTML =   snapshot.val().q5opt3;
                      document.getElementById("qs5opt4").innerHTML =   snapshot.val().q5opt4;
                
                
                    } else {
                        console.log("No data available");
                      }
                     
                   
                 
                
                });
                
                })
                
                document.getElementById("topic2").addEventListener("click",function(){
                
                  var topic=  document.getElementById("topic2").innerHTML;
                  console.log(topic);
                  document.getElementById("quiztopic").innerHTML=topic;
                
                get(child(dbRef, 'quizzes/' + topic )).then((snapshot) => {
                    if (snapshot.exists()) {
                
                      document.getElementById("qs1").innerHTML      =   snapshot.val().qs1;
                      document.getElementById("qs1opt1").innerHTML =   snapshot.val().q1opt1;
                      document.getElementById("qs1opt2").innerHTML =   snapshot.val().q1opt2;
                      document.getElementById("qs1opt3").innerHTML =   snapshot.val().q1opt3;
                      document.getElementById("qs1opt4").innerHTML =   snapshot.val().q1opt4;
                
                      document.getElementById("qs2").innerHTML      =   snapshot.val().qs2;
                      document.getElementById("qs2opt1").innerHTML =   snapshot.val().q2opt1;
                      document.getElementById("qs2opt2").innerHTML =   snapshot.val().q2opt2;
                      document.getElementById("qs2opt3").innerHTML =   snapshot.val().q2opt3;
                      document.getElementById("qs2opt4").innerHTML =   snapshot.val().q2opt4;
                
                      document.getElementById("qs3").innerHTML      =   snapshot.val().qs3;
                      document.getElementById("qs3opt1").innerHTML =   snapshot.val().q3opt1;
                      document.getElementById("qs3opt2").innerHTML =   snapshot.val().q3opt2;
                      document.getElementById("qs3opt3").innerHTML =   snapshot.val().q3opt3;
                      document.getElementById("qs3opt4").innerHTML =   snapshot.val().q3opt4;
                
                      document.getElementById("qs4").innerHTML      =   snapshot.val().qs4;
                      document.getElementById("qs4opt1").innerHTML =   snapshot.val().q4opt1;
                      document.getElementById("qs4opt2").innerHTML =   snapshot.val().q4opt2;
                      document.getElementById("qs4opt3").innerHTML =   snapshot.val().q4opt3;
                      document.getElementById("qs4opt4").innerHTML =   snapshot.val().q4opt4;
                
                      document.getElementById("qs5").innerHTML      =   snapshot.val().qs5;
                      document.getElementById("qs5opt1").innerHTML =   snapshot.val().q5opt1;
                      document.getElementById("qs5opt2").innerHTML =   snapshot.val().q5opt2;
                      document.getElementById("qs5opt3").innerHTML =   snapshot.val().q5opt3;
                      document.getElementById("qs5opt4").innerHTML =   snapshot.val().q5opt4;
                
                
                    } else {
                        console.log("No data available");
                      }
                     
                   
                 
                
                });
                
                })
                
                document.getElementById("topic3").addEventListener("click",function(){
                
                  var topic=  document.getElementById("topic3").innerHTML;
                  console.log(topic);
                  document.getElementById("quiztopic").innerHTML=topic;
                get(child(dbRef, 'quizzes/' + topic )).then((snapshot) => {
                    if (snapshot.exists()) {
                
                      document.getElementById("qs1").innerHTML      =   snapshot.val().qs1;
                      document.getElementById("qs1opt1").innerHTML =   snapshot.val().q1opt1;
                      document.getElementById("qs1opt2").innerHTML =   snapshot.val().q1opt2;
                      document.getElementById("qs1opt3").innerHTML =   snapshot.val().q1opt3;
                      document.getElementById("qs1opt4").innerHTML =   snapshot.val().q1opt4;
                
                      document.getElementById("qs2").innerHTML      =   snapshot.val().qs2;
                      document.getElementById("qs2opt1").innerHTML =   snapshot.val().q2opt1;
                      document.getElementById("qs2opt2").innerHTML =   snapshot.val().q2opt2;
                      document.getElementById("qs2opt3").innerHTML =   snapshot.val().q2opt3;
                      document.getElementById("qs2opt4").innerHTML =   snapshot.val().q2opt4;
                
                      document.getElementById("qs3").innerHTML      =   snapshot.val().qs3;
                      document.getElementById("qs3opt1").innerHTML =   snapshot.val().q3opt1;
                      document.getElementById("qs3opt2").innerHTML =   snapshot.val().q3opt2;
                      document.getElementById("qs3opt3").innerHTML =   snapshot.val().q3opt3;
                      document.getElementById("qs3opt4").innerHTML =   snapshot.val().q3opt4;
                
                      document.getElementById("qs4").innerHTML      =   snapshot.val().qs4;
                      document.getElementById("qs4opt1").innerHTML =   snapshot.val().q4opt1;
                      document.getElementById("qs4opt2").innerHTML =   snapshot.val().q4opt2;
                      document.getElementById("qs4opt3").innerHTML =   snapshot.val().q4opt3;
                      document.getElementById("qs4opt4").innerHTML =   snapshot.val().q4opt4;
                
                      document.getElementById("qs5").innerHTML      =   snapshot.val().qs5;
                      document.getElementById("qs5opt1").innerHTML =   snapshot.val().q5opt1;
                      document.getElementById("qs5opt2").innerHTML =   snapshot.val().q5opt2;
                      document.getElementById("qs5opt3").innerHTML =   snapshot.val().q5opt3;
                      document.getElementById("qs5opt4").innerHTML =   snapshot.val().q5opt4;
                
                
                    } else {
                        console.log("No data available");
                      }
                     
                   
                 
                
                });
                
                })
                
                document.getElementById("topic4").addEventListener("click",function(){
                
                  var topic=  document.getElementById("topic4").innerHTML;
                  console.log(topic);
                  document.getElementById("quiztopic").innerHTML=topic;
                get(child(dbRef, 'quizzes/' + topic )).then((snapshot) => {
                    if (snapshot.exists()) {
                
                      document.getElementById("qs1").innerHTML      =   snapshot.val().qs1;
                      document.getElementById("qs1opt1").innerHTML =   snapshot.val().q1opt1;
                      document.getElementById("qs1opt2").innerHTML =   snapshot.val().q1opt2;
                      document.getElementById("qs1opt3").innerHTML =   snapshot.val().q1opt3;
                      document.getElementById("qs1opt4").innerHTML =   snapshot.val().q1opt4;
                
                      document.getElementById("qs2").innerHTML      =   snapshot.val().qs2;
                      document.getElementById("qs2opt1").innerHTML =   snapshot.val().q2opt1;
                      document.getElementById("qs2opt2").innerHTML =   snapshot.val().q2opt2;
                      document.getElementById("qs2opt3").innerHTML =   snapshot.val().q2opt3;
                      document.getElementById("qs2opt4").innerHTML =   snapshot.val().q2opt4;
                
                      document.getElementById("qs3").innerHTML      =   snapshot.val().qs3;
                      document.getElementById("qs3opt1").innerHTML =   snapshot.val().q3opt1;
                      document.getElementById("qs3opt2").innerHTML =   snapshot.val().q3opt2;
                      document.getElementById("qs3opt3").innerHTML =   snapshot.val().q3opt3;
                      document.getElementById("qs3opt4").innerHTML =   snapshot.val().q3opt4;
                
                      document.getElementById("qs4").innerHTML      =   snapshot.val().qs4;
                      document.getElementById("qs4opt1").innerHTML =   snapshot.val().q4opt1;
                      document.getElementById("qs4opt2").innerHTML =   snapshot.val().q4opt2;
                      document.getElementById("qs4opt3").innerHTML =   snapshot.val().q4opt3;
                      document.getElementById("qs4opt4").innerHTML =   snapshot.val().q4opt4;
                
                      document.getElementById("qs5").innerHTML      =   snapshot.val().qs5;
                      document.getElementById("qs5opt1").innerHTML =   snapshot.val().q5opt1;
                      document.getElementById("qs5opt2").innerHTML =   snapshot.val().q5opt2;
                      document.getElementById("qs5opt3").innerHTML =   snapshot.val().q5opt3;
                      document.getElementById("qs5opt4").innerHTML =   snapshot.val().q5opt4;
                
                
                    } else {
                        console.log("No data available");
                      }
                     
                   
                 
                
                });
                
                })
                
                document.getElementById("topic5").addEventListener("click",function(){
                
                  var topic=  document.getElementById("topic5").innerHTML;
                  console.log(topic);
                  document.getElementById("quiztopic").innerHTML=topic;
                get(child(dbRef, 'quizzes/' + topic )).then((snapshot) => {
                    if (snapshot.exists()) {
                
                      document.getElementById("qs1").innerHTML      =   snapshot.val().qs1;
                      document.getElementById("qs1opt1").innerHTML =   snapshot.val().q1opt1;
                      document.getElementById("qs1opt2").innerHTML =   snapshot.val().q1opt2;
                      document.getElementById("qs1opt3").innerHTML =   snapshot.val().q1opt3;
                      document.getElementById("qs1opt4").innerHTML =   snapshot.val().q1opt4;
                
                      document.getElementById("qs2").innerHTML      =   snapshot.val().qs2;
                      document.getElementById("qs2opt1").innerHTML =   snapshot.val().q2opt1;
                      document.getElementById("qs2opt2").innerHTML =   snapshot.val().q2opt2;
                      document.getElementById("qs2opt3").innerHTML =   snapshot.val().q2opt3;
                      document.getElementById("qs2opt4").innerHTML =   snapshot.val().q2opt4;
                
                      document.getElementById("qs3").innerHTML      =   snapshot.val().qs3;
                      document.getElementById("qs3opt1").innerHTML =   snapshot.val().q3opt1;
                      document.getElementById("qs3opt2").innerHTML =   snapshot.val().q3opt2;
                      document.getElementById("qs3opt3").innerHTML =   snapshot.val().q3opt3;
                      document.getElementById("qs3opt4").innerHTML =   snapshot.val().q3opt4;
                
                      document.getElementById("qs4").innerHTML      =   snapshot.val().qs4;
                      document.getElementById("qs4opt1").innerHTML =   snapshot.val().q4opt1;
                      document.getElementById("qs4opt2").innerHTML =   snapshot.val().q4opt2;
                      document.getElementById("qs4opt3").innerHTML =   snapshot.val().q4opt3;
                      document.getElementById("qs4opt4").innerHTML =   snapshot.val().q4opt4;
                
                      document.getElementById("qs5").innerHTML      =   snapshot.val().qs5;
                      document.getElementById("qs5opt1").innerHTML =   snapshot.val().q5opt1;
                      document.getElementById("qs5opt2").innerHTML =   snapshot.val().q5opt2;
                      document.getElementById("qs5opt3").innerHTML =   snapshot.val().q5opt3;
                      document.getElementById("qs5opt4").innerHTML =   snapshot.val().q5opt4;
                
                
                    } else {
                        console.log("No data available");
                      }
                     
                   
                 
                
                });
                
                })
                document.getElementById("topic6").addEventListener("click",function(){
                
                  var topic=  document.getElementById("topic6").innerHTML;
                  console.log(topic);
                  document.getElementById("quiztopic").innerHTML=topic;
                get(child(dbRef, 'quizzes/' + topic )).then((snapshot) => {
                    if (snapshot.exists()) {
                
                      document.getElementById("qs1").innerHTML      =   snapshot.val().qs1;
                      document.getElementById("qs1opt1").innerHTML =   snapshot.val().q1opt1;
                      document.getElementById("qs1opt2").innerHTML =   snapshot.val().q1opt2;
                      document.getElementById("qs1opt3").innerHTML =   snapshot.val().q1opt3;
                      document.getElementById("qs1opt4").innerHTML =   snapshot.val().q1opt4;
                
                      document.getElementById("qs2").innerHTML      =   snapshot.val().qs2;
                      document.getElementById("qs2opt1").innerHTML =   snapshot.val().q2opt1;
                      document.getElementById("qs2opt2").innerHTML =   snapshot.val().q2opt2;
                      document.getElementById("qs2opt3").innerHTML =   snapshot.val().q2opt3;
                      document.getElementById("qs2opt4").innerHTML =   snapshot.val().q2opt4;
                
                      document.getElementById("qs3").innerHTML      =   snapshot.val().qs3;
                      document.getElementById("qs3opt1").innerHTML =   snapshot.val().q3opt1;
                      document.getElementById("qs3opt2").innerHTML =   snapshot.val().q3opt2;
                      document.getElementById("qs3opt3").innerHTML =   snapshot.val().q3opt3;
                      document.getElementById("qs3opt4").innerHTML =   snapshot.val().q3opt4;
                
                      document.getElementById("qs4").innerHTML      =   snapshot.val().qs4;
                      document.getElementById("qs4opt1").innerHTML =   snapshot.val().q4opt1;
                      document.getElementById("qs4opt2").innerHTML =   snapshot.val().q4opt2;
                      document.getElementById("qs4opt3").innerHTML =   snapshot.val().q4opt3;
                      document.getElementById("qs4opt4").innerHTML =   snapshot.val().q4opt4;
                
                      document.getElementById("qs5").innerHTML      =   snapshot.val().qs5;
                      document.getElementById("qs5opt1").innerHTML =   snapshot.val().q5opt1;
                      document.getElementById("qs5opt2").innerHTML =   snapshot.val().q5opt2;
                      document.getElementById("qs5opt3").innerHTML =   snapshot.val().q5opt3;
                      document.getElementById("qs5opt4").innerHTML =   snapshot.val().q5opt4;
                
                
                    } else {
                        console.log("No data available");
                      }
                     
                   
                 
                
                });
                
                })
                document.getElementById("topic7").addEventListener("click",function(){
                
                  var topic=  document.getElementById("topic7").innerHTML;
                  console.log(topic);
                  document.getElementById("quiztopic").innerHTML=topic;
                get(child(dbRef, 'quizzes/' + topic )).then((snapshot) => {
                    if (snapshot.exists()) {
                
                      document.getElementById("qs1").innerHTML      =   snapshot.val().qs1;
                      document.getElementById("qs1opt1").innerHTML =   snapshot.val().q1opt1;
                      document.getElementById("qs1opt2").innerHTML =   snapshot.val().q1opt2;
                      document.getElementById("qs1opt3").innerHTML =   snapshot.val().q1opt3;
                      document.getElementById("qs1opt4").innerHTML =   snapshot.val().q1opt4;
                
                      document.getElementById("qs2").innerHTML      =   snapshot.val().qs2;
                      document.getElementById("qs2opt1").innerHTML =   snapshot.val().q2opt1;
                      document.getElementById("qs2opt2").innerHTML =   snapshot.val().q2opt2;
                      document.getElementById("qs2opt3").innerHTML =   snapshot.val().q2opt3;
                      document.getElementById("qs2opt4").innerHTML =   snapshot.val().q2opt4;
                
                      document.getElementById("qs3").innerHTML      =   snapshot.val().qs3;
                      document.getElementById("qs3opt1").innerHTML =   snapshot.val().q3opt1;
                      document.getElementById("qs3opt2").innerHTML =   snapshot.val().q3opt2;
                      document.getElementById("qs3opt3").innerHTML =   snapshot.val().q3opt3;
                      document.getElementById("qs3opt4").innerHTML =   snapshot.val().q3opt4;
                
                      document.getElementById("qs4").innerHTML      =   snapshot.val().qs4;
                      document.getElementById("qs4opt1").innerHTML =   snapshot.val().q4opt1;
                      document.getElementById("qs4opt2").innerHTML =   snapshot.val().q4opt2;
                      document.getElementById("qs4opt3").innerHTML =   snapshot.val().q4opt3;
                      document.getElementById("qs4opt4").innerHTML =   snapshot.val().q4opt4;
                
                      document.getElementById("qs5").innerHTML      =   snapshot.val().qs5;
                      document.getElementById("qs5opt1").innerHTML =   snapshot.val().q5opt1;
                      document.getElementById("qs5opt2").innerHTML =   snapshot.val().q5opt2;
                      document.getElementById("qs5opt3").innerHTML =   snapshot.val().q5opt3;
                      document.getElementById("qs5opt4").innerHTML =   snapshot.val().q5opt4;
                
                
                    } else {
                        console.log("No data available");
                      }
                     
                   
                 
                
                });
                
                })

               
            }).catch((error) => {
                console.error(error);
              });



  
        


    
          