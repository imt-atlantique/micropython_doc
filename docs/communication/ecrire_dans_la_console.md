# Écrire dans la console
Permet d'écrire des données dans le port série (appelé également _console_ ou encore _REPL_). Le port série permet d'échanger des données entre la carte Galaxia et l'ordinateur grâce à la liaison USB. Lorsque vous utilisez l'interface Vittascience, vous pouvez voir les données reçues de la carte (ou du simulateur) grâce au bouton _REPL_ situé en bas de l'interface .

## Exemple avec des blocs
![Bloc écrire dans la console](ecrire_dans_la_console.png){: style="width:480px;"}

## Exemple du code

```python
# print() fait partie du langage MicroPython
# pas besoin d'importer un module

# Affichage d'un message avec la fonction print()
print("Bonjour !")
```

## Aller plus loin
Dans l'exemple ci-dessus, nous utilisons la fonction `print()` qui fait partie du langage MicroPython (donc pas besoin d'importer un module pour l'utiliser). Cette fonction peut prendre un ou plusieurs paramètres détaillés dans la [documentation MicroPython](https://www.micropython.fr/reference/03.builtin/print/).

*[REPL]: Acronyme des mots anglais Read, Eval, Print et Loop. La console permet effectivement de Read : lit les commandes tapées par l'utilisateur puis Eval: interprète ces commandes puis Print : affiche le résultat des commandes et enfin Loop : on recommence à l'étape Read !