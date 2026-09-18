# East White — QR Menü Sitesi

Saf HTML/CSS/JS ile hazırlanmış, build gerektirmeyen mobil bir QR menü sitesi.
Üstte, sağa doğru kaydırılan kategori sekmeleri var; bir sekmeye veya kategori
fotoğrafına dokunulduğunda o bölümün ürünleri fotoğraflı kartlar halinde
açılıyor, bir ürüne dokunulduğunda büyük fotoğraflı detay sayfası geliyor.

## Ekranlar

1. **Ana sayfa** — logo, üstte kaydırılabilir kategori sekmeleri, altında her
   kategori için büyük fotoğraflı kart (Signature Steaklar, Burgerler, vb.)
2. **Kategori sayfası** — çoğu kategori 2 sütunlu fotoğraflı ürün kartları
   (fotoğraf + isim + fiyat) şeklinde; Serpme Kahvaltı, çok sayıda küçük ürün
   içerdiği için tek bir kapak fotoğrafı + gruplanmış liste şeklinde gösterilir.
3. **Ürün detayı** — büyük fotoğraf, isim, fiyat, açıklama ve (varsa)
   malzeme listesi.

## Dosyalar

- `index.html` — sayfa iskeleti, dokunmanıza gerek yok
- `style.css` — görsel tasarım
- `data.js` — **menü içeriği burada.** Ürün, fiyat, fotoğraf eklemek/çıkarmak için bu dosyayı düzenleyin
- `app.js` — kategori/ürün ekranlarını `data.js`'ten okuyup ekrana basan mantık, dokunmanıza gerek yok
- `images/logo.png` — East White logosu (üst çubukta ve ana sayfada kullanılıyor)

## Vercel'de yayınlama

1. Bu klasörü bir GitHub reposuna yükleyin (veya doğrudan Vercel CLI ile).
2. [vercel.com](https://vercel.com) üzerinden "New Project" ile repoyu seçin.
3. Framework Preset olarak **"Other"** seçin — build adımı yoktur, Vercel dosyaları olduğu gibi yayınlar.
4. Deploy edin. Size verilen `.vercel.app` linkini (veya bağladığınız kendi alan adınızı) QR koda çevirip masalara koyabilirsiniz.

CLI ile yayınlamak isterseniz, bu klasörün içinde:

```
npm i -g vercel
vercel
```

komutları yeterlidir.

## Fotoğraf ekleme (en önemli kısım)

Şu an tüm ürünlerde fotoğraf alanı boş — yerlerinde markanın renklerinde şık
bir ikon duruyor. Kendi fotoğraflarınızı eklemek için:

1. Fotoğrafları bu klasördeki `images/` içine kopyalayın (örn. `images/ribeye.jpg`).
   Kare (1:1) veya 4:3 oranında, iyi ışıklı fotoğraflar en iyi sonucu verir.
2. `data.js` içinde ilgili ürünü bulun ve `image: ""` kısmını
   `image: "images/ribeye.jpg"` olarak değiştirin.
3. Kategori kartının ana sayfadaki büyük fotoğrafı için ilgili kategorinin
   en üstündeki `heroImage: ""` alanını aynı şekilde doldurun (steaks, kahvaltı
   gibi kategorilerde mevcuttur, istediğiniz diğerlerine de ekleyebilirsiniz).

Fotoğrafsız bıraktığınız ürünler otomatik olarak markanın bronz/kahve
tonlarında bir yer tutucuyla gösterilir, hiçbir ürün "kırık" görünmez.

## Diğer alanlar

Her ürün şu şekildedir:

```js
{
  name: "Ribeye",
  desc: "Antrikot, tuz ve karabiber ile sadece ateşte",
  price: "",                 // "850₺" gibi yazın, boşsa fiyat gizlenir
  image: "",                 // images/ribeye.jpg
  tag: "Şefin Önerisi",      // fotoğrafın üstünde küçük rozet (opsiyonel, silinebilir)
  ingredients: ["Dana antrikot", "Deniz tuzu", "Kara biber"]  // detay sayfasında listelenir (opsiyonel)
}
```

- **Yeni ürün eklemek için:** aynı kategori içindeki `items` listesine (veya
  kahvaltıdaki ilgili `groups` altına) aynı formatta yeni bir satır ekleyin.
- **Yeni kategori eklemek için:** `MENU` dizisine yeni bir
  `{ id, title, icon, layout: "grid", items: [...] }` bloğu ekleyin.
  `icon` için: `egg`, `steak`, `leaf`, `burger`, `pizza`, `pasta`, `salad`, `meze`.
  Çok sayıda küçük ürün içeren bir kategori için `layout: "list"` ve `groups`
  kullanın (kahvaltı bölümündeki gibi).
- **Restoran adı / logo:** dosyanın en üstündeki `RESTAURANT` alanından
  değiştirin.

Değişiklikleri kaydedip GitHub'a push ettiğinizde Vercel siteyi otomatik
olarak günceller.

## Yerelde önizleme

`index.html` dosyasına doğrudan çift tıklayıp tarayıcıda açabilir, ya da klasör içinde
`npx serve` çalıştırıp verilen linki açabilirsiniz.
