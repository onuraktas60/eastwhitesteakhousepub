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
  desc: "",
  price: "Kişi Başı 700 ₺",
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
  price: "500 ₺",
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
    name: "Kavurmalı Yumurta",
    desc: "Kavurma ve yumurta",
    price: "350 ₺",
    image: "kavurmali-yumurta.png"
  },
  {
    name: "Kıymalı Yumurta",
    desc: "Kıyma ve yumurta",
    price: "350 ₺",
    image: "kiymali-yumurta.png"
  },
  {
    name: "Göz Yumurta",
    desc: "Tereyağında göz yumurta",
    price: "250 ₺",
    image: "goz-yumurta.png"
  },
  {
    name: "Omlet",
    desc: "Taze yumurta ile",
    price: "200 ₺",
    image: "omlet.png"
  },
  {
    name: "Haşlanmış Yumurta",
    desc: "Haşlanmış yumurta",
    price: "Adet 50 ₺",
    image: "haslanmis-yumurta.png"
  },
  {
    name: "Sucuklu Yumurta",
    desc: "Sucuk ve yumurta",
    price: "350 ₺",
    image: "sucuklu-yumurta.png"
  },
  {
    name: "Sucuklu Kaşarlı Yumurta",
    desc: "Sucuk, yumurta ve kaşar",
    price: "400 ₺",
    image: "sucuklu-kasarli-yumurta.png"
  },
  {
    name: "Menemen",
    desc: "Domates, biber ve yumurta",
    price: "250 ₺",
    image: "menemen.png"
  },

  {
    name: "Patates Kızartması",
    desc: "Çıtır patatesler",
    price: "200 ₺",
    image: "parmak-patates.png"
  },

  {
    name: "Nugget",
    desc: "Çıtır tavuk parçaları",
    price: "250 ₺",
    image: "nugget.png"
  },
  {
    name: "Sigara Böreği(4 Adet)",
    desc: "Çıtır peynirli börek",
    price: "200 ₺",
    image: "sigara-boregi.png"
  },
  {
    name: "Kızarmış Sucuk",
    desc: "Tavada kızartılmış sucuk",
    price: "400 ₺",
    image: "kizarmis-sucuk.png"
  }

    ]
  },
   {
    id: "baslangiclar",
    title: "Ara Sıcaklar",
    subtitle: "",
    icon: "leaf",
    layout: "grid",
    heroImage:"baslangic.png",
    items: [
      { name: "Izgara Mantar", desc: "", price: "400 ₺", image: "izgaramantar.png" },
      { name: "Kaşarlı Güveçte Mantar", desc: "", price: "450 ₺", image: "kasarli-mantar.jpg" },
      { name: "Parmak Patates", desc: "", price: "250 ₺", image: "parmak-patates.png" },
      { name: "Elma Dilim Patates", desc: "", price: "300 ₺", image: "elma-dilim.png" },
      { name: "Çıtır Tavuk", desc: "", price: "400 ₺", image: "chicken.png" },
      { name: "Pastırmalı Paçanga Böreği", desc: "", price: "500 ₺", image: "pacanga.png" },
      { name: "Sigara Böreği", desc: "", price: "300 ₺", image: "sigara.png" },
      { name: "Yaprak Ciğer", desc: "", price: "600 ₺", image: "ciger.png" },
      { name: "Pastırmalı Sıcak Humus", desc: "", price: "600 ₺", image: "humus.png" },
      { name: "Tereyağlı Karides", desc: "", price: "500 ₺", image: "karides.png" },
      { name: "Kalamar", desc: "", price: "500 ₺", image: "kalamar.png" },
      { name: "Fırında Kaşarlı Mantar", desc: "", price: "400 ₺", image: "kasarli-mantarli.png" },
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
      { name: "Dana Şaşlık", desc: "200 gr bonfile , domates ve biber ile servis edilir.", price: "650 ₺", image: "saslik.png" },
      { name: "Şatobriyan", desc: "-250gr bonfile", price: "750 ₺", image: "satobiryan.png" },
      { name: "T-Bone Steak", desc: "350 gr et ve garnitürler ile servis edilir.", price: "750 ₺", image: "tbone.png" },
      { name: "R-Bay ", desc: "200 gr antrikot ve garnitürler ile servis edilir.", price: "650 ₺", image: "ribeye.png", tag: "Şefin Önerisi",},
      { name: "New York Steak", desc: "200 gr Kontrfile ve garnitürler ile servis edilir.", price: "700 ₺", image: "newyorksteak.png" },
      { name: "Madalyon", desc: "200 gr bonfile ve garnitürler ile servis edilir.", price: "700 ₺", image: "madalyon.jpg" },
      { name: "Pirzola", desc: "200 gr pirzola ve garnitürler ile servis edilir.", price: "Kuzu 650 ₺ Dana 750 ₺", image: "Kuzupirzola.webp" },
      { name: "Kasap Köfte", desc: "200 gr köfte ve garnitürler ile servis edilir.", price: "500 ₺", image: "kasap-kofte.png" },
      { name: "Kaşarlı Kasap Köfte", desc: "200 gr kaşarlı köfte ve garnitürler ile servis edilir.", price: "650 ₺", image: "kasar-kofte.png" },
      { name: "Demi Glace Bonfile", desc: "", price: "750 ₺", image: "demi.png" },
      { name: "Cafe De Paris Bonfile", desc: "500gr ", price: "1500 ₺", image: "cafede.png" },
      { name: "Mantar Soslu Bonfile", desc: "", price: "800 ₺", image: "kremali-steak.png" },
      { name: "Kuzu Lokum", desc: "", price: "800 ₺", image: "lokum.png" },
      { name: "Eastwhite Bonfile", desc: "", price: "900 ₺", image: "eastwhite-bonfile.png" }

    ]
  },
  
  {
    id: "tavuk",
    title: "Tavuk Yemekleri",
    subtitle: "",
    icon: "steak",
    layout: "grid",
    heroImage: "tavuklar.png",
    items: [
      { name: "Köri Soslu Tavuk", desc: "", price: "450 ₺", image: "kori-tavuk.png" },
      { name: "Kremalı Mantarlı Tavuk", desc: "", price: "450 ₺", image: "krema-tavuk.png" },
      { name: "Barbekü Soslu Tavuk", desc: "", price: "450 ₺", image: "barbeku-tavuk.png" },
      { name: "Tavuk Kanat", desc: "", price: "450 ₺", image: "kanat.png",},
      { name: "Kaşarlı Tavuk Sote", desc: "", price: "450 ₺", image: "kasarli-tavuk.png" },
      { name: "Tavuk Şinitzel", desc: "", price: "450 ₺", image: "sinitzel.png" },
      { name: "Mantar Soslu Tavuk Şinitzel", desc: "", price: "550 ₺", image: "mantar-sinitzel.png" }

    ]
  },

   {
    id: "balik",
    title: "Balıklar",
    subtitle: "Balık Çeşitleri Mevsime Göre Değişiklik Gösterebilir.",
    icon: "steak",
    layout: "grid",
    heroImage: "baliklar.png",
    items: [
      { name: "Çupra", desc: "", price: "", image: "cupra.png" },
      { name: "Levrek", desc: "", price: "", image: "levrek.png" },
      { name: "Alabalık", desc: "", price: "", image: "alabalik.png" }
    ]
  },

     {
    id: "cokertme",
    title: "Çökertmeler",
    subtitle: "",
    icon: "steak",
    layout: "grid",
    heroImage: "cokertmeler.png",
    items: [
      { name: "Et Çökertme", desc: "", price: "700 ₺", image: "et-cokertme.png" },
      { name: "Köfteli Çökertme", desc: "", price: "650 ₺", image: "kofte-cokertme.png" },
      { name: "Tavuk Çökertme", desc: "", price: "500 ₺", image: "tavuk-cokertme.png" }
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
      { name: "Classic Burger", desc: "150 gr köfte ,marul, domates, kornişon turşu ve burger sos. Patates kızartması ile servis edilir.", price: "500 ₺", image: "clasic.png"},
      { name: "Cheeseburger", desc: "150 gr köfte, cheddar marul, Domates, kornişon turşu, burger sos.Patates kızartması ile servis edilir.", price: "600 ₺", image: "chesse.png" },
      { name: "Easwhite Burger", desc: "300 gr köfte (çift), 2 dilim cheddar,marul, domates,kornişon turşu, karamelize, soğan, burger sos.Patates kızartması ile servis edilir. ", price: "800 ₺", image: "Mushroom.png", tag: "Şefin Önerisi" },
      { name: "Çıtır Tavuk Burger", desc: "Tavuk, marul, domates, kornişon turşu, burger sos.Patates kızartması ile servis edilir.", price: "450 ₺", image: "chicken-burger.png" }
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
      { name: "Margherita", desc: "Domates sos, mozzarella, fesleğen", price: "400 ₺", image: "margherita.png"},
      { name: "Pepperoni", desc: "Domates sos, mozzarella, pepperoni", price: "450 ₺", image: "pepperoni.png" },
      { name: "Vegetarian Pizza", desc: "Mantar, biber, mısır, zeytin", price: "400 ₺", image: "vegetarian.png" },
      { name: "Prosciutto e Funghi", desc: "Domates sosu, mozzarella, prosciutto cotto (sucuk), mantar", price: "500 ₺", image: "Prosciutto.png" },
      { name: "Easwhite Pizza", desc: "Domates Sos, Mozzarella, mantar, biber, mısır, zeytin, sucuk", price: "600 ₺", image: "karisik.png" }
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
      { name: "Kremalı Karamelize Soğanlı", desc: "", price: "350 ₺", image: "soganli.png" },
      { name: "Napolitan Soslu", desc: "", price: "350 ₺", image: "marinara.png" },
      { name: "Bolonez Soslu", desc: "", price: "400 ₺", image: "bolonez.png" },
      { name: "Arabiatta Soslu", desc: "", price: "350 ₺", image: "arrbiatta.png" },
      { name: "Pesto Soslu", desc: "", price: "350 ₺", image: "pesto.png" },
      { name: "Kremalı Mantarlı", desc: "", price: "350 ₺", image: "krema.png" },
      { name: "Fettucini Alfredo", desc: "", price: "400 ₺", image: "fettucini-alfredo.png" }
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
      { name: "Akdeniz Salatası", desc: "", price: "350 ₺", image: "akdeniz.png" },
      { name: "Gavurdağı Salata", desc: "", price: "300 ₺", image: "gavurdagi.png" },
      { name: "Mevsim Salata", desc: "", price: "300 ₺", image: "mevsim.png" },
      { name: "Çoban Salata", desc: "", price: "300 ₺", image: "coban.png" },
      { name: "Ton Balıklı Salata", desc: "", price: "450 ₺", image: "ton-balikli.png" },
      { name: "Tavuklu Sezar Salata", desc: "", price: "450 ₺", image: "sezar.png" },
      { name: "Bonfile Parçacıklı Salata", desc: "", price: "500 ₺", image: "bonfile-salata.png" },
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
      { name: "Atom", desc: "", price: "300 ₺", image: "atom.png" },
      { name: "Arnavut Ciğeri", desc: "", price: "450 ₺", image: "arnavut-cigeri.png" },
      { name: "Ton Balığı", desc: "", price: "350 ₺", image: "ton-baligi.png" },
      { name: "Barbunya Pilaki", desc: "", price: "250 ₺", image: "barbunya.png" },
      { name: "Semiz Otu", desc: "", price: "250 ₺", image: "semizotu.png" },
      { name: "Rus Salatası", desc: "", price: "250 ₺", image: "rus-salatasi.png" },
      { name: "Şakşuka", desc: "", price: "250 ₺", image: "saksuka.png" },
      { name: "Girit Ezmesi", desc: "", price: "250 ₺", image: "girit.png" },
      { name: "Kuru Cacık", desc: "", price: "250 ₺", image: "kuru-cacik.png" },
      { name: "Salatalık Turşusu", desc: "", price: "300 ₺", image: "tursu.png" },
      { name: "Süzme Yoğurt", desc: "", price: "300 ₺", image: "yogurt.png" },
      { name: "Porsiyon Peynir", desc: "", price: "300 ₺", image: "peynir-tabagi.png" }
   

    ]
  },
 
