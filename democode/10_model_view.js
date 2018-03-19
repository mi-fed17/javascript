/**
 * A regular object can act as a namespace, a place to group all functionality
 * that belongs the view
 */
const View = {
  list: document.getElementById('listy'),
  createListItems(listOfThings) {
    for (let singleItem of listOfThings) {
      let listItem = document.createElement('li');
      listItem.innerText = singleItem;
      View.list.appendChild(listItem);
    }
  }
}

/**
 * All functionality that handles "logic" and not displaying information
 * can be grouped under "Model". This means the data and all the functionality
 * that handles that data and then sends it to the view.
 */
const Model = {
  dwarves: [
    'Toker',
    'Blyger',
    'Trötter',
    'Prosit',
    'Kloker',
    'Butter',
    'Glader'
  ],
  filterThings: function(things, thingToFilter) {
    let filteredDwarves = [];
    for (let thing of things) {
      if (thing !== thingToFilter) {
        filteredDwarves.push(thing);
      }
    }
    return filteredDwarves;
  }
};

const Utilities = {
  reverseArray: function(array){
    return array.reverse();
  }
}

/**
 * Every function must be "prefixed" with the name of the object that
 * the function belongs to. This makes it harder to mix variables and
 * functions up and easier to see to where the function belongs.
 */
const filteredDwarves = Model.filterThings(Model.dwarves);
View.createListItems(filteredDwarves);