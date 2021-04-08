'use strict'
const Route = use('Route')

//=========================Login y Registro===========================================
Route.post('/login', 'AuthController.login')
Route.post('/registrar', 'UserController.crear')
Route.post('/registrarmongo', 'UsuarioMdbController.registrar')

//=========================Registro perrito y updates=================================
Route.group(() => {
    Route.post('/actualizar', 'UserController.actualizar')
    Route.post('/registrarperrito', 'PerritoController.crear')
    Route.post('/actualizarperrito', 'PerritoController.actualizar')
    Route.post('/registrarperritomongo', 'PerritoMdbController.registrar')
  }).middleware('auth').prefix('api/')