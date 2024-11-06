
function countWordOccurrences(sentence: string, word: string): number {

    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const arrayOfMatches = sentence.match(regex);

    console.log(arrayOfMatches ? arrayOfMatches.length : 0)
    return arrayOfMatches ? arrayOfMatches.length : 0;
}

countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");