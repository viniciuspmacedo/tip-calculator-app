import './Container.css';
import Form from '../Form/Form';
import NumberInput from '../NumberInput/NumberInput';
import personIcon from '../../assets/images/icon-person.svg'
import dollarIcon from '../../assets/images/icon-dollar.svg';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

function Container() {
    return (
        < div className="Container" >
            <Form>
                <NumberInput icon={dollarIcon} id='bill' label='Bill' />
                <fieldset>
                    <legend>Select tip %</legend>

                    <Button value="5%" className="btn btn-tip"></Button>
                    <Button value="10%" className="btn btn-tip"></Button>
                    <Button value="15%" className="btn btn-tip"></Button>
                    <Button value="20%" className="btn btn-tip"></Button>
                    <Button value="25%" className="btn btn-tip"></Button>
                    <TextInput placeholder="Custom" />

                </fieldset>
                <NumberInput icon={personIcon} id='peoṕle' label='Number of people' />
            </Form>
        </div >
    );
}

export default Container;