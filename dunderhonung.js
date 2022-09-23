let bamse = {
    name: 'Bamse',
    animal: 'Brunbjörn',
    description: 'Världens starkaste björn',
    quote: 'Det är modigt att våga säga att man är rädd.'
};
console.log(bamse.quote);
bamse.quote = 'Man ska vara snäll mot dem som är stygga, för de behöver det mest, och då blir de kanske snällare.';
console.log(bamse.quote);
let skalman = { name: 'Skalman',
animal: 'Sköldpadda',
description: 'Världens lataste sköldpadda',
quote: '*snarkar*'}; // fyll på

console.log(skalman.quote);
skalman.quote = '*snarkar hårdare*';
console.log(skalman.quote);

let friends = []; // tom array
friends.push(bamse); // lägg till vännerna med push() metoden
friends.push(skalman);
console.log(bamse[0]);
console.log(skalman[1]);
