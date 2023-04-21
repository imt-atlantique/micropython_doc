# Thingz

La Carte galaxia a été conçu par Thingz, une entreprise constituée de plein de gens sympathiques

Pour réaliser cette carte, Ils ont assemblé plusieurs composants électroniques qui permettent d'ajouter à la carte des capacités, comme capter la luminosité, le magnétisme, l'accélération, de jouer du son., etc.

Pour qu'on puisse utiliser ces fonctionnalités, il a fallu que thingz créer un code qui traduit une utilisation simple en un code compréhensible pour le composant, et ce, pour tous les composants.

Ils ont regroupé tout ce code dans une bibliothèque et l'ont appelé Thingz (pour qu'on se le rappelle).

Maintenant en python,  si la bibliothèque thingz est bien appelée au début du programme, on peut appeler une fonction simple d'un composant.

```

import thingz

```
Ici, j'importe toute la bibliothèque.

Où 

```

from thingz import *

```
là, de la bibliothèque, j'importe seulement les modules.....tous (* est un joker qui remplace tout ce qu'on aurait pu écrire)



l'information nous arrivera facilement sans ouvrir la documentation technique de tel ou tel composant.

Mais qu'elles sont ces fonctions simples auxquelles on a accès ?

Si je demande à python de me dire ce à quoi j'ai accès dans cette bibliothèque

```
dir()

```

['__class__', '__name__', 'accelerometer', 'button_a', 'button_b', 'compass', 'internal_temperature', 'led', 'radio', 'screen', 'set_temperature_offset', 'sound', 'touch_e', 'touch_n', 'touch_s', 'touch_w']

[thingz.accelerometer](/thingz_accelerometer.md)