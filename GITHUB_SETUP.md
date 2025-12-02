# 📚 Panduan Setup Blog di GitHub Pages

Ikuti langkah-langkah di bawah untuk upload blog Anda ke GitHub Pages.

---

## ✅ Syarat Awal

- ✔️ Sudah punya akun GitHub (daftar di https://github.com)
- ✔️ Sudah install Git (download dari https://git-scm.com)
- ✔️ Semua file blog sudah siap (index.html, style.css, script.js)

---

## 🔧 LANGKAH 1: Buat Repository di GitHub

### 1.1 Login ke GitHub
- Kunjungi https://github.com
- Login dengan akun Anda

### 1.2 Buat Repository Baru
1. Klik tombol **+** di kanan atas → **New repository**
2. Isi form:
   - **Repository name**: `blog-pribadi` (atau nama pilihan Anda)
   - **Description**: "Blog Pribadi - Tugas EKSYA UIN MY" (opsional)
   - **Visibility**: Pilih **Public** ⚠️ (penting!)
   - Jangan centang "Initialize this repository with"
3. Klik **Create repository**

### 1.3 Copy URL Repository
- Setelah repository dibuat, Anda akan melihat URL seperti:
  ```
  https://github.com/[USERNAME]/blog-pribadi.git
  ```
- **Salin URL ini**, Anda akan membutuhkannya nanti

---

## 📁 LANGKAH 2: Setup Git Lokal

Buka **Command Prompt** (Windows) atau **Terminal** (Mac/Linux):

### 2.1 Navigasi ke folder blog
```bash
cd d:\tugas aploko anggela
```

### 2.2 Inisialisasi Git Repository
```bash
git init
```

### 2.3 Tambahkan semua file
```bash
git add .
```

### 2.4 Buat commit pertama
```bash
git commit -m "Initial commit: Blog pribadi EKSYA"
```

### 2.5 Ubah branch ke main (jika belum)
```bash
git branch -M main
```

### 2.6 Tambahkan remote repository
Ganti URL dengan URL repository Anda:
```bash
git remote add origin https://github.com/[USERNAME]/blog-pribadi.git
```

Contoh:
```bash
git remote add origin https://github.com/johndoe/blog-pribadi.git
```

### 2.7 Push ke GitHub
```bash
git push -u origin main
```

**Anda mungkin akan diminta login:**
- Username: Username GitHub Anda
- Password: Personal Access Token (bukan password biasa)

---

## 🔑 Membuat Personal Access Token (PAT)

Jika diminta password saat push:

### Cara Membuat PAT:
1. Di GitHub, klik **avatar Anda** → **Settings**
2. Di sidebar, klik **Developer settings** → **Personal access tokens** → **Tokens (classic)**
3. Klik **Generate new token** → **Generate new token (classic)**
4. Isi form:
   - **Note**: "Blog pribadi"
   - **Expiration**: 90 days
   - **Select scopes**: Centang ✓ `repo` (full control of private repositories)
5. Klik **Generate token**
6. **Copy token** yang muncul (Anda hanya bisa melihat sekali!)
7. Gunakan token ini sebagai password saat push ke Git

---

## 🚀 LANGKAH 3: Aktifkan GitHub Pages

### 3.1 Buka Settings Repository
1. Di GitHub, buka repository `blog-pribadi`
2. Klik tab **Settings** (ikon gear)

### 3.2 Cari Pages
Di sidebar sebelah kiri, cari dan klik **Pages**

### 3.3 Konfigurasi GitHub Pages
- **Source**: Pilih `Deploy from a branch`
- **Branch**: Pilih `main`
- **Folder**: Pilih `/ (root)`
- Klik **Save**

### 3.4 Tunggu Deployment
- GitHub akan mulai deploy (lihat di bagian atas)
- Tunggu hingga muncul pesan berwarna hijau: "Your site is published at..."
- Biasanya butuh 1-5 menit

---

## ✨ LANGKAH 4: Update QR-Code

### 4.1 Edit script.js
1. Buka file `script.js` di text editor
2. Cari fungsi `generateQRCode()`
3. Ubah line ini:
   ```javascript
   blogURL = 'https://[USERNAME].github.io/[REPO-NAME]/';
   ```
   
   Menjadi URL GitHub Pages Anda:
   ```javascript
   blogURL = 'https://johndoe.github.io/blog-pribadi/';
   ```

### 4.2 Push Update ke GitHub
```bash
git add script.js
git commit -m "Update QR-Code URL untuk GitHub Pages"
git push
```

---

## 🌐 LANGKAH 5: Akses Blog Anda

URL blog Anda akan berformat:
```
https://[USERNAME].github.io/blog-pribadi/
```

Ganti `[USERNAME]` dengan username GitHub Anda.

**Contoh:**
```
https://johndoe.github.io/blog-pribadi/
```

---

## ✅ Verifikasi Semuanya

Buka URL blog Anda di browser:
1. ✔️ Blog bisa diakses
2. ✔️ Semua artikel tampil
3. ✔️ QR-Code bisa di-download
4. ✔️ Scan QR-Code dengan smartphone → bisa membuka blog

---

## 📝 Update Blog di Masa Depan

Setiap kali Anda membuat perubahan:

```bash
# Edit file Anda
# ...

# Add perubahan
git add .

# Commit
git commit -m "Deskripsi perubahan"

# Push ke GitHub
git push
```

GitHub akan otomatis update blog Anda dalam beberapa detik.

---

## 🆘 Troubleshooting

### Problem: "Repository tidak ditemukan"
- Pastikan URL repository benar
- Pastikan PAT masih valid (tidak expired)

### Problem: "fatal: 'origin' does not appear to be a git repository"
- Pastikan Anda sudah jalankan `git init` di folder yang benar

### Problem: Blog masih tidak bisa diakses setelah 5 menit
- Refresh halaman browser (Ctrl+F5)
- Cek di tab **Actions** di GitHub untuk melihat status deployment

### Problem: QR-Code tidak bisa di-scan
- Pastikan QR-Code URL sudah diupdate di script.js
- Pastikan Anda sudah push perubahan ke GitHub

---

## 🎉 Selesai!

Blog Anda sudah live di GitHub Pages dan bisa diakses dari mana saja! 

**Sekarang Anda bisa:**
- 📱 Share URL blog ke teman, keluarga, atau dosen
- 📲 Scan QR-Code dari smartphone untuk akses blog
- ✏️ Terus update konten blog Anda

---

**Butuh bantuan? Cek dokumentasi GitHub Pages:**
https://docs.github.com/en/pages

