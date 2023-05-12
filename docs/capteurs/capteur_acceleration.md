---
hide:
  - toc
---
# Accélérometre

Un accélérometre est intégré à la  galaxia. Il permet de capter l'accélération de la carte suivant les différents axes ou l'accélération globla

## Exemple

=== ":material-puzzle: Exemple avec des blocs"
    ![Blocs capteur](accelerometer.png){: style="width:480px;"}
    [ouvrir dans vittascience](https://fr.vittascience.com/galaxia/?link=645e2e1ac5860&toolbox=scratch&mode=blocks&embed=1)

=== ":material-code-array: Exemple avec du code"

``` python
from machine import *
from thingz import *

while True:
  print(str(accelerometer.get_x()));

```

    
## Aller plus loin

Dans l'exemple ci-dessus, nous utilisons la classe `#!python Pin` qui permet de manipuler les broches E/S (Entrée/Sortie) de la carte électronique. Pour en savoir plus sur cette classe, nous vous invitons à lire la [documentation MicroPython](https://docs.micropython.org/en/latest/library/machine.Pin.html?highlight=analog#machine.Pin.ANALOG).

Nous utilisons aussi `#!python str()`, nous vous invitons à lire la [documentation MicroPython](https://www.micropython.fr/reference/03.builtin/str/).

et enfin la librairie thingz avec [sa bibliothèque adaptée à l'accéléromètre](../thingz/thingz_accelerometer.md)

