/////////////////////////////////// Header /////////////////////////////////////
//-----------------------------------Menu-------------------------------------//

window.addEventListener('DOMContentLoaded', () => {
  var span = document.createElement('span');
  var div = document.createElement('div');
  var regionHeader = document.querySelector('.region-header');
  var body = document.querySelector('body');
  var socialMediaLinksBlock = document.querySelector('.block-social-media-links-block');

  span.classList.add('burger-menu');
  div.classList.add('popup');
  regionHeader.appendChild(span);
  regionHeader.appendChild(div);
  checkScreenWidth();

  var initialPosition = regionHeader.childNodes.length - 2;

  span.addEventListener('click', () => {
    span.classList.toggle('show');
    div.classList.toggle('see');
    body.classList.toggle('lock');

    if (span.classList.contains('show')) {
      if (!div.contains(span)) {
        div.appendChild(span);
      }
    } else {
      regionHeader.insertBefore(span, regionHeader.childNodes[initialPosition]);
    }
  });

  function checkScreenWidth() {
    var menuMain = document.querySelector('.menu--main');
    var screenWidth = window.innerWidth;

    if (screenWidth <= 1200) {
      div.appendChild(menuMain);
      menuMain.classList.add('replace');
    } else {
      regionHeader.appendChild(menuMain);
      menuMain.classList.remove('replace');
      regionHeader.appendChild(span);
      span.classList.remove('show');
      div.classList.remove('see');
    }

    if (screenWidth <= 720) {
      div.appendChild(socialMediaLinksBlock);
      socialMediaLinksBlock.classList.add('replace');
    } else {
      regionHeader.appendChild(socialMediaLinksBlock);
      socialMediaLinksBlock.classList.remove('replace');
    }
  }

  checkScreenWidth();
  window.addEventListener('resize', checkScreenWidth);
});

////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// Block News ///////////////////////////////////
//----------------------------- News data class ------------------------------//
function stylizeWords() {
  var fieldContents = document.querySelectorAll('.view-id-block_news .views-field-created .field-content');
  var blockNews = document.querySelectorAll('.views-element-container .view-id-page_news .views-field-created .field-content');
  var taxNews = document.querySelectorAll('.vocabulary-theme-post .view-id-theme_post .views-field-created .field-content');

  fieldContents.forEach(function(fieldContent) {
    stylize(fieldContent);
  });

  blockNews.forEach(function(blockNews) {
    stylize(blockNews);
  });

  taxNews.forEach(function(taxNews) {
    stylize(taxNews);
  });

  setTimeout(stylizeWords, 150);
}

function stylize(block) {
  var words = block.textContent.split(" ");

  if (words.length >= 1) {
    words[0] = "<span class='month'>" + words[0] + "</span>";
  }
  if (words.length >= 2) {
    words[1] = "<span class='date'>" + words[1] + "</span>";
  }
  if (words.length >= 3) {
    words[2] = "<span class='year'>" + words[2] + "</span>";
  }

  block.innerHTML = words.join(" ");
}

document.addEventListener('DOMContentLoaded', stylizeWords);
document.getElementById('edit-submit-block-news').addEventListener('click', stylizeWords);
