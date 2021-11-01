import React, { useEffect, useState } from "react";

type Props = {
};

const Table: React.FC<Props> = ({}) => {

  return (
      <table cellPadding="10">
        <tbody>
          <tr style={{ backgroundColor: "gainsboro" }}>
            <td>Vertical</td>
            <td>Projects</td>
          </tr>
        </tbody>
      </table>
  );
};

export default Table;
