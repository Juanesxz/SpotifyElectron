import React from "react";
import { Form, Input, Button, Image } from "semantic-ui-react";
import "./AddArtistForm";

export default function AddArtistForm() {

    const onSubmit = () => {
        console.log("Creando Nuevo Artista");
    }

    return (
        <Form className="add-artist-form" onSubmit={onSubmit}>
            <Form.Field className="artist-banner">
                <input type="file" />
            </Form.Field>
            <Form.Field className="artist-avatar">
                <div>Avatar</div>
            </Form.Field>
            <Form.Field>
                <Input placeholder="Nombre del artista" />
            </Form.Field>
            <Button type="submit">Crear artista</Button>
        </Form>

    );
}
