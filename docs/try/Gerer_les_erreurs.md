---
hide:
  - toc
---

# Gérer les erreurs 

Si vous regarder le code créé par les blocs, vous remarquerez des bloc de code commençant par `#!python try :` , `#!python except :` etc..

Ces outils nous permettent de gérer les erreurs.
Effectivement si quelque chose se passe mal dans notre programme celui-ci va s'arreter.
Pour qu'il puisse continuer on offre une autre alternative



Le bloc `#!python try :`   permet de tester un bloc de code pour voir s'il contient des erreurs.

Le bloc `#!python except :`  permet de gérer l'erreur, en proposant une alternative à l'arret du programme.

Le bloc `#!python else :`  permet d'exécuter du code lorsqu'il n'y a pas d'erreur.

Le bloc `#!python finally :` vous permet d'exécuter du code, quel que soit le résultat des blocs try- et except


## Exemple


```python
    try:
        print(x)
    except NameError:
        print("la variable n'est pas définie")
    except:
        print("quelque chose s'est mal passée")
    finally:
        print(" 'try except' traversé")
```

## Aller plus loin
Ces fonctionnalitées nous viennent directement du language python. Vous pouvez facilement trouver de la documentation par exemple [ici](https://zestedesavoir.com/tutoriels/2514/un-zeste-de-python/6-entrees-sorties/6-exceptions/)).