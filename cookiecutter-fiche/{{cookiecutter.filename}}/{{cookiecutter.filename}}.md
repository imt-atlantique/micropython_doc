---
hide:
  - toc
---

# {{ cookiecutter.title }}
{{ cookiecutter.description }}

## Branchement
![{{ cookiecutter.title }}](galaxia_board_led.svg){: style="height:380px;"}

## Exemple
=== ":material-puzzle: Exemple avec des blocs"
    ![Blocs {{ cookiecutter.title|lower }}]({{ cookiecutter.filename}}.png){: style="width:480px;"}

=== ":material-code-array: Exemple avec du code"

    ```python
    {{ cookiecutter.code }}
    ```

## Aller plus loin
Dans l'exemple ci-dessus, nous utilisons la classe `#!python Pin` qui permet de manipuler les broches E/S (Entrée/Sortie) de la carte électronique. Pour en savoir plus sur cette classe, nous vous invitons à lire la [documentation MicroPython]({{ cookiecutter.micropython_doc_url }}).