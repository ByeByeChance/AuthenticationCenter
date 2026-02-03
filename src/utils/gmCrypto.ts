import { sm4 as SM4 } from "gm-crypt";

// 配置sm4参数
const sm4 = new SM4({
  key: "a7d2f9e4c3b8a1b6", // 后端保持一致
  mode: "cbc", // 加密的方式有两种，ecb和cbc两种，也是看后端如何定义的，不过要是cbc的话下面还要加一个iv的参数，ecb不用
  cipherType: "text", // base64 text
  iv: "0123456789ABCDEF"
});

/**
 * 加密函数
 * @param val 要加密的值
 * @returns 加密后的值
 */
export function encrypt(val: string): string {
  return sm4.encrypt(val);
}

/**
 * 解密函数
 * @param val 要解密的值
 * @returns 解密后的值
 */
export function decrypt(val: string): string {
  return sm4.decrypt(val);
}
