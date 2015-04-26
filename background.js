
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (/\.battle\.net\/wow/.test(tab.url))
  {
    // Show icon for page action in the current tab.
    var path_parts = tab.url.split(/\//);
    var character_or_guild = path_parts[5];
    if (character_or_guild === 'character' || character_or_guild === 'guild')
    {
      chrome.pageAction.show(tabId);      
    }
  }
});
