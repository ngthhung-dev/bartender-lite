# BARTENDER LITE v1.0 — USER GUIDE
### Design & print free labels

---

## TABLE OF CONTENTS

1. [Overview](#1-overview)
2. [Interface Overview](#2-interface-overview)
3. [Changing the Interface Language](#3-changing-the-interface-language)
4. [Setting the Label Size and Paper Size](#4-setting-the-label-size-and-paper-size)
5. [Adding and Editing Design Elements](#5-adding-and-editing-design-elements)
6. [Importing Excel Data and Column Mapping](#6-importing-excel-data-and-column-mapping)
7. [Preview and Print Range](#7-preview-and-print-range)
8. [Saving and Opening a Template](#8-saving-and-opening-a-template)
9. [Printing and Exporting to PDF](#9-printing-and-exporting-to-pdf)
10. [Troubleshooting](#10-troubleshooting)

---

## 1. OVERVIEW

**Bartender Lite** is a free application that lets you design and print your own labels (barcodes, QR codes, product information...) directly on your computer. It supports bulk data import from an Excel file and direct printing to a dedicated label printer (such as a TSC printer) or any other printer.

**Key features:**
- Freely design labels with text, Excel data fields, barcodes, QR codes, shapes and images.
- Automatically calculates the total paper size from the label size and the number of rows/columns.
- Bulk mail-merge printing from Excel data.
- Print directly or export a PDF at the exact paper size.
- Multi-language interface: Vietnamese, English, Simplified Chinese, Korean, Japanese.

---

## 2. INTERFACE OVERVIEW

The app's interface has 4 main areas:

| Area | Location | Function |
|---|---|---|
| **Top toolbar** | Top of the window | Logo, language selector, Open/Save template, import Excel data, preview, print range, copies, printer selection, Print, Export PDF, Clear All |
| **Left panel** | Left side | Add design elements, list of imported Excel columns, print settings (label size, grid, paper size) |
| **Design canvas** | Center | Where you drag, drop and arrange elements on the label |
| **Right panel** | Right side | Detailed properties of the currently selected element (size, position, formatting...) |

The two small blue pill-shaped buttons on either side of the canvas **show/hide** the left and right panels, giving you extra working space when needed.

At the bottom-right of the canvas there is a **zoom** toolbar to zoom in/out, plus a "Fit" button to automatically fit the canvas to the screen.

---

## 3. CHANGING THE INTERFACE LANGUAGE

Right next to the logo and app name in the top-left corner is a language selector. Click it and choose:

- 🇻🇳 Tiếng Việt (default)
- en English
- 🇨🇳 简体中文
- 🇰🇷 한국어
- 🇯🇵 日本語

The entire interface (buttons, labels, messages) switches instantly. Your language choice is **automatically remembered** the next time you open the app.

---

## 4. SETTING THE LABEL SIZE AND PAPER SIZE

Found in the **"Print Settings"** section at the bottom of the left panel:

### 4.1. Unit
Choose your working unit: **Millimeters (mm)**, **Inches (in)** or **Pixels (px)**.

### 4.2. Preset Size
Quickly pick a common label size (35x22mm, 70x100mm, 80x40mm, 100x50mm, 100x75mm) or choose **"Custom"** to enter your own dimensions.

### 4.3. Width x Height (1 label)
Enter the size of **a single label** — this is the actual size of the design canvas in the middle of the screen.

### 4.4. Grid (Rows x Cols)
- **Rows**: number of labels stacked vertically on one printed page.
- **Columns**: number of labels arranged horizontally on one printed page (i.e. how many labels sit across one row of the roll/sheet you're using).

> ⚠️ **Important:** If your label roll has 3 labels per row, enter **Columns = 3**. Entering the wrong number of columns will cause labels to print in the wrong position on the paper.

### 4.5. Total Paper Size (W x H)
This field is **automatically calculated** = (Label width × Columns) × (Label height × Rows) — it cannot be edited manually. This is the actual paper size used when printing or exporting to PDF.

**Example:** A 35x22mm label on a roll with 3 labels per row → enter Columns = 3, Rows = 1 → the Total Paper Size is automatically calculated as 105 x 22mm.

---

## 5. ADDING AND EDITING DESIGN ELEMENTS

In the **"Add Element"** section (top of the left panel), click the type of element you want to add:

| Element | Description |
|---|---|
| 🔤 **Text** | Free-form text with fixed content that you type yourself |
| 🗄️ **Excel Field** | A text box whose content is automatically pulled from a column in the imported Excel file |
| \|\|\|\| **Barcode** | A barcode in various supported formats |
| ▦ **QR Code** | A QR code |
| ▢ **Shape** | A decorative rectangle/box outline |
| 🖼️ **Insert Image** | Insert a logo or a PNG, JPG, SVG image |

### 5.1. Working with elements on the canvas
- **Move:** Drag with the mouse, or use the arrow keys (↑↓←→) while the element is selected. Hold **Shift** + arrow key to move faster (10px steps).
- **Resize:** Drag the small blue squares at the 4 corners/4 edges of the selected element.
- **Rotate:** Drag the blue dot above the element, or use the "Rotation (°)" / "Custom Angle" field in the right panel.
- **Duplicate:** Select the element then press **Ctrl+C** then **Ctrl+V**, or click the "Duplicate" button in the right panel.
- **Delete one element:** Select it then click "Delete this element" in the right panel, or press **Delete**.
- **Clear the entire design:** Click the red **"Clear All"** button on the toolbar.

> 💡 Elements are always constrained so they cannot be dragged/moved outside the design area (the label boundary).

### 5.2. Common properties (right panel)
When an element is selected, the right panel shows:
- **Align to Page:** align left/center/right, top/center/bottom relative to the label.
- **Size & Position (px):** Width, Height, X Position, Y Position, Rotation angle.

### 5.3. Type-specific formatting

**Text / Excel Field:**
- *Excel Column Mapping* (Excel Field only): select the corresponding Excel column, add a Prefix/Suffix (e.g. "SKU: " + value + " USD").
- Fixed content, Font size, Font weight (Normal/Bold), Text alignment (left/center/right).

**Barcode:**
- Barcode type (CODE128, EAN13...), toggle showing the number below the barcode, text spacing, font size, font weight.
- Can be mapped to an Excel column so each label prints a different barcode based on the data.

**QR Code:**
- Similar to Barcode: toggle showing text below, text spacing, can be mapped to an Excel column.

**Insert Image:**
- The image automatically keeps its original aspect ratio when its container is resized, without stretching or distortion.

---

## 6. IMPORTING EXCEL DATA AND COLUMN MAPPING

### 6.1. Importing a data file
Click the green **"Import Data (.xls, .xlsx, .csv)"** button on the toolbar and select an Excel/CSV file containing your data list (each row is one label, each column is one type of information, e.g. Full Name, Position, Department...).

Once imported successfully, the **"Excel Data Columns"** section in the left panel will show the list of column names, along with the number of data rows read.

### 6.2. Mapping a column to an element
There are 2 ways:
1. **Quick way:** With no element selected on the canvas, click directly on a column name in the left panel → the app automatically creates a new "Excel Field" element mapped to that column.
2. **Precise way:** Select an existing element (Text/Excel Field/Barcode/QR Code) on the canvas → the right panel shows the **"Excel Column Mapping"** box (yellow background) → click a column name in the left panel to map it to the selected element, or pick it directly from the "Select the corresponding Excel column" dropdown.

### 6.3. Clearing Excel data
Click the small trash-can icon next to the import button to clear all imported Excel data (this does not affect your label design).

> 💡 **Note:** If no element is mapped to an Excel column, even with data imported, the app will only print the number entered in "Copies" (it will not multiply by the number of data rows), since every label's content would be identical.

---

## 7. PREVIEW AND PRINT RANGE

These two sections only appear when you have **imported Excel data AND have at least one element mapped** to that data.

- **Preview:** Use the left/right arrow buttons to browse through each data row and preview how the corresponding label will look.
- **Print range:**
  - *All:* prints every data row.
  - *First page (Row 1):* prints only the first data row.
  - *Custom:* enter a "From row... To row..." range to print.

---

## 8. SAVING AND OPENING A TEMPLATE

- **Save Template:** Click the purple **"Save Template"** button to save your entire current design (position, size, formatting of all elements, paper size settings...) as a `.json` file on your computer. Use this to keep a finished label design, share it with someone else, or reuse it later.
- **Open Template:** Click the dark **"Open Template"** button and select a previously saved `.json` file to load the exact same design back.

> Note: a template file **does not save the imported Excel data** — after opening a template, you'll need to re-import the Excel file if the design uses data mapping.

---

## 9. PRINTING AND EXPORTING TO PDF

### 9.1. Printing directly
1. Carefully check the **"Print Settings"** section (label size, Grid Rows x Cols) matches the actual roll/sheet loaded in your printer.
2. Enter the **"Copies"** value (the number of labels to print if not using Excel data, or the number of copies per data row if mapping is used).
3. Select the correct **printer** from the dropdown next to the Print button (the app automatically lists the printers installed on your computer).
4. Click the blue **"Print"** button.

### 9.2. Exporting a PDF
If direct printing results in the wrong paper size or misaligned position (usually caused by the printer driver), use the green **"Export PDF"** button — the app will generate a PDF at the **exact** designed paper size. Open that file with Adobe Reader/Foxit Reader to print, making sure to select **"Actual size / 100%"** printing, not "Fit to page".

---

## 10. TROUBLESHOOTING

| Issue | Cause & Fix |
|---|---|
| Printed labels are misaligned, or the number of labels per row is wrong | Check that the **Columns** value in "Grid (Rows x Cols)" exactly matches the actual number of labels per row on your physical paper |
| Only 1 label prints even though Copies is set higher | Check that the correct printer is selected; try **Export PDF** and print manually via Adobe/Foxit Reader (Actual size 100%) |
| The app prints to the default printer instead of the one selected | Update to the latest version — the app now automatically switches the printer when you choose one from the dropdown |
| Vietnamese diacritics look broken/clipped when printing or exporting to PDF | Fixed in recent updates — make sure you're using the latest version |
| Imported Excel data but "Preview"/"Print range" don't appear | You need at least one element **mapped** to an Excel column for these sections to appear |
| QR code / barcode looks blurry when printed | Increase the Width/Height of the QR code/barcode element in the right panel |

---

*Thank you for using Bartender Lite!*
