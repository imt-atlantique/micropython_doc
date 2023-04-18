# Thingz

La Carte galaxia a été concu par Thingz, une entreprise constitué de plein de gens sympatiques

Pour réaliser cette carte Ils ont assemblé plusieurs composants éléctroniques qui permettent d'ajouter à la carte des capacités, comme capter la luminosité, le magnétisme, l'acceleration, de jouer du son....etc.

Pour qu'on puisse utiliser ces fonctionnalités, il a fallut que thingz créer un code qui traduit une utilisation simple en un code compréhensible pour le composant,et ce pour tous les composants.

ils ont regroupé tout ce code dans une bibliothèque et l'on appelé Thingz (pour qu'on s'en rappelle).

Maintenant en python  si la bibliothèque thingz est bien appelée au début du programme, on peut appeler une fonction simple d'un composant.

```

import thingz.*

```

l'information nous arrivera facilement sans ouvrir la documentation technique de tel ou tel composant.

Mais qu'elles sont ces fonctions simple auquelles on a accès ?

Si je demande à python de me dire ce à quoi j'ai accès dans cette bibliothèque

```
dir()

```

['__class__', '__name__', 'accelerometer', 'button_a', 'button_b', 'compass', 'internal_temperature', 'led', 'radio', 'screen', 'set_temperature_offset', 'sound', 'touch_e', 'touch_n', 'touch_s', 'touch_w']

[thingz.accelerometer](thingz/thingz_accelerometer.md)