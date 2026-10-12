# Bartender Lite

Ứng dụng thiết kế và in tem nhãn miễn phí (Electron): thiết kế nhãn, nạp dữ liệu Excel, mapping cột, in và xuất PDF. Giao diện 5 ngôn ngữ: Tiếng Việt, English, 简体中文, 한국어, 日本語.

## Tải về
Các bản cài nằm ở mục **Releases** (Windows .exe, Linux .deb/.AppImage, macOS .zip Intel/Apple Silicon).

## Hướng dẫn sử dụng
Thư mục `docs/`: `HuongDanSuDung_BartenderLite_VI.docx`, `UserGuide_BartenderLite_EN.docx`, `UsageGuide_BartenderLite_ZH.docx`, `UserGuide_BartenderLite_KO.docx`, `UserGuide_BartenderLite_JA.docx` (kèm bản PDF/MD).

## Chạy và build từ mã nguồn
```
npm install
npx electron .
npx electron-builder --win nsis --x64                 # cần wine nếu build trên Linux
npx electron-builder --linux AppImage deb --x64
npx electron-builder --mac zip --x64 --arm64
```

## Bản cài (thư mục builds/)
- Windows: `Bartender Lite Setup 1.0.0.exe`
- Linux Mint/Ubuntu: `bartender-lite_1.0.0_amd64.deb`
- Linux AppImage: AppImage vượt 100 MB nên chia 2 phần `BartenderLite-1.0.0.AppImage.part00/01`; chạy `bash builds/ghep_appimage.sh` để ghép
- macOS: `Bartender Lite-1.0.0-mac.zip` (Intel), `Bartender Lite-1.0.0-arm64-mac.zip` (Apple Silicon)
