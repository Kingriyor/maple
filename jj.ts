function canConstruct(ransomNote: string, magazine: string): boolean {
    let ransomNoteChar = [...ransomNote];
    let magazineChar = [...magazine];
    ransomNoteChar.forEach((character, index) => {
        console.log(character, index);
        console.log(magazineChar);
        const findIndex = magazineChar.indexOf(character);
        console.log(findIndex);
        if (findIndex === -1){
            console.log("entered");
            return false;
        }else{
            // pop char out of magazineChar
            magazineChar.splice(findIndex, 1);
        }
    });

    return true;

};


function maxNumberOfBalloons(text: string): number {
    let count = {b: 0, a: 0, l: 0, o: 0, n: 0};
    for (let i = 0; i < text.length; i ++){
        // const character = text[i];
        // count[text[i]] = (count[text[i]] || 0) + 1 ;
        if (text[i] in count){
            count[text[i]] = count[text[i]] + 1 ;
        }
    }

    console.log(count);

    count.l = Math.floor(count.l / 2 );
    count.o = Math.floor(count.o / 2 );

    console.log(count);

    let vals = Object.values(count);
    
    console.log(vals);


    return 0
    
};