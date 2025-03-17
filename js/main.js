// 当文档加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动功能
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 固定导航栏效果
    const header = document.querySelector('header');
    const scrollWatcher = () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', scrollWatcher);
    
    // 添加CSS样式
    const style = document.createElement('style');
    style.textContent = `
        header.scrolled {
            background-color: rgba(255, 255, 255, 0.95);
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);
    
    // 移动端菜单切换
    const createMobileMenu = () => {
        const nav = document.querySelector('nav');
        const menuButton = document.createElement('div');
        menuButton.className = 'mobile-menu-button';
        menuButton.innerHTML = '<span></span><span></span><span></span>';
        
        document.querySelector('header .container').insertBefore(menuButton, nav);
        
        menuButton.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
        
        // 添加移动端菜单样式
        const mobileStyle = document.createElement('style');
        mobileStyle.textContent = `
            .mobile-menu-button {
                display: none;
                flex-direction: column;
                justify-content: space-between;
                width: 30px;
                height: 20px;
                cursor: pointer;
                z-index: 100;
            }
            
            .mobile-menu-button span {
                display: block;
                height: 3px;
                width: 100%;
                background-color: #3498db;
                border-radius: 3px;
                transition: all 0.3s ease;
            }
            
            .mobile-menu-button.active span:nth-child(1) {
                transform: translateY(8.5px) rotate(45deg);
            }
            
            .mobile-menu-button.active span:nth-child(2) {
                opacity: 0;
            }
            
            .mobile-menu-button.active span:nth-child(3) {
                transform: translateY(-8.5px) rotate(-45deg);
            }
            
            @media (max-width: 768px) {
                .mobile-menu-button {
                    display: flex;
                }
                
                nav {
                    position: fixed;
                    top: 0;
                    right: -100%;
                    width: 70%;
                    height: 100vh;
                    background-color: #fff;
                    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
                    padding: 80px 30px 30px;
                    transition: right 0.3s ease;
                    z-index: 99;
                }
                
                nav.active {
                    right: 0;
                }
                
                nav ul {
                    flex-direction: column;
                    align-items: flex-start;
                }
                
                nav ul li {
                    margin: 15px 0;
                    width: 100%;
                }
                
                nav ul li a {
                    display: block;
                    padding: 10px 0;
                    width: 100%;
                }
            }
        `;
        document.head.appendChild(mobileStyle);
    };
    
    // 检查是否为移动设备
    if (window.innerWidth <= 768) {
        createMobileMenu();
    }
    
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-button')) {
            createMobileMenu();
        }
    });
    
    // 简单的图片延迟加载
    const lazyLoadImages = () => {
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            lazyImages.forEach(img => {
                imageObserver.observe(img);
            });
        } else {
            // 回退方案
            lazyImages.forEach(img => {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            });
        }
    };
    
    lazyLoadImages();
}); 