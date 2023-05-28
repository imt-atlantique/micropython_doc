---
hide:
  - navigation
  - toc
---

# 

=== ":material-puzzle: Exemple avec des blocs"
    ![Exemple avec des blocs](quiz2_question4.png){: style="width:480px;"}

=== ":material-code-array: Exemple avec du code"

    ```python
    from machine import *
    from thingz import *
    import utime

    # Initialisation d'un servomoteur sur la broche P19
    p19 = PWM(Pin(13), freq=50, duty=205)

    def setServoAngle(pin, angle):
      if (angle >= 0 and angle <= 180):
        pin.duty(int(0.025*1023 + (angle*0.1*1023)/180))
      else:
        raise ValueError("Servomotor angle have to be set between 0 and 180")

    angle_servo = 0
    duree = 0

    while True:
      angle_servo = angle_servo + 1
      for i in range(181):
        setServoAngle(p19, i)
        utime.sleep_ms(10)
        duree = duree + 10
    utime.sleep_ms(10)

    ```