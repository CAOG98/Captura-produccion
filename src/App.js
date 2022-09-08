// import React, { Component } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Container,
} from "reactstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";

function App() {
  const dataPaises = [{ id: 1, nombre: "Filipinas", minutos: 241 }];

  const [data, setData] = useState(dataPaises);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [paisSeleccionado, setPaisSeleccionado] = useState({
    id: "",
    nombre: "",
    minutos: "",
  });

  const hoy = new Date().toISOString();
  var arrFecha = hoy.split("T");

  const seleccionarPais = (elemento, caso) => {
    setPaisSeleccionado(elemento);
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaisSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const editar = () => {
    var dataNueva = data;
    dataNueva.map((pais) => {
      if (pais.id === paisSeleccionado.id) {
        pais.minutos = paisSeleccionado.minutos;
        pais.nombre = paisSeleccionado.nombre;
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  };

  const eliminar = () => {
    setData(data.filter((pais) => pais.id !== paisSeleccionado.id));
    setModalEliminar(false);
  };

  const abrirModalInsertar = () => {
    setPaisSeleccionado(null);
    setModalInsertar(true);
  };

  const insertar = () => {
    var valorInsertar = paisSeleccionado;
    valorInsertar.id = data[data.length - 1].id + 1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  };

  return (
    <div className="App">
      <Container className="App">
        <h1>Captura de datos PFC</h1>
        <div
          style={{
            display: "flex",
            flex: "wrap",
            justifyContent: "center",
          }}
        >
          <div className="form-group" >
            <label htmlFor="Vaciador">
              Vaciador:
              <input
                type="text"
                className="form-control"
                id="Vaciador"
                placeholder="Numero del vaciador"
                name="Vaciador"
              />
            </label>
          </div>

          <div className="form-group" style={{width:"15%"}}>
            <label htmlFor="Grupo">
              Grupo:
              <input
                type="text"
                className="form-control"
                placeholder="Grupo"
                id="Grupo"
                name="Grupo"
              />
            </label>
          </div>

          <div className="form-group room">
            <Form.Select className="mt-4" >
              <option>Selecciona la tecnología</option>
              <option value="1">TqPorvair</option>
              <option value="2">TqBu1</option>
              <option value="3">TqBu2</option>
              <option value="4">TqUnimak1</option>
              <option value="5">TqUnimak2</option>
              <option value="6">TpConvencional</option>
              <option value="7">TpUnimak</option>
              <option value="8">TpPorvair</option>
              <option value="9">TpUniver</option>
            </Form.Select>
          </div>

          <div className="form-group room">
            <label htmlFor="Fecha">
              Fecha:
              <input
                type="date"
                className="form-control"
                id="fecha"
                min={arrFecha[0]}
                name="fecha"
              />
            </label>
          </div>
        </div>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
          style={{ justifyContent: "center" }}
        >
          <Tab eventKey="Redondo" title="Redondo">
            <div className="inputs_TOTALBUENASs">
              <form className="form_TOTALBUENASs">
                <div
                  style={{
                    display: "flex",
                    flex: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <div className="form-group">
                    <label htmlFor="TOTALBUENAS">
                      TOTAL BUENAS:
                      <input
                        type="text"
                        className="form-control"
                        id="TOTALBUENAS"
                        name="TOTALBUENAS"
                        inputmode="numeric"
                      />
                    </label>
                  </div>

                  <div className="form-group">
                    <label htmlFor="G. INTERIOR">
                      G. INTERIOR:
                      <input
                        type="text"
                        className="form-control"
                        id="G.INTERIOR"
                        name="G.INTERIOR"
                        inputmode="numeric"
                      />
                    </label>
                  </div>

                  <div className="form-group room">
                    <label htmlFor="AGUADA">
                      AGUADA:
                      <input
                        type="text"
                        className="form-control"
                        id="AGUADA"
                        name="AGUADA"
                        inputmode="numeric"
                      />
                    </label>
                  </div>

                  <div className="form-group room">
                    <label htmlFor="LAMINADA">
                      LAMINADA:
                      <input
                        type="text"
                        className="form-control"
                        id="price"
                        name="LAMINADA"
                        inputmode="numeric"
                      />
                    </label>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div className="form-group">
                    <label htmlFor="PEGADO">
                      PEGADO:
                      <input
                        type="text"
                        className="form-control"
                        id="PEGADO"
                        name="PEGADO"
                        inputmode="numeric"
                      />
                    </label>
                  </div>

                  <div className="form-group">
                    <label htmlFor="DEFORME">
                      DEFORME:
                      <input
                        type="text"
                        className="form-control"
                        id="DEFORME"
                        name="DEFORME"
                        inputmode="numeric"
                      />
                    </label>
                  </div>

                  <div className="form-group room">
                    <label htmlFor="NO LLENA">
                      NO LLENA:
                      <input
                        type="text"
                        className="form-control"
                        id="NOLLENA"
                        name="NOLLENA"
                        inputmode="numeric"
                      />
                    </label>
                  </div>

                  <div className="form-group room">
                    <label htmlFor="PORO">
                      PORO:
                      <input
                        type="text"
                        className="form-control"
                        id="PORO"
                        name="PORO"
                        inputmode="numeric"
                      />
                    </label>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <div className="form-group">
                    <label htmlFor="DREN TAPADO">
                      DREN TAPADO:
                      <input
                        type="text"
                        className="form-control"
                        id="DRENTAPADO"
                        name="DRENTAPADO"
                        inputmode="numeric"
                      />
                    </label>
                  </div>
                </div>
                <div className="pax_btn">
                  <button type="submit" className="btn btn-primary">
                    Agregar
                  </button>
                </div>
              </form>
            </div>
          </Tab>
          <Tab eventKey="Alargada" title="Alargada">
            <div className="inputs_TOTALBUENASs">
              <form className="form_TOTALBUENASs">
                <div
                  style={{
                    display: "flex",
                    flex: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <div className="form-group">
                    <label htmlFor="TOTALBUENAS">
                      TOTAL BUENAS:
                      <input
                        type="text"
                        className="form-control"
                        id="TOTALBUENAS"
                        name="TOTALBUENAS"
                        inputmode="numeric"
                      />
                    </label>
                  </div>

                  <div className="form-group">
                    <label htmlFor="G. INTERIOR">
                      G. INTERIOR:
                      <input
                        type="text"
                        className="form-control"
                        id="G.INTERIOR"
                        name="G.INTERIOR"
                        inputmode="numeric"
                      />
                    </label>
                  </div>

                  <div className="form-group room">
                    <label htmlFor="AGUADA">
                      AGUADA:
                      <input
                        type="text"
                        className="form-control"
                        id="AGUADA"
                        name="AGUADA"
                        inputmode="numeric"
                      />
                    </label>
                  </div>

                  <div className="form-group room">
                    <label htmlFor="LAMINADA">
                      LAMINADA:
                      <input
                        type="text"
                        className="form-control"
                        id="LAMINADA"
                        name="LAMINADA"
                        inputmode="numeric"
                      />
                    </label>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div className="form-group">
                    <label htmlFor="PEGADO">
                      PEGADO:
                      <input
                        type="text"
                        className="form-control"
                        id="PEGADO"
                        name="PEGADO"
                        inputmode="numeric"
                      />
                    </label>
                  </div>

                  <div className="form-group">
                    <label htmlFor="DEFORME">
                      DEFORME:
                      <input
                        type="text"
                        className="form-control"
                        id="DEFORME"
                        name="DEFORME"
                        inputmode="numeric"
                      />
                    </label>
                  </div>

                  <div className="form-group room">
                    <label htmlFor="NO LLENA">
                      NO LLENA:
                      <input
                        type="text"
                        className="form-control"
                        id="NOLLENA"
                        name="NOLLENA"
                        inputmode="numeric"
                      />
                    </label>
                  </div>

                  <div className="form-group room">
                    <label htmlFor="PORO">
                      PORO:
                      <input
                        type="text"
                        className="form-control"
                        id="PORO"
                        name="PORO"
                        inputmode="numeric"
                      />
                    </label>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <div className="form-group">
                    <label htmlFor="DREN TAPADO">
                      DREN TAPADO:
                      <input
                        type="text"
                        className="form-control"
                        id="DRENTAPADO"
                        name="DRENTAPADO"
                        inputmode="numeric"
                      />
                    </label>
                  </div>
                </div>
                <div className="pax_btn">
                  <button type="submit" className="btn btn-primary">
                    Agregar
                  </button>
                </div>
              </form>
            </div>
          </Tab>
          <Tab eventKey="Maxwell" title="Maxwell">
            <div className="inputs_TOTALBUENASs">
              <form className="form_TOTALBUENASs">
                <div
                  style={{
                    display: "flex",
                    flex: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <div className="form-group">
                    <label htmlFor="TOTALBUENAS">
                      TOTALBUENAS:
                      <input
                        type="text"
                        className="form-control"
                        id="TOTALBUENAS"
                        name="TOTALBUENAS"
                        inputmode="numeric"
                      />
                    </label>
                  </div>

                  <div className="form-group">
                    <label htmlFor="G. INTERIOR">
                      G. INTERIOR:
                      <input
                        type="text"
                        className="form-control"
                        id="G.INTERIOR"
                        name="G.INTERIOR"
                        inputmode="numeric"
                      />
                    </label>
                  </div>

                  <div className="form-group room">
                    <label htmlFor="AGUADA">
                      AGUADA:
                      <input
                        type="text"
                        className="form-control"
                        id="AGUADA"
                        name="AGUADA"
                        inputmode="numeric"
                      />
                    </label>
                  </div>

                  <div className="form-group room">
                    <label htmlFor="LAMINADA">
                      LAMINADA:
                      <input
                        type="text"
                        className="form-control"
                        id="LAMINADA"
                        name="LAMINADA"
                        inputmode="numeric"
                      />
                    </label>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div className="form-group">
                    <label htmlFor="PEGADO">
                      PEGADO:
                      <input
                        type="text"
                        className="form-control"
                        id="PEGADO"
                        name="PEGADO"
                        inputmode="numeric"
                      />
                    </label>
                  </div>

                  <div className="form-group">
                    <label htmlFor="DEFORME">
                      DEFORME:
                      <input
                        type="text"
                        className="form-control"
                        id="DEFORME"
                        name="DEFORME"
                        inputmode="numeric"
                      />
                    </label>
                  </div>

                  <div className="form-group room">
                    <label htmlFor="NO LLENA">
                      NO LLENA:
                      <input
                        type="text"
                        className="form-control"
                        id="NOLLENA"
                        name="NOLLENA"
                        inputmode="numeric"
                      />
                    </label>
                  </div>

                  <div className="form-group room">
                    <label htmlFor="PORO">
                      PORO:
                      <input
                        type="text"
                        className="form-control"
                        id="PORO"
                        name="PORO"
                        inputmode="numeric"
                      />
                    </label>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <div className="form-group">
                    <label htmlFor="DREN TAPADO">
                      DREN TAPADO:
                      <input
                        type="text"
                        className="form-control"
                        id="DRENTAPADO"
                        name="DRENTAPADO"
                        inputmode="numeric"
                      />
                    </label>
                  </div>
                </div>
                <div className="pax_btn">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ marginBottom: "20px" }}
                  >
                    Agregar
                  </button>
                </div>
              </form>
            </div>
          </Tab>
        </Tabs>
      </Container>
      <hr style={{ height: "5px", color: "#000" }} />
      <h2>Registros de Vaciado</h2>
      <br />
      {/* <button className="btn btn-success" onClick={() => abrirModalInsertar()}>
        Insertar
      </button>
      <br />
      <br /> */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Ciclo</th>
            <th>Hora</th>
            <th>Modelo</th>
            <th>Total Malas</th>
            <th>G. Superior</th>
            <th>G. Interior</th>
            <th>Aguada</th>
            <th>Laminada</th>
            <th>Pegado</th>
            <th>No Llena</th>
            <th>Poro</th>
            <th>Dren Tapado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elemento) => (
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.nombre}</td>
              <td>{elemento.minutos}</td>
              <td>{elemento.minutos}</td>
              <td>{elemento.minutos}</td>
              <td>{elemento.minutos}</td>
              <td>{elemento.minutos}</td>
              <td>{elemento.minutos}</td>
              <td>{elemento.minutos}</td>
              <td>{elemento.minutos}</td>
              <td>{elemento.minutos}</td>
              <td>{elemento.minutos}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => seleccionarPais(elemento, "Editar")}
                >
                  Editar
                </button>{" "}
                {"   "}
                {/* <button
                  className="btn btn-danger"
                  onClick={() => seleccionarPais(elemento, "Eliminar")}
                >
                  Eliminar
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar País</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={paisSeleccionado && paisSeleccionado.id}
            />
            <br />

            <label>País</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={paisSeleccionado && paisSeleccionado.nombre}
              onChange={handleChange}
            />
            <br />

            <label>Minutos</label>
            <input
              className="form-control"
              type="text"
              name="minutos"
              value={paisSeleccionado && paisSeleccionado.minutos}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => editar()}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalEditar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Estás Seguro que deseas eliminar el país{" "}
          {paisSeleccionado && paisSeleccionado.nombre}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={() => eliminar()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar País</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={data[data.length - 1].id + 1}
            />
            <br />

            <label>País</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={paisSeleccionado ? paisSeleccionado.nombre : ""}
              onChange={handleChange}
            />
            <br />

            <label>Minutos</label>
            <input
              className="form-control"
              type="text"
              name="minutos"
              value={paisSeleccionado ? paisSeleccionado.minutos : ""}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => insertar()}>
            Insertar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalInsertar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;
