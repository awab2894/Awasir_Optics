
        const navIcon = document.querySelector('.nav-icon');
        const navMenu = document.querySelector('.nav-menu');
        const navItems = navMenu.children;
        
        navIcon.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        for(item of navItems){
            item.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
        }
