import { Sheet } from "./sheet";
import { Row } from "./row";
import { CellType } from "./cell-type";
import { CellStyle } from "./cell-style";
import { CellAddress } from "./cell-address";
import { Hyperlink } from "./hyperlink";

export type byte = number;

export interface Cell {
  /**
   * Returns column index of this cell
   * @return zero-based column index of a column in a sheet.
   */
  getColumnIndex(): number;

  /**
   * Returns row index of a row in the sheet that contains this cell
   * @return zero-based row index of a row in the sheet that contains this cell
   */
  getRowIndex(): number;

  /**
   * Returns the sheet this cell belongs to
   * @return the sheet this cell belongs to
   */
  getSheet(): Sheet;

  /**
   * Returns the Row this cell belongs to
   */
  getRow(): Row;

  /**
   * Removes formula and value from the cell,
   * and sets its type to CellType.BLANK
   */
  setCellBlank(): void;

  /**
   * Converts the supplied date to its equivalent Excel numeric value and sets that into the cell.
   * @param value - the numeric value to set this cell to.
   */
  setCellDateValue(date: Date): void;

  /**
   * Set a numeric value for the cell.
   * @param value - the numeric value to set this cell to.
   */
  setCellNumberValue(number: number): void;

  /**
   * Set a string value for the cell.
   * @param value - the string value to set this cell to.
   */
  setCellTextValue(text: string): void;

  /**
   * Set a boolean value for the cell.
   * @param value - the boolean value to set this cell to.
   */
  setCellBooleanValue(bool: boolean): void;

  /**
   * Set a error value for the cell.
   * @param value - the error value to set this cell to. (byte)
   */
  setCellErrorValue(value: byte): void;

  /**
   * Sets formula for this cell.
   * @param formula - the formula to set, e.g. "SUM(C4:E4)".
   */
  setCellFormula(formula: string): void;

  /**
   * Removes formula, if any. If cell was blank, leaves it as is.
   * If it is a part of an array formula group, blanks the cell.
   * If has a regular formula, removes the formula preserving the "cached" value.
   */
  removeFormula(): void;

  /**
   * Return the cell type.
   */
  getCellType(): CellType;

  /**
   * Only valid for formula cells
   * @return one of (CellType.NUMERIC, CellType.STRING, CellType.BOOLEAN, CellType.ERROR) depending on the cached value of the formula
   */
  getCachedFormulaResultType(): CellType;

  /**
   * Return a formula for the cell, for example, SUM(C4:E4)
   */
  getCellFormula(): string;

  /**
   * Get the value of the cell as a number.
   * For strings we throw an exception. For blank cells we return a 0.
   * For formulas or error cells we return the precalculated value;
   */
  getNumericCellValue(): number;

  /**
   * Get the value of the cell as a date.
   * For strings we throw an exception. For blank cells we return a null.
   * @throws     java.lang.IllegalStateException - if the cell type returned by getCellType() is CellType.STRING
   * @throws java.lang.NumberFormatException - if the cell value isn't a parsable double.
   */
  getDateCellValue(): Date;

  /**
   * Get the value of the cell as a string
   * For numeric cells we throw an exception. For blank cells we return an empty string.
   * For formulaCells that are not string Formulas, we throw an exception.
   */
  getStringCellValue(): string;

  /**
   * Get the value of the cell as a boolean.
   * For strings, numbers, and errors, we throw an exception.
   * For blank cells we return a false.
   */
  getBooleanCellValue(): boolean;

  /**
   * Get the value of the cell as an error code.
   * For strings, numbers, and booleans, we throw an exception. For blank cells we return a 0.
   */
  getErrorCellValue(): byte;

  /**
   * Set the style for the cell. The style should be an CellStyle created/retrieved from the Workbook.
   * @param style - reference contained in the workbook.
   */
  setCellStyle(style: CellStyle): void;

  /**
   * Return the cell's style.
   * @return the cell's style. Always not-null. Default cell style has zero index and can be obtained as workbook.getCellStyleAt(0)
   */
  getCellStyle(): CellStyle;

  /**
   * Sets this cell as the active cell for the worksheet
   */
  setAsActiveCell(): void;

  /**
   * Gets the address of this cell
   * @return A1 style address of this cell
   */
  getAddress(): CellAddress;

  /**
   * Assign a comment to this cell
   * @param comment comment associated with this cell
   */
  setCellComment(comment: Comment): void;

  /**
   * Removes the comment for this cell, if there is one.
   */
  removeCellComment(): void;

  /**
   * Returns comment associated with this cell
   * @return comment associated with this cell or null if not found
   */
  getCellComment(): Comment;

  /**
   * Assign a hyperlink to this cell
   * @param     link - hyperlink associated with this cell
   */
  setHyperlink(link: Hyperlink): void;

  /**
   * Removes the hyperlink for this cell, if there is one.
   */
  removeHyperlink(): void;

  /**
   * Returns hyperlink associated with this cell or null if not found
   */
  getHyperlink(): Hyperlink;
}
