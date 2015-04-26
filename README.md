
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



TODO

* when button clicked
  * open new tab showing corresponding WAF page
* how to get correct locale - is there a good default in WAF? Or leave it to user to switch?
* tweak button based on url
  * if not, hide/disable button
  * if it is enable button
* do we need to have popup.html - can it be done from the extension button alone
  * looks like it should be a page action - https://developer.chrome.com/extensions/pageAction

DONE

* how to debug - hopefully console.log works (it does). Also can right click on button to get inspect popup debug window
* check if url is an armory page
* extension can open a new tab :)
