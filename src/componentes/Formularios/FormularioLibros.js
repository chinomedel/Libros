
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "../../stories/Button";

const FormularioLibros = ()=>{
    
    const enviar = (values)=>{
        alert(JSON.stringify(values))
    }
    const validaciones =(values)=>{
        const errors = {}
        if(values.titulo == "") errors.titulo ="Nombre es obligatorio"
        if(values.autor == "") errors.autor ="Autor es obligatorio"
        if(values.paginas == "") errors.paginas ="Páginas es obligatorio"
        if(values.anoPublicacion == "") errors.anoPublicacion ="Año es obligatorio"
        return errors;
    }

    return(
        <div className="">
            <h1 className='text-center text-indigo-900 text-3xl mt-8 font-bold'>Ingresar Libro</h1>
            <div className="flex justify-center items-center">
            <Formik
                initialValues={{
                    titulo: "",
                    autor:"",
                    paginas:"",
                    anoPublicacion:""
                }}
                onSubmit={enviar}
                validate={validaciones}
            >     
                <Form className="w-2/5 mt-5">
                    <label className="text-xl ml-5 " htmlFor="titulo">Título</label>
                    <Field name="titulo" type="text" className="block h-12 w-full border border-indigo-600 m-5"/>
                    <label className="text-xl ml-5 " htmlFor="autor">Autor</label>
                    <Field name="autor" type="text" className="block h-12 w-full border border-indigo-600 m-5"/>
                    <label className="text-xl ml-5 " htmlFor="paginas">N° de Páginas</label>
                    <Field name="paginas" type="number" className="block h-12 w-full  border border-indigo-600 m-5"/>
                    <label className="text-xl ml-5" htmlFor="anoPublicacion">Año de Publicación</label>
                    <Field name="anoPublicacion" type="number" className="block h-12 w-full border border-indigo-600 m-5"/>
                    <div className="text-red-500">
                        <ul>
                            <li><ErrorMessage name="titulo"/></li>
                            <li><ErrorMessage name="autor"/></li>
                            <li> <ErrorMessage name="paginas"/></li>
                            <li> <ErrorMessage name="anoPublicacion"/></li>
                        </ul>
                    
                    
                   
                   
                    </div>
                    
                    <button type="submit" className="block h-20 w-full border border-indigo-600 m-5 bg-indigo-600 text-white">Crear Libro</button>
                    <Button label="Crear Libro" primary={true} type="submit"/>
                </Form>
            </Formik>
            </div>
        </div>
    );

};
export default FormularioLibros