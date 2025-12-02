const blogPosts = [
    {
        id: 1,
        title: "Pengenalan Mata Kuliah EKSYA",
        date: "2025-01-15",
        category: "Pembelajaran",
        excerpt: "Memulai perjalanan belajar di program EKSYA dengan antusiasme tinggi. Mata kuliah ini mengajarkan tentang entrepreneurship dan skill akademik.",
        content: "Mata kuliah EKSYA adalah program pembelajaran yang komprehensif untuk mengembangkan keterampilan entrepreneur dan akademik. Dalam pertemuan pertama, kami dikenalkan dengan kurikulum yang menyeluruh dan tujuan pembelajaran yang jelas."
    },
    {
        id: 2,
        title: "Pentingnya Soft Skills di Era Digital",
        date: "2025-01-20",
        category: "Skill Development",
        excerpt: "Soft skills menjadi semakin penting dalam dunia kerja modern. Mari kita bahas mengapa kemampuan komunikasi, kerja sama tim, dan leadership sangat dibutuhkan.",
        content: "Di era digital ini, hard skills saja tidak cukup untuk sukses. Soft skills seperti komunikasi efektif, kemampuan memimpin, dan kolaborasi adalah kunci untuk berkembang. EKSYA membantu kami mengasah kemampuan-kemampuan ini melalui berbagai aktivitas dan project."
    },
    {
        id: 3,
        title: "Membuat Personal Branding yang Kuat",
        date: "2025-01-25",
        category: "Career Development",
        excerpt: "Personal branding adalah investasi jangka panjang untuk karir. Pelajari strategi membangun brand diri yang menarik dan profesional di media sosial dan platform lainnya.",
        content: "Personal branding bukan hanya tentang tampil bagus di media sosial, tapi tentang konsistensi dan autentisitas. Kami belajar bagaimana memposisikan diri secara unik di pasar, menciptakan value proposition yang kuat, dan membangun reputation yang solid."
    },
    {
        id: 4,
        title: "Networking: Membangun Koneksi yang Bermakna",
        date: "2025-02-01",
        category: "Entrepreneurship",
        excerpt: "Networking bukan hanya tentang mengumpulkan kontak, tetapi membangun hubungan yang saling menguntungkan. Bagaimana cara networking yang efektif dijelaskan dalam artikel ini.",
        content: "Networking adalah seni membangun hubungan bisnis yang saling menguntungkan. Dalam EKSYA, kami belajar teknik-teknik networking yang efektif, cara berkomunikasi dengan profesional, dan bagaimana memelihara koneksi untuk kesuksesan jangka panjang."
    },
    {
        id: 5,
        title: "Teknologi dan Inovasi dalam Bisnis",
        date: "2025-02-10",
        category: "Technology",
        excerpt: "Teknologi terus berkembang dan mengubah cara berbisnis. Eksplorasi bagaimana startup dan bisnis tradisional beradaptasi dengan perubahan teknologi.",
        content: "Inovasi teknologi memberikan peluang baru dalam berbisnis. Kami mempelajari tren teknologi terkini, bagaimana mengintegrasikan teknologi ke dalam bisnis, dan pentingnya digital transformation untuk tetap kompetitif di pasar."
    },
    {
        id: 6,
        title: "Rencana Karir dan Goal Setting",
        date: "2025-02-15",
        category: "Career Planning",
        excerpt: "Menetapkan goal yang jelas dan membuat rencana karir yang terstruktur adalah langkah awal menuju kesuksesan. Mari kita pelajari cara yang efektif.",
        content: "Goal setting yang efektif memerlukan strategi yang matang. EKSYA mengajarkan metode SMART (Specific, Measurable, Achievable, Relevant, Time-bound) untuk menetapkan tujuan yang realistis dan terukur, serta membuat roadmap karir yang jelas untuk masa depan."
    }
];

let currentModal = null;

function initializeBlog() {
    displayBlogPosts();
    generateQRCode();
}

function displayBlogPosts() {
    const blogContainer = document.getElementById('blogContainer');
    blogContainer.innerHTML = '';

    blogPosts.forEach(post => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        blogCard.innerHTML = `
            <span class="blog-category">${post.category}</span>
            <h3>${post.title}</h3>
            <p class="blog-date">📅 ${formatDate(post.date)}</p>
            <p>${post.excerpt}</p>
            <a href="#" class="read-more">Baca Selengkapnya →</a>
        `;

        blogCard.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(post);
        });

        blogContainer.appendChild(blogCard);
    });
}

function openModal(post) {
    if (currentModal) {
        currentModal.remove();
    }

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <span class="blog-category">${post.category}</span>
            <h2>${post.title}</h2>
            <p class="blog-date">📅 ${formatDate(post.date)}</p>
            <p>${post.content}</p>
        </div>
    `;

    document.body.appendChild(modal);
    modal.style.display = 'block';

    currentModal = modal;

    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        currentModal = null;
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            currentModal = null;
        }
    });
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
}

function generateQRCode() {
    const qrcodeContainer = document.getElementById('qrcodeContainer');
    qrcodeContainer.innerHTML = '';

    let blogURL = window.location.href;
    
    if (blogURL.includes('file://')) {
        blogURL = 'https://myunus22.github.io/blog1/';
    }

    new QRCode(qrcodeContainer, {
        text: blogURL,
        width: 300,
        height: 300,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
}

document.addEventListener('DOMContentLoaded', initializeBlog);

const downloadQRBtn = document.getElementById('downloadQR');
downloadQRBtn.addEventListener('click', downloadQRCode);

function downloadQRCode() {
    const canvas = document.querySelector('#qrcodeContainer canvas');
    
    if (!canvas) {
        alert('QR Code belum siap. Silakan tunggu sebentar.');
        return;
    }

    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = 'blog-qrcode.png';
    link.click();
}

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
