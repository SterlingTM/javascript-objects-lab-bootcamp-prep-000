var recipes = { };

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, recipes, { key: [value] });
  recipes;
  return recipes;
}