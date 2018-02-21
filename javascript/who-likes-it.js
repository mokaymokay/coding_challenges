/*
You probably know the "like" system from Facebook and other pages. People can
"like" blog posts, pictures or other items. We want to create the text that
should be displayed next to such an item.

Implement a function likes([String]) --> String, which must take in input array,
containing the names of people who like an item. It must return the display text
as shown in the examples:

likes([]) --> "no one likes this"
likes(["Peter"]) --> "Peter likes this"
likes(["Jacob", "Alex"]) --> "Jacob and Alex like this"
likes(["Max", "John", "Mark"]) --> "Max, John and Mark like this"
likes(["Alex", "Jacob", "Mark", "Max"]) --> "Alex, Jacob and 2 others like this"

For more than 4 names, the number in "and 2 others" simply increases.
*/

function likes(names) {
  switch(names.length) {
    case 0: return "no one likes this"; break;
    case 1: return names + " likes this"; break;
    case 2: return names[0] + " and " + names[1] + " like this"; break;
    case 3: return names[0] + ", " + names[1] + " and " + names[2] + " like this"; break;
    default: return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
  }
}

console.log(likes([])); // no one likes this
console.log(likes(["Peter"])); // Peter likes this
console.log(likes(["Jacob", "Alex"])); // Jacob and Alex like this
console.log(likes(["Max", "John", "Mark"])); // Max, John and Mark like this
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // Alex, Jacob and 2 others like this
