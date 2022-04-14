import { Cell } from "./cell";

// This class is a container for POI usermodel row=0 column=0 cell references.
export class CellAddress {
  /**
   * Create a new CellAddress object.
   * @param cell - the Cell to get the location of
   */
  constructor(cell: Cell);

  /**
   * Create a new CellAddress object.
   * @param address - a CellAddress
   */
  constructor(address: CellAddress);

  /**
   * Create a new CellAddress object.
   * @param reference - a reference to a cell
   */
  constructor(reference: CellReference);

  /**
   * Create a new CellAddress object.
   * @param address - a cell address in A1 format.
   */
  constructor(address: string);

  /**
   * Create a new CellAddress object.
   * @param row - Row index (first row is 0)
   * @param column - Column index (first column is 0)
   */
  constructor(row: number, column: number);

  /**
   * Create a new CellAddress object.
   * @private
   * @param args
   */
  constructor(...args: any[]) {}

  /**
   * Get the cell address row
   */
  get row(): number {
    return 0;
  }

  /**
   * Get the cell address column
   */
  get column(): number {
    return 0;
  }

  /**
   * Compare this CellAddress using the "natural" row-major, column-minor ordering.
   * That is, top-left to bottom-right ordering.
   * <pre>
   * -1 if this CellAddress is before (above/left) of other
   * 0 if addresses are the same
   * 1 if this CellAddress is after (below/right) of other
   * </pre>
   */
  compareTo(other: CellAddress): number {
    return 0;
  }

  /**
   * A1-style cell address string representation
   */
  formatAsString(): string {
    return undefined;
  }
}
