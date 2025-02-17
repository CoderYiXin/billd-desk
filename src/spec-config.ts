export const PROD_DOMAIN = 'hsslive.cn';

// 这个BACKEND_SERVER_PORT和vite.config.ts需要一致，改的话要一起改。
const BACKEND_SERVER_PORT = 5300; // 后端服务的端口号

// ======本地调试=====

// const BACKEND_SERVER_IP = '10.10.20.29'; // 后端服务的IP（本机局域网地址）

// export const WEBSOCKET_URL =
//   process.env.NODE_ENV === 'development'
//     ? `ws://${BACKEND_SERVER_IP}:${BACKEND_SERVER_PORT}`
//     : `ws://${BACKEND_SERVER_IP}:${BACKEND_SERVER_PORT}`;

// export const AXIOS_BASEURL =
//   process.env.NODE_ENV === 'development'
//     ? `http://${BACKEND_SERVER_IP}:${BACKEND_SERVER_PORT}`
//     : `http://${BACKEND_SERVER_IP}:${BACKEND_SERVER_PORT}`;

// ======本地调试=====

// ======线上正式=====

export const WEBSOCKET_URL =
  process.env.NODE_ENV === 'development'
    ? `ws://localhost:${BACKEND_SERVER_PORT}`
    : `wss://desk-api.${PROD_DOMAIN}`;

export const AXIOS_BASEURL =
  process.env.NODE_ENV === 'development'
    ? `/api`
    : `https://desk-api.${PROD_DOMAIN}`;

// ======线上正式=====

// 本地测试时，TURN_URL可以随便填，其实用不到；但线上的时候，需要填对！
export const TURN_URL = `turn:hk.${PROD_DOMAIN}`;

export const COOKIE_DOMAIN =
  process.env.NODE_ENV === 'development' ? undefined : `.${PROD_DOMAIN}`;
