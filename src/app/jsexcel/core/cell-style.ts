import { int, short } from "./types";
import { FillPatternType } from "./FillPatternType";
import { VerticalAlignment, HorizontalAlignment } from "./alignment";
import { Font } from "./Font";
import { BorderStyle } from "./BorderStyle";
import { Color } from "./Color";

export interface CellStyle {
  /**
   * get the index within the Workbook (sequence within the collection of ExtendedFormat objects)
   * @return unique index number of the underlying record this style represents (probably you don't care
   *  unless you're comparing which one is which)
   */
  getIndex(): short;

  /**
   * set the data format (must be a valid format). Built in formats are defined at {@link BuiltinFormats}.
   * @see DataFormat
   */
  setDataFormat(fmt: short): void;

  /**
   * get the index of the data format. Built in formats are defined at {@link BuiltinFormats}.
   * @see DataFormat
   */
  getDataFormat(): short;

  /**
   * Get the format string
   */
  getDataFormatString(): String;

  /**
   * set the font for this style
   * @param font  a font object created or retrieved from the Workbook object
   * @see Workbook#createFont()
   * @see Workbook#getFontAt(int)
   */
  setFont(font: Font): void;

  /**
   * gets the index of the font for this style
   * @see Workbook#getFontAt(int)
   * @since 5.0.0 (used to return a short value)
   */
  getFontIndex(): int;

  /**
   * set the cell's using this style to be hidden
   * @param hidden - whether the cell using this style should be hidden
   */
  setHidden(hidden: boolean): void;

  /**
   * get whether the cell's using this style are to be hidden
   * @return hidden - whether the cell using this style should be hidden
   */
  getHidden(): boolean;

  /**
   * set the cell's using this style to be locked
   * @param locked - whether the cell using this style should be locked
   */
  setLocked(locked: boolean): void;

  /**
   * get whether the cell's using this style are to be locked
   * @return hidden - whether the cell using this style should be locked
   */
  getLocked(): boolean;

  /**
   * Turn on or off "Quote Prefix" or "123 Prefix" for the style,
   *  which is used to tell Excel that the thing which looks like
   *  a number or a formula shouldn't be treated as on.
   * Turning this on is somewhat (but not completely, see {@link IgnoredErrorType})
   *  like prefixing the cell value with a ' in Excel
   */
  setQuotePrefixed(quotePrefix: boolean): void;

  /**
   * Is "Quote Prefix" or "123 Prefix" enabled for the cell?
   * Having this on is somewhat (but not completely, see {@link IgnoredErrorType})
   *  like prefixing the cell value with a ' in Excel
   */
  getQuotePrefixed(): boolean;

  /**
   * set the type of horizontal alignment for the cell
   * @param align - the type of alignment
   */
  setAlignment(align: HorizontalAlignment): void;

  /**
   * get the type of horizontal alignment for the cell
   * @return align - the type of alignment
   */
  getAlignment(): HorizontalAlignment;

  /**
   * Set whether the text should be wrapped.
   * Setting this flag to <code>true</code> make all content visible
   * within a cell by displaying it on multiple lines
   *
   * @param wrapped  wrap text or not
   */
  setWrapText(wrapped: boolean): void;

  /**
   * get whether the text should be wrapped
   * @return wrap text or not
   */
  getWrapText(): boolean;

  /**
   * set the type of vertical alignment for the cell
   * @param align the type of alignment
   */
  setVerticalAlignment(align: VerticalAlignment): void;

  /**
   * get the type of vertical alignment for the cell
   * @return align the type of alignment
   */
  getVerticalAlignment(): VerticalAlignment;

  /**
   * set the degree of rotation for the text in the cell.
   *
   * Note: HSSF uses values from -90 to 90 degrees, whereas XSSF
   * uses values from 0 to 180 degrees. The implementations of this method will map between these two value-ranges
   * accordingly, however the corresponding getter is returning values in the range mandated by the current type
   * of Excel file-format that this CellStyle is applied to.
   *
   * @param rotation degrees (see note above)
   */
  setRotation(rotation: short): void;

  /**
   * get the degree of rotation for the text in the cell.
   *
   * Note: HSSF uses values from -90 to 90 degrees, whereas XSSF
   * uses values from 0 to 180 degrees. The implementations of this method will map between these two value-ranges
   * value-range as used by the type of Excel file-format that this CellStyle is applied to.
   *
   * @return rotation degrees (see note above)
   */
  getRotation(): short;

  /**
   * set the number of spaces to indent the text in the cell
   * @param indent - number of spaces
   */
  setIndention(indent: short): void;

  /**
   * get the number of spaces to indent the text in the cell
   * @return indent - number of spaces
   */
  getIndention(): short;

