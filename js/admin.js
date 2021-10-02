let formularioAgregar = document.querySelector("#form-add_product")
formularioAgregar.addEventListener("submit", (event)=> {

    event.preventDefault()
    let producto = {}
    formularioAgregar.querySelectorAll(".form-control").forEach((input)=> {
        if(input.type === "checkbox"){
            if(input.checked){
                producto[input.name] = [...producto[input.name],input.value] // Asignacion propiedad tamanos con spread operator 
            }
        }else{
            producto[input.name] = input.value // 
        }

    })
    agregarProducto(producto)
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

// Funcion para Traer de la base de datos (Read)

const getProducts = () => {
    const xhr = new XMLHttpRequest()
    xhr.addEventListener("readystatechange", () =>{
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                let descargBD = xhr.responseText
                let bdParsed = (JSON.parse(descargBD))
                console.log(bdParsed)
                alert("Descarga exitosa")
            }
        }

    })
    xhr.open("GET", "https://api-friki-mkt-default-rtdb.firebaseio.com/.json",true)
    xhr.send()
}

// Funcion para actualizar productos (Update)

const updateProducts = (idProducto, objetoUpdate = {productoName:"Barbie"}) => {
    const xhr = new XMLHttpRequest()
    xhr.addEventListener("readystatechange", () =>{
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                alert("Updaate exitoso")
            }
        }

    })
    xhr.open("PATCH", `https://api-friki-mkt-default-rtdb.firebaseio.com/${idProducto}.json`,true)
    xhr.send(JSON.stringify(objetoUpdate))
}

// Funcion para eliminar productos

const deleteProducts = (idProducto) => {
    const xhr = new XMLHttpRequest()
    xhr.addEventListener("readystatechange", () =>{
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                alert("Delete exitoso")
            }
        }

    })
    xhr.open("DELETE", `https://api-friki-mkt-default-rtdb.firebaseio.com/${idProducto}.json`,true)
    xhr.send()
}