import { byte, short, int } from "./types";

export interface Font {
  /**
   * set the font height in unit's of 1/20th of a point.  Maybe you might want to
   * use the setFontHeightInPoints which matches to the familiar 10, 12, 14 etc..
   * @param height height in 1/20ths of a point
   * @see #setFontHeightInPoints(short)
   */
  setFontHeight(height: short): void;

  /**
   * set the font height
   * @param height height in the familiar unit of measure - points
   * @see #setFontHeight(short)
   */
  setFontHeightInPoints(height: short): void;

  /**
     * Get the font height in unit's of 1/20th of a point.
     * <p>
     * For many users, the related {@link #getFontHeightInPoints()}
     *  will be more helpful, as that returns font heights in the
     *  more familiar points units, eg 10, 12, 14.

     * @return short - height in 1/20ths of a point
     * @see #getFontHeightInPoints()
     */
  getFontHeight(): short;

  /**
   * Get the font height in points.
   * <p>
   * This will return the same font height that is shown in Excel,
   *  such as 10 or 14 or 28.
   * @return short - height in the familiar unit of measure - points
   * @see #getFontHeight()
   */
  getFontHeightInPoints(): short;

  /**
   * set whether to use italics or not
   * @param italic italics or not
   */
  setItalic(italic: boolean): void;

  /**
   * get whether to use italics or not
   * @return italics or not
   */
  getItalic(): boolean;

  /**
   * set whether to use a strikeout horizontal line through the text or not
   * @param strikeout or not
   */
  setStrikeout(strikeout: boolean): void;

  /**
   * get whether to use a strikeout horizontal line through the text or not
   * @return strikeout or not
   */
  getStrikeout(): boolean;

  /**
   * set the color for the font
   * @param color to use
   * @see #COLOR_NORMAL Note: Use this rather than HSSFColor.AUTOMATIC for default font color
   * @see #COLOR_RED
   */
  setColor(color: short): void;

  /**
   * get the color for the font
   * @return color to use
   * @see #COLOR_NORMAL
   * @see #COLOR_RED
   * @see org.apache.poi.hssf.usermodel.HSSFPalette#getColor(short)
   */
  getColor(): short;

  /**
   * set normal,super or subscript.
   * @param offset type to use (none,super,sub)
   * @see #SS_NONE
   * @see #SS_SUPER
   * @see #SS_SUB
   */
  setTypeOffset(offset: short): void;

  /**
   * get normal,super or subscript.
   * @return offset type to use (none,super,sub)
   * @see #SS_NONE
   * @see #SS_SUPER
   * @see #SS_SUB
   */
  getTypeOffset(): short;

  /**
   * set type of text underlining to use
   * @param underline type
   * @see #U_NONE
   * @see #U_SINGLE
   * @see #U_DOUBLE
   * @see #U_SINGLE_ACCOUNTING
   * @see #U_DOUBLE_ACCOUNTING
   */
  setUnderline(underline: byte): void;

  /**
   * get type of text underlining to use
   * @return underlining type
   * @see #U_NONE
   * @see #U_SINGLE
   * @see #U_DOUBLE
   * @see #U_SINGLE_ACCOUNTING
   * @see #U_DOUBLE_ACCOUNTING
   */
  getUnderline(): byte;

  /**
   * get character-set to use.
   * @return character-set
   * @see #ANSI_CHARSET
   * @see #DEFAULT_CHARSET
   * @see #SYMBOL_CHARSET
   */
  getCharSet(): int;

  /**
   * set character-set to use.
   * @see #ANSI_CHARSET
   * @see #DEFAULT_CHARSET
   * @see #SYMBOL_CHARSET
   */
  setCharSet(charset: byte): void;

  /**
   * set character-set to use.
   * @see #ANSI_CHARSET
   * @see #DEFAULT_CHARSET
   * @see #SYMBOL_CHARSET
   */
  setCharSet(charset: int): void;

  /**
   * get the index within the XSSFWorkbook (sequence within the collection of Font objects)
   *
   * @return unique index number of the underlying record this Font represents (probably you don't care
   *  unless you're comparing which one is which)
   * @since 5.0.0 (used to return a short)
   */
  getIndex(): int;

  setBold(bold: boolean): void;

  getBold(): boolean;
}
