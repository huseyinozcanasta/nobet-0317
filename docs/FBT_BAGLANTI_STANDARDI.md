# FBT özgün soru/cevap bağlantı standardı — v3.1 ve sonrası

**Kalıcı kural:** NÖBET 03:17'ye eklenen **her yeni hasta dosyası ve FBT kaynaklı klinik soru** bir kaynak eşleme kontrolünden geçmelidir. Mevcut dosyalarda olduğu gibi, klinik seçenek değerlendirmesinden sonra ilgili **özgün FBT soru numarası ve özgün yazılı yanıtı tıklanarak açılmalıdır**.

## Veri modeli

Tek dosya `index.html` içinde üç JS sabiti bulunur:

- `FBT_BANK`: Her özgün FBT sorusunun numarası (`n`), soru metni (`q`), özgün PDF sayfası (`page`), birleşik kayıttaki cevap metni (`original`), `hasAnswer`, özgün nottan ayrı `teaching`, gerekiyorsa `warning` ve güncel `resource`.
- `FBT_CASES`: Her `DATA[].id` için en az bir **doğrulanmış** FBT numarası dizisi.
- `FBT_RELATED`: Vakanın özgün FBT sorusuyla birebir değil, yalnızca **konu bağlantısı** içerdiği sorular. Bu durumda modal açıkça “İLGİLİ KONU” uyarısı verir.

**Yeni vaka eklendiğinde:** 1) FBT Birleştirilmiş (`Dahiliye_Birlesik_Sayfa_001-109.docx`) içinde numarayı, soru metnini ve sayfasını doğrula; 2) yalnız ilgili özgün cevap notunu `FBT_BANK` içine **olduğu gibi** aktar; 3) notta cevap yoksa `original:""`, `hasAnswer:false` bırak ve kendi klinik açıklamanı **ayrı** `teaching` alanına yaz; 4) `FBT_CASES` eşlemesini ekle; 5) dolaylı bağlantıları `FBT_RELATED` listesine ekle; 6) klinik içerik eskimişse özgün metni değiştirmeden `warning` ve güncel kılavuz ekle; 7) `node scripts/check-fbt-links.cjs` ile doğrula.

## Kullanım ve sınırlar

- Sözlü modunun cevabı göstermeme prensibi korunur: FBT bağlantıları **öğrenci klinik kararını verdikten sonra** ve vaka sonu raporunda gösterilir; ayrı kaynak kütüphanesi kaynaklar menüsünden erişilebilir.
- Tıklanınca **iki ayrı alan** görülür: “Orijinal nottaki cevap” ve “Güncel öğretici açıklama”. Orijinal cevap yoksa bunu açıkça belirt; çıkarımını özgün notmuş gibi sunma.
- Kullanıcıya yalnız seçilmiş FBT soru-cevap parçalarını göster. 109 sayfalık kişisel PDF'yi veya bütün kaynak dosyayı GitHub'a kopyalama.
- Her yeni vaka için kaynağı doğrulamadan numara, sayfa veya orijinal cevap **uydurma**. İlgili doğrulanmış soru da yoksa önce kaynak bul; eşlemeden vakayı bitmiş kabul etme.
- Mevcut **13 hasta dosyasının tamamında bağlantı** vardır; şu anda 25 ayrı özgün soru seçilmiştir. Birkaç vaka (ör. sepsis ve epidural hematom) FBT'deki yakın konu başlığına bağlanır; bu “İLGİLİ KONU” olarak görünür.
- Çalışma sistemi tıbbi karar desteği değildir. Eski kaynak notlarında verilen eşik/tedavi dozları güncel protokol yerine kullanılmaz.

## Testler

25 Ekim 2026 v3.1: Chromium/Chrome'da 13 hasta ve 38 kararın her birinde kaynak düğmesi, modal aç/kapat, kaynaktaki yanıt/cevap eksikliği, kaynak uyarısı ve kaydedilmiş oyun ilerlemesi sınandı. FBT bağlantısı eksik yeni vakaları yakalamak için depoda `scripts/check-fbt-links.cjs` ve GitHub Actions denetimi bulunur.
