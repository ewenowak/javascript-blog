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
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks(){

    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    function clearMessages(){
    titleList.innerHTML = '';
    }
    /* find all the articles and save them to variable: articles */
    let articles = document.querySelectorAll(optArticleSelector);
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
     html = html + tagHTML;
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
