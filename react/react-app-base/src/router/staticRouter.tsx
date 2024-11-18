import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
  ],
  {
    future: {
      v7_partialHydration: true, // 提前启用新的hydration行为
      v7_fetcherPersist: true, // 提前启用fetcher持久化
      v7_relativeSplatPath: true, // 提前启用相对路径
      v7_normalizeFormMethod: true, // 提前启用表单方法规范化
      v7_skipActionErrorRevalidation: true, // 提前启用跳过action错误重新验证
    },
  }
);

export default router;
