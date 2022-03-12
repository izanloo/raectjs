import React from "react";

export default function TableMatrix({matrix}) {
  return (
    <>
      <thead>
        <tr>
          <th>Col 1</th>
          <th>Col 2</th>
          <th>Col 3</th>
        </tr>
      </thead>
      <tbody>
        {matrix.map((item, index) => {
          return (
            <tr key={index}>
              {item.map((i, k) => 
                <td key={k}>{i}</td>
              )}
            </tr>
          );
        })}
      </tbody>
    </>
  );
}