  /**
   * set the type of border to use for the left border of the cell
   * @param border type
   * @since POI 3.15
   */
  setBorderLeft(border: BorderStyle): void;

  /**
   * get the type of border to use for the left border of the cell
   * @return border type
   * @since POI 4.0.0
   */
  getBorderLeft(): BorderStyle;

  /**
   * set the type of border to use for the right border of the cell
   * @param border type
   * @since POI 3.15
   */
  setBorderRight(border: BorderStyle): void;

  /**
   * get the type of border to use for the right border of the cell
   * @return border type
   * @since POI 4.0.0
   */
  getBorderRight(): BorderStyle;

  /**
   * set the type of border to use for the top border of the cell
   * @param border type
   * @since POI 3.15
   */
  setBorderTop(border: BorderStyle): void;

  /**
   * get the type of border to use for the top border of the cell
   * @return border type
   * @since POI 4.0.0
   */
  getBorderTop(): BorderStyle;

  /**
   * set the type of border to use for the bottom border of the cell
   * @param border type
   * @since POI 3.15
   */
  setBorderBottom(border: BorderStyle): void;

  /**
   * get the type of border to use for the bottom border of the cell
   * @return border type
   * @since POI 4.0.0
   */
  getBorderBottom(): BorderStyle;

  /**
   * set the color to use for the left border
   * @param color The index of the color definition
   */
  setLeftBorderColor(color: short): void;

  /**
   * get the color to use for the left border
   */
  getLeftBorderColor(): short;

  /**
   * set the color to use for the right border
   * @param color The index of the color definition
   */
  setRightBorderColor(color: short): void;

  /**
   * get the color to use for the left border
   * @return the index of the color definition
   */
  getRightBorderColor(): short;

  /**
   * set the color to use for the top border
   * @param color The index of the color definition
   */
  setTopBorderColor(color: short): void;

  /**
   * get the color to use for the top border
   * @return the index of the color definition
   */
  getTopBorderColor(): short;

  /**
   * set the color to use for the bottom border
   * @param color The index of the color definition
   */
  setBottomBorderColor(color: short): void;

  /**
   * get the color to use for the left border
   * @return the index of the color definition
   */
  getBottomBorderColor(): short;

  /**
   * setting to one fills the cell with the foreground color... No idea about
   * other values
   *
   * @param fp  fill pattern (set to {@link FillPatternType#SOLID_FOREGROUND} to fill w/foreground color)
   * @since POI 3.15 beta 3
   */
  setFillPattern(fp: FillPatternType): void;

  /**
   * Get the fill pattern
   *
   * @return the fill pattern, default value is {@link FillPatternType#NO_FILL}
   * @since POI 4.0.0
   */
  getFillPattern(): FillPatternType;

  /**
   * set the background fill color.
   *
   * @param bg  color
   */
  setFillBackgroundColor(bg: short): void;

  /**
   * get the background fill color, if the fill
   *  is defined with an indexed color.
   * @return fill color index, or 0 if not indexed (XSSF only)
   */
  getFillBackgroundColor(): short;

  /**
   * Gets the color object representing the current
   *  background fill, resolving indexes using
   *  the supplied workbook.
   * This will work for both indexed and rgb
   *  defined colors.
   */
  getFillBackgroundColorColor(): Color;

  /**
   * set the foreground fill color
   * <i>Note: Ensure Foreground color is set prior to background color.</i>
   * @param bg  color
   */
  setFillForegroundColor(bg: short): void;

  /**
   * get the foreground fill color, if the fill
   *  is defined with an indexed color.
   * @return fill color, or 0 if not indexed (XSSF only)
   */
  getFillForegroundColor(): short;

  /**
   * Gets the color object representing the current
   *  foreground fill, resolving indexes using
   *  the supplied workbook.
   * This will work for both indexed and rgb
   *  defined colors.
   */
  getFillForegroundColorColor(): Color;

  /**
   * Clones all the style information from another
   *  CellStyle, onto this one. This
   *  CellStyle will then have all the same
   *  properties as the source, but the two may
   *  be edited independently.
   * Any stylings on this CellStyle will be lost!
   *
   * The source CellStyle could be from another
   *  Workbook if you like. This allows you to
   *  copy styles from one Workbook to another.
   *
   * However, both of the CellStyles will need
   *  to be of the same type (HSSFCellStyle or
   *  XSSFCellStyle)
   */
  cloneStyleFrom(source: CellStyle): void;

  /**
   * Controls if the Cell should be auto-sized
   *  to shrink to fit if the text is too long
   */
  setShrinkToFit(shrinkToFit: boolean): void;

  /**
   * Should the Cell be auto-sized by Excel to shrink
   *  it to fit if this text is too long?
   */
  getShrinkToFit(): boolean;
}
