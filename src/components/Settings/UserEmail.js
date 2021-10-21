import React, { useState } from "react";
import { Button, Form, Input, Icon } from "semantic-ui-react";

export default function UserEmail(props) {
    const { user, setShowModal, setTitleModal, setContentModal } = props;

    const onEdit = () => {
        setTitleModal("Actualizar email");
        setContentModal(
            <ChangeEmailForm email={user.email} setShowModal={setShowModal} />
        );
        setShowModal(true);
    };

    return (
        <div className="user-email">
            <h3>Email: {user.email}</h3>
            <Button circular onClick={onEdit}>
                actualizar
            </Button>
        </div>
    );
}

function ChangeEmailForm(props) {
    const { email, setShowModal } = props;
    const [formData, setFormData] = useState({ email: "", password: "" });

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = () => {
        console.log("Formulario enviado");

        setShowModal(false);
    };

    return (
        <Form onSubmit={onSubmit}>
            <Form.Field>
                <Input
                    defaultValue={email}
                    type="text"
                    onChange={e => {
                        return setFormData({ ...formData, email: e.target.value });
                    }}
                />
            </Form.Field>
            <Form.Field>
                <Input
                    placeholder="Contraseña"
                    type={showPassword ? "text" : "password"}
                    onChange={e => setFormData({ ...formData, password: e.target.value })}
                    icon={
                        <Icon
                            name={showPassword ? "eye slash outline" : "eye"}
                            link
                            onClick={() => setShowPassword(!showPassword)}
                        />
                    }
                />
            </Form.Field>
            <Button type="submit">Actualizar Contraseña</Button>
        </Form>
    );
}
