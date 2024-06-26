var tabLinks = document.querySelectorAll('.tabs h3 a');
var tabContents = document.querySelectorAll('div[id$="tab-content"]');

tabLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    tabLinks.forEach(function (tabLink) {
      tabLink.classList.remove('active');
    });
    this.classList.add('active');

    var tabContentId = this.getAttribute('href');
    tabContents.forEach(function (content) {
      content.classList.remove('active');
    });
    document.querySelector(tabContentId).classList.add('active');
  });
});
