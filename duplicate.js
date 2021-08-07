const names = ['Abul', 'ali', 'bulbul', 'kamal', 'babul', 'ebul', 'Abul', 'bulbul', 'habul', 'alom', 'alim', 'mina', 'alom', 'mita'];

function removeDuplicate(names) {
    const unique = [];
    // for(let i =0; i<names.length; i++){
    //     const element =names[i];
    //     //console.log(element);
    // }
    for (const element of names) { //for loop er short form
        //console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);