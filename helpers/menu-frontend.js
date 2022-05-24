
const getMenuFrontEnd = (role = 'USER_ROLE') => {

    const menu = [

        
        {
          titulo: 'Dashboard',
          icono: 'mdi mdi-gauge',
          submenu: [
//            { titulo: 'Main', url: '/' },
//            { titulo: 'Gráficas', url: 'grafica1' },
//            { titulo: 'rxjs', url: 'rxjs' },
//            { titulo: 'Promesas', url: 'promesas' },
//            { titulo: 'ProgressBar', url: 'progress' },
          ]
        },
    
        {
          titulo: 'Mantenimientos',
          icono: 'mdi mdi-folder-lock-open',
          submenu: [
            // { titulo: 'Usuarios', url: 'usuarios' },
            { titulo: 'Periodos', url: 'hospitales' },
            { titulo: 'Artistas', url: 'medicos' },
            { titulo: 'Obras', url: 'obras' },
            { titulo: 'SCE Obras', url: 'sce' },
            { titulo: 'Articulos', url: 'articulos' },
            { titulo: 'Proyectos', url: 'proyectos' },
            { titulo: 'Docencia', url: 'docencia' },

          ]
        },
      ];

    if ( role === 'ADMIN_ROLE' ) {
        menu[1].submenu.unshift({ titulo: 'Usuarios', url: 'usuarios' })
    }

    return menu;
}

module.exports = {
    getMenuFrontEnd
}
