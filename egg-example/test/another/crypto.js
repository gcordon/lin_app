const crypto = require('crypto')

let Encrypt = (data, key) => {
    const cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

let Decrypt = (encrypted, key) => {
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

let Random = (Min, Max) => {
    var Range = Max - Min;
    var Rand = Math.random();
    if (Math.round(Rand * Range) == 0) {
        return Min + 1;
    }
    var num = Min + Math.round(Rand * Range);
    return num;
}

// let RandomNum = Random(1000,9999)
// let key = RandomNum.toString()
let data = '666'
let encrypted = Encrypt(data, 'egg_client')
let decrypted = Decrypt(encrypted, 'egg_client')

console.log('明文' + data) //明文xtang
console.log('加密后' + encrypted) //加密后6903756dc076823f5222227fb824180d
console.log('解密后' + decrypted) //解密后xtang
