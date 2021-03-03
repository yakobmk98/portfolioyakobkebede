import Projects, {handler, handlerCheckBox} from './projects.js'
import NavBar from './navbar.js'
import About from './about.js'
import News from './news.js'

export default function renderMainPage(data){
    document.querySelector('.container').innerHTML = `
          ${NavBar()}
          ${About(data.about)}
          ${News(data.news)}
          ${Projects(data.projects)}
      `;
      handler(event, data);
      handlerCheckBox(event, data);
}