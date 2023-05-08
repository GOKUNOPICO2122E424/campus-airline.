import { postData,putData,opc } from '../../Apis/customer-api.js';
export class CustomerForm extends HTMLElement{

    constructor(){
        super();
        this.render();

    }
    render() {
        this.innerHTML = /* html */`
        <div class="card">
            <h5 class="card-header">Registro de clientes</h5>
            <div class="card-body">
                <div class="container">
                    <div class="row g-3">
                        <div class="col-12">
                            <form id = "frmData">
                                <div class="row g-3">
                                    <div class="col-3">
                                        <label for="createdAt" class="form-label">Nro Identificacion</label>
                                        <input type="number" class="form-control" id="createdAt" name="createdAt">                  
                                    </div>
                                    <div class="col-3">
                                        <label for="cc" class="form-label">Nombre del Cliente</label>
                                        <input type="text" class="form-control" id="cc" name="cc">
                                    </div>
                                    <div class="col-3">
                                        <label for="nombres" class="form-label">Apellidos</label>
                                        <input type="text" class="form-control" id="nombres" name="nombres">                  
                                    </div>
                                    <div class="col-3">
                                        <label for="apellidos" class="form-label">Nro Telefono</label>
                                        <input type="number" class="form-control" id="apellidos" name="apellidos">                  
                                    </div>
                                </div>
                                <div class="row g-3">
                                    <div class="col-4">
                                        <label for="email" class="form-label">Fecha de Nacimiento</label>
                                        <input type="date" class="form-control" id="email" name="email">
                                    </div>
                                    <div class="col-4">
                                        <label for="telefono" class="form-label">Ciudad de Origen</label>
                                        <input type="text" class="form-control" id="telefono" name="telefono">                  
                                    </div>
                                    <div class="col-4">
                                        <label for="fechanac" class="form-label">Pais de Origen</label>
                                        <input type="text" class="form-control" id="fechanac" name="fechanac">                  
                                    </div>
                                    <div class="col-4">
                                        <label for="fechanac" class="form-label">Correo Electronico</label>
                                        <input type="email" class="form-control" id="fechanac" name="fechanac">                  
                                    </div>
                                    <div class="container mt-4 text-center" >
                                        <input type="submit" data-accion="POST" class="btn btn-primary" value="Guardar Clientes">
                                    </div>
                                </div>
                            </form>                         
                    </div>
                </div>
            </div>
            </div>
        </div>        
        `
        this.saveData();
    }
    saveData = () =>{
        let myForm = document.querySelector("#frmData");
        myForm.addEventListener("submit", (e)=>{
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.target));
            opc[e.submitter.dataset.accion](data)    
        })
    }
}
customElements.define("customer-form",CustomerForm);