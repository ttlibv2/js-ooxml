import { double, int } from "./types";
import { CellType } from "./cell-type";
import { ErrorEval } from "./ErrorEval";

export class CellValue {
  static readonly TRUE = new CellValue(CellType.BOOLEAN, 0.0, true, null, 0);
  static readonly FALSE = new CellValue(CellType.BOOLEAN, 0.0, false, null, 0);

  static valueOf(booleanValue: boolean): CellValue {
    return booleanValue ? CellValue.TRUE : CellValue.FALSE;
  }

  static getError(errorCode: int): CellValue {
    return new CellValue(CellType.ERROR, 0.0, false, null, errorCode);
  }

  constructor(
    private readonly numberValue: double,
    private readonly cellType: CellType = CellType.NUMERIC,
    private readonly booleanValue: boolean = false,
    private readonly textValue: string = null,
    private readonly errorCode: int = 0
  ) {}

  /**
   * @return Returns the booleanValue.
   */
  public getBooleanValue(): boolean {
    return this.booleanValue;
  }

  /**
   * @return Returns the numberValue.
   */
  public getNumberValue(): double {
    return this.numberValue;
  }

  /**
   * @return Returns the stringValue.
   */
  public getStringValue(): string {
    return this.textValue;
  }

  /**
   * Return the cell type.
   *
   * @return the cell type
   */
  public getCellType(): CellType {
    return this.cellType;
  }

  /**
   * @return Returns the errorValue.
   */
  public getErrorValue(): int {
    return this.errorCode;
  }

  public formatAsString(): string {
    switch (this.cellType) {
      case CellType.NUMERIC:
        return String(this.numberValue);
      case CellType.STRING:
        return '"' + this.textValue + '"';
      case CellType.BOOLEAN:
        return this.booleanValue ? "TRUE" : "FALSE";
      case CellType.ERROR:
        return ErrorEval.getText(this.errorCode);
      default:
        return "<error unexpected cell type " + this.cellType + ">";
    }
  }
}