{
  id: "alkolsuz-icecekler",
  title: "Soğuk İçecekler",
  subtitle: "Serinletici içecek seçenekleri",
  icon: "drink",
  layout: "grid",
    heroImage:"soguk-icecek.png",
  items: [
    
    { name: "Coca Cola", desc: "", price: "150 ₺", image: "cola.png" },
    { name: "Fanta", desc: "", price: "150 ₺", image: "fanta.png" },
    { name: "Sprite", desc: "", price: "150 ₺", image: "sprite.png" },
    { name: "Ice Tea", desc: "", price: "150 ₺", image: "icetea.png" },
    { name: "Meyve Suyu Çeşitleri", desc: "150 ₺", price: "", image: "meyvesuyu.png" },
    { name: "Ayran", desc: "", price: "120 ₺", image: "ayran.png" },
    { name: "Şalgam", desc: "", price: "120 ₺", image: "salgam.png" },
    { name: "Su (Büyük)", desc: "", price: "150 ₺", image: "buyuk-su.png" },
    { name: "Su (Küçük)", desc: "", price: "70 ₺", image: "su.png" }
  ]

},
{
  id: "sicak-icecekler",
  title: "Sıcak İçecekler",
  subtitle: "",
  icon: "drink",
  layout: "grid",
    heroImage:"sicak-icecek.png",
  items: [
    
    { name: "Türk Kahvesi", desc: "", price: "150 ₺", image: "kahve.png" },
    { name: "Filtre Kahve", desc: "", price: "100 ₺", image: "filtre.png" },
    { name: "Küçük Bardak Çay", desc: "", price: "50 ₺", image: "cay.png" },
    { name: "Fincan Çay", desc: "", price: "100 ₺", image: "fincan-cay.png" }
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
    { name: "Efes", desc: "", price: "Şişe 300 ₺ - Kutu 250 ₺", image: "efes.png" },
    { name: "Efes Malt Şişe", desc: "", price: "Şişe 300 ₺ - Kutu 250 ₺", image: "efes-malt.png" },
    { name: "Efes Green Şişe", desc: "", price: "Şişe 300 ₺ - Kutu 250 ₺", image: "efes-green.png" },
    { name: "Bomonti Şişe", desc: "", price: "Şişe 300 ₺ - Kutu 250 ₺", image: "bomonti.png" },
    { name: "Miller Şişe", desc: "", price: "350 ₺", image: "miller.png" },
    { name: "Corona Şişe", desc: "", price: "350 ₺", image: "corona.png" },
    { name: "Carlsberg Şişe", desc: "", price: "350 ₺", image: "carlsberg.png" },
    { name: "Tuborg Malt Şişe", desc: "", price: "Şişe 300 ₺ - Kutu 250 ₺", image: "tuborg.png" },
    { name: "Tuborg Kırmızı Şişe", desc: "", price: "Şişe 300 ₺ - Kutu 250 ₺", image: "tuborg-kirmizi.png" },
  ]
},

