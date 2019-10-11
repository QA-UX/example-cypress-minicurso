import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class User extends React.Component {
  state = {
    alunos: [],
    aluno: {
      nome: '',
      sobrenome: '',
      email: '',
      endereco: '',
      cidade: '',
      pais: '',
      cep: ''
    }
  }

  handleChange = (event) => {
    const { value } = event.target;
    console.log(value);
    this.setState({ [event.target.name] : value});
  }

  handleSubmit = (event) => {
    alert('Um nome foi enviado: ' + this.state.aluno);
    event.preventDefault();
  }


  render() {
    const {aluno, alunos} = this.state;
    console.log(alunos);
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Adicionar Aluno</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>Nome</label>
                          <Input
                            onChange={this.handleChange}
                            name="nome"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>Sobrenome</label>
                          <Input
                            type="text"
                            onChange={this.handleChange}
                            name="sobrenome"
                          />
                        </FormGroup>
                      </Col>

                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email
                          </label>
                          <Input 
                            type="email" 
                            onChange={this.handleChange}
                            name="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Endereço</label>
                          <Input
                            type="text"
                            name="endereco"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>Cidade</label>
                          <Input
                            type="text"
                            name="cidade"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>País</label>
                          <Input
                            type="text"
                            name="pais"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>CEP</label>
                          <Input placeholder="99999999" 
                            onChange={this.handleChange}
                            type="number" 
                            name="cep"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                        >
                          Adicionar Aluno
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Alunos Adicionados Recentementes</CardTitle>
                </CardHeader>
                <CardBody>
                  <ul className="list-unstyled team-members">
                    <li>
                      <Row>
                        <Col md="7" xs="7">
                          DJ Khaled <br />
                          <span className="text-muted">
                            <small>Atualizado</small>
                          </span>
                        </Col>
                        <Col className="text-right" md="3" xs="3">
                          <Button
                            className="btn-round btn-icon"
                            color="success"
                            outline
                            size="sm"
                          >
                            <i className="fa fa-check" />
                          </Button>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default User;
