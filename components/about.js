export default function renderAbout(about){
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
  