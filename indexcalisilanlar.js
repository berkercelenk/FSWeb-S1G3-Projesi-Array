/* BU DERSDEKİ TÜM DEĞERLERİN DÖNMESİNİ (RETURN) UNUTMAYIN, AKSİ TAKDİRDE TEST KONTROLÜ ÇALIŞMAZ */

/* İşte veriniz bu */
const orijinalTatlar = [
    "Muz",
    "Vişne",
    "Ceviz",
    "Kestane",
    "Kiraz",
    "Çikolata",
    "Fındık Çikolata",
    "Fıstık Çikolata",
    "Badem Çikolata",
    "Franbuaz",
    "Yaban Mersini",
    "Tarçın",
    "Badem",
    "Kahve",
    "Fındık",
    "Anten Fıstık",
    "Limon",
    "Misket Limon",
    "Akçaağaç Şurubu",
    "Şeftali",
    "Nane",
    "Ananas",
    "Ahududu",
    "Çilek",
    "Vanilya",
];

/* Görev 1: Diziyi kopyalama!
Orijinal tatların bulunduğu toplam 25 aromanın olduğu bir dizimiz var (yukarıya bakın). Bu görevde, bu dizi'ye veri yazma ve bu diziden veri okuma işlemleri yapacağız.
Tüm bu değişiklikleri yaparken, gerçek, orijinal 25 lezzetin listesini kaybetmek istemiyoruz. Bu yüzden orijinal diziyi kopyalamamız gerekmektedir!

/*
Aşağıdakileri yapmak için aşağıdaki kopyalama işlevini kullanın:
   1. parametre olarak bir dizi alın - işlev çağrıldığında orijinalTatlar'i argüman olarak ileteceksiniz.
   2. Alınan dizinin bir kopyasını döndür
*/


function kopyala(dizi) {
    let yeniDizi = [...dizi] //spread operatoru
    return yeniDizi
}
//console.log(kopyala([1,2]))

function kopyala(dizi) {
    let yeniDizi = [...dizi]
    return yeniDizi
}
//console.log([1,2])



/* Görev 2:
Bir dizinin tam olarak 25 çeşit olduğunu onaylayın. İşleviniz şunları kabul etmelidir:
   1. parametre olarak bir dizi
   2. Verilen dizinin 25 çeşit olup olmadığını kontrol edin
   3. İşleviniz, dizinin uzunluğu 25 ise DOĞRU(true) ve dizinin uzunluğu 25 DEĞİLSE YANLIŞ(false) bir boolean döndürmelidir.


Örneğin: dizi25Cesit(orijinalTatlar) kodunuz düzgün çalışıyorsa true değerini döndürür.
*/
function dizi25Cesit(dizi) {
    if (dizi.lenght == 25) {
        return true
    }
    else {
        return false
    }
}
//console.log(dizi25Cesit(orijinalTatlar))


function dizi25Cesitmi(dizi) {
  /*kod buraya*/ if (dizi.lenght = 25) {
        return true
    }
    else {
        return false
    }
}
//console.log(dizi25Cesitmi(orijinalTatlar))


/* Görev 3:
Pastane sahibi size yeni bir lezzet fikriyle geldi: Kakule! Bunun da çok tutacağından çok emin. Bu lezzeti eklemek için diziyi değiştirmeniz gerekir.

Aşağıdakileri yapmak için cesitEkle işlevini kullanın:
   1. İlk parametrede tatlar dizisini argüman olarak alan bir dizi alın
   2. İkinci parametrede yeni tadı 'string' argümanı olarak alın
   3. İşlev, argüman olarak verilen yeni tadı, verilen dizinin başına ekler.
   4. İşlev, yeni oluşan diziyi döndürmelidir

  Örneğin: cesitEkle(orijinalTatlar, "Kakule") işlevi doğru çalıştığında ["Kakule", "Muz",..."Vanilya"] şeklinde dönmelidir
*/

function cesitEkle(dizi, yeniTat) {
    dizi.unshift(yeniTat)
    return cesitEkle

}
console.log(cesitEkle(orijinalTatlar, "Kakule"))


//bunun sonuna "findikli latte" ekle

function cesitEkle2(dizi, yeniTat2) {
    dizi.push(yeniTat2)
    return cesitEkle2

}
console.log(cesitEkle2(dizi, yeniTat2))

function cesitEkle(dizi, yeniTat) {
  /*kod buraya*/ dizi.unshift(yeniTat)
    return dizi
}
//console.log(cesitEkle(orijinalTatlar, "kakule"));


