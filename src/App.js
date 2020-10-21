import React from "react";

import EmailEditor from "react-email-editor";

const App = () => {
  let editor = {};

  const exportHtml = () => {
    editor.exportHtml((data) => {
      const { design, html } = data;
      console.log("exportHtml", html);
    });
  };

  return (
    <div className="App">
      <EmailEditor ref={(item) => (editor = item)} />
      <button onClick={exportHtml}>Export HTML</button>
    </div>
  );
};

export default App;
