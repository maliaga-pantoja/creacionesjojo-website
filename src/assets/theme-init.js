// ============================================================
// theme-init.js — Se carga ANTES del renderizado (inline en <head>)
// para evitar el flash de tema incorrecto.
// ============================================================
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
} else {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
}
