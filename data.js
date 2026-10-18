/* ============================================================
   MENÜ VERİSİ
   ------------------------------------------------------------
   Bu dosyayı düzenleyerek ürün ekleyip çıkarabilir,
   fiyat ve fotoğraf ekleyebilirsiniz. Kodun geri kalanına
   (app.js, style.css) dokunmanız gerekmez.

   Alanlar:
   - price: boş bırakılırsa ("") fiyat gösterilmez.
             "620₺" gibi yazabilirsiniz.
   - image: boş bırakılırsa yerine şık bir yer tutucu gösterilir.
             Fotoğrafı /images klasörüne atıp
             image: "urun-adi.jpg" yazmanız yeterli.
             Bir internet linki de yazılabilir.
   - desc:  ürün açıklaması (opsiyonel).
   - tag:   fotoğrafın üstünde küçük bir rozet, örn. "Şefin Önerisi" (opsiyonel).
   - ingredients: detay ekranında listelenecek malzemeler (opsiyonel, dizi).
   ============================================================ */

const RESTAURANT = {
  name: "East White Steak House & Pub Bar",
  full: "Steak House & Pub Bar",
  logo: "logo.png",
  tagline: "Odun ateşinde pişen steak, sıcacık bir pub sofrası",
  note: "Fiyatlarımıza KDV dahildir. Alerjiniz varsa lütfen personelimize bildirin."
};

