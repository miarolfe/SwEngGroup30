import { useEffect } from "react";
import { type PropType } from "./ParseResponse";

const Table = ({ tableVals }: { tableVals: PropType[] }) => {
  return (
    <table className="w-full border-[1px] border-white mb-2">
      <thead className="border-b-[1px] border-white text-left">
        <tr>
          {tableVals[0].titles.map((title, idx) => (
            <th key={idx}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableVals.map((item, idx1) => (
          <tr key={idx1}>
            {item.values.map((val, idx2) => (
              <td key={idx2}>{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