/* Cörev 4:

Hoooppppalaa! orijinalTatlar dizisinde artık 26 aroma var! Göreviniz, dizinin sonundan bir öğeyi kaldırmaktır.

Aşağıdakileri yapmak için sonCesitiKaldir işlevini kullanın:
   1. Bir dizi alın
   2. Alınan diziden son öğeyi kaldırın
   3. Ortaya çıkan diziyi döndürün

   Örneğin: sonCesitiKaldir(orijinalTatlar) çalıştırıldığında ["Kakule", "Muz",..."Çilek"] döndürülür.
*/

function sonCesitiKaldir(dizi) {

    dizi.pop()
    return dizi
}
console.log(sonCesitiKaldir(orijinalTatlar))


function sonCesitiKaldir(dizi) {
  /*kod buraya*/ dizi.pop();
    return dizi;
}

//console.log(orijinalTatlar.pop());
//console.log(sonCesitiKaldir(orijinalTatlar))

/* Görev 5:
Dizideki belirli bir indeksteki çeşniyi döndüren bir işlev yazın.

Aşağıdakileri yapmak için aşağıdaki indekstekiCesitiGetir işlevini kullanın:
   1. İlk parametrede tatlar dizisini argüman olarak alacak bir dizi alın
   2. İkinci parametrede argüman olarak istenen dizini alacak bir sayı alın
   3. Verilen indekste bulunan çeşiti döndürün

   Örneğin: indekstekiCesitiGetir(orijinalTatlar, 2) çalıştırılmasıyla, Kakule'in başarıyla eklendiği varsayarsak sonuç "Ceviz" olucaktır.
*/


function indekstekiCesitiGetir(dizi, i) {
    for (i = 0; i < dizi.lenght; i++) {
        return dizi[i]
    }
}
console.log(indekstekiCesitiGetir(orijinalTatlar, i))





function indekstekiCesitiGetir(dizi, index) {
  /*kod buraya*/ return dizi[index];

}
//console.log(indekstekiCesitiGetir(orijinalTatlar,5))


/* Görev 6:

Firma, ürün yelpazesine daha fazla lezzet eklemek istediğinden, sadece ilk veya son aromayı keyfi olarak çıkarmak yerine, aroma adına göre aromaları kaldırmaları gerektiğini fark ederler. Göreviniz, verilen bir dizinde, ada göre bu tadı diziden çıkarmak.

Aşağıdakileri yapmak için ismeGoreCesitCikar işlevini kullanın:
   1. İlk parametrede tatlar dizisini argüman olarak alın
   2. İkinci parametrede, lezzet adını argüman olarak alın
   3. Alınan diziden alınan aromayı kaldırın
   4. Artık bir tane daha az lezzet içeren sonuçtaki diziyi döndürün

  Örneğin:  ismeGoreCesitCikar(orijinalTatlar, "Tarçın") çalıştırılmasıyla,  "Tarçın" aroması kaldırılacağından uzunluğu 24 olan bir dizi döndürülür.

  İPUCU: Bunun için .splice() kullanabilirsiniz.
*/

function ismeGoreCesitCikar(dizi, lezzet) {

    let i = indexOf(lezzet)
    dizi.splice(i, 1)
    return dizi
}
console.log(orijinalTatlar, "Kakao")




function ismeGoreCesitCikar(dizi, lezzetAdi) {

    let i = dizi.indexOf(lezzetAdi)

    dizi.splice(i, 1)

    return dizi
}

//console.log (ismeGoreCesitCikar(orijinalTatlar, "Çilek"))

/* Görev 7:

14 Şubat Sevgililer Günü'nde Firma, tüm çikolata lezzetlerini öne çıkaran bir promosyon malzemeleri oluşturmak istiyor.
Göreviniz, dizideki her bir öğeyi kontrol eden ve yalnızca verilen isimin geçtiği lezzetleri bulup orataya çıkan yeni diziyi döndüren, ismeGoreFiltrele adlı bir işlev yazmaktır.
Bu, farklı tatil ve kutlamalarda "Fındık", "Fıstık", "Çikolata" vb. lezzetler için filtreleme yapabilmenizi sağlar.

Aşağıdakileri yapmak için ismeGoreFiltrele işlevini kullanın:
   1. İlk parametrede tatlar dizisini argüman olarak alacak bir dizi alın
   2. İkinci parametrede filtre değerini argüman olarak alın (örnek: "Çikolata")
   3. Dizideki tatlardan herhangi birinin filtre değerini içerip içermediğini kontrol edin.
   4. Varsa, onları yeni bir diziye ekleyin
   5. Filtrelenmiş tatları içeren yeni diziyi döndürün

  Örneğin: ismeGoreFiltrele(orijinalTatlar, "Çikolata") çalıştırıldığında ["Çikolata", "Fındık Çikolata", "Fıstık Çikolata", "Badem Çikolata"]

  İPUCU - bunu çözmenize yardımcı olması için .includes yöntemini kullanabilirsiniz.

  Bu sorunu çözmek için GELİŞMİŞ DİZİ YÖNTEMLERİNİ (yani .filter) KULLANMAYIN.
*/

