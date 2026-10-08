/* Highlights the nav link for whichever section is currently on screen.
   Purely decorative: the anchors work without this file. */
(function () {
  var links = Array.prototype.slice.call(
    document.querySelectorAll('.nav a[href^="#"]')
  );
  if (!links.length || !('IntersectionObserver' in window)) return;

  var byId = {};
  var targets = [];

  links.forEach(function (link) {
    var el = document.getElementById(link.hash.slice(1));
    if (!el) return;
    byId[el.id] = link;
    targets.push(el);
  });

  var visible = {};

  function paint() {
    // topmost visible section wins
    var current = targets.filter(function (el) { return visible[el.id]; })[0];
    links.forEach(function (link) {
      if (current && link === byId[current.id]) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      visible[entry.target.id] = entry.isIntersecting;
    });
    paint();
  }, {
    // a band across the upper middle of the viewport
    rootMargin: '-25% 0px -60% 0px'
  });

  targets.forEach(function (el) { observer.observe(el); });
})();
