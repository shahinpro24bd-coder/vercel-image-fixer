(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-150px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: false,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });







































        (function() {
        // premium toast notification
        function heroToast(msg, icon = '✨') {
            let toast = document.createElement('div');
            toast.innerHTML = `<span style="margin-right: 12px; font-size: 18px;">${icon}</span>${msg}`;
            toast.style.position = 'fixed';
            toast.style.bottom = '30px';
            toast.style.left = '50%';
            toast.style.transform = 'translateX(-50%) translateY(20px)';
            toast.style.backgroundColor = '#1e1c19';
            toast.style.color = '#fff3e6';
            toast.style.padding = '14px 28px';
            toast.style.borderRadius = '60px';
            toast.style.fontSize = '14px';
            toast.style.fontWeight = '500';
            toast.style.fontFamily = "'Inter', system-ui, sans-serif";
            toast.style.boxShadow = '0 20px 35px -8px rgba(0,0,0,0.25), 0 0 0 1px rgba(184,134,11,0.3)';
            toast.style.zIndex = '9999';
            toast.style.backdropFilter = 'blur(12px)';
            toast.style.background = 'rgba(0,0,0,0.85)';
            toast.style.border = '1px solid rgba(184,134,11,0.5)';
            toast.style.maxWidth = '85%';
            toast.style.textAlign = 'center';
            toast.style.letterSpacing = '0.3px';
            toast.style.transition = 'all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.2)';
            toast.style.opacity = '0';
            document.body.appendChild(toast);
            setTimeout(() => {
                toast.style.opacity = '1';
                toast.style.transform = 'translateX(-50%) translateY(0)';
            }, 20);
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateX(-50%) translateY(20px)';
                setTimeout(() => { if(toast.remove) toast.remove(); }, 400);
            }, 2700);
        }





  // # er jaygay contact 
        
        // Buttons events
const btnConsult = document.getElementById('heroBtn1');
const btnLibrary = document.getElementById('heroBtn2');

if (btnConsult) {
    btnConsult.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'contact.html';
    });
}

if (btnLibrary) {
    btnLibrary.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'contact.html';
    });
}
 // # er jaygay contact 





        // scroll reveal observer
        const revealEls = document.querySelectorAll('.hero35');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('hero36');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: "0px 0px -20px 0px" });
        revealEls.forEach(el => observer.observe(el));
        
        window.addEventListener('load', () => {
            revealEls.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    el.classList.add('hero36');
                    observer.unobserve(el);
                }
            });
        });

        // enhanced image interaction: 3D tilt effect on desktop (premium)
        const imgWrap = document.getElementById('heroImgWrap');
        if (imgWrap && window.innerWidth > 880) {
            document.addEventListener('mousemove', (e) => {
                const rect = imgWrap.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const deltaX = (e.clientX - centerX) / 25;
                const deltaY = (e.clientY - centerY) / 25;
                const maxRotate = 8;
                const rotX = Math.min(maxRotate, Math.max(-maxRotate, deltaY));
                const rotY = Math.min(maxRotate, Math.max(-maxRotate, -deltaX));
                imgWrap.style.transform = `perspective(1000px) rotateX(${rotX * 0.6}deg) rotateY(${rotY * 0.6}deg) translateY(-4px)`;
                imgWrap.style.transition = 'transform 0.1s ease-out';
            });
            document.addEventListener('mouseleave', () => {
                imgWrap.style.transform = '';
                imgWrap.style.transition = 'transform 0.4s ease';
            });
        }
        
        // subtle particle effect on image click
        const imgInner = document.querySelector('.hero32');
        if (imgInner) {
            imgInner.addEventListener('click', () => {
                const ripple = document.createElement('div');
                ripple.style.position = 'absolute';
                ripple.style.width = '40px';
                ripple.style.height = '40px';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(184,134,11,0.4)';
                ripple.style.top = '50%';
                ripple.style.left = '50%';
                ripple.style.transform = 'translate(-50%, -50%) scale(0)';
                ripple.style.pointerEvents = 'none';
                ripple.style.animation = 'heroRipple 0.6s ease-out forwards';
                imgInner.style.position = 'relative';
                imgInner.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            });
        }
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `@keyframes heroRipple {
            0% { transform: translate(-50%, -50%) scale(0); opacity: 0.7; }
            100% { transform: translate(-50%, -50%) scale(6); opacity: 0; }
        }`;
        document.head.appendChild(styleSheet);
    })();








































    
})(jQuery);

