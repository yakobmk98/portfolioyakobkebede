import NavBar from './navbar.js'

export default function renderProjectPage(projects){
    document.querySelector(".container").innerHTML = `
        ${renderNavBar(1)}
        ${renderSpecificProject(projects)}
        <footer class="small-text">Copyright Â© Yakob Kebede</footer>
    `
}
function renderSpecificProject(projects){
    return `
    <h1 class=""><strong>${projects.title}</strong></h1>
    <div>
      <div>
        <div class="subtitle">
          ${projects.description}<br>
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
