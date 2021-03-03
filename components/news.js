
export default function renderNews(news){
    return `
    <section id="section-id-news" class="center-text">
        <div class="center-text search">
            <h1 class="headers">News <i class="fas fa-newspaper center-text"></i></h1>
            <input type="search" placeholder="Search for News... ">
        </div>
        <div class="news-list">
            ${renderNewsItems(news)}
        </div>
    </section>
    `
}
  
export function renderNewsItems(news){
    return news.map(d=>`
            <div>
                <div>
                    <div class="flex-container">
                        <div> 
                            ${d.title}
                        </div>   
                        <div>
                            ${d.date}
                        </div>                    
                    </div>
                </div>
            </div>
    `).join('');
}
  