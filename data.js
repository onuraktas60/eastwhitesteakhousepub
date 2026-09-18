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
    title: "Serpme Kahvaltı",
    subtitle: "İki kişilik hazırlanır",
    icon: "egg",
    layout: "list",
    heroImage: "serpme.png",
    groups: [
      {
        name: "Reçeller & Tatlılar",
        items: [
          { name: "Çilek Reçeli", price: "", image: "" },
          { name: "Kayısı Reçeli", price: "", image: "" },
          { name: "Vişne Reçeli", price: "", image: "" },
          { name: "İncir Reçeli", price: "", image: "" },
          { name: "Bal", price: "", image: "" },
          { name: "Çikolatalı Fındık Kreması", price: "", image: "" },
          { name: "Tahin-Pekmez", price: "", image: "" }
        ]
      },
      {
        name: "Peynirler",
        items: [
          { name: "Otlu Peynir", price: "", image: "" },
          { name: "Otsuz Peynir", price: "", image: "" },
          { name: "Kaşar Peyniri", price: "", image: "" },
          { name: "Beyaz Peynir", price: "", image: "" },
          { name: "Ezine Peyniri", price: "", image: "" },
          { name: "Tereyağ", price: "", image: "" },
          { name: "Kaymak", price: "", image: "" }
        ]
      },
      {
        name: "Zeytin & Şarküteri",
        items: [
          { name: "Siyah Zeytin", price: "", image: "" },
          { name: "Yeşil Zeytin", price: "", image: "" },
          { name: "Acuka", price: "", image: "" },
          { name: "Salam", price: "", image: "" }
        ]
      },
      {
        name: "Sebze & Kuruyemiş",
        items: [
          { name: "Salatalık", price: "", image: "" },
          { name: "Domates", price: "", image: "" },
          { name: "Biber", price: "", image: "" },
          { name: "Maydanoz", price: "", image: "" },
          { name: "Marul", price: "", image: "" },
          { name: "Kuru Kayısı", price: "", image: "" },
          { name: "Kuru İncir", price: "", image: "" },
          { name: "Ceviz", price: "", image: "" },
          { name: "Mevsim Meyveleri", price: "", image: "" }
        ]
      },
      {
        name: "Yumurta & Sıcaklar",
        items: [
          { name: "Göz Yumurta", price: "", image: "" },
          { name: "Omlet", price: "", image: "" },
          { name: "Haşlanmış Yumurta", price: "", image: "" },
          { name: "Sucuklu Kaşarlı Yumurta", price: "", image: "" },
          { name: "Sucuklu Yumurta", price: "", image: "" },
          { name: "Menemen", price: "", image: "" },
          { name: "Pankek", price: "", image: "" },
          { name: "Krep", price: "", image: "" },
          { name: "Patates Kızartması", price: "", image: "" },
          { name: "Kuymak", price: "", image: "" },
          { name: "Kavurmalı Yumurta", price: "", image: "" },
          { name: "Sigara Böreği", price: "", image: "" },
          { name: "Salçalı Sosis", price: "", image: "" }
        ]
      },
      {
        name: "Ekmek & Hamur İşleri",
        items: [
          { name: "Ekmek", price: "", image: "" },
          { name: "Simit", price: "", image: "" },
          { name: "Poğaça", price: "", image: "" },
          { name: "Açma", price: "", image: "" },
          { name: "Börek", price: "", image: "" }
        ]
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
      { name: "Ribeye", desc: "Antrikot, tuz ve karabiber ile sadece ateşte", price: "", image: "ribeye.png", tag: "Şefin Önerisi",
        ingredients: ["Dana antrikot", "Deniz tuzu", "Kara biber", "Tereyağı", "Kekik"] },
      { name: "New York Steak", desc: "Kontrfile", price: "", image: "newyorksteak.png" },
      { name: "Madalyon", desc: "Bonfile", price: "", image: "madalyon.jpg" },
      { name: "Porterhouse Steak", desc: "Kontrfile + bonfile", price: "", image: "Porterhouse.webp" },
      { name: "Tomahawk Steak", desc: "Kemikli antrikot", price: "", image: "Tomahawk.jpg", tag: "Paylaşımlık" },
      { name: "Delmonico Steak", desc: "", price: "", image: "Delmonico.avif" },
      { name: "Dallas Steak", desc: "Kemikli antrikot", price: "", image: "Dallas.webp" },
      { name: "Kuzu Pirzola", desc: "", price: "", image: "Kuzupirzola.webp" },
      { name: "Kuzu Küşleme", desc: "", price: "", image: "Kuzukusleme.webp" },
      { name: "Kafe de Paris Soslu Bonfile", desc: "", price: "", image: "cafedeparis.jpg" }
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
      { name: "Soğan Çiçeği", desc: "", price: "", image: "sogancicegi.png" },
      { name: "Izgara Mantar", desc: "", price: "", image: "izgaramantar.png" },
      { name: "Sote Mantar", desc: "", price: "", image: "sotemantar.png" },
      { name: "Patates Püresi", desc: "", price: "", image: "patatespuresi.png" },
      { name: "Parmak Patates", desc: "", price: "", image: "parmakpatates.png" },
      { name: "Izgara Sebzeler", desc: "", price: "", image: "izgarasebze.png" },
      { name: "Soğan Halkası", desc: "", price: "", image: "soganhalkasi.png" }
    ]
  },
  {
    id: "burgerler",
    title: "Burgerler",
    subtitle: "",
    icon: "burger",
    layout: "grid",
    footnote: "Burger köftesi %80 dana döş, %20 yağ oranıyla hazırlanır. Tavuk burgerlerde but eti kullanılır.",
    items: [
      { name: "Classic Burger", desc: "180 g dana burger köftesi, marul, domates, turşu, karamelize soğan", price: "", image: "",
        ingredients: ["Dana köfte 180g", "Marul", "Domates", "Turşu", "Karamelize soğan", "Burger ekmeği"] },
      { name: "Cheeseburger", desc: "180 g dana burger köftesi, çift cheddar peyniri, turşu, soğan, hardal ve ketçap", price: "", image: "" },
      { name: "Mushroom Burger", desc: "180 g dana burger köftesi, sote mantar, İsviçre peyniri, trüf mayonez", price: "", image: "", tag: "Şefin Önerisi" },
      { name: "Chicken Burger", desc: "Çıtır tavuk, cheddar, marul, turşu, sarımsaklı mayonez", price: "", image: "" },
      { name: "Chicken Cheeseburger", desc: "Çıtır tavuk, çift cheddar peyniri, turşu, soğan, hardal ve ketçap", price: "", image: "" }
    ]
  },
  {
    id: "pizzalar",
    title: "Pizzalar",
    subtitle: "",
    icon: "pizza",
    layout: "grid",
    items: [
      { name: "Margherita", desc: "Domates sos, mozzarella, fesleğen", price: "", image: "",
        ingredients: ["Domates sosu", "Mozzarella", "Taze fesleğen", "Zeytinyağı"] },
      { name: "Pepperoni", desc: "Domates sos, mozzarella, pepperoni", price: "", image: "" },
      { name: "Vegetarian Pizza", desc: "Mantar, biber, mısır, zeytin", price: "", image: "" },
      { name: "Prosciutto e Funghi", desc: "Domates sosu, mozzarella, prosciutto cotto (sucuk), mantar", price: "", image: "" },
      { name: "Karışık Pizza", desc: "Domates sos, mozzarella peyniri, sucuk veya salam, mantar, biber, zeytin, mısır", price: "", image: "" }
    ]
  },
  {
    id: "makarnalar",
    title: "Makarnalar",
    subtitle: "",
    icon: "pasta",
    layout: "grid",
    items: [
      { name: "Kremalı Karamelize Soğanlı", desc: "", price: "", image: "" },
      { name: "Kremalı Köz Patlıcanlı", desc: "", price: "", image: "" },
      { name: "Bolonez Soslu", desc: "", price: "", image: "" },
      { name: "Marinara Soslu", desc: "", price: "", image: "" },
      { name: "Pesto Soslu", desc: "", price: "", image: "" },
      { name: "Kremalı Mantarlı", desc: "", price: "", image: "" }
    ]
  },
  {
    id: "salatalar",
    title: "Salatalar",
    subtitle: "",
    icon: "salad",
    layout: "grid",
    items: [
      { name: "Akdeniz Salatası", desc: "", price: "", image: "" },
      { name: "Gavurdağı Salata", desc: "", price: "", image: "" },
      { name: "Roka Salatası", desc: "", price: "", image: "" },
      { name: "Mevsim Salata", desc: "", price: "", image: "" },
      { name: "Çoban Salata", desc: "", price: "", image: "" }
    ]
  },
  {
    id: "mezeler",
    title: "Mezeler",
    subtitle: "",
    icon: "meze",
    layout: "grid",
    items: []
  }
];
