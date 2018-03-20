const Model = (function(){
  // Istället för 'title', dwarves
  let dwarves = ['Toker', 'Blyger','Trötter', 'Prosit','Kloker', 'Butter','Glader'];
  
  // This function is now private, we cannot access the function 'addDwarf' with
  // Model.addDwarf()', we can call the function from inside of the Model but not from the outside
  // We are not revealing the function.
  function addDwarf(dwarf){
    dwarves.push(dwarf);
  }
  return {
    getDwarves: function(){
      return dwarves;
    },
    clearDwarves: function(){
      dwarves = [];
    }
  }
})();

console.log(Model.getDwarves());