import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const mainDiv = document.createElement('div')
  mainDiv.classList.add('card')

  const headlineDiv = document.createElement('div')
  headlineDiv.classList.add('headline')
  headlineDiv.textContent = `${article.headline}`
  mainDiv.appendChild(headlineDiv)

  const authorDiv = document.createElement('div')
  authorDiv.classList.add('author')
  mainDiv.appendChild(authorDiv)

  const imgDiv = document.createElement('div')
  imgDiv.classList.add('img-container')
  authorDiv.appendChild(imgDiv)

  const mainImg = document.createElement('img')
  mainImg.src = `${article.authorPhoto}`
  imgDiv.appendChild(mainImg)

  const nameSpan = document.createElement('span')
  nameSpan.textContent = `By ${article.authorName}`
  authorDiv.appendChild(nameSpan)

  return mainDiv
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get(`https://lambda-times-api.herokuapp.com/articles`)
  .then((info) => {
    const javascript = info.data.articles.javascript
    const bootstrap = info.data.articles.bootstrap
    const jquery = info.data.articles.jquery
    const node = info.data.articles.node
    const technology = info.data.articles.technology
    const articleDiv = document.querySelector(selector)
    javascript.forEach(info => {
      const newArticle = Card(info)
      articleDiv.appendChild(newArticle)
    })
    bootstrap.forEach(info => {
      const newArticle = Card(info)
      articleDiv.appendChild(newArticle)
    })
    jquery.forEach(info => {
      const newArticle = Card(info)
      articleDiv.appendChild(newArticle)
    })
    node.forEach(info => {
      const newArticle = Card(info)
      articleDiv.appendChild(newArticle)
    })
    technology.forEach(info => {
      const newArticle = Card(info)
      articleDiv.appendChild(newArticle)
    })
  })
  .catch(err => {console.log(err)})
}

export { Card, cardAppender }
