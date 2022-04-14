import { byte, short, int } from "./types";

export interface Font {
  getBold(): boolean;
  /** get character-set to use. */

  getCharSet(): int;

  /** get the color for the font */

  getColor(): short;

  /** Get the font height in unit's of 1/20th of a point. */

  getFontHeight(): number;

  /** Get the font height in points. */

  getFontHeightInPoints(): number;

  /** get the name for the font (i.e. */

  getFontName(): string;

  /** Deprecated.  */

  getIndex(): number;
  /** use getIndexAsInt() instead */

  /** get the index within the XSSFWorkbook (sequence within the collection of Font objects) */

  getIndexAsInt(): number;

  /** get whether to use italics or not */
  getItalic(): boolean;

  /** get whether to use a strikeout horizontal line through the text or not */

  getStrikeout(): boolean;

  /** get normal,super or subscript. */

  getTypeOffset(): number;

  /** get type of text underlining to use */
  getUnderline(): byte;

  setBold(bold: boolean): void;

  /** set character-set to use. */

  setCharSet(charset: byte): void;

  /** set character-set to use. */
  setCharSet(charset: int): void;

  /** set the color for the font */

  setColor(color: short): void;

  /** set the font height in unit's of 1/20th of a point. */
  setFontHeight(height: short): void;

  /** set the font height */

  setFontHeightInPoints(height: short): void;

  /** set the name for the font (i.e. */

  setFontName(name: string): void;

  /** set whether to use italics or not */

  setItalic(italic: boolean): void;

  /** set whether to use a strikeout horizontal line through the text or not */

  setStrikeout(strikeout: boolean): void;

  /** set normal,super or subscript. */

  setTypeOffset(offset: short): void;

  /** set type of text underlining to use */

  setUnderline(underline: byte): void;
}
