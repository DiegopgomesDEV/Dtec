import '../FormularioDeEvento/FormularioDeEvento.css'
import { CampoDeFormulario } from "../CampoDeFormulario";
import {Label} from "../Label";
import {TituloFormulario} from "../TituloFormulario"
import { CampoDeEntrada} from '../CampoDeEntrada';
import { Botao } from '../Botão';
import { ListaSuspensa } from '../ListaSuspensa';


export function FormularioDeEvento() {
    return (
        <form className='form-evento'>
            <TituloFormulario>Preecha para criar um evento:</TituloFormulario>

            <div className='campos'>
                <CampoDeFormulario>
                    <Label htmlFor='nome'>Qual é o nome do evento</Label>

                <CampoDeEntrada type='text' id='nome'placeholder='sumer dev hits'/>
                </CampoDeFormulario> 

                <CampoDeFormulario>
                    <Label htmlFor='dataEvento'>Qual é o data do evento</Label>

                <CampoDeEntrada type='date' id='nome' placeholder='dataEvento'/>
                </CampoDeFormulario>

                <CampoDeFormulario>
                    <Label htmlFor='tipotEvento'>Qual é o tipo de evento</Label>

                    <ListaSuspensa/>
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