---
hide:
  - toc
---

# Envoyer une requête HTTP GET
Permet d'envoyer une requête HTTP `GET` en tant que client et de récupérer la réponse du serveur.

# Branchement
![Carte Galaxia](../../img/galaxia_board.svg){: style="height:380px;"}

## Exemple
Dans l'exemple ci-dessous, nous allons connecter le module ESP de la Galaxia à un réseau wifi grâce au module `network` (voir l'exemple [se connecter à un réseau wifi](./connecter_wifi_station.md)). Nous enverrons ensuite une requête HTTP `GET` à l'adresse `http://worldtimeapi.org/api/timezone/Europe/Paris` pour récupérer l'heure actuelle en France, le tout grâce au module additionnel `requests`.

```python
# On commence par importer les modules network et time
import network
import time

# On importe le module additionnel requests
import requests

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

# On affiche que la connexion a bien été établie
print(f"\nConnecté au réseau {ssid} !")

# On peut maintenant envoyer une requête HTTP GET pour obtenir l'heure actuelle en France
r = requests.get("https://worldtimeapi.org/api/timezone/Europe/Paris")

# On affiche la réponse du serveur si le code HTTP est 200 (OK)
if r.status_code == 200:
  # On affiche la réponse du serveur au format JSON
  print(f"Réponse du serveur : {r.json()}")

  # On peut aussi extraire des informations spécifiques de la réponse
  # Par exemple, l'heure actuelle en France (la valeur de l'élément 'datetime')
  print(f"Il est actuellement {r.json()['datetime']} en France.")
```

## Aller plus loin
Dans l'exemple ci-dessus, nous utilisons le module `#!python network` qui est décrit en détails [ici](https://docs.micropython.org/en/v1.12/library/network.html#module-network).