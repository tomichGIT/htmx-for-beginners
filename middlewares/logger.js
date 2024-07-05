export const timeLog = (req, res, next) => {
    console.log('Registro Guardado');
    console.log('Time: ', Date.now());
    next();
}