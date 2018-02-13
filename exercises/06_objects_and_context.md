# Objekt, constructor & context

### Övning 1 - Lägg till en funktion i ett objekt

Ett objekt är en variabel som är en samling av andra variabler, dessa variabler i samlingen är alltid ett `key/value`-par. En funktion är också en variabel, nästan allt i JavaScript kan sparas i variabler. Om vi lägger ihop det vi nu vet betyder det att en funktion kan lagras i ett objekt. Så här ser det ut:

```javascript
const album = {
    albumName: "Trouble Will Find Me",
    artist: "The National",
    year: 2013,
    printAlbum: function(){
        console.log(`The album ${this.albumName} by ${this.artist} was released in ${this.year}`);
    }
};
```

Namnet på funktionen blir `getContent` och är vår **property(egenskap)** i objektet, värdet på denna **property** blir en **anonym funktion**. När vi sedan vill använda oss av denna funktion kan vi kalla på den med `album.getContent()`. D.v.s. funktionen ligger inuti objektet och tillhör objektet, vi måste alltid kalla på den med punktnotation.

Den mest förvirrande delen av detta är att vi inte kan referera till variablerna i objektet genom deras namn enbart. Vi måste referera till dem med hjälp av `this.`. `this` syftar på just **det här** objektets variabler. `this` är ett nyckelord. Vi har alltid ett `this`. Om vi refererar till `this` **utanför** ett objekt så kommer vi att komma åt det globala objektet `window`.

__a)__
Använd koden ovan men skapa ytterligare en funktion i objektet. Denna funktion ska använda sig utav `year` och beräkna hur länge sen det var albumet släpptes. Funktionen ska returnera följande:
`This album was release 3 years ago`. Där årtalet ska ändras beroende på vilket år ditt album släpptes.
__b)__
Finns det något annat sätt att komma åt `year`, `artist` och `albumName` utan att använda `this`? Skriv hur det skulle se ut.

### Övning 2 - Object constructor

Vi vill oftast göra många olika album med olika innehåll. Vi vill kunna skriva ut albumet och när det släpptes men vi vill inte alltid hårdkoda in de värden som sak skrivas ut. Då kan det vara bra att använda en __constructor__. Det är också här `this.` kommer in tydligare i bilden. En __constructor__ kan skapa flera olika objekt utifrån samma **"mall"**. Vi defininerar hur objektet ska se ut, skapar en mall som objektet ska förhålla sig till. Sedan kan vi skapa flera olika objekt genom att använda samma kod. Se detta exempel:

```javascript

// A constructor is simply a function. As best practice we usually
// write them with first letter capitalized to distinguish them
// "ordinary" functions. But they are just an ordinary function.
function Album(albumName, artist, year){
    // Each time we call this function we are saving the arguments
    // each time to a new `this`, a new object. They have the samlingen
    // structure but are not the same object. Kinda like when we are creating
    // elements in the DOM. Each new <button> is unique but they are still of
    // the type 'button' and have properties that are 'buttony'
    this.albumName = albumName;
    this.artist = artist;
    this.year = year;
}

// The difference is when we call the function. If we call the function with
// the keyword  `new` we will create a new `this`. Otherwise we wont create
// a new object. The `new` keyword is important in this case
const album1 = new album("Blue", "Joni Mitchell", 1971);
const album2 = new album("Panic Prevention", "Jamie T", 2007);
```

```javascript
console.log(typeof Album);
console.log(typeof album1);
console.log(album1 instanceof Album);
console.log(album1 instanceof Object);
console.log(typeof album1.artist);
```

### Övning 3 - Create your weapon

1. Använd strukturen ovan (`Album()`) och skapa en egen **object constructor**. 
2. Objektet ska ha namnet `Weapon`;
3. Objektet ska ta två parametrar: `type` och `damage`
4. Värdena ska lagras med hjälp av `this.`
6. Du ska sedan med hjälp av objektet kunna skapa olika sorters vapen genom att kalla på detta constructor-objekt via nyckelordet `new` och sedan lagra vapnet i en ny variabel.

### Övning 4 - Slay the monster

Whaaha, ett monster! Ouf babouf!

```javascript
function Monster(name, health){
    this.name = name;
    this.health = health;
    this.speak = function(){
        console.log(`${this.name} hungry! ${this.name} kill!`);
    }
}

var Grublak = new Monster("Grublak", 500);

Grublak.speak();
```

1. Du har redan ett vapen som kan skada monstret från förra övningen.
2. Vi måste bygga en funktion som kan ta ner **Grublak**. Funktionen ska ta två argument, det ena argumentet ska vara ditt vapen och det andra argumentet ska vara monstret: `function slayMonster(weapon, monster){}`.
3. Funktionen ska sedan jämföra skadan från ditt vapen med livet på monstret.
4. Om `damage` är högre eller lika med monstrets `health` ska funktionen skriva ut `"Ouchy, me dead."`
5. Om skadan inte är högre än hälsan på monstret ska skadan subtraheras (-) från monstrets `health`.
6. Funktionen ska fortsätta köras tills monstret är dräpt. D.v.s när `damage` är högre än `health`.

### Övning 5 - Critta monstret!

1. Du kan nu döda monstret. Men det kanske tar lite tid beroende på hur mycket skada ditt vapen gör. Grublak är dock svag mot vapen av typen `Tenta`
2. Ändra i din funktion `slayTheMonster` så att om vapnet är av typen `Tenta` så tar Grublak dubbel skada.
3. Du har också turen på din sida. Ibland kan du få in en lyckosam crit så att du gör dubbel skada oberoende av vilket vapen du har. Det är 20% chans att du crittar.
4. Lägg till i din funktion så att du gör __dubbel__ skada på monstret om du går en critical hit.


