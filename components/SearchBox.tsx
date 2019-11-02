import React from "react";

class SearchBox extends React.Component {
  onSearchCountry() {}
  render() {
    return (
      <div>
        <style jsx global>{`
            .searchBox {
                height: 300px;
                display: flex;
                align-items: center;
                background-image: url('https://images.pexels.com/photos/999068/pexels-photo-999068.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
                justify-content: center;
                background-position: center center;
                background-repeat: no-repeat;
                background-size: cover
            }

            .formContainer {
                flex-direction: column;
                background-color: white;
                padding: 30px;
                width: 80%;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            input {
                height: 40px;
                font-size: 16px;
                margin: 5px;
                margin-bottom: 20px;
                padding-left: 10px;
                border-radius: 4px;
                color: #58595f;
                outline: 0;
                border: solid 1px;
                transition: background-color 0.2s ease;
            }

            input[type=text] {
                width: 220px;
            }

            input:focus {
                background-color: white;
            }

            button{
                width: 100%;
                height: 40px;
                border-radius: 5px;
                background-color: #f44336;
                color: white;
                font-size: 18px;
                cursor: pointer;
                outline:0px;
                border: 0;
            }
           
        }
    `}</style>
        <section className="searchBox">
          <form action="" className="formContainer">
            <section className="title">
              <h2>Encuentra tu van rápido y facil</h2>
            </section>
            <section className="container-inputs">
              <input type="text" placeholder="Origen" />
              <input type="text" placeholder="Destino" />
              <input type="date" placeholder="Fecha de salida" />
              <input type="date" placeholder="Fecha de regreso" />
            </section>
            <button>Buscar</button>
          </form>
        </section>
      </div>
    );
  }
}

export default SearchBox;