function ismeGoreFiltrele(dizi, filtrele) {

    dizi.filter(filtrele)

    return dizi
}
console.log(orijinalTatlar, "Çikolata")

//-----


function ismeGoreFiltrele(dizi, filtre) {
    let result = [];
    for (let i = 0; i < dizi.length; i++) {
        if (dizi[i].includes(filtre)) {
            result.push(dizi[i])
        }

    }
    return result

}
//console.log (ismeGoreFiltrele(orijinalTatlar, "lata")) //soldaki alan diziyi, sağdaki alan filtreyi tanımlar 



/* ALIŞTIRMA */

/* ALIŞTIRMA 1: Bir dizideki ortalama kelime sayısını döndüren bir fonksiyon yazın. Bu işlevi orijinalTatlar dizisinde test etmelisiniz, ancak bunu herhangi bir dizi için de kullanabilmelisiniz.

Aşağıdakileri yapmak için ortalamaKelimeSayisi işlevini kullanın:
   1. orijinalTatlar dizisini alın
   2. Dizideki öğe başına kaç kelime sayın
   3. Dizideki öğe başına ortalama kelime sayısını döndürün

   Örneğin: ortalamaKelimeSayisi(orijinalTatlar) 0 ile 2 arasında bir sayı döndürmelidir.
*/

function ortalamaKelimeSayisi(dizi, bolunen) {

    let kelimeSayisi = 0
    for (i = 0,  ) {
        dizi.split(" ")
        return kelimeSayisi + dizi.lenght
    }
}
console.log(ortalamaKelimeSayisi(kelimeSayisi))

//split metodu kullanımı, dizi.split (" ") parantez için boşluk var, bu boşluk karakterine göre diziyi parçalıyor yeni bir array oluşturuyor. 



/* ALIŞTIRMA 2:
Firma mevcut tatların yanında artık mevsimlik lezzetler ve hatta bölgesel lezzetler de sunmaktadır. Toplam 25 lezzet aromasını
orijinalTatlar, yeniTatlar, mevsimlikTatlar ve bolgeselTatlar'dan rastgele seçecek ve bunu rastgeleTatlar adlı bir dizide saklayan bir fonksiyon yazın.

Aşağıdakileri yapmak için rastgeleTatlar işlevini ve yeni dizileri kullanın:
   1. Tüm farklı tatlara sahip dört diziyi alın (orijinalTatlar yukarıda, diğerleri aşağıda)
   2. Dört diziden rastgele tatlar seçin
   3. Uzunluğu 25 olan rastgeleTatlar adlı yeni bir dizi döndürün

  Örneğin: rastgeleTatlar(orijinalTatlar, yeniTatlar, mevsimlikTatlar, bolgeselTatlar) çalıştırıldığında ["Kestane", "Ballı Badem,"..."Hindistan Cevizi", "Kuru üzüm"].
*/

//spread , concat metodlarıyla yapılabilir. Bu ikisiyle array'leri birleştirebilirsin. Rastgele seçmek için Math.random seçilebilir. 

function rastgeleTatlar(/*kod buraya*/) {
    /*kod buraya*/
}

// NEW DATA ARRAYS FOR STRETCH 2 ⬇️
// const yeniTatlar = [
//   "Badem",
//   "Ballı Badem",
//   "Fıstık Ezmesi",
//   "Profiterol",
//   "Madlen Çikolata"
// ]

// const mevsimlikTatlar = [
// "Pekan",
// "Kaju",
// "Çikolatalı Mousse",
// "Fransız Vanilyası",
// "Yumurta",
// "Alman çikolatası",
// "Kek üzerine krema",
// "Hindistan Cevizi",
// "Kaymaklı Biskuvi",
// "Beyaz Çikolata",
// "Mango"
// ]

// const bolgeselTatlar = [
// "Kaymak",
// "Karpuz",
// "Karadut",
// "Turunç",
// "Portakal",
// "Yogurt",
// "Krem Peynir",
// "Kakao",
// "Karamel macchiato",
// "Kuru üzüm",
// "Peynir",
// "Karamel"
// ]


/* Lütfen bu satırın altındaki hiçbir şeyi değiştirmeyin */
function sa() {
    console.log('Calışıyor');
    return 'as';
}
sa();
module.exports = {
    sa,
    dizi25Cesitmi,
    cesitEkle,
    sonCesitiKaldir,
    indekstekiCesitiGetir,
    ismeGoreCesitCikar,
    kopyala,
    ismeGoreFiltrele,
    ortalamaKelimeSayisi,
    rastgeleTatlar
}
