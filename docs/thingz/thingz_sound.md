# thingz.Sound

Génerer des sons sur le connecteur jack de la Galaxia

### play(on: bool, freq: int)

Paramètres:
la valeur booléenne **bool** indiquera la génération ou l'arrét de la fréquence indiqué dans un entier **int** 

freq (int) – La fréquence à générer (en Hz)

### set_frequency(freq: int)

Régler la frequence (en Hz) du générateur, indiquée dans un entier **int* 

#### set_volume(volume: int)

Régler le volume du son indiqué dans un entier **int**  entre 0 et 100
S
### play_sample(filename: str)
Jouer un extrait sonore. L’extrait doit être au format wav

Paramètres:
filename (str) – Le chemin vers l’extrait. Il doit être sauvegardé dans le stockage usb de la Galaxia