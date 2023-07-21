
import LiveScoresLeaderboard from './components/LiveScoresLeaderboard'
import styled from "styled-components";

function App() {


  return (
    <>
      <Heading style={{ textAlign: "center", fontSize: "1rem" }}>
        {" "}
        Score Leaderboard{" "}
      </Heading>
      <LeaderWrapper>
        <LiveScoresLeaderboard />
      </LeaderWrapper>
    </>
  );
}

const Heading = styled.h1`
text-align:center;
font-size:1rem;
`;
const LeaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(250, 242, 242);
`;



export default App
