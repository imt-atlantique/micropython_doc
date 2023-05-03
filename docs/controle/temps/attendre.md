---
hide:
  - toc
---

# Attendre
Effectue une pause dans l'exécution du code.

## Exemple
=== ":material-puzzle: Exemple avec des blocs"
    ![Bloc attendre](attendre.png){: style="width:480px;"}

=== ":material-code-array: Exemple avec du code"

    ```python
    # On importe le module utime
    import utime

    # Affichage d'un message avec la fonction print()
    print("Démarrage du programme")

    # On attend 1 seconde
    utime.sleep(1)

    print("1 seconde écoulée")
    ```

## Aller plus loin
Dans l'exemple ci-dessus, nous utilisons la fonction [`#!python print()`](../../communication/ecrire_dans_la_console.md) et le module `utime` qui permet de gérer les éléments de temps. Pour en savoir plus sur ce module, nous vous invitons à lire la [documentation MicroPython](https://www.micropython.fr/reference/04.standards/utime/00.module_time/).