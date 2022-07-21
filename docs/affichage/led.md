Permet de contrôler l'état de la LED connectée sur une broche de la carte électronique.

# Branchement
![Modes d'affichage](galaxia_board_led.svg){: style="height:380px;"}

# Bloc
![Modes d'affichage](affichage_led.png){: style="height:64px;"}

# Code

## Exemple : Allumage d'une LED

```python
# On importe les modules machine et utime
from machine import * 
import utime

# Déclaration d'une broche en sortie sur la broche 2
# à l'aide du constructeur Pin()
led = Pin(2, Pin.OUT)

# On allume la LED
led.on()

# On attend 1 seconde
utime.sleep(1)

# On éteint la LED
led.off()
```
## Documentation MicroPython
Dans l'exemple ci-dessus, nous utilisons la classe `Pin` qui permet de manipuler les broches E/S (Entrée/Sortie) de la carte électronique. Pour en savoir plus sur cette classe, nous vous invitons à lire la [documentation MicroPython](https://www.micropython.fr/reference/05.micropython/machine/classe_pin/).