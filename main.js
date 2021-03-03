import MainPage from './components/mainpage.js'
import ProjectPage from './components/projectpage.js'

fetch('assets/data.json')
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
    const params = new URLSearchParams(window.location.search);
    console.log(params);
    console.log('projects.param', params.get('project'));
    if (params.get('project')===null){
        MainPage(data);
    }
    else{
        console.log('renderProjectItem');
        let id = params.get('project');
        console.log(id);
        if(id==="nepal"){
          ProjectPage(data.projects[0]);
        }
        else if(id==="radical"){
          ProjectPage(data.projects[1]);
        }
        else {
          ProjectPage(data.projects[2]);
        }
    }
});

// function renderNavBar(projects=0){
//   if(projects === 1){
//     return `
//     <nav>
//         <ul>
//             <li class="btn">
//                 <a href=".">Back</a>
//             </li>
//         </ul>

//     </nav>
//     `
//   }

//   return `
//     <section class="navbar flex-container">
//         <a href="#section-id-About">About</a>
//         <a href="#section-id-news">News</a>
//         <a href="#section-id-projects">Projects</a>
//     </section>
//   `
// }

// function renderMainPage(data){
//   document.querySelector('.container').innerHTML = `
//         ${renderNavBar('main', Object.keys(data))}
//         ${renderAbout(data.about)}
//         ${renderNews(data.news)}
//         ${renderProjects(data.projects)}
//     `;
//     handler(event, data);
//     handlerCheckBox(event, data);

// }


// function handler(event, data){
//   // console.log('I am in the handler funciton');
//   let input = document.querySelector('input[type=search]');
//   console.log(input);
//   input.addEventListener('input',(event)=>{
//       console.log(event.target.value);
//       console.log('Above me is the target value')
//       const filtered = data.news.filter(news=>news.title.toLowerCase().includes(event.target.value.toLowerCase()));
//       document.querySelector('.news-list').innerHTML = renderNewsItems(filtered);
//   });
//   // console.log('I am at the end of the handler funciton')

// }


// function handlerCheckBox(event, data){
//   console.log("I am insid the checkbox handler");
//   let buttons = document.querySelectorAll('.filter input[name="filter"]');
//   buttons.forEach(cond=>cond.addEventListener('change', function(event){
//     let tag = event.target.value;
//     if(tag === "all"){
//       document.querySelector(".project-list").innerHTML = renderProjectItems(data.projects);
//     }
//     else {
//       const filtered = data.projects.filter(project=>project.tags[0].toLowerCase()===(event.target.value.toLowerCase()) || project.tags[1].toLowerCase()===(event.target.value.toLowerCase()));
//       document.querySelector('.project-list').innerHTML = renderProjectItems(filtered);
//     }
//   // const filtered2 = data.projects.filter(project=> console.log(project.tags[0].toLowerCase()));
//   // const filtered4 = data.projects.filter(project=> console.log(project.tags[1].toLowerCase()));
//   // const filtered3 = data.projects.filter(project=> console.log(event.target.value.toLowerCase()));
//   }));
// }



// function renderAbout(about){
//   return `
//     <section id="section-id-About">
//       <div class="flex-container">
//         <div class="imground">
//           <img src=${about.photo} alt="Image of Yakob Kebede">
//         </div>
//         <div class="intro">
//           <h1>${about.name}</h1>
//           <p>${about.title}<p>
//           <p>${about.contact}</p>
//           <ul class="btn">
//             <a href=${about.resume}>Resume</a>
//             <a target="_blank" href="https://www.linkedin.com/in/yakob-kebede-854b45178/">LinkedIn</a>
//           </ul>
//         </div>
//       </div>
//     </section>
//   `
// }



// function renderNews(news){
//   return `
//   <section id="section-id-news" class="center-text">
//       <div class="center-text search">
//           <h1 class="headers">News <i class="fas fa-newspaper center-text"></i></h1>
//           <input type="search" placeholder="Search for News... ">
//       </div>
//       <div class="news-list">
//           ${renderNewsItems(news)}
//       </div>
//   </section>
//   `
// }

// function renderNewsItems(news){
//   return news.map(d=>`
//           <div>
//               <div>
//                   <div class="flex-container">
//                       <div> 
//                           ${d.title}
//                       </div>   
//                       <div>
//                           ${d.date}
//                       </div>                    
//                   </div>
//               </div>
//           </div>
//   `).join('');
// }

// function renderProjects(projects){
//   return `
  
//   <section id="projects">
//     <h1 class="title info">Projects</h1>
//     <div class="filter">
//       <label>
//         <input type="radio" name="filter" value="all" checked>
//         All
//       </label>
//       <label>
//         <input type="radio" name="filter" value="development">
//         Development
//       </label>
//       <label>
//         <input type="radio" name="filter" value="visualization">
//         Visualization
//       </label>
//       <label>
//         <input type="radio" name="filter" value="art">
//         Art
//       </label>
//       <label>
//         <input type="radio" name="filter" value="graphic design">
//       Graphic Design
//       </label>
//     </div>      
//     <div class="project-list">
//       ${renderProjectItems(projects)}
//     </div>
//   </section>`;
// }
// function renderProjectItems(projects){
//   return projects.map(d=>`
//     <div>
//       <div>
//         <div class="info">
//           <a href="?project=${d.id}"><strong class="title">${d.title}</strong></a>
//         </div>
//         <div class=" subtitle">
//           ${d.authors}<br>
//         </div>
        
//       <div class="imagestyle">
//         <img src="${d.teaser}" width="100%">
//       </div>
//     </div>
//   `).join('');
// }


// function renderProjectPage(projects){
//     document.querySelector(".container").innerHTML = `
//         ${renderNavBar(1)}
//         ${renderSpecificProject(projects)}
//         <footer class="small-text">Copyright Â© Yakob Kebede</footer>
//     `
// }
// function renderSpecificProject(projects){
//     return `
//     <h1 class=""><strong>${projects.title}</strong></h1>
//     <div>
//       <div>
//         <div class="subtitle">
//           ${projects.description}<br>
//         </div>
//         <div>
//           ${projects.authors}
//         </div>
//         <div class="subtitle">
//           <a href="${projects.materials[0].path}" target="_blank"><strong>${projects.materials[0].label}</strong></a>
//         </div>
//         <div class="subtitle">
//           <a href="${projects.materials[1].path}" target="_blank"><strong>${projects.materials[1].label}</strong></a>
//         </div>
//         <div class="imagestyle">
//           <img src=${projects.teaser} width="100%">
//         </div>
//       </div>
//     </div>
//     <footer class="small-text">Copyright Â© Yakob Kebede</footer>
//     `
// }

