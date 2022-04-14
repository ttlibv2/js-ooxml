export enum VerticalAlignment {
  //The vertical alignment is aligned-to-bottom.
  BOTTOM,

  // The vertical alignment is centered across the height of the cell.
  CENTER,

  //When text direction is horizontal: the vertical alignment of lines of text is distributed vertically, where each line of text inside the cell is evenly distributed across the height of the cell, with flush top
  DISTRIBUTED,

  //When text direction is horizontal: the vertical alignment of lines of text is distributed vertically, where each line of text inside the cell is evenly distributed across the height of the cell, with flush top and bottom margins.
  JUSTIFY,

  //The vertical alignment is aligned-to-top.
  TOP
}

export enum HorizontalAlignment {
  // The horizontal alignment is centered, meaning the text is centered across the cell.
  CENTER,

  // The horizontal alignment is centered across multiple cells.
  CENTER_SELECTION,

  // Indicates that each 'word' in each line of text inside the cell is evenly distributed across the width of the cell, with flush right and left margins.
  DISTRIBUTED,

  // Indicates that the value of the cell should be filled across the entire width of the cell.
  FILL,

  // The horizontal alignment is general-aligned.
  GENERAL,

  // The horizontal alignment is justified (flush left and right).
  JUSTIFY,

  // The horizontal alignment is left-aligned, even in Rightto-Left mode.
  LEFT,

  // The horizontal alignment is right-aligned, meaning that cell contents are aligned at the right edge of the cell, even in Right-to-Left mode.
  RIGHT
}
