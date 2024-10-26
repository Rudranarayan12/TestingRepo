import React from "react";
interface incommingData {
  data: {
    name: string;
    roll: number;
  }[];
}

const Hello: React.FC<incommingData> = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
            <h1>{item.roll}</h1>
          </div>
        );
      })}
    </>
  );
};

export default Hello;
