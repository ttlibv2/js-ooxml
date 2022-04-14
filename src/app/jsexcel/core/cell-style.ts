import {short} from './types';

export interface CellStyle {
  /** Clones all the style information from another CellStyle, onto this one. */
  cloneStyleFrom(CellStyle source):void;

/** get the type of horizontal alignment for the cell */
getAlignment():HorizontalAlignment;

/** get the type of border to use for the bottom border of the cell */
getBorderBottom():BorderStyle;

/** get the type of border to use for the left border of the cell */
getBorderLeft():BorderStyle;

/** get the type of border to use for the right border of the cell */
getBorderRight():BorderStyle;

/** get the type of border to use for the top border of the cell */
getBorderTop():BorderStyle;

/** get the color to use for the left border */
getBottomBorderColor():short;

/** get the index of the data format. */
getDataFormat():short;

/** Get the format string */
getDataFormatString():java.lang.String;

/** get the background fill color, if the fill is defined with an indexed color. */
getFillBackgroundColor():short;

/** Gets the color object representing the current background fill, resolving indexes using the supplied workbook. */
getFillBackgroundColorColor():Color;

/** get the foreground fill color, if the fill is defined with an indexed color. */
getFillForegroundColor():short;

/** Gets the color object representing the current foreground fill, resolving indexes using the supplied workbook. */
getFillForegroundColorColor():Color;

/** Get the fill pattern */
getFillPattern():FillPatternType;

/** gets the index of the font for this style */
getFontIndexAsInt():int;

/** get whether the cell's using this style are to be hidden */
getHidden():boolean;

/** get the number of spaces to indent the text in the cell */
getIndention():short;

/** get the index within the Workbook (sequence within the collection of ExtnededFormat objects) */
getIndex():short;

/** get the color to use for the left border */
getLeftBorderColor():short;

/** get whether the cell's using this style are to be locked */
getLocked():boolean;

/** Is "Quote Prefix" or "123 Prefix" enabled for the cell? Having this on is somewhat (but not completely, see IgnoredErrorType) like prefixing the cell value with a ' in Excel */getQuotePrefixed():boolean;

/** get the color to use for the left border */
getRightBorderColor():short;

/** get the degree of rotation for the text in the cell. */
getRotation():short;

/** Should the Cell be auto-sized by Excel to shrink it to fit if this text is too long? */getShrinkToFit():boolean;

/** get the color to use for the top border */
getTopBorderColor():short;

/** get the type of vertical alignment for the cell */
getVerticalAlignment():VerticalAlignment;

/** get whether the text should be wrapped */
getWrapText():boolean;

/** set the type of horizontal alignment for the cell */
setAlignment(HorizontalAlignment align):void;

/** set the type of border to use for the bottom border of the cell */
setBorderBottom(BorderStyle border):void;

/** set the type of border to use for the left border of the cell */
setBorderLeft(BorderStyle border):void;

/** set the type of border to use for the right border of the cell */
setBorderRight(BorderStyle border):void;

/** set the type of border to use for the top border of the cell */
setBorderTop(BorderStyle border):void;

/** set the color to use for the bottom border */
setBottomBorderColor(short color):void;

/** set the data format (must be a valid format). */
setDataFormat(short fmt):void;

/** set the background fill color. */
setFillBackgroundColor(short bg):void;

/** set the foreground fill color Note: Ensure Foreground color is set prior to background color. */
setFillForegroundColor(short bg):void;

/** setting to one fills the cell with the foreground color... */
setFillPattern(FillPatternType fp):void;

/** set the font for this style */
setFont(Font font):void;

/** set the cell's using this style to be hidden */
setHidden(boolean hidden):void;

/** set the number of spaces to indent the text in the cell */
setIndention(short indent):void;

/** set the color to use for the left border */
setLeftBorderColor(short color):void;

/** set the cell's using this style to be locked */
setLocked(boolean locked):void;

/** Turn on or off "Quote Prefix" or "123 Prefix" for the style, which is used to tell Excel that the thing which looks like a number or a formula shouldn't be treated as on. */setQuotePrefixed(boolean quotePrefix):void;

/** set the color to use for the right border */
setRightBorderColor(short color):void;

/** set the degree of rotation for the text in the cell. */
setRotation(short rotation):void;

/** Controls if the Cell should be auto-sized to shrink to fit if the text is too long */
setShrinkToFit(boolean shrinkToFit):void;

/** set the color to use for the top border */
setTopBorderColor(short color):void;

/** set the type of vertical alignment for the cell */
setVerticalAlignment(VerticalAlignment align):void;

/** Set whether the text should be wrapped. */
setWrapText(boolean wrapped):void;

}
