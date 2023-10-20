import ButtonContainer from "./ButtonContainer"
import OuterContainer from "./OuterContainer"
import BasicButtons from "./StyledComponents"


export default function Home() {
  return (
    <OuterContainer>
<div>
  <h1>Next Tomato Counter</h1>
  <h4>Created with React, Next.js, Material UI, and TypeScript</h4>
</div>
    <ButtonContainer>
     <BasicButtons></BasicButtons>
    </ButtonContainer>
    </OuterContainer>
    
    
  )
}
