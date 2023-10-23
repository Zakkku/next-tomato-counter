"use client"
import React, { useState } from "react";
import ButtonContainer from "./ButtonContainer"
import OuterContainer from "./OuterContainer"
import TomatoContainer from "./TomatoContainer";


export default function Home() {
  
  const [tomatoes, setTomatoes] = useState(0);

  return (
    <OuterContainer>
      <div>
        <h1>Next Tomato Counter</h1>
        <h4>Created with React, Next.js, Material UI, and TypeScript</h4>
      </div>
      <ButtonContainer setTomatoes={setTomatoes} tomatoes={tomatoes}>
      </ButtonContainer>
      <TomatoContainer tomatoes={tomatoes}/>
    </OuterContainer>
  );
}
