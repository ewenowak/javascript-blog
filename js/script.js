{
  'use strict';

  const titleClickHandler = function(event){
    console.log('Link was clicked!');
    console.log(event);
    event.preventDefault();
  
    /* [DONE] remove class 'active' from all article links  */
    
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }
  
    /* [DONE] add class 'active' to the clicked link */
    const clickedElement = this;
    console.log('clickedElement:', clickedElement);
    clickedElement.classList.add('active');
    /* [DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.posts .active');

    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }
  
    /* [DONE] get 'href' attribute from the clicked link */
     
    const articleSelector = clickedElement.getAttribute('href');
    console.log(articleSelector);
    
    /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    
    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);
  
    /* [DONE] add class 'active' to the correct article */
    
    targetArticle.classList.add('active');
  }
  
  
  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list';

  
  function generateTitleLinks(customSelector = ''){

    /* remove contents of titleList */
    
    const titleList = document.querySelector(optTitleListSelector);
    function clearMessages(){
      titleList.innerHTML = '';
    }  
    clearMessages();

    /* find all the articles and save them to variable: articles */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    console.log('Znalazłem wszystkie artykuły');
    console.log('customSelector:', customSelector);

    let html = '';
    
    /* for each article */
    
    for(let article of articles){
    
      /* get the article id */
      
      const articleId = article.getAttribute('id');
      console.log(articleId);
      
      /* find the title element */
      
      const targetTitle = document.querySelector(optTitleSelector);
      console.log(targetTitle);
      
      /* get the title from the title element */
      
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      console.log(articleTitle);
      
      /* create HTML of the link */
      
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log(linkHTML);
      
      /* insert link into titleList */
      html = html + linkHTML;
    }
     
    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');
    console.log(links);
    
    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }
    
  };
  generateTitleLinks();

  function generateTags(){
    
    /* find all articles */
    
    const articles = document.querySelectorAll(optArticleSelector);
    console.log(articles);
    
    /* START LOOP: for every article: */
    
    for(let article of articles){
      
      /* find tags wrapper */
      
      const tagWrapper = article.querySelector(optArticleTagsSelector);
      console.log(tagWrapper);
      
      /* make html variable with empty string */
      
      let html = '';
      
      /* get tags from data-tags attribute */
      
      const articleTags = article.getAttribute('data-tags');
      console.log(articleTags);
      
      /* split tags into array */
      
      const articleTagsArray = articleTags.split(' ');
      console.log (articleTagsArray);
      
      /* START LOOP: for each tag */
      
      for(let tag of articleTagsArray){
        
        /* generate HTML of the link */
        
        const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
        console.log(linkHTML);
        
        /* add generated code to html variable */
        
        html = html + ' ' + linkHTML;

      /* END LOOP: for each tag */
      }
      
      /* insert HTML of all the links into the tags wrapper */
      
      tagWrapper.innerHTML = html;
      console.log(tagWrapper.innerHTML);
    /* END LOOP: for every article: */
    }
  }
  
  generateTags();

  function tagClickHandler(event){
    /* prevent default action for this event */
    event.preventDefault();
  
  
    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    console.log('clickedElement:', clickedElement);
    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    console.log('href:', href);
    
    /* make a new constant "tag" and extract tag from the "href" constant */
    
    const tag = href.replace('#tag-', '');
    console.log('tag:', tag);
    
    /* find all tag links with class active */
    const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
    console.log('activeTagLinks:', activeTagLinks);
    /* START LOOP: for each active tag link */
    for(let activeTagLink of activeTagLinks){
      activeTagLink.classList.remove('active');
    }
    /* find all tag links with "href" attribute equal to the "href" constant */
      const tagLinks = document.querySelectorAll('a[href="' + href + '"]' == href);
      console.log('tagLinks:', tagLinks);
    /* START LOOP: for each found tag link */
      for(let tagLink of tagLinks){
      /* add class active */
        tagLink.classList.add('active');
    /* END LOOP: for each found tag link */
      }
  
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
    console.log('Wywołałem funkcje');
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
  

}