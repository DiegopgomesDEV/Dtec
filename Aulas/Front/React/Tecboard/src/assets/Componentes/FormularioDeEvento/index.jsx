import '../FormularioDeEvento/FormularioDeEvento.css'
import { CampoDeFormulario } from "../CampoDeFormulario";
import {Label} from "../Label";
import {TituloFormulario} from "../TituloFormulario"
import { CampoDeEntrada} from '../CampoDeEntrada';
import { Botao } from '../Botão';
import { ListaSuspensa } from '../ListaSuspensa';


export function FormularioDeEvento({temas, aoSubmeter})  {

    function aoFormSubmetido (Formdata){
        console.log('Está na hora de criar um evento', Formdata)
        const evento = {
            capa: Formdata.get('capa'),
            tema: temas.find(function(item) {
                return item.id == Formdata.get('tema')
            }),
            data: new Date(Formdata.get('dataEvento')),
            titulo:  Formdata.get('nomeEvento')
        }
        aoSubmeter(evento)
    }

    return (
        <form className='form-evento' action={aoFormSubmetido}>
            <TituloFormulario>Preecha para criar um evento:</TituloFormulario>

            <div className='campos'>

                <CampoDeFormulario>
                    <Label htmlFor='nomeEvento'>Qual é o nome do evento</Label>

                <CampoDeEntrada type='text' id='nomeEvento' name='nomeEvento' placeholder='sumer dev hits'/>
                </CampoDeFormulario> 

                <CampoDeFormulario>
                    <Label htmlFor='capa'>Qual é o indereço da imagem de capa</Label>

                <CampoDeEntrada type='text' id='capa' placeholder='http://...' name='capa'/>
                </CampoDeFormulario>

                <CampoDeFormulario>
                    <Label htmlFor='dataEvento'>Qual é a data do evento</Label>

                <CampoDeEntrada type='date' id='dataEvento' placeholder='dataEvento' name='dataEvento'/>
                </CampoDeFormulario>

                <CampoDeFormulario>
                    <Label htmlFor='tema'>Qual é o tipo de evento</Label>

                    <ListaSuspensa id='tema' name='tema' itens={temas} />
                </CampoDeFormulario>

            </div>

            <div className='acoes'>
                <Botao>
                    Criar evento
                </Botao>
            </div>
        </form> 
    )
}