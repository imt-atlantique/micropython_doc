# Instruction conditionnelle

Éxécute une ou plusieurs intructions si une condition est vraie ou non.

## Exemples

=== "Exemple avec des blocs"
    ![Bloc Si/Sinon](decisionelle.png){: style="width:380px;"}

	!!! info
    	Le bloc `#!python if` ![Bloc if](assets/if.png){: style="height:24px;"} peut être trouvé dans la catégorie de blocs [:fontawesome-solid-gear: Logique](#){: style="color: rgb(252,116,23); font-weight: bold;"}. Notez qu'une condition doit être fournie pour que ce bloc soit fonctionnel.


=== "Exemple avec du code"

	```python
	# On boucle indéfiniment
	while True:
		# Si le niveau de luminosité relevé par le capteur est supérieur à 125
		if led.read_light_level() > 125:
			# Alors on allume la LED RVB en rouge
			led.set_colors(255, 0, 0)
		else:
			# Sinon on allume la LED RVB en vert
			led.set_colors(0, 255, 0)
	```

	Si la partie entre `#!python if` et les `#!python :` est évaluée comme vrai alors les instructions indentées qui suivent les `#!python :` seront exécutées.	Sinon ce sont les instructions situées après le `#!python else:` qui le seront.

## Aller plus loin

On a souvent l'habitude de représenter le cours du programme avec un organigramme de programmation :
``` mermaid
graph TD
    A[Je mets mes chaussures]-->C{Est-ce qu'il pleut ?}
    C -->|non| D[Je sors]
    C -->|oui| E[Je prends un parapluie]
    E --> D
```

Si vous voulez en savoir plus sur les organigrammes, voici une chouette page [Wikipédia](https://fr.wikipedia.org/wiki/Organigramme_de_programmation).
Dans l'exemple ci-dessus, nous utilisons les fonctions du langage MicroPython `#!python if` et `#!python else`. Pour en savoir plus, nous vous invitons à lire la [documentation MicroPython](https://www.micropython.fr/reference/02.mots_cles/if_elif_else/).