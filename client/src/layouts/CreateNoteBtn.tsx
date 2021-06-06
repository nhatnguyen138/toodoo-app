import { useState } from 'react'
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Alert, Form, FormGroup, Label, Input
} from "reactstrap";

export default function CreateNoteBtn() {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    return (
        <>
            <Button onClick={toggle} id="CreateNoteBtn"><strong>Create Note +</strong></Button>
            <Modal isOpen={modal} toggle={toggle} style={{color:"black"}}>
                <ModalHeader toggle={toggle}><strong>Create Note</strong></ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input
                                type="text"
                                id="title" name="title"
                                autocomplete="off" required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="category">Category</Label>
                            <Input
                                type="select"
                                id="category" name="category"
                                required
                            >
                                <option>Categories here...</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="pinned">Pin Post?</Label>
                            <br />
                            <Label style={{marginLeft: "30px"}}>
                            <Input
                                type="radio"
                                name="pinned"
                                value="true"
                            />Yes
                            <br />
                            <Input
                                type="radio"
                                name="pinned"
                                value="false"
                            />No
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Label for="content">Content</Label>
                            <Input
                                type="textarea"
                                id="content" name="conent"
                                autocomplete="off" required
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="dark" onClick={toggle}>Create</Button>
                    <Button color="dark" onClick={toggle}>Dismiss</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}