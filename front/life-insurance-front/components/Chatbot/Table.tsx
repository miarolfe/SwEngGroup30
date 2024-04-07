import { useEffect } from "react";
import { type PropType } from "./ParseResponse";

const Table = ({ tableVals }: { tableVals: PropType[] }) => {
  return (
    <table className="w-full border-[1px] border-white mb-2">
      <thead className="border-b-[1px] border-white text-left">
        {tableVals[0].titles.map((title, idx) => (
          <th key={idx}>{title}</th>
        ))}
      </thead>
      <tbody>
        {tableVals.map((item) =>
          item.values.map((val, idx) => <td key={idx}>{val}</td>)
        )}
      </tbody>
    </table>
  );
};

export default Table;
