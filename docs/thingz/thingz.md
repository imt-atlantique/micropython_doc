# Thingz

La Carte galaxia a été conçu par [Thingz](https://thingz.co/), une entreprise constituée de plein de gens sympathiques !

Pour réaliser cette carte, ils ont assemblé plusieurs composants électroniques qui permettent d'ajouter à la carte des capacités, comme capter la luminosité, le magnétisme, l'accélération, de jouer du son, etc.

Pour qu'on puisse utiliser ces fonctionnalités, il a fallu que Thingz créé un code qui traduit une utilisation simple en un code compréhensible par chacun des composants. Ils ont regroupé tout ce code dans une bibliothèque (également appelé librairie ou module) et l'ont appelé `#!python thingz` (pour qu'on se le rappelle).

Dès lors, si vous importez la bibliothèque `#!python thingz` au début de votre programme alors vous pourrez appeler une fonction simple d'un composant.


```python
# Ici, j'importe toute la bibliothèque.
import thingz
```

Ou

```python
# J'importe tous les modules depuis le module thingz
# * est un joker qui signifie "tout"
from thingz import *
```

On peut maintenant se demander quelles sont les fonctions simples issues de la librairie `#!python thingz` ? Si je demande à python de me dire ce à quoi j'ai accès dans cette bibliothèque

```python
dir()
```

Voici ce que je peux voir dans la console :
```
['SoftI2C', 'time_pulse_us', 'TIMER_WAKE', 'touch_e', 'ULP_WAKE', 'SoftSPI', 'DEEPSLEEP', 'PWRON_RESET', 'button_a', 'button_b', 'led', 'WDT_RESET', 'PIN_WAKE', 'UART', 'SPI', 'I2S', 'RTC', 'lightsleep', 'gc', 'ADCBlock', 'soft_reset', 'mem32', 'I2C', 'DAC', 'sound', 'radio', 'internal_temperature', 'DEEPSLEEP_RESET', 'Pin', 'SOFT_RESET', 'TOUCHPAD_WAKE', 'EXT0_WAKE', 'uos', 'disable_irq', 'HARD_RESET', 'mem16', 'unique_id', '__name__', 'freq', 'ADC', 'deepsleep', 'enable_irq', 'reset_cause', 'PWM', 'Signal', 'mem8', 'idle', 'utime', 'accelerometer', 'wake_reason', 'set_temperature_offset', 'touch_w', 'compass', 'touch_s', 'bdev', 'WDT', 'reset', 'SLEEP', 'bitstream', 'EXT1_WAKE', 'Timer', 'touch_n', 'sleep', 'screen']
```

Pour en savoir plus sur chacune les sous-modules de la bibliothèque `#!python thingz`, jetez donc un coup  œil ci-dessous :

* [thingz.accelerometer](thingz_accelerometer.md)
* [thingz.button](thingz_button.md)
* [thingz.compass](thingz_compass.md)
* [thingz.led](thingz_led.md)
* [thingz.radio](thingz_radio.md)
* [thingz.sound](thingz_sound.md)
* [thingz.temperature](thingz_temperature.md)