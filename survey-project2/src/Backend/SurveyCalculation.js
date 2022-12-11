export const calculateAnswers = (array) => {
    let mind = ""
    let E = 0;
    let I = 0;

    let energy = ""
    let S = 0;
    let N = 0;

    let nature = ""
    let T = 0;
    let F = 0;

    let tactics = ""
    let J = 0;
    let P = 0;

    // Question 1
    if (array[0][1] === 'A')
        J+=2
    else
        P+=2

    // Question 2
    if (array[1][1] === 'A')
        S+=2
    else
        N+=2

    // Question 3
    if (array[2][1] === 'A')
        E+=2
    else
        I+=2

    // Question 4
    if (array[3][1] === 'A')
        F+=1
    else
        T+=2

    // Question 5
    if (array[4][1] === 'A')
        N+=1
    else
        S+=1

    // Question 6
    if (array[5][1] === 'A')
        E+=2
    else
        I+=1

    // Question 7
    if (array[6][1] === 'A')
        J+=1
    else
        P+=1

    // Question 8
    if (array[7][1] === 'A')
        J+=1
    else
        P+=2

    // Question 9
    if (array[8][1] === 'A')
        E+=2
    else
        I+=1

    // Question 10
    if (array[9][1] === 'A')
        S+=1
    else
        N+=2

    // Question 11
    if (array[10][1] === 'A')
        J+=2
    else
        P+=1

    // Question 12
    if (array[11][1] === 'A')
        S+=1
    else
        N+=2


    // Check types
    if (E <= I)
        mind="Introverted"
    else
        mind="Extraverted"

    if (S <= N)
        energy="Intuitive"
    else
        energy="Sensing"

    if (T <= F)
        nature="Thinking"
    else
        nature="Feeling"

    if (J <= P)
        tactics="Judging"
    else
        tactics="Perceiving"

    return [mind, energy, nature, tactics]
}