import { Cell } from "./cell";

/**
 * Common conversion functions between Excel style A1, C27 style cell references,
 * and POI usermodel style row=0, column=0 style references.
 * Handles sheet-based and sheet-free references as well, eg "Sheet1!A1" and "$B$72"
 * <p>
 * Use CellReference when the concept of relative/absolute does apply (such as a cell reference in a formula).
 * Use CellAddress when you want to refer to the location of a cell in a sheet when the concept of relative/absolute
 * does not apply (such as the anchor location of a cell comment). CellReferences have a concept of "sheet",
 * while CellAddresses do not.
 * </p>
 */
export class CellReference {
  constructor(cell: Cell);
  constructor(pRow: number, pCol: number);
  constructor(pRow: number, pCol: number, pAbsRow: boolean, pAbsCol: boolean);

  /**
   * Create an cell ref from a string representation.
   * Sheet names containing special characters should be delimited
   * and escaped as per normal syntax rules for formulas.
   */
  constructor(cellRef: string);
  constructor(
    pSheetName: string,
    pRow: number,
    pCol: number,
    pAbsRow: boolean,
    pAbsCol: boolean
  );
  constructor(...args: any[]) {}

  get row(): number {
    return 0;
  }

  get col(): number {
    return 0;
  }

  get sheetName(): string {
    return undefined;
  }

  isRowAbsolute(): boolean {
    return false;
  }

  isColAbsolute(): boolean {
    return false;
  }

  /**
   * Returns a text representation of this cell reference and allows to control if the sheetname is included in the reference.
   * <pre>
   * A1	                  Cell reference without sheet
   * Sheet1!A1	                Standard sheet name
   * 'O''Brien''s Sales'!A1' 	Sheet name with special characters
   * </pre>
   * @param     includeSheetName - If true and there is a sheet name set for this cell reference, the reference is prefixed with the sheet name and '!'
   */
  formatAsString(includeSheetName: boolean): string {
    return undefined;
  }

  /**
   * Returns the three parts of the cell reference, the Sheet name (or null if none supplied), the 1 based row number, and the A based column letter. This will not include any markers for absolute references, so use formatAsString() to properly turn references into strings.
   * @return String array of { sheetName, rowString, colString }
   */
  getCellRefParts(): any[] {
    return [this.sheetName, this.row, this.col];
  }
}
