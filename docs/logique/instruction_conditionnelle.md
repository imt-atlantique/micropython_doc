# Instruction conditionnelle

Comme son nom l'indique, c'est une partie du programme qui oriente le flux du programme selon si une condition est réalisée ou non

## Exemple : 

Si il pleut, je prend mon parapluie et je sors,  sinon je sors.

Souvent on a l'abitude de le représenter avec un organigramme de programmation 

![organigramme](assets\organigramme.excalidraw.png)

Si vous voulez en savoir plus sur les [organigrammes](https://fr.wikipedia.org/wiki/Organigramme_de_programmation) 


## En code 

Ça prend la forme suivante :

```python

if (il_pleut) :
	je_prend_un_parapluie()
je_sort()


```
Si la partie entre if et les ":"" ,  (il_pleut) est évalué comme vrai,
alors le block de code qui suit les ":"" et qui est indenté sera interprété.

Sinon ce bloc ne sera pas pris en compte,
et le programme continura  par le bloc de même indentation que l'instruction conditionnelle if


## En bloc

![bloc_decisionnelle](assets\bloc_decisionnelle.png)
Du menu logique il faut faire glisser le bloc décisionnel
ensuite 
![](chrome_Zy3NNYhDnc.gif)
Ensuite élaborer la proposition à évaluer

![](eval.png)

Vous devez 
- placer un élement à comparer  dans l'oblon 
- choisir le comparatif ( strictement plus petit ,strictement plus grand, plus petit ou égale , plus grand ou égale, égale, différent )
- Choisir la valeur avec laquelle on doit comparer

Il ne vous reste plus qu'a positionner dans le corps du bloc ce qui ce passera si la condition est réalisée.    	