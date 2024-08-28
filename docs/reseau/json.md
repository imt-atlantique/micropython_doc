---
hide:
  - toc
---

# Échanger des données avec JSON
JSON (pour _JavaScript Object Notation_) est un format d'échange de données léger, facile à lire et à écrire pour les humain·es, et simple à analyser et à générer pour les objets connectés et, de manière plus générale, les ordinateurs.

La structure du langage JSON est basée sur deux structures de données :

* **L'objet :** une collection non ordonnée de paires clé/valeur, où les clés sont des chaînes de caractères uniques et les valeurs peuvent être de différents types (texte, nombre, booléen, tableau ou null). Un exemple :
  ```json
  {
    "city": "Lyon",
    "country": "France",
    "weather": "Ciel dégagé",
    "temperature": 20,
    "wind_speed": 5,
    "humidity": 60
  }
  ```

* **Le tableau (ou liste) :** une liste ordonnée de valeurs, qui peuvent être de n'importe quel type JSON mentionné ci-dessus. Un exemple avec la valeur de l'objet appelé `arrivals` dans le JSON ci-dessous qui est une liste de 3 objets :
  ```json
  {
    "station_name": "Lyon Part-Dieu",
    "arrivals": [
      {
        "train_number": "TGV 5521",
        "destination": "Montpellier Saint-Roch",
        "arrival_time": "10:56",
        "platform": "H"
      },
      {
        "train_number": "TGV 5382",
        "destination": "Rennes",
        "arrival_time": "11:44",
        "platform": "C"
      },
      {
        "train_number": "TER 886760",
        "destination": "Saint-Étienne Châteaucreux",
        "arrival_time": "11:48",
        "platform": "J"
      }
    ]
  }
  ```
  
## Exemples

Dans les deux exemples ci-dessous, nous allons utiliser la méthode `#!python json.loads()` du module `#!python json` pour convertir le JSON (qui sera un texte déclaré au début du programme) en un [dictionnaire python](../dictionnaires/dictionnaires.md) afin d'extraire et d'afficher des informations qui nous intéressent :

### Extraire les conditions météorologiques à Lyon

```py
## On déclare le texte JSON, veuillez noter que le JSON est entouré de triples
# guillemets pour le définir comme une chaîne de caractères python sur plusieurs lignes
json_string = '''
{
  "city": "Lyon",
  "country": "France",
  "weather": "Ciel dégagé",
  "temperature": 20,
  "wind_speed": 5,
  "humidity": 60
}
'''

# On importe le module json
import json

# On utilise la fonction json.loads() pour convertir le texte en un dictionnaire python
weather_data = json.loads(json_string)

# On vient extraire la ville et on la stocke dans une variable
city = weather_data["city"]

# On vient mainteant extraire la température et on la stocke dans une variable
temperature = weather_data["temperature"]

# On affiche le résultat en utilisant des f-strings et les variables que nous avons créées
print(f"La température à {city} est de {temperature}°C.")
```

### Extraire les informations sur la prochaine arrivée à Lyon Part-Dieu

```py
json_string = '''
{
  "station_name": "Lyon Part-Dieu",
  "arrivals": [
    {
      "train_number": "TGV 5521",
      "destination": "Montpellier Saint-Roch",
      "arrival_time": "10:56",
      "platform": "H"
    },
    {
      "train_number": "TGV 5382",
      "destination": "Rennes",
      "arrival_time": "11:44",
      "platform": "C"
    },
    {
      "train_number": "TER 886760",
      "destination": "Saint-Étienne Châteaucreux",
      "arrival_time": "11:48",
      "platform": "J"
    }
  ]
}
'''

# On importe le module json
import json

# On utilise la fonction json.loads() pour convertir le texte en un dictionnaire python
train_data = json.loads(json_string)

# On vient extraire le nom, l'heure d'arrivée et le numéro de la voie du prochain train
# On notera que les données sont stockées dans une liste, on utilise donc l'index 0
# pour accéder au premier élément de la liste
next_train_number = train_data["arrivals"][0]["train_number"]
next_train_arrival_time = train_data["arrivals"][0]["arrival_time"]
next_train_platform = train_data["arrivals"][0]["platform"]

# On affiche le résultat en utilisant des f-strings et les variables que nous avons créées
print(f"Le prochain train est le {next_train_number} et il arrivera à {next_train_arrival_time}.")
```

### Générer un JSON à partir d'un dictionnaire python

Dans l'exemple ci-dessous, nous utiliserons utiliser la fonction `#!python json.dumps()` du module `#!python json` pour générer une chaîne de caractères JSON à partir d'un [dictionnaire python](../dictionnaires/dictionnaires.md) python :

```py
next_train_number = "TGV 5521",
next_train_destination = "Montpellier Saint-Roch",
next_train_arrival_time = "10:56",
next_train_platform = "H",
next_train_delay = 15

# On import le module json
import json

# On crée un dictionnaire avec les informations du train
train_info = {
    "train_number": "TGV 5521",
    "destination": "Montpellier Saint-Roch",
    "arrival_time": "10:56",
    "platform":  "H",
    "delay": 15
}

# On convertit le dictionnaire en chaîne de caractères JSON
train_info_json = json.dumps(train_info)

# On affiche la chaîne de caractères JSON
print(train_info_json)
```

## Aller plus loin
Dans l'exemple ci-dessus, nous utilisons le module `#!python json` qui est décrit en détails [ici](https://docs.python.org/fr/3/library/json.html).