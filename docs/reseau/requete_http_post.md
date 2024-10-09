---
hide:
  - toc
---

# Envoyer des données avec une requête HTTP POST
Permet d'envoyer des données avec une requête HTTP `POST` en tant que client et de récupérer la réponse du serveur.

# Branchement
![Carte Galaxia](../img/galaxia_board.svg){: style="height:380px;"}

## Exemple
Dans l'exemple ci-dessous, nous allons connecter le module ESP de la Galaxia à un réseau wifi grâce au module `network` (voir l'exemple [se connecter à un réseau wifi](./connecter_wifi_station.md)) puis nous enverrons une requête HTTP `POST` à l'adresse `http://emoncms.fr/input/post` grâce au module additionnel `requests`. Le contenu de cette requête sera un [dictionnaire](../dictionnaires/dictionnaires.md) contenant la luminosité ambiante perçue par la carte [Galaxia](../galaxia.md).

```py
# On importe les modules dont on a besoin
from thingz import *
from machine import *
from time import *
from network import *
from requests import *
from json import *

# On spécifie les informations du réseau wifi
# (remplacez "mon_reseau" et "mon_mot_de_passe" 
# par les informations de votre réseau)
ssid = "mon_reseau"
password = "mon_mot_de_passe"

# On spécifie la clé d'API Écriture de emoncms:
apikey = "votre_clé_d_api"

# On vient créer une instance de l'interface wifi en mode station
sta_if = WLAN(STA_IF)

# On active l'interface wifi
sta_if.active(True)

# Et on se connecte au réseau wifi
print(f"Connexion au réseau {ssid}...", end="")
if not sta_if.isconnected():
  sta_if.connect(ssid, password)
  while not sta_if.isconnected():
    print(".", end="")
    sleep(1)

# On affiche que la connexion a bien été établie
print(f"\nConnecté au réseau {ssid} !")

# URL du serveur où l'on va envoyer les données
url = "http://emoncms.fr/input/post"

# On vérifie que la connexion est toujours active
if sta_if.isconnected():
    # On lit la luminosité ambiante perçue par la Galaxia
    # et on la convertit en chaîne de caractères
    light_level = str(led.read_light_level())

    # On crée un dictionnaire contenant les données à envoyer
    data = {
      "node": "galaxia",
      "data": '{"light_level":' + light_level + '}',
      "apikey": apikey
    }
    
    # On envoie la requête HTTP POST au serveur emoncms.fr
    r = post(url, data)
    
    # Si la réponse du serveur est "ok", on allume la LED en vert
    if r.text == 'ok':
      led.set_colors(0, 255, 0)
    else:
      # Sinon, on allume la LED en rouge
      led.set_colors(255, 0, 0)
      # Et on affiche l'erreur renvoyée par le serveur
      print(r.text)
```

## Aller plus loin
Dans l'exemple ci-dessus, nous utilisons [les dictionnaires](../dictionnaires/dictionnaires.md) et la fonction [`#!python str()`](https://docs.python.org/fr/3/library/stdtypes.html#str), le module `#!python network` qui est décrit en anglais [ici](https://docs.micropython.org/en/v1.12/library/network.html#module-network) et le module additionnel `#!python requests` qui est décrit en anglais [là](https://docs.micropython.org/en/latest/esp8266/tutorial/requests.html).