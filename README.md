Chrome Extension for WoW Activity Feed website

Live on the Chrome store - https://chrome.google.com/webstore/detail/wow-activity-lookup/njapjedhnpfpbfdeaaigolgoeeichfaj



WoW Armory - (eg US) http://us.battle.net/wow/en/community/  , sample toon - http://us.battle.net/wow/en/character/turalyon/deatt/simple

WoW Activity Feed - http://wowactivity.kimptoc.net/

When on the Armory site,

such as this page:

http://us.battle.net/wow/en/character/kel'thuzad/banedtitan/simple

or this:

http://us.battle.net/wow/en/character/kelthuzad/Banedtitan/advanced


Gives you a way to easily get to this page:

http://wowactivity.kimptoc.net/view/member/us/kel'thuzad/banedtitan[/en_US]

or maybe this:

http://wowactivity.kimptoc.net/view/character/us/kel'thuzad/banedtitan[/en_US]


For Guilds, urls like this:

http://us.battle.net/wow/en/guild/kelthuzad/Skeleton_Crew/?character=banedtitan

become:

http://wowactivity.kimptoc.net/view/guild/us/kel'thuzad/Skeleton%20Crew/en_US


Chrome Store Dev Dashboard - https://chrome.google.com/webstore/developer/dashboard


TODO

* do we need to have popup.html - can it be done from the extension button alone
* how to get correct locale - is there a good default in WAF? Or leave it to user to switch?

DONE

* tweak button based on url
  * if not, hide/disable button
  * if it is enable button
* screenshots on chrome store
* its a page action - https://developer.chrome.com/extensions/pageAction
* when button clicked
  * open new tab showing corresponding WAF page
* how to debug - hopefully console.log works (it does). Also can right click on button to get inspect popup debug window
* check if url is an armory page
* extension can open a new tab :)
* how to publish extension
* handle guilds too
