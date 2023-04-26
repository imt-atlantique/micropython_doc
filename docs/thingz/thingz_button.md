

# thingz.button
# thingz.ButtonTouch


## Contrôler les boutons physiques de la Galaxia

### les boutons A et B 

- Utilisent la class button
  
- Sont accessibles par leurs noms

    thingz.button_a
    
    thingz.button_b

### les boutons n, s, e, w 

- Utilisent la class buttonTouch

- Sont accessibles par leurs noms

    thingz.touch_n:ButtonTouch

    thingz.touch_s:ButtonTouch

    thingz.touch_e:ButtonTouch

    thingz.touch_w:ButtonTouch


Cependant les fonctions ont les mêmes noms


### is_pressed()

Renvoie un booléen **bool**
True si le bouton est pressé, sinon False

### was_pressed()

Renvoie un booléen **bool**
True si le bouton a été appuyé depuis le dernier appel à cette fonction, sinon False

### get_presses()

Renvoie un entier **int** représentant le nombre d’appuis depuis le dernier appel.


### on_pressed(_callback: Callable_)

Enregistre une fonction de callback associée à l’évenement appui
elle prend le nom de la La fonction à appeler lors de l’appui. 
Le bouton concerné est passé en paramètre de la fonction de callback