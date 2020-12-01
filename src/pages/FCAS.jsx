import React, { useEffect, useState } from 'react';
import { getProjectRankMetrics } from "../api/fcas"

function FCAS() {
  const [data, setData] = useState()
  useEffect(() => {
    const getData = async () => {
      const result = await getProjectRankMetrics("fcas")
      setData(result.data.data)
    }
    getData()
  }, [])

  return (
    <div className="App">
      {data && data.map((d, i) => {
        return <div key={i}>{d.project_name} - {d.value}</div>
      })}
    </div>
  );
}

export default FCAS;
