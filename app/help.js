/* Menu Tro giup: Thong tin / Huong dan su dung / Phim tat (5 ngon ngu).
   Noi dung tu doi theo ngon ngu giao dien hien tai (bien toan cuc currentLang). */
(function () {
  'use strict';

  var APP_VERSION = '1.0.0';
  var AUTHOR = 'ngthhung';
  var MOD = /Mac|iPhone|iPad/.test(navigator.platform || '') ? '⌘' : 'Ctrl';

  var L = {
    vi: {
      help: 'Trợ giúp', about: 'Thông tin', guide: 'Hướng dẫn sử dụng', keys: 'Phím tắt', close: 'Đóng',
      version: 'Phiên bản', author: 'Tác giả', free: 'Ứng dụng miễn phí',
      desc: 'Bartender Lite giúp bạn thiết kế và in tem nhãn (mã vạch, mã QR, thông tin sản phẩm…), nạp dữ liệu hàng loạt từ Excel và in trực tiếp hoặc xuất PDF đúng khổ giấy.',
      features: ['Thiết kế tự do: văn bản, trường Excel, mã vạch, mã QR, khung hình, hình ảnh', 'Nạp Excel/CSV và mapping cột để in hàng loạt', 'In trực tiếp ra máy in hoặc xuất PDF đúng kích thước', 'Giao diện 5 ngôn ngữ: Tiếng Việt, English, 简体中文, 한국어, 日本語'],
      guideSections: [
        ['1. Thiết lập kích thước tem', ['Ở panel trái, mục "Cài đặt in ấn": chọn đơn vị (mm/in/px), loại mẫu sẵn hoặc "Tùy chỉnh".', 'Nhập Rộng x Cao của 1 tem, và Lưới (Dòng x Cột) đúng số tem trên 1 hàng cuộn giấy.', 'Tổng khổ giấy tự động tính, không nhập tay.']],
        ['2. Thêm và chỉnh phần tử', ['Mục "Thêm phần tử": Văn bản, Trường Excel, Mã vạch, Mã QR, Khung hình, Chèn ảnh.', 'Kéo thả để di chuyển; kéo ô vuông ở góc/cạnh để đổi kích thước; kéo chấm tròn phía trên để xoay.', 'Thuộc tính chi tiết (cỡ chữ, loại mã vạch, căn lề…) nằm ở panel phải.']],
        ['3. Nạp Excel và mapping cột', ['Bấm nút "Nạp dữ liệu (.xls, .xlsx, .csv)": mỗi dòng là 1 tem, mỗi cột là 1 loại thông tin.', 'Không chọn phần tử nào rồi bấm tên cột ở panel trái để tạo nhanh một Trường Excel.', 'Hoặc chọn phần tử rồi bấm tên cột để gán (mapping) vào phần tử đó.', 'Bấm biểu tượng thùng rác cạnh nút nạp để xóa dữ liệu đã nạp.']],
        ['4. Xem trước và phạm vi in', ['Chỉ hiện khi đã nạp Excel và có ít nhất 1 phần tử mapping.', 'Dùng mũi tên trái/phải để duyệt từng dòng dữ liệu.', 'Phạm vi in: Tất cả, Trang đầu, hoặc Tùy chọn (từ dòng… đến dòng…).']],
        ['5. Lưu và mở mẫu', ['"Lưu mẫu" lưu thiết kế thành file .json; "Mở mẫu" tải lại thiết kế đó.', 'File mẫu không kèm dữ liệu Excel, cần nạp lại Excel sau khi mở mẫu.']],
        ['6. In tem và xuất PDF', ['Kiểm tra kích thước tem và Lưới khớp với cuộn giấy, nhập "Số bản in", chọn máy in rồi bấm "In tem".', 'Nếu in bị lệch khổ, bấm "Xuất PDF" rồi in file PDF bằng Adobe/Foxit với chế độ Kích thước thực 100% (Actual size).']],
        ['7. Gặp sự cố?', ['In lệch số tem/hàng: kiểm tra lại số Cột trong Lưới.', 'Mã QR/mã vạch bị mờ: tăng Rộng/Cao của phần tử.', 'Không thấy Xem trước/Phạm vi in: cần ít nhất 1 phần tử mapping với cột Excel.']]
      ],
      keyRows: [[MOD + ' + Z', 'Hoàn tác'], [MOD + ' + Y', 'Làm lại'], [MOD + ' + C', 'Sao chép phần tử đang chọn'], [MOD + ' + V', 'Dán phần tử'], ['Delete / Backspace', 'Xóa phần tử đang chọn'], ['← ↑ → ↓', 'Di chuyển phần tử 1 px'], ['Shift + ← ↑ → ↓', 'Di chuyển phần tử 10 px'], [MOD + ' + cuộn chuột', 'Phóng to / thu nhỏ khung thiết kế'], ['Esc', 'Đóng hộp thoại này']],
      keyNote: 'Phím tắt không hoạt động khi đang gõ trong ô nhập liệu.'
    },
    en: {
      help: 'Help', about: 'About', guide: 'User guide', keys: 'Keyboard shortcuts', close: 'Close',
      version: 'Version', author: 'Author', free: 'Free application',
      desc: 'Bartender Lite lets you design and print labels (barcodes, QR codes, product info…), import bulk data from Excel, and print directly or export a PDF at the exact paper size.',
      features: ['Free-form design: text, Excel fields, barcodes, QR codes, shapes, images', 'Import Excel/CSV and map columns for bulk printing', 'Print directly to a printer or export a PDF at exact size', '5 UI languages: Tiếng Việt, English, 简体中文, 한국어, 日本語'],
      guideSections: [
        ['1. Set the label size', ['In the left panel, "Print Settings": choose a unit (mm/in/px), a preset size or "Custom".', 'Enter the Width x Height of one label, and the Grid (Rows x Columns) matching the number of labels per row on your roll.', 'The total paper size is calculated automatically.']],
        ['2. Add and edit elements', ['"Add Element": Text, Excel field, Barcode, QR code, Shape, Image.', 'Drag to move; drag the corner/edge squares to resize; drag the round handle on top to rotate.', 'Detailed properties (font size, barcode type, alignment…) are in the right panel.']],
        ['3. Import Excel and map columns', ['Click "Import Data (.xls, .xlsx, .csv)": each row is one label, each column is one kind of information.', 'With nothing selected, click a column name in the left panel to quickly create an Excel field.', 'Or select an element, then click a column name to map it to that element.', 'Click the trash icon next to the load button to clear the loaded data.']],
        ['4. Preview and print range', ['Shown only after Excel is loaded and at least one element is mapped.', 'Use the left/right arrows to browse each data row.', 'Print range: All, First page, or Custom (from row… to row…).']],
        ['5. Save and open templates', ['"Save Template" stores the design as a .json file; "Open Template" loads it again.', 'A template does not include the Excel data; reload the Excel file after opening it.']],
        ['6. Print and export PDF', ['Check that label size and Grid match your roll, enter "Copies", choose a printer, then click "Print".', 'If the print is misaligned, click "Export PDF" and print the PDF with Adobe/Foxit at Actual size (100%).']],
        ['7. Troubleshooting', ['Wrong number of labels per row: check the Columns value in the Grid.', 'Blurry QR/barcode: increase the element Width/Height.', 'No Preview/Print range: at least one element must be mapped to an Excel column.']]
      ],
      keyRows: [[MOD + ' + Z', 'Undo'], [MOD + ' + Y', 'Redo'], [MOD + ' + C', 'Copy selected element'], [MOD + ' + V', 'Paste element'], ['Delete / Backspace', 'Delete selected element'], ['← ↑ → ↓', 'Move element by 1 px'], ['Shift + ← ↑ → ↓', 'Move element by 10 px'], [MOD + ' + mouse wheel', 'Zoom the design area'], ['Esc', 'Close this dialog']],
      keyNote: 'Shortcuts are disabled while typing in an input field.'
    },
    zh: {
      help: '帮助', about: '关于', guide: '使用指南', keys: '快捷键', close: '关闭',
      version: '版本', author: '作者', free: '免费应用',
      desc: 'Bartender Lite 可帮助您设计和打印标签（条形码、二维码、产品信息等），从 Excel 批量导入数据，并可直接打印或按精确纸张尺寸导出 PDF。',
      features: ['自由设计：文本、Excel 字段、条形码、二维码、形状、图片', '导入 Excel/CSV 并映射列以批量打印', '直接打印或按精确尺寸导出 PDF', '5 种界面语言：Tiếng Việt、English、简体中文、한국어、日本語'],
      guideSections: [
        ['1. 设置标签尺寸', ['在左侧面板的“打印设置”中：选择单位（mm/in/px）、预设尺寸或“自定义”。', '输入单个标签的宽 x 高，以及与纸卷每排标签数一致的网格（行 x 列）。', '纸张总尺寸自动计算，无需手动输入。']],
        ['2. 添加和编辑元素', ['“添加元素”：文本、Excel 字段、条形码、二维码、形状、插入图片。', '拖动可移动；拖动角/边的方块可调整大小；拖动上方圆点可旋转。', '详细属性（字号、条码类型、对齐等）位于右侧面板。']],
        ['3. 导入 Excel 并映射列', ['点击“导入数据 (.xls, .xlsx, .csv)”：每行对应一个标签，每列对应一类信息。', '未选中任何元素时，点击左侧面板的列名可快速创建 Excel 字段。', '或先选中元素，再点击列名将其映射到该元素。', '点击加载按钮旁的垃圾桶图标可清除已加载的数据。']],
        ['4. 预览与打印范围', ['仅在已加载 Excel 且至少有一个元素已映射时显示。', '使用左右箭头逐行浏览数据。', '打印范围：全部、首页，或自定义（从第…行到第…行）。']],
        ['5. 保存和打开模板', ['“保存模板”将设计保存为 .json 文件；“打开模板”可重新加载。', '模板不包含 Excel 数据，打开后需重新加载 Excel。']],
        ['6. 打印与导出 PDF', ['确认标签尺寸和网格与纸卷一致，输入“打印份数”，选择打印机，然后点击“打印标签”。', '如果打印错位，请点击“导出 PDF”，并用 Adobe/Foxit 以实际大小（100%）打印。']],
        ['7. 常见问题', ['每排标签数不对：检查网格中的“列”数。', '二维码/条码模糊：增大元素的宽/高。', '看不到预览/打印范围：至少需要一个元素映射到 Excel 列。']]
      ],
      keyRows: [[MOD + ' + Z', '撤销'], [MOD + ' + Y', '重做'], [MOD + ' + C', '复制所选元素'], [MOD + ' + V', '粘贴元素'], ['Delete / Backspace', '删除所选元素'], ['← ↑ → ↓', '移动元素 1 px'], ['Shift + ← ↑ → ↓', '移动元素 10 px'], [MOD + ' + 鼠标滚轮', '缩放设计区域'], ['Esc', '关闭此对话框']],
      keyNote: '在输入框中输入时，快捷键不起作用。'
    },
    ko: {
      help: '도움말', about: '정보', guide: '사용 설명서', keys: '단축키', close: '닫기',
      version: '버전', author: '제작자', free: '무료 애플리케이션',
      desc: 'Bartender Lite로 라벨(바코드, QR 코드, 제품 정보 등)을 디자인하고 인쇄할 수 있으며, Excel 데이터를 일괄 불러와 바로 인쇄하거나 정확한 용지 크기의 PDF로 내보낼 수 있습니다.',
      features: ['자유 디자인: 텍스트, Excel 필드, 바코드, QR 코드, 도형, 이미지', 'Excel/CSV 불러오기 및 열 매핑으로 일괄 인쇄', '프린터로 바로 인쇄하거나 정확한 크기의 PDF 내보내기', '5개 UI 언어: Tiếng Việt, English, 简体中文, 한국어, 日本語'],
      guideSections: [
        ['1. 라벨 크기 설정', ['왼쪽 패널의 "인쇄 설정"에서 단위(mm/in/px), 기본 크기 또는 "사용자 지정"을 선택하세요.', '라벨 1개의 가로 x 세로와, 롤의 한 줄당 라벨 수에 맞는 그리드(행 x 열)를 입력하세요.', '전체 용지 크기는 자동으로 계산됩니다.']],
        ['2. 요소 추가 및 편집', ['"요소 추가": 텍스트, Excel 필드, 바코드, QR 코드, 도형, 이미지 삽입.', '드래그하여 이동, 모서리/가장자리 사각형을 드래그하여 크기 조절, 위쪽 원형 핸들을 드래그하여 회전합니다.', '글꼴 크기, 바코드 종류, 정렬 등 세부 속성은 오른쪽 패널에 있습니다.']],
        ['3. Excel 불러오기 및 열 매핑', ['"데이터 가져오기 (.xls, .xlsx, .csv)"를 누르세요. 각 행이 라벨 1개, 각 열이 정보 종류 하나입니다.', '아무 요소도 선택하지 않고 왼쪽 패널의 열 이름을 누르면 Excel 필드가 바로 생성됩니다.', '또는 요소를 선택한 뒤 열 이름을 눌러 해당 요소에 매핑합니다.', '가져오기 버튼 옆 휴지통 아이콘으로 불러온 데이터를 지웁니다.']],
        ['4. 미리보기 및 인쇄 범위', ['Excel을 불러오고 매핑된 요소가 1개 이상일 때만 표시됩니다.', '좌/우 화살표로 데이터 행을 하나씩 확인합니다.', '인쇄 범위: 전체, 첫 페이지 또는 사용자 지정(…행부터 …행까지).']],
        ['5. 템플릿 저장 및 열기', ['"템플릿 저장"은 디자인을 .json 파일로 저장하고, "템플릿 열기"로 다시 불러옵니다.', '템플릿에는 Excel 데이터가 포함되지 않으므로 열기 후 Excel을 다시 불러오세요.']],
        ['6. 인쇄 및 PDF 내보내기', ['라벨 크기와 그리드가 롤과 맞는지 확인하고 "인쇄 매수"를 입력한 뒤 프린터를 선택하고 "라벨 인쇄"를 누르세요.', '인쇄 위치가 어긋나면 "PDF 내보내기" 후 Adobe/Foxit에서 실제 크기(100%)로 인쇄하세요.']],
        ['7. 문제 해결', ['한 줄당 라벨 수가 맞지 않음: 그리드의 열 수를 확인하세요.', 'QR/바코드가 흐림: 요소의 가로/세로 크기를 키우세요.', '미리보기/인쇄 범위가 안 보임: Excel 열에 매핑된 요소가 1개 이상 필요합니다.']]
      ],
      keyRows: [[MOD + ' + Z', '실행 취소'], [MOD + ' + Y', '다시 실행'], [MOD + ' + C', '선택한 요소 복사'], [MOD + ' + V', '요소 붙여넣기'], ['Delete / Backspace', '선택한 요소 삭제'], ['← ↑ → ↓', '요소를 1 px 이동'], ['Shift + ← ↑ → ↓', '요소를 10 px 이동'], [MOD + ' + 마우스 휠', '디자인 영역 확대/축소'], ['Esc', '이 대화상자 닫기']],
      keyNote: '입력란에 입력하는 중에는 단축키가 동작하지 않습니다.'
    },
    ja: {
      help: 'ヘルプ', about: '情報', guide: '使い方', keys: 'ショートカットキー', close: '閉じる',
      version: 'バージョン', author: '作者', free: '無料アプリケーション',
      desc: 'Bartender Lite は、ラベル（バーコード、QR コード、商品情報など）のデザインと印刷、Excel からの一括データ取り込み、直接印刷や正確な用紙サイズでの PDF 出力ができるアプリです。',
      features: ['自由なデザイン：テキスト、Excel フィールド、バーコード、QR コード、図形、画像', 'Excel/CSV を読み込み、列をマッピングして一括印刷', 'プリンターへ直接印刷、または正確なサイズで PDF 出力', '5 つの表示言語：Tiếng Việt、English、简体中文、한국어、日本語'],
      guideSections: [
        ['1. ラベルサイズの設定', ['左パネルの「印刷設定」で、単位（mm/in/px）、プリセットサイズまたは「カスタム」を選びます。', 'ラベル 1 枚の幅 x 高さと、ロールの 1 列あたりのラベル数に合わせたグリッド（行 x 列）を入力します。', '用紙の合計サイズは自動計算されます。']],
        ['2. 要素の追加と編集', ['「要素を追加」：テキスト、Excel フィールド、バーコード、QR コード、図形、画像の挿入。', 'ドラッグで移動、四隅/辺の四角をドラッグでサイズ変更、上の丸いハンドルをドラッグで回転します。', 'フォントサイズ、バーコード種類、配置などの詳細は右パネルにあります。']],
        ['3. Excel の読み込みと列マッピング', ['「データ取込み (.xls, .xlsx, .csv)」を押します。1 行が 1 枚のラベル、1 列が 1 種類の情報です。', '何も選択せずに左パネルの列名を押すと、Excel フィールドがすぐ作成されます。', 'または要素を選択してから列名を押すと、その要素にマッピングされます。', '取込みボタン横のゴミ箱アイコンで読み込んだデータを消去します。']],
        ['4. プレビューと印刷範囲', ['Excel を読み込み、マッピング済みの要素が 1 つ以上ある場合のみ表示されます。', '左右の矢印でデータ行を 1 行ずつ確認できます。', '印刷範囲：すべて、最初のページ、またはカスタム（…行目から…行目まで）。']],
        ['5. テンプレートの保存と開く', ['「テンプレートを保存」でデザインを .json ファイルに保存し、「テンプレートを開く」で再読み込みします。', 'テンプレートには Excel データは含まれないため、開いた後に Excel を再読み込みしてください。']],
        ['6. 印刷と PDF 出力', ['ラベルサイズとグリッドがロールに合っているか確認し、「印刷部数」を入力してプリンターを選び、「ラベル印刷」を押します。', '印刷位置がずれる場合は「PDF 出力」し、Adobe/Foxit で実際のサイズ（100%）で印刷してください。']],
        ['7. トラブルシューティング', ['1 列あたりのラベル数が合わない：グリッドの列数を確認してください。', 'QR/バーコードがぼやける：要素の幅/高さを大きくしてください。', 'プレビュー/印刷範囲が表示されない：Excel の列にマッピングした要素が 1 つ以上必要です。']]
      ],
      keyRows: [[MOD + ' + Z', '元に戻す'], [MOD + ' + Y', 'やり直す'], [MOD + ' + C', '選択中の要素をコピー'], [MOD + ' + V', '要素を貼り付け'], ['Delete / Backspace', '選択中の要素を削除'], ['← ↑ → ↓', '要素を 1 px 移動'], ['Shift + ← ↑ → ↓', '要素を 10 px 移動'], [MOD + ' + マウスホイール', 'デザイン領域の拡大/縮小'], ['Esc', 'このダイアログを閉じる']],
      keyNote: '入力欄に入力中はショートカットは無効です。'
    }
  };

  var CSS = '' +
    '#help-wrap{position:relative;display:inline-block;margin-left:4px}' +
    '#help-btn{width:28px;height:28px;border-radius:6px;background:#1e293b;border:1px solid #334155;color:#fff;cursor:pointer;font-size:13px;display:inline-flex;align-items:center;justify-content:center}' +
    '#help-btn:hover{background:#334155}' +
    '#help-menu{position:absolute;left:0;top:34px;min-width:190px;background:#fff;color:#0f172a;border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,.35);padding:4px;z-index:60;display:none}' +
    '#help-menu.open{display:block}' +
    '#help-menu button{display:flex;align-items:center;gap:8px;width:100%;text-align:left;padding:8px 10px;border:0;background:none;font-size:13px;color:#0f172a;border-radius:6px;cursor:pointer}' +
    '#help-menu button:hover{background:#e2e8f0}' +
    '#help-menu i{width:16px;text-align:center;color:#2563eb}' +
    '#help-overlay{position:fixed;inset:0;background:rgba(15,23,42,.6);z-index:100;display:none;align-items:center;justify-content:center;padding:16px}' +
    '#help-overlay.open{display:flex}' +
    '#help-dialog{background:#fff;color:#0f172a;border-radius:12px;width:min(720px,100%);max-height:86vh;display:flex;flex-direction:column;box-shadow:0 20px 50px rgba(0,0,0,.45)}' +
    '#help-dialog header{display:flex;align-items:center;justify-content:space-between;padding:14px 18px;border-bottom:1px solid #e2e8f0;background:none;color:#0f172a;max-height:none;overflow:visible}' +
    '#help-dialog h2{font-size:16px;font-weight:700;margin:0}' +
    '#help-close{border:0;background:#f1f5f9;border-radius:6px;width:28px;height:28px;cursor:pointer;font-size:14px;color:#334155}' +
    '#help-close:hover{background:#e2e8f0}' +
    '#help-body{padding:16px 20px;overflow:auto;font-size:13.5px;line-height:1.55}' +
    '#help-body h3{font-size:14px;font-weight:700;margin:14px 0 6px;color:#1d4ed8}' +
    '#help-body h3:first-child{margin-top:0}' +
    '#help-body ul{margin:0 0 4px;padding-left:20px;list-style:disc}' +
    '#help-body li{margin:3px 0}' +
    '#help-body table{width:100%;border-collapse:collapse}' +
    '#help-body td{padding:7px 8px;border-bottom:1px solid #e2e8f0;vertical-align:top}' +
    '#help-body td:first-child{white-space:nowrap;width:1%}' +
    '#help-body kbd{background:#f1f5f9;border:1px solid #cbd5e1;border-bottom-width:2px;border-radius:5px;padding:1px 7px;font:600 12px ui-monospace,Consolas,monospace}' +
    '#help-body .meta{display:grid;grid-template-columns:auto 1fr;gap:4px 14px;margin:10px 0}' +
    '#help-body .meta b{color:#475569;font-weight:600}' +
    '#help-body .note{color:#64748b;font-size:12.5px;margin-top:10px}' +
    '#help-footer{padding:10px 18px;border-top:1px solid #e2e8f0;text-align:right}' +
    '#help-footer button{background:#2563eb;color:#fff;border:0;border-radius:6px;padding:7px 18px;font-size:13px;cursor:pointer}' +
    '#help-footer button:hover{background:#1d4ed8}';

  var openKind = null;

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  }
  function lang() {
    var code = (typeof currentLang !== 'undefined' && L[currentLang]) ? currentLang : 'vi';
    return L[code];
  }
  function el(id) { return document.getElementById(id); }

  function bodyHtml(kind, s) {
    var h = '', i;
    if (kind === 'about') {
      h += '<h3>Bartender Lite</h3><p>' + esc(s.desc) + '</p><div class="meta">' +
        '<b>' + esc(s.version) + '</b><span>' + APP_VERSION + '</span>' +
        '<b>' + esc(s.author) + '</b><span>' + AUTHOR + '</span>' +
        '<b>&nbsp;</b><span>' + esc(s.free) + '</span></div><ul>';
      for (i = 0; i < s.features.length; i++) h += '<li>' + esc(s.features[i]) + '</li>';
      h += '</ul>';
    } else if (kind === 'guide') {
      for (i = 0; i < s.guideSections.length; i++) {
        var sec = s.guideSections[i];
        h += '<h3>' + esc(sec[0]) + '</h3><ul>';
        for (var j = 0; j < sec[1].length; j++) h += '<li>' + esc(sec[1][j]) + '</li>';
        h += '</ul>';
      }
    } else {
      h += '<table>';
      for (i = 0; i < s.keyRows.length; i++) {
        var keys = s.keyRows[i][0].split(' + ').map(function (k) { return '<kbd>' + esc(k) + '</kbd>'; }).join(' + ');
        h += '<tr><td>' + keys + '</td><td>' + esc(s.keyRows[i][1]) + '</td></tr>';
      }
      h += '</table><p class="note">' + esc(s.keyNote) + '</p>';
    }
    return h;
  }

  function render() {
    var s = lang();
    var btn = el('help-btn');
    if (btn) { btn.title = s.help; btn.setAttribute('aria-label', s.help); }
    var items = { about: s.about, guide: s.guide, keys: s.keys };
    Object.keys(items).forEach(function (k) {
      var span = document.querySelector('#help-menu [data-help="' + k + '"] span');
      if (span) span.textContent = items[k];
    });
    if (openKind) {
      el('help-title').textContent = items[openKind];
      el('help-body').innerHTML = bodyHtml(openKind, s);
      el('help-footer-btn').textContent = s.close;
    }
  }

  function closeMenu() { var m = el('help-menu'); if (m) m.classList.remove('open'); }
  function openDialog(kind) {
    openKind = kind;
    closeMenu();
    el('help-overlay').classList.add('open');
    render();
    el('help-body').scrollTop = 0;
    el('help-close').focus();
  }
  function closeDialog() {
    openKind = null;
    el('help-overlay').classList.remove('open');
  }

  function init() {
    var sel = el('lang-select');
    if (!sel || el('help-btn')) return;
    var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);

    var wrap = document.createElement('div');
    wrap.id = 'help-wrap';
    wrap.innerHTML =
      '<button id="help-btn" type="button" aria-haspopup="true"><i class="fa-solid fa-circle-question"></i></button>' +
      '<div id="help-menu" role="menu">' +
      '<button type="button" data-help="about"><i class="fa-solid fa-circle-info"></i><span></span></button>' +
      '<button type="button" data-help="guide"><i class="fa-solid fa-book-open"></i><span></span></button>' +
      '<button type="button" data-help="keys"><i class="fa-solid fa-keyboard"></i><span></span></button></div>';
    sel.parentNode.insertBefore(wrap, sel.nextSibling);

    var ov = document.createElement('div');
    ov.id = 'help-overlay';
    ov.innerHTML =
      '<div id="help-dialog" role="dialog" aria-modal="true" aria-labelledby="help-title">' +
      '<header><h2 id="help-title"></h2><button id="help-close" type="button" aria-label="Close">✕</button></header>' +
      '<div id="help-body"></div>' +
      '<div id="help-footer"><button id="help-footer-btn" type="button"></button></div></div>';
    document.body.appendChild(ov);

    el('help-btn').addEventListener('click', function (e) {
      e.stopPropagation();
      el('help-menu').classList.toggle('open');
    });
    el('help-menu').addEventListener('click', function (e) {
      var b = e.target.closest('[data-help]');
      if (b) openDialog(b.getAttribute('data-help'));
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('#help-wrap')) closeMenu();
    });
    el('help-close').addEventListener('click', closeDialog);
    el('help-footer-btn').addEventListener('click', closeDialog);
    ov.addEventListener('mousedown', function (e) { if (e.target === ov) closeDialog(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { if (openKind) closeDialog(); closeMenu(); }
    }, true);
    render();
  }

  window.refreshHelp = render;
  window.isHelpOpen = function () { return !!openKind; };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
