---
hide:
  - toc
---

# Se connecter à un réseau wifi
Permet de connecter la carte Galaxia à un réseau wifi en mode _station_ (cela signifie que la Galaxia se connecte à un point d'accès wifi existant).

# Branchement
![Carte Galaxia](../img/galaxia_board.svg){: style="height:380px;"}

## Exemple
Dans l'exemple ci-dessous, nous allons connecter la carte à un réseau wifi portant le nom `"mon_reseau"` et dont le mot de passe est `"mon_mot_de_passe"` :

```py
# On commence par importer les modules network et time
import network
import time

# On spécifie les informations du réseau wifi
# (remplacez "mon_reseau" et "mon_mot_de_passe" 
# par les informations de votre réseau)
ssid = "mon_reseau"
password = "mon_mot_de_passe"

# On vient créer une instance de l'interface wifi en mode station
sta_if = network.WLAN(network.STA_IF)

# On active l'interface wifi
sta_if.active(True)

# Et on se connecte au réseau wifi
print(f"Connexion au réseau {ssid}...", end="")
if not sta_if.isconnected():
  sta_if.connect(ssid, password)
  while not sta_if.isconnected():
    print(".", end="")
    time.sleep(1)

# Et enfin, on affiche la configuration réseau
print(f"\nConnecté au réseau {ssid} !")
print('Configuration IP:', sta_if.ifconfig())
```

## Aller plus loin
Dans l'exemple ci-dessus, nous utilisons des chaines de caractères formatées (aussi appelées _f-strings_) qui sont décrites en détails [ici](https://docs.python.org/fr/3/tutorial/inputoutput.html#formatted-string-literals). Nous utilisons également le module `#!python network` dont la documentation anglaise se trouve [là](https://docs.micropython.org/en/v1.12/library/network.html#module-network).