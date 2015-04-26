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
        // toons
        // example battle net url http://us.battle.net/wow/en/character/kel'thuzad/banedtitan/simple
        // target url http://wowactivity.kimptoc.net/view/member/us/kel'thuzad/banedtitan
        // guilds
        // - http://us.battle.net/wow/en/guild/kelthuzad/Skeleton_Crew/
        // - http://wowactivity.kimptoc.net/view/guild/us/kel'thuzad/Skeleton%20Crew/
        var region = tab.url.substr(7,2);
        var path_parts = tab.url.split(/\//);
        var character_or_guild = path_parts[5];
        var realm = path_parts[6];
        var name = path_parts[7];
        name = name.replace('_',' ');
        var waf_url = 'http://wowactivity.kimptoc.net/view/'+character_or_guild+'/'+region+'/'+realm+'/'+name
        chrome.tabs.create({'url':waf_url,'openerTabId':tab.id});

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
