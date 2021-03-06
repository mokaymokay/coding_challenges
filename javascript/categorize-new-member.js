/*
The Western Suburbs Croquet Club has two categories of membership, Senior and Open.
They would like your help with an application form that will tell prospective members
which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater
than 7. In this croquet club, handicaps range from -2 to +26; the better the player
the lower the handicap.

Input will consist of a list of lists containing two items each. Each list contains
information for a single potential member. Information consists of an integer for
the person's age and an integer for the person's handicap.

Output will consist of a list of string values stating whether the respective member
is to be placed in the senior or open category.

**Example**

Input: [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
Output: ["Open", "Open", "Senior", "Open", "Open", "Senior"]

*/

function openOrSenior(data) {
  var output = data.map(function (applicant) {
    return applicant[0] >= 55 && applicant[1] > 7 ? "Senior" : "Open";
  });
  return output;
}

openOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]);
openOrSenior([[3, 12],[55, 1],[91, -2],[54, 23]]);
