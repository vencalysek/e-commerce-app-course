import {createSelector} from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector([selectShop], shop => shop.collections);

// shop.collections is object {hats:{}, sneakers:{},...}

// doing this move we taking values of shop.collections object, storing them in array: [{},{},{}...]. so we can map that array
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.values(collections)
)



// shop.collections = {hats:{}, sneakers:{},...}
// specifying collections[collectionUrlParam] we choose which object inside collections object we want to render
export const selectCollection = collectionUrlParam => (
  createSelector(
    [selectCollections], 
    collections =>
    collections[collectionUrlParam]
  )
);
// f.e.: collections[hats] -> return value of hats object: {id: 1, title: "Hats", routeName: "hats", items: Array(9)}