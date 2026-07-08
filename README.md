# Git Lab Rapor Paneli

## Projenin Amacı

Bu proje gerçek bir üretim uygulaması değildir. Git ve GitHub iş akışlarını güvenle denemek için oluşturulmuş bir eğitim projesidir. Commit, branch, merge ve conflict gibi temel Git kavramlarını gerçek bir proje üzerinde pratik yaparak öğrenmek için kullanılır.

---

## Dosya Yapısı

```
git-lab-rapor/
├── index.html   → Sayfanın HTML yapısı
├── style.css    → Sayfa stilleri
├── app.js       → Buton işlevi (raporları yenile)
├── .gitignore   → Git'in takip etmeyeceği dosyalar
└── README.md    → Bu dosya
```

---

## Nasıl Çalıştırılır

Kurulum veya sunucu gerekmez. `index.html` dosyasını doğrudan tarayıcıda açmak yeterlidir:

1. Bu repoyu klonla veya indir.
2. `index.html` dosyasına çift tıkla.
3. Sayfa tarayıcıda açılır. "Raporları Yenile" butonuna basarak JavaScript işlevini test edebilirsin.

---

## Git Eğitiminde Neler Denenecek

Bu projede aşağıdaki Git komutları ve senaryoları uygulanacaktır:

## Git Lab Notları

Bu proje Developer Foundation Academy Git laboratuvarıdır.

### Temel Komutlar

| Komut | Açıklama |
|---|---|
| `git status` | Hangi dosyaların değiştiğini görme |
| `git add` | Değişiklikleri sahneye (stage) alma |
| `git commit` | Değişiklikleri kaydetme |
| `git push` | Değişiklikleri GitHub'a gönderme |

### Dal (Branch) İşlemleri

| Komut | Açıklama |
|---|---|
| `git branch` | Mevcut dalları listeleme |
| `git switch -c dal-adi` | Yeni dal oluşturma ve geçiş |
| `git switch main` | Ana dala geri dönme |
| `git merge dal-adi` | Bir dalı mevcut dala birleştirme |

### Merge Conflict Senaryosu

1. `main` dalında `index.html` içindeki başlığı değiştir ve commit'le.
2. `feature` dalına geç, aynı satırı farklı şekilde değiştir ve commit'le.
3. `main` dalına dön ve `feature` dalını merge et.
4. Git conflict uyarısı verecektir — dosyayı elle düzenleyerek çöz.
5. Çözümü commit'le.

Bu adımlar, gerçek projelerde karşılaşılan conflict durumlarını simüle eder.

Sprint 4 feature branch değişikliği
