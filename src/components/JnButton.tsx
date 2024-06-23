import { Button, Modal, ConfigProvider, theme } from "antd";
import { useState } from "react";

import { useDark } from "rspress/runtime";

export default function JnButton(props) {
  const [visible, setVisible] = useState(false);
  const dark = useDark();

  return (
    <ConfigProvider
      theme={{
        algorithm: dark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        // token: {
        //   colorPrimary: "#77c1f9",
        //   colorBgBase: "#1e2c43",
        // },
      }}
    >
      <Modal
        open={visible}
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
      >
        <h1>hello world</h1>
      </Modal>

      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        hello
      </Button>
    </ConfigProvider>
  );
}
