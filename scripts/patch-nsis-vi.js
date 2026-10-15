// Bổ sung bản dịch tiếng Việt cho các thông báo của trình cài đặt NSIS
// (electron-builder chưa có sẵn một số câu). Chạy tự động sau npm install.
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'node_modules', 'app-builder-lib', 'templates', 'nsis');
const VI = {
  win7Required: 'Cần Windows 7 trở lên',
  x64WinRequired: 'Cần Windows 64-bit',
  appRunning: '${PRODUCT_NAME} đang chạy.\\nBấm OK để đóng.\\nNếu không đóng được, hãy thử đóng thủ công.',
  appCannotBeClosed: '${PRODUCT_NAME} không thể đóng.\\nVui lòng đóng thủ công rồi bấm Thử lại để tiếp tục.',
  installing: 'Đang cài đặt, vui lòng chờ...',
  areYouSureToUninstall: 'Bạn có chắc muốn gỡ cài đặt ${PRODUCT_NAME}?',
  decompressionFailed: 'Giải nén tệp thất bại. Vui lòng chạy lại trình cài đặt.',
  uninstallFailed: 'Không gỡ được các tệp ứng dụng cũ. Vui lòng chạy lại trình cài đặt.',
  chooseInstallationOptions: 'Chọn tùy chọn cài đặt',
  chooseUninstallationOptions: 'Chọn tùy chọn gỡ cài đặt',
  whichInstallationShouldBeRemoved: 'Cần gỡ bản cài đặt nào?',
  whoShouldThisApplicationBeInstalledFor: 'Cài đặt ứng dụng này cho ai?',
  selectUserMode: 'Vui lòng chọn cài đặt cho tất cả người dùng hay chỉ riêng bạn',
  whichInstallationRemove: 'Phần mềm được cài cả cho máy (mọi người dùng) và cho riêng người dùng.\\nBạn muốn gỡ bản nào?',
  freshInstallForAll: 'Cài mới cho tất cả người dùng (sẽ yêu cầu quyền quản trị).',
  freshInstallForCurrent: 'Cài mới chỉ cho người dùng hiện tại.',
  onlyForMe: 'Chỉ cho &tôi',
  forAll: 'Mọi người dùng máy tính này (&tất cả người dùng)',
  loginWithAdminAccount: 'Bạn cần đăng nhập bằng tài khoản thuộc nhóm quản trị để tiếp tục...',
  perUserInstallExists: 'Đã có bản cài đặt cho riêng người dùng.',
  perUserInstall: 'Có một bản cài đặt cho riêng người dùng.',
  perMachineInstallExists: 'Đã có bản cài đặt cho toàn máy.',
  perMachineInstall: 'Có một bản cài đặt cho toàn máy.',
  reinstallUpgrade: 'Sẽ cài đặt lại/nâng cấp.',
  uninstall: 'Sẽ gỡ cài đặt.'
};

let patched = 0;
for (const f of ['messages.yml', 'assistedMessages.yml']) {
  const file = path.join(dir, f);
  if (!fs.existsSync(file)) continue;
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  const out = [];
  let key = null, hasVi = false;
  // Tìm các khối đã có sẵn "vi:" để không thêm trùng.
  const viKeys = new Set();
  let k = null;
  for (const l of lines) {
    const m = l.match(/^([A-Za-z0-9]+):\s*$/);
    if (m) k = m[1];
    else if (k && /^\s+vi:/.test(l)) viKeys.add(k);
  }
  for (const l of lines) {
    const m = l.match(/^([A-Za-z0-9]+):\s*$/);
    if (m) key = m[1];
    out.push(l);
    if (key && /^\s+en:/.test(l) && VI[key] && !viKeys.has(key)) {
      out.push('  vi: "' + VI[key].replace(/"/g, '\\"') + '"');
      patched++;
    }
  }
  fs.writeFileSync(file, out.join('\n'));
}
console.log('patch-nsis-vi: da them ' + patched + ' ban dich');
