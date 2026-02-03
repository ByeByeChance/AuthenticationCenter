# 统一认证中心

一个基于 React + TypeScript + Vite 构建的统一认证中心，为多个系统提供统一的登录认证服务。

## 项目简介

统一认证中心是一个现代化的前端应用，实现了多系统单点登录（SSO）功能。用户只需登录一次，即可访问集成的各个子系统，大大提升了用户体验和系统安全性。

## 技术栈

### 核心技术
- **前端框架**: React 19.2.0
- **构建工具**: Vite 7.2.4
- **状态管理**: Redux Toolkit 2.11.2 + Redux Persist 6.0.0
- **路由管理**: React Router v7.13.0
- **UI 库**: Ant Design 6.2.2
- **HTTP 客户端**: Axios 1.13.4
- **加密算法**: GM-Crypt 0.0.2 (SM4 加密)
- **样式处理**: Less 4.5.1
- **动画库**: GSAP 3.14.2

### 开发工具
- **TypeScript**: 5.9.3
- **ESLint**: 9.39.1
- **Prettier**: 代码格式化
- **Vite 插件**: PWA、压缩、可视化等

## 项目结构

```
src/
├── api/                 # API 调用相关
│   ├── config/          # API 配置
│   ├── helper/          # 辅助函数
│   ├── interface/       # API 类型定义
│   ├── modules/        # API 模块
│   └── index.ts        # API 实例
├── assets/             # 静态资源
├── components/         # 公共组件
│   ├── AuthRoute/      # 认证路由组件
│   ├── Layout/         # 布局组件
│   ├── Loading/        # 加载组件
│   ├── Nav/           # 导航组件
│   └── ReactBits/      # React 动画组件
├── config/             # 配置文件
├── enums/              # 枚举定义
├── hooks/              # 自定义 Hooks
├── redux/              # Redux 状态管理
│   ├── interface/       # Redux 类型定义
│   ├── modules/        # Redux 模块
│   └── index.ts        # Redux 配置
├── routers/            # 路由配置
│   ├── helper/         # 路由辅助
│   ├── interface/      # 路由类型
│   ├── modules/        # 路由模块
│   └── index.ts        # 路由配置
├── styles/             # 全局样式
├── types/              # 类型定义
├── utils/              # 工具函数
│   ├── gmCrypto.ts     # SM4 加密工具
│   └── index.ts        # 通用工具
├── views/              # 页面组件
│   ├── 404/           # 404 页面
│   ├── home/           # 首页
│   ├── login/          # 登录页
│   └── register/       # 注册页
├── App.tsx             # 应用入口
└── main.tsx            # 主入口
```

## 功能特性

### 统一认证
- 用户名密码登录
- 用户注册功能
- 密码 SM4 加密
- Token 管理和持久化
- 路由权限控制

### 子系统集成
- xxxx管理平台集成
- xxxx管理平台集成
- 加密参数传递

### 用户体验
- 响应式设计
- 流畅的动画效果
- 加载状态提示
- 错误信息提示

### 安全特性
- 密码加密传输
- Token 验证机制
- 路由权限保护
- XSS 防护

### 跨标签页状态同步
- 多标签页登录状态同步
- 一个标签页登出，其他标签页自动登出
- 登录成功后通知其他标签页

## 安装和运行

### 环境要求
- Node.js >= 20.19.0 或 >= 22.12.0
- npm >= 11.3.0

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建项目

```bash
# 开发环境构建
npm run build:dev

# 测试环境构建
npm run build:test

# 生产环境构建
npm run build:pro
```

### 预览构建

```bash
npm run preview
```

## 配置说明

### 环境变量

项目使用 `.env` 文件进行配置，支持不同环境的配置：

- `.env` - 默认配置
- `.env.development` - 开发环境
- `.env.production` - 生产环境

主要配置项：

```env
# 应用标题
VITE_GLOB_APP_TITLE=统一认证中心

# API 地址
VITE_API_URL=https://api.example.com

# 路由模式
VITE_ROUTER_MODE=hash

# 公共路径
VITE_PUBLIC_PATH=/

# 是否移除 console
VITE_DROP_CONSOLE=true

# 是否启用 PWA
VITE_PWA=true

# 端口
VITE_PORT=5173

# 是否自动打开浏览器
VITE_OPEN=true
```

### 加密配置

SM4 加密配置位于 `src/utils/gmCrypto.ts`：

```typescript
const sm4 = new SM4({
  key: 'a7d2f9e4c3b8a1b6', // 加密密钥，需与后端保持一致
  mode: 'cbc',                    // 加密模式：ecb 或 cbc
  cipherType: 'text',             // 加密类型：base64 或 text
  iv: '0123456789ABCDEF'       // 初始化向量（cbc 模式需要）
});
```

### 子系统配置

子系统配置位于 `src/views/home/components/card.tsx`：

```typescript
const defaultItems = [
  {
    id: "1",
    title: "子系统1",
    url: "http://redirect.example.com"
  },
  // 更多子系统...
];
```

## 开发指南

### 代码规范

项目使用 ESLint 和 Prettier 进行代码规范检查：

```bash
# 运行代码检查
npm run lint
```

### Git 提交

项目配置了 commitlint，使用规范的提交信息：

```bash
npm run commit
```

### 添加新页面

1. 在 `src/views/` 目录下创建页面组件
2. 在 `src/routers/modules/` 中添加路由配置
3. 在 `src/redux/modules/` 中添加状态管理（如需要）

### 添加新子系统

1. 在 `src/views/home/components/card.tsx` 的 `defaultItems` 中添加配置
2. 确保子系统支持接收加密的用户名和密码参数

## 常见问题

### 构建失败

**问题**: 构建时提示 Node.js 版本不兼容

**解决**: 升级 Node.js 到 20.19+ 或 22.12+

### 加密失败

**问题**: 子系统无法解密密码

**解决**: 
1. 检查前后端加密密钥是否一致
2. 确认加密模式和初始化向量配置正确
3. 验证加密参数传递格式

### 路由无法访问

**问题**: 登录后无法访问某些页面

**解决**: 
1. 检查路由守卫配置
2. 确认 token 是否正确存储
3. 验证白名单配置

### PWA 问题

**问题**: PWA 功能不工作

**解决**: 
1. 确认 `VITE_PWA=true`
2. 检查 HTTPS 配置（PWA 需要 HTTPS）
3. 清除浏览器缓存

## 部署建议

### 生产环境部署

1. **环境变量配置**: 为生产环境配置正确的 API 地址和密钥
2. **HTTPS 配置**: 使用 HTTPS 协议确保数据传输安全
3. **CORS 配置**: 确保后端 API 允许跨域请求
4. **缓存策略**: 配置合适的缓存策略提升性能
5. **监控告警**: 集成监控工具及时发现和解决问题

### 密钥管理

- 不要将加密密钥提交到代码仓库
- 使用环境变量或密钥管理服务存储密钥
- 定期更换加密密钥
- 确保前后端密钥同步更新

## 联系方式

- 作者: liquanxi
- 邮箱: 17621431@qq.com

## 更新日志

### v0.0.0 (2026-02-02)
- 初始版本发布
- 实现统一认证功能
- 集成多个子系统
- 实现 SM4 密码加密
- 添加路由权限控制
- 实现跨标签页状态同步
- 优化 Redux 模块命名
- 修复路由守卫中的 location.state 修改问题