// Local English / Bangla controls — fully local, with no translator branding.
(function localSiteControls() {
    var translations = {
        'Loading...': 'লোড হচ্ছে...',
        "Dr. Habibur Rahman's": 'ডা. হাবিবুর রহমানের',
        Home: 'হোম',
        About: 'পরিচিতি',
        Services: 'সেবাসমূহ',
        Gallery: 'গ্যালারি',
        Contact: 'যোগাযোগ',
        'Book Appointment': 'অ্যাপয়েন্টমেন্ট নিন',
        'Book consultation': 'পরামর্শের সময় নিন',
        'Call or WhatsApp for appointment / WhatsApp': 'অ্যাপয়েন্টমেন্ট / হোয়াটসঅ্যাপের জন্য কল করুন',
        'About Us': 'আমাদের সম্পর্কে',
        'Contact Us': 'যোগাযোগ করুন',
        'Our Services': 'আমাদের সেবাসমূহ',
        'Online Appointment': 'অনলাইন অ্যাপয়েন্টমেন্ট',
        'Quick Links': 'দ্রুত লিংক',
        'Surgical Services': 'সার্জিক্যাল সেবাসমূহ',
        'Chamber Information': 'চেম্বারের তথ্য',
        Chamber: 'চেম্বার',
        Appointment: 'অ্যাপয়েন্টমেন্ট',
        'Our Gallery': 'আমাদের গ্যালারি',
        'About Me': 'আমার সম্পর্কে',
        'Core Expertise': 'মূল দক্ষতা',
        'Education & Qualification': 'শিক্ষা ও যোগ্যতা',
        'Education & Qualification & Advanced Training': 'শিক্ষা, যোগ্যতা ও উচ্চতর প্রশিক্ষণ',
        'Professional Journey': 'পেশাগত যাত্রা',
        'Experience & Advanced Training': 'অভিজ্ঞতা ও উচ্চতর প্রশিক্ষণ',
        'Accepting new patients': 'নতুন রোগী দেখা হচ্ছে',
        'Dr. Md. Habibur Rahman': 'ডা. মো. হাবিবুর রহমান',
        'Fellow, American College of Surgeons (USA)': 'ফেলো, আমেরিকান কলেজ অব সার্জনস (USA)',
        'International fellowships (Korea • Malaysia • India)': 'আন্তর্জাতিক ফেলোশিপ (কোরিয়া • মালয়েশিয়া • ভারত)',
        'Coronary Artery Surgery': 'করোনারি আর্টারি সার্জারি',
        'Valve Repair & Replacement': 'ভালভ মেরামত ও প্রতিস্থাপন',
        'Bachelor of Medicine & Surgery': 'ব্যাচেলর অব মেডিসিন অ্যান্ড সার্জারি',
        'Medical Registration': 'মেডিকেল নিবন্ধন',
        'Registered Medical Practitioner': 'নিবন্ধিত চিকিৎসক',
        'Fellowships & Professional Membership': 'ফেলোশিপ ও পেশাগত সদস্যপদ',
        'Specialized Training & Workshop': 'বিশেষায়িত প্রশিক্ষণ ও কর্মশালা',
        'Career & Training Milestones': 'কর্মজীবন ও প্রশিক্ষণের মাইলফলক',
        Graduation: 'স্নাতক',
        Fellowship: 'ফেলোশিপ',
        'Clinical Fellowship': 'ক্লিনিক্যাল ফেলোশিপ',
        'Registrar / Clinical Fellow': 'রেজিস্ট্রার / ক্লিনিক্যাল ফেলো',
        'Research Publication': 'গবেষণা প্রকাশনা',
        'Comparative Clinical Study': 'তুলনামূলক ক্লিনিক্যাল গবেষণা',
        'Degrees & Training': 'ডিগ্রি ও প্রশিক্ষণ',
        'Advanced Expertise': 'উচ্চতর দক্ষতা',
        'Current Position': 'বর্তমান পদ',
        'Professional Affiliation': 'পেশাগত সংযুক্তি',
        'Special Interests': 'বিশেষ আগ্রহ',
        Consultation: 'পরামর্শ',
        'By Appointment': 'অ্যাপয়েন্টমেন্ট সাপেক্ষে',
        'Saturday - Thursday': 'শনিবার - বৃহস্পতিবার',
        'Appointment & Consultation': 'অ্যাপয়েন্টমেন্ট ও পরামর্শ',
        'Phone / WhatsApp': 'ফোন / হোয়াটসঅ্যাপ',
        Phone: 'ফোন',
        Email: 'ইমেইল',
        Facebook: 'ফেসবুক',
        WhatsApp: 'হোয়াটসঅ্যাপ',
        'Call Now': 'এখনই কল করুন',
        'Email Us': 'ইমেইল করুন',
        'Follow on Facebook': 'ফেসবুকে অনুসরণ করুন',
        'Practice Locations': 'চেম্বারের স্থান',
        'Book Online Appointment': 'অনলাইনে অ্যাপয়েন্টমেন্ট নিন',
        'Call or WhatsApp for appointment': 'অ্যাপয়েন্টমেন্ট / পরামর্শের জন্য কল করুন',
        'Our Signature': 'আমাদের বিশেষত্ব',
        'Read More': 'আরও পড়ুন',
        'Show Less': 'সংক্ষিপ্ত করুন',
        'Learn More': 'আরও জানুন',
        'View Details': 'বিস্তারিত দেখুন',
        'View Gallery': 'গ্যালারি দেখুন',
        'Send Message': 'বার্তা পাঠান',
        'Full Name': 'পূর্ণ নাম',
        'Your Name': 'আপনার নাম',
        'Email Address': 'ইমেইল ঠিকানা',
        'Phone Number': 'ফোন নম্বর',
        Subject: 'বিষয়',
        Message: 'বার্তা',
        'Your Message': 'আপনার বার্তা',
        'All Right Reserved.': 'সর্বস্বত্ব সংরক্ষিত।',
        'Designed By': 'ডিজাইন করেছেন',
        'General Anaesthesia': 'জেনারেল অ্যানেস্থেশিয়া',
        'Longer Recovery': 'দীর্ঘতর সুস্থতার সময়',
        'Patient Safety': 'রোগীর নিরাপত্তা',
        'Second Opinion': 'দ্বিতীয় মতামত',
        'Follow-up Care': 'ফলো-আপ সেবা',
        'Theme color': 'থিমের রং',
        'Choose a color': 'একটি রং বেছে নিন',
        'Reset color': 'মূল রং ফিরিয়ে আনুন',
        'Close settings': 'সেটিংস বন্ধ করুন',
        'Open theme settings': 'থিম সেটিংস খুলুন',
        'Available Hours': 'সময়সূচি',
        'Facebook Page': 'ফেসবুক পেজ',
        'Online contact': 'অনলাইনে যোগাযোগ',
        'Reach us by email, WhatsApp or Facebook': 'অ্যাপয়েন্টমেন্ট বা রোগ সম্পর্কিত যেকোনো জিজ্ঞাসার জন্য ফোন বা হোয়াটসঅ্যাপের মাধ্যমে সরাসরি যোগাযোগ করতে পারেন। দ্রুত উত্তর পেতে হোয়াটসঅ্যাপ বা ফোন কল সবচেয়ে নির্ভরযোগ্য।',
        'Response Time': 'উত্তরের সময়',
        'WhatsApp Number': 'হোয়াটসঅ্যাপ নম্বর',
        'WhatsApp Us': 'হোয়াটসঅ্যাপে লিখুন'
    };
    var phraseTranslations = [
        ['Urology & Andrology Specialist', 'ইউরোলজি বিশেষজ্ঞ ও সার্জন'], ['Urology', 'ইউরোলজি'],
        ['Research Institute', 'রিসার্চ ইনস্টিটিউট'], ['Bangladesh', 'বাংলাদেশ'],
        ['Appointment', 'অ্যাপয়েন্টমেন্ট'], ['Consultation', 'পরামর্শ'], ['Services', 'সেবাসমূহ'],
        ['Surgery', 'সার্জারি'], ['Training', 'প্রশিক্ষণ'], ['Research', 'গবেষণা'],
        ['Contact', 'যোগাযোগ'], ['Hospital', 'হাসপাতাল'], ['Dhaka', 'ঢাকা']
    ];
    var originals = new WeakMap();
    var externalDictionary = {};

    function translatedText(source) {
        var trimmed = source.trim();
        if (!trimmed) return source;
        var translated = externalDictionary[trimmed] || translations[trimmed];
        if (!translated) {
            translated = trimmed;
            phraseTranslations.forEach(function (pair) { translated = translated.split(pair[0]).join(pair[1]); });
        }
        return source.replace(trimmed, translated);
    }

    function translatePage(language) {
        var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        var node;
        while ((node = walker.nextNode())) {
            if (!node.parentElement || node.parentElement.closest('script, style, noscript, .theme-settings')) continue;
            var source = originals.get(node) || node.nodeValue;
            if (!originals.has(node)) originals.set(node, source);
            node.nodeValue = language === 'bn' ? translatedText(source) : source;
        }
        document.querySelectorAll('[placeholder], [title], [aria-label]').forEach(function (element) {
            ['placeholder', 'title', 'aria-label'].forEach(function (attribute) {
                var value = element.getAttribute(attribute);
                if (!value) return;
                var key = 'orig' + attribute.replace(/-/g, '').charAt(0).toUpperCase() + attribute.replace(/-/g, '').slice(1);
                if (!element.dataset[key]) element.dataset[key] = value;
                element.setAttribute(attribute, language === 'bn' ? translatedText(element.dataset[key]).trim() : element.dataset[key]);
            });
        });
    }

    function applyLanguage(language) {
        var value = language === 'bn' ? 'bn' : 'en';
        document.documentElement.lang = value;
        document.body.classList.toggle('lang-bn', value === 'bn');
        document.querySelectorAll('.language-switcher button').forEach(function (button) {
            var active = button.getAttribute('data-language') === value;
            button.classList.toggle('active', active);
            button.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        translatePage(value);
        try { localStorage.setItem('site-language', value); } catch (error) { /* storage may be unavailable */ }
    }

    var THEME_COLOR = '#4338CA';
    function applyThemeColor(color) {
        document.documentElement.style.setProperty('--theme-primary', color);
        document.documentElement.style.setProperty('--bs-primary', color);
    }

    window.switchSiteLanguage = applyLanguage;
    var savedLanguage = 'en'; // English only — language toggle removed
    applyThemeColor(THEME_COLOR);
    applyLanguage(savedLanguage);

    // Full-site Bangla dictionary (pre-translated, served locally).
    fetch('/js/bn-dictionary.json')
        .then(function (response) { return response.json(); })
        .then(function (data) {
            externalDictionary = data || {};
            if (document.documentElement.lang === 'bn') applyLanguage('bn');
        })
        .catch(function () { /* dictionary optional */ });
})();
