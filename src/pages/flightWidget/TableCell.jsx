import styles from "./TableCell.module.css";
import TableLetter from "./TableLetter";

function TableCell({ word }) {
  return (
    <td className={`${styles.cell}`}>
      {Array.from(word).map((letter, index) => (
        <TableLetter key={index} letter={letter} index={index} />
      ))}
    </td>
  );
}

export default TableCell;
