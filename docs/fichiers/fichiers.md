---
hide:
  - toc
---

# Les fichiers

Les fichiers permettent de stocker des données de manière persistante, que ce soit pour des relevés de capteurs, des journaux d’événements ou d’autres informations que votre programme MicroPython peut produire.

## Écrire dans un fichier

Dans les langages Python et MicroPython, les fichiers sont manipulés avec la fonction `open()`. Voici un exemple d'utilisation de cette fonction pour écrire du texte dans un fichier :

```python
# On stocke un nombre dans une variable
temp = 19.2

# On convertit cette variable en chaîne de caractères
temp = str(temp)

# Ouvrir un fichier en mode écriture
f = open('data.txt', 'w')  # Le 'w' signifie écrire (pour Write en anglais)
f.write(temp)  # Écrire le contenu de la variable dans le fichier
f.close()  # Fermer le fichier

# Notre fichier contient désormais le texte '19.2'
```

!!! info
    Veuillez noter que dans cet exemple :

    * Si le fichier `data.txt` n’existe pas, il sera créé.
    * Si le fichier existe déjà alors son contenu sera écrasé.
    * L'appel à la fonction `close()` est essentiel pour s'assurer que les données sont correctement écrites.

## Lire un fichier

Là encore, nous utiliserons la fonction `open()` avec en utilisant le mode `'r'` :

```python
# Lecture complète du fichier
f = open('data.txt', 'r')   # Ouvrir en mode lecture
last_temp = f.read()        # Lire tout le contenu
f.close()

print(f'Dernière température : {last_temp}°C')
```

!!! warning "Attention"
    Dans l'exemple ci-dessus, si le fichier `data.txt` n’existe pas, une erreur de type `'FileNotFoundError'` sera levée !


## Aller plus loin

Pour en savoir plus sur la manipulation de fichiers et les autres modes de la fonction `open()`, nous vous invitons à consulter la [documention officielle](https://docs.python.org/fr/3.13/library/functions.html#open) !