import React, { useState } from "react";
import Table from "../components/Table";

type Props = {};

const Index: React.FC<Props> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  if (isLoading) {
    return <>loading</>
  }

  return (
    <div style={{ margin: 20 }}>

      <h1>Projects by Vertical</h1>

      <Table />

    </div>
  );
};

export default Index;
