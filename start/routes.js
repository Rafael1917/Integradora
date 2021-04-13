'use strict'
const Route = use('Route')

//=========================Login y Registro===========================================
Route.post('/login', 'AuthController.login')
Route.post('/registrar', 'UserController.crear')

//========================= Sensore y utileria ==========================================
Route.get('/getsenso', 'SensoreController.index')
Route.get('/registrarsensor', 'SensoreController.registro')
Route.get('/gettipos', 'TipoController.index')
Route.get('/registrartipos', 'TipoController.registro')
Route.get('/getdatos', 'RegistroController.index')
Route.get('/registrardatos', 'RegistroController.registro')

//=========================Registro y update de perrito=================================
Route.group(() => {
    Route.post('/registrarperrito', 'PerritoController.crear')
    Route.post('/actualizarperrito', 'PerritoController.actualizar')
    Route.post('/getperritos', 'PerritoController.getperritos')
  }).middleware('auth').prefix('perros/')

//=========================update y traer usuarios=================================
  Route.group(() => {
  Route.post('/actualizar', 'UserController.actualizar')
  Route.post('/getusuarios', 'UserController.getusuarios')
  }).middleware('auth').prefix('usuarios/')