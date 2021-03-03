import News, {renderNewsItems} from './news.js'


export default function renderProjects(projects){
    return `
    
    <section id="projects">
      <h1 class="title info">Projects</h1>
      <div class="filter">
        <label>
          <input type="radio" name="filter" value="all" checked>
          All
        </label>
        <label>
          <input type="radio" name="filter" value="development">
          Development
        </label>
        <label>
          <input type="radio" name="filter" value="visualization">
          Visualization
        </label>
        <label>
          <input type="radio" name="filter" value="art">
          Art
        </label>
        <label>
          <input type="radio" name="filter" value="graphic design">
        Graphic Design
        </label>
      </div>      
      <div class="project-list">
        ${renderProjectItems(projects)}
      </div>
    </section>`;
}
  
export function renderProjectItems(projects){
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

export function handler(event, data){
    // console.log('I am in the handler funciton');
    let input = document.querySelector('input[type=search]');
    console.log(input);
    input.addEventListener('input',(event)=>{
        console.log(event.target.value);
        console.log('Above me is the target value')
        const filtered = data.news.filter(news=>news.title.toLowerCase().includes(event.target.value.toLowerCase()));
        document.querySelector('.news-list').innerHTML = renderNewsItems(filtered);
    });
    // console.log('I am at the end of the handler funciton')
  
  }
  
  
export function handlerCheckBox(event, data){
    console.log("I am insid the checkbox handler");
    let buttons = document.querySelectorAll('.filter input[name="filter"]');
    buttons.forEach(cond=>cond.addEventListener('change', function(event){
      let tag = event.target.value;
      if(tag === "all"){
        document.querySelector(".project-list").innerHTML = renderProjectItems(data.projects);
      }
      else {
        const filtered = data.projects.filter(project=>project.tags[0].toLowerCase()===(event.target.value.toLowerCase()) || project.tags[1].toLowerCase()===(event.target.value.toLowerCase()));
        document.querySelector('.project-list').innerHTML = renderProjectItems(filtered);
      }
    // const filtered2 = data.projects.filter(project=> console.log(project.tags[0].toLowerCase()));
    // const filtered4 = data.projects.filter(project=> console.log(project.tags[1].toLowerCase()));
    // const filtered3 = data.projects.filter(project=> console.log(event.target.value.toLowerCase()));
    }));
  }
  
  