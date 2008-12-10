;(function($){
/**
 * jqGrid Spanish Translation
 * Traduccion jqGrid en Espa�ol por Yamil Bracho
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = {};

$.jgrid.defaults = {
	recordtext: "Fila(s)",
	loadtext: "Cargando...",
	pgtext : "/"
};
$.jgrid.search = {
    caption: "Busqueda...",
    Find: "Buscar",
    Reset: "Limpiar",
    odata : ['igual', 'no igual', 'menor', 'menor o igual', 'mayor', 'mayor o igual', 'comienza con', 'termina con','contiene' ]
};
$.jgrid.edit = {
    addCaption: "Agregar Registro",
    editCaption: "Modificar Registro",
    bSubmit: "Enviar",
    bCancel: "Cancelar",
	bClose: "Cerrar",
    processData: "Procesando...",
    msg: {
        required:"Campo es requerido",
        number:"Por favor, introduzca un numero",
        minValue:"El valor debe ser mayor o igual que ",
        maxValue:"El valor debe ser menor o igual a",
        email: "no es un direccion de correo valida",
        integer: "Por favor, introduzca un entero"
    }
};
$.jgrid.del = {
    caption: "Eliminar",
    msg: "¿ Desea eliminar los registros seleccionados ?",
    bSubmit: "Eliminar",
    bCancel: "Cancelar",
    processData: "Procesando..."
};
$.jgrid.nav = {
	edittext: " ",
    edittitle: "Modificar fila seleccionada",
	addtext:" ",
    addtitle: "Agregar nueva fila",
    deltext: " ",
    deltitle: "Eliminar fila seleccionada",
    searchtext: " ",
    searchtitle: "Buscar información",
    refreshtext: "",
    refreshtitle: "Refrescar Rejilla",
    alertcap: "Aviso",
    alerttext: "Por favor, seleccione una fila"
};
// setcolumns module
$.jgrid.col ={
    caption: "Mostrar/Ocultar Columnas",
    bSubmit: "Enviar",
    bCancel: "Cancelar"	
};
$.jgrid.errors = {
	errcap : "Error",
	nourl : "No se ha especificado una url",
	norecords: "No hay datos para procesar"
};
})(jQuery);
