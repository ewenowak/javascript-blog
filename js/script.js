'use strict';
/* document.getElementById('test-button').addEventListener('click', function(){
  const links = document.querySelectorAll('.titles a');
  console.log('links:', links);
}); */


  const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active, .post.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */

  console.log('clickedElement:', clickedElement);
  clickedElement.classList.add('active');
  console.log('')
  /* [DONE] remove class 'active' from all articles */

  /* get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    console.log('articleSelector', articleSelector)
  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector)
  console.log('targetArticle', targetArticle)
  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
  }

  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author';

function generateTitleLinks(customSelector = ''){

    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    function clearMessages(){
    titleList.innerHTML = '';
    }
    /* find all the articles and save them to variable: articles */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    console.log('articles', articles);

    let html = '';

    for(let article of articles){
      /* get the article id */
      const articleID = article.getAttribute('id');
      console.log('articleID', articleID);

      /* find the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      console.log('articleTitle', articleTitle);

      /* get the title from the title element */

      /* create HTML of the link */
      const linkHTML = '<li><a href="#' + articleID + '"><span>' + articleTitle + '</span></a></li>';
      console.log('linkHTML', linkHTML);

      /* insert link into html variable */
      html = html + linkHTML;
    }
    titleList.innerHTML = html;
    const links = document.querySelectorAll('.titles a');
    console.log('links', links);

    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }
  }
generateTitleLinks();

function generateTags(){
    /* find all articles */
    let articles = document.querySelectorAll(optArticleSelector);
    console.log('articles', articles);

  /* START LOOP: for every article: */
  for(let article of articles){

    /* find tags wrapper */
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    console.log('tagsWrapper', tagsWrapper);

    /* make html variable with empty string */
    let html = '';

    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log('articleTags', articleTags);

    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log('articleTagsArray', articleTagsArray);

    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){
      console.log('tag', tag);
      /* generate HTML of the link */
      const tagHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
      console.log('tagHTML', tagHTML);
      /* add generated code to html variable */
     html = html + ' ' + tagHTML;
     console.log('html', html);
    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    tagsWrapper.innerHTML = html;
    console.log('tagsWrapper.innerHTML', tagsWrapper.innerHTML);
  /* END LOOP: for every article: */
  }
}
generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  console.log('Tag was clicked!');
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log('href from Clicked element', href);
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  console.log('tag', tag);
  /* find all tag links with class active */
  const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
  console.log('activeTags', activeTags);
  /* START LOOP: for each active tag link */
  for(let activeTag of activeTags){
    /* remove class active */
    activeTag.classList.remove('active');
  /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const tagLinks = document.querySelectorAll('a[href="' + href + '"]' == href);
  console.log('tagLinks', tagLinks);
 /* START LOOP: for each found tag link */
    for(let tagLink of tagLinks){
    /* add class active */
    tagLink.classList.add('active');
  /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}
function addClickListenersToTags(){
  /* find all links to tags */
  const tagsLinks = document.querySelectorAll('a[href^="#tag-"]');
  console.log('tagsLinks', tagsLinks);
  /* START LOOP: for each link */
    for(let tagsLink of tagsLinks){
    /* add tagClickHandler as event listener for that link */
    tagsLink.addEventListener('click', tagClickHandler);
    console.log('Link was clicked');
  /* END LOOP: for each link */
  }
}

addClickListenersToTags();

function generateAuthors(){
  /* find all articles */
  let articles = document.querySelectorAll(optArticleSelector);
  console.log('articles', articles);

  /* START LOOP: for every article: */
    for(let article of articles){

    /* find author wrapper */
    const authorWrapper = article.querySelector(optArticleAuthorSelector);
    console.log('authorWrapper', authorWrapper);

   /* make html variable with empty string */
   let html = '';

   /* get author from data-author */
   const articleAuthor = article.getAttribute('data-author');
   console.log('articleAuthor', articleAuthor);

   /* generate html of the link */
   const authorHTML = '<a href="#author-' + articleAuthor + '">' + articleAuthor + '</a>';
   console.log('authorHTML', authorHTML);

   /* add generated code to html variable */
   html = html + authorHTML;
   console.log('html', html);

  /* insert HTML of all the links into the authorWrapper wrapper */
  authorWrapper.innerHTML = html;
  console.log('authorWrapper', authorWrapper);
  }
}
generateAuthors();


function authorClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  console.log('Tag was clicked!');
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log('href from Clicked element', href);
  /* make a new constant "tag" and extract tag from the "href" constant */
  const author = href.replace('#author-', '');
  console.log('author', author);
  /* find all tag links with class active */
  const activeAuthors = document.querySelectorAll('a.active[href^="#author-"]');
  console.log('activeAuthors', activeAuthors);
  /* START LOOP: for each active tag link */
  for(let activeAuthor of activeAuthors){
    /* remove class active */
    activeAuthor.classList.remove('active');
  /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const authorLinks = document.querySelectorAll('a[href="' + href + '"]' == href);
  console.log('authorLinks', authorLinks);
 /* START LOOP: for each found tag link */
    for(let authorLink of authorLinks){
    /* add class active */
    authorLink.classList.add('active');
  /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-author="' + author + '"]');
}
function addClickListenersToAuthors(){
  /* find all links to authors */
  const authorsLinks = document.querySelectorAll('a[href^="#author-"]');
  console.log('authorsLinks', authorsLinks);
  /* START LOOP: for each link */
    for(let authorLink of authorsLinks){
    /* add tagClickHandler as event listener for that link */
    authorLink.addEventListener('click', authorClickHandler);
    console.log('Link was clicked');
  /* END LOOP: for each link */
  }
}
addClickListenersToAuthors();
