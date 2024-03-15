const tokenAddress = '0x26aEAfcaB4AC1eB3c772bE78161Ac739fcce4aa3';
const tokenSymbol = 'MFS';
const tokenDecimals = 9;
const tokenImage = 'https://mfs.maticforce.space/MFS100x100.png';

async function addTokenFunction() {

try {
  
  const wasAdded = await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', 
      options: {
        address: tokenAddress, 
        symbol: tokenSymbol, 
        decimals: tokenDecimals, 
        image: tokenImage, 
      },
    },
  });

  if (wasAdded) {
    console.log('Thanks for your interest!');
  } else {
    console.log('MFS MEME Token has not been added');
  }
} catch (error) {
  console.log(error);
}
}
