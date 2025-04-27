const products = [
    {
        id: 1,
        title: "Asus ROG Zephyrus G14",
        category: "Gaming",
        specs: {
            processor: "Ryzen 9 5900HS / RTX 3050",
            ram: "16GB",
            storage: "SSD 512GB",
            display: '14" FHD 144Hz'
        },
        price: 15499000,
        image: "images/Asus ROG Zephyrus G14/gambar1.png"
    },
    {
        id: 2,
        title: "Asus ROG Zephyrus Duo 15 SE",
        category: "Gaming",
        specs: {
            processor: "Ryzen 9 5900HX / RTX 3060",
            ram: "32GB",
            storage: "SSD 1TB",
            display: '15.6" 300Hz + ScreenPad Plus'
        },
        price: 21000000,
        image: "images/Asus ROG Zephyrus Duo 15 SE/gambar1.jpg"
    },
    {
        id: 3,
        title: "Lenovo LOQ",
        category: "Gaming",
        specs: {
            processor: "Ryzen 7 7840HS / RTX 4060",
            ram: "16GB",
            storage: "SSD 1TB",
            display: '15.6" FHD 144Hz'
        },
        price: 24999000,
        image: "images/Lenovo LOQ/gambar1.png"
    },
    {
        id: 4,
        title: "Lenovo Legion 5",
        category: "Gaming",
        specs: {
            processor: "Ryzen 7 5800H / RTX 3060",
            ram: "16GB",
            storage: "SSD 512GB",
            display: '15.6" FHD 165Hz'
        },
        price: 18999000,
        image: "images/Lenovo Legion 5/gambar1.png"
    },
    {
        id: 5,
        title: "Acer Nitro 5",
        category: "Gaming",
        specs: {
            processor: "Intel i5-12500H / RTX 3050",
            ram: "8GB",
            storage: "SSD 512GB",
            display: '15.6" FHD 144Hz'
        },
        price: 14499000,
        image: "images/Acer Nitro 5/gambar1.jpg"
    },
    {
        id: 6,
        title: "HP Omen 16",
        category: "Gaming",
        specs: {
            processor: "Intel i7-12700H / RTX 3070",
            ram: "16GB",
            storage: "SSD 1TB",
            display: '16.1" QHD 165Hz'
        },
        price: 25999000,
        image: "images/HP Omen 16/gambar1.webp"
    },
    {
        id: 7,
        title: "Dell G15",
        category: "Gaming",
        specs: {
            processor: "Intel i7-11800H / RTX 3060",
            ram: "16GB",
            storage: "SSD 512GB",
            display: '15.6" FHD 120Hz'
        },
        price: 16999000,
        image: "images/Dell G15/gambar1.jpg"
    },
    {
        id: 8,
        title: "MSI Katana GF66",
        category: "Gaming",
        specs: {
            processor: "Intel i7-12650H / RTX 3050 Ti",
            ram: "16GB",
            storage: "SSD 512GB",
            display: '15.6" FHD 144Hz'
        },
        price: 17499000,
        image: "images/MSI Katana GF66/gambar1.png"
    },
    {
        id: 9,
        title: "Asus TUF Gaming F15",
        category: "Gaming",
        specs: {
            processor: "Intel i5-11400H / RTX 3050",
            ram: "8GB",
            storage: "SSD 512GB",
            display: '15.6" FHD 144Hz'
        },
        price: 13999000,
        image: "images/Asus TUG Gaming F15/gambar1.jpg"
    },
    {
        id: 10,
        title: "Lenovo IdeaPad Gaming 3",
        category: "Gaming",
        specs: {
            processor: "Ryzen 5 5600H / GTX 1650",
            ram: "8GB",
            storage: "SSD 256GB",
            display: '15.6" FHD 120Hz'
        },
        price: 10999000,
        image: "images/Lenovo IdeaPad Gaming 3/gambar1.jpg"
    },
    {
        id: 11,
        title: "HP Victus 16",
        category: "Gaming",
        specs: {
            processor: "Ryzen 7 5800H / RTX 3050 Ti",
            ram: "16GB",
            storage: "SSD 512GB",
            display: '16.1" FHD 144Hz'
        },
        price: 15499000,
        image: "images/HP Victus 16/gambar1.webp"
    },
    {
        id: 12,
        title: "Acer Predator Helios 300",
        category: "Gaming",
        specs: {
            processor: "Intel i7-12700H / RTX 3070 Ti",
            ram: "16GB",
            storage: "SSD 1TB",
            display: '15.6" QHD 165Hz'
        },
        price: 29999000,
        image: "images/Acer Predator Helios 300/gambar1.jpg"
    },
    {
        id: 13,
        title: "Dell Precision 5560",
        category: "Workstation",
        specs: {
            processor: "Intel Xeon W-11955M / RTX A2000",
            ram: "32GB",
            storage: "SSD 1TB",
            display: '15.6" UHD+ Touch'
        },
        price: 45999000,
        image: "images/Dell Precision 5560/gambar1.jpg"
    },
    {
        id: 14,
        title: "HP ZBook Fury 16",
        category: "Workstation",
        specs: {
            processor: "Intel i9-12900HX / RTX A3000",
            ram: "64GB",
            storage: "SSD 2TB",
            display: '16" UHD+'
        },
        price: 65999000,
        image: "images/HP ZBook Fury 16/gambar1.avif"
    },
    {
        id: 15,
        title: "Lenovo ThinkPad P1 Gen 5",
        category: "Workstation",
        specs: {
            processor: "Intel i7-12800H / RTX A2000",
            ram: "32GB",
            storage: "SSD 1TB",
            display: '16" WQXGA'
        },
        price: 39999000,
        image: "images/Lenovo ThinkPad P1 Gen 5/gambar1.avif"
    },
    {
        id: 16,
        title: "Apple MacBook Pro 16",
        category: "Workstation",
        specs: {
            processor: "Apple M1 Max",
            ram: "32GB",
            storage: "SSD 1TB",
            display: '16" Liquid Retina XDR'
        },
        price: 50999000,
        image: "images/MacBook Pro 16/gambar1.jpg"
    },
    {
        id: 17,
        title: "MSI Creator Z16",
        category: "Workstation",
        specs: {
            processor: "Intel i9-11900H / RTX 3060",
            ram: "32GB",
            storage: "SSD 1TB",
            display: '16" QHD+ Touch'
        },
        price: 42999000,
        image: "images/MSI Creator Z16/gambar1.jpg"
    },
    {
        id: 18,
        title: "Dell XPS 13 Plus",
        category: "Ultrabook",
        specs: {
            processor: "Intel i7-1260P / Iris Xe",
            ram: "16GB",
            storage: "SSD 512GB",
            display: '13.4" UHD+ Touch'
        },
        price: 25999000,
        image: "images/Dell XPS 13 Plus/gambar1.jpg"
    },
    {
        id: 19,
        title: "HP Spectre x360",
        category: "Ultrabook",
        specs: {
            processor: "Intel i7-1255U / Iris Xe",
            ram: "16GB",
            storage: "SSD 1TB",
            display: '13.5" OLED Touch'
        },
        price: 27999000,
        image: "images/HP Spectre x360/gambar1.avif"
    },
    {
        id: 20,
        title: "ASUS ZenBook 14 OLED",
        category: "Ultrabook",
        specs: {
            processor: "AMD Ryzen 7 5800U / Radeon Vega",
            ram: "16GB",
            storage: "SSD 512GB",
            display: '14" OLED 2.8K'
        },
        price: 19999000,
        image: "images/ASUS ZenBook 14 OLED/gambar1.jpg"
    },
    {
        id: 21,
        title: "Microsoft Surface Laptop 5",
        category: "Ultrabook",
        specs: {
            processor: "Intel i7-1255U / Iris Xe",
            ram: "16GB",
            storage: "SSD 512GB",
            display: '13.5" PixelSense'
        },
        price: 25999000,
        image: "images/Microsoft Surface Laptop 5/gambar1.avif"
    },
    {
        id: 22,
        title: "LG Gram 16",
        category: "Ultrabook",
        specs: {
            processor: "Intel i7-1260P / Iris Xe",
            ram: "16GB",
            storage: "SSD 1TB",
            display: '16" WQXGA'
        },
        price: 28999000,
        image: "images/LG Gram 16/gambar1.avif"
    },
    {
        id: 23,
        title: "AXIOO MyBook 14",
        category: "Affordable",
        specs: {
            processor: "Intel Celeron N4020",
            ram: "4GB",
            storage: "SSD 256GB",
            display: '14" HD'
        },
        price: 3999000,
        image: "images/Axioo Mybook 14/gambar1.jpg"
    },
    {
        id: 24,
        title: "HP 14s",
        category: "Affordable",
        specs: {
            processor: "Intel Pentium Gold 7505",
            ram: "4GB",
            storage: "SSD 256GB",
            display: '14" FHD'
        },
        price: 4999000,
        image: "images/HP 14s/gambar1.avif"
    },
    {
        id: 25,
        title: "ASUS VivoBook",
        category: "Affordable",
        specs: {
            processor: "AMD Athlon Silver 3050U",
            ram: "4GB",
            storage: "SSD 256GB",
            display: '14" HD'
        },
        price: 4799000,
        image: "images/ASUS VivoBook/gambar1.jpg"
    },
    {
        id: 26,
        title: "Lenovo IdeaPad 1",
        category: "Affordable",
        specs: {
            processor: "AMD A4-9120e",
            ram: "4GB",
            storage: "eMMC 64GB",
            display: '14" HD'
        },
        price: 3799000,
        image: "images/Lenovo IdeaPad 1/gambar1.jpg"
    },
    {
        id: 27,
        title: "Acer Aspire 3",
        category: "Affordable",
        specs: {
            processor: "Intel Celeron N4500",
            ram: "4GB",
            storage: "SSD 128GB",
            display: '15.6" HD'
        },
        price: 4299000,
        image: "images/Acer Aspire 3/gambar1.jpg"
    },
    {
        id: 28,
        title: "AXIOO SlimBook",
        category: "Affordable",
        specs: {
            processor: "Intel Celeron N3350",
            ram: "4GB",
            storage: "SSD 128GB",
            display: '14" HD'
        },
        price: 3599000,
        image: "images/Axioo Slimbook/gambar1.jpg"
    }

];