# thingz.accelerometer

### get_gestures() :

Cette fonction retourne une chaîne de caractères qui indique le type de geste ou de mouvement détecté


-   "tap" : Détection d'un tap ou d'un double tap sur la carte Galaxia.
-   "shake" : Détection d'un mouvement de secousse de la carte Galaxia.
-   "up" : Détection d'un mouvement ascendant de la carte Galaxia.
-   "down" : Détection d'un mouvement descendant de la carte Galaxia.
-   "left" : Détection d'un mouvement vers la gauche de la carte Galaxia.
-   "right" : Détection d'un mouvement vers la droite de la carte Galaxia.
-  "face up" : Détection si l'écran est vers le haut 
-  "face down" : Détection si l'écran est vers le bas 
- "free fall" : Détection d'un mouvement de chute libre
- "3g" 
- "6g"
- "8g"
- "none"


Exemple de code utilisant la fonction `get_gestures()` pour détecter les mouvements de secousse de la carte Galaxia :
```python
from machine import *
from thingz import *

while True:
    gesture = accelerometer.current_gesture()
    if gesture == "shake":
        print("shake!");
```

```python
## testing
from machine import *
from thingz import *


while True:
    gesture = accelerometer.current_gesture()
    if gesture == "shake":
        print("shake!");
    if gesture == "tap":
        print("tap détecté !");
    if gesture == "up":
        print("up !");
    if gesture == "down ! ":
        print("down !");
    if gesture == "6g":
        print("6g !");
    if gesture == "left":
        print("left !");
```

### get_x()

Renvoie un float représentant la valeur de l’accélération sur l’axe x en mG.

```python
from thingz import *

while True:
  print(str(accelerometer.get_x()));

```


### get_y()
Renvoie un réel **float** représentant la valeur de l’accélération sur l’axe y en mG

### get_z()

Renvoie un réel **float** représentant la valeur de l’accélération sur l’axe  z en mG

### get_values()

Renvoie une **list** pour les valeurs d’accélération sur les 3 axes
L’index 0 correspond à l’axe X,1 pour Y et 2 pour Z

### is_gesture(_gesture: str )

Cette fonction prend en parametre  Le geste à tester
et renvoie un booleen ( True si le geste courant est celui à tester )

### was_gesture(gesture: str )

Cette fonction prend en parametre  Le geste à tester
et renvoie un booleen (True si le geste a été actif depuis le dernier appel à cette fonction )

### get_gestures()

Renvoie un liste de l’historique des gestes. Le plus récent est à la fin de la liste