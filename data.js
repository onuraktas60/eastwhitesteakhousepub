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
  name: "Serpme Kahvaltı",
  desc: "En az iki kişilik",
  price: "",
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
    "Soğan halkası",
    "Nugget",
    "Sigara böreği",
    "Menemen",
    "Sucuklu yumurta",
    "Ekmek",
    "Simit",
    "Poğaça",
    "Açma",
    "Çay"
  ]
},
   {
  name: "Kahvaltı Tabağı",
  desc: "Zengin kahvaltılık çeşitleriyle",
  price: "",
  image: "kahvalti-tabagi.png",
  ingredients: [
    "2 çeşit reçel",
    "Çikolatalı fındık kreması",
    "Helva",
    "Bal-kaymak",
    "3 çeşit peynir",
    "Zeytin çeşitleri",
    "Salam",
    "Salatalık",
    "Domates",
    "Biber",
    "Maydanoz",
    "Yumurta",
    "Ekmek",
    "Çay"
  ]
}  
,
  {
    name: "Kuymak",
    desc: "Tereyağı ve peynir ile",
    price: "",
    image: "kuymak.png"
  },
  {
    name: "Kavurmalı Yumurta",
    desc: "Kavurma ve yumurta",
    price: "",
    image: "kavurmali-yumurta.png"
  },
  {
    name: "Kıymalı Yumurta",
    desc: "Kıyma ve yumurta",
    price: "",
    image: "kiymali-yumurta.png"
  },
  {
    name: "Göz Yumurta",
    desc: "Tereyağında göz yumurta",
    price: "",
    image: "goz-yumurta.png"
  },
  {
    name: "Omlet",
    desc: "Taze yumurta ile",
    price: "",
    image: "omlet.png"
  },
  {
    name: "Haşlanmış Yumurta",
    desc: "Haşlanmış yumurta",
    price: "",
    image: "haslanmis-yumurta.png"
  },
  {
    name: "Sucuklu Yumurta",
    desc: "Sucuk ve yumurta",
    price: "",
    image: "sucuklu-yumurta.png"
  },
  {
    name: "Sucuklu Kaşarlı Yumurta",
    desc: "Sucuk, yumurta ve kaşar",
    price: "",
    image: "sucuklu-kasarli-yumurta.png"
  },
  {
    name: "Menemen",
    desc: "Domates, biber ve yumurta",
    price: "",
    image: "menemen.png"
  },
  {
    name: "Pankek",
    desc: "Yumuşak ve hafif",
    price: "",
    image: "pankek.png"
  },
  {
    name: "Krep",
    desc: "İnce ve yumuşak",
    price: "",
    image: "krep.png"
  },
  {
    name: "Patates Kızartması",
    desc: "Çıtır patatesler",
    price: "",
    image: "parmak-patates.png"
  },
  {
    name: "Soğan Halkası",
    desc: "Çıtır soğan halkaları",
    price: "",
    image: "sogan-halkasi.png"
  },
  {
    name: "Nugget",
    desc: "Çıtır tavuk parçaları",
    price: "",
    image: "nugget.png"
  },
  {
    name: "Sigara Böreği",
    desc: "Çıtır peynirli börek",
    price: "",
    image: "sigara-boregi.png"
  },
  {
    name: "Kızarmış Sucuk",
    desc: "Tavada kızartılmış sucuk",
    price: "",
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
      { name: "Dana Şaşlık", desc: "Bonfile, antrikot, kontrfile seçenekleriyle", price: "", image: "saslik.png" },
      { name: "Şatobriyan", desc: "Orta bonfile", price: "", image: "satobiryan.png" },
      { name: "T-Bone Steak", desc: "Lomboz-sırt", price: "", image: "tbone.png" },
      { name: "R-Bay ", desc: "Antrikot, tuz ve karabiber ile sadece ateşte", price: "", image: "ribeye.png", tag: "Şefin Önerisi",
        ingredients: ["Dana antrikot", "Deniz tuzu", "Kara biber", "Tereyağı", "Kekik"] },
      { name: "New York Steak", desc: "Kontrfile", price: "", image: "newyorksteak.png" },
      { name: "Madalyon", desc: "Bonfile", price: "", image: "madalyon.jpg" },
      { name: "Porterhouse Steak", desc: "Kontrfile + bonfile", price: "", image: "Porterhouse.webp" },
      { name: "Tomahawk Steak", desc: "Kemikli antrikot", price: "", image: "Tomahawk.jpg", tag: "Paylaşımlık" },
      { name: "Kuzu Pirzola", desc: "", price: "", image: "Kuzupirzola.webp" },
      { name: "Kuzu Küşleme", desc: "", price: "", image: "Kuzukusleme.webp" },

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
      { name: "Soğan Çiçeği", desc: "", price: "", image: "sogan-cicegi.jpg" },
      { name: "Izgara Mantar", desc: "", price: "", image: "izgaramantar.png" },
      { name: "Sote Mantar", desc: "", price: "", image: "sotemantar.png" },
      { name: "Kaşarlı Mantar", desc: "", price: "", image: "kasarli-mantar.jpg" },
      { name: "Parmak Patates", desc: "", price: "", image: "parmak-patates.png" },
      { name: "Elma Dilim Patates", desc: "", price: "", image: "elma-dilim.png" },
      { name: "Çıtır Tavuk", desc: "", price: "", image: "chicken.png" },
      { name: "Soğan Halkası", desc: "", price: "", image: "sogan-halkasi.png" }
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
      { name: "Classic Burger", desc: "150 g dana burger köftesi, marul, domates, turşu, karamelize soğan", price: "", image: "clasic.png",
        ingredients: ["Dana köfte 150g", "Marul", "Domates", "Turşu", "Karamelize soğan", "Burger ekmeği"] },
      { name: "Cheeseburger", desc: "150 g dana burger köftesi, çift cheddar peyniri, turşu, soğan, hardal ve ketçap", price: "", image: "chesse.png" },
      { name: "Easwhite Burger", desc: "300 gr et, marul, domates, karamelize Soğan, sos, turşu, cheddar ", price: "", image: "Mushroom.png", tag: "Şefin Önerisi" },
      { name: "Chicken Burger", desc: "Çıtır tavuk, cheddar, marul, turşu, sarımsaklı mayonez", price: "", image: "chicken-burger.png" },
      { name: "Easwhite Chicken Burger", desc: "Tavuk,marul domates, turşu,sos, karamelize soğan,cheddar", price: "", image: "chickencheese.png" }
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
      { name: "Margherita", desc: "Domates sos, mozzarella, fesleğen", price: "", image: "margherita.png",
        ingredients: ["Domates sosu", "Mozzarella", "Taze fesleğen", "Zeytinyağı"] },
      { name: "Pepperoni", desc: "Domates sos, mozzarella, pepperoni", price: "", image: "pepperoni.png" },
      { name: "Vegetarian Pizza", desc: "Mantar, biber, mısır, zeytin", price: "", image: "vegetarian.png" },
      { name: "Prosciutto e Funghi", desc: "Domates sosu, mozzarella, prosciutto cotto (sucuk), mantar", price: "", image: "Prosciutto.png" },
      { name: "Easwhite Pizza", desc: "Domates Sos, Mozzarella, mantar, biber, mısır, zeytin, sucuk", price: "", image: "karisik.png" }
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
      { name: "Kremalı Karamelize Soğanlı", desc: "", price: "", image: "soganli.png" },
      { name: "Napolitan Soslu", desc: "", price: "", image: "marinara.png" },
      { name: "Bolonez Soslu", desc: "", price: "", image: "bolonez.png" },
      { name: "Arabiatta Soslu", desc: "", price: "", image: "arrbiatta.png" },
      { name: "Pesto Soslu", desc: "", price: "", image: "pesto.png" },
      { name: "Kremalı Mantarlı", desc: "", price: "", image: "krema.png" }
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
      { name: "Akdeniz Salatası", desc: "", price: "", image: "akdeniz.png" },
      { name: "Gavurdağı Salata", desc: "", price: "", image: "gavurdagi.png" },
      { name: "Roka Salatası", desc: "", price: "", image: "roka.png" },
      { name: "Mevsim Salata", desc: "", price: "", image: "mevsim.png" },
      { name: "Çoban Salata", desc: "", price: "", image: "coban.png" },
      { name: "Soğan Salatası", desc: "", price: "", image: "sogan.png" }
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

      { name: "Havuç Tarator", desc: "", price: "", image: "havuc-tarator.png" },
      { name: "Köz Patlıcanlı Yoğurt ", desc: "", price: "", image: "koz-patlicanli.png" },
      { name: "Girit Ezmesi", desc: "", price: "", image: "girit.png" },
      { name: "Kuru Cacık", desc: "", price: "", image: "kuru-cacik.png" },
      { name: "Acılı Ezme", desc: "", price: "", image: "acili-ezme.png" },
      { name: "Karışık Söğürme", desc: "", price: "", image: "sogurme.png" },
      { name: "Köz Soğan Mezesi", desc: "", price: "", image: "koz-sogan.png" },
      { name: "Koyun Yoğurdu", desc: "", price: "", image: "yogurt.png" }

    ]
  },
  {
  id: "biralar",
  title: "Biralar / Beers",
  subtitle: "Şişe bira seçenekleri",
  icon: "beer",
  layout: "list",
  heroImage:"beers.png",
  groups: [ {
         name: "Biralar / Beers",
  items: [
    { name: "Efes Şişe", desc: "", price: "", image: "" },
    { name: "Efes Malt Şişe", desc: "", price: "", image: "" },
    { name: "Efes Green Şişe", desc: "", price: "", image: "" },
    { name: "Bomonti Şişe", desc: "", price: "", image: "" },
    { name: "Miller Şişe", desc: "", price: "", image: "" },
    { name: "Corona Şişe", desc: "", price: "", image: "" },
    { name: "Carlsberg Şişe", desc: "", price: "", image: "" },
    { name: "Tuborg Malt Şişe", desc: "", price: "", image: "" },
    { name: "Tuborg Kırmızı Şişe", desc: "", price: "", image: "" }
  ]
}]
},

