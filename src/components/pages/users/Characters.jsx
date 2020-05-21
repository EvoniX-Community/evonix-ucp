import React, { useState } from 'react';
import { 
    Button, 
    Header, 
    Icon, 
    Segment, 
    Grid, 
    Form, 
    Select, 
    Modal 
} from 'semantic-ui-react';

import Sidebar from '../../layouts/sidebar/Sidebar';

import { createCharacter } from '../../actions/character';

const Characters = () => {
    const [formData, setFormData] = useState({ 
        firstname: '',
        lastname: '',
        gender: null
    });

    const genderOptions = [
        { key: 'm', text: 'Male', value: 0 },
        { key: 'f', text: 'Female', value: 1 }
    ]

    const { firstname, lastname, gender } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        firstname.charAt(0).toUpperCase + firstname.slice(1);
        lastname.charAt(0).toUpperCase + lastname.slice(1);
        console.log(firstname + lastname);
        
        createCharacter({ firstname, lastname, gender });
    }

    return (
        <>
            <section id="characters">
                <Grid stackable>
                    <Sidebar />
                    <Grid.Column stretched width={12}>
                        <Segment>
                            <Segment placeholder textAlign="center">
                                <Header icon>
                                    <Icon name="search" />
                                    No characters are listed for this account.
                                </Header>
                                <Modal size="tiny" trigger={<Button primary>Add New</Button>} closeIcon>
                                    <Header icon="user plus" content="Create A New Character" />
                                    <Form size="small" onSubmit={e => onSubmit(e)}>
                                        <Modal.Content>
                                            <Form.Input
                                                type="text"
                                                name="fistname"
                                                value={firstname}
                                                placeholder="First Name"
                                                onChange={c => onChange(c)}
                                            />
                                            <Form.Input
                                                type="text"
                                                name="lastname"
                                                value={lastname}
                                                placeholder="Last Name"
                                                onChange={c => onChange(c)}
                                            />
                                            <Form.Input
                                                control={Select}
                                                name="gender"
                                                value={gender}
                                                options={genderOptions}
                                                placeholder="Gender"
                                                onChange={c => onChange(c)}
                                            />
                                        </Modal.Content>
                                        <Modal.Actions>
                                            <Form.Button color="red" content="Create" />
                                        </Modal.Actions>
                                    </Form>
                                </Modal>
                            </Segment>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </section>
        </>
    )
}

export default Characters;
