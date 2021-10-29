/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] == nums[i - 1]) {
      nums.splice(nums[i], 1);
    }
  }

  console.log(nums);
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

/**
 * Assalamu alaykum Koreyada o'qiyotgan talabalar, ishlarni boshlaganlar, ishlarda ishlayotgan aka-uka, opa-singillar.  Barchamiz studentlik vaqtimizdan kunlik ishlarga chiqamiz, chunki sarf-harajatlar, uyga pul jo'natish kerak. Men ham chiqqanman, chiqardim. 2019-yil kuz oylari edi, ketma-ket kunlik ishlarga chiqdim. O'sha paytlar kunlik ishga chiqqanimizda bizdan ID kartani so'rardi, nega deb so'rasak, binoni ichiga kirish uchun deb javob qaytardi doim, biz sodda bo'lganmiz, ishonib hop deb berardik. Lekin bu narsani natijasi mana ikki yil deganda chiqdi. Samushillar, balkim mahalliy soliqlardan qochish maqsadida, ishga chiqqanlarni ID ni olib ishchi sifatida ro'yhatdan o'tkazib yil davomida ishlamagan bo'lsa ham ularni nomiga kiritib boraverarkan, balkim hammasi ham bunday emasdur, lekin men uchragan shunday qilgan ekan. O'sha vaqt bir ikki tanishlar ham chiqqan, ularni nomiga ham katta summa yozilgan. Universitetni bitirib ishga kirib, birinchi marta viza olganda tekshirmas ekan, lekin, cho'zayotgan vaqt, avvalgi yilgi kirimlaringizni tekshirarkan, shu vaqtda agar sizda noqonuniy kirim chiqsa, jarima va vizani atkaz qilish holati kuzatilarkan. Lekin, o'sha odamlar bilan ozroq yaxshi muomalada edim, gaplashib holatni tushuntirdim o'rtada bir tanish ham bor edi, gaplashib tushuntirdi, albatta osonlikcha qilib bermadi. 3 oy deganda shu narsani o'chirib berdi.
 * doim Hometaxdan yillik kirim chiqimlarni tekshirib yuring
 * kakao login qilsangiz qulay agar sizda qandaydir kirim chiqsa, demak sizni ham shunday ro'yhatga o'tkazib qo'yishga, immigration ruxsatisiz bir kun uchun ham 2mln, 1 oy uchun ham 2mln jarima bor. agar siz, 31-oktabr va 1-noyabr kuni ishlagan bo'lsangiz, bu 2 oyga yuradi, va jarima 3 mln ga ko'tariladi.2mlndan ko'p jarima uchun, O'zbekistonga borib vizani olib kelish talab etiladi. O'zbekistonga ketgandan keyin jarimadan keyin kirish imkonsiz.
 *
 * Nima qilish kerak bu holatda:
 * Agar immigration hodimi bu yerda ishlaganlik sababini yoz deb qog'oz bersa, yozib bermang, balkim sizda imkoniyat bordir to'g'irlashga.
 * Har yili may oyida o'tgan yilni kirimlar natijasi hometax websitega chiqariladi, doim tekshirib boring.
 * Avvalo kunlik ishga chiqsangiz, ID va passportni hech kimga bermang.
 * Aga shunday holat bo'lsa, biznes raqamdan yoki kompaniya nomini naverga yozsangiz chiqadi, o'sha zahotiyoq,  o'shalar bilan bog'lanish kerak va holatni tushuntirish kerak. Agar xato ularda bo'lsa qilib beradi, lekin bazi koreyslar bor oyog'ini tirab turib oladi.
 * Undan keyin soliq idorasiga shu qismni o'chirib bering deb ariza bering.
 * Siz kompaniyaga holatni bildirsangiz, soliq idorasi bog'langan vaqtda u yerda ishlaganligingizni tasdiqlab yubormaydi. Men ikki marta ariza berdim, ular ishladi deb tasdiqlab yuborgan(xatolik bilan).
 * Doimo tekshirib turing,kerak bo'lsa har kuni telefon qilib so'rang, nima bo'ldi deb, chunki bazilari qanday to'g'irlashni bilmas ekan.
 * Avval chiroyli muomala qiling, keyinchalik o'xshamasa ozroq, unga ham zarari bo'lishini tushuntiring.
 * Bu narsani astoydil harakat qilsa hal qilsa bo'larkan.
 * To'langan jarimalar keyinchalik sizga qarshi ishlaydi, shuning uchun iloji boricha jarima to'lamaslikka va qoidalarga rioya qilib yashashga harakat qilaylik, kichik bir qilingan xato ham keyinchalik oyoqdan chalishi mumkin ekan.
 *
 * Hech kimda bunday holat bo'lmasligini tilab qolaman.
 * Barchaga ishlarda omad.
 * Mana shunday holat bo'yicha savollaringiz bo'lsa, aloqaga chiqsangiz bo'ladi.
 *
 */
