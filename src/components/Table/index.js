import React, { useState } from "react";
import useTable from "../../hooks/useTable";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";

const Table = ({ data, rowsPerPage }) => {
 
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
 /* const slice1 = [
    {id:1, topic:'t1',title:'title 1', description:'desc 1', area:'a1', dateCreated:'01-01-2020'},
    {id:1, topic:'t1',title:'title 1', description:'desc 1', area:'a1', dateCreated:'01-01-2020'},
    {id:1, topic:'t1',title:'title 1', description:'desc 1', area:'a1', dateCreated:'01-01-2020'},
    {id:1, topic:'t1',title:'title 1', description:'desc 1', area:'a1', dateCreated:'01-01-2020'},
    {id:1, topic:'t1',title:'title 1', description:'desc 1', area:'a1', dateCreated:'01-01-2020'},
    {id:1, topic:'t1',title:'title 1', description:'desc 1', area:'a1', dateCreated:'01-01-2020'},
    {id:1, topic:'t1',title:'title 1', description:'desc 1', area:'a1', dateCreated:'01-01-2020'}
  ]*/
  return (
    <>
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>TOPIC</th>
            <th className={styles.tableHeader}>TITLE</th>
            <th className={styles.tableHeader}>MESSAGE</th>
            <th className={styles.tableHeader}>AREA</th>
            <th className={styles.tableHeader}>DATE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <tr className={styles.tableRowItems} key={el.id}>
              <td className={styles.tableCell}>{el.topic}</td>
              <td className={styles.tableCell}>{el.title}</td>
              <td className={styles.tableCell}>{el.description}</td>
              <td className={styles.tableCell}>{el.area}</td>
              <td className={styles.tableCell}>{el.dateCreated}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={[1]} slice={data} setPage={setPage} page={page} />
    </>
  );
};

export default Table;