export default function renderNavBar(projects=0){
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