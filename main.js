

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
        renderMainPage(data);
    }
    else{
        console.log('renderProjectItem');
        let id = params.get('project');
        console.log(id);
        if(id==="nepal"){
          renderProjectPage(data.projects[0]);
        }
        else if(id==="radical"){
          renderProjectPage(data.projects[1]);
        }
        else {
          renderProjectPage(data.projects[2]);
        }
    }
});



function renderNavBar(projects=0){
  if(projects === 1){
    return `
    <nav>
        <ul>
            <li class="btn">
                <a href=".">Back</a>
            </li>
        </ul>

    </nav>
    `
}

  return `
    <section class="navbar flex-container">
        <a href="#section-id-About">About</a>
        <a href="#section-id-news">News</a>
        <a href="#section-id-projects">Projects</a>
    </section>
  `
}

function renderMainPage(data){
  document.querySelector('.container').innerHTML = `
        ${renderNavBar('main', Object.keys(data))}
        ${renderAbout(data.about)}
        ${renderNews(data.news)}
        ${renderProjects(data.projects)}
    `;
}

function renderAbout(about){
  return `
    <section id="section-id-About">
      <div class="flex-container">
        <div class="imground">
          <img src=${about.photo} alt="Image of Yakob Kebede">
        </div>
        <div class="intro">
          <h1>${about.name}</h1>
          <p>${about.title}<p>
          <p>${about.contact}</p>
          <ul class="btn">
            <a href=${about.resume}>Resume</a>
            <a target="_blank" href="https://www.linkedin.com/in/yakob-kebede-854b45178/">LinkedIn</a>
          </ul>
        </div>
      </div>
    </section>
  `
}

function renderNews(news){
  return `
    <section id="section-id-news">
        <h1>News</h1>
        <div class="flex-container">
          <div class="content">
            <p>
              ${news[0].title}<br>
              ${news[1].title}<br>
              ${news[2].title}<br>
              ${news[3].title}<br>
            </p>
          </div>
          <div class="date">
            <p>
            ${news[0].date}<br>
            ${news[1].date}<br>
            ${news[2].date}<br>
            ${news[3].date}<br>
            </p>
          </div>
        </div>
      </section>
    `
}

function renderProjects(projects){
  return `
  <section id="projects">
      <h1 class="title info">Projects</h1>
      <!-- we will add a filter interface here in the next lab -->
      <div class="project-list">
          ${renderProjectItems(projects)}
      </div>
  </section>`;
}
function renderProjectItems(projects){
  return projects.map(d=>`
    <div>
      <div>
        <div class="info">
          <a href="?project=${d.id}"><strong class="title">${d.title}</strong></a>
        </div>
        <div class=" subtitle">
          ${d.authors}<br>
        </div>
        
      <div class="imagestyle">
        <img src="${d.teaser}" width="100%">
      </div>
    </div>
  `).join('');
}


function renderProjectPage(projects){
    document.querySelector(".container").innerHTML = `
        ${renderNavBar(1)}
        ${renderSpecificProject(projects)}
    `
}
function renderSpecificProject(projects){
    return `
    <h1 class=""><strong>${projects.title}</strong></h1>
    <div>
      <div>
        <div class="subtitle">
          ${projects.description}<br> <br>
        </div>
        <div>
          ${projects.authors}
        </div>
        <div class="subtitle">
          <a href="${projects.materials[0].path}" target="_blank"><strong>${projects.materials[0].label}</strong></a>
        </div>
        <div class="subtitle">
          <a href="${projects.materials[1].path}" target="_blank"><strong>${projects.materials[1].label}</strong></a>
        </div>
        <div class="imagestyle">
          <img src=${projects.teaser} width="100%">
        </div>
      </div>
    </div>
    <footer class="small-text">Copyright Â© Yakob Kebede</footer>
    `
}

