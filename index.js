var recipes = { prop: 1, prop2: 2 };

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, recipes, { key: [value] });
  recipes;
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return recipes;
}

function deleteFromObjectByKey(object, key) {
  var newRecipes = Object.assign({}, recipes);
  newRecipes
  delete object[key];
  return object
}