tabletee = {
  init: function() {
    // quit if this function has already been called
    if (arguments.callee.done) return;
    // flag this function so we don't do the same thing twice
    arguments.callee.done = true;
    // kill the timer
    if (_timer) clearInterval(_timer);

    if (!document.createElement || !document.getElementsByTagName) return;

    forEach(document.getElementsByTagName('tr'), function(teename) {
      if (teename.className.search(/\btabletee\b/) != -1) {
        tabletee.makeTableTee(teename);
      }
    });

  },

  makeTableTee: function(teename) {
    skinname = teename.getAttribute("data-skin-name");
    teename.innerHTML = "<td>" + skinname + "</td><td><a href=\"https://ddnet.org/skins/skin/community/uhd/" + skinname + ".png\" alt=\"" + skinname + "\"><div class=\"tee\" data-skin=\"https://ddnet.org/skins/skin/community/uhd/" + skinname + ".png\"></div></a></td>";
  }

}

/* ******************************************************************
   Supporting functions: bundled here to avoid depending on a library
   ****************************************************************** */

// Dean Edwards/Matthias Miller/John Resig

/* for Mozilla/Opera9 */
if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", tabletee.init, false);
}

/* for Safari */
if (/WebKit/i.test(navigator.userAgent)) { // sniff
    var _timer = setInterval(function() {
        if (/loaded|complete/.test(document.readyState)) {
            tabletee.init(); // call the onload handler
        }
    }, 10);
}

/* for other browsers */
window.onload = tabletee.init;