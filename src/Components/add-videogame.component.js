import React, { Component } from "react";
import VideogameDataService from "../services/videogame.service";

export default class AddVideogame extends Component {

    constructor(props) {
      super(props);
      this.onChangeName = this.onChangeName.bind(this);
      this.onChangedeveloper = this.onChangedeveloper.bind(this);
      this.onChangeDescription = this.onChangeDescription.bind(this);
      this.saveVideogame = this.saveVideogame.bind(this);
      this.newVideogame = this.newVideogame.bind(this);
  
      this.state = {
        name: '',
        developer: '', 
        description: '',
        img_url: "/",
        release_date: '2020-05-08',
        active: true,
        submitted: false
      };
    }

    onChangeName(e) {
        this.setState({
          name: e.target.value
        });
      }

      onChangedeveloper(e) {
        this.setState({
          developer: e.target.value
        });
      }
    
      onChangeDescription(e) {
        this.setState({
          description: e.target.value
        });
      }

      saveVideogame() {
        var data = {
          name: this.state.name,
          developer: this.state.developer,
          description: this.state.description,
          img_url: this.state.img_url,
          release_date: this.state.release_date,
          active: this.state.active,
        };
    
        VideogameDataService.create(data)
          .then(response => {
            this.setState({
              name: response.data.name,
              developer: response.data.developer,
              description: response.data.description,
              img_url: response.data.img_url,
              release_date: response.data.release_date,
              active: response.data.active,
              submitted: true
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    
      newVideogame() {
        this.setState({
          name: "",
          developer: "",
          description: "",
          submitted: false
        });
      }
    
      render() {
        return (
          <div className="submit-form">
            {this.state.submitted ? (
              <div>
                <h4>VideoJuego guardado correctamente</h4>
                <button className="btn btn-success" onClick={this.newVideogame}>
                  Agregar
                </button>
              </div> 
              ) : (

              <div>
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="name"
                    className="form-control"
                    id="name"
                    required
                    value={this.state.name}
                    onChange={this.onChangeName}
                    name="name"
                  />
                </div>
    
                <div className="form-group">
                  <label htmlFor="developer">Desarrolladora</label>
                  <input
                    type="text"
                    className="form-control"
                    id="developer" 
                    required
                    value={this.state.developer}
                    onChange={this.onChangedeveloper}
                    name="developer"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Descripción</label>
                  <textarea 
                    className="form-control" 
                    id="description" 
                    rows="3"
                    required
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    name="description"/>
                </div>

                <button onClick={this.saveVideogame} className="btn btn-success">
                  Guardar
                </button>
              </div>

            )}
          </div>
        );
      }
    }    
  
