---
hide:
  - toc
---

# Scanner les réseaux wifi
Permet de scanner les réseaux wifi disponibles.

# Branchement
![Carte Galaxia](../../img/galaxia_board.svg){: style="height:380px;"}

## Exemple
Dans l'exemple ci-dessous, nous allons scanner les réseaux wifi à portée et afficher leurs informations dans la console :

```python
# On commence par importer le module network
import network

# On crée une instance de l'interface wifi en mode station
sta_if = network.WLAN(network.STA_IF)

# On active l'interface
sta_if.active(True)

# On scanne les réseaux wifi à portée
sta_if.scan()
```

## Aller plus loin
Dans l'exemple ci-dessus, nous utilisons le module `#!python network` qui est décrit en anglais [ici](https://docs.micropython.org/en/v1.12/library/network.html#module-network).