# NÖBET 03:17 v3.0 — Sözlü Komisyonu

**[▶ Oyunu aç](https://huseyinozcanasta.github.io/nobet-0317/)** · **[FBT kaynak haritası](docs/FBT_KAYNAK_HARITASI.md)**

## Neden v3?

v2'de doğru seçeneğin çoğu kez en uzun ve en ayrıntılı olması, öğrenciyi gerçek sözlüden farklı biçimde yönlendiriyordu. Yeni sürüm **önce bağımsız sözlü açıklama, sonra seçenek ve daha derin öğrenme** esasına göre tasarlandı.

### Sözlü çalışma döngüsü
1. Hasta ve laboratuvar sunulur. Tanıyı baştan ele veren tanı etiketleri gizlenir.
2. Öğrenci **en az 25 karakterlik serbest açıklamasını** yazar ve kilitler. Açıklama olmadan dört seçenek görünmez (Sözlü Komisyonu modu varsayılan açıktır).
3. Seçenekler rastgele sıralanır. 38 sorunun en uzun seçeneği yalnızca 10 soruda tam doğrudur (26,3%; 25 Ekim 2026 metin uzunluğu denetimi). **Uzun seçeneği seçme stratejisi** artık güvenilir değildir.
4. Seçimden sonra **tüm dört alternatifin neden doğru/yanlış olduğu**, patofizyoloji ve klasik sözlü sınav tuzağı gösterilir.
5. Öğrenci ilk kilitli yanıtına bakarak 2 somut kriteri **kendisi** işaretler. Bu öz-değerlendirme çoktan seçmeli puandan ayrıdır; otomatik klinik yeterlilik iddiası taşımaz.
6. Vaka sonunda hocanın açık uçlu devam sorusu yazıyla yanıtlanır; örnek yanıt ancak kilitlendikten sonra açılır.
7. Nöbet raporundaki **seçeneksiz tekrar** turu yanlış/kısmi kararları ve eksik sözlü kriterleri önceliklendirir.

**Hızlı test modu** isteğe bağlıdır; Sözlü Komisyonu moduna triyaj ekranından geri dönülebilir.

## Hasta ve kaynak kapsamı

13 hasta dosyası ve 38 klinik karar korunuyor: dört temel dahiliye acili, sekiz ileri FBT bağlantılı vaka, bir gizli nöroşirürji konsültasyonu. Özgün FBT birleştirilmiş aktarımı: `Dahiliye_Birlesik_Sayfa_001-109.docx`. Özgün FBT soruları birebir kopyalanmadan vaka temelli yeniden yazılmıştır. [Kaynak haritasını incele](docs/FBT_KAYNAK_HARITASI.md).

## Teknik ayrıntılar

- **Kurulum yok:** `index.html` çevrimdışı tarayıcıda da çalışabilen tek dosyadır.
- Daha önce kaydedilmiş vaka ilerlemesini aynı `nobet0317_v1` anahtarıyla yükler; v3 için ek sözlü cevap, öz-değerlendirme, devam sorusu ve tekrar kayıtlarını cihaz içinde tutar.
- Cevapların içeriğini güvenilir biçimde otomatik notlandıracak bir yapay zekâ kullanılmaz. Öz-denetim, örnek yanıt ve kriter kontrolü kullanıcıya aittir.
- Dikte/sesli okuma desteği tarayıcı özelliklerine bağlıdır. Gerçek mobil cihazda kullanıcı kabul testi ayrıca yapılmalıdır.

## v3.0 test sonucu

- Chromium'da tüm **13 hasta / 38 karar** üzerinden baştan sona geçiş.
- Sözlü yanıt kilidi, seçeneklerin sonradan açılması, seçim sonrası gerekçeler, 38 öz-değerlendirme girdisi, puanlama ve yerel kaydın yeniden yüklenmesi doğrulandı.
- Yanlış şık, hızlı mod, vaka sonu açık uçlu ek soru, eksik bazlı tekrar ve sonuç kaydının yeniden yüklenmesi ayrıca sınandı.
- Testlerde JavaScript sayfa hatası görülmedi.

**Tıbbi uyarı:** Eğitim simülasyonudur; gerçek hastada tanı, tedavi veya klinik karar destek aracı olarak kullanılmaz. Kılavuzlar, yerel protokol ve uzman hekim görüşü esastır.

---

## v2.0 sürüm notları

 8 ileri hasta, 24 yeni klinik karar; toplam 13 dosya ve 38 karar. Kaynak haritası `docs/FBT_KAYNAK_HARITASI.md`.

## v1.0

İlk dört dahiliye acili ve gizli epidural hematom konsültasyonu.
