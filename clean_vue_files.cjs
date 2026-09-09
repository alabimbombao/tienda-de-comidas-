const fs = require('fs');
const path = require('path');
const dir = 'c:\\Users\\Aprendiz\\Desktop\\rutas vue\\rutas_vue\\views';
const appVuePath = 'c:\\Users\\Aprendiz\\Desktop\\rutas vue\\rutas_vue\\src\\App.vue';

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Remove comments
    content = content.replace(/<!--[\s\S]*?-->/g, '');
    
    if (filePath.endsWith('Nosotros.vue')) {
        content = content.replace(/<div class="team-avatar-wrapper">[\s\S]*?<\/div>/g, '<img src="" alt="Imagen de equipo" style="width: 100%; height: 200px; object-fit: cover; background-color: #eee;" />');
    }

    // Remove span tags completely including content
    content = content.replace(/<span\b[^>]*>[\s\S]*?<\/span>/g, '');
    
    // Clean up extra blank lines
    // content = content.replace(/^\s*\n/gm, '');

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Processed', filePath);
}

const files = fs.readdirSync(dir).filter(f => f.endsWith('.vue'));
for (const f of files) {
    processFile(path.join(dir, f));
}
if (fs.existsSync(appVuePath)) {
    processFile(appVuePath);
}