### Slay all the monsters

1. Skapa en array av olika monster, en array av objekt alltså.
2. Loopa sedan igenom alla monster med din funktion. Antingen genom att ha en loop inuti funktionen eller genom att kalla på funktionen `slayTheMonster` i en loop.


## Lösningsförslag

#### Övning 1 

```js
const album = {
    albumName: "Trouble Will Find Me",
    artist: "The National",
    year: 2013,
    printAlbum: function(){
        console.log(`The album ${this.albumName} by ${this.artist} was released in ${this.year}`);
    }
    getYear: function(currentYear){
        return `This album was released ${(currentYear - this.year)} years ago`;
    },
    getYear2: function(){
        const currentYear = (new Date()).getFullYear();
        return `This album was released ${(currentYear - this.year)} years ago`;
    }
};

//När vi kallar på funktionen skickar vi med 2016 som argument som blir till currentYear
console.log(album.getYear(2016));
console.log(album.getYear());

```

#### Övning 2

```js
function Album(albumName, artist, year){
    this.albumName = albumName;
    this.artist = artist;
    this.year = year;
    this.printAlbum = function() {
      console.log(`The album ${this.albumName} by ${this.artist} was released in ${this.year}`);
  }
}

const album1 = new Album("Blue", "Joni Mitchell", 1971);
const album2 = new Album("Panic Prevention", "Jamie T", 2007);

// We can use `printAlbum()` on both the albums. We create the function
// once and then it is bound to each album created. This is great if we have
// a lot of functions that we want to call on a lot of objects. If we have
// a 'records app' we would have thousands of albums. We would not save them
// as 'album1', 'album2' etc. tho.
album1.printAlbum();
album2.printAlbum();
```


#### Övning 3 - Create your weapon

```js
// Constructor pattern is a regular function, we write
// the function name with big letter at the start because
// that is best practice, but it doesn't change the function at all
function Weapon(type, damage){
    // Each parameter/argument is stored to `this.property`. `this`
    // will refere to all new objects created with this function
    this.type = type;
    this.damage = damage;
}

// To create a new object based on this function we must use `new`
// `new` will return a new object based on what the function do.
// Notice how there is no `return` in the function but `new` returns
// a new object for us that looks like this: { name: "Rusty Dagger", damage: 10000 }
const rustyDagger = new Weapon('Rusty Dagger', 10000);
```

#### Övning 4 - Slay the monster

```js
// The monster constructor is the same, it just has different value or
// different names on the values. It also got a function that speaks it name
// but it is not important, it is just an example
function Monster(name, health){
    this.name = name;
    this.health = health;
    this.speak = function(){
        console.log(`${this.name} hungry! ${this.name} kill!`);
    };
}

function Weapon(type, damage){
    this.type = type;
    this.damage = damage;
}

const rustyDagger = new Weapon('Rusty Dagger', 500);
// We call it exactly like the previous functions
const Grublak = new Monster('Grublak', 10000);

// We call the function `slayMonster` that is declared below
// we send along the two object: `rustyDagger` and `Grublak`
slayTheMonster(rustyDagger, Grublak);

function slayTheMonster(weapon, monster){
    // We can save the health of the monster
    // by extracting it for the object. This is just
    // so we don't have to write `monster.health` every time.
    let health = monster.health;
    // we do the same with damage and name for easier handling
    const damage = weapon.damage;
    const name = monster.name;
    // While the monster has health left we will continue to strike it
    while (health > damage){
        // We subtract the damage from the current health which is at the start
        // 10000, but will decrease with 500 each time.
        health = health - damage; 
        //Log every time we hit it to see that we are actually hitting it
        console.log(`${name} health remaining: ${health}`);

    }
    // If there is no health left the loop will exit, and the monster is slain
    console.log(`Ouch, me ${monster.name} dead!`);
}
```


#### Övning 5 - Critta monstret!

```js
function slayTheMonster(weapon, monster){
    // We can save the health of the monster
    // by extracting it for the object. This is just
    // so we don't have to write `monster.health` every time.
    let health = monster.health;
    // we do the same with damage and name for easier handling
    const damage = weapon.damage;
    const name = monster.name;
    let dice;
    // While the monster has health left we will continue to strike it
    while (health > damage){
        
        // Each time we hit the monster, generate a new random number 
        // between 0 and 1. That will be our percentage of crit
        dice = Math.random();

        //If the dice is below 0.2 (20% crit chance) we will do double damange 
        //You could also just check if the typ of the weapon is "tenta" and 
        //that will do double damage as well
        if (dice < 0.2 || weapon.type.toLowerCase() === "tenta"){
            // Multiply damage by 2
            health = health - (damage*2);
            
            // So we know that we are critting
            console.log(`Ya crit boi! Double damage!`); 
        } else {
            // Else, do the usual damage
            health = health - damage; 
        }
        console.log(`${name} health remaining: ${health}`);

    }
    console.log(`Ouch, me ${monster.name} dead!`);
}
```

#### Övning 6 - Slay all the monsters

```js
// We can either create a new monster with the constructor pattern,
// or we can just create a simple object
const monsters = [
    new Monster("Grublak", 10000),
    new Monster("Slutbossen", 12000),
    {
        name: "Frufflak",
        health: 1000
    }
];

for (const monster of monsters){
    slayTheMonster(Tenta, monster);
}
```
