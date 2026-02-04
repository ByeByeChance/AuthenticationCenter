import ChromaGrid from "@/components/ReactBits/ChromaGrid";
import { useSelector } from "@/redux";
import { ChromaItem } from "@/components/ReactBits/ChromaGrid";
import data from "@/assets/data.png";
import algorithm from "@/assets/algorithm.png";
import aigc from "@/assets/aigc.png";
import {
  DATA_MANAGEMENT_TITLE,
  DATA_MANAGEMENT_URL,
  ALGORITHM_MANAGEMENT_TITLE,
  ALGORITHM_MANAGEMENT_URL,
  AIGC_ALGORITHM_VERIFICATION_TITLE,
  AIGC_ALGORITHM_VERIFICATION_URL
} from "@/config";

const defaultItems: ChromaItem[] = [
  {
    id: "1",
    image: data,
    title: DATA_MANAGEMENT_TITLE,
    subtitle: "",
    handle: "",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: DATA_MANAGEMENT_URL
  },
  {
    id: "2",
    image: algorithm,
    title: ALGORITHM_MANAGEMENT_TITLE,
    subtitle: "",
    handle: "",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: ALGORITHM_MANAGEMENT_URL
  },
  {
    id: "3",
    image: aigc,
    title: AIGC_ALGORITHM_VERIFICATION_TITLE,
    subtitle: "",
    handle: "",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(180deg, #F59E0B, #000)",
    url: AIGC_ALGORITHM_VERIFICATION_URL
  }
];

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
