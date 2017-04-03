vdm
=========

Ce plugin est un add-on pour le framework [Avatar](https://github.com/Spikharpax/Avatar-Serveur)

Raconte une Vie de merde


## Installation

- Dézippez le fichier `Avatar-Plugin-vdm-Master.zip` dans un répertoire temporaire
- Copiez le répertoire `vdm` dans le répertoire `Avatar-Serveur/plugins`
- Copiez le fichier `intents/intent.vdm.js`dans le répertoire `Avatar-Serveur/ia/intents/`
- Copiez le fichier `actions/action.viedemerde` dans le répertoire `Avatar-Serveur/ia/actions/`
- Editez le fichier `Avatar-Serveur/ia/actions/index.js`, allez à la fin du fichier et juste avant `function _interopRequireDefault(obj)` ajoutez les lignes suivantes:

```javascript
var _actionVdm = require('./action.viedemerde');

Object.defineProperty(exports, 'viedemerde', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_actionVdm).default;
  }
});

// Fin du fichier...
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
```

- Editez le fichier `Avatar-Serveur/ia/intents/index.js`, allez à la fin du fichier et juste avant `function _interopRequireDefault(obj)` ajoutez les lignes suivantes:

```javascript

var _intentVdm = require('./intent.vdm');

Object.defineProperty(exports, 'vdm', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_intentVdm).default;
  }
});

// Fin du fichier...
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
```

- Editez le fichier `Avatar-Serveur/ia/index.js`
	- Ajoutez dans l'import des intents, l'intention `vdm`
	- Ajoutez dans l'import des actions, l'action `viedemerde`
	- Ajoutez dans la fonction export.intent(), l'association de l'intention-action

```javascript
import { vdm, tvChannels, tvActions, music, weather, hour,  blague, manageAvatar, shoppingList, translate, lastAction, intentEnd} from './intents';
import { viedemerde, freeTV, freeRules, Sonos, forecastMsn, forecastYahoo, worldHour, jokeOfDay, avatarRules, shopping, translator, backupAction, actionEnd} from './actions';


exports.intent = function () {

	// Configure the intents
	ava
	 .intent(translate, translator)
	 // Déclaration vdm CI-DESSOUS !
	 .intent(vdm, viedemerde)
	 .intent(hour, worldHour)
	 .intent(weather, [forecastYahoo, forecastMsn])
	 .intent(music, Sonos)
	 .intent(blague, jokeOfDay)
	 .intent(manageAvatar, avatarRules)
	 .intent(shoppingList, shopping)
	 .intent(lastAction, backupAction)
	 .intent(intentEnd, actionEnd)  // Toujours à la fin, controle si une règle est passée
}
```


## Configuration
La configuration du plugin se fait dans le fichier `Avatar-Serveur/plugins/vdm/vdm.prop`

## Les commandes
Toutes les syntaxes de phrases qui comprennent ces mots peuvent être utilisées. Ce ne sont pas des règles fixes.

Les règles sont définies dans le tableau de syntaxes `vdm`

Une seule syntaxe est définie. La règles doit inclure le mot **merde** 

Quelques exemples possibles:
- Raconte une vie de merde
- Lis moi une vie de merde
- Une vie de merde s'il te plait
...
   
## Versions
Version 1.0 
- Version Released
