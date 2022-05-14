import React from "react";
import Button from "../Button";
import form from './form.module.scss';

class Form extends React.Component {

    state = {
        'name': '',
        'time': '00:00:00'
    }

    addTask(event: React.FormEvent){
        event.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <form className={form.novaTarefa} onSubmit={this.addTask.bind(this)}>
                <div className={form.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input
                    type="text" 
                    name="tarefa" 
                    id="tarefa" 
                    placeholder="O que você quer estudar"
                    value={this.state.name}
                    onChange={event => this.setState({...this.state, name: event.target.value})}
                    required/>
                </div>
                <div className={form.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input 
                    type="time" 
                    step="1"
                    name="tempo" 
                    id="tempo" 
                    min="00:00:00" 
                    max="01:30:00" 
                    value={this.state.time} 
                    onChange={event => this.setState({...this.state, time: event.target.value})} 
                    required/>
                </div>
                <Button type="submit">Adicionar</Button>
            </form>
        )
    }
}

export default Form;