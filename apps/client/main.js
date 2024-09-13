import { app, BrowserWindow } from 'electron';
import { join, resolve } from 'path';

const __dir = resolve();

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1366,
    height: 960,
    icon: join(__dir, '/build/images/toss-icon.png'),
  })

  win.loadURL('https://tossinvest.com/')
}


app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