{
  
  id: "rakilar",
  title: "Rakılar",
  subtitle: "Seçkin Rakı Çeşitleri",
  icon: "wine",
  layout: "grid",
  heroImage: "rakilar.png",

  items: [

    {
      name: "35 CL Beylerbeyi Rakı",
      desc: "Premium Türk rakısı",
      price: "2500 ₺",
      image: "beylerbeyi-raki.png"
    },
    {
      name: "50 CL Beylerbeyi Rakı",
      desc: "Premium Türk rakısı",
      price: "3500 ₺",
      image: "beylerbeyi-raki.png"
    },
    {
      name: "70 CL Beylerbeyi Rakı",
      desc: "Premium Türk rakısı",
      price: "4600 ₺",
      image: "beylerbeyi-raki.png"
    },
    {
      name: "100 CL Beylerbeyi Rakı",
      desc: "Premium Türk rakısı",
      price: "6000 ₺",
      image: "beylerbeyi-raki.png"
    },
     {
      name: "Duble Rakı",
      desc: "Premium Türk rakısı",
      price: "550 ₺",
      image: "duble-raki.png"
    },
    {
      name: "Tek Rakı",
      desc: "Premium Türk rakısı",
      price: "450 ₺",
      image: "tek-raki.png"
    }
 ]
},




