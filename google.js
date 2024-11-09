//@ts-check
/** Conexión al sistema de autenticación de Firebase. */
// @ts-ignore
const auth = firebase.auth();
/** Tipo de autenticación de usuarios. En este caso es con Google. */
// @ts-ignore
const provider = new firebase.auth.GoogleAuthProvider();

/* Configura el proveedor de Google para que permita seleccionar de una
 * lista. */
provider.setCustomParameters({ prompt: "select_account" });

// Verifica si el usuario ya está autenticado
auth.onAuthStateChanged((usuarioAuth) => {
  if (usuarioAuth) {
    // Usuario autenticado
    document.getElementById('email').textContent = usuarioAuth.email;
    document.getElementById('nombre').textContent = usuarioAuth.displayName;
    document.getElementById('avatar').src = usuarioAuth.photoURL;
  } else {
    // Si no está autenticado, redirige al inicio de sesión
    auth.signInWithRedirect(provider);
  }
}, procesaError);

// Maneja los posibles errores
function procesaError(e) {
  console.error(e);
  alert(e.message);
}

// Cerrar sesión
async function terminaSesion() {
  try {
    await auth.signOut();
    alert("Sesión terminada");
    window.location.reload(); // Recarga la página después de cerrar sesión
  } catch (e) {
    procesaError(e);
  }
}
