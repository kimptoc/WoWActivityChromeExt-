document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');

  chrome.tabs.getSelected(null, function(tab) {

    // are we on a battle.net page?
    if (/\.battle\.net\/wow/.test(tab.url))
    {
      console.log("XX battle net char:"+tab.url);
      // TODO - setup button
    } else {
      console.log("XX NOT a battle net char:"+tab.url);
      // TODO - hide button
    }

    // d = document;
    //
    // var f = d.createElement('form');
    // f.action = 'http://gtmetrix.com/analyze.html?bm';
    // f.method = 'post';
    // var i = d.createElement('input');
    // i.type = 'hidden';
    // i.name = 'url';
    // i.value = tab.url;
    // f.appendChild(i);
    // d.body.appendChild(f);
    // f.submit();
  });



  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {

      // are we on a battle.net page?
      if (/\.battle\.net\/wow/.test(tab.url))
      {
        console.log("battle net char:"+tab.url);
        // TODO parse out name/realm/region etc to build WAF url
        chrome.tabs.create({'url':'http://wowactivity.kimptoc.net/','openerTabId':tab.id});

      } else {
        console.log("NOT a battle net char:"+tab.url);
      }

      // d = document;
      //
      // var f = d.createElement('form');
      // f.action = 'http://gtmetrix.com/analyze.html?bm';
      // f.method = 'post';
      // var i = d.createElement('input');
      // i.type = 'hidden';
      // i.name = 'url';
      // i.value = tab.url;
      // f.appendChild(i);
      // d.body.appendChild(f);
      // f.submit();
    });
  }, false);
}, false);
