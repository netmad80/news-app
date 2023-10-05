const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=659be38c916b41f19ba800b8a1383c05`
async function fetchNews() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
  
      // Step 5: Connect the Functions
      displayNews(data.articles);
    } catch (error) {
      console.error('There was an error!', error);
    }
  }
  
  // Step 4: Create the DOM Containers to Display the News
  function displayNews(articles) {
    const newsDiv = document.querySelector('#news');
    for (const article of articles) {
      const articleDiv = document.createElement('div');
  
      // Create and append a headline to the articleDiv
      const title = document.createElement('h4');
      title.textContent = article.title;
      articleDiv.appendChild(title);
  
      // Create and append a description to the articleDiv
      const description = document.createElement('p');
      description.textContent = article.description;
      articleDiv.appendChild(description);
  
      // Create and append an image to the articleDiv
      if (article.urlToImage) {
        const image = document.createElement('img');
        image.src = article.urlToImage;
        image.alt = article.title;
        articleDiv.appendChild(image);
      }
  
      // Create and append a link to the full article
      const readMore = document.createElement('a');
      readMore.textContent = 'Read More';
      readMore.href = article.url;
      readMore.target = '_blank';
      articleDiv.appendChild(readMore);
  
      // Append the articleDiv to the newsDiv
      newsDiv.appendChild(articleDiv);
    }
  }
  
  // Call the fetchNews function
  fetchNews();