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

['SoftI2C', 'time_pulse_us', 'TIMER_WAKE', 'touch_e', 'ULP_WAKE', 'SoftSPI', 'DEEPSLEEP', 'PWRON_RESET', 'button_a', 'button_b', 'led', 'WDT_RESET', 'PIN_WAKE', 'UART', 'SPI', 'I2S', 'RTC', 'lightsleep', 'gc', 'ADCBlock', 'soft_reset', 'mem32', 'I2C', 'DAC', 'sound', 'radio', 'internal_temperature', 'DEEPSLEEP_RESET', 'Pin', 'SOFT_RESET', 'TOUCHPAD_WAKE', 'EXT0_WAKE', 'uos', 'disable_irq', 'HARD_RESET', 'mem16', 'unique_id', '__name__', 'freq', 'ADC', 'deepsleep', 'enable_irq', 'reset_cause', 'PWM', 'Signal', 'mem8', 'idle', 'utime', 'accelerometer', 'wake_reason', 'set_temperature_offset', 'touch_w', 'compass', 'touch_s', 'bdev', 'WDT', 'reset', 'SLEEP', 'bitstream', 'EXT1_WAKE', 'Timer', 'touch_n', 'sleep', 'screen']

[thingz.accelerometer](thingz_accelerometer.md)

[thingz.button](thingz_button.md)

[thingz.compass](thingz_compass.md)

[thingz.led](thingz_led.md)

[thingz.radio](thingz_radio.md)

[thingz.sound](thingz_sound.md)

[thingz.temperature](thingz_temperature.md)


