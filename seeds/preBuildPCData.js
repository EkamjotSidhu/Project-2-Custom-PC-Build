const  PrebuiltPC = require('../Models/Prebuild');

// note: pre-builds exclude pc peripherals (monitor, keyboard, mouse, expansion storage etc)
// note: write note on page to recommend buying a cpu cooler for higher end builds
const pcBuilds = [
    {
        build_type: 'Budget Gaming PC',
        cpu: 'Intel Core i3-12100F Quad-Core 3.3GHz',
        storage: 'Crucial MX500 500GB',
        ram: 'Silicon Power Gaming Series DDR4 3200 16GB (2 x 8GB)',
        motherboard: 'ASRock H610M-HVS Micro ATX Motherboard',
        chipset: 'Intel',
        gpu: 'ASUS Dual Radeon RX 6400 4GB GDDR6',
        psu: 'Thermaltake Smart Series 500W',
        os: 'Microsoft Windows 10 Home',
        case: 'Cooler Master MasterBox Q300L Micro ATX Tower',
    },
    {
        build_type: 'Mid Tier Gaming PC',
        cpu: 'AMD Ryzen 5 5600X 6-core 3.7GHz',
        storage: 'Western Digital WD Green NVMe M.2 1TB',
        ram: 'G.Skill Ripjaws V Series DDR4 3600 16GB (2 x 8GB)',
        motherboard: 'MSI Pro B550M-VC Motherboard',
        chipset: 'AMD',
        gpu: 'ASRock Radeon RX 6700 XT 12GB GDDR6',
        psu: 'EVGA 550 B5, 80+ Bronze 550W, Fully Modular',
        os: 'Microsoft Windows 10 Home',
        case: 'Corsair 4000D Airflow ATX Mid Tower Case',
    },
    {
        build_type: 'High End Gaming PC',
        cpu: 'Intel Core i7-13700KF - Core i7 13th Gen Raptor Lake 16-Core',
        storage: 'SK hynix Platinum P41 PCIe NVMe Gen4 M.2 2TB',
        ram: 'G.SKILL Trident Z5 RGB Series DDR5 6000 32GB (2 x 16GB)',
        motherboard: 'MSI PRO Z790-P DDR4 ATX Motherboard',
        chipset: 'Intel',
        gpu: 'MSI Gaming GeForce RTX 3080 10GB GDDR6X',
        psu: 'CORSAIR RM750x, 80+ Gold Certified 750W, Full Modular',
        os: 'Microsoft Windows 10 Home',
        case: 'Fractal Design Meshify 2 Black Mid Tower Computer Case',
    },
    {
        build_type: 'Professional Video Editing Build',
        cpu: 'Intel Core i5-13600K - Core i5 13th Gen Raptor Lake 14-Core',
        storage: 'Intel 660p Series M.2 2280 2TB PCIe NVMe 3.0 x4 3D2',
        ram: 'CORSAIR Vengeance DDR5 5600 32GB (2 x 16GB)',
        motherboard: 'GIGABYTE Z790 DDR5 Intel Z790 ATX Motherboard',
        chipset: 'Intel',
        gpu: 'ASRock Radeon RX 6700 XT 12GB GDDR6',
        psu: 'EVGA SuperNOVA 650 G5, 80+ Gold 650W, Fully Modular',
        os: 'Microsoft Windows 10 Home',
        case: 'Corsair 4000D Airflow Black Steel ATX Mid Tower',
    },
    {
        build_type: 'Video Editing Beast',
        cpu: 'AMD Ryzen 9 7950X - 16-Core 4.5 GHz - Socket AM5 - 170W Processor ',
        storage: 'SAMSUNG 970 EVO PLUS M.2 2280 2TB',
        ram: 'CORSAIR Vengeance DDR5 5200 64GB (2 x 32GB)',
        motherboard: 'GIGABYTE X670 AORUS ELITE AM5 ATX Motherboard',
        chipset: 'AMD',
        gpu: 'ASUS TUF Gaming GeForce RTX 3090 24GB GDDR6X',
        psu: 'Seasonic PRIME TX-1000, 1000W 80+ Titanium, Full Modular',
        os: 'Microsoft Windows 10 Home',
        case: 'Corsair Obsidian Series 1000D Super Tower Case',
    },
]

const seedPrebuiltPC = () => PrebuiltPC.bulkCreate(pcBuilds);

module.exports = seedPrebuiltPC;