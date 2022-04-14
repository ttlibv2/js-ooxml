import { int } from "./types";
import { ValueEval } from "./ValueEval";
import { FormulaError } from "./FormulaError";

export class ErrorEval implements ValueEval {
  private static readonly evals = new Map<FormulaError, ErrorEval>();

  /** <b>#NULL!</b>  - Intersection of two cell ranges is empty */
  public static readonly NULL_INTERSECTION = new ErrorEval(FormulaError.NULL);

  /** <b>#DIV/0!</b> - Division by zero */
  public static readonly DIV_ZERO = new ErrorEval(FormulaError.DIV0);

  /** <b>#VALUE!</b> - Wrong type of operand */
  public static readonly VALUE_INVALID = new ErrorEval(FormulaError.VALUE);

  /** <b>#REF!</b> - Illegal or deleted cell reference */
  public static readonly REF_INVALID = new ErrorEval(FormulaError.REF);

  /** <b>#NAME?</b> - Wrong function or range name */
  public static readonly NAME_INVALID = new ErrorEval(FormulaError.NAME);

  /** <b>#NUM!</b> - Value range overflow */
  public static readonly NUM_ERROR = new ErrorEval(FormulaError.NUM);

  /** <b>#N/A</b> - Argument or function not available */
  public static readonly NA = new ErrorEval(FormulaError.NA);

  // POI internal error codes
  public static readonly FUNCTION_NOT_IMPLEMENTED = new ErrorEval(
    FormulaError.FUNCTION_NOT_IMPLEMENTED
  );

  // Note - Excel does not seem to represent this condition with an error code
  public static readonly CIRCULAR_REF_ERROR = new ErrorEval(
    FormulaError.CIRCULAR_REF
  );

  /**
   * Translates an Excel internal error code into the corresponding POI ErrorEval instance
   * @param errorCode An error code listed in {@link FormulaError}
   * @throws RuntimeException If an unknown errorCode is specified
   */
  public static valueOf(errorCode: int): ErrorEval {
    let error = FormulaError.forInt(errorCode);
    let evals = ErrorEval.evals.get(error);
    if (evals != null) return evals;
    else throw new Error("Unhandled error type for code " + errorCode);
  }

  /**
   * Converts error codes to text.  Handles non-standard error codes OK.
   * For debug/test purposes (and for formatting error messages).
   * @return the String representation of the specified Excel error code.
   */
  public static getText(errorCode: int): string {
    if (FormulaError.isValidCode(errorCode)) {
      return FormulaError.forInt(errorCode).getString();
    }
    // Give a special string, based on ~, to make clear this isn't a standard Excel error
    return "~non~std~err(" + errorCode + ")~";
  }

  private constructor(private error: FormulaError) {
    ErrorEval.evals.set(error, this);
  }

  public getErrorCode(): int {
    return this.error.getLongCode();
  }
  public getErrorString(): string {
    return this.error.getString();
  }
}
