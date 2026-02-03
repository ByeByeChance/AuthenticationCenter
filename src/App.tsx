import { RouterProvider } from "react-router-dom";
import router from "@/routers";
import { theme, ConfigProvider } from "antd";
const { darkAlgorithm } = theme;

export default function App() {
  return (
    <ConfigProvider theme={{ algorithm: darkAlgorithm }}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}