{
  id: "viski",
  title: "Viskiler",
  subtitle: "Seçkin Viski Çeşitleri",
  icon: "cocktail",
  layout: "grid",
      heroImage:"viskiler.png",
 items: [
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
    }
    
  ]
},

{
  
  id: "jagger",
  title: "Jagger",
  subtitle: "",
  icon: "wine",
  layout: "grid",
  heroImage: "jagger.png",

  items: [

    

    {
      name: "35 cl Jägermeister",
      desc: "Bitkisel likör",
      price: "2000 ₺",
      image: "jagermeister.png"
    },

       {
      name: "50 cl Jägermeister",
      desc: "Bitkisel likör",
      price: "3000 ₺",
      image: "jagermeister.png"
    },
    {
      name: "70 cl Jägermeister",
      desc: "Bitkisel likör",
      price: "4000 ₺",
      image: "jagermeister.png"
    },

     {
      name: "100 cl Jägermeister",
      desc: "Bitkisel likör",
      price: "6000 ₺",
      image: "jagermeister.png"
    },
     {
      name: "Duble Jägermeister",
      desc: "Bitkisel likör",
      price: "600 ₺",
      image: "jagermeister.png"
    },
      {
      name: "Tek Jägermeister",
      desc: "Bitkisel likör",
      price: "400 ₺",
      image: "jagermeister.png"
    }
  ]
},
{
  
  id: "alkollu-icecekler",
  title: "Diğer Alkollü İçecekler",
  subtitle: "Seçkin Akollü İçecek Çeşitleri",
  icon: "wine",
  layout: "grid",
  heroImage: "diger.png",

  items: [

    
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
    name: "Sex on the Beach",
    desc: "Votka, şeftali likörü, portakal suyu, turna yemişi suyu",
    price: "",
    image: "sex-on-the-beach.png"
  },

 
  
  {
    name: "Piña Colada",
    desc: "Beyaz rom, coconut cream, ananas suyu",
    price: "",
    image: "pina-colada.png"
  },

  {
    name: "Whiskey Sour",
    desc: "Bourbon, limon suyu, şeker şurubu, yumurta akı",
    price: "",
    image: "whiskey-sour.png"
  },
 
 
  {
    name: "Aperol Spritz",
    desc: "Aperol, prosecco, soda",
    price: "",
    image: "aperol-spritz.png"
  },
  
 
{
  name: "Appletini",
  desc: "Votka, yeşil elma likörü, elma suyu, limon suyu",
  price: "",
  image: "appletini.png"
},

]
}
];
