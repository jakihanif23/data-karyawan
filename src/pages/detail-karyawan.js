import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

const DetailKaryawan = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const goBack = () => {
    navigate(-1);
  };
  const data = location.state;
  const {
    id,
    name,
    nip,
    jabatan,
    alamat,
    telp,
    email,
    foto,
    createdAt,
    createdBy,
  } = data;
  return (
    <div className="uk-align-center uk-text-center">
      <div className="uk-panel">
        <img src={foto} className="uk-border-circle img-sizing-rounded" />
        <h2 className="uk-text-bold">{name}</h2>
        <h3>{nip}</h3>
      </div>
      <div className="uk-column-1-3 uk-text-left uk-padding">
        <div>
          <p>Jabatan :</p>
          <h3>{jabatan}</h3>
        </div>
        <div>
          <p>Alamat :</p>
          <h3>{alamat}</h3>
        </div>
        <div>
          <p>Nomor Telpon :</p>
          <h3>{telp}</h3>
        </div>
        <div>
          <p>Email :</p>
          <h3>{email}</h3>
        </div>
        <div>
          <p>Created At :</p>
          <h3>{createdAt}</h3>
        </div>
        <div>
          <p>Created By :</p>
          <h3>{createdBy}</h3>
        </div>
      </div>
      <button
        onClick={goBack}
        className="uk-button uk-button-primary uk-border-rounded"
      >
        Go Back
      </button>
    </div>
  );
};
export default DetailKaryawan;
