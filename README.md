# NÖBET 03:17 v2.0 — İleri Klinik Karar Simülatörü

**[▶ Oyunu aç](https://huseyinozcanasta.github.io/nobet-0317/)** · **[FBT + kılavuz kaynak haritası](docs/FBT_KAYNAK_HARITASI.md)**

13 kurgusal hasta dosyasında **38 klinik karar**: 4 temel dahiliye hastası (12 karar), 8 ileri FBT-bağlantılı hasta (24 karar) ve açılabilen nöroşirürji bonusu (2 karar). V1'in görsel arayüzü ve cihaz içi kayıtları korunur.

## v2.0 — Yeni hasta tipleri

| Dosya | Klinik zorluk |
|---|---|
| 06 • Normal Şeker, Gizli Asidoz | SGLT2 ilişkili öglisemik DKA; glukoz tuzağı |
| 07 • Ağrısız Sarılık, Kötüleşen Bilinç | Yaşlıda ağır kolanjit ve biliyer kaynak kontrolü |
| 08 • Küçük Trombosit, Büyük Tehlike | TTP/DIC ayrımı; ADAMTS13 beklerken öncelik |
| 09 • Akciğerden Böbreğe | ANCA/anti-GBM; hemoptizi ve RBC silendiri |
| 10 • Kusma mı Kriz mi? | Uzun steroid kullanımı sonrası adrenal kriz |
| 11 • Sessiz Karın, Ağır Enfeksiyon | Siroz, SBP ve asit PMN yorumlama |
| 12 • Ateş Olmadan Ateş | Nötropenik hastada afebril enfeksiyon/şok |
| 13 • Ateşle Gelen Aritmi | Tiroid fırtınası ve kardiyak dekompansasyon riski |

## Nasıl oynanır?

Siteye gir veya depodaki `index.html` dosyasını indirerek tarayıcıda aç. Oyun internet bağlantısı olmadan yerel dosya olarak çalışabilir. Seçimlerini yap, geri bildirimleri ve kaynak bağlantılarını incele. **Hata Atlası** ile kaçırdığın kararları gözden geçir. Kaydedilen tamamlanma bilgileri ve sonuçlar tarayıcı yerel alanında tutulur. Kullanıcı hesabı, backend veya API anahtarı gerekmez.

## Kaynak ve güvenlik notu

FBT soru numaraları Google Drive'daki **Dahiliye_Birlesik_Sayfa_001-109.docx** başlıklı birleşik aktarım ile konu/numara düzeyinde çapraz kontrol edildi. Yeni vaka ve seçenekler birebir sınav sorusu kopyası değildir; klinik uygulama sorularıdır. Ayrıntılar [kaynak haritasında](docs/FBT_KAYNAK_HARITASI.md). Kılavuz bilgileri rehberdir; **oyun tıbbi karar destek sistemi değildir**, gerçek hastada tanı/tanıma/tedavi aracı olarak kullanılmamalıdır. Uzman hekim denetimi ve yerel protokoller gereklidir.

---

<details><summary>v1.0 ilk sürüm açıklaması</summary>

# NÖBET 03:17 — Klinik Karar Simülasyonu

Dahiliye acilleri ve gizli nöroşirürji konsültasyonunu konu alan, tamamen tarayıcıda çalışan Türkçe klinik karar oyunu.

**[Oyunu tarayıcıda aç](https://huseyinozcanasta.github.io/nobet-0317/)**

## Özellikler
- Dört dahiliye vakası: ağır hiperkalemi, hipokalemili DKA, postrenal akut böbrek hasarı ve septik şok.
- Dört vakadan sonra açılan bonus nöroşirürji vakası (epidural hematom).
- Hasta başı monitör görünümü, animasyonlu EKG, vital bulgular ve laboratuvar değerleri.
- Klinik kararları puanlama, karar geribildirimi ve **Hata Atlası**.
- Türkçe seslendirme, isteğe bağlı ses efektleri, cihaz üzerinde ilerleme kaydı ve rapor dışa aktarma.
- Kurulum, npm ve sunucu gerektirmez; tek HTML dosyası.

## Çalıştırma
Tarayıcı bağlantısını ziyaret edin ya da `index.html` dosyasını indirip Chrome/Edge/Firefox'ta açın. İlk sayfa yüklendikten sonra çevrimdışı dosya olarak da çalışır.

## İçerik yapısı
`index.html` oyunun HTML, CSS, JavaScript ve senaryolarını içerir. Kullanıcı verileri tarayıcı içinde tutulur; herhangi bir kullanıcı hesabı veya arka uç sunucusu bulunmaz.

## Tıbbi uyarı
Bu proje tıp eğitimi için hazırlanmış bir **simülasyondur**; gerçek hastada tanı veya tedavi önerisi yerine geçmez. Vaka kararları kurumsal protokoller ve güncel kılavuzlarla ayrıca değerlendirilmelidir.

## Geliştirme
25 Ekim 2026 — ilk bağımsız sürüm. SON NÖBET adlı daha geniş eğitim uygulamasından ayrı bir depodur.

</details>
