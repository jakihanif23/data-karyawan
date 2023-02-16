import React from "react";

const FormKontak = () => {
  return (
    <div className="uk-section">
      <div className="uk-container uk-column-1-2@l">
        <div className="uk-grid-match uk-child-width-1-2@xl" uk-grid>
          <div className="uk-section-muted uk-padding">
            <h3>Form Kontak</h3>
            <form className="uk-form-stacked">
              <div className="">
                <label className="uk-form-label" htmlFor="name">
                  Nama
                </label>
                <div className="uk-form-controls uk-form-width-large">
                  <input
                    className="uk-input"
                    id="name"
                    type="text"
                    placeholder="Nama"
                  />
                </div>
              </div>

              <div className="">
                <label className="uk-form-label" htmlFor="email">
                  Alamat Email
                </label>
                <div className="uk-form-controls uk-form-width-large">
                  <input
                    className="uk-input"
                    id="email"
                    type="email"
                    placeholder="Alamat Email"
                  />
                </div>
              </div>

              <div className="">
                <label className="uk-form-label" htmlFor="pesan">
                  Pesan
                </label>
                <div className="uk-form-controls">
                  <textarea
                    rows="5"
                    className="uk-text-area uk-form-width-large uk-form-height-medium"
                    id="pesan"
                    type="text"
                  />
                </div>
              </div>
              <button className="uk-button uk-button-primary uk-border-rounded">Submit</button>
            </form>
          </div>
          <div className="uk-section-primary uk-padding">
            <h3>Identitas Diri</h3>
            <form>
              <div className="uk-column-1-2@m">
                <label className="uk-form-label" htmlFor="name">
                  Posisi Yang Dilamar
                </label>
                <h4>Fullstack Developer</h4>
              </div>

              <div className="uk-column-1-2@m ">
                <label className="uk-form-label" htmlFor="name">
                  Nama
                </label>
                <h4>Zaky Hanif Testandy</h4>
              </div>

              <div className="uk-column-1-2@m ">
                <label className="uk-form-label" htmlFor="email">
                  Alamat
                </label>
                <h4>Griya Asri 2 Blok E8 No.29 Tambun Selatan, Kab.Bekasi</h4>
              </div>

              <div className="uk-column-1-2@m">
                <label className="uk-form-label" htmlFor="pesan">
                  No. Telp
                </label>
                <h4>08128106497</h4>
              </div>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormKontak;
