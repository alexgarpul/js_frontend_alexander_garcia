const anime=['One Piece', 'Naruto', 'Kimetsu no Yaiba', 'Boruto', 'Dragon Ball Z', 'One Punch', 'Boku No Hero', 'MOB Psycho']

let ul = document.querySelector("ul");
// ul.innerHTML = <li>One Piece</li>
//                <li>Naruto</li>
//                <li>Kimetsu no Yaiba</li>
//                <li>Boruto</li>;

let animeConcat = "";

for (let i = 0; i < anime.length; i++){
    animeConcat = animeConcat + `<li>${anime[i].toUpperCase()}</li>`;
}

ul.innerHTML=animeConcat