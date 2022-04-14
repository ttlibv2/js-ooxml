import { throws } from "assert";
import { error } from "console";
import { type } from "os";
import { byte, int } from "./types";

/**
 * Enumerates error values in SpreadsheetML formula calculations.
 *
 * See also OOO's excelfileformat.pdf (2.5.6)
 */
export class FormulaError {
  static readonly NO_ERROR = new FormulaError(-1, "(no error)");

  /**
   * Intended to indicate when two areas are required to intersect, but do not.
   * <p>Example:
   * In the case of SUM(B1 C1), the space between B1 and C1 is treated as the binary
   * intersection operator, when a comma was intended. end example]
   * </p>
   */
  static readonly NULL = new FormulaError(0x00, "#NULL!");

  /**
   * Intended to indicate when any number, including zero, is divided by zero.
   * Note: However, any error code divided by zero results in that error code.
   */
  static readonly DIV0 = new FormulaError(0x07, "#DIV/0!");

  /**
   * Intended to indicate when an incompatible type argument is passed to a function, or
   * an incompatible type operand is used with an operator.
   * <p>Example:
   * In the case of a function argument, text was expected, but a number was provided
   * </p>
   */
  static readonly VALUE = new FormulaError(0x0f, "#VALUE!");

  /**
   * Intended to indicate when a cell reference is invalid.
   * <p>Example:
   * If a formula contains a reference to a cell, and then the row or column containing that cell is deleted,
   * a #REF! error results. If a worksheet does not support 20,001 columns,
   * OFFSET(A1,0,20000) will result in a #REF! error.
   * </p>
   */
  static readonly REF = new FormulaError(0x17, "#REF!");

  /**
   * Intended to indicate when what looks like a name is used, but no such name has been defined.
   * <p>Example:
   * <ul>
   * <li>XYZ/3, where XYZ is not a defined name.</li>
   * <li>{@code Total is &amp; A10}, where neither {@code Total} nor {@code is} is a defined name.
   *      Presumably, {@code "Total is " &amp; A10} was intended.</li>
   * <li>SUM(A1C10), where the range A1:C10 was intended.</li>
   * </ul>
   */
  static readonly NAME = new FormulaError(0x1d, "#NAME?");

  /**
   * Intended to indicate when an argument to a function has a compatible type, but has a
   * value that is outside the domain over which that function is defined. (This is known as
   * a domain error.)
   * <p>Example:
   * Certain calls to ASIN, ATANH, FACT, and SQRT might result in domain errors.
   * </p>
   * Intended to indicate that the result of a function cannot be represented in a value of
   * the specified type, typically due to extreme magnitude. (This is known as a range
   * error.)
   * <p>Example: FACT(1000) might result in a range error. </p>
   */
  static readonly NUM = new FormulaError(0x24, "#NUM!");

  /**
   * Intended to indicate when a designated value is not available.
   * <p>Example:
   * Some functions, such as SUMX2MY2, perform a series of operations on corresponding
   * elements in two arrays. If those arrays do not have the same number of elements, then
   * for some elements in the longer array, there are no corresponding elements in the
   * shorter one; that is, one or more values in the shorter array are not available.
   * </p>
   * This error value can be produced by calling the function NA
   */
  static readonly NA = new FormulaError(0x2a, "#N/A");

  // These are POI-specific error codes
  // It is desirable to make these (arbitrary) strings look clearly different from any other
  // value expression that might appear in a formula.  In addition these error strings should
  // look unlike the standard Excel errors.  Hence tilde ('~') was used.

  /**
   * POI specific code to indicate that there is a circular reference
   *  in the formula
   */
  static readonly CIRCULAR_REF = new FormulaError(0xffffffc4, "~CIRCULAR~REF~");

  /**
   * POI specific code to indicate that the funcition required is
   *  not implemented in POI
   */
  static readonly FUNCTION_NOT_IMPLEMENTED = new FormulaError(
    0xffffffe2,
    "~FUNCTION~NOT~IMPLEMENTED~"
  );

  private readonly longType: int;

  private constructor(
    private readonly type: byte,
    private readonly repr: string
  ) {
    this.type = type;
    this.longType = type;
    this.repr = repr;
    this.initialize();
  }

  initialize() {
    FormulaError.bmap.set(this.getCode(), this);
    FormulaError.imap.set(this.getLongCode(), this);
    FormulaError.smap.set(this.getString(), this);
  }

  /**
   * @return numeric code of the error
   */
  public getCode(): byte {
    return this.type;
  }
  /**
   * @return long (internal) numeric code of the error
   */
  public getLongCode(): int {
    return this.longType;
  }

  /**
   * @return string representation of the error
   */
  public getString(): string {
    return this.repr;
  }

  private static readonly smap = new Map<String, FormulaError>();
  private static readonly bmap = new Map<byte, FormulaError>();
  private static readonly imap = new Map<int, FormulaError>();

  public static isValidCode(errorCode: int): boolean {
    if (FormulaError.bmap.has(errorCode)) return true;
    if (FormulaError.imap.has(errorCode)) return true;
    else return false;
  }

  public static forByte(type: byte): FormulaError {
    let err = FormulaError.bmap.get(type);
    if (err == null) throw new Error("Unknown error type: " + type);
    return err;
  }
  public static forInt(type: int): FormulaError {
    let err = FormulaError.imap.get(type);
    if (err == null) err = FormulaError.bmap.get(type);
    if (err == null) throw new Error("Unknown error type: " + type);
    return err;
  }

  public static forString(code: string): FormulaError {
    let err = FormulaError.smap.get(code);
    if (err == null) throw new Error("Unknown error code: " + code);
    return err;
  }
}
