---
hide:
  - toc
---

# Définir une fonction

Rendre une partie de programme accessible par son nom en lui passant tout ce qui lui est nécessaire pour fonctionner.

Les variables déclarées dans la fonction ne sont valable qu'en local dans la fonction (portée d'une variable). De plus, dans une fonction, les variables globales ne sont disponible qu'en lecture.

## Exemple

=== ":material-puzzle: Exemple avec des blocs"
    ![Blocs définir une fonction](fonction.png){: style="width:480px;"}



    !!! info

        Les blocs pour définir une fonction ![Bloc variable](bloc_fonction.png){: style="height:24px;"} peuvent être trouvé dans la catégorie de blocs [:material-function-variant: Fonctions](#){: style="color: rgb(255, 77, 106); font-weight: bold;"}. 

        on ajoute le nombre de variables nécessaires avec le :octicons-plus-circle-16:. et on créé les variables dans l'espace blanc sur le coté prévu à cet effet 

        Notez que dans cette catégorie il existe deux types de bloc.
        Des blocs pour les fonctions dont on récupère le résultat dans le format de son choix.
        d'autre sans sortie

=== ":material-code-array: Exemple avec du code"

    ```python
    from machine import *
    import time
    # LED Module on p26
    d2 = Pin(26, Pin.OUT)
    # on défini la fonction par un nom explicite,
    #  les variables déclarées dans la parenthèse pourront interagir avec le corps de la fonction
    def blink_par__seconde(x):
        d2.on()
        time.sleep(x)
        d2.off()
    # le corp de mon programme 
    while True:
    # Appel de la fonction avec 2 comme paramètre    
    blink_par__seconde(2)

    ```

## Aller plus loin

Dans l'exemple ci-dessus, nous utilisons la classe `#!python def` qui permet de définir une fonction. Pour en savoir plus sur cette classe, nous vous invitons à lire la [documentation MicroPython](https://www.micropython.fr/reference/#/02.mots_cles/def/).

Plus haut on fait référence à la portée d'une variable pour en savoir plus sur cette notion la [documentation Micropython](https://www.micropython.fr/reference/#/02.mots_cles/global/#portee-de-la-variable-definition)
