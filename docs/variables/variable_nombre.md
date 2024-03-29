---
hide:
  - toc
---

# Utiliser une variable pour y stocker des nombres
Une variable est un espace mémoire dans lequel il est possible de mettre une valeur. Par exemple, pour stocker un nombre dans une variable et modifier sa valeur, je peux utiliser les instructions suivantes :


## Exemple

=== ":material-puzzle: Exemple avec des blocs"
     ![Blocs variable texte](variable_nombre.png){: style="width:640px;"}

    !!! info
        Le bloc ![Bloc créer le texte](../texte/creer_le_texte.png){: style="height:24px;"} permet d'agréger (on dit aussi concaténer) des éléments (variables, chaînes de caractères...) pour former un nouveau texte. Ce bloc peut être trouvé dans la catégorie de blocs [:fontawesome-solid-font: Texte](#){: style="color: rgb(26, 109, 168); font-weight: bold;"}. Les blocs permettant de manipuler les nombre être trouvés dans la catégorie de blocs [:fontawesome-solid-font: Opérateurs](#){: style="color: rgb(89, 192, 89); font-weight: bold;"}


=== ":material-code-array: Exemple avec du code"
    ```python
    # On affecte un nombre a une variable de la façon suivante :
    personnes_presentes = 1
    
    # On affiche la valeur de la variable précédé par du texte 
    print("Nombre de personnes présentes : " +  personnes_presentes)
    print('Une personne entre !')
    
    # On incrémente la variable de 1
    personnes_presentes = personnes_presentes + 1
    
    print("Nombre de personnes présentes : " +  personnes_presentes)
    print('Trois personnes entrent !');
    
    # on incrémente la variable de 3
    personnes_presentes = personnes_presentes + 3
    
    print("Nombre de personnes présentes : " +  personnes_presentes)
    print('Une personne sort !')
    
    personnes_presentes = personnes_presentes - 1
    print("Nombre de personnes présentes : " +  personnes_presentes)
    ```

## Aller plus loin
Dans l'exemple ci-dessus, nous utilisons la fonction `#!python print()` qui fait partie du langage MicroPython (donc pas besoin d'importer un module pour l'utiliser). Cette fonction peut prendre un ou plusieurs paramètres détaillés dans la [documentation MicroPython](https://www.micropython.fr/reference/#/03.builtin/print).