const bcrypt = require('bcrypt');
const password = '123456';
const saltRounds = 10; // Güvenlik için önerilen sayı

bcrypt.hash(password, saltRounds, function(err, hash) {
    if (err) {
        console.error("Hash oluşturma hatası:", err);
        return;
    }
    console.log("------------------------------------------------------------------");
    console.log(`Şifre: '${password}' için oluşturulan hash:`);
    console.log(`HASH: ${hash}`);
    console.log("------------------------------------------------------------------");
    console.log("Bu hash değerini users tablonuzdaki password_hash sütununa kopyalayınız.");
});