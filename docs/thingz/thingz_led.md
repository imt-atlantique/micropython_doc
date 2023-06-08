# Thingz.Led

Contrôler la LED RGB de la Galaxia

### set_colors(red: int, green: int, blue: int)
Régler l'intensité lumineuse du rouge, du vert et du bleu de la LED

Paramètres:
red (int) – La valeur rouge, comprise entre 0 et 255

green (int) – La valeur verte, comprise entre 0 et 255

blue (int) – La valeur bleue, comprise entre 0 et 255


``` python
from thingz import *

while True:
  led.set_colors(100, 100, 0)

```


### set_red(red: int)

Régle l'intensité de la couleur rouge,

prend comme paramètres un entier **int** compris entre 0 et 255

### set_green(green: int)

Régle l'intensité de la couleur verte,

prend comme paramètres un entier **int** compris entre 0 et 255

### set_blue(blue: int)

Régle l'intensité de la couleur bleue,

prend comme paramètres un entier **int** compris entre 0 et 255


### get_red()→ int

Renvoie un entier **int** La valeur de l'intensité du bleue courante, comprise entre 0 et 255


### get_green()→ int

Renvoie un entier **int** La valeur de l'intensité du verte courante, comprise entre 0 et 255

### get_blue()→ int

Renvoie un entier **int** La valeur de l'intensité du bleue courante, comprise entre 0 et 255


### read_light_level()
Renvoie un entier **int** entre 0 (nuit) et 255 (lumière vive) qui représente la luminosité ambiante courante
