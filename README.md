# Katas

Ce repository liste des katas en français. 

La source originelle du kata est indiquée, seul un effort de traduction en français a été fait!

❓ **C'est quoi un kata ?**
C'est un petit exercice de programmation qui est souvent donné en entretien. 

Il peut aussi être utilisé tout au long de sa carrière pour muscler ses compétences en algorithmie ou en programmation de manière plus large ! 


## ♣️ Majorité, pairs ou impair ?

[Source: Newsletter de Cassidoo 
](https://cassidoo.co/)

Donner l'élément qui apparaît le plus fréquemment dans un tableau d'entiers.

S'il n'y a pas d'élément qui apparaît plus qu'un autre, retourner une information indiquant si le tableau est composé en majorité de nombres pairs ou impairs. 

Si le tableau n'a pas de majorité et qu'il n'a pas plus d'éléments pairs qu'impairs, retourner 0

Exemple

```
> majority([3,1,4,1])
> "1"

> majority([33,44,55,66,77])
> "Majorité impairs"

> majority([1,2,3,4])
> "Pas de majorité"
```
 
## 🤹‍♀️ Palindrome

[Source: LeetCode](https://leetcode.com/problems/palindrome-number/) 

Faites une fonction qui prend en paramètre un entier x. La fonction doit retourner `true` si x est un palindrome, `false` sinon.  

_Exemple 1:_

- Paramètre d'entrée: x = 121
- Réponse: true
- Explication: 121 se lit 121 de droite à gauche et de gauche à droite !

_Exemple 2:_

- Paramètre d'entrée: x = -121
- Réponse: false
- Explication: De gauche à droite, on lit -121. De droite à gauche, ça devient 121-. Ce n'est donc pas un palindrome.

_Exemple 3:_

- Paramètre d'entrée: x = 10
- Réponse: false
- Explication: Se lit 01 de droite à gauche. Ce n'est donc pas un palindrome.

> Proposition de résolution [ici](https://github.com/leiluspocus/katas/blob/main/palindrome.js)https://github.com/leiluspocus/katas/blob/main/palindrome.js
