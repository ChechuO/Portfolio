try {
    const t = localStorage.getItem('tema');
    if (t === 'oscuro') document.documentElement.dataset.theme = t;
} catch (e) {}
