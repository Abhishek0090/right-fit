import { bitArray, codec, cipher, hash, mode, random } from "sjcl";

export const aes256gcm = () => {
  const BLOCK_SIZE = 12 * 8;
  const TAG_LENGTH = 16 * 8;

  const key = process.env.NEXT_PUBLIC_ENCRYPT_KEY;
  const hashKey = hash.sha256.hash(key);
  const _cipher = new cipher.aes(hashKey);

  const encrypt = (dec) => {
    const data = typeof dec === "string" ? dec : JSON.stringify(dec);

    const nonce = random.randomWords(3, 0);
    const ciphertext_tag = mode.gcm.encrypt(
      _cipher,
      codec.utf8String.toBits(data),
      nonce,
      undefined,
      TAG_LENGTH
    );
    const ret = codec.base64.fromBits(bitArray.concat(nonce, ciphertext_tag));
    return ret;
  };

  const decrypt = async (enc) => {
    let decryptText = "";
    try {
      const encBits = enc && codec.base64.toBits(enc);
      const nonce = encBits && bitArray.bitSlice(encBits, 0, BLOCK_SIZE);
      const ciphertext = encBits && bitArray.bitSlice(encBits, BLOCK_SIZE);
      const decipher =
        ciphertext &&
        mode.gcm.decrypt(_cipher, ciphertext, nonce, undefined, TAG_LENGTH);
      decryptText = codec.utf8String.fromBits(decipher);
    } catch (error) {
      decryptText = enc;
    }
    if (decryptText && decryptText?.length > 0) {
      const decryptedJSON = await JSON.parse(decryptText);
      return decryptedJSON;
    } else {
      return decryptText;
    }
  };

  return {
    encrypt,
    decrypt,
  };
};

export const encrypt = aes256gcm().encrypt;
export const decrypt = aes256gcm().decrypt;
