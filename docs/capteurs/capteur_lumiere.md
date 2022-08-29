---
hide:
  - toc
---

# capteur de luminosité

le capteur de luminosité est intégré à la led rgb du galaxia. Il permet de transformer l'intensité lumineuse en une valeur numérique.

## Exemple
=== ":material-puzzle: Exemple avec des blocs"
    ![Blocs capteur](capteur_lumiere.png){: style="width:480px;"}

=== ":material-code-array: Exemple avec du code"

    ```python
    print(str(led.read()));
    ```

## Aller plus loin
Dans l'exemple ci-dessus, nous utilisons la classe `#!python Pin` qui permet de manipuler les broches E/S (Entrée/Sortie) de la carte électronique. Pour en savoir plus sur cette classe, nous vous invitons à lire la [documentation MicroPython](https://docs.micropython.org/en/latest/library/machine.Pin.html?highlight=analog#machine.Pin.ANALOG).

Nous utilisons aussi `#!python str()`, nous vous invitons à lire la [documentation MicroPython](https://www.micropython.fr/reference/03.builtin/str/).