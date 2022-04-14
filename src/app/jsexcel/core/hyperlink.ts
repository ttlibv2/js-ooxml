export interface Hyperlink {
  /** Return the column of the first cell that contains the hyperlink*/
  getFirstColumn(): number;

  /**Return the row of the first cell that contains the hyperlink*/
  getFirstRow(): number;

  /**Return the column of the last cell that contains the hyperlink*/
  getLastColumn(): number;

  /**Return the row of the last cell that contains the hyperlink*/
  getLastRow(): number;

  /**Set the column of the first cell that contains the hyperlink*/
  setFirstColumn(col: number): void;

  /**Set the row of the first cell that contains the hyperlink*/
  setFirstRow(row: number): void;

  /**Set the column of the last cell that contains the hyperlink*/
  setLastColumn(col: number): void;

  /**Set the row of the last cell that contains the hyperlink*/
  setLastRow(row: number): void;
}
