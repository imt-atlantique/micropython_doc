## thingz.compass


### get_x()

Renvoie un **float** Le champ magnétique sur l’axe x en uT

### get_y()

Renvoie un **float** Le champ magnétique sur l’axe y en uT


### get_z()

Renvoie un **float** Le champ magnétique sur l’axe z en uT


###  get_values()

Renvoie une **liste** pour les valeurs du champs magnétique sur les 3 axes
L’index 0 correspond à l’axe X,1 pour Y et 2 pour Z

### heading()

Renvoie un **float**  représentant le cap courant  de 0° a 360° 

``` python
from thingz import *

while True:
  print(str(compass.heading()));

```


### calibrate(_hard_time: [int](https://galaxia-circuitpy-doc.thingz.co/docs/library/builtins.html#int "int")_, _soft_time: [int](https://galaxia-circuitpy-doc.thingz.co/docs/library/builtins.html#int "int")_)

Calibrer le magnétomètre.

Pendant la calibration il est nécessaire de faire pivoter la carte dans toutes les directions.

La calibration peut durer plusieurs minutes
et ne communique pas

les paramètres:

-   **hard_time** ([_int_](https://galaxia-circuitpy-doc.thingz.co/docs/library/builtins.html#int "int")) – Temps à passer dans la première étape de calibration (en secondes). Valeur recommandée 5
    
-   **soft_time** ([_int_](https://galaxia-circuitpy-doc.thingz.co/docs/library/builtins.html#int "int")) – Temps à passer dans la deuxième étape de calibration (en secondes). Valeur recommandée 5