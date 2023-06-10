---
hide:
  - toc
---

# Capteur à ultrasons

Le capteur à ultrasons fonctionne comme son nom l'indique à l'aide d'ultrasons (des ondes sonores à haute fréquence).
Le capteur à ultrasons émet des ultrasons qui vont être réfléchis par les obstacles situés devant le capteur, les ondes réfléchies par ces obstacles vont revenir vers le capteur et la distance est ainsi calculer en fonction du temps de vol des ondes (le temps pour faire l'aller-retour entre le capteur et l'obstacle).


## Exemple

=== ":material-puzzle: Exemple avec des blocs"
    ![Blocs capteur](ultrason.png){: style="width:480px;"}

=== ":material-code-array: Exemple avec du code"

    ```python
    from machine import *
    from thingz import *
    import utime

    # On définit une fonction qui va calculer la distance mesurée par le 
    # capteur à ultrasons
    def grove_getUltrasonicData(pinNumber, data='distance', timeout_us=30000):
      trig = Pin(pinNumber, Pin.OUT)
      trig.off()
      utime.sleep_us(2)
      trig.on()
      utime.sleep_us(10)
      trig.off()
      echo = Pin(pinNumber, Pin.IN)
      duration = time_pulse_us(echo, 1, timeout_us)/1e6 # t_echo in seconds
      if duration > 0:
        if data == 'distance':
          #sound speed, round-trip/2, get in cm
          return 343 * duration/2 * 100
        elif data == 'duration':
          return duration
        else:
          raise ValueError("Data option '" + data + "' is not valid")
      else:
        return -1

    while True:
      # On affiche la distance calculée par le capteur branché sur la broche 7
      print(str(grove_getUltrasonicData(7, data='distance')))
    ```

    
## Aller plus loin

Dans l'exemple ci-dessus, nous utilisons la classe `#!python Pin` qui permet de manipuler les broches E/S (Entrée/Sortie) de la carte électronique. Pour en savoir plus sur cette classe, nous vous invitons à lire la [documentation MicroPython](https://www.micropython.fr/reference/#/05.micropython/machine/classe_pin). Vous pouvez trouver toute les spécificités du capteur du kit sur sa [fiche technique](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Grove-Ultrasonic_Ranger_WiKi.pdf). Nous utilisons aussi `#!python str()`, nous vous invitons à lire la [documentation Python](https://docs.python.org/fr/3/library/string.html).
