const information = document.getElementById("info");
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}) and Electron (v${versions.electron()})`;

const func = async () => {
  const response = await window.versions.ping();
  console.log("versions response:", response);
};

func();

// versions of chrome and node is not rendered