{
  id: "alkolsuz-icecekler",
  title: "Alkolsüz İçecekler / Non-Alcoholic Drinks",
  subtitle: "Serinletici içecek seçenekleri",
  icon: "drink",
  layout: "list",
    heroImage:"alkolsuz.png",
  groups: [ {
      name: "Alkolsüz İçecekler / Non-Alcoholic Drinks",
    
  items: [
    
    { name: "Coca Cola", desc: "", price: "", image: "" },
    { name: "Fanta", desc: "", price: "", image: "" },
    { name: "Sprite", desc: "", price: "", image: "" },
    { name: "Meyve Suyu", desc: "", price: "", image: "" },
    { name: "Soda", desc: "", price: "", image: "" },
    { name: "Red Bull", desc: "", price: "", image: "" },
    { name: "Ice Tea", desc: "", price: "", image: "" },
    { name: "Türk Kahvesi", desc: "", price: "", image: "" },
    { name: "Çay", desc: "", price: "", image: "" }
  ]
}]
},
{
  
  id: "alkollu-icecekler",
  title: "Alkollü İçecekler",
  subtitle: "Seçkin alkollü içecek çeşitleri",
  icon: "wine",
  layout: "list",
  heroImage: "alkollu-icecekler.png",
    groups: [ {
      name: "Alkollü İçecekler / Alcoholic Drinks",
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
      image: "efes-sise.png"
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
      image: "carlsberg-sise.png"
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
      image: "bomonti-sise.png"
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
      image: "corona-sise.png"
    },
    {
      name: "Miller Şişe",
      desc: "Miller Genuine Draft",
      price: "",
      image: "miller-sise.png"
    }
  ]
}
 ]
},
{
  id: "kokteyller",
  title: "Kokteyller / Cocktails",
  subtitle: "Özenle hazırlanan klasik ve özel kokteyller",
  icon: "cocktail",
  layout: "list",
      heroImage:"kokteyl.png",
  groups: [ {
    name: "Kokteyller / Cocktails",
 items: [
  {
    name: "Mojito",
    desc: "Beyaz rom, lime, nane, şeker, soda",
    price: "",
    image: ""
  },
  {
    name: "Margarita",
    desc: "Tekila, triple sec, lime suyu",
    price: "",
    image: ""
  },
  {
    name: "Cosmopolitan",
    desc: "Votka, Cointreau, lime, turna yemişi suyu",
    price: "",
    image: ""
  },
  {
    name: "Sex on the Beach",
    desc: "Votka, şeftali likörü, portakal suyu, turna yemişi suyu",
    price: "",
    image: ""
  },
  {
    name: "Mai Tai",
    desc: "Rom çeşitleri, orange curaçao, orgeat, lime, şeker şurubu",
    price: "",
    image: ""
  },
  {
    name: "Tekila Sunrise",
    desc: "Tekila, portakal suyu, grenadine",
    price: "",
    image: ""
  },
  {
    name: "Negroni",
    desc: "Gin, Campari, tatlı kırmızı vermut",
    price: "",
    image: ""
  },
  {
    name: "Mezcal Negroni",
    desc: "Mezcal, Campari, tatlı kırmızı vermut",
    price: "",
    image: ""
  },
  {
    name: "Cherokee",
    desc: "Gin, beyaz rom, portakal suyu, esmer şeker",
    price: "",
    image: ""
  },
  {
    name: "B-52",
    desc: "Kahve likörü, Baileys, Cointreau",
    price: "",
    image: ""
  },
  {
    name: "Piña Colada",
    desc: "Beyaz rom, coconut cream, ananas suyu",
    price: "",
    image: ""
  },
  {
    name: "Bahama Mama",
    desc: "Rom, coconut romu, portakal suyu, ananas suyu, grenadine",
    price: "",
    image: ""
  },
  {
    name: "Whiskey Sour",
    desc: "Bourbon, limon suyu, şeker şurubu, yumurta akı",
    price: "",
    image: ""
  },
  {
    name: "Irish Coffee",
    desc: "Irish whiskey, sıcak kahve, şeker, krema",
    price: "",
    image: ""
  },
  {
    name: "Espresso Martini",
    desc: "Votka, kahve likörü, espresso, şeker şurubu",
    price: "",
    image: ""
  },
  {
    name: "Lynchburg Lemonade",
    desc: "Jack Daniel's, triple sec, limon, Sprite",
    price: "",
    image: ""
  },
  {
    name: "Daiquiri",
    desc: "Beyaz rom, lime suyu, şeker",
    price: "",
    image: ""
  },
  {
    name: "Aperol Spritz",
    desc: "Aperol, prosecco, soda",
    price: "",
    image: ""
  },
  {
    name: "Moscow Mule",
    desc: "Votka, ginger beer, lime",
    price: "",
    image: ""
  },
  {
    name: "Kuzu Kulağı",
    desc: "Votka, gin, kuzu kulağı, yeşil elma, lime, soda",
    price: "",
    image: ""
  },
  {
    name: "White Rose",
    desc: "Beyaz rom, lime, şeker şurubu, soda",
    price: "",
    image: ""
  },
  {
    name: "Dry Martini",
    desc: "Gin, kuru vermut, yeşil zeytin",
    price: "",
    image: ""
  },
  {
    name: "Blue Hawaii",
    desc: "Beyaz rom, blue curaçao, ananas suyu, coconut cream, lime",
    price: "",
    image: ""
  },
  {
    name: "Bloody Mary",
    desc: "Votka, domates suyu, limon, Worcestershire sosu, Tabasco, baharatlar",
    price: "",
    image: ""
  },
  {
    name: "Manhattan",
    desc: "Rye whiskey, tatlı kırmızı vermut, Angostura bitters",
    price: "",
    image: ""
  },
  {
    name: "New York Sour",
    desc: "Bourbon veya rye whiskey, limon suyu, şeker şurubu, yumurta akı, kırmızı şarap",
    price: "",
    image: ""
  },
  {
    name: "Bob Marley",
    desc: "Rom, grenadine, ananas suyu, portakal suyu, turunç likörü",
    price: "",
    image: ""
  },
  {
    name: "Gin Tonic",
    desc: "Gin, tonik, lime",
    price: "",
    image: ""
  }
]
}
]
}
];
