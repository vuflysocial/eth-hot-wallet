
const Network = {
  Offline: { rpc: 'offline', tx_explorer: null },
  'Local RPC': { rpc: 'http://127.0.0.1:8545', tx_explorer: null },
  'Main Net': { rpc: 'https://sleek-cold-friday.bsc.discover.quiknode.pro/cb6a6b88272911b287ca81a0a0f82f88d0fc5568/', tx_explorer: 'https://etherscan.io/tx/' },
  'BSC Testnet': { rpc: 'https://data-seed-prebsc-1-s1.binance.org:8545', tx_explorer: null },
};

module.exports = Network;
