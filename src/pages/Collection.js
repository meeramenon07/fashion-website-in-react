import React from "react";
import { CollectionList } from "../helpers/CollectionList";
import CollectionItem from "../components/CollectionItem";
import "../styles/Collection.css";

function Collection() {
  return (
    <div className="collection">
      <h1 className="collectionTitle">Our Collection</h1>
      <div className="collectionList">
        {CollectionList.map((collectionItem, key) => {
          return (
            <CollectionItem
              key={key}
              image={collectionItem.image}
              name={collectionItem.name}
              price={collectionItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Collection;
