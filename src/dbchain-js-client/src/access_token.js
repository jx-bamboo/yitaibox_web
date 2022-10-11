import { sign } from "./cosmos_sig/index"
import { getPrivKey, getPubKey } from "./key_manager";
const bs58 =  require("bs58")

function signForToken(str) {
  var privKey = getPrivKey();
  var pubKey = getPubKey();
console.log(privKey,pubKey,)
  var sigObj = sign(str, privKey);
  var encodedPubKey = bs58.encode(pubKey)
  var encodedSig = bs58.encode(sigObj.signature)
  var result = `${encodedPubKey}:${str}:${encodedSig}`
  console.log(sigObj,encodedPubKey,encodedSig,result)
  return result;
}

function createAccessToken() {
  var time = "" + Date.now();
  var result = signForToken(time)
  return result
}

export { createAccessToken };
