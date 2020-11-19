console.log("====================== Object =================");

const object = {
    key: 'property'
};// values of thepe object

const style = {
    color: 'red',
    backgroundColor: 'green',
    padding: '0px',
    margin: '10px'
}; // Object constructor

const backgroundColorFromStyle = style.backgroundColor;
console.log(`Background color ${backgroundColorFromStyle}`);

console.log( `Padding ${style['padding']}`);

const {margin, padding, color} = style; // object destruction
console.log(`Destructor Margin ${margin}`);
console.log(`Destructor Padding ${padding}`);


const description = {
    work: 'Went to work',
    "touched tree" : "Touched a tree in object"
}
console.log(description.work);
console.log(description['work']);

console.log(description["touched tree"]);

const anObject = {
    left: 1,
    right: 2
};

console.log(`Left: ${anObject.left}`) // 1

// delete (cuts off)

delete anObject.left;
console.log(anObject);
console.log(anObject.left);

// Object.Keys - to find out what property an oject has

const newObject = {
    x: 0,
    y: 1,
    Z: 2
}
const findProperties = Object.keys(newObject)
console.log(`Properties ov newObject are: ${findProperties}`)
console.log(findProperties);

// Object.assign 
const objA={
    a: 1,
    b: 5
}

const objB = {
    b: 7,
    c: 9,
    d: 'Hello'
}

// Object.assign(objA, objB);
Object.assign(objB, objA);
console.log(objA);
console.log(objB);


const journal = [
    {
        events: ["work", "touched tree", "pizza", "running", "television", "news"], 
        public: false,
        views: 521,
        visitors: 12
    },
    {
        events: ["work", "foodball", "pizza", "running", "television", "news"], 
        public: true,
        views: 101
    },
    {
        events: ["week", "holiday", "pizza", "running", "television", "news"], 
        public: false,
        views: 12
    }
]; // array of objects

console.log(journal)






















console.log("====================== Object =================");
