/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  var passGrade = 38;

  for (let i = 0; i <= grades.length; i++) {
    const nxtMultipleOfFive = Math.ceil(grades[i] / 5) * 5;
    const differenceForIncrease = 3;

    if (grades[i] >= passGrade) {
      if (nxtMultipleOfFive - grades[i] < differenceForIncrease) {
        grades[i] = nxtMultipleOfFive;
      }
    }
  }

  return grades;
}
