# Katas

Ce repository liste des katas en français. 

La source originelle du kata est indiquée, seul un effort de traduction en français a été fait!

❓ **C'est quoi un kata ?**
C'est un petit exercice de programmation qui est souvent donné en entretien. Il peut aussi être utilisé tout au long de sa carrière pour muscler ses compétences en algorithmie ou en programmation de manière plus large ! 

**Liste des katas** 
- [♣️ Majorité, pairs ou impair ?](#majorite-pairs-impairs)
- [🤹‍♀️ Palindrome](#palindrome)
- [🔂 Inverser](#inverser)
- [🧮 Tri dans un tableau](#tri)
- [🖨️ L'imprimante folle](#imprimanteFolle)
- [🔢 Somme impaire](#sommeImpaire)
- [🔂 Répétitions](#repetitions)

<a id="majorite-pairs-impairs"></a>
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
 
> Proposition de résolution [ici](https://github.com/leiluspocus/katas/blob/main/resolutions/majority.js)


<a id="palindrome"></a>
## 🤹‍♀️ Palindrome

[Source: LeetCode](https://leetcode.com/problems/palindrome-number/) 

Faites une fonction qui prend en paramètre un entier nombre. La fonction doit retourner `true` si x est un palindrome, `false` sinon. 

Langage : libre

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

Si vous choisissez Node.js, à l'exécution, ça devrait donner ceci 👇

```shell 
> node palindrome(121)
> true 

> node palindrome(-121)
> false

> node palindrome(10)
> false
```


> Proposition de résolution [ici](https://github.com/leiluspocus/katas/blob/main/resolutions/palindrome.js)


<a id="inverser"></a>
## 🔂 Inverser

[Source: Newsletter de Cassidoo du 15/01](https://buttondown.email/cassidoo/archive/try-and-fail-but-dont-fail-to-try-john-quincy/)

A partir d'un tableau à deux dimensions,  écrire une fonction qui l'inverse horizontalement ou verticalement.

_Exemple_

Pour ce tableau: 

```js
let array = [
[1,2,3],
[4,5,6],
[7,8,9]
]
```

En mode "horizontal", on obtient 
```js
> flip(array, 'horizontal')
> [[3,2,1],[6,5,4],[9,8,7]]
```

Tandis qu'en mode "vertical", on obtient
```js
> flip(array, 'vertical')
> [[7,8,9],[4,5,6],[1,2,3]]
```

<a id="tri"></a>
## 🧮 Tri dans un tableau 
[Source: Newsletter de Cassidoo du 3/06](https://buttondown.email/cassidoo/archive/the-cure-to-boredom-is-curiosity-there-is-no-cure/)

Ecris une fonction qui prend en paramètre un tableau d'entiers. 
Elle doit retourner un nouveau tableau contenant seulement les entiers pairs _(du tableau donné en paramètre)_ et triés par ordre croissant. 

_Exemple_
```shell
> onlyEvens([1, 2, 3, 4, 5, 2])
> [2, 2, 4]

> onlyEvens([7, 8, 1, 0, 2, 5])
> [0, 2, 8]

> onlyEvens([11, 13, 15])
> []
```


<a id="imprimanteFolle"></a>
## 🖨️ L'imprimante folle
[Source: Newsletter de Cassidoo du 2/12/2024](https://buttondown.com/cassidoo/archive/how-beautiful-it-is-to-get-up-and-go-do-something/)

Le Père Noël fait l'appel quotidien de ses rennes, mais l'imprimante a imprimé tous leurs noms à l'envers par erreur 😱

Pour prendre les présences correctement, il a besoin d'urgence d'un outil permettant d'inverser les noms des rennes et de les classer par ordre alphabétique ! Peux-tu aider le Père Noël ?


```shell
rollCall(["yzneT","ydissaC","enimA"])
> ["Amine","Cassidy","Tenzy"]

rollCall(["rennuD","nexiV","recnarP","temoC","neztilB","recnaD","diduC","rehsaD","hploduR"])
> ["Blitzen","Comet","Cupid","Dancer","Dasher","Donner","Prancer","Rudolph","Vixen"]

rollCall(["A","B","C"])
> ["A","B","C"]
```

<a id="sommeImpaire"></a>
## 🔢 Somme impaire
[Source: Newsletter de Cassidoo du 26/05/2025](https://buttondown.com/cassidoo/archive/false-expectations-take-away-joy-sandra-bullock/)

Faire une fonction `oddSum` qui prend deux tableaux en paramètre, un tableau 1 et un tableau 2.

Elle doit retourner toutes les paires qui retournent une somme impaire. Les cas d'erreur doivent également être gérés.

Voici quelques exemples d'utilisation et ce que doit retourner la fonction.

```shell
# Cas d'erreurs à gérer

oddSum([], [2, 3])
> "Error: First array is empty!"

oddSum([2, 3], [])
> "Error: Second array is empty!"

oddSum([], [])
> "Error: You should pass two arrays of numbers"

# Cas 1: Petits tableaux de même taille

oddSum([1, 2], [3, 5]) 
> [2, 3], [2, 5]

# Cas 2: Tableaux de taille différente

oddSum([9, 14, 6, 2, 11], [8, 4, 7, 20]) 
> [9, 20], [14, 7], [11,8]

oddSum([2, 4, 6, 8], [10, 12, 14])
> "Aucune paire trouvée : toutes les paires d'éléments possibles retournent une somme paire"
```

<a id="repetitions"></a>
## 🔂 Répétitions
[Source: Newsletter de Cassidoo du 29/12](https://buttondown.com/cassidoo/archive/the-beginning-is-the-word-and-the-end-is-silence/)


Tu reçois une chaîne de caractères en entrées qui contient des chiffres allant de 0 à 9. Fais une fonction qui prend en paramètre cette chaîne de caractères et un nombre (entre 0 et 9) dont il faudra repérer les enchaînements dans la chaîne de caractères et remplacer par le nombre d'occurences de ce nombre.  

Des exemples valent mille mots. 

```shell
> replaceRepeats('1234500362000440', 0)
> 1234523623441

> replaceRepeats('000000000000', 0)
> 12

> replaceRepeats('123456789', 1)
> 123456789
`````
