# Blog Pribadi - Tugas EKSYA UIN MY

Blog pribadi untuk dokumentasi pembelajaran kuliah di program EKSYA (Entrepreneurship dan Skill Akademik) Universitas Islam Negeri Maulana Malik Ibrahim Malang.

## 📱 Fitur Utama

- **Blog Posts**: Artikel tentang pembelajaran EKSYA dan skill development
- **QR-Code Generator**: Generate QR code otomatis untuk akses blog
- **Responsive Design**: Dapat diakses dari desktop, tablet, dan smartphone
- **Modern UI**: Interface yang clean dan user-friendly

## 🚀 Cara Akses

Blog ini di-host menggunakan **GitHub Pages**. Anda bisa mengakses blog melalui:

**URL**: `https://[username-github].github.io/[nama-repository]/`

Contoh: `https://johndoe.github.io/blog-pribadi/`

## 📝 Konten Blog

Blog ini berisi 6 artikel tentang:
1. Pengenalan Mata Kuliah EKSYA
2. Pentingnya Soft Skills di Era Digital
3. Membuat Personal Branding yang Kuat
4. Networking: Membangun Koneksi yang Bermakna
5. Teknologi dan Inovasi dalam Bisnis
6. Rencana Karir dan Goal Setting

## 🔧 Teknologi yang Digunakan

- **HTML5**: Struktur halaman
- **CSS3**: Styling dan layout responsive
- **JavaScript**: Interaktivitas dan dynamic content
- **QRCode.js**: Library untuk generate QR code
- **GitHub Pages**: Hosting platform

## 📋 Instruksi Setup GitHub Pages

### Step 1: Persiapan di GitHub

1. Buat repository baru di GitHub dengan nama: `blog-pribadi` atau sesuai pilihan Anda
2. Atur visibility menjadi **Public**

### Step 2: Clone Repository (Opsional)

```bash
cd d:\tugas aploko anggela
git init
git add .
git commit -m "Initial commit: blog pribadi EKSYA"
git branch -M main
git remote add origin https://github.com/[USERNAME]/[REPO-NAME].git
git push -u origin main
```

Ganti `[USERNAME]` dengan username GitHub Anda dan `[REPO-NAME]` dengan nama repository.

### Step 3: Aktifkan GitHub Pages

1. Buka repository di GitHub
2. Klik **Settings** → **Pages**
3. Pilih **Source**: `main` branch
4. Pilih **Folder**: `/ (root)`
5. Klik **Save**

GitHub akan menampilkan URL blog Anda dalam format: `https://[username].github.io/[repo-name]/`

### Step 4: Tunggu hingga Deploy Selesai

- GitHub Pages membutuhkan waktu 1-5 menit untuk deploy
- Setelah selesai, Anda bisa akses blog dari URL tersebut

## 🔗 QR-Code

QR-Code akan otomatis ter-generate dan mengarah ke URL blog Anda di GitHub Pages. Anda bisa:

- **Scan QR-Code** dari smartphone untuk akses blog
- **Download QR-Code** sebagai file PNG

## ✏️ Cara Menambah Artikel Baru

Buka file `script.js` dan tambahkan object baru di array `blogPosts`:

```javascript
{
    id: 7,
    title: "Judul Artikel Baru",
    date: "2025-02-20",
    category: "Kategori",
    excerpt: "Ringkasan singkat artikel...",
    content: "Isi artikel lengkap yang akan tampil di modal..."
}
```

Setelah itu, push changes ke GitHub:

```bash
git add script.js
git commit -m "Tambah artikel baru"
git push
```

## 🎨 Kustomisasi

### Mengubah Warna

Edit `style.css` dan ubah warna gradient:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Mengubah Nama Blog

Edit `index.html` dan ubah:
```html
<h1 class="logo">MyBlog</h1>
```

### Mengubah Deskripsi

Edit `index.html` Hero section:
```html
<p>Dokumentasi Pembelajaran Kuliah di EKSYA - UIN MY</p>
```

## 📱 Responsive

Blog ini sudah responsif dan dioptimalkan untuk:
- 💻 Desktop (1920px dan di atasnya)
- 📱 Tablet (768px - 1024px)
- 📱 Mobile (480px - 767px)

## 🔒 File yang Disertakan

- `index.html` - Halaman utama
- `style.css` - Styling dan layout
- `script.js` - Logika JavaScript dan data blog
- `README.md` - Dokumentasi (file ini)

## 📞 Dukungan

Jika ada pertanyaan atau masalah, silakan:
1. Cek kembali URL GitHub Pages Anda
2. Pastikan repository di-set ke **Public**
3. Tunggu deployment selesai (cek di tab Actions)

## 📄 Lisensi

Proyek ini dibuat untuk tugas EKSYA - UIN MY

---

**Dibuat dengan ❤️ untuk Tugas Pembelajaran EKSYA**
