# Les dictionnaires

Les dictionnaires sont utilisés pour stocker des informations sous forme de clé-valeur ». Ils sont souvent comparés à un carnet d'adresses où chaque nom (clé) est associé à une adresse (valeur). Une information est rapidement retrouvée grâce à sa clé.

## Définir un dictionnaire

Un dictionnaire est défini à l’aide des accolades `{}`. Chaque élément d’un dictionnaire est constitué d'une paire `clé: valeur`.

```python
user_dict = {
    "nom": "Baptiste",
    "age": 38,
    "ville": "Rennes"
}
```

Dans l'exemple ci-dessus, le dictionnaire `user_dict` contient trois paires clé-valeur (on parlera également de trois **éléments**):

* _"nom"_, _"age"_ et _"ville"_ sont les clés.
* _"Baptiste"_, _38_ et _"Rennes"_ sont les valeurs.

## Accéder aux valeurs

Les valeurs d’un dictionnaire sont obtenues en utilisant les clés correspondantes :

```python
# On affiche ici la valeur de l'élément identifiée par la clé "nom"
print(user_dict["nom"])  # Affiche: Baptiste
print(user_dict["age"])  # Affiche: 38
```

## Ajout ou modification d’éléments

De nouvelles paires clé-valeur peuvent être ajoutées ou des valeurs existantes peuvent être modifiées :

```py
# On définit le dictionnaire
user_dict = {
    "nom": "Baptiste",
    "age": 38,
    "ville": "Rennes"
}

# Une nouvelle clé-valeur est ajoutée
user_dict["profession"] = "Ingénieur"

# Une valeur existante est modifiée
user_dict["ville"] = "Brest"

# On affiche le résultat
print(user_dict)
```

## Supprimer des éléments

Les éléments d’un dictionnaire peuvent être supprimés à l’aide de `del` ou de la méthode `#!python pop()`.

```py
# On définit le dictionnaire
user_dict = {
    "nom": "Baptiste",
    "age": 38,
    "ville": "Brest"
}

# La clé "age" est supprimée
del user_dict["age"]

# La clé "ville" est retirée à l'aide de pop, et sa valeur est stockée dans la variable ville
ville = user_dict.pop("ville")

print(user_dict)  # Ne contient plus "age" ni "ville"
print(ville)  # Affiche: Brest
```

## Exemple

Des informations sur plusieurs étudiants peuvent être stockées dans un dictionnaire, où chaque étudiant est identifié par son numéro d'étudiant.

```py
students = {
    123: {"nom": "Alice", "age": 25, "classe": "Informatique"},
    456: {"nom": "Bob", "age": 22, "classe": "Réseau"},
    789: {"nom": "Charlie", "age": 24, "classe": "Physique"}
}

# Les informations d'Baptiste sont accédées
print(students[123]["nom"])  # Affiche: Alice

# Un nouvel étudiant est ajouté
students[1011] = {"nom": "David", "age": 23, "classe": "Chimie"}

print(students)
```

## Aller plus loin

Les dictionnaires disposent de nombreux avantages pour stocker des données :

* **Accès rapide :** Une recherche de valeur est effectuée efficacement à l'aide des clés, contrairement aux [listes](../listes/liste.md) où chaque élément doit être parcouru pour trouver l’information.
* **Structure flexible :** Différents types de données peuvent être stockés, comme des chaînes de caractères, des nombres, ou même d'autres dictionnaires ou listes.
* **Représentation claire :** Les objets complexes, comme des étudiants ou des plats d'un menu des attributs variés, sont facilement représentés.
* **Complémentarité avec JSON :** Les dictionnaires peuvent être convertis en [JSON](../reseau/json.md), ce qui permet de les stocker dans des fichiers ou de les transmettre sur le réseau.

Dans les exemples ci-dessus, nous utilisons des fonctions natives du langage python décrites en détails [ici](https://docs.python.org/fr/3.10/tutorial/datastructures.html#dictionaries).