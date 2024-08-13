import React from "react";
import "./Login.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const Login = () => {

    return (
        <div className="Body">
            <Card title="Login">
                <div className="grid">
                    <div className="field col-12">
                        <label for="E-Mail">E-Mail:</label><br/>
                        <InputText placeholder="E-Mail" />
                    </div>
                    <div className="field col-12">
                        <label for="Senha">Senha:</label><br/>
                        <Password feedback={false} placeholder="Senha" toggleMask />
                    </div>
                    <div className="col-fixed">
                        <Button label="Login" />
                    </div>
                    <div className="col-fixed">
                        <Button label="Recuperar Senha" />
                    </div>
                    <div className="col-fixed">
                        <Button label="Cadastrar-se" />
                    </div>
                </div>
            </Card>
        </div>
    );
}
export default Login;