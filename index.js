const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = (name) => {
    cats.push(name)
};

const destructivelyPrependCat = (name) => {
    cats.unshift(name)
};

const destructivelyRemoveLastCat = () => {
    cats.pop()
};

const destructivelyRemoveFirstCat = () => {
    cats.shift()
};

const appendCat = (name) => {
    const copyofCats = cats.slice();
    copyofCats.push(name)
    return copyofCats
};

const prependCat = (name) => {
    const copyofCats = cats.slice();
    copyofCats.unshift(name)
    return copyofCats
};

const removeLastCat = () => {
    const copyofCats = cats.slice();
    copyofCats.pop()
    return copyofCats
};

const removeFirstCat = () => {
    const copyofCats = cats.slice();
    copyofCats.shift()
    return copyofCats
};