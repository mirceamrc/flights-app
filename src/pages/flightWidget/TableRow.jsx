import TableCell from "./TableCell";

function TableRow({ flight }) {
  const words = Object.values(flight);

  return (
    <tr>
      {words?.map((word, _index) => (
        <TableCell key={_index} word={word} />
      ))}
    </tr>
  );
}

export default TableRow;
