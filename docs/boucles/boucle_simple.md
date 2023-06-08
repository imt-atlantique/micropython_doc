---
hide:
  - toc
---

# Boucle simple
Éxécuter des instructions plusieurs fois.

## Exemple
=== ":material-puzzle: Exemple avec des blocs"
  ![Blocs boucle simple](boucle_simple.png){: style="width:380px;"}


=== ":material-code-array: Exemple avec du code"
  ```python
  # On utilise une boucle For pour exécuter
  # 3 fois la fonction print()
  for count in range(3):
    print('toc !');
  ```


!!! info
La boucle for permet de réperter un bloc de code, on dit "itérer".
On peut changer le mode d'itération en complétant for en faisant prendre différentes valeur à une variable.
Pour itérer le bloc suivant n fois, il suffit de lui donner le nombre d'élements que la variable peut prendre.
Ici in range(n) défini un interval de 0 à n(exclu) et donc n valeurs (0,1,2,...,n-1) et donc la boucle for sera itéré n fois.
On se rappelle que le bloc itéré est indenté par rapport au mot clé for.


## Aller plus loin
Dans l'exemple ci-dessus, nous utilisons les fonctions du langage MicroPython [`#!python for..in..`](https://www.micropython.fr/reference/#/02.mots_cles/for_in/), [`#!python print()`](../communication/ecrire_dans_la_console.md)) et `#!python range()`. Pour en savoir plus sur la fonction `#!python range()`, nous vous invitons à lire la [documentation MicroPython](https://www.micropython.fr/reference/#/03.builtin/range?id=range).