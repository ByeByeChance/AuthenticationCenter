import ChromaGrid from "@/components/ReactBits/ChromaGrid";
import { useSelector } from "@/redux";

import { ChromaItem } from "@/components/ReactBits/ChromaGrid";

const defaultItems: ChromaItem[] = [];

const HomeCard = () => {
  const { tempMsg } = useSelector(state => state.user);
  const systemInfo = useSelector(state => state.user.systemInfo) || [];

  // 处理items，添加加密后的参数到url
  const processedItems =
    defaultItems?.map(item => {
      // 构建查询参数
      const params = new URLSearchParams();
      params.append("username", tempMsg?.username || "");
      params.append("password", tempMsg?.password || "");
      params.append("timestamp", new Date().getTime().toString());

      // 修改url，添加查询参数
      const newUrl = `${item.url}?${params.toString()}`;

      return {
        ...item,
        url: newUrl
      };
    }) || [];

  // 过滤系统信息
  const newSystemInfo = processedItems?.filter(item => systemInfo?.some(info => info.id === item.id)) || [];

  return (
    <div style={{ position: "relative" }}>
      <ChromaGrid items={processedItems || newSystemInfo} radius={300} damping={0.45} fadeOut={0.6} ease="power3.out" />
    </div>
  );
};

export default HomeCard;