const MENU = [



  {
    id: "kahvalti",
    title: "Kahvaltılıklar",
    subtitle: "Güne taze ve lezzetli bir başlangıç.",
    icon: "egg",
    layout: "grid",
    heroImage: "serpme.png",
    items: [
     {
  name: "Açık Büfe Kahvaltı",
  desc: "",
  price: "1000 ₺",
  image: "serpme.png",
  ingredients: [
    "3 çeşit reçel",
    "Çikolatalı fındık kreması",
    "Tahin-pekmez",
    "Bal-kaymak",
    "Helva",
    "Tereyağı",
    "5 çeşit peynir",
    "Zeytin çeşitleri",
    "Acuka",
    "Salam",
    "Salatalık",
    "Domates",
    "Biber",
    "Maydanoz",
    "Marul",
    "Kuru meyveler",
    "Mevsim meyveleri",
    "Ceviz",
    "Patates kızartması",
    "Çıtır tavuk",
    "Nugget",
    "Sigara böreği",
    "Göz Yumurta",
    "Ekmek",
    "Çay"
  ]
},
   {
  name: "Kahvaltı Tabağı",
  desc: "Zengin kahvaltılık çeşitleriyle",
  price: "400 ₺",
  image: "kahvalti-tabagi.png",
  ingredients: [
    "2 çeşit reçel",
    "Çikolatalı fındık kreması",
    "Haşlanmış Yumurta",
    "Sigara Böreği",
    "3 çeşit peynir",
    "Zeytin çeşitleri",
    "Salam",
    "Salatalık",
    "Domates",
    "Biber",
    "Maydanoz",
    "Ekmek",
    "Çay"
  ]
}  
,
  {
    name: "Kuymak",
    desc: "Tereyağı ve peynir ile",
    price: "400 ₺",
    image: "kuymak.png"
  },
  {
    name: "Kavurmalı Yumurta",
    desc: "Kavurma ve yumurta",
    price: "200 ₺",
    image: "kavurmali-yumurta.png"
  },
  {
    name: "Kıymalı Yumurta",
    desc: "Kıyma ve yumurta",
    price: "200 ₺",
    image: "kiymali-yumurta.png"
  },
  {
    name: "Göz Yumurta",
    desc: "Tereyağında göz yumurta",
    price: "100 ₺",
    image: "goz-yumurta.png"
  },
  {
    name: "Omlet",
    desc: "Taze yumurta ile",
    price: "100 ₺",
    image: "omlet.png"
  },
  {
    name: "Haşlanmış Yumurta",
    desc: "Haşlanmış yumurta",
    price: "25 ₺",
    image: "haslanmis-yumurta.png"
  },
  {
    name: "Sucuklu Yumurta",
    desc: "Sucuk ve yumurta",
    price: "175 ₺",
    image: "sucuklu-yumurta.png"
  },
  {
    name: "Sucuklu Kaşarlı Yumurta",
    desc: "Sucuk, yumurta ve kaşar",
    price: "200 ₺",
    image: "sucuklu-kasarli-yumurta.png"
  },
  {
    name: "Menemen",
    desc: "Domates, biber ve yumurta",
    price: "150 ₺",
    image: "menemen.png"
  },

  {
    name: "Patates Kızartması",
    desc: "Çıtır patatesler",
    price: "120 ₺",
    image: "parmak-patates.png"
  },

  {
    name: "Nugget",
    desc: "Çıtır tavuk parçaları",
    price: "175 ₺",
    image: "nugget.png"
  },
  {
    name: "Sigara Böreği",
    desc: "Çıtır peynirli börek",
    price: "175 ₺",
    image: "sigara-boregi.png"
  },
  {
    name: "Kızarmış Sucuk",
    desc: "Tavada kızartılmış sucuk",
    price: "200 ₺",
    image: "kizarmis-sucuk.png"
  }

    ]
  },
  {
    id: "steaks",
    title: "Signature Steaklar",
    subtitle: "Odun ızgarada, isteğinize göre pişirilir",
    icon: "steak",
    layout: "grid",
    heroImage: "steak.png",
    items: [
      { name: "Dana Şaşlık", desc: "200 gr bonfile , domates ve biber ile servis edilir.", price: "550 ₺", image: "saslik.png" },
      { name: "Şatobriyan", desc: "-250gr bonfile", price: "650 ₺", image: "satobiryan.png" },
      { name: "T-Bone Steak", desc: "350 gr et ve garnitürler ile servis edilir.", price: "700 ₺", image: "tbone.png" },
      { name: "R-Bay ", desc: "200 gr antrikot ve garnitürler ile servis edilir.", price: "450 ₺", image: "ribeye.png", tag: "Şefin Önerisi",},
      { name: "New York Steak", desc: "200 gr Kontrfile ve garnitürler ile servis edilir.", price: "450 ₺", image: "newyorksteak.png" },
      { name: "Madalyon", desc: "200 gr bonfile ve garnitürler ile servis edilir.", price: "500 ₺", image: "madalyon.jpg" },
      { name: "Tomahawk Steak", desc: "800 gr garnitürler ile servis edilebilir", price: "1600 ₺", image: "Tomahawk.jpg", tag: "Paylaşımlık" },
      { name: "Pirzola", desc: "200 gr pirzola ve garnitürler ile servis edilir.", price: "450 ₺", image: "Kuzupirzola.webp" },
       { name: "Kasap Köfte", desc: "200 gr köfte ve garnitürler ile servis edilir.", price: "450 ₺", image: "kasap-kofte.png" },
             { name: "Kaşarlı Kasap Köfte", desc: "200 gr kaşarlı köfte ve garnitürler ile servis edilir.", price: "550 ₺", image: "kasar-kofte.png" }

    ]
  },
  {
    id: "baslangiclar",
    title: "Başlangıçlar",
    subtitle: "",
    icon: "leaf",
    layout: "grid",
    heroImage:"baslangic.png",
    items: [
      { name: "Izgara Mantar", desc: "", price: "200 ₺", image: "izgaramantar.png" },
      { name: "Kaşarlı Mantar", desc: "", price: "250 ₺", image: "kasarli-mantar.jpg" },
      { name: "Parmak Patates", desc: "", price: "150 ₺", image: "parmak-patates.png" },
      { name: "Elma Dilim Patates", desc: "", price: "200 ₺", image: "elma-dilim.png" },
      { name: "Çıtır Tavuk", desc: "", price: "300 ₺", image: "chicken.png" }
    ]
  },
  {
    id: "burgerler",
    title: "Burgerler",
    subtitle: "",
    icon: "burger",
    layout: "grid",
       heroImage:"burger.png",
    footnote: "Burger köftesi %80 dana döş, %20 yağ oranıyla hazırlanır. Tavuk burgerlerde but eti kullanılır.",
    items: [
      { name: "Classic Burger", desc: "150 gr köfte ,marul, domates, kornişon turşu ve burger sos. Patates kızartması ile servis edilir.", price: "450 ₺", image: "clasic.png"},
      { name: "Cheeseburger", desc: "150 gr köfte, cheddar marul, Domates, kornişon turşu, burger sos.Patates kızartması ile servis edilir.", price: "500 ₺", image: "chesse.png" },
      { name: "Easwhite Burger", desc: "300 gr köfte (çift), 2 dilim cheddar,marul, domates,kornişon turşu, karamelize, soğan, burger sos.Patates kızartması ile servis edilir. ", price: "800 ₺", image: "Mushroom.png", tag: "Şefin Önerisi" },
      { name: "Chicken Burger", desc: "Tavuk, marul, domates, kornişon turşu, burger sos.Patates kızartması ile servis edilir.", price: "400 ₺", image: "chicken-burger.png" }
    ]
  },
  {
    id: "pizzalar",
    title: "Pizzalar",
    subtitle: "",
    icon: "pizza",
    layout: "grid",
      heroImage:"pizza.png",
    items: [
      { name: "Margherita", desc: "Domates sos, mozzarella, fesleğen", price: "350 ₺", image: "margherita.png"},
      { name: "Pepperoni", desc: "Domates sos, mozzarella, pepperoni", price: "425 ₺", image: "pepperoni.png" },
      { name: "Vegetarian Pizza", desc: "Mantar, biber, mısır, zeytin", price: "350 ₺", image: "vegetarian.png" },
      { name: "Prosciutto e Funghi", desc: "Domates sosu, mozzarella, prosciutto cotto (sucuk), mantar", price: "475 ₺", image: "Prosciutto.png" },
      { name: "Easwhite Pizza", desc: "Domates Sos, Mozzarella, mantar, biber, mısır, zeytin, sucuk", price: "550 ₺", image: "karisik.png" }
    ]
  },
  {
    id: "makarnalar",
    title: "Makarnalar",
    subtitle: "",
    icon: "pasta",
    layout: "grid",
     heroImage:"makarna.png",
    items: [
      { name: "Kremalı Karamelize Soğanlı", desc: "", price: "300 ₺", image: "soganli.png" },
      { name: "Napolitan Soslu", desc: "", price: "300 ₺", image: "marinara.png" },
      { name: "Bolonez Soslu", desc: "", price: "400 ₺", image: "bolonez.png" },
      { name: "Arabiatta Soslu", desc: "", price: "300 ₺", image: "arrbiatta.png" },
      { name: "Pesto Soslu", desc: "", price: "300 ₺", image: "pesto.png" },
      { name: "Kremalı Mantarlı", desc: "", price: "300 ₺", image: "krema.png" }
    ]
  },
  {
    id: "salatalar",
    title: "Salatalar",
    subtitle: "",
    icon: "salad",
    layout: "grid",
     heroImage:"salata.png",
    items: [
      { name: "Akdeniz Salatası", desc: "", price: "150 ₺", image: "akdeniz.png" },
      { name: "Gavurdağı Salata", desc: "", price: "200 ₺", image: "gavurdagi.png" },
      { name: "Roka Salatası", desc: "", price: "100 ₺", image: "roka.png" },
      { name: "Mevsim Salata", desc: "", price: "120 ₺", image: "mevsim.png" },
      { name: "Çoban Salata", desc: "", price: "120 ₺", image: "coban.png" },
      { name: "Ton Balıklı Salata", desc: "", price: "400 ₺", image: "ton-balikli.png" },
      { name: "Sezar Salata", desc: "", price: "450 ₺", image: "sezar.png" }
    ]
  },
  {
    id: "mezeler",
    title: "Mezeler",
    subtitle: "",
    icon: "meze",
    layout: "grid",
      heroImage:"meze.png",
    items: [

      { name: "Havuç Tarator", desc: "", price: "200 ₺", image: "havuc-tarator.png" },
      { name: "Köz Patlıcanlı Yoğurt ", desc: "", price: "200 ₺", image: "koz-patlicanli.png" },
      { name: "Girit Ezmesi", desc: "", price: "250 ₺", image: "girit.png" },
      { name: "Kuru Cacık", desc: "", price: "150 ₺", image: "kuru-cacik.png" },
      { name: "Babaganuş", desc: "", price: "200 ₺", image: "sogurme.png" },
      { name: "Koyun Yoğurdu", desc: "", price: "200 ₺", image: "yogurt.png" },
      { name: "Atom", desc: "", price: "200 ₺", image: "atom.png" }

    ]
  },
  {
  id: "biralar",
  title: "Biralar / Beers",
  subtitle: "Şişe bira seçenekleri",
  icon: "beer",
  layout: "grid",
  heroImage:"beers.png",

  items: [
    { name: "Efes Şişe", desc: "", price: "", image: "efes.png" },
    { name: "Efes Malt Şişe", desc: "", price: "", image: "efes-malt.png" },
    { name: "Efes Green Şişe", desc: "", price: "", image: "efes-green.png" },
    { name: "Bomonti Şişe", desc: "", price: "", image: "bomonti.png" },
    { name: "Miller Şişe", desc: "", price: "", image: "miller.png" },
    { name: "Corona Şişe", desc: "", price: "", image: "corona.png" },
    { name: "Carlsberg Şişe", desc: "", price: "", image: "carlsberg.png" },
    { name: "Tuborg Malt Şişe", desc: "", price: "", image: "tuborg.png" },
    { name: "Tuborg Kırmızı Şişe", desc: "", price: "", image: "tuborg-kirmizi.png" }
  ]
},

{
  id: "alkolsuz-icecekler",
  title: "Alkolsüz İçecekler / Non-Alcoholic Drinks",
  subtitle: "Serinletici içecek seçenekleri",
  icon: "drink",
  layout: "grid",
    heroImage:"alkolsuz.png",
  items: [
    
    { name: "Coca Cola", desc: "", price: "", image: "cola.png" },
    { name: "Fanta", desc: "", price: "", image: "fanta.png" },
    { name: "Sprite", desc: "", price: "", image: "sprite.png" },
    { name: "Meyve Suyu", desc: "", price: "", image: "meyvesuyu.png" },
    { name: "Soda", desc: "", price: "", image: "soda.png" },
    { name: "Red Bull", desc: "", price: "", image: "redbull.png" },
    { name: "Ice Tea", desc: "", price: "", image: "icetea.png" },
    { name: "Türk Kahvesi", desc: "", price: "", image: "kahve.png" },
    { name: "Çay", desc: "", price: "", image: "cay.png" }
  ]

},
{
  
  id: "alkollu-icecekler",
  title: "Alkollü İçecekler",
  subtitle: "Seçkin alkollü içecek çeşitleri",
  icon: "wine",
  layout: "grid",
  heroImage: "alkollu-icecekler.png",

  items: [
    {
      name: "Yeni Rakı",
      desc: "Klasik Türk rakısı",
      price: "",
      image: "yeni-raki.png"
    },
    {
      name: "Beylerbeyi Rakı",
      desc: "Premium Türk rakısı",
      price: "",
      image: "beylerbeyi-raki.png"
    },
    {
      name: "Tekirdağ Rakısı",
      desc: "Geleneksel Türk rakısı",
      price: "",
      image: "tekirdag-rakisi.png"
    },
    {
      name: "Chivas Regal",
      desc: "İskoç harman viski",
      price: "",
      image: "chivas-regal.png"
    },
    {
      name: "Scotch Blue",
      desc: "Blended Scotch Whisky",
      price: "",
      image: "scotch-blue.png"
    },
    {
      name: "Gentleman Jack",
      desc: "Tennessee whiskey",
      price: "",
      image: "gentleman-jack.png"
    },
    {
      name: "Red Label",
      desc: "Blended Scotch Whisky",
      price: "",
      image: "red-label.png"
    },
    {
      name: "Jack Daniel's",
      desc: "Tennessee whiskey",
      price: "",
      image: "jack-daniels.png"
    },
    {
      name: "J&B",
      desc: "Blended Scotch Whisky",
      price: "",
      image: "jb.png"
    },
    {
      name: "Absolut Vodka",
      desc: "İsveç votkası",
      price: "",
      image: "absolut-vodka.png"
    },
    {
      name: "İstanblue Vodka",
      desc: "Premium votka",
      price: "",
      image: "istanblue-vodka.png"
    },
    {
      name: "Gilbey's Gin",
      desc: "London Dry Gin",
      price: "",
      image: "gilbeys-gin.png"
    },
    {
      name: "Mezcal",
      desc: "Agave bazlı Meksika içkisi",
      price: "",
      image: "mezcal.png"
    },
    {
      name: "Jägermeister",
      desc: "Bitkisel likör",
      price: "",
      image: "jagermeister.png"
    },
    {
      name: "Bacardi Rum",
      desc: "Beyaz rom",
      price: "",
      image: "bacardi-rum.png"
    },
    {
      name: "Bacardi Rum Siyah",
      desc: "Koyu rom",
      price: "",
      image: "bacardi-black.png"
    },
    {
      name: "Olmeca Tekila",
      desc: "Agave bazlı tekila",
      price: "",
      image: "olmeca-tekila.png"
    },
    {
      name: "Baileys",
      desc: "İrlanda kremalı likör",
      price: "",
      image: "baileys.png"
    },
    {
      name: "Efes Şişe",
      desc: "Efes bira",
      price: "",
      image: "efes.png"
    },
    {
      name: "Efes Malt Kutu",
      desc: "Efes Malt bira",
      price: "",
      image: "efes-malt-kutu.png"
    },
    {
      name: "Carlsberg Şişe",
      desc: "Carlsberg bira",
      price: "",
      image: "carlsberg.png"
    },
    {
      name: "Carlsberg Kutu",
      desc: "Carlsberg bira",
      price: "",
      image: "carlsberg-kutu.png"
    },
    {
      name: "Bomonti Şişe",
      desc: "Bomonti bira",
      price: "",
      image: "bomonti.png"
    },
    {
      name: "Amsterdam Kutu",
      desc: "Amsterdam bira",
      price: "",
      image: "amsterdam-kutu.png"
    },
    {
      name: "Corona Şişe",
      desc: "Corona Extra bira",
      price: "",
      image: "corona.png"
    },
    {
      name: "Miller Şişe",
      desc: "Miller Genuine Draft",
      price: "",
      image: "miller.png"
    }
 ]
},
{
  id: "kokteyller",
  title: "Kokteyller / Cocktails",
  subtitle: "Özenle hazırlanan klasik ve özel kokteyller",
  icon: "cocktail",
  layout: "grid",
      heroImage:"kokteyl.png",
 items: [
  {
    name: "Mojito",
    desc: "Beyaz rom, lime, nane, şeker, soda",
    price: "",
    image: "mojito.png"
  },
  {
    name: "Margarita",
    desc: "Tekila, triple sec, lime suyu",
    price: "",
    image: "margarita.png"
  },
  {
    name: "Cosmopolitan",
    desc: "Votka, Cointreau, lime, turna yemişi suyu",
    price: "",
    image: "cosmopolitan.png"
  },
  {
    name: "Sex on the Beach",
    desc: "Votka, şeftali likörü, portakal suyu, turna yemişi suyu",
    price: "",
    image: "sex-on-the-beach.png"
  },
  {
    name: "Mai Tai",
    desc: "Rom çeşitleri, orange curaçao, orgeat, lime, şeker şurubu",
    price: "",
    image: "mai-tai.png"
  },
  {
    name: "Tekila Sunrise",
    desc: "Tekila, portakal suyu, grenadine",
    price: "",
    image: "tekila-sunrise.png"
  },
  {
    name: "Negroni",
    desc: "Gin, Campari, tatlı kırmızı vermut",
    price: "",
    image: "negroni.png"
  },
  {
    name: "Mezcal Negroni",
    desc: "Mezcal, Campari, tatlı kırmızı vermut",
    price: "",
    image: "mezcal-negroni.png"
  },
  {
    name: "Cherokee",
    desc: "Gin, beyaz rom, portakal suyu, esmer şeker",
    price: "",
    image: "cherokee.png"
  },
  {
    name: "B-52",
    desc: "Kahve likörü, Baileys, Cointreau",
    price: "",
    image: "b-52.png"
  },
  {
    name: "Piña Colada",
    desc: "Beyaz rom, coconut cream, ananas suyu",
    price: "",
    image: "pina-colada.png"
  },
  {
    name: "Bahama Mama",
    desc: "Rom, coconut romu, portakal suyu, ananas suyu, grenadine",
    price: "",
    image: "bahama-mama.png"
  },
  {
    name: "Whiskey Sour",
    desc: "Bourbon, limon suyu, şeker şurubu, yumurta akı",
    price: "",
    image: "whiskey-sour.png"
  },
  {
    name: "Irish Coffee",
    desc: "Irish whiskey, sıcak kahve, şeker, krema",
    price: "",
    image: "irish-coffee.png"
  },
  {
    name: "Espresso Martini",
    desc: "Votka, kahve likörü, espresso, şeker şurubu",
    price: "",
    image: "espresso-martini.png"
  },
  {
    name: "Lynchburg Lemonade",
    desc: "Jack Daniel's, triple sec, limon, Sprite",
    price: "",
    image: "lyncburg-lemonade.png"
  },
  {
    name: "Daiquiri",
    desc: "Beyaz rom, lime suyu, şeker",
    price: "",
    image: "daiquiri.png"
  },
  {
    name: "Aperol Spritz",
    desc: "Aperol, prosecco, soda",
    price: "",
    image: "aperol-spritz.png"
  },
  {
    name: "Moscow Mule",
    desc: "Votka, ginger beer, lime",
    price: "",
    image: "moscow-mule.png"
  },
  {
    name: "Kuzu Kulağı",
    desc: "Votka, gin, kuzu kulağı, yeşil elma, lime, soda",
    price: "",
    image: "kuzu-kulagi.png"
  },
  {
    name: "White Rose",
    desc: "Beyaz rom, lime, şeker şurubu, soda",
    price: "",
    image: "white-rose.png"
  },
  {
    name: "Dry Martini",
    desc: "Gin, kuru vermut, yeşil zeytin",
    price: "",
    image: "dry-martini.png"
  },
  {
    name: "Blue Hawaii",
    desc: "Beyaz rom, blue curaçao, ananas suyu, coconut cream, lime",
    price: "",
    image: "blue-hawaii.png"
  },
  {
    name: "Bloody Mary",
    desc: "Votka, domates suyu, limon, Worcestershire sosu, Tabasco, baharatlar",
    price: "",
    image: "bloody-mary.png"
  },
  {
    name: "Manhattan",
    desc: "Rye whiskey, tatlı kırmızı vermut, Angostura bitters",
    price: "",
    image: "manhattan.png"
  },
  {
    name: "New York Sour",
    desc: "Bourbon veya rye whiskey, limon suyu, şeker şurubu, yumurta akı, kırmızı şarap",
    price: "",
    image: "newyork-sour.png"
  },
    {
  name: "Collins",
  desc: "Cin, limon suyu, şeker şurubu, soda",
  price: "",
  image: "collins.png"
},
{
  name: "Appletini",
  desc: "Votka, yeşil elma likörü, elma suyu, limon suyu",
  price: "",
  image: "appletini.png"
},
{
  name: "Pornstar Martini",
  desc: "Vanilyalı votka, passion fruit (çarkıfelek meyvesi) püresi, passion fruit likörü, vanilya şurubu, lime suyu",
  price: "",
  image: "pornstar-martini.png"
},
{
  name: "Paloma",
  desc: "Tekila, greyfurt sodası, lime suyu, tuz",
  price: "",
  image: "paolma.png"
},
  {
    name: "Bob Marley",
    desc: "Rom, grenadine, ananas suyu, portakal suyu, turunç likörü",
    price: "",
    image: "bob-marley.png"
  },
  {
    name: "Gin Tonic",
    desc: "Gin, tonik, lime",
    price: "",
    image: "gin-tonic.png"
  }

]
}
];
