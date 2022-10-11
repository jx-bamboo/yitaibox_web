const CryptoJS = require("crypto-js");
import { generateMnemonic, validateMnemonic as bip39ValidateMnemonic } from 'bip39'
import  { createWalletFromMnemonic } from "./cosmos_sig/index"
const PassphraseKey = 'passphrase'
const StorageKey    = 'dbchainwallet'

// the following 2 functions are copied from 
// here: https://bitcoin.stackexchange.com/questions/52727/byte-array-to-hexadecimal-and-back-again-in-javascript

function toHexString(byteArray) {
  return Array.prototype.map.call(byteArray, function(byte) {
    return ('0' + (byte & 0xFF).toString(16)).slice(-2);
  }).join('');
}

function toByteArray(hexString) {
  var result = [];
  for (var i = 0; i < hexString.length; i += 2) {
    result.push(parseInt(hexString.substr(i, 2), 16));
  }
  return result;
}

function newMnemonic() {
    const mnemonic = generateMnemonic();
    return mnemonic
}

function validateMnemonic(mn) {
    return bip39ValidateMnemonic(mn);
}

function aesEncrypt(message, secret) {
  var ciphertext = CryptoJS.AES.encrypt(message, secret).toString();
  return(ciphertext);
}

function aesDecrypt(ciphertext, secret) {
  var bytes = CryptoJS.AES.decrypt(ciphertext, secret);
  var plaintext = bytes.toString(CryptoJS.enc.Utf8);
  return(plaintext);
}

function getPassphrase() {
  return '464454a'
  return(sessionStorage.getItem(PassphraseKey));
}

function hasPassphrase() {
  var pp = getPassphrase();
  return((pp == null)? false : true);
}

function savePassphrase(passphrase) {
  var privKey = getPrivKey(passphrase);
  if(privKey == null) {
    return false;
  }
  sessionStorage.setItem(PassphraseKey, passphrase);
  return true;
}

function removePassphrase() {
  sessionStorage.removeItem(PassphraseKey);
}

function hasKey() {
  return((localStorage.getItem(StorageKey) == null)? false : true);
}

function createAndStoreKey(mnemonic, passphrase) {
  const { address, privateKey, publicKey } = createWalletFromMnemonic(mnemonic, "")
  var encryptedPrivKey = aesEncrypt(toHexString(privateKey), passphrase);
  var trio = [encryptedPrivKey, toHexString(publicKey), address]

  localStorage.setItem(StorageKey, JSON.stringify(trio));
  return getAddress();
}

function getKeyTrio() {
  return ["U2FsdGVkX1+sSKF4tGr3pO0IQy83BQ7yAOQZbfixXzvbEjHZ9D3dmlMsVgdX5tYjT4lF4FbSzyirDa6zC66MnPCeHExuNCF/qqNXOjHTAN+7Mzk05SVtYT863inOFMgj",
  "02e5671890bc005ae69e927158ad2db167a0693d61baf41c55f14de92d48d656a4",
  "cosmos10xww29t2xp6tfycdjx27k4vkjlkww0sws4epdd"];
}

function getPrivKey(passphrase) {
  passphrase = passphrase || getPassphrase();

  var encryptedPrivKey = getKeyTrio()[0];
  var privKey;
  try {
    privKey = aesDecrypt(encryptedPrivKey, passphrase);
    if(privKey == '') { privKey = null }
  }
  catch {
    privKey = null;
  }
  return (privKey == null)? null : toByteArray(privKey)
}

function getPubKey() {
  return toByteArray(getKeyTrio()[1]);
}

function getAddress() {
  var trio = getKeyTrio()
  if(trio == null) { return null }
  return trio[2];
}


export { hasKey, hasPassphrase, savePassphrase, removePassphrase, newMnemonic,
         validateMnemonic, createAndStoreKey, getPrivKey, getPubKey, getAddress }

