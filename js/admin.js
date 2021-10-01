let formularioAgregar = document.querySelector("#form-add_product")
formularioAgregar.addEventListener("submit", (event)=> {

    event.preventDefault()
    console.log(event.target)
    console.log(formularioAgregar)
    let producto = {}
    formularioAgregar.querySelectorAll(".form-control").forEach((input)=> {
        console.log(input.name)
        console.log(input.value)
    })


})

// Funcion para Create

const agregarProducto = (producto) => {
    const xhr = new XMLHttpRequest()
    xhr.addEventListener("readystatechange", () =>{
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                alert("Producto agregado exitosamente")
            }
        }
    })
    xhr.open("POST", "https://api-friki-mkt-default-rtdb.firebaseio.com/.json",true)
    xhr.send(JSON.stringify(producto))
}

