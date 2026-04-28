import React from "react";
import { getPhotos, getStickers } from "./api/mediaApi";
import {useSelector} from "react-redux"

export default function App() {
  const state = useSelector(state => state.search.value)
  return (

    <div>
      <button onClick={() => getPhotos("dog")}>Get photos</button>
      <button onClick={() => getStickers("modi")}>Get Stickers</button>
      <p>{state}</p>
    </div>
  );
}
