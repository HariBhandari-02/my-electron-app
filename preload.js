const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("versions", {
  node: () => process.version.node,
  chrome: () => process.version.chrome,
  electron: () => process.versions.electron,
});
