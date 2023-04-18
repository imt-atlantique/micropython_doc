# Thingz.radio

Envoyer et recevoir des données entre Galaxias

### send(data: str)
Envoie un message. Le message sera diffusé sur le canal actuellement paramétré. Toutes les Galaxias écoutant le même canal

Paramètres:
data (str) – données sous la forme d'une chaine de caractère **str**

### receive()
Attend de recevoir les données à recevoir

Renvoie une chaine de caractère **str**, La données reçue 

### set_chanel(channel: int)
Configurer le canal utilisé par la Galaxia

Paramètres:
channel (int) – Le canal un entier **int** entre 1 et 10

### get_channel()

Récupére le canal utilisé par la Galaxia

Renvoie dans un entier **int** le canal utilisé par la Galaxia
