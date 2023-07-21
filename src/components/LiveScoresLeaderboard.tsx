import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import styled from "styled-components";

// Interface for a single streamer's data
interface StreamerData {
  userID: string;
  displayName: string;
  picture: string;
  score: number;
}

  const initialData: StreamerData[] = [
    {
      userID: "u-1",
      displayName: "Jone",
      picture: "",
      score: 157000,
    },
    {
      userID: "u-2",
      displayName: "Victoria",
      picture: "",
      score: 46200,
    },
    {
      userID: "u-3",
      displayName: "Joy",
      picture: "",
      score: 38800,
    },
    {
      userID: "u-4",
      displayName: "Quinn",
      picture: "",
      score: 33400,
    },
    {
      userID: "u-5",
      displayName: "Sheenalo",
      picture: "",
      score: 31600,
    },
    {
      userID: "u-6",
      displayName: "Charlene",
      picture: "",
      score: 30800,
    },
    {
      userID: "u-7",
      displayName: "LeonaBaby",
      picture: "",
      score: 22300,
    },
    {
      userID: "u-8",
      displayName: "Sunny",
      picture: "",
      score: 17800,
    },
    {
      userID: "u-9",
      displayName: "ImWord",
      picture: "",
      score: 17300,
    },
    {
      userID: "u-10",
      displayName: "Dophine",
      picture: "",
      score: 15400,
    },
  ];

const LiveScoresLeaderboard: React.FC = () => {
  const streamerRowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [streamers, setStreamers] = useState<StreamerData[]>(initialData);

  const updateScoresRandomly = () => {
    const updatedStreamers = streamers.map((streamer) => ({
      ...streamer,
      score: streamer.score + Math.floor(Math.random() * 1000),
    }));
    setStreamers(updatedStreamers);
  };

  useEffect(() => {
    const interval = setInterval(updateScoresRandomly, 1000);
    return () => clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
  
    const updateRowPositions = () => {
      streamerRowRefs.current.forEach((row, index) => {
        if (row) {
          row.style.transform = `translateY(${index * row.clientHeight}px)`;
        }
      });
    };

    updateRowPositions();
  }, [streamers]);

  const sortedStreamers = [...streamers].sort((a, b) => b.score - a.score);

  return (
    <LeaderboardContainer>
      {sortedStreamers.map((streamer, index) => (
        <StreamerRow
          key={streamer.userID}
          ref={(ref) => (streamerRowRefs.current[index] = ref)}
        >
          <Position index={index+1} >{index + 1}</Position>
          <DisplayPic></DisplayPic>
          <DisplayName>{streamer.displayName}</DisplayName>
          <Score>{streamer.score} pt</Score>
        </StreamerRow>
      ))}
    </LeaderboardContainer>
  );
};

const LeaderboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 3rem;
  
`;

const StreamerRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2px 5px;
  transition: transform 0.5s ease;

  
`;

const Position = styled.span`
  margin-right: 16px;
  height: 25px;
  width: 25px;
  color: white;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -1px;
  background-color: ${({ index }) =>
    index === 1
      ? "red"
      : index === 2
      ? "green"
      : index === 3
      ? "orange"
      : "blue"};
`;

const DisplayPic = styled.span`
  margin-right: 16px;
  height: 35px;
  width: 35px;
  background-color: rgba(0, 0, 0, 0.109);
  color: white;
  border-radius: 100%;
  margin-top: -5px;
`;

const DisplayName = styled.span`
  flex: 1;
  color: black;
`;

const Score = styled.span`
  margin-left: 16px;
  color: red;
  font-weight: bold;
`;

export default LiveScoresLeaderboard;
